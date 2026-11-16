import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { companyConfig } from '../config/company';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { HeroVideoPlayer } from '../components/HeroVideoPlayer';
import { HeroEntrance, Reveal } from '../components/MotionPrimitives';

const corporateValues = [
  {
    number: '01',
    title: 'Integritas',
    description:
      'Menjalankan komunikasi bisnis, pencatatan kerja, dan kesepakatan kemitraan secara jujur serta dapat dipertanggungjawabkan.',
  },
  {
    number: '02',
    title: 'Kualitas',
    description:
      'Menempatkan kebersihan bahan, ketelitian pengolahan, dan kerapian pengemasan susu kambing Etawa bubuk sebagai prioritas harian.',
  },
  {
    number: '03',
    title: 'Disiplin',
    description:
      'Mematuhi prosedur operasional, tata tertib sanitasi ruang produksi, serta jadwal koordinasi yang telah ditetapkan.',
  },
  {
    number: '04',
    title: 'Kolaborasi',
    description:
      'Membangun kerja sama yang saling menghargai antar-tim internal maupun dengan pemilik merek, pemasok, dan mitra usaha.',
  },
];

const timelineEntries = [
  {
    year: '2022',
    title: 'Pendirian Usaha (Berdasarkan Profil Publik)',
    description:
      'CV. Berkah Mitra Merapi Farm tercatat mulai berdiri pada tahun 2022 dengan fokus di industri pengolahan susu kambing Etawa bubuk. Catatan tahun berdiri ini menunggu konfirmasi akhir manajemen sebelum publikasi final.',
  },
  {
    year: 'Operasional',
    title: 'Penguatan Administrasi & Titik Produksi',
    description:
      'Penataan fungsi administrasi kantor di Kec. Sawangan, Kab. Magelang serta kegiatan pengolahan produksi di wilayah Turi, Kab. Sleman.',
  },
  {
    year: 'Saat Ini',
    title: 'Pengembangan Sistem Mutu & Kemitraan Manufaktur B2B',
    description:
      'Terus menertibkan dokumentasi produksi, kebersihan lingkungan kerja, serta memperluas komunikasi kerja sama maklon dan pengadaan susu bubuk bersama pemilik merek dan distributor.',
  },
];

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="Tentang Kami — Berkah Mitra Merapi Farm"
        description="Profil resmi Berkah Mitra Merapi Farm (CV. Berkah Mitra Merapi Farm), perusahaan industri pengolahan susu kambing Etawa bubuk dengan kantor di Magelang dan lokasi produksi di Sleman."
        path="/tentang-kami"
        breadcrumbs={[{ name: 'Tentang Kami', path: '/tentang-kami' }]}
      />

      {/* Page Header */}
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-7 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Tentang Kami' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <HeroEntrance delay={0}>
                <div className="flex items-center gap-3">
                  <img
                    src={companyConfig.logo.src}
                    srcSet={companyConfig.logo.srcSet}
                    alt={companyConfig.logo.alt}
                    width={44}
                    height={44}
                    className="w-11 h-11 object-contain shrink-0"
                  />
                  <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
                    PROFIL PERUSAHAAN · {companyConfig.shortName}
                  </p>
                </div>
              </HeroEntrance>
              <HeroEntrance delay={0.06}>
                <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[50px]">
                  Industri Pengolahan Susu Kambing Etawa Bubuk yang Mengutamakan Ketertiban Proses.
                </h1>
              </HeroEntrance>
              <HeroEntrance delay={0.12}>
                <p className="text-base sm:text-lg text-[#27312D] leading-[1.7] max-w-2xl">
                  {companyConfig.displayName} ({companyConfig.shortName}) berfokus pada pengolahan
                  dan produksi susu kambing Etawa dalam bentuk bubuk—bukan peternakan umum ataupun
                  toko eceran. Seluruh aktivitas perusahaan diarahkan untuk menjaga konsistensi mutu
                  dan kesiapan kemitraan usaha.
                </p>
              </HeroEntrance>
            </div>
            <div className="lg:col-span-6">
              <HeroEntrance delay={0.14}>
                <HeroVideoPlayer
                  src={companyConfig.media.aboutHeroVideo.src}
                  posterSrc={companyConfig.media.aboutHeroVideo.poster}
                  posterSrcSet={companyConfig.media.aboutHeroVideo.posterSrcSet}
                  posterSizes="(max-width: 1024px) 100vw, 48vw"
                  trackSrc={companyConfig.media.aboutHeroVideo.trackSrc}
                  alt={companyConfig.media.aboutHeroVideo.alt}
                  caption={companyConfig.media.aboutHeroVideo.caption}
                  surfaceClassName="bg-white"
                />
              </HeroEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* B. Company Journey */}
      <section className="bg-white py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-2.5 mb-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
              PERJALANAN PERUSAHAAN
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Landasan Perkembangan Operasional
            </h2>
            <p className="text-sm text-[#57615B] leading-relaxed">
              Linimasa berikut merangkum tonggak umum perusahaan tanpa menambahkan klaim tanggal
              atau pencapaian yang belum terverifikasi.
            </p>
          </Reveal>

          <div className="divide-y divide-[#E3E8E3] border-y border-[#E3E8E3]">
            {timelineEntries.map((entry, idx) => (
              <Reveal key={entry.year} delay={idx * 0.05} className="py-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="font-display font-bold text-xl sm:text-2xl text-[#183D32] tabular-nums">
                      {entry.year}
                    </span>
                  </div>
                  <div className="md:col-span-9 space-y-2">
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-[#183D32]">
                      {entry.title}
                    </h3>
                    <p className="text-[15px] text-[#27312D] leading-relaxed max-w-3xl">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* C. Visi dan Misi */}
      <section className="bg-[#F5F3ED] py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
                ARAH PERUSAHAAN
              </p>
              <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
                Rancangan Visi & Misi Perusahaan
              </h2>
            </div>
            <p className="text-xs text-[#57615B] max-w-md">
              Status redaksi: Rancangan visi dan misi ini disiapkan sebagai pedoman korporat dan
              memerlukan persetujuan final manajemen perusahaan.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            <Reveal className="bmmf-sheen lg:col-span-5 bg-[#183D32] text-white rounded-2xl p-6 sm:p-8 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#D3B785]">
                VISI (RANCANGAN)
              </p>
              <p className="font-display font-semibold text-xl sm:text-2xl leading-relaxed">
                Menjadi perusahaan pengolahan susu kambing Etawa yang terus berkembang melalui
                peningkatan kualitas, profesionalisme, dan kepercayaan mitra.
              </p>
            </Reveal>

            <Reveal
              delay={0.08}
              className="lg:col-span-7 bg-white border border-[#E3E8E3] rounded-2xl p-6 sm:p-8 space-y-4"
            >
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
                MISI (RANCANGAN)
              </p>
              <ul className="space-y-4">
                {[
                  'Mengutamakan kualitas dalam proses pengolahan produk.',
                  'Mengembangkan sumber daya manusia yang disiplin dan kompeten.',
                  'Meningkatkan efektivitas dan ketertiban operasional.',
                  'Membangun kerja sama bisnis yang profesional dan berkelanjutan.',
                ].map((misi, idx) => (
                  <li
                    key={misi}
                    className="flex items-start gap-4 pb-4 border-b border-[#E3E8E3] last:border-b-0 last:pb-0"
                  >
                    <span className="font-mono text-xs font-medium text-[#183D32] tabular-nums pt-1">
                      0{idx + 1}
                    </span>
                    <span className="text-[15px] sm:text-base text-[#27312D] leading-relaxed">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* D. Nilai Perusahaan */}
      <section className="bg-white py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-2.5 mb-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
              NILAI KERJA BMMF
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Empat Prinsip dalam Setiap Pekerjaan
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {corporateValues.map((val, idx) => (
              <Reveal
                key={val.title}
                delay={idx * 0.05}
                className="bmmf-sheen-soft border border-[#E3E8E3] rounded-2xl p-5 sm:p-6 space-y-2.5 hover:border-[#183D32]/40 hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
              >
                <span className="font-mono text-xs text-[#57615B] tabular-nums">{val.number}</span>
                <h3 className="font-display font-bold text-xl text-[#183D32]">{val.title}</h3>
                <p className="text-sm text-[#57615B] leading-relaxed">{val.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E. Lokasi Kantor dan Lokasi Produksi */}
      <section className="bg-white py-9 sm:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-2.5 mb-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
              LOKASI OPERASIONAL
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Alamat Kantor & Lokasi Produksi
            </h2>
            <p className="text-sm text-[#57615B] leading-relaxed">
              Lokasi kantor BMMF di Sawangan, Magelang telah terhubung dengan tautan Google Maps
              terverifikasi, sementara koordinat presisi lokasi produksi di Turi masih menunggu
              verifikasi internal. Silakan konfirmasikan jadwal kunjungan terlebih dahulu melalui
              kontak resmi BMMF.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {[companyConfig.locations.office, companyConfig.locations.production].map((loc) => (
              <Reveal
                key={loc.title}
                className="bg-[#F5F3ED] border border-[#E3E8E3] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-[#183D32]">
                    <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <h3 className="font-display font-bold text-xl">{loc.title}</h3>
                  </div>
                  <p className="text-xs font-medium text-[#57615B]">{loc.city}</p>
                  <p className="text-[15px] text-[#27312D] leading-relaxed">{loc.address}</p>
                </div>

                <div className="pt-4 border-t border-[#E3E8E3] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[#57615B]">
                    {loc.coordinatesVerified
                      ? 'Koordinat & rute Google Maps terverifikasi'
                      : 'Koordinat presisi menunggu verifikasi internal'}
                  </span>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183D32] hover:underline"
                  >
                    <span>
                      {loc.coordinatesVerified ? 'Buka di Google Maps' : 'Cari Wilayah di Google Maps'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-7 pt-5 border-t border-[#E3E8E3] flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#57615B]">
              Tertarik menjajaki layanan maklon atau pengadaan produk susu bubuk bersama BMMF?
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/layanan-maklon"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#183D32] border border-[#E3E8E3] hover:bg-[#F5F3ED] rounded-[10px] transition-colors"
              >
                <span>Pelajari Layanan Maklon</span>
              </Link>
              <Link
                to="/kontak?kebutuhan=Maklon"
                className="bmmf-sheen bmmf-sheen-delay-1 group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-all duration-200 hover:-translate-y-[1px]"
              >
                <span>Konsultasi Kerja Sama</span>
                <ArrowRight className="w-4 h-4 text-[#D3B785] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
