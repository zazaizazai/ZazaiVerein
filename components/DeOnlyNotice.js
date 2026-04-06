"use client";

import { useSearchParams } from "next/navigation";

export default function DeOnlyNotice() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "ps" ? "ps" : "de";

  if (lang !== "ps") {
    return null;
  }

  return (
    <p className="de-only-note">
      یادونه: دا پاڼه اوس مهال یوازې په جرمني ژبه شتون لري.
    </p>
  );
}
