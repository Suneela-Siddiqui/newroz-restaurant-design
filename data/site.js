export const site = {
  name: "Newroz Restaurant",
  nameAr: "مطعم نوروز",
  tagline: {
    en: "Charcoal-grilled kebabs, whole fish and slow-cooked lamb, with bread out of the tandoor and lentil soup on the house.",
    ar: "كباب على الفحم وسمك كامل ولحم غنم مطهو ببطء، مع خبز التنور وشوربة العدس مجاناً.",
    ku: "کەبابی سەر خەڵووز، ماسی تەواو و گۆشتی مەڕ بە هێمنی لێنراو، لەگەڵ نانی تەنوور و شۆربەی نیسک بەخۆڕایی."
  },
  phone: "+61 2 9754 1118",
  phoneHref: "tel:+61297541118",
  email: "hello@newrozrestaurant.com.au",
  address: { line1: "8/7 Nelson St", line2: "Fairfield NSW 2165", country: "Australia" },
  mapsQuery: "8/7 Nelson St, Fairfield NSW 2165",
  rating: 4.9,
  reviewCount: 1382,
  priceRange: "$20-40",
  // Replace with the real weekly hours.
  hours: [
    { day: "Monday", open: "11:00", close: "20:00" },
    { day: "Tuesday", open: "11:00", close: "20:00" },
    { day: "Wednesday", open: "11:00", close: "20:00" },
    { day: "Thursday", open: "11:00", close: "20:00" },
    { day: "Friday", open: "11:00", close: "20:00" },
    { day: "Saturday", open: "11:00", close: "20:00" },
    { day: "Sunday", open: "11:00", close: "20:00" }
  ],
  amenities: [
    "Wheelchair accessible", "Outdoor seating", "Good for kids", "Good for groups",
    "Table service", "Catering", "Cards & NFC payments", "Casual & cozy"
  ],
  reviews: [
    { quote: "You walk in and you are hit with the aroma of the flame grill and it's just incredible.", author: "Lisa R", note: "Local Guide" },
    { quote: "The bread is so fresh and amazing, literally comes straight from the tandoor.", author: "Basman Matthew" },
    { quote: "Tastes like home. Every dish reminded me of the flavours I grew up with.", author: "ahmed AL-Shammery" },
    { quote: "Came in for a kabab take away and left with a tasty complimentary soup while I waited.", author: "Maya S" }
  ],
  gallery: [
    { src: "/photos/mixed-grill.jpg", alt: "Mixed grill plate with kebab, chicken tikka, grilled tomato and pickles" },
    { src: "/photos/butterfly-fish.jpg", alt: "Grilled butterfly fish with lemon and onion salad" },
    { src: "/photos/tabouli.jpg", alt: "Tabouli salad with pomegranate" },
    { src: "/photos/hummus.jpg", alt: "Hummus with paprika and olive oil" },
    { src: "/photos/lamb-neck-rice.jpg", alt: "Lamb neck with rice and eggplant soup" },
    { src: "/photos/white-bean-soup.jpg", alt: "White bean soup" },
    { src: "/photos/chai.jpg", alt: "Iraqi tea in a traditional glass" }
  ]
};

export const mapsUrl = "https://maps.google.com/?q=" + encodeURIComponent(site.mapsQuery);
export const mapsEmbedUrl = "https://www.google.com/maps?q=" + encodeURIComponent(site.mapsQuery) + "&output=embed";
