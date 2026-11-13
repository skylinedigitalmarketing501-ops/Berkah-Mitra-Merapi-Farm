import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageSquare, Search } from 'lucide-react';
import { companyConfig, getWhatsAppProductUrl } from '../config/company';
import { b2bProducts, productCategories } from '../data/products';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { Reveal } from '../components/MotionPrimitives';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Kategori');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return b2bProducts.filter((product) => {
      const catMatch =
        selectedCategory === 'Semua Kategori' || product.category === selectedCategory;
      const queryMatch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      return catMatch && queryMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SeoHead
        title="Produk Susu Bubuk B2B — Berkah Mitra Merapi Farm"
        description="Katalog produk B2B susu kambing Etawa bubuk Berkah Mitra Merapi Farm untuk pengadaan bisnis, distribusi, dan permintaan penawaran resmi."
        path="/produk-susu-bubuk"
        breadcrumbs={[{ name: 'Produk Susu Bubuk', path: '/produk-susu-bubuk' }]}
      />

      {/* Header */}
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Produk Susu Bubuk' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
                KATALOG PRODUK B2B
              </p>
              <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[50px]">
                Produk Susu Kambing Etawa Bubuk untuk Pengadaan Bisnis.
              </h1>
              <p className="text-base sm:text-lg text-[#27312D] leading-[1.7] max-w-2xl">
                Halaman ini menyajikan kategori produksi BMMF bagi calon pembeli bisnis,
                distributor, dan mitra usaha. Pemesanan dijalankan melalui proses konsultasi dan
                penawaran resmi—bukan penjualan eceran.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/kontak?kebutuhan=Pemesanan%20Susu%20Bubuk"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[11px] transition-colors whitespace-nowrap"
                >
                  <span>Minta Penawaran Bisnis</span>
                  <ArrowRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
                </Link>
                <a
                  href={getWhatsAppProductUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#183D32] bg-white border border-[#E3E8E3] hover:bg-[#F5F3ED] rounded-[11px] transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Tanya via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SafeImage
                src={companyConfig.media.productSample.src}
                alt={companyConfig.media.productSample.alt}
                caption={companyConfig.media.productSample.caption}
                isPlaceholder={companyConfig.media.productSample.isPlaceholder}
                aspectClassName="aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter & B2B Catalog */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#E3E8E3]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E3E8E3]">
            <div className="flex flex-wrap items-center gap-2">
              {productCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-[#183D32] text-white'
                        : 'bg-[#F5F3ED] text-[#27312D] hover:bg-[#E3E8E3]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72 shrink-0">
              <Search
                className="w-4 h-4 text-[#737D77] absolute left-3.5 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <label htmlFor="product-search" className="sr-only">
                Cari produk susu bubuk
              </label>
              <input
                id="product-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kategori atau produk..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
              />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="space-y-8">
              {filteredProducts.map((product) => (
                <Reveal
                  key={product.id}
                  className="border border-[#E3E8E3] rounded-2xl overflow-hidden bg-white"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-start">
                    <div className="lg:col-span-5">
                      <SafeImage
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        aspectClassName="aspect-[4/3]"
                        isPlaceholder={product.isPlaceholderImage}
                        caption="Visual ilustrasi kategori produk — foto produk resmi per SKU ditampilkan setelah disetujui manajemen."
                      />
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-[#737D77]">
                          Kategori: {product.category}
                        </p>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#183D32]">
                          {product.name}
                        </h2>
                        <p className="text-[15px] text-[#27312D] leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E3E8E3]">
                        <div className="space-y-1">
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#737D77]">
                            Informasi Varian
                          </p>
                          <p className="text-sm text-[#27312D] leading-relaxed">
                            {product.variants || 'Disesuaikan melalui konsultasi spesifikasi.'}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#737D77]">
                            Informasi Kemasan
                          </p>
                          <p className="text-sm text-[#27312D] leading-relaxed">
                            {product.packagingInfo || 'Disesuaikan melalui konsultasi kemasan.'}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#F5F3ED] rounded-xl p-5 space-y-2.5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#183D32]">
                          Spesifikasi yang Disetujui untuk Publikasi
                        </p>
                        <ul className="space-y-2">
                          {product.approvedSpecifications.map((spec) => (
                            <li
                              key={spec}
                              className="flex items-start gap-2.5 text-sm text-[#27312D]"
                            >
                              <Check
                                className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          to={`/kontak?kebutuhan=Pemesanan%20Susu%20Bubuk&produk=${encodeURIComponent(
                            product.name
                          )}`}
                          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors whitespace-nowrap"
                        >
                          <span>Minta Penawaran</span>
                          <ArrowRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
                        </Link>
                        <a
                          href={getWhatsAppProductUrl(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#183D32] bg-white hover:bg-[#F5F3ED] border border-[#E3E8E3] rounded-[10px] transition-colors whitespace-nowrap"
                        >
                          <MessageSquare className="w-4 h-4" aria-hidden="true" />
                          <span>Tanya Produk</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="border border-[#E3E8E3] rounded-2xl p-10 text-center space-y-2">
              <p className="font-display font-semibold text-lg text-[#183D32]">
                Produk Tidak Ditemukan
              </p>
              <p className="text-sm text-[#737D77]">
                Tidak ada kategori atau produk yang sesuai dengan pencarian Anda.
              </p>
            </div>
          )}

          {/* Transparansi Katalog & Pengalihan Maklon */}
          <Reveal className="bg-[#F5F3ED] border border-[#E3E8E3] rounded-2xl p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#183D32]">
                Membutuhkan Produk dengan Merek Sendiri?
              </h2>
              <p className="text-sm text-[#27312D] leading-relaxed">
                Apabila Anda ingin memproduksi susu bubuk menggunakan merek perusahaan Anda
                sendiri, silakan pelajari alur dan ketentuan layanan maklon kami.
              </p>
            </div>
            <Link
              to="/layanan-maklon"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] hover:bg-[#102B24] rounded-[10px] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Lihat Layanan Maklon</span>
              <ArrowRight className="w-4 h-4 text-[#D3B785]" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
