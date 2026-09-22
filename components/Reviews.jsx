"use client";
import { site } from "@/data/site";
import { useApp } from "./Providers";

export default function Reviews() {
  const { t } = useApp();
  return (
    <section className="pad" style={{ paddingTop: 68 }}>
      <div className="sec-head" style={{ marginBottom: 28 }}>
        <h2>{t("guestsSay")}</h2>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>
          {site.rating} {t("reviewsFrom", { n: site.reviewCount.toLocaleString() })}
        </span>
      </div>
      <div className="reviews">
        {site.reviews.map((r) => (
          <blockquote className="rev" key={r.author}>
            <div className="stars">★★★★★</div>
            <p>&ldquo;{r.quote}&rdquo;</p>
            <footer>{r.author}{r.note ? " · " + r.note : ""}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
