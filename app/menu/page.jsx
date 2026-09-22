import MenuList from "@/components/MenuList";
import Ribbon from "@/components/Ribbon";

export const metadata = {
  title: "Menu",
  description: "Full menu: mezze, charcoal grill, mixed plates, whole fish, rice and slow-cooked lamb. Prices in AUD.",
  alternates: { canonical: "/menu" }
};

export default function MenuPage() {
  return (
    <>
      <Ribbon />
      <MenuList />
    </>
  );
}
