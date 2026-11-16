export type ConversionEventName =
  | 'cta_maklon_click'
  | 'cta_product_quote_click'
  | 'whatsapp_open'
  | 'lead_form_submitted';

export interface ConversionEventPayload {
  event: ConversionEventName;
  source: string;
  inquiryType?: 'Maklon' | 'Pemesanan Susu Bubuk';
  channel?: 'form' | 'whatsapp' | 'route';
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Mengukur peristiwa konversi B2B tanpa pernah menyimpan atau mengirim data pribadi
 * (nama, nomor WhatsApp, email, maupun isi pesan) ke lapisan analitik.
 */
export function trackConversionEvent(payload: ConversionEventPayload): void {
  if (typeof window === 'undefined') return;

  const cleanEvent: Record<string, unknown> = {
    event: payload.event,
    source: payload.source,
    timestamp: new Date().toISOString(),
  };

  if (payload.inquiryType) cleanEvent.inquiryType = payload.inquiryType;
  if (payload.channel) cleanEvent.channel = payload.channel;

  try {
    window.dispatchEvent(new CustomEvent('bmmf:conversion', { detail: cleanEvent }));
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(cleanEvent);
    }
  } catch {
    // Abaikan kegagalan analitik agar tidak mengganggu alur utama pengguna.
  }
}
