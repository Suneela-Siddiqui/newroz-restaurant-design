"use client";
import ContactForm from "@/components/ContactForm";
import VisitPanel from "@/components/VisitPanel";
import { useApp } from "@/components/Providers";
import { site } from "@/data/site";

export default function ContactScreen() {
  const { t } = useApp();
  return (
    <>
      <section className="pad" style={{ paddingTop: 48 }}>
        <div className="sec-head" style={{ marginBottom: 24 }}>
          <div>
            <h2>{t("contact")}</h2>
            <p>Catering, large groups or a question about the menu — call {site.phone} or send a note.</p>
          </div>
        </div>
        <ContactForm />
      </section>
      <VisitPanel withMap />
    </>
  );
}
