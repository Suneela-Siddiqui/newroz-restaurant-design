const base = process.env.NEXT_PUBLIC_SITE_URL || "https://newrozrestaurant.com.au";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/order/success"] }],
    sitemap: base + "/sitemap.xml"
  };
}
