"use client";

import { useSearchParams } from "next/navigation";

const VEREINSPLANER_MITGLIEDSANTRAG_URL =
  "https://formular.vereinsplaner.com/embed/2d231e42-3909-4c83-9152-6f4feb3fe52c";

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
        Den Antrag könnt ihr direkt online ausfüllen. Alternativ steht eine
        Vorlage zum Download bereit; ausgefüllte Anträge sendet ihr bitte an{" "}
        <span className="bidi-ltr" dir="ltr">
          aryobzazai.ev@hotmail.com
        </span>
        .
      </>
    ),
    formOnlineButton: "Antrag online stellen",
    formOnlineAria:
      "Mitgliedsantrag online stellen (Vereinsplaner, neuer Tab)",
    formButton: "Vorlage herunterladen",
    formDownloadAria: "Mitgliedsantrag-Vorlage als Datei herunterladen",
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
        تاسو کولی شئ غوښتنلیک په مستقیم ډول آنلاین ډک کړئ. د بدیل په توګه
        ډاونلوډ لپاره یو نمونه شتون لري؛ ډک شوی غوښتنلیک مهرباني وکړئ دې
        ایمېل ته ولېږئ:{" "}
        <span className="bidi-ltr" dir="ltr">
          aryobzazai.ev@hotmail.com
        </span>
      </>
    ),
    formOnlineButton: "آنلاین غړیتوب غوښتنه",
    formOnlineAria:
      "د غړیتوب غوښتنلیک آنلاین ډکول (Vereinsplaner، نوی ټاب)",
    formButton: "نمونه ډاونلوډ",
    formDownloadAria: "د غړیتوب غوښتنلیک نمونه د فایل په توګه ډاونلوډ",
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
        <div className="form-action-block">
          <div className="button-row">
            <a
              className="button"
              href={VEREINSPLANER_MITGLIEDSANTRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.formOnlineAria}
            >
              {t.formOnlineButton}
            </a>
          </div>
          <p className="muted">
            <a
              href="/downloads/Mitgliedsantrag_Vorlage.md"
              download
              aria-label={t.formDownloadAria}
            >
              {t.formButton}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
