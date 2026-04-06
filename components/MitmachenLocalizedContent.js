"use client";

import { useSearchParams } from "next/navigation";

const content = {
  de: {
    title: "Mitmachen",
    intro:
      "Wir freuen uns über Menschen, die sich aktiv einbringen oder den Verein dauerhaft unterstützen möchten.",
    ordinaryTitle: "Ordentliche Mitgliedschaft",
    ordinaryText:
      "Ordentliche Mitglieder nehmen am Vereinsleben aktiv teil und haben Stimm- und Wahlrecht gemäß Satzung. Die Aufnahme erfolgt auf schriftlichen Antrag beim Vorstand.",
    supporterTitle: "Fördermitgliedschaft",
    supporterText:
      "Fördermitglieder unterstützen den Verein ideell oder finanziell. Sie begleiten die Vereinsarbeit ohne Stimm- und Wahlrecht.",
    formTitle: "Mitgliedsantrag",
    formText: (
      <>
        Den Mitgliedsantrag stellen wir als Download bereit. Bitte senden Sie
        den ausgefüllten Antrag an aryobzazai.ev@hotmail.com.
      </>
    ),
    formButton: "Mitgliedsantrag herunterladen",
  },
  ps: {
    title: "ګډون",
    intro:
      "موږ د هغو خلکو هرکلی کوو چې غواړي فعاله ونډه واخلي یا ټولنه په دوامدار ډول ملاتړ کړي.",
    ordinaryTitle: "عادي غړیتوب",
    ordinaryText:
      "عادي غړي د ټولنې په فعالیتونو کې فعاله برخه اخلي او د اساسنامې له مخې د رایې او ټاکنې حق لري. منل د لیکلي غوښتنلیک له لارې د بورډ لخوا ترسره کېږي.",
    supporterTitle: "د ملاتړ غړیتوب",
    supporterText:
      "د ملاتړ غړي ټولنه په فکري یا مالي ډول مرسته کوي. دوی د رایې او ټاکنې حق نه لري.",
    formTitle: "د غړیتوب غوښتنلیک",
    formText: (
      <>
        د غړیتوب غوښتنلیک د ډاونلوډ لپاره چمتو دی. مهرباني وکړئ ډک شوی
        غوښتنلیک دې ایمېل ته راولېږئ:{" "}
        <span className="bidi-ltr" dir="ltr">
          aryobzazai.ev@hotmail.com
        </span>
      </>
    ),
    formButton: "د غړیتوب غوښتنلیک ډاونلوډ",
  },
};

export default function MitmachenLocalizedContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "ps" ? "ps" : "de";
  const t = content[lang];

  return (
    <div
      className={`page ${lang === "ps" ? "lang-ps" : ""}`}
      lang={lang === "ps" ? "ps" : "de"}
    >
      <section className="card">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>

        <h2>{t.ordinaryTitle}</h2>
        <p>{t.ordinaryText}</p>

        <h2>{t.supporterTitle}</h2>
        <p>{t.supporterText}</p>

        <h2>{t.formTitle}</h2>
        <p>{t.formText}</p>
        <div className="button-row">
          <a
            className="button"
            href="/downloads/Mitgliedsantrag_Vorlage.md"
            download
            aria-label="Mitgliedsantrag herunterladen"
          >
            {t.formButton}
          </a>
        </div>
      </section>
    </div>
  );
}
