export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !data.name || !data.email) return Response.json({ ok: false, error: "missing fields" }, { status: 400 });
  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) return Response.json({ ok: false, error: "webhook not configured" }, { status: 500 });
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, source: "matrixkick.com", submitted_at: new Date().toISOString() })
  });
  return Response.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}

