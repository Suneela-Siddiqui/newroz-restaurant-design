import { sendMail } from "@/lib/mail";

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch (e) { return Response.json({ error: "Bad request" }, { status: 400 }); }
  const need = ["name", "phone", "date", "time", "guests"];
  for (const k of need) if (!b[k]) return Response.json({ error: "Missing " + k }, { status: 400 });

  const text = [
    "New table booking request",
    "",
    "Name:   " + b.name,
    "Phone:  " + b.phone,
    "Date:   " + b.date,
    "Time:   " + b.time,
    "Guests: " + b.guests,
    "Notes:  " + (b.notes || "-")
  ].join("\n");

  const res = await sendMail("Booking: " + b.name + " · " + b.date + " " + b.time + " · " + b.guests + " guests", text);
  if (!res.ok) return Response.json({ error: res.reason }, { status: 503 });
  return Response.json({ ok: true });
}
