"use client";
import { useApp } from "./Providers";

export default function Ribbon() {
  const { t } = useApp();
  return (
    <div className="ribbon">
      <strong>{t("freeSoup")}</strong>
      <span style={{ color: "#f4dcc2" }}>{t("freeSoupNote")}</span>
    </div>
  );
}
