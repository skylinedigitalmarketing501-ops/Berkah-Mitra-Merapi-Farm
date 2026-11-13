import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, MessageSquare } from 'lucide-react';
import { companyConfig, getWhatsAppMaklonUrl } from '../config/company';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { HeroEntrance, Reveal } from '../components/MotionPrimitives';

const whyPartnerPoints = [
  {
    number: '01',
    title: 'Pengalaman dalam pengolahan susu bubuk',
    text: 'Berfokus pada industri pengolahan susu kambing Etawa bubuk sehingga alur kerja dan penanganan bahan kering terjaga konsistensinya.',
  },
  {
    number: '02',
    title: 'Perhatian terhadap mutu produk',
    text: 'Pemeriksaan bahan masuk, sanitasi area kerja, serta pengecekan hasil pencampuran dan segel kemasan dijalankan sebagai rutinitas operasional.',
  },
  {
    number: '03',
    title: 'Komunikasi kebutuhan produksi',
    text: 'Diskusi spesifikasi, varian, kemasan, dan estimasi jadwal produksi disampaikan secara terbuka sejak tahap konsultasi awal.',
  },
  {
    number: '04',
    title: 'Proses operasional yang terarah',
    text: 'Pencatatan lembar kerja batch membantu penelusuran riwayat produksi dan memudahkan koordinasi bersama pemilik merek maupun pembeli B2B.',
  },
  {
    number: '05',
    title: 'Peluang kerja sama jangka panjang',
    text: 'Pendekatan kemitraan yang profesional untuk mendukung kelancaran pengadaan produk maupun pengembangan merek secara berkelanjutan.',
  },
];

export function HomePage() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08]);

  return (
    <>
      <SeoHead
        title="Berkah Mitra Merapi Farm — Manufaktur & Maklon Susu Bubuk"
        description="Berkah Mitra Merapi Farm (CV. Berkah Mitra Merapi Farm) bergerak di bidang pengolahan susu bubuk dan layanan maklon susu kambing Etawa bubuk untuk kerja sama B2B."
        path="/"
      />

      {/* SECTION 1 — HERO */}
      <section className="relative bg-white border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <HeroEntrance delay={0}>
                <p className="text-xs sm:text-[13px] font-medium tracking-[0.14em] uppercase text-[#183D32]">
                  MANUFAKTUR & MAKLON SUSU BUBUK
                </p>
              </HeroEntrance>

              <HeroEntrance delay={0.06}>
                <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.08] text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[60px]">
                  Mitra Produksi Susu Bubuk untuk Mengembangkan Bisnis Anda.
                </h1>
              </HeroEntrance>

              <HeroEntrance delay={0.12}>
                <p className="text-base sm:text-lg text-[#27312D] leading-[1.65] max-w-xl">
                  CV. Berkah Mitra Merapi Farm bergerak di bidang pengolahan susu bubuk, dengan
                  fokus pada kualitas produk, proses produksi, dan kerja sama untuk mendukung
                  kebutuhan bisnis Anda.
                </p>
              </HeroEntrance>

              <HeroEntrance delay={0.18}>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/layanan-maklon"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-[15px] font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[11px] transition-colors duration-200 whitespace-nowrap"
                  >
                    <span>Konsultasi Maklon</span>
                    <ArrowRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/produk-susu-bubuk"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-[15px] font-medium text-[#183D32] bg-white hover:bg-[#F5F3ED] border border-[#E3E8E3] rounded-[11px] transition-colors duration-200 whitespace-nowrap"
                  >
                    <span>Jelajahi Produk</span>
                  </Link>
                </div>
              </HeroEntrance>

              <HeroEntrance delay={0.22}>
                <div className="pt-4 border-t border-[#E3E8E3] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#737D77]">
                  <span>Kantor: Kab. Magelang, Jawa Tengah</span>
                  <span aria-hidden="true">·</span>
                  <span>Produksi: Kab. Sleman, DI Yogyakarta</span>
                </div>
              </HeroEntrance>
            </div>

            <div className="lg:col-span-6">
              <HeroEntrance delay={0.14}>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="hidden sm:block absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#D3B785] rounded-tr-2xl pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="hidden sm:block absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[#183D32]/30 rounded-bl-2xl pointer-events-none"
                  />
                  <SafeImage
                    src={companyConfig.media.hero.src}
                    alt={companyConfig.media.hero.alt}
                    caption={companyConfig.media.hero.caption}
                    isPlaceholder={companyConfig.media.hero.isPlaceholder}
                    aspectClassName="aspect-[16/11] lg:aspect-[4/3]"
                    priority
                  />
                </div>
              </HeroEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMPANY INTRODUCTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5 order-2 lg:order-1">
              <SafeImage
                src={companyConfig.media.intro.src}
                alt={companyConfig.media.intro.alt}
                caption={companyConfig.media.intro.caption}
                isPlaceholder={companyConfig.media.intro.isPlaceholder}
                aspectClassName="aspect-[4/3]"
              />
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <p className="text-xs sm:text-[13px] font-medium tracking-[0.14em] uppercase text-[#737D77]">
                MENGENAL BMMF
              </p>
              <h2 className="font-display font-bold text-[#183D32] tracking-[-0.02em] leading-[1.15] text-[30px] sm:text-[38px] lg:text-[44px]">
                Tumbuh Bersama Kualitas, Bergerak dengan Kepercayaan Mitra.
              </h2>
              <p className="text-base sm:text-lg text-[#27312D] leading-[1.7] max-w-2xl">
                CV. Berkah Mitra Merapi Farm adalah perusahaan manufaktur yang berfokus pada
                pengolahan susu kambing Etawa bubuk. Sejak berdiri berdasarkan profil perusahaan
                pada 2022, kami membangun kegiatan produksi dengan perhatian pada mutu bahan baku,
                ketertiban pengolahan, dan kerja sama bisnis yang transparan.
              </p>
              <p className="text-[15px] text-[#737D77] leading-[1.7] max-w-2xl">
                Dengan kantor administrasi di Sawangan, Magelang dan kegiatan produksi di Turi,
                Sleman, BMMF mendukung pelaku usaha baik melalui pengadaan produk susu bubuk maupun
                pengembangan merek melalui layanan maklon.
              </p>
              <div className="pt-2">
                <Link
                  to="/tentang-kami"
                  className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-[#183D32] hover:text-[#102B24] group"
                >
                  <span className="border-b border-[#183D32]/35 group-hover:border-[#183D32] pb-0.5 transition-colors">
                    Selengkapnya Tentang Perusahaan
                  </span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPANY HIGHLIGHTS */}
      <section className="bg-[#F5F3ED] border-y border-[#E3E8E3] py-14 sm:py-16">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E3E8E3]">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#737D77]">
                  RINGKASAN PROFIL PERUSAHAAN
                </p>
                <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-3xl mt-2">
                  Identitas Operasional & Fokus Layanan
                </h2>
              </div>
              <p className="text-xs text-[#737D77] max-w-md leading-relaxed">
                Seluruh informasi disajikan sesuai data profil resmi dan ditandai apabila masih
                menunggu konfirmasi internal manajemen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyConfig.highlights.map((item) => (
                <div key={item.id} className="space-y-2 border-t border-[#183D32]/15 pt-5">
                  <p className="text-xs font-medium text-[#737D77]">{item.label}</p>
                  <p className="font-display font-bold text-xl sm:text-2xl text-[#183D32] tracking-tight">
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-[13px] text-[#27312D]/80 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — OUR SERVICES */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-4 mb-12 lg:mb-14">
            <p className="text-xs sm:text-[13px] font-medium tracking-[0.14em] uppercase text-[#737D77]">
              LAYANAN KAMI
            </p>
            <h2 className="font-display font-bold text-[#183D32] tracking-[-0.02em] leading-[1.14] text-[30px] sm:text-[38px] lg:text-[44px]">
              Solusi Produksi Susu Bubuk untuk Kebutuhan Bisnis Anda.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Layanan 1: Layanan Maklon Susu Bubuk */}
            <Reveal className="lg:col-span-6 border border-[#E3E8E3] rounded-2xl overflow-hidden bg-white hover:border-[#183D32]/40 transition-colors flex flex-col justify-between">
              <div className="p-7 sm:p-9 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#183D32] tabular-nums">
                    01
                  </span>
                  <span className="w-8 h-[1px] bg-[#D3B785]" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-[26px] text-[#183D32]">
                  Layanan Maklon Susu Bubuk
                </h3>
                <p className="text-[15px] sm:text-base text-[#27312D] leading-relaxed">
                  Ditujukan untuk pemilik usaha atau calon pemilik merek yang ingin mengembangkan
                  produk susu bubuk dengan identitas merek sendiri.
                </p>
                <div className="pt-2">
                  <Link
                    to="/layanan-maklon"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors whitespace-nowrap"
                  >
                    <span>Pelajari Layanan Maklon</span>
                    <ArrowRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="px-7 sm:px-9 pb-7 sm:pb-9">
                <SafeImage
                  src={companyConfig.media.productionShowcase.src}
                  alt={companyConfig.media.productionShowcase.alt}
                  aspectClassName="aspect-[16/9]"
                  caption=""
                />
              </div>
            </Reveal>

            {/* Layanan 2: Pemesanan Susu Bubuk */}
            <Reveal
              delay={0.06}
              className="lg:col-span-6 border border-[#E3E8E3] rounded-2xl overflow-hidden bg-[#F5F3ED]/60 hover:border-[#183D32]/40 transition-colors flex flex-col justify-between"
            >
              <div className="p-7 sm:p-9 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#183D32] tabular-nums">
                    02
                  </span>
                  <span className="w-8 h-[1px] bg-[#D3B785]" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-[26px] text-[#183D32]">
                  Pemesanan Susu Bubuk
                </h3>
                <p className="text-[15px] sm:text-base text-[#27312D] leading-relaxed">
                  Ditujukan untuk calon pembeli bisnis yang membutuhkan pemesanan produk susu bubuk
                  sesuai jenis, spesifikasi, volume, dan ketersediaan yang disepakati.
                </p>
                <div className="pt-2">
                  <Link
                    to="/produk-susu-bubuk"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#183D32] bg-white hover:bg-[#F5F3ED] border border-[#E3E8E3] rounded-[10px] transition-colors whitespace-nowrap"
                  >
                    <span>Jelajahi Produk Susu Bubuk</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="px-7 sm:px-9 pb-7 sm:pb-9">
                <SafeImage
                  src={companyConfig.media.productSample.src}
                  alt={companyConfig.media.productSample.alt}
                  aspectClassName="aspect-[16/9]"
                  caption=""
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY PARTNER WITH BMMF */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
              <p className="text-xs sm:text-[13px] font-medium tracking-[0.14em] uppercase text-[#737D77]">
                KEUNGGULAN KEMITRAAN
              </p>
              <h2 className="font-display font-bold text-[#183D32] tracking-[-0.02em] leading-[1.14] text-[30px] sm:text-[38px] lg:text-[42px]">
                Bangun Produk Anda Bersama Mitra Produksi yang Tepat.
              </h2>
              <p className="text-base text-[#737D77] leading-[1.65]">
                Setiap kerja sama di BMMF diawali dengan komunikasi kebutuhan yang jelas,
                peninjauan kelayakan teknis, serta kesepakatan tertulis yang realistis tanpa klaim
                berlebihan.
              </p>
              <div className="pt-2">
                <Link
                  to="/kualitas"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#183D32] hover:underline"
                >
                  <span>Pelajari Pendekatan Kualitas Kami</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <div className="lg:col-span-7 divide-y divide-[#E3E8E3] border-y border-[#E3E8E3]">
              {whyPartnerPoints.map((item, idx) => (
                <Reveal key={item.number} delay={idx * 0.04} className="py-6 sm:py-7">
                  <div className="flex items-start gap-5 sm:gap-7">
                    <span className="font-mono text-sm font-medium text-[#183D32] tabular-nums pt-1">
                      {item.number}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-[#183D32]">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-[#737D77] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PRODUCTION OVERVIEW */}
      <section ref={showcaseRef} className="relative overflow-hidden bg-[#102B24] text-white">
        <div className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[580px] flex items-end">
          <motion.img
            src={companyConfig.media.productionShowcase.src}
            alt={companyConfig.media.productionShowcase.alt}
            referrerPolicy="no-referrer"
            style={prefersReduced ? undefined : { scale: imageScale }}
            className="absolute inset-0 w-full h-full object-cover opacity-55 will-change-transform"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#102B24] via-[#102B24]/65 to-[#102B24]/30"
          />
          <div className="relative z-10 w-full mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <Reveal className="max-w-2xl space-y-5">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#D3B785]">
                PROSES PRODUKSI & KUALITAS
              </p>
              <h2 className="font-display font-bold text-white tracking-[-0.02em] leading-[1.12] text-[30px] sm:text-[40px] lg:text-[46px]">
                Di Balik Setiap Produk, Ada Proses yang Kami Jaga.
              </h2>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                Calon mitra bisnis dapat meninjau alur kerja produksi kami—mulai dari pemeriksaan
                bahan masuk, pencampuran, pengemasan, hingga dokumentasi mutu per batch.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/proses-produksi"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-[15px] font-medium text-[#102B24] bg-[#D3B785] hover:bg-[#e1c99e] rounded-[11px] transition-colors duration-200 whitespace-nowrap"
                >
                  <span>Lihat Proses Produksi</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/kualitas"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white border border-white/25 hover:bg-white/10 rounded-[11px] transition-colors whitespace-nowrap"
                >
                  <span>Pendekatan Kualitas</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 7 — BUSINESS PARTNERSHIP CTA */}
      <section className="bg-[#183D32] text-white py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-8 space-y-5">
              <p className="text-xs sm:text-[13px] font-medium tracking-[0.14em] uppercase text-[#D3B785]">
                MULAI KERJA SAMA B2B
              </p>
              <h2 className="font-display font-bold text-white tracking-[-0.02em] leading-[1.12] text-[32px] sm:text-[42px] lg:text-[48px]">
                Punya Rencana Membuat Produk Susu Bubuk Sendiri?
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Diskusikan kebutuhan produk dan rencana usaha Anda bersama tim CV. Berkah Mitra
                Merapi Farm.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/kontak?kebutuhan=Maklon"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-[15px] font-medium text-[#102B24] bg-[#D3B785] hover:bg-[#e1c99e] rounded-[11px] transition-colors duration-200 whitespace-nowrap"
                >
                  <span>Mulai Konsultasi Maklon</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/kontak?kebutuhan=Pemesanan%20Susu%20Bubuk"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-[15px] font-medium text-white border border-white/25 hover:bg-white/10 rounded-[11px] transition-colors duration-200 whitespace-nowrap"
                >
                  <span>Minta Penawaran Produk</span>
                </Link>
                <a
                  href={getWhatsAppMaklonUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#D3B785] hover:underline whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Chat WhatsApp Bisnis</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-4">
              <div className="bg-[#102B24] border border-white/15 rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <span className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={companyConfig.logo.src}
                      alt={companyConfig.logo.alt}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <div>
                    <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#D3B785]">
                      KONTAK LANGSUNG
                    </p>
                    <p className="text-xs font-semibold text-white">{companyConfig.displayName}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-white/85">
                  <div>
                    <p className="text-xs text-white/55">WhatsApp Bisnis</p>
                    <p className="font-medium tabular-nums">{companyConfig.contact.whatsappDisplay}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/55">Email Perusahaan</p>
                    <p className="font-medium break-all">{companyConfig.contact.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/55">Wilayah Operasional</p>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Magelang (Kantor) & Sleman (Produksi)
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
