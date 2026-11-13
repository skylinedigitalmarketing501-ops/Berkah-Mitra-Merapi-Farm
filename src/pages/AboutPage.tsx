import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { companyConfig } from '../config/company';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { Reveal } from '../components/MotionPrimitives';

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
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Tentang Kami' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={companyConfig.logo.src}
                  alt={companyConfig.logo.alt}
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain shrink-0"
                />
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
                  PROFIL PERUSAHAAN · {companyConfig.shortName}
                </p>
              </div>
              <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[50px]">
                Industri Pengolahan Susu Kambing Etawa Bubuk yang Mengutamakan Ketertiban Proses.
              </h1>
              <p className="text-base sm:text-lg text-[#27312D] leading-[1.7] max-w-2xl">
                {companyConfig.displayName} ({companyConfig.shortName}) berfokus pada pengolahan
                dan produksi susu kambing Etawa dalam bentuk bubuk—bukan peternakan umum ataupun
                toko eceran. Seluruh aktivitas perusahaan diarahkan untuk menjaga konsistensi mutu
                dan kesiapan kemitraan usaha.
              </p>
            </div>
            <div className="lg:col-span-5">
              <SafeImage
                src={companyConfig.media.intro.src}
                alt={companyConfig.media.intro.alt}
                caption={companyConfig.media.intro.caption}
                isPlaceholder={companyConfig.media.intro.isPlaceholder}
                aspectClassName="aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* B. Company Journey */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-3 mb-12">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#737D77]">
              PERJALANAN PERUSAHAAN
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Landasan Perkembangan Operasional
            </h2>
            <p className="text-sm text-[#737D77] leading-relaxed">
              Linimasa berikut merangkum tonggak umum perusahaan tanpa menambahkan klaim tanggal
              atau pencapaian yang belum terverifikasi.
            </p>
          </Reveal>

          <div className="divide-y divide-[#E3E8E3] border-y border-[#E3E8E3]">
            {timelineEntries.map((entry, idx) => (
              <Reveal key={entry.year} delay={idx * 0.05} className="py-8">
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
      <section className="bg-[#F5F3ED] py-16 sm:py-20 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#737D77]">
                ARAH PERUSAHAAN
              </p>
              <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
                Rancangan Visi & Misi Perusahaan
              </h2>
            </div>
            <p className="text-xs text-[#737D77] max-w-md">
              Status redaksi: Rancangan visi dan misi ini disiapkan sebagai pedoman korporat dan
              memerlukan persetujuan final manajemen perusahaan.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Reveal className="lg:col-span-5 bg-[#183D32] text-white rounded-2xl p-8 sm:p-10 space-y-4">
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
              className="lg:col-span-7 bg-white border border-[#E3E8E3] rounded-2xl p-8 sm:p-10 space-y-5"
            >
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#737D77]">
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
      <section className="bg-white py-16 sm:py-20 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-3 mb-12">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#737D77]">
              NILAI KERJA BMMF
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Empat Prinsip dalam Setiap Pekerjaan
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateValues.map((val, idx) => (
              <Reveal
                key={val.title}
                delay={idx * 0.05}
                className="border border-[#E3E8E3] rounded-2xl p-6 sm:p-7 space-y-3 hover:border-[#183D32]/40 transition-colors"
              >
                <span className="font-mono text-xs text-[#737D77] tabular-nums">{val.number}</span>
                <h3 className="font-display font-bold text-xl text-[#183D32]">{val.title}</h3>
                <p className="text-sm text-[#737D77] leading-relaxed">{val.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E. Lokasi Kantor dan Lokasi Produksi */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-3 mb-10">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#737D77]">
              LOKASI OPERASIONAL
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Alamat Kantor & Lokasi Produksi
            </h2>
            <p className="text-sm text-[#737D77] leading-relaxed">
              Lokasi kantor BMMF di Sawangan, Magelang telah terhubung dengan tautan Google Maps
              terverifikasi, sementara koordinat presisi lokasi produksi di Turi masih menunggu
              verifikasi internal. Silakan konfirmasikan jadwal kunjungan terlebih dahulu melalui
              kontak resmi BMMF.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[companyConfig.locations.office, companyConfig.locations.production].map((loc) => (
              <Reveal
                key={loc.title}
                className="bg-[#F5F3ED] border border-[#E3E8E3] rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-[#183D32]">
                    <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <h3 className="font-display font-bold text-xl">{loc.title}</h3>
                  </div>
                  <p className="text-xs font-medium text-[#737D77]">{loc.city}</p>
                  <p className="text-[15px] text-[#27312D] leading-relaxed">{loc.address}</p>
                </div>

                <div className="pt-4 border-t border-[#E3E8E3] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[#737D77]">
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

          <Reveal className="mt-12 pt-8 border-t border-[#E3E8E3] flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#737D77]">
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
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors"
              >
                <span>Konsultasi Kerja Sama</span>
                <ArrowRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
