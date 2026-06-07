import HomeLocalizedContent from "../components/HomeLocalizedContent";
import { Suspense } from "react";

export const metadata = {
  title: "Start | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Gemeinnützige Sozial- und Kulturarbeit in Hamburg — für Begegnung, Integration und Unterstützung im Alltag.",
};

export default function HomePage() {
  return (
    <Suspense fallback={<div className="page" />}>
      <HomeLocalizedContent />
    </Suspense>
  );
}
