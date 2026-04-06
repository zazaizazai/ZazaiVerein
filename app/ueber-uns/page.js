import UeberUnsLocalizedContent from "../../components/UeberUnsLocalizedContent";
import { Suspense } from "react";

export const metadata = {
  title: "Über uns | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Zweck, Selbstverständnis und Tätigkeit des Aryob Zazai Sozial- und Kulturverein e.V. in Hamburg.",
};

export default function UeberUnsPage() {
  return (
    <Suspense fallback={<div className="page" />}>
      <UeberUnsLocalizedContent />
    </Suspense>
  );
}
