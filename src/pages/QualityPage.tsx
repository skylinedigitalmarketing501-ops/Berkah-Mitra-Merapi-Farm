import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileCheck2 } from 'lucide-react';
import { companyConfig } from '../config/company';
import { qualityPillars, verifiedCertifications } from '../data/production';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { Reveal } from '../components/MotionPrimitives';

export function QualityPage() {
  return (
    <>
      <SeoHead
        title="Kualitas & Ketertiban Operasional — CV. Berkah Mitra Merapi Farm"
        description="Komitmen CV. Berkah Mitra Merapi Farm dalam pemeriksaan bahan, kebersihan dan sanitasi, pengendalian proses, pengemasan, serta dokumentasi mutu."
        path="/kualitas"
        breadcrumbs={[{ name: 'Kualitas', path: '/kualitas' }]}
      />

      {/* Header */}
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-7 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Kualitas' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
                PENGENDALIAN MUTU & KETERTIBAN KERJA
              </p>
              <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[52px]">
                Kualitas Dibangun dari Setiap Tahapan.
              </h1>
              <p className="text-base sm:text-lg text-[#27312D] leading-[1.7] max-w-2xl">
                Bagi pemilik merek dan mitra distribusi, keandalan produk dimulai dari ketertiban
                proses. Di BMMF, mutu dijaga mulai dari penerimaan bahan, sanitasi ruang kerja,
                pengendalian proses, hingga kelengkapan dokumentasi batch.
              </p>
            </div>
            <div className="lg:col-span-5">
              <SafeImage
                src={companyConfig.media.qualityHeader.src}
                srcSet={companyConfig.media.qualityHeader.srcSet}
                sizes="(max-width: 1024px) 100vw, 42vw"
                width={960}
                height={720}
                alt={companyConfig.media.qualityHeader.alt}
                caption={companyConfig.media.qualityHeader.caption}
                isPlaceholder={companyConfig.media.qualityHeader.isPlaceholder}
                aspectClassName="aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Quality Pillars */}
      <section className="bg-white py-9 sm:py-12 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl space-y-2.5 mb-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
              KERANGKA PENJAGAAN MUTU
            </p>
            <h2 className="font-display font-bold text-[#183D32] text-2xl sm:text-4xl">
              Enam Pilar Operasional BMMF
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualityPillars.map((pillar, idx) => (
              <Reveal
                key={pillar.code}
                delay={idx * 0.04}
                className="bmmf-sheen-soft border border-[#E3E8E3] rounded-2xl p-5 sm:p-6 space-y-3 bg-white hover:border-[#183D32]/40 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#183D32] tabular-nums">
                    {pillar.code}
                  </span>
                  <span className="w-6 h-[1px] bg-[#D3B785]" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#183D32]">{pillar.title}</h3>
                <p className="text-sm text-[#57615B] leading-relaxed flex-1">
                  {pillar.description}
                </p>
                <ul className="pt-4 border-t border-[#E3E8E3] space-y-2">
                  {pillar.checkpoints.map((cp) => (
                    <li key={cp} className="flex items-start gap-2 text-xs text-[#27312D]">
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#183D32] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{cp}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Permits Transparency */}
      <section className="bg-[#F5F3ED] py-9 sm:py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-white border border-[#E3E8E3] rounded-2xl p-6 sm:p-8 lg:p-9 space-y-4">
            <div className="flex items-start gap-4">
              <FileCheck2 className="w-6 h-6 text-[#183D32] shrink-0 mt-1" aria-hidden="true" />
              <div className="space-y-3 max-w-3xl">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
                  STATUS SERTIFIKASI & PERIZINAN
                </p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#183D32]">
                  Transparansi Dokumen Resmi Perusahaan
                </h2>

                {verifiedCertifications.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {verifiedCertifications.map((cert) => (
                      <div
                        key={cert.id}
                        className="border border-[#E3E8E3] rounded-xl p-4 space-y-1"
                      >
                        <p className="font-semibold text-sm text-[#183D32]">{cert.name}</p>
                        <p className="text-xs text-[#57615B]">Ruang lingkup: {cert.scope}</p>
                        {cert.documentNumber && (
                          <p className="font-mono text-xs text-[#27312D]">{cert.documentNumber}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3 text-[15px] text-[#27312D] leading-relaxed">
                    <p>
                      BMMF berkomitmen hanya menampilkan dokumen resmi—seperti sertifikat Halal,
                      izin edar BPOM, NKV, maupun sertifikasi mutu lainnya—apabila salinan dokumen
                      dan ruang lingkup produknya telah diverifikasi secara langsung.
                    </p>
                    <p className="text-sm text-[#57615B]">
                      Kami tidak memasang logo sertifikasi tanpa bukti pendukung ataupun mengklaim
                      seluruh produk telah tersertifikasi secara menyeluruh sebelum verifikasi
                      masing-masing dokumen selesai dilakukan.
                    </p>
                  </div>
                )}

                <div className="pt-4">
                  <Link
                    to="/kontak?kebutuhan=Maklon"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#183D32] hover:underline"
                  >
                    <span>Konsultasikan kebutuhan dokumen dan kerja sama produksi dengan tim kami</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
