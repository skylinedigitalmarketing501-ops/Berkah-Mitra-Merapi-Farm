import 'dotenv/config';
import express, { type Request, type Response, type NextFunction } from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { createServer as createViteServer } from 'vite';

const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const SUBMISSIONS_DIR = path.join(DATA_DIR, 'submissions');

async function ensureStorageDirectories() {
  await fs.mkdir(SUBMISSIONS_DIR, { recursive: true });
}

// Simple in-memory sliding-window rate limiter per IP
const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 12;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter((ts) => now - ts < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_MAX_REQUESTS) {
    rateLimitMap.set(ip, timestamps);
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

function sanitizeText(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^\d+]/g, '');
  return digits.length >= 9 && digits.length <= 18;
}

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

async function dispatchOptionalWebhook(
  envKey: string,
  payload: Record<string, unknown>
): Promise<boolean> {
  const webhookUrl = process.env[envKey];
  if (!webhookUrl) return false;
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}

const STATIC_ROUTES = [
  '/',
  '/tentang-kami',
  '/layanan-maklon',
  '/produk-susu-bubuk',
  '/proses-produksi',
  '/kualitas',
  '/artikel',
  '/kontak',
  '/kebijakan-privasi',
  '/ketentuan-penggunaan',
];

const ARTICLE_SLUGS = [
  'pentingnya-ketertiban-proses-dalam-pengolahan-susu-etawa-bubuk',
  'memahami-karakteristik-susu-kambing-etawa-dalam-bentuk-bubuk',
  'peran-disiplin-kerja-dan-sanitasi-tim-produksi-pangan',
  'persiapan-awal-menjalin-kemitraan-distribusi-dan-pengadaan-produk-susu-bubuk',
  'mengenal-struktur-operasional-kantor-dan-lokasi-produksi-bmmf',
  'langkah-mempersiapkan-merek-produk-susu-bubuk-melalui-layanan-maklon',
];

async function startServer() {
  await ensureStorageDirectories();

  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '100kb' }));

  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true, service: 'bmmf-b2b-corporate-web', timestamp: new Date().toISOString() });
  });

  // Legacy URL redirects (301)
  app.get('/produk-layanan', (_req: Request, res: Response) => {
    res.redirect(301, '/produk-susu-bubuk');
  });

  // Removed recruitment API endpoint returns 410 Gone
  app.post('/api/careers/apply', (_req: Request, res: Response) => {
    res.status(410).json({
      ok: false,
      message: 'Fitur rekrutmen tidak lagi tersedia pada situs ini.',
    });
  });

  // Dynamic robots.txt
  app.get('/robots.txt', (req: Request, res: Response) => {
    const baseUrl =
      process.env.APP_URL || `${req.protocol}://${req.get('host') || 'www.berkahmitramerapifarm.com'}`;
    const normalizedBase = baseUrl.replace(/\/$/, '');
    res.type('text/plain');
    res.send(
      `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /karier\n\nSitemap: ${normalizedBase}/sitemap.xml\n`
    );
  });

  // Dynamic sitemap.xml (excluding removed /karier URL)
  app.get('/sitemap.xml', (req: Request, res: Response) => {
    const baseUrl =
      process.env.APP_URL || `${req.protocol}://${req.get('host') || 'www.berkahmitramerapifarm.com'}`;
    const normalizedBase = baseUrl.replace(/\/$/, '');
    const allPaths = [...STATIC_ROUTES, ...ARTICLE_SLUGS.map((slug) => `/artikel/${slug}`)];
    const lastmod = new Date().toISOString().split('T')[0];

    const urls = allPaths
      .map(
        (route) => `  <url>
    <loc>${normalizedBase}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === '/' || route === '/artikel' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
      )
      .join('\n');

    res.type('application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`);
  });

  // B2B Inquiry & Quotation Request Endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      res.status(429).json({
        ok: false,
        message: 'Terlalu banyak permintaan dalam waktu singkat. Silakan coba kembali beberapa menit lagi.',
      });
      return;
    }

    // Honeypot anti-spam check
    const honeypot = sanitizeText(req.body?.website_url, 100);
    if (honeypot.length > 0) {
      res.status(200).json({
        ok: true,
        referenceId: `BMMF-B2B-${Date.now().toString(36).toUpperCase()}`,
        message: 'Permintaan Anda telah diproses.',
      });
      return;
    }

    const fullName = sanitizeText(req.body?.fullName, 120);
    const companyName = sanitizeText(req.body?.companyName, 140);
    const whatsapp = sanitizeText(req.body?.whatsapp, 30);
    const email = sanitizeText(req.body?.email, 160).toLowerCase();
    const inquiryType = sanitizeText(req.body?.inquiryType, 60);
    const productInterest = sanitizeText(req.body?.productInterest, 160);
    const estimatedVolume = sanitizeText(req.body?.estimatedVolume, 120);
    const packagingPreference = sanitizeText(req.body?.packagingPreference, 120);
    const message = sanitizeText(req.body?.message, 2500);
    const privacyConsent = req.body?.privacyConsent === true;

    const allowedTypes = ['Maklon', 'Pemesanan Susu Bubuk'];

    if (fullName.length < 2) {
      res.status(400).json({ ok: false, message: 'Nama lengkap wajib diisi minimal 2 karakter.' });
      return;
    }
    if (companyName.length < 2) {
      res.status(400).json({ ok: false, message: 'Nama usaha atau perusahaan wajib diisi.' });
      return;
    }
    if (!isValidPhone(whatsapp)) {
      res.status(400).json({ ok: false, message: 'Nomor WhatsApp wajib valid (minimal 9 digit).' });
      return;
    }
    if (!isValidEmail(email)) {
      res.status(400).json({ ok: false, message: 'Format alamat email tidak valid.' });
      return;
    }
    if (!allowedTypes.includes(inquiryType)) {
      res.status(400).json({
        ok: false,
        message: 'Jenis kebutuhan wajib dipilih (Maklon atau Pemesanan Susu Bubuk).',
      });
      return;
    }
    if (productInterest.length < 2) {
      res.status(400).json({ ok: false, message: 'Jenis produk yang diminati wajib diisi.' });
      return;
    }
    if (message.length < 10) {
      res.status(400).json({
        ok: false,
        message: 'Catatan kebutuhan minimal 10 karakter agar tim kami dapat menyiapkan respons yang tepat.',
      });
      return;
    }
    if (!privacyConsent) {
      res.status(400).json({
        ok: false,
        message: 'Anda wajib menyetujui pemrosesan data sesuai Kebijakan Privasi BMMF.',
      });
      return;
    }

    const referenceId = `BMMF-B2B-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const record = {
      referenceId,
      fullName,
      companyName,
      whatsapp,
      email,
      inquiryType,
      productInterest,
      estimatedVolume: estimatedVolume || null,
      packagingPreference: packagingPreference || null,
      message,
      privacyConsent: true,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fs.appendFile(
        path.join(SUBMISSIONS_DIR, 'inquiries.jsonl'),
        `${JSON.stringify(record)}\n`,
        'utf-8'
      );

      const webhookDelivered = await dispatchOptionalWebhook('CONTACT_NOTIFICATION_WEBHOOK_URL', {
        type: 'b2b_quotation_request',
        ...record,
      });

      res.status(201).json({
        ok: true,
        referenceId,
        webhookDelivered,
        message:
          'Permintaan penawaran Anda telah diterima dan tercatat oleh sistem BMMF. Tim kami akan menghubungi Anda melalui WhatsApp atau email resmi.',
      });
    } catch {
      res.status(500).json({
        ok: false,
        message:
          'Terjadi kendala saat menyimpan permintaan penawaran. Silakan hubungi tim kami langsung melalui WhatsApp bisnis.',
      });
    }
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir, { maxAge: '7d' }));
    // Return 410 Gone status with rendered SPA notice for removed /karier URL
    app.get('/karier', (_req: Request, res: Response) => {
      res.status(410).sendFile(path.join(distDir, 'index.html'));
    });
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BMMF server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start BMMF server:', err);
  process.exit(1);
});
