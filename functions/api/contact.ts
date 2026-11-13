import type { PagesContext } from '../_types';

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

function generateReferenceId(): string {
  const bytes = new Uint8Array(3);
  crypto.getRandomValues(bytes);
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
  return `BMMF-B2B-${hex}`;
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const { request, env } = context;

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return Response.json(
        { ok: false, message: 'Format data permintaan tidak valid.' },
        { status: 400 }
      );
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return Response.json(
      { ok: false, message: 'Payload JSON tidak dapat dibaca.' },
      { status: 400 }
    );
  }

  // Honeypot anti-spam check
  const honeypot = sanitizeText(body.website_url, 100);
  if (honeypot.length > 0) {
    return Response.json({
      ok: true,
      referenceId: `BMMF-B2B-${Date.now().toString(36).toUpperCase()}`,
      message: 'Permintaan Anda telah diproses.',
    });
  }

  const fullName = sanitizeText(body.fullName, 120);
  const companyName = sanitizeText(body.companyName, 140);
  const whatsapp = sanitizeText(body.whatsapp, 30);
  const email = sanitizeText(body.email, 160).toLowerCase();
  const inquiryType = sanitizeText(body.inquiryType, 60);
  const productInterest = sanitizeText(body.productInterest, 160);
  const estimatedVolume = sanitizeText(body.estimatedVolume, 120);
  const packagingPreference = sanitizeText(body.packagingPreference, 120);
  const message = sanitizeText(body.message, 2500);
  const privacyConsent = body.privacyConsent === true;

  const allowedTypes = ['Maklon', 'Pemesanan Susu Bubuk'];

  if (fullName.length < 2) {
    return Response.json(
      { ok: false, message: 'Nama lengkap wajib diisi minimal 2 karakter.' },
      { status: 400 }
    );
  }
  if (companyName.length < 2) {
    return Response.json(
      { ok: false, message: 'Nama usaha atau perusahaan wajib diisi.' },
      { status: 400 }
    );
  }
  if (!isValidPhone(whatsapp)) {
    return Response.json(
      { ok: false, message: 'Nomor WhatsApp wajib valid (minimal 9 digit).' },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return Response.json(
      { ok: false, message: 'Format alamat email tidak valid.' },
      { status: 400 }
    );
  }
  if (!allowedTypes.includes(inquiryType)) {
    return Response.json(
      {
        ok: false,
        message: 'Jenis kebutuhan wajib dipilih (Maklon atau Pemesanan Susu Bubuk).',
      },
      { status: 400 }
    );
  }
  if (productInterest.length < 2) {
    return Response.json(
      { ok: false, message: 'Jenis produk yang diminati wajib diisi.' },
      { status: 400 }
    );
  }
  if (message.length < 10) {
    return Response.json(
      {
        ok: false,
        message: 'Catatan kebutuhan minimal 10 karakter agar tim kami dapat menyiapkan respons yang tepat.',
      },
      { status: 400 }
    );
  }
  if (!privacyConsent) {
    return Response.json(
      {
        ok: false,
        message: 'Anda wajib menyetujui pemrosesan data sesuai Kebijakan Privasi BMMF.',
      },
      { status: 400 }
    );
  }

  const referenceId = generateReferenceId();
  const submittedAt = new Date().toISOString();
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
    submittedAt,
  };

  let kvSaved = false;
  if (env.INQUIRIES_KV) {
    try {
      await env.INQUIRIES_KV.put(`inquiry:${submittedAt}:${referenceId}`, JSON.stringify(record), {
        metadata: { referenceId, inquiryType, companyName, submittedAt },
      });
      kvSaved = true;
    } catch {
      kvSaved = false;
    }
  }

  let webhookDelivered = false;
  if (env.CONTACT_NOTIFICATION_WEBHOOK_URL) {
    try {
      const webhookRes = await fetch(env.CONTACT_NOTIFICATION_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'b2b_quotation_request',
          ...record,
        }),
      });
      webhookDelivered = webhookRes.ok;
    } catch {
      webhookDelivered = false;
    }
  }

  let emailDelivered = false;
  if (env.RESEND_API_KEY) {
    const recipient = env.CONTACT_EMAIL_TO || 'berkahmitramf@gmail.com';
    const sender = env.CONTACT_EMAIL_FROM || 'Berkah Mitra Merapi Farm <onboarding@resend.dev>';
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: email,
          subject: `[${referenceId}] Permintaan ${inquiryType} — ${companyName}`,
          text: [
            `Kode Referensi: ${referenceId}`,
            `Waktu Kirim: ${submittedAt}`,
            `Jenis Kebutuhan: ${inquiryType}`,
            `Nama Lengkap: ${fullName}`,
            `Perusahaan: ${companyName}`,
            `WhatsApp: ${whatsapp}`,
            `Email: ${email}`,
            `Produk Diminati: ${productInterest}`,
            `Estimasi Volume: ${estimatedVolume || '-'}`,
            `Preferensi Kemasan: ${packagingPreference || '-'}`,
            '',
            'Catatan Kebutuhan:',
            message,
          ].join('\n'),
        }),
      });
      emailDelivered = resendRes.ok;
    } catch {
      emailDelivered = false;
    }
  }

  const hasNotificationChannel = kvSaved || webhookDelivered || emailDelivered;
  if (!hasNotificationChannel) {
    console.log('BMMF B2B inquiry received (no KV/Webhook/Resend configured):', JSON.stringify(record));
  }

  return Response.json(
    {
      ok: true,
      referenceId,
      kvSaved,
      webhookDelivered,
      emailDelivered,
      message: hasNotificationChannel
        ? 'Permintaan penawaran Anda telah diterima dan diteruskan ke sistem BMMF. Tim kami akan menghubungi Anda melalui WhatsApp atau email resmi.'
        : 'Permintaan penawaran Anda telah divalidasi dengan kode referensi di bawah. Untuk respons lebih cepat, silakan lanjutkan konfirmasi ringkasan melalui tombol WhatsApp bisnis kami.',
    },
    { status: 201 }
  );
}
