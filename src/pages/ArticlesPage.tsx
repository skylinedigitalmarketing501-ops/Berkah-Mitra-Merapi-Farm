import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { articleCategories, editorialArticles } from '../data/articles';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { Reveal } from '../components/MotionPrimitives';

const ARTICLES_PER_PAGE = 4;

export function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Kategori');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const featuredArticle = editorialArticles.find((a) => a.featured) || editorialArticles[0];
  const isFiltering =
    selectedCategory !== 'Semua Kategori' || searchQuery.trim().length > 0;

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return editorialArticles.filter((article) => {
      if (!isFiltering && featuredArticle && article.id === featuredArticle.id) {
        return false;
      }
      const matchesCat =
        selectedCategory === 'Semua Kategori' || article.category === selectedCategory;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery, isFiltering, featuredArticle]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedArticles = filteredArticles.slice(
    (safePage - 1) * ARTICLES_PER_PAGE,
    safePage * ARTICLES_PER_PAGE
  );

  return (
    <>
      <SeoHead
        title="Artikel & Wawasan Industri — Berkah Mitra Merapi Farm"
        description="Artikel informasi perusahaan, kegiatan produksi, pengembangan SDM, industri susu kambing Etawa, edukasi pangan, dan layanan maklon susu bubuk Berkah Mitra Merapi Farm."
        path="/artikel"
        breadcrumbs={[{ name: 'Artikel', path: '/artikel' }]}
      />

      {/* Header */}
      <section className="bg-[#F5F3ED] border-b border-[#E3E8E3] py-7 sm:py-9">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-3">
          <Breadcrumb items={[{ label: 'Artikel' }]} />
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#183D32]">
            PUBLIKASI & INFORMASI
          </p>
          <h1 className="font-display font-bold text-[#183D32] tracking-[-0.025em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[50px]">
            Artikel & Informasi Perusahaan
          </h1>
          <p className="text-sm sm:text-base text-[#57615B] max-w-2xl leading-relaxed">
            Catatan redaksi: Artikel di bawah ini ditandai secara eksplisit sebagai contoh struktur
            konten editorial hingga publikasi resmi CV. Berkah Mitra Merapi Farm diterbitkan.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && !isFiltering && (
        <section className="bg-white py-7 sm:py-10 border-b border-[#E3E8E3]">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
            <Reveal className="bmmf-sheen-soft grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center border border-[#E3E8E3] rounded-2xl p-5 sm:p-6 lg:p-7 bg-white">
              <div className="lg:col-span-6">
                <SafeImage
                  src={featuredArticle.coverImage}
                  srcSet={featuredArticle.coverImageSrcSet}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  width={960}
                  height={600}
                  alt={featuredArticle.coverAlt}
                  aspectClassName="aspect-[16/10]"
                  caption=""
                />
              </div>
              <div className="lg:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#57615B]">
                  <span className="font-semibold text-[#183D32]">Artikel Utama</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.publishedAt}</span>
                  {featuredArticle.isExample && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>Contoh Konten Editorial</span>
                    </>
                  )}
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#183D32] leading-snug">
                  <Link to={`/artikel/${featuredArticle.slug}`} className="hover:underline">
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-[15px] text-[#57615B] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/artikel/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#183D32] hover:underline"
                  >
                    <span>Baca Artikel Selengkapnya</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filter, Search, Grid & Pagination */}
      <section className="bg-white py-8 sm:py-11">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#E3E8E3]">
            <div className="flex flex-wrap items-center gap-2">
              {articleCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-[#183D32] text-white'
                        : 'bg-[#F5F3ED] text-[#27312D] hover:bg-[#E3E8E3]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <Search
                className="w-4 h-4 text-[#57615B] absolute left-3.5 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <label htmlFor="article-search" className="sr-only">
                Cari artikel
              </label>
              <input
                id="article-search"
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari topik artikel..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#E3E8E3] rounded-[10px] focus:border-[#183D32] focus:outline-none"
              />
            </div>
          </div>

          {paginatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {paginatedArticles.map((article) => (
                <article
                  key={article.id}
                  className="border border-[#E3E8E3] rounded-2xl overflow-hidden bg-white hover:border-[#183D32]/40 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 pb-0">
                    <SafeImage
                      src={article.coverImage}
                      srcSet={article.coverImageSrcSet}
                      sizes="(max-width: 768px) 100vw, 45vw"
                      width={960}
                      height={540}
                      alt={article.coverAlt}
                      aspectClassName="aspect-[16/9]"
                      caption=""
                    />
                  </div>
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#57615B]">
                        <span className="font-medium text-[#183D32]">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.publishedAt}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                        {article.isExample && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>Contoh Editorial</span>
                          </>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#183D32] leading-snug">
                        <Link to={`/artikel/${article.slug}`} className="hover:underline">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-[#57615B] leading-relaxed">{article.excerpt}</p>
                    </div>

                    <div className="pt-3 border-t border-[#E3E8E3]">
                      <Link
                        to={`/artikel/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183D32] hover:underline"
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-[#E3E8E3] rounded-2xl p-10 text-center space-y-2">
              <p className="font-display font-semibold text-lg text-[#183D32]">
                Artikel Tidak Ditemukan
              </p>
              <p className="text-sm text-[#57615B]">
                Tidak ada artikel yang cocok dengan filter atau kata kunci pencarian Anda.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Navigasi halaman artikel"
              className="flex items-center justify-center gap-2 pt-4"
            >
              {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;
                const active = page === safePage;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium tabular-nums transition-colors ${
                      active
                        ? 'bg-[#183D32] text-white'
                        : 'border border-[#E3E8E3] text-[#27312D] hover:bg-[#F5F3ED]'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
