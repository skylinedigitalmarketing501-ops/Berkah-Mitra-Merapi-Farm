import { useEffect } from 'react';
import { companyConfig } from '../config/company';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  articleSchema?: {
    headline: string;
    datePublished: string;
    description: string;
    image?: string;
  };
  breadcrumbs?: Array<{ name: string; path: string }>;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function SeoHead({
  title,
  description,
  path,
  type = 'website',
  articleSchema,
  breadcrumbs,
}: SeoHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes('Berkah Mitra Merapi Farm')
      ? title
      : `${title} — ${companyConfig.webName}`;
    document.title = fullTitle;

    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : companyConfig.canonicalBaseUrl;
    const canonicalUrl = `${origin}${path}`;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', companyConfig.displayName);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const existingJsonLd = document.getElementById('bmmf-structured-data');
    if (existingJsonLd) existingJsonLd.remove();

    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        name: companyConfig.officialName,
        alternateName: companyConfig.shortName,
        url: origin,
        logo: `${origin}${companyConfig.logo.src}`,
        description:
          'Perusahaan industri pengolahan susu kambing Etawa bubuk, mitra produksi susu bubuk, dan layanan maklon susu bubuk B2B.',
        knowsAbout: [
          'Maklon Susu Bubuk',
          'Maklon Susu Kambing Etawa',
          'Pengolahan Susu Kambing Etawa Bubuk',
          'Produksi Susu Bubuk B2B',
        ],
        email: companyConfig.contact.email,
        telephone: companyConfig.contact.whatsappDisplay,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Penggaron - Gn. Lemah No.89, Payakan, Gondowangi, Kec. Sawangan',
          addressLocality: 'Magelang',
          addressRegion: 'Jawa Tengah',
          postalCode: '56481',
          addressCountry: 'ID',
        },
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${origin}${crumb.path}`,
        })),
      });
    }

    if (articleSchema) {
      graph.push({
        '@type': 'Article',
        headline: articleSchema.headline,
        datePublished: articleSchema.datePublished,
        description: articleSchema.description,
        image: articleSchema.image ? `${origin}${articleSchema.image}` : undefined,
        author: {
          '@type': 'Organization',
          name: companyConfig.officialName,
        },
        publisher: {
          '@type': 'Organization',
          name: companyConfig.officialName,
        },
      });
    }

    const script = document.createElement('script');
    script.id = 'bmmf-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
    document.head.appendChild(script);
  }, [title, description, path, type, articleSchema, breadcrumbs]);

  return null;
}
