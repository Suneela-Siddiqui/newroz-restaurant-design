"use client";
import { site } from "@/data/site";
import { useApp } from "./Providers";

export default function Footer() {
  const { t } = useApp();
  return (
    <>
      <section className="pad" style={{ paddingTop: 32 }}>
        <h3 className="kicker">{t("goodToKnow")}</h3>
        <div className="chips">
          {site.amenities.map((a) => <span className="chip" key={a}>{a}</span>)}
        </div>
      </section>
      <footer className="footer">
        <span>{site.name} · Fairfield, NSW</span>
        <span>{site.phone}</span>
      </footer>
    </>
  );
}
