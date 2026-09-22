"use client";
import { site, mapsUrl, mapsEmbedUrl } from "@/data/site";
import { useApp } from "./Providers";

export default function VisitPanel({ withMap = false }) {
  const { t } = useApp();
  return (
    <section id="visit" className="pad" style={{ paddingTop: 60 }}>
      <div className="visit">
        <div>
          <h3>{t("findUs")}</h3>
          <p>{site.address.line1}<br />{site.address.line2}<br />{site.address.country}</p>
          <p style={{ marginTop: 14, fontSize: 14, fontWeight: 700 }}>
            <a href={mapsUrl} target="_blank" rel="noopener">{t("openInMaps")}</a>
          </p>
          <p style={{ marginTop: 14, fontSize: 13, color: "var(--on-dark-mute)" }}>
            Free parking lot and street parking, plus parking at the back.
          </p>
        </div>
        <div>
          <h3>{t("hours")}</h3>
          <table style={{ borderCollapse: "collapse", fontSize: 15 }}>
            <tbody>
              {site.hours.map((h) => (
                <tr key={h.day}>
                  <td style={{ padding: "3px 18px 3px 0", color: "var(--on-dark-mute)" }}>{h.day}</td>
                  <td style={{ padding: "3px 0" }}>{h.open} – {h.close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3>{t("order")} &amp; {t("bookTable")}</h3>
          <p><a href={site.phoneHref}>{site.phone}</a></p>
          <p style={{ marginTop: 8, fontSize: 14, color: "var(--on-dark-mute)" }}>
            Dine-in, takeout and catering. Reservations accepted — call ahead for groups.
          </p>
        </div>
      </div>
      {withMap && (
        <iframe className="mapframe" style={{ marginTop: 24 }} src={mapsEmbedUrl} title="Map to Newroz Restaurant" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      )}
    </section>
  );
}
