"use client";
import Link from "next/link";
import Image from "next/image";
import { site, mapsUrl } from "@/data/site";
import { useApp } from "./Providers";

export default function Hero() {
  const { t, tr, lang } = useApp();
  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Iraqi &amp; Kurdish · Charcoal Grill</div>
          <h1>Newroz<br /><span>Restaurant</span></h1>
          {lang !== "en" && (
            <div dir="rtl" style={{ fontSize: 21, color: "#e5d2b6", marginTop: 14 }}>
              {lang === "ar" ? "مطعم نوروز · فيرفيلد" : "چێشتخانەی نەورۆز · فەیرفیلد"}
            </div>
          )}
          <p className="lede">{tr(site.tagline)}</p>

          <div className="ratingrow">
            <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
              <span className="ratingnum">{site.rating}</span>
              <span className="stars">★★★★★</span>
            </div>
            <div className="meta">
              {site.reviewCount.toLocaleString()} Google reviews<br />
              {site.priceRange} {t("perPerson")}
            </div>
          </div>

          <div className="cta-row">
            <Link className="btn btn-primary" href="/order">{t("orderOnline")}</Link>
            <a className="btn btn-ghost" href={site.phoneHref}>{t("callToOrder")}</a>
            <a className="btn btn-ghost" href={mapsUrl} target="_blank" rel="noopener">{t("directions")}</a>
          </div>

          <div className="tagline-row">
            <span>{t("dineIn")}</span><span>·</span>
            <span>{t("takeout")}</span><span>·</span>
            <span>{t("reservations")}</span>
          </div>
        </div>

        <div className="hero-photos">
          <div>
            <Image src="/photos/mixed-grill.jpg" alt="Mixed grill plate with kebab, chicken tikka, grilled tomato and pickles" width={900} height={700} priority />
            <Image src="/photos/butterfly-fish.jpg" alt="Grilled butterfly fish with lemon and onion salad" width={600} height={600} />
            <Image src="/photos/tabouli.jpg" alt="Tabouli salad" width={600} height={600} />
          </div>
        </div>
      </div>
    </header>
  );
}
