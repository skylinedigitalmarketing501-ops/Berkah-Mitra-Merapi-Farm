export function onRequestGet(): Response {
  return Response.json(
    {
      ok: true,
      service: 'bmmf-b2b-corporate-web',
      runtime: 'cloudflare-pages',
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
