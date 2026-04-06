"use client";

import { useSearchParams } from "next/navigation";

const content = {
  de: {
    title: "Kontakt",
    intro: "Bei Fragen oder Anliegen können Sie uns gerne kontaktieren.",
    labelEmail: "E-Mail:",
    labelAddress: "Adresse:",
    labelPhone: "Telefon:",
    note:
      "Anfragen zu Mitgliedschaft, Zusammenarbeit oder Projekten richten Sie bitte an unsere Vereins-E-Mail:",
  },
  ps: {
    title: "اړیکه",
    intro: "که پوښتنه یا غوښتنه لرئ، مهرباني وکړئ له موږ سره اړیکه ونیسئ.",
    labelEmail: "برېښنالیک:",
    labelAddress: "پته:",
    labelPhone: "ټیلیفون:",
    note:
      "د غړیتوب، همکارۍ او پروژو اړوند پوښتنې مهرباني وکړئ زموږ د ټولنې ایمېل ته واستوئ:",
  },
};

export default function KontaktLocalizedContent() {
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

        <div className="contact-block">
          <p>
            <strong>{t.labelEmail}</strong>{" "}
            <span className="bidi-ltr" dir="ltr">
              aryobzazai.ev@hotmail.com
            </span>
          </p>
          <p>
            <strong>{t.labelAddress}</strong>{" "}
            <span className="bidi-ltr" dir="ltr">
              Postfach 26 11 13, 20501 Hamburg
            </span>
          </p>
          <p>
            <strong>{t.labelPhone}</strong>{" "}
            <span className="bidi-ltr" dir="ltr">
              0163 9507480
            </span>
          </p>
        </div>

        <p>
          {t.note}{" "}
          <span className="bidi-ltr" dir="ltr">
            aryobzazai.ev@hotmail.com
          </span>
          .
        </p>
      </section>
    </div>
  );
}
