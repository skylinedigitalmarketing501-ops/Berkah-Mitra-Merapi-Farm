import type { PagesContext } from './_types';

export async function onRequestGet(context: PagesContext): Promise<Response> {
  const indexUrl = new URL('/index.html', context.request.url);
  const assetResponse = await context.env.ASSETS.fetch(indexUrl);
  const body = await assetResponse.text();
  const headers = new Headers(assetResponse.headers);
  headers.set('Content-Type', 'text/html; charset=UTF-8');

  return new Response(body, {
    status: 410,
    headers,
  });
}
