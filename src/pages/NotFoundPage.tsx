import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Halaman Tidak Ditemukan — CV. Berkah Mitra Merapi Farm"
        description="Halaman yang Anda tuju tidak tersedia pada website resmi CV. Berkah Mitra Merapi Farm."
        path="/404"
      />
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-xl px-4 text-center space-y-5">
          <p className="font-mono text-xs font-medium text-[#737D77]">404</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#183D32]">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm sm:text-base text-[#737D77] leading-relaxed">
            Alamat halaman yang Anda buka tidak tersedia atau telah dipindahkan. Silakan kembali ke
            beranda untuk menelusuri informasi resmi BMMF.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
