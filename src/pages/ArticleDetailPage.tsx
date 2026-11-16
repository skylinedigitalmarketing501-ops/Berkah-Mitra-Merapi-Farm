import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Copy, Share2 } from 'lucide-react';
import { editorialArticles } from '../data/articles';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const article = editorialArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <h1 className="font-display font-bold text-3xl text-[#183D32]">Artikel Tidak Ditemukan</h1>
        <p className="text-sm text-[#57615B]">
          Tautan artikel yang Anda buka mungkin telah diperbarui atau tidak tersedia.
        </p>
        <Link
          to="/artikel"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#183D32] rounded-[10px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Kembali ke Daftar Artikel</span>
        </Link>
      </section>
    );
  }

  const relatedArticles = editorialArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <SeoHead
        title={`${article.title} — Artikel BMMF`}
        description={article.excerpt}
        path={`/artikel/${article.slug}`}
        type="article"
        articleSchema={{
          headline: article.title,
          datePublished: article.publishedAt,
          description: article.excerpt,
          image: article.coverImage,
        }}
        breadcrumbs={[
          { name: 'Artikel', path: '/artikel' },
          { name: article.title, path: `/artikel/${article.slug}` },
        ]}
      />

      <article className="bg-white py-7 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Artikel', path: '/artikel' }, { label: article.title }]} />

          <header className="space-y-4 pb-5 border-b border-[#E3E8E3]">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#57615B]">
              <span className="font-semibold text-[#183D32]">{article.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              {article.isExample && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-[#27312D]">
                    Contoh Konten Editorial (Menunggu Publikasi Resmi)
                  </span>
                </>
              )}
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#183D32] leading-[1.16]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#57615B] leading-relaxed">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium border border-[#E3E8E3] rounded-lg text-[#27312D] hover:bg-[#F5F3ED] transition-colors"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#183D32]" aria-hidden="true" />
                ) : (
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                )}
                <span>{copied ? 'Tautan Disalin' : 'Salin Tautan'}</span>
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${article.title} — ${shareUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium border border-[#E3E8E3] rounded-lg text-[#27312D] hover:bg-[#F5F3ED] transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Bagikan via WhatsApp</span>
              </a>
            </div>
          </header>

          <div className="py-5">
            <SafeImage
              src={article.coverImage}
              srcSet={article.coverImageSrcSet}
              sizes="(max-width: 896px) 100vw, 832px"
              width={960}
              height={540}
              alt={article.coverAlt}
              aspectClassName="aspect-[16/9]"
              caption="Visual ilustrasi artikel — menunggu dokumentasi foto resmi BMMF."
            />
          </div>

          <div className="space-y-4 text-base sm:text-[17px] text-[#27312D] leading-[1.75]">
            {article.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-[#E3E8E3]">
            <Link
              to="/artikel"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#183D32] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Kembali ke Semua Artikel</span>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-[#F5F3ED] border-t border-[#E3E8E3] py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-4">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#183D32]">
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <article
                key={rel.id}
                className="bg-white border border-[#E3E8E3] rounded-2xl p-6 space-y-2.5"
              >
                <p className="text-xs text-[#57615B]">
                  {rel.category} · {rel.publishedAt}
                </p>
                <h3 className="font-display font-bold text-lg text-[#183D32] leading-snug">
                  <Link to={`/artikel/${rel.slug}`} className="hover:underline">
                    {rel.title}
                  </Link>
                </h3>
                <p className="text-xs text-[#57615B] line-clamp-2">{rel.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
