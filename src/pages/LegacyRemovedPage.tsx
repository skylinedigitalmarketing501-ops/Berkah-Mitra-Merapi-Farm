import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export function LegacyRemovedPage() {
  return (
    <>
      <SeoHead
        title="Halaman Tidak Tersedia — CV. Berkah Mitra Merapi Farm"
        description="Halaman rekrutmen tidak lagi digunakan. Website resmi CV. Berkah Mitra Merapi Farm berfokus pada profil perusahaan, layanan maklon, dan produk susu bubuk B2B."
        path="/karier"
      />
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-xl px-4 text-center space-y-5">
          <p className="font-mono text-xs font-medium text-[#737D77]">410 · HALAMAN DIHAPUS</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#183D32]">
            Halaman Tidak Lagi Tersedia
          </h1>
          <p className="text-sm sm:text-base text-[#737D77] leading-relaxed">
            Halaman yang Anda buka telah dinonaktifkan. Website resmi CV. Berkah Mitra Merapi Farm
            kini berfokus pada informasi profil perusahaan, layanan maklon susu bubuk, dan
            pemesanan produk B2B.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#183D32] border border-[#E3E8E3] hover:bg-[#F5F3ED] rounded-[10px] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Kembali ke Beranda</span>
            </Link>
            <Link
              to="/layanan-maklon"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors"
            >
              <span>Jelajahi Layanan Maklon</span>
              <ArrowRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
