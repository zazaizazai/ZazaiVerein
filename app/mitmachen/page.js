import MitmachenLocalizedContent from "../../components/MitmachenLocalizedContent";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { SITE_PAUSED } from "../../lib/sitePaused";

export const metadata = {
  title: "Mitmachen | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Informationen zur ordentlichen Mitgliedschaft und Fördermitgliedschaft beim Aryob Zazai Sozial- und Kulturverein e.V.",
};

export default function MitmachenPage() {
  if (SITE_PAUSED) {
    redirect("/");
  }

  return (
    <Suspense fallback={<div className="page" />}>
      <MitmachenLocalizedContent />
    </Suspense>
  );
}
