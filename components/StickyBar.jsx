"use client";
import { site, mapsUrl } from "@/data/site";
import { useApp } from "./Providers";

export default function StickyBar() {
  const { t } = useApp();
  return (
    <div className="stickybar">
      <a className="a1" href={site.phoneHref}>{t("callToOrder")}</a>
      <a className="a2" href={mapsUrl} target="_blank" rel="noopener">{t("directions")}</a>
    </div>
  );
}
