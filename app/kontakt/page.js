import KontaktLocalizedContent from "../../components/KontaktLocalizedContent";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { SITE_PAUSED } from "../../lib/sitePaused";

export const metadata = {
  title: "Kontakt | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Kontaktinformationen für Anfragen zu Vereinsarbeit, Mitgliedschaft und Kooperationen.",
};

export default function KontaktPage() {
  if (SITE_PAUSED) {
    redirect("/");
  }

  return (
    <Suspense fallback={<div className="page" />}>
      <KontaktLocalizedContent />
    </Suspense>
  );
}
