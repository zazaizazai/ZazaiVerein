import UeberUnsLocalizedContent from "../../components/UeberUnsLocalizedContent";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { SITE_PAUSED } from "../../lib/sitePaused";

export const metadata = {
  title: "Über uns | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Zweck, Selbstverständnis und Tätigkeit des Aryob Zazai Sozial- und Kulturverein e.V. in Hamburg.",
};

export default function UeberUnsPage() {
  if (SITE_PAUSED) {
    redirect("/");
  }

  return (
    <Suspense fallback={<div className="page" />}>
      <UeberUnsLocalizedContent />
    </Suspense>
  );
}
