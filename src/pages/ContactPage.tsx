import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { buildWhatsAppUrl, companyConfig } from '../config/company';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { Reveal } from '../components/MotionPrimitives';

const inquiryOptions = ['Maklon', 'Pemesanan Susu Bubuk'] as const;

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialNeed = searchParams.get('kebutuhan');
  const initialProduct = searchParams.get('produk');

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState<string>(
    initialNeed === 'Pemesanan Susu Bubuk' ? 'Pemesanan Susu Bubuk' : 'Maklon'
  );
  const [productInterest, setProductInterest] = useState(
    initialProduct || 'Susu Kambing Etawa Bubuk'
  );
  const [estimatedVolume, setEstimatedVolume] = useState('');
  const [packagingPreference, setPackagingPreference] = useState('');
  const [message, setMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    ok: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  useEffect(() => {
    if (initialNeed === 'Pemesanan Susu Bubuk' || initialNeed === 'Maklon') {
      setInquiryType(initialNeed);
    }
    if (initialProduct) {
      setProductInterest(initialProduct);
    }
  }, [initialNeed, initialProduct]);

  const formattedWhatsAppSummary = [
    inquiryType === 'Maklon'
      ? 'Halo, tim BMMF. Saya tertarik untuk berkonsultasi mengenai layanan maklon susu bubuk.'
      : 'Halo, tim BMMF. Saya ingin menanyakan informasi produk susu bubuk dan melakukan permintaan penawaran.',
    '',
    `Nama Lengkap: ${fullName || '-'}`,
    `Nama Usaha/Perusahaan: ${companyName || '-'}`,
    `WhatsApp: ${whatsapp || '-'}`,
    `Email: ${email || '-'}`,
    `Jenis Kebutuhan: ${inquiryType}`,
    `Produk yang Diminati: ${productInterest || '-'}`,
    estimatedVolume ? `Perkiraan Jumlah Pemesanan: ${estimatedVolume}` : null,
    packagingPreference ? `Pilihan Kemasan: ${packagingPreference}` : null,
    '',
    'Catatan Kebutuhan:',
    message || 'Mohon informasi lebih lanjut mengenai prosedur dan penawaran.',
  ]
    .filter((line): line is string => line !== null)
    .join('\n');

  const whatsappDirectHref = buildWhatsAppUrl(formattedWhatsAppSummary);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitResult(null);

    if (!privacyConsent) {
      setSubmitResult({
        ok: false,
        message: 'Harap centang persetujuan pemrosesan data sebelum mengirimkan permintaan.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          companyName,
          whatsapp,
          email,
          inquiryType,
          productInterest,
          estimatedVolume,
          packagingPreference,
          message,
          privacyConsent,
          website_url: honeypot,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setSubmitResult({
          ok: false,
          message: data.message || 'Gagal mengirim permintaan penawaran. Periksa kembali isian Anda.',
        });
      } else {
        setSubmitResult({
          ok: true,
          message: data.message,
          referenceId: data.referenceId,
        });
        setFullName('');
        setCompanyName('');
        setWhatsapp('');
        setEmail('');
        setEstimatedVolume('');
        setPackagingPreference('');
        setMessage('');
        setPrivacyConsent(false);
      }
    } catch {
      setSubmitResult({
        ok: false,
        message:
          'Terjadi kendala koneksi ke server. Anda tetap dapat mengirimkan ringkasan permintaan langsung melalui WhatsApp resmi BMMF.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Kontak & Permintaan Penawaran B2B — Berkah Mitra Merapi Farm"
        description="Formulir permintaan penawaran layanan maklon susu bubuk dan pemesanan produk susu kambing Etawa bubuk resmi Berkah Mitra Merapi Farm."
        path="/kontak"
        breadcrumbs={[{ name: 'Kontak', path: '/kontak' }]}
      />

      {/* Header */}
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-12 sm:py-16">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: 'Kontak' }]} />
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
            PERMINTAAN PENAWARAN & KONSULTASI B2B
          </p>
          <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[50px]">
            Hubungi Tim Bisnis BMMF
          </h1>
          <p className="text-base sm:text-lg text-[#27312D] max-w-2xl leading-relaxed">
            Ajukan konsultasi layanan maklon atau permintaan penawaran produk susu bubuk melalui
            formulir resmi maupun WhatsApp bisnis kami.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Kolom Kiri: Info Perusahaan & Lokasi */}
            <div id="lokasi" className="lg:col-span-5 space-y-6 scroll-mt-24">
              <Reveal className="border border-[#E3E8E3] rounded-2xl p-6 sm:p-8 space-y-6 bg-[#F5F3ED]/60">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E3E8E3] p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={companyConfig.logo.src}
                      alt={companyConfig.logo.alt}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#737D77]">
                      IDENTITAS & KONTAK RESMI
                    </p>
                    <h2 className="font-display font-bold text-lg sm:text-xl text-[#183D32] mt-0.5">
                      {companyConfig.officialName}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-[#27312D]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#183D32] shrink-0 mt-1" aria-hidden="true" />
                    <div className="space-y-1">
                      <p className="font-semibold text-[#183D32]">
                        {companyConfig.locations.office.title}
                      </p>
                      <p className="text-[#737D77] leading-relaxed">
                        {companyConfig.locations.office.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#183D32] shrink-0 mt-1" aria-hidden="true" />
                    <div className="space-y-1">
                      <p className="font-semibold text-[#183D32]">
                        {companyConfig.locations.production.title}
                      </p>
                      <p className="text-[#737D77] leading-relaxed">
                        {companyConfig.locations.production.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-[#E3E8E3]">
                    <Phone className="w-4 h-4 text-[#183D32] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#183D32]">WhatsApp Bisnis</p>
                      <a
                        href={`https://wa.me/${companyConfig.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#27312D] hover:text-[#183D32] hover:underline tabular-nums"
                      >
                        {companyConfig.contact.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#183D32] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#183D32]">Email Perusahaan</p>
                      <a
                        href={`mailto:${companyConfig.contact.email}`}
                        className="text-[#27312D] hover:text-[#183D32] hover:underline break-all"
                      >
                        {companyConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#183D32] shrink-0 mt-1" aria-hidden="true" />
                    <div className="space-y-1">
                      <p className="font-semibold text-[#183D32]">Jam Operasional (Referensi)</p>
                      <p className="text-[#27312D]">{companyConfig.contact.operationalHours}</p>
                      <p className="text-xs text-[#737D77]">
                        {companyConfig.contact.operationalHoursNote}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={0.06}
                className="border border-[#E3E8E3] rounded-2xl p-6 sm:p-7 space-y-4 bg-white"
              >
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#737D77]">
                    PETA & VERIFIKASI LOKASI
                  </p>
                  <p className="text-sm text-[#27312D] leading-relaxed">
                    Lokasi kantor di Sawangan, Kab. Magelang telah dilengkapi tautan rute Google
                    Maps terverifikasi. Untuk kunjungan kerja sama, mohon konfirmasikan jadwal
                    pertemuan terlebih dahulu:
                  </p>
                </div>

                {companyConfig.locations.office.coordinates && (
                  <div className="overflow-hidden rounded-xl border border-[#E3E8E3] bg-[#F5F3ED]">
                    <iframe
                      title="Peta Lokasi Kantor Berkah Mitra Merapi Farm di Sawangan, Magelang"
                      src={`https://maps.google.com/maps?q=${companyConfig.locations.office.coordinates.lat},${companyConfig.locations.office.coordinates.lng}&z=16&output=embed`}
                      className="w-full h-48 border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2.5 pt-1">
                  <a
                    href={companyConfig.locations.office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between px-4 py-3 rounded-xl border border-[#E3E8E3] text-xs font-medium text-[#183D32] hover:bg-[#F5F3ED] transition-colors"
                  >
                    <span>Kantor: Sawangan, Kab. Magelang (Buka Google Maps)</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    href={companyConfig.locations.production.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between px-4 py-3 rounded-xl border border-[#E3E8E3] text-xs font-medium text-[#183D32] hover:bg-[#F5F3ED] transition-colors"
                  >
                    <span>Produksi: Turi, Kab. Sleman (Cari Wilayah)</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Kolom Kanan: Formulir Permintaan Penawaran B2B */}
            <Reveal
              delay={0.08}
              className="lg:col-span-7 border border-[#E3E8E3] rounded-2xl p-6 sm:p-9 lg:p-10 bg-white"
            >
              <div className="space-y-2 mb-7 pb-5 border-b border-[#E3E8E3]">
                <h2 className="font-display font-bold text-2xl text-[#183D32]">
                  Formulir Permintaan Penawaran
                </h2>
                <p className="text-sm text-[#737D77]">
                  Lengkapi detail kebutuhan bisnis Anda agar tim kami dapat menyiapkan informasi dan
                  langkah tindak lanjut yang relevan.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="b2b-website-url">Website</label>
                  <input
                    id="b2b-website-url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="b2b-fullname"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Nama Lengkap <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="b2b-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="b2b-company"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Nama Usaha / Perusahaan <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="b2b-company"
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="PT / CV / Nama Merek Usaha"
                      className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="b2b-whatsapp"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Nomor WhatsApp <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="b2b-whatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="b2b-email"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Email <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="b2b-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@perusahaan.com"
                      className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="b2b-inquiry-type"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Jenis Kebutuhan <span className="text-red-700">*</span>
                    </label>
                    <select
                      id="b2b-inquiry-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    >
                      {inquiryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="b2b-product-interest"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Jenis Produk yang Diminati <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="b2b-product-interest"
                      type="text"
                      required
                      value={productInterest}
                      onChange={(e) => setProductInterest(e.target.value)}
                      placeholder="Contoh: Susu Kambing Etawa Bubuk"
                      className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="b2b-volume"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Perkiraan Jumlah Pemesanan{' '}
                      <span className="text-[#737D77] font-normal">(opsional)</span>
                    </label>
                    <input
                      id="b2b-volume"
                      type="text"
                      value={estimatedVolume}
                      onChange={(e) => setEstimatedVolume(e.target.value)}
                      placeholder="Contoh: 500 kg / 1.000 pcs per bulan"
                      className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="b2b-packaging"
                      className="block text-sm font-medium text-[#27312D] mb-1.5"
                    >
                      Pilihan Kemasan{' '}
                      <span className="text-[#737D77] font-normal">(opsional)</span>
                    </label>
                    <input
                      id="b2b-packaging"
                      type="text"
                      value={packagingPreference}
                      onChange={(e) => setPackagingPreference(e.target.value)}
                      placeholder="Contoh: Pouch aluminium / box / bulk"
                      className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="b2b-message"
                    className="block text-sm font-medium text-[#27312D] mb-1.5"
                  >
                    Catatan Kebutuhan <span className="text-red-700">*</span>
                  </label>
                  <textarea
                    id="b2b-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Jelaskan rencana produk, target pasar, jadwal diskusi yang diharapkan, atau pertanyaan Anda..."
                    className="w-full px-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="b2b-privacy-consent"
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#183D32] rounded"
                  />
                  <label
                    htmlFor="b2b-privacy-consent"
                    className="text-xs text-[#737D77] leading-relaxed"
                  >
                    Saya menyetujui pemrosesan data kontak dan ringkasan kebutuhan usaha saya untuk
                    keperluan tindak lanjut penawaran bisnis sesuai{' '}
                    <Link to="/kebijakan-privasi" className="text-[#183D32] underline">
                      Kebijakan Privasi BMMF
                    </Link>
                    .
                  </label>
                </div>

                {submitResult && (
                  <div
                    role="status"
                    className={`p-4 rounded-xl border text-sm flex items-start gap-3 ${
                      submitResult.ok
                        ? 'bg-[#F5F3ED] border-[#183D32]/30 text-[#183D32]'
                        : 'bg-red-50 border-red-200 text-red-900'
                    }`}
                  >
                    {submitResult.ok ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div className="space-y-1">
                      <p className="font-medium">{submitResult.message}</p>
                      {submitResult.referenceId && (
                        <p className="font-mono text-xs">
                          Kode Referensi: {submitResult.referenceId}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] disabled:opacity-60 rounded-[10px] transition-colors whitespace-nowrap"
                  >
                    <Send className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
                    <span>
                      {submitting ? 'Mengirim Permintaan...' : 'Kirim Permintaan Penawaran'}
                    </span>
                  </button>

                  <a
                    href={whatsappDirectHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#183D32] bg-[#F5F3ED] hover:bg-[#ebe7dc] border border-[#E3E8E3] rounded-[10px] transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    <span>Kirim Ringkasan via WhatsApp</span>
                  </a>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
