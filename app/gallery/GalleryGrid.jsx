"use client";
import Image from "next/image";
import { site } from "@/data/site";
import { useApp } from "@/components/Providers";

export default function GalleryGrid() {
  const { t } = useApp();
  return (
    <section className="pad" style={{ paddingTop: 48 }}>
      <div className="sec-head" style={{ marginBottom: 24 }}>
        <div>
          <h2>{t("gallery")}</h2>
          <p>Photographed in the restaurant. Send more and they drop straight in.</p>
        </div>
      </div>
      <div className="gallery">
        {site.gallery.map((g) => (
          <Image key={g.src} src={g.src} alt={g.alt} width={800} height={600} />
        ))}
      </div>
    </section>
  );
}
