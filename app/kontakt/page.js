import KontaktLocalizedContent from "../../components/KontaktLocalizedContent";
import { Suspense } from "react";

export const metadata = {
  title: "Kontakt | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Kontaktinformationen für Anfragen zu Vereinsarbeit, Mitgliedschaft und Kooperationen.",
};

export default function KontaktPage() {
  return (
    <Suspense fallback={<div className="page" />}>
      <KontaktLocalizedContent />
    </Suspense>
  );
}
