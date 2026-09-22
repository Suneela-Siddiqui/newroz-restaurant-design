"use client";
import { useState } from "react";
import { useApp } from "./Providers";

export default function CartDrawer() {
  const { t, tr, cart, total, setQty, cartOpen, setCartOpen } = useApp();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  if (!cartOpen) return null;

  async function checkout() {
    setBusy(true);
    setErr("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines: cart.map((l) => ({ id: l.id, qty: l.qty })) })
      });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; return; }
      setErr(data.error || "Checkout unavailable. Please call to order.");
    } catch (e) {
      setErr("Checkout unavailable. Please call to order.");
    }
    setBusy(false);
  }

  return (
    <>
      <div className="drawer-back" onClick={() => setCartOpen(false)} />
      <aside className="drawer" role="dialog" aria-label={t("cart")}>
        <header>
          <h2>{t("cart")}</h2>
          <button className="closex" onClick={() => setCartOpen(false)} aria-label="Close">×</button>
        </header>
        <div className="body">
          {cart.length === 0 && <p style={{ color: "var(--muted)" }}>{t("cartEmpty")}</p>}
          {cart.map((l) => (
            <div className="row" key={l.id}>
              <div className="label">
                <div className="nm">{tr(l.item.name)}</div>
                <div className="sub">${l.item.price} each</div>
              </div>
              <div className="qty">
                <button onClick={() => setQty(l.id, l.qty - 1)} aria-label={t("remove")}>−</button>
                <span>{l.qty}</span>
                <button onClick={() => setQty(l.id, l.qty + 1)} aria-label={t("add")}>+</button>
              </div>
              <div className="price">${l.amount}</div>
            </div>
          ))}
        </div>
        <div className="foot">
          <div className="total"><span>{t("subtotal")}</span><span>${total}</span></div>
          {err && <div style={{ fontSize: 13, color: "var(--ember-ink)" }}>{err}</div>}
          <button className="btn btn-primary" disabled={cart.length === 0 || busy} onClick={checkout}>
            {busy ? t("sending") : t("checkout")}
          </button>
        </div>
      </aside>
    </>
  );
}
