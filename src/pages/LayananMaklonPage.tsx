import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, MessageSquare } from 'lucide-react';
import { companyConfig, getWhatsAppMaklonUrl } from '../config/company';
import {
  maklonFaqs,
  maklonTargetPartners,
  maklonTimelineSteps,
} from '../data/products';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { Reveal } from '../components/MotionPrimitives';
import { trackConversionEvent } from '../utils/analytics';

export function LayananMaklonPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <SeoHead
        title="Layanan Maklon Susu Bubuk — Berkah Mitra Merapi Farm"
        description="Jasa maklon susu bubuk dan maklon susu kambing Etawa bersama Berkah Mitra Merapi Farm untuk pemilik merek, distributor, dan pelaku usaha."
        path="/layanan-maklon"
        breadcrumbs={[{ name: 'Layanan Maklon', path: '/layanan-maklon' }]}
      />

      {/* Header */}
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-7 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Layanan Maklon' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
                JASA MAKLON SUSU BUBUK B2B
              </p>
              <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[52px]">
                Wujudkan Produk Susu Bubuk dengan Merek Anda Sendiri.
              </h1>
              <p className="text-base sm:text-lg text-[#27312D] leading-[1.7] max-w-2xl">
                BMMF membuka peluang kerja sama bagi pelaku usaha yang ingin mengembangkan produk
                susu bubuk melalui layanan produksi sesuai kesepakatan dan kemampuan perusahaan.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/kontak?kebutuhan=Maklon"
                  onClick={() =>
                    trackConversionEvent({
                      event: 'cta_maklon_click',
                      source: 'maklon_page_header',
                      inquiryType: 'Maklon',
                      channel: 'route',
                    })
                  }
                  className="bmmf-sheen group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[11px] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap"
                >
                  <span>Konsultasi dengan Tim BMMF</span>
                  <ArrowRight className="w-4 h-4 text-[#D3B785] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href={getWhatsAppMaklonUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackConversionEvent({
                      event: 'whatsapp_open',
                      source: 'maklon_page_header',
                      inquiryType: 'Maklon',
                      channel: 'whatsapp',
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#183D32] bg-white border border-[#E3E8E3] hover:bg-[#F5F3ED] rounded-[11px] transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Maklon</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SafeImage
                src={companyConfig.media.maklonHeader.src}
                srcSet={companyConfig.media.maklonHeader.srcSet}
                sizes="(max-width: 1024px) 100vw, 42vw"
                width={960}
                height={720}
                alt={companyConfig.media.maklonHeader.alt}
                caption={companyConfig.media.maklonHeader.caption}
                isPlaceholder={companyConfig.media.maklonHeader.isPlaceholder}
                aspectClassName="aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* A. Mengenal Layanan Maklon */}
      <section className="bg-white py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <Reveal className="lg:col-span-5 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
                MENGENAL LAYANAN MAKLON
              </p>
              <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl leading-tight">
                Fokus pada Pemasaran Merek, Produksi Ditangani Terarah
              </h2>
            </Reveal>

            <Reveal
              delay={0.06}
              className="lg:col-span-7 space-y-5 text-[15px] sm:text-base text-[#27312D] leading-[1.75]"
            >
              <p>
                Maklon adalah bentuk kerja sama produksi di mana pihak pemilik merek atau pelaku
                usaha mempercayakan proses pengolahan produk kepada mitra manufaktur sesuai
                spesifikasi, kemasan, dan ketentuan yang disepakati bersama.
              </p>
              <p className="text-[#57615B]">
                Melalui kerja sama maklon susu bubuk bersama BMMF, mitra bisnis dapat memfokuskan
                sumber daya pada pengembangan distribusi dan pemasaran merek tanpa harus membangun
                fasilitas pengolahan sendiri dari awal. Setiap ruang lingkup pekerjaan dibahas
                secara transparan sejak konsultasi awal.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* B. Siapa yang Dapat Bekerja Sama? */}
      <section className="bg-[#F5F3ED] py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-2.5 mb-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
              SEGMEN KEMITRAAN
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Siapa yang Dapat Bekerja Sama?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {maklonTargetPartners.map((partner, idx) => (
              <Reveal
                key={partner.number}
                delay={idx * 0.05}
                className="bmmf-sheen-soft bg-white border border-[#E3E8E3] rounded-2xl p-5 sm:p-6 space-y-2.5 hover:border-[#183D32]/40 hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
              >
                <span className="font-mono text-xs font-medium text-[#183D32] tabular-nums">
                  {partner.number}
                </span>
                <h3 className="font-display font-bold text-lg text-[#183D32]">{partner.title}</h3>
                <p className="text-sm text-[#57615B] leading-relaxed">{partner.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* C. Alur Kerja Sama (Timeline 7 Tahap) */}
      <section className="bg-white py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
                ALUR KERJA SAMA MAKLON
              </p>
              <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
                Tahapan Komunikasi & Produksi
              </h2>
            </div>
            <p className="text-xs text-[#57615B] max-w-md leading-relaxed">
              Alur berikut merupakan rancangan komunikasi kerja sama dan disesuaikan dengan SOP
              resmi BMMF yang berlaku pada saat perjanjian disepakati.
            </p>
          </Reveal>

          <div className="divide-y divide-[#E3E8E3] border-y border-[#E3E8E3]">
            {maklonTimelineSteps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.03} className="py-4 sm:py-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start">
                  <div className="md:col-span-2">
                    <span className="font-mono text-sm font-semibold text-[#183D32] tabular-nums">
                      Tahap {item.step}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display font-bold text-lg text-[#183D32]">{item.title}</h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[15px] text-[#57615B] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* D. FAQ Maklon */}
      <section className="bg-[#F5F3ED] py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <Reveal className="lg:col-span-4 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
                PERTANYAAN UMUM
              </p>
              <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
                FAQ Layanan Maklon
              </h2>
              <p className="text-sm text-[#57615B] leading-relaxed">
                Pertanyaan teknis mengenai MOQ, estimasi waktu, dan penawaran biaya dijawab secara
                spesifik saat konsultasi sesuai profil kebutuhan usaha Anda.
              </p>
            </Reveal>

            <div className="lg:col-span-8 space-y-2.5">
              {maklonFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="bg-white border border-[#E3E8E3] rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F5F3ED]/40 transition-colors"
                    >
                      <span className="font-display font-semibold text-base sm:text-[17px] text-[#183D32]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#183D32] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-sm sm:text-[15px] text-[#27312D] leading-relaxed border-t border-[#E3E8E3]/70">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* E. CTA Maklon */}
      <section className="bg-[#183D32] text-white py-9 sm:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#D3B785]">
              KONSULTASI BISNIS
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">
              Diskusikan Kebutuhan Maklon Anda.
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Sampaikan konsep produk, rencana volume, dan kemasan yang Anda butuhkan agar tim
              kami dapat menjadwalkan pembahasan bersama Anda.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Link
              to="/kontak?kebutuhan=Maklon"
              className="bmmf-sheen-gold bmmf-sheen-delay-1 group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#102B24] bg-[#D3B785] hover:bg-[#e1c99e] rounded-[11px] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap"
            >
              <span>Konsultasi dengan Tim BMMF</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={getWhatsAppMaklonUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white border border-white/25 hover:bg-white/10 rounded-[11px] transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
