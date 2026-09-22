"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "./Providers";
import { locales } from "@/lib/i18n";
import CartDrawer from "./CartDrawer";

const links = [
  { href: "/", key: "home" },
  { href: "/menu", key: "menu" },
  { href: "/order", key: "order" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" }
];

export default function Header() {
  const { t, lang, setLang, count, setCartOpen } = useApp();
  const path = usePathname();
  return (
    <>
      <div className="topbar pad">
        <Link href="/" className="brand">Newroz</Link>
        <nav className="nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "active" : ""}>{t(l.key)}</Link>
          ))}
        </nav>
        <select className="langpick" value={lang} onChange={(e) => setLang(e.target.value)} aria-label="Language">
          {locales.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
        <button className="cartbtn" onClick={() => setCartOpen(true)}>
          {t("cart")}{count > 0 ? " (" + count + ")" : ""}
        </button>
      </div>
      <CartDrawer />
    </>
  );
}
