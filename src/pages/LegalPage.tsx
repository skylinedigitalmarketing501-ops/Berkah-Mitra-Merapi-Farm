import { Link } from 'react-router-dom';
import { companyConfig } from '../config/company';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';

interface LegalPageProps {
  mode: 'privacy' | 'terms';
}

export function LegalPage({ mode }: LegalPageProps) {
  const isPrivacy = mode === 'privacy';
  const title = isPrivacy ? 'Kebijakan Privasi (Privacy Policy)' : 'Ketentuan Penggunaan (Terms of Use)';
  const path = isPrivacy ? '/kebijakan-privasi' : '/ketentuan-penggunaan';

  return (
    <>
      <SeoHead
        title={`${title} — ${companyConfig.displayName}`}
        description={`${title} resmi website ${companyConfig.officialName}.`}
        path={path}
        breadcrumbs={[{ name: title, path }]}
      />

      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-5">
          <Breadcrumb items={[{ label: title }]} />

          <header className="space-y-2 pb-4 border-b border-[#E3E8E3]">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57615B]">
              DOKUMEN HUKUM & TATA KELOLA
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#183D32]">{title}</h1>
            <p className="text-xs text-[#57615B]">
              Berlaku untuk layanan informasi bisnis daring {companyConfig.officialName}.
            </p>
          </header>

          {isPrivacy ? (
            <div className="space-y-6 text-[15px] text-[#27312D] leading-[1.75]">
              <section className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#183D32]">
                  1. Pengumpulan Informasi Bisnis
                </h2>
                <p>
                  {companyConfig.displayName} hanya mengumpulkan data yang Anda kirimkan secara
                  sukarela melalui formulir permintaan penawaran dan konsultasi B2B, meliputi nama
                  lengkap, nama usaha atau perusahaan, nomor WhatsApp, alamat email, jenis kebutuhan
                  layanan, informasi produk yang diminati, perkiraan volume, serta catatan kebutuhan.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#183D32]">
                  2. Tujuan Penggunaan Data
                </h2>
                <p>
                  Informasi yang dikirimkan digunakan semata-mata untuk menindaklanjuti komunikasi
                  kemitraan maklon susu bubuk, penyusunan penawaran pemesanan produk susu bubuk,
                  serta pemberian informasi perusahaan secara resmi.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#183D32]">
                  3. Penyimpanan & Perlindungan Data
                </h2>
                <p>
                  Data pengajuan penawaran disimpan secara terbatas pada sistem penerimaan internal
                  perusahaan dan tidak diperjualbelikan atau disebarluaskan kepada pihak ketiga
                  tanpa persetujuan Anda atau dasar hukum yang berlaku.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#183D32]">
                  4. Permintaan Pembaruan atau Penghapusan Data
                </h2>
                <p>
                  Anda dapat menghubungi kami melalui email{' '}
                  <a
                    href={`mailto:${companyConfig.contact.email}`}
                    className="text-[#183D32] underline"
                  >
                    {companyConfig.contact.email}
                  </a>{' '}
                  untuk mengajukan permohonan klarifikasi, pembaruan, atau penghapusan data bisnis
                  yang pernah dikirimkan.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-[15px] text-[#27312D] leading-[1.75]">
              <section className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#183D32]">
                  1. Ruang Lingkup Informasi
                </h2>
                <p>
                  Seluruh materi teks, profil, dan ilustrasi pada situs ini disediakan untuk
                  memberikan gambaran umum mengenai kegiatan usaha {companyConfig.displayName} di
                  bidang pengolahan susu bubuk dan layanan maklon B2B.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#183D32]">
                  2. Keakuratan dan Penawaran Bisnis
                </h2>
                <p>
                  Informasi operasional, spesifikasi produk, serta estimasi kerja sama dapat
                  diperbarui sewaktu-waktu oleh perusahaan. Kesepakatan maklon maupun pengadaan
                  produk hanya mengikat apabila dituangkan dalam dokumen penawaran dan perjanjian
                  tertulis yang disetujui para pihak berwenang.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#183D32]">
                  3. Larangan Penyalahgunaan
                </h2>
                <p>
                  Pengunjung dilarang mengirimkan konten spam melalui formulir permintaan penawaran
                  atau menyalahgunakan identitas {companyConfig.shortName} untuk tujuan yang
                  merugikan pihak lain.
                </p>
              </section>
            </div>
          )}

          <div className="pt-6 border-t border-[#E3E8E3]">
            <Link to="/kontak" className="text-sm font-semibold text-[#183D32] hover:underline">
              Hubungi Kami untuk Pertanyaan Terkait
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
