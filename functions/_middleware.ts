import type { PagesContext } from './_types';

export async function onRequest(
  context: PagesContext & { next: () => Promise<Response> }
): Promise<Response> {
  const url = new URL(context.request.url);

  // Permanent redirect apex domain -> https://www.berkahmitramerapifarm.com keeping full path & query string
  if (url.hostname === 'berkahmitramerapifarm.com') {
    const targetUrl = new URL(`https://www.berkahmitramerapifarm.com${url.pathname}${url.search}`);
    return Response.redirect(targetUrl.toString(), 301);
  }

  return context.next();
}
