import MitmachenLocalizedContent from "../../components/MitmachenLocalizedContent";
import { Suspense } from "react";

export const metadata = {
  title: "Mitmachen | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Informationen zur ordentlichen Mitgliedschaft und Fördermitgliedschaft beim Aryob Zazai Sozial- und Kulturverein e.V.",
};

export default function MitmachenPage() {
  return (
    <Suspense fallback={<div className="page" />}>
      <MitmachenLocalizedContent />
    </Suspense>
  );
}
