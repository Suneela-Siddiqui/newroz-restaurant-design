# Newroz Restaurant — web app

Next.js 15 (App Router) port of the Newroz Restaurant site. Online ordering with Stripe,
table bookings, contact enquiries, gallery, English / Kurdish / Arabic, and restaurant
structured data for Google.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the keys
npm run dev                  # http://localhost:3000
```

## Environment variables

| Variable | What it does |
| --- | --- |
| `STRIPE_SECRET_KEY` | Enables card checkout. Without it the cart shows "call to order". |
| `RESEND_API_KEY` | Sends booking and enquiry emails. |
| `ORDER_EMAIL_TO` | Where bookings and enquiries land. |
| `ORDER_EMAIL_FROM` | Verified sender domain in Resend. |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used for Stripe redirects, sitemap and Open Graph. |

The app degrades gracefully: every feature that needs a key shows a clear message and the
phone number when that key is absent, so it can ship before payments are set up.

## Editing the menu

`data/menu.js` is the only file to touch for dishes and prices. Each item:

```js
{ id: "kebab-2", name: { en: "2 Kebabs", ar: "٢ كباب" }, price: 15, tags: ["popular"] }
```

- `price` (number) — orderable online.
- `priceLabel` (string, e.g. `"35-60"`) — shows the range and a *call to order* link instead of an Add button.
- `tags` — `popular` or `weekend` render as pills.
- `desc` — optional second line.

Prices are re-read on the server at checkout (`lib/pricing.js`), so a tampered browser
cannot change what a customer is charged.

Restaurant details, hours, reviews and the photo list live in `data/site.js`.

## Translations

`lib/i18n.js` holds the interface strings for `en`, `ku`, `ar`; the picker is in the header
and RTL is applied automatically. Dish names fall back to English wherever `ar`/`ku` is
missing — **have a native speaker review the Kurdish and Arabic before launch**; the
included translations are a starting point, not a professional check.

## Photos

`public/photos/` — replace files in place, keep the names, or add entries to
`site.gallery`. All images go through `next/image` (AVIF/WebP, lazy loading).

## Deploy

Vercel is the least work: import this repo, paste the env vars, add the domain.
Netlify and Cloudflare Pages both run Next.js too. Nothing in the build references
anything outside this folder.

## Still to wire up

- Real weekly opening hours in `data/site.js` (placeholders are 11:00–20:00 daily).
- Delivery: Stripe collects pickup/delivery as a checkout field, but there is no address
  validation or delivery fee yet — add a zone check if you deliver.
- A Stripe webhook (`STRIPE_WEBHOOK_SECRET` is reserved in `.env.example`) if you want
  orders pushed to a printer or POS rather than email.
