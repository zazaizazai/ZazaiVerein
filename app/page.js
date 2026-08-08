import HomeLocalizedContent from "../components/HomeLocalizedContent";
import { Suspense } from "react";
import { SITE_PAUSED } from "../lib/sitePaused";

export const metadata = SITE_PAUSED
  ? {
      title: "Website",
      description: "Seite vorübergehend offline.",
    }
  : {
      title: "Start | Aryob Zazai Sozial- und Kulturverein e.V.",
      description:
        "Gemeinnützige Sozial- und Kulturarbeit in Hamburg — für Begegnung, Integration und Unterstützung im Alltag.",
    };

export default function HomePage() {
  if (SITE_PAUSED) {
    return <div className="page" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div className="page" />}>
      <HomeLocalizedContent />
    </Suspense>
  );
}
