"use client";
import MenuList from "@/components/MenuList";
import BookingForm from "@/components/BookingForm";
import { useApp } from "@/components/Providers";
import { site } from "@/data/site";

export default function OrderScreen() {
  const { t, count, setCartOpen } = useApp();
  return (
    <>
      <section className="pad" style={{ paddingTop: 48 }}>
        <div className="sec-head">
          <div>
            <h2>{t("orderOnline")}</h2>
            <p>{t("pickup")} · {t("delivery")} — {t("pricesNote")}</p>
          </div>
          <button className="btn btn-outline" onClick={() => setCartOpen(true)}>
            {t("cart")}{count > 0 ? " (" + count + ")" : ""}
          </button>
        </div>
      </section>

      <MenuList orderable />

      <section className="pad" style={{ paddingTop: 68 }}>
        <div className="sec-head" style={{ marginBottom: 24 }}>
          <div>
            <h2>{t("bookTable")}</h2>
            <p>Groups over 10, call {site.phone} so we can set the room up.</p>
          </div>
        </div>
        <BookingForm />
      </section>
    </>
  );
}
