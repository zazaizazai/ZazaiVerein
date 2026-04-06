import HomeLocalizedContent from "../components/HomeLocalizedContent";
import { Suspense } from "react";

export const metadata = {
  title: "Start | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Sozial- und Kulturarbeit in Hamburg - gemeinnützig, offen und verlässlich.",
};

export default function HomePage() {
  return (
    <Suspense fallback={<div className="page" />}>
      <HomeLocalizedContent />
    </Suspense>
  );
}
