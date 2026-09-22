const base = process.env.NEXT_PUBLIC_SITE_URL || "https://newrozrestaurant.com.au";

export default function sitemap() {
  const now = new Date();
  return ["", "/menu", "/order", "/gallery", "/contact"].map((p) => ({
    url: base + p,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7
  }));
}
