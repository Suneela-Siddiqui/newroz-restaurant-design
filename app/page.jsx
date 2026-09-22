import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import MenuList from "@/components/MenuList";
import Reviews from "@/components/Reviews";
import VisitPanel from "@/components/VisitPanel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ribbon />
      <MenuList />
      <Reviews />
      <VisitPanel />
    </>
  );
}
