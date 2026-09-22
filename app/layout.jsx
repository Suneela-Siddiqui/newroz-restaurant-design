import { Bitter, Karla, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { site, mapsUrl } from "@/data/site";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import StickyBar from "@/components/StickyBar";
import Footer from "@/components/Footer";

const bitter = Bitter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bitter", display: "swap" });
const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-karla", display: "swap" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["400", "600"], variable: "--font-kufi", display: "swap" });

const url = process.env.NEXT_PUBLIC_SITE_URL || "https://newrozrestaurant.com.au";

export const metadata = {
  metadataBase: new URL(url),
  title: { default: "Newroz Restaurant - Iraqi & Kurdish charcoal grill in Fairfield", template: "%s | Newroz Restaurant" },
  description: "Charcoal-grilled kebabs, whole fish and slow-cooked lamb in Fairfield NSW. Dine-in, takeout, online ordering and table bookings.",
  keywords: ["Iraqi restaurant Fairfield", "Kurdish restaurant Sydney", "charcoal grill Fairfield", "kebab Fairfield", "Newroz Restaurant"],
  openGraph: {
    title: "Newroz Restaurant - Fairfield NSW",
    description: "Iraqi and Kurdish charcoal grill. Kebabs, whole fish, slow-cooked lamb, tandoor bread.",
    url, siteName: site.name, locale: "en_AU", type: "website",
    images: [{ url: "/photos/mixed-grill.jpg", width: 1200, height: 900, alt: "Mixed grill plate" }]
  },
  alternates: { canonical: "/" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  image: url + "/photos/mixed-grill.jpg",
  telephone: site.phone,
  priceRange: site.priceRange,
  servesCuisine: ["Iraqi", "Kurdish", "Middle Eastern"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Fairfield",
    addressRegion: "NSW",
    postalCode: "2165",
    addressCountry: "AU"
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating, reviewCount: site.reviewCount },
  hasMap: mapsUrl,
  url,
  acceptsReservations: true,
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close
  }))
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={bitter.variable + " " + karla.variable + " " + kufi.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          <div className="shell">
            <Header />
            {children}
            <Footer />
          </div>
          <StickyBar />
        </Providers>
      </body>
    </html>
  );
}
