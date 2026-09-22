import OrderScreen from "./OrderScreen";

export const metadata = {
  title: "Order online & book a table",
  description: "Order Newroz Restaurant online for pickup or delivery, and request a table booking in Fairfield NSW.",
  alternates: { canonical: "/order" }
};

export default function OrderPage() { return <OrderScreen />; }
