import type { PagesContext } from './_types';

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

export function onRequestGet(context: PagesContext): Response {
  const url = new URL(context.request.url);
  const baseUrl = (context.env.APP_URL || url.origin).replace(/\/$/, '');
  const allPaths = [...STATIC_ROUTES, ...ARTICLE_SLUGS.map((slug) => `/artikel/${slug}`)];
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = allPaths
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === '/' || route === '/artikel' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
