import Stripe from "stripe";
import { priceCart } from "@/lib/pricing";

export async function POST(req) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return Response.json({ error: "Online payment is not configured yet." }, { status: 503 });

  let body;
  try { body = await req.json(); } catch (e) { return Response.json({ error: "Bad request" }, { status: 400 }); }

  const { lines, total } = priceCart(body.lines);
  if (!lines.length) return Response.json({ error: "Your order is empty." }, { status: 400 });

  const base = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin;
  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lines.map((l) => ({
        quantity: l.qty,
        price_data: {
          currency: "aud",
          unit_amount: Math.round(l.unit * 100),
          product_data: { name: l.name }
        }
      })),
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: "fulfilment",
          label: { type: "custom", custom: "Pickup or delivery" },
          type: "dropdown",
          dropdown: { options: [{ label: "Pickup", value: "pickup" }, { label: "Delivery", value: "delivery" }] }
        }
      ],
      metadata: { orderTotal: String(total) },
      success_url: base + "/order/success",
      cancel_url: base + "/order"
    });
    return Response.json({ url: session.url });
  } catch (e) {
    return Response.json({ error: "Payment could not start. Please call to order." }, { status: 502 });
  }
}
