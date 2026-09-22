import { sendMail } from "@/lib/mail";

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch (e) { return Response.json({ error: "Bad request" }, { status: 400 }); }
  if (!b.name || !b.email || !b.message) return Response.json({ error: "Missing fields" }, { status: 400 });

  const text = ["Website enquiry", "", "Name:  " + b.name, "Email: " + b.email, "", b.message].join("\n");
  const res = await sendMail("Enquiry from " + b.name, text);
  if (!res.ok) return Response.json({ error: res.reason }, { status: 503 });
  return Response.json({ ok: true });
}
