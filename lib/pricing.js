import { findItem } from "@/data/menu";
import { tr } from "@/lib/i18n";

// Server-side authority: never trust prices sent by the browser.
export function priceCart(lines) {
  const out = [];
  let total = 0;
  for (const line of lines || []) {
    const item = findItem(line.id);
    if (!item || typeof item.price !== "number") continue;
    const qty = Math.max(1, Math.min(50, parseInt(line.qty, 10) || 1));
    out.push({ id: item.id, name: tr(item.name, "en"), unit: item.price, qty, amount: item.price * qty });
    total += item.price * qty;
  }
  return { lines: out, total };
}
