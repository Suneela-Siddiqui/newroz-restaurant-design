export const locales = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ku", label: "کوردی", dir: "rtl" },
  { code: "ar", label: "العربية", dir: "rtl" }
];

const dict = {
  en: {
    home: "Home", menu: "Menu", order: "Order", gallery: "Gallery", contact: "Contact",
    callToOrder: "Call to order", directions: "Directions", orderOnline: "Order online",
    bookTable: "Book a table", theMenu: "The Menu",
    pricesNote: "All prices in AUD. Every grill plate comes with salad and two breads.",
    freeSoup: "Complimentary lentil soup and tandoor bread",
    freeSoupNote: "baked fresh with every order",
    guestsSay: "What guests say", reviewsFrom: "from {n} Google reviews",
    findUs: "Find us", hours: "Hours", openInMaps: "Open in Maps", goodToKnow: "Good to know",
    add: "Add", cart: "Your order", cartEmpty: "Nothing added yet.",
    subtotal: "Subtotal", checkout: "Pay and place order", remove: "Remove",
    pickup: "Pickup", delivery: "Delivery", callForThis: "Call to order",
    name: "Name", phone: "Phone", email: "Email", date: "Date", time: "Time",
    guests: "Guests", notes: "Notes", requestBooking: "Request booking",
    message: "Message", send: "Send enquiry",
    bookingSent: "Booking request sent. We will call to confirm.",
    enquirySent: "Thanks - we will get back to you shortly.",
    sending: "Sending...", perPerson: "per person", dineIn: "Dine-in", takeout: "Takeout",
    reservations: "Reservations", popular: "Popular", weekend: "Weekend"
  },
  ar: {
    home: "الرئيسية", menu: "القائمة", order: "اطلب", gallery: "الصور", contact: "اتصل بنا",
    callToOrder: "اتصل للطلب", directions: "الاتجاهات", orderOnline: "اطلب أونلاين",
    bookTable: "احجز طاولة", theMenu: "قائمة الطعام",
    pricesNote: "جميع الأسعار بالدولار الأسترالي. كل طبق مشاوي يشمل السلطة وخبزين.",
    freeSoup: "شوربة عدس وخبز تنور مجاناً",
    freeSoupNote: "تُخبز طازجة مع كل طلب",
    guestsSay: "ماذا يقول ضيوفنا", reviewsFrom: "من {n} تقييم على جوجل",
    findUs: "موقعنا", hours: "ساعات العمل", openInMaps: "افتح في الخرائط", goodToKnow: "معلومات مفيدة",
    add: "أضف", cart: "طلبك", cartEmpty: "لم تضف شيئاً بعد.",
    subtotal: "المجموع", checkout: "ادفع وأكمل الطلب", remove: "حذف",
    pickup: "استلام", delivery: "توصيل", callForThis: "اتصل للطلب",
    name: "الاسم", phone: "الهاتف", email: "البريد الإلكتروني", date: "التاريخ", time: "الوقت",
    guests: "عدد الأشخاص", notes: "ملاحظات", requestBooking: "اطلب الحجز",
    message: "الرسالة", send: "أرسل",
    bookingSent: "تم إرسال طلب الحجز. سنتصل بك للتأكيد.",
    enquirySent: "شكراً - سنتواصل معك قريباً.",
    sending: "جار الإرسال...", perPerson: "للشخص", dineIn: "تناول في المطعم", takeout: "سفري",
    reservations: "حجوزات", popular: "الأكثر طلباً", weekend: "نهاية الأسبوع"
  },
  ku: {
    home: "سەرەتا", menu: "خواردن", order: "داواکردن", gallery: "وێنەکان", contact: "پەیوەندی",
    callToOrder: "پەیوەندی بکە بۆ داواکردن", directions: "ڕێنیشاندەر", orderOnline: "داواکردنی ئۆنلاین",
    bookTable: "مێز بگرە", theMenu: "لیستی خواردن",
    pricesNote: "هەموو نرخەکان بە دۆلاری ئوسترالی. هەر قاپێکی برژاو زەڵاتە و دوو نانی لەگەڵدایە.",
    freeSoup: "شۆربەی نیسک و نانی تەنوور بەخۆڕایی",
    freeSoupNote: "تازە بۆ هەر داواکارییەک",
    guestsSay: "میوانەکان چی دەڵێن", reviewsFrom: "لە {n} هەڵسەنگاندنی گووگڵ",
    findUs: "شوێنمان", hours: "کاتژمێرەکان", openInMaps: "لە نەخشەدا بکەرەوە", goodToKnow: "زانیاری بەسوود",
    add: "زیادکە", cart: "داواکاریت", cartEmpty: "هێشتا شتێک زیاد نەکراوە.",
    subtotal: "کۆی گشتی", checkout: "پارەدان و ناردن", remove: "لابردن",
    pickup: "وەرگرتن", delivery: "گەیاندن", callForThis: "پەیوەندی بکە",
    name: "ناو", phone: "تەلەفۆن", email: "ئیمەیل", date: "بەروار", time: "کات",
    guests: "ژمارەی کەس", notes: "تێبینی", requestBooking: "داوای مێز بکە",
    message: "نامە", send: "بنێرە",
    bookingSent: "داواکاریی مێزگرتن نێردرا. پەیوەندی دەکەین بۆ دڵنیاکردن.",
    enquirySent: "سوپاس - بەم زووانە پەیوەندی دەکەین.",
    sending: "دەنێردرێت...", perPerson: "بۆ هەر کەس", dineIn: "لە ناوەوە", takeout: "بردن",
    reservations: "مێزگرتن", popular: "بەناوبانگ", weekend: "کۆتایی هەفتە"
  }
};

export function makeT(lang) {
  const table = dict[lang] || dict.en;
  return function t(key, vars) {
    let s = table[key] != null ? table[key] : dict.en[key] != null ? dict.en[key] : key;
    if (vars) Object.keys(vars).forEach((k) => { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  };
}

// Localised field helper: tr({en,ar,ku}, lang)
export function tr(field, lang) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || "";
}

export function dirFor(lang) {
  const l = locales.find((x) => x.code === lang);
  return l ? l.dir : "ltr";
}
