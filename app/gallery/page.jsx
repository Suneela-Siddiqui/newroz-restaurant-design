import GalleryGrid from "./GalleryGrid";

export const metadata = {
  title: "Gallery",
  description: "Photos of the charcoal grill, whole fish, mezze and Iraqi chai at Newroz Restaurant, Fairfield.",
  alternates: { canonical: "/gallery" }
};

export default function GalleryPage() { return <GalleryGrid />; }
