import Link from "next/link";
import { site } from "@/data/site";

export const metadata = { title: "Order received", robots: { index: false } };

export default function SuccessPage() {
  return (
    <section className="pad" style={{ padding: "80px 34px" }}>
      <h1 style={{ fontSize: "clamp(32px, 6vw, 52px)", margin: 0 }}>Order received</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "46ch", color: "var(--muted)" }}>
        Thank you. Your payment went through and the kitchen has your order. We will call
        {" "}{site.phone} if we need anything. Pickup is usually 20–25 minutes.
      </p>
      <Link className="btn btn-primary" href="/">Back to the site</Link>
    </section>
  );
}
