import { Resend } from "resend";

export async function sendMail(subject, text) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_EMAIL_TO;
  const from = process.env.ORDER_EMAIL_FROM;
  if (!key || !to || !from) return { ok: false, reason: "mail-not-configured" };
  try {
    const resend = new Resend(key);
    await resend.emails.send({ from, to, subject, text });
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: "send-failed" };
  }
}
