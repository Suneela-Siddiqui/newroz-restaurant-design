// Single source of truth for the menu. Edit prices and dishes here only.
// name: { en, ar, ku } - ar/ku are optional and fall back to en.
// price: number (AUD) = orderable online. priceLabel: string = call to order.

export const menu = [
  {
    id: "mezze",
    name: { en: "Mezze & Salads", ar: "المقبلات والسلطات", ku: "مێزە و زەڵاتە" },
    blurb: { en: "To start, or to share across the table.", ar: "للبداية أو للمشاركة على الطاولة.", ku: "بۆ دەستپێک یان بەشکردن لەسەر مێز." },
    photos: ["/photos/hummus.jpg", "/photos/tabouli.jpg"],
    items: [
      { id: "hummus", name: { en: "Hummus", ar: "حمص" }, price: 10, tags: ["popular"] },
      { id: "tabouli", name: { en: "Tabouli", ar: "تبولة" }, price: 10, tags: ["popular"] },
      { id: "baba-ganoush", name: { en: "Baba Ganoush", ar: "بابا غنوج" }, price: 10 },
      { id: "fattoush", name: { en: "Fattoush", ar: "فتوش" }, price: 13 },
      { id: "cabbage-salad", name: { en: "Cabbage Salad", ar: "سلطة ملفوف" }, price: 8 }
    ]
  },
  {
    id: "grill",
    name: { en: "From the Charcoal Grill", ar: "من المشاوي", ku: "لە سەر خەڵووز" },
    blurb: { en: "Skewers grilled to order. Salad and two breads included.", ar: "تُشوى على الطلب. تشمل السلطة وخبزين.", ku: "بە داواکاری بریژێت. زەڵاتە و دوو نان لەگەڵدا." },
    layout: "columns",
    items: [
      { id: "kebab-2", name: { en: "2 Kebabs", ar: "٢ كباب" }, price: 15 },
      { id: "kebab-3", name: { en: "3 Kebabs", ar: "٣ كباب" }, price: 22 },
      { id: "chicken-tikka-2", name: { en: "2 Chicken Tikka" }, price: 17 },
      { id: "chicken-tikka-3", name: { en: "3 Chicken Tikka" }, price: 25 },
      { id: "lamb-tikka-2", name: { en: "2 Lamb Tikka" }, price: 20 },
      { id: "lamb-tikka-3", name: { en: "3 Lamb Tikka" }, price: 26 },
      { id: "fish-tikka-2", name: { en: "2 Fish Tikka" }, price: 18 },
      { id: "fish-tikka-3", name: { en: "3 Fish Tikka" }, price: 25 },
      { id: "liver-tikka-2", name: { en: "2 Liver Tikka" }, price: 15 },
      { id: "liver-haloulo", name: { en: "2 Liver Tikka & 1 Haloulo" }, price: 22 },
      { id: "liver-haloulo-lamb", name: { en: "1 Liver Tikka, 1 Haloulo, 1 Lamb Tikka" }, price: 23 },
      { id: "kebab-yellow-rice", name: { en: "2 Kebabs with Yellow Rice" }, price: 23 }
    ]
  },
  {
    id: "mixed",
    name: { en: "Mixed Plates", ar: "أطباق مشكلة", ku: "قاپی تێکەڵ" },
    blurb: { en: "Pick your combination - salad and two breads included.", ar: "اختر تشكيلتك - تشمل السلطة وخبزين.", ku: "تێکەڵەی خۆت هەڵبژێرە - زەڵاتە و دوو نان لەگەڵدا." },
    theme: "dark",
    layout: "columns",
    items: [
      { id: "mix-fish-chicken", name: { en: "1 Fish Tikka + 1 Chicken Tikka" }, price: 17 },
      { id: "mix-fish-kebab", name: { en: "1 Fish Tikka + 1 Kebab" }, price: 17 },
      { id: "mix-fish-lamb", name: { en: "1 Fish Tikka + 1 Lamb Tikka" }, price: 18 },
      { id: "mix-2fish-kebab", name: { en: "2 Fish Tikka + 1 Kebab" }, price: 22 },
      { id: "mix-2fish-chicken", name: { en: "2 Fish Tikka + 1 Chicken Tikka" }, price: 22 },
      { id: "mix-chicken-2kebab", name: { en: "1 Chicken Tikka + 2 Kebabs" }, price: 22 },
      { id: "mix-2fish-lamb", name: { en: "2 Fish Tikka + 1 Lamb Tikka" }, price: 23 },
      { id: "mix-lamb-2kebab", name: { en: "1 Lamb Tikka + 2 Kebabs" }, price: 23 },
      { id: "mix-2chicken-lamb", name: { en: "2 Chicken Tikka + 1 Lamb Tikka" }, price: 23 },
      { id: "mix-2lamb-fish", name: { en: "2 Lamb Tikka + 1 Fish Tikka" }, price: 24 },
      { id: "mix-lamb-kebab-chicken", name: { en: "1 Lamb Tikka + 1 Kebab + 1 Chicken Tikka" }, price: 24 },
      { id: "mix-fish-lamb-chicken", name: { en: "1 Fish + 1 Lamb + 1 Chicken Tikka" }, price: 25 }
    ]
  },
  {
    id: "rice",
    name: { en: "Rice, Soups & Slow-Cooked", ar: "الأرز والشوربات", ku: "برنج و شۆربە" },
    blurb: { en: "Soups come as okra, eggplant or white bean.", ar: "الشوربة: بامية أو باذنجان أو فاصولياء بيضاء.", ku: "شۆربە: باميە، بادەمجان یان لوبیای سپی." },
    photos: ["/photos/lamb-neck-rice.jpg", "/photos/white-bean-soup.jpg"],
    items: [
      { id: "lamb-neck-rice", name: { en: "Two Lamb Necks, Rice and Pickles" }, desc: { en: "With your choice of soup" }, price: 27 },
      { id: "rice-pickles-soup", name: { en: "Rice and Pickles with Soup" }, price: 16 },
      { id: "tishreeb", name: { en: "Tishreeb", ar: "تشريب" }, price: 25 },
      { id: "qouzi", name: { en: "Qouzi", ar: "قوزي" }, desc: { en: "Spicy rice, noodles, almonds and sultanas, with soup" }, price: 30, tags: ["weekend"] },
      { id: "spicy-rice", name: { en: "Spicy Rice" }, price: 12 }
    ]
  },
  {
    id: "fish",
    name: { en: "Fish", ar: "السمك", ku: "ماسی" },
    blurb: { en: "Whole fish grilled over charcoal.", ar: "سمك كامل مشوي على الفحم.", ku: "ماسی تەواو لەسەر خەڵووز." },
    items: [
      { id: "whole-fish", name: { en: "Grilled Whole Fish" }, desc: { en: "Priced by weight: 35, 40, 50 or 60" }, priceLabel: "35-60" },
      { id: "butterfly-fish", name: { en: "Grilled Butterfly Fish" }, price: 25 },
      { id: "talabia-fish", name: { en: "Talabia Fish" }, price: 25 }
    ]
  },
  {
    id: "wraps",
    name: { en: "Wraps", ar: "لفائف", ku: "پێچراوە" },
    blurb: { en: "All wraps $12.", ar: "كل اللفائف ١٢ دولار.", ku: "هەموو پێچراوەکان ١٢ دۆلار." },
    items: [
      { id: "wrap-kebab", name: { en: "Kebab Wrap" }, price: 12 },
      { id: "wrap-chicken", name: { en: "Chicken Tikka Wrap" }, price: 12 },
      { id: "wrap-lamb", name: { en: "Lamb Tikka Wrap" }, price: 12 },
      { id: "wrap-fish", name: { en: "Fish Tikka Wrap" }, price: 12 }
    ]
  },
  {
    id: "sides",
    name: { en: "Sides", ar: "الأطباق الجانبية", ku: "لاوەکی" },
    items: [
      { id: "nuggets-chips", name: { en: "Chicken Nuggets and Chips" }, desc: { en: "With dip and salad" }, price: 15 },
      { id: "chips-dip-m", name: { en: "Potato Chips and Dip (Medium)" }, price: 10 },
      { id: "chips-dip-l", name: { en: "Potato Chips and Dip (Large)" }, price: 15 }
    ]
  },
  {
    id: "dips",
    name: { en: "Dips", ar: "الصلصات", ku: "سۆس" },
    blurb: { en: "$3 each.", ar: "٣ دولار للواحدة.", ku: "٣ دۆلار بۆ یەکێک." },
    items: [
      { id: "dip-garlic", name: { en: "Garlic", ar: "ثوم" }, price: 3 },
      { id: "dip-chilli", name: { en: "Chilli", ar: "فلفل حار" }, price: 3 },
      { id: "dip-amba", name: { en: "Amba", ar: "عمبة" }, price: 3 },
      { id: "dip-peri", name: { en: "Peri Peri" }, price: 3 },
      { id: "dip-tomato", name: { en: "Tomato", ar: "طماطم" }, price: 3 },
      { id: "dip-bbq", name: { en: "Barbecue" }, price: 3 }
    ]
  }
];

export const allItems = menu.flatMap((c) => c.items.map((i) => ({ ...i, categoryId: c.id })));
export function findItem(id) { return allItems.find((i) => i.id === id); }
