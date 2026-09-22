"use client";
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { makeT, tr, dirFor } from "@/lib/i18n";
import { findItem } from "@/data/menu";

const Ctx = createContext(null);
export function useApp() { return useContext(Ctx); }

const LANG_KEY = "newroz.lang";
const CART_KEY = "newroz.cart";

export default function Providers({ children }) {
  const [lang, setLang] = useState("en");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const l = localStorage.getItem(LANG_KEY);
      if (l) setLang(l);
      const c = localStorage.getItem(CART_KEY);
      if (c) setCart(JSON.parse(c));
    } catch (e) {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    document.documentElement.dir = dirFor(lang);
  }, [lang, ready]);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }, [cart, ready]);

  const addItem = useCallback((id) => {
    setCart((c) => {
      const hit = c.find((l) => l.id === id);
      if (hit) return c.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
      return c.concat([{ id, qty: 1 }]);
    });
    setCartOpen(true);
  }, []);

  const setQty = useCallback((id, qty) => {
    setCart((c) => (qty <= 0 ? c.filter((l) => l.id !== id) : c.map((l) => (l.id === id ? { ...l, qty } : l))));
  }, []);

  const clear = useCallback(() => setCart([]), []);

  const value = useMemo(() => {
    const t = makeT(lang);
    const detailed = cart
      .map((l) => {
        const item = findItem(l.id);
        return item ? { ...l, item, amount: item.price * l.qty } : null;
      })
      .filter(Boolean);
    const total = detailed.reduce((s, l) => s + l.amount, 0);
    const count = detailed.reduce((s, l) => s + l.qty, 0);
    return { lang, setLang, t, tr: (field) => tr(field, lang), dir: dirFor(lang), cart: detailed, total, count, addItem, setQty, clear, cartOpen, setCartOpen };
  }, [lang, cart, cartOpen, addItem, setQty, clear]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
