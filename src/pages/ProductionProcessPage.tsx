import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { companyConfig } from '../config/company';
import { productionStages } from '../data/production';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { HeroEntrance, Reveal } from '../components/MotionPrimitives';

export function ProductionProcessPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = productionStages[activeIndex];

  const handleSelectStage = (idx: number) => {
    setActiveIndex(idx);
    const el = document.getElementById(`tahap-${productionStages[idx].stepNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SeoHead
        title="Proses Produksi — Berkah Mitra Merapi Farm"
        description="Tahapan umum proses pengolahan susu kambing Etawa bubuk di Berkah Mitra Merapi Farm mulai dari penerimaan bahan hingga pencatatan penyimpanan."
        path="/proses-produksi"
        breadcrumbs={[{ name: 'Proses Produksi', path: '/proses-produksi' }]}
      />

      {/* Header */}
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-7 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Proses Produksi' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <HeroEntrance delay={0}>
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
                  ALUR KERJA MANUFAKTUR
                </p>
              </HeroEntrance>
              <HeroEntrance delay={0.06}>
                <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[50px]">
                  Tahapan Pengolahan Susu Kambing Etawa Bubuk yang Terstruktur.
                </h1>
              </HeroEntrance>
              <HeroEntrance delay={0.12}>
                <p className="text-base sm:text-lg text-[#27312D] leading-[1.7] max-w-2xl">
                  Pelajari bagaimana kegiatan pengolahan, penimbangan, pencampuran, hingga penanganan
                  kemasan dijalankan secara tertib agar calon mitra maklon dan pembeli B2B
                  memperoleh gambaran operasional yang jelas. Urutan final maupun rincian teknis
                  tetap mengacu pada SOP operasional resmi yang berlaku di BMMF.
                </p>
              </HeroEntrance>
            </div>

            <div className="lg:col-span-6">
              <HeroEntrance delay={0.14}>
                <figure className="w-full">
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="bmmf-glow-breathe hidden sm:block absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#D3B785] rounded-tr-2xl pointer-events-none"
                    />
                    <div
                      aria-hidden="true"
                      className="bmmf-glow-breathe hidden sm:block absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#183D32]/35 rounded-bl-2xl pointer-events-none"
                    />
                    <div className="relative overflow-hidden bg-white border border-[#E3E8E3] rounded-xl aspect-[4/3]">
                      <img
                        src={companyConfig.media.productionHero.src}
                        alt={companyConfig.media.productionHero.alt}
                        loading="eager"
                        decoding="async"
                        className="block w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-2.5 text-xs text-[#737D77] leading-relaxed text-center sm:text-left">
                    {companyConfig.media.productionHero.caption}
                  </figcaption>
                </figure>
              </HeroEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Step Navigation Bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-[#E3E8E3]">
        <div className="px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {productionStages.map((stage, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={stage.stepNumber}
                type="button"
                onClick={() => handleSelectStage(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[#183D32] text-white'
                    : 'bg-[#F5F3ED] text-[#27312D] hover:bg-[#E3E8E3]/70'
                }`}
              >
                <span className="font-mono tabular-nums mr-1.5">{stage.stepNumber}.</span>
                <span>{stage.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Storytelling + Desktop Sticky Step Navigation */}
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-start">
            {/* Desktop Step Navigation */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-4">
              <div className="border border-[#E3E8E3] rounded-2xl p-5 bg-[#F5F3ED]/60 space-y-3">
                <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#737D77]">
                  NAVIGASI TAHAPAN
                </p>
                <nav aria-label="Navigasi tahapan produksi" className="space-y-1.5">
                  {productionStages.map((stage, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={stage.stepNumber}
                        type="button"
                        onClick={() => handleSelectStage(idx)}
                        className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors flex items-start gap-3 ${
                          isActive
                            ? 'bg-[#183D32] text-white'
                            : 'hover:bg-white text-[#27312D]'
                        }`}
                      >
                        <span
                          className={`font-mono text-xs tabular-nums pt-0.5 ${
                            isActive ? 'text-[#D3B785]' : 'text-[#737D77]'
                          }`}
                        >
                          {stage.stepNumber}
                        </span>
                        <span className="text-sm font-medium leading-snug">{stage.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="border border-[#E3E8E3] rounded-2xl p-6 space-y-2">
                <p className="text-xs font-semibold text-[#183D32]">Catatan Transparansi SOP</p>
                <p className="text-xs text-[#737D77] leading-relaxed">
                  Halaman ini tidak menampilkan spesifikasi mesin atau teknologi tertentu sebelum
                  daftar fasilitas diverifikasi secara resmi oleh perusahaan.
                </p>
                <p className="text-xs text-[#183D32] font-medium pt-1">
                  Tahap aktif: {activeStage.stepNumber} — {activeStage.title}
                </p>
              </div>
            </aside>

            {/* Stage Storytelling Cards */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-10">
              {productionStages.map((stage, idx) => (
                <Reveal key={stage.stepNumber}>
                  <article
                    id={`tahap-${stage.stepNumber}`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="scroll-mt-24 pb-8 border-b border-[#E3E8E3] last:border-b-0 last:pb-0 space-y-4"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#737D77]">
                      <span className="font-mono font-semibold text-[#183D32] tabular-nums">
                        TAHAP {stage.stepNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Gambaran Umum Alur Produksi</span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#183D32]">
                        {stage.title}
                      </h2>
                      <p className="text-base font-medium text-[#27312D]">{stage.summary}</p>
                      <p className="text-[15px] text-[#737D77] leading-[1.7]">{stage.description}</p>
                    </div>

                    <SafeImage
                      src={stage.image.src}
                      alt={`${stage.title} — ${stage.image.alt}`}
                      caption={stage.image.caption}
                      isPlaceholder={stage.image.isPlaceholder}
                      aspectClassName="aspect-[16/9]"
                    />

                    <div className="bg-[#F5F3ED] rounded-xl p-5 sm:p-6 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#183D32]">
                        Poin Pendukung Tahapan
                      </p>
                      <ul className="space-y-2.5">
                        {stage.supportingPoints.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-[#27312D]">
                            <Check
                              className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Strip */}
      <section className="bg-[#183D32] text-white py-9 sm:py-11">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl">
              Pelajari Pendekatan Pengendalian Mutu Kami
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Lihat bagaimana sanitasi, pencatatan dokumen, dan evaluasi berkala dijalankan di
              lingkungan kerja BMMF.
            </p>
          </div>
          <Link
            to="/kualitas"
            className="bmmf-sheen-gold group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#102B24] bg-[#D3B785] hover:bg-[#e1c99e] rounded-[10px] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap shrink-0"
          >
            <span>Lihat Standar Kualitas</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
