import type { PagesContext } from './_types';

export function onRequestGet(context: PagesContext): Response {
  const url = new URL(context.request.url);
  const baseUrl = (context.env.APP_URL || url.origin).replace(/\/$/, '');

  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /karier

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
