export function onRequestPost(): Response {
  return Response.json(
    {
      ok: false,
      message: 'Fitur rekrutmen tidak lagi tersedia pada situs ini.',
    },
    { status: 410 }
  );
}
