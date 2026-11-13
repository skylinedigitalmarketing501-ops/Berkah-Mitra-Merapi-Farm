import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { companyConfig, getWhatsAppMaklonUrl, getWhatsAppProductUrl } from '../config/company';
import { primaryNavigation } from '../data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102B24] text-white border-t border-[#183D32]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Kolom 1: Logo & Deskripsi Singkat */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0">
                <img
                  src={companyConfig.logo.src}
                  alt={companyConfig.logo.alt}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </span>
              <div>
                <p className="font-display font-bold text-base tracking-tight text-white">
                  {companyConfig.webName}
                </p>
                <p className="text-xs text-[#D3B785]">{companyConfig.officialName}</p>
              </div>
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Perusahaan industri pengolahan susu bubuk dan mitra maklon susu kambing Etawa bubuk
              yang berfokus pada ketertiban proses, mutu produk, dan kerja sama B2B berkelanjutan.
            </p>
            <p className="text-xs text-white/55">
              Domain Referensi: {companyConfig.domain}
            </p>
          </div>

          {/* Kolom 2: Navigasi Utama */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-semibold text-white mb-4">
              Navigasi Utama
            </h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              {primaryNavigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#D3B785] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Operasional & Lokasi */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white">
              Operasional & Lokasi
            </h2>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D3B785] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white text-xs mb-0.5">
                    {companyConfig.locations.office.title}
                  </p>
                  <p className="text-xs leading-relaxed">
                    {companyConfig.locations.office.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D3B785] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white text-xs mb-0.5">
                    {companyConfig.locations.production.title}
                  </p>
                  <p className="text-xs leading-relaxed">
                    {companyConfig.locations.production.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom 4: Kontak & Konsultasi Bisnis */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white">
              Kontak & Kemitraan B2B
            </h2>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={getWhatsAppMaklonUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#D3B785] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D3B785] shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{companyConfig.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-[#D3B785] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#D3B785] shrink-0" aria-hidden="true" />
                  <span>{companyConfig.contact.email}</span>
                </a>
              </li>
              <li className="pt-1 space-y-1.5">
                <a
                  href={getWhatsAppMaklonUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#D3B785] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Konsultasi Maklon</span>
                </a>
                <br />
                <a
                  href={getWhatsAppProductUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-[#D3B785] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Pemesanan Susu Bubuk</span>
                </a>
              </li>
            </ul>
            {companyConfig.socialLinks.length === 0 && (
              <p className="text-xs text-white/50 leading-relaxed pt-1">
                Kanal media sosial resmi perusahaan akan ditautkan setelah verifikasi akun.
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} {companyConfig.officialName}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/kebijakan-privasi" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/ketentuan-penggunaan" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
