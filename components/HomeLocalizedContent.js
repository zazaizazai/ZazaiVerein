"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const content = {
  de: {
    subtitle:
      "Gemeinnützige Sozial- und Kulturarbeit in Hamburg — für Begegnung, Integration und Unterstützung im Alltag.",
    intro:
      "Wir fördern Begegnung zwischen Menschen unterschiedlicher Herkunft und Kulturen sowie gesellschaftliche Teilhabe. Dazu bieten wir soziale und bildungsbezogene Angebote sowie Unterstützung für bedürftige Menschen und Familien.",
    ctaJoin: "Mitmachen",
    ctaContact: "Kontakt aufnehmen",
    aboutTitle: "Über den Verein",
    aboutText1: (
      <>
        Der Aryob Zazai Sozial- und Kulturverein e.V. ist ein gemeinnütziger
        Verein mit Sitz in Hamburg. Wir setzen uns für Toleranz,
        gegenseitiges Verständnis und praktische Hilfe ein — durch
        Veranstaltungen, Begegnungsangebote und Unterstützung im Alltag.
      </>
    ),
    aboutText2:
      "Wir sind parteipolitisch unabhängig und überkonfessionell. Unser Handeln ist geprägt von Transparenz, Verlässlichkeit und respektvollem Miteinander.",
    joinTitle: "Mitmachen",
    joinText:
      "Mitgliedschaft ist als ordentliche Mitgliedschaft oder Fördermitgliedschaft möglich. Wenn Sie sich einbringen oder den Verein unterstützen möchten, finden Sie alle Informationen unter „Mitmachen“.",
    joinLink: "Zur Seite Mitmachen",
    contactTitle: "Kontakt",
    contactText: (
      <>
        Für Fragen zu Vereinsarbeit, Mitgliedschaft oder Kooperationen erreichen
        Sie uns über aryobzazai.ev@hotmail.com.
      </>
    ),
    contactLink: "Zur Kontaktseite",
  },
  ps: {
    subtitle:
      "په هامبورګ کې ټولنیز او کلتوري کار - عامه ګټه، پرانیستی او د باور وړ.",
    intro:
      "موږ د لیدنې، ادغام او ټولنیز ګډون لپاره کار کوو. زموږ فعالیت د ټولنې په اساسنامې کې ټاکل شویو عامه ګټې او مرستندویه موخو ته ژمن دی.",
    ctaJoin: "ګډون وکړئ",
    ctaContact: "اړیکه ونیسئ",
    aboutTitle: "د ټولنې په اړه",
    aboutText1: (
      <>
        <span className="bidi-ltr" dir="ltr" lang="de">
          Aryob Zazai Sozial- und Kulturverein e.V.
        </span>{" "}
        په هامبورګ کې یو عامه ګټې ټولنیز او کلتوري بنسټ دی. موږ د یو بل سره
        اړیکه، یووالی او عملي ملاتړ پیاوړی کوو.
      </>
    ),
    aboutText2:
      "زموږ د کار بنسټ روڼتیا، باور او درناوی دی.",
    joinTitle: "ګډون",
    joinText:
      "غړیتوب د عادي غړیتوب او د ملاتړ غړیتوب په بڼه ممکن دی. که غواړئ ونډه واخلئ یا ټولنه ملاتړ کړئ، د «ګډون» برخه وګورئ.",
    joinLink: "د ګډون پاڼې ته لاړ شئ",
    contactTitle: "اړیکه",
    contactText: (
      <>
        د ټولنې د کار، غړیتوب او همکارۍ په اړه پوښتنې مو دې ایمېل ته
        راولېږئ:{" "}
        <span className="bidi-ltr" dir="ltr">
          aryobzazai.ev@hotmail.com
        </span>
      </>
    ),
    contactLink: "د اړیکې پاڼې ته لاړ شئ",
  },
};

function withLang(href, lang) {
  if (lang === "de") {
    return href;
  }
  return `${href}?lang=${lang}`;
}

export default function HomeLocalizedContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "ps" ? "ps" : "de";
  const t = content[lang];

  return (
    <div
      className={`page ${lang === "ps" ? "lang-ps" : ""}`}
      lang={lang === "ps" ? "ps" : "de"}
    >
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">
          <span className="bidi-ltr hero-title-ltr" dir="ltr" lang="de">
            Aryob Zazai Sozial- und Kulturverein e.V.
          </span>
        </h1>
        <p className="muted">{t.subtitle}</p>
        <p>{t.intro}</p>
        <div className="button-row">
          <Link className="button" href={withLang("/mitmachen", lang)}>
            {t.ctaJoin}
          </Link>
          <Link className="button secondary" href={withLang("/kontakt", lang)}>
            {t.ctaContact}
          </Link>
        </div>
      </section>

      <section className="card" aria-labelledby="verein">
        <h2 id="verein">{t.aboutTitle}</h2>
        <p>{t.aboutText1}</p>
        <p>{t.aboutText2}</p>
      </section>

      <section className="card" aria-labelledby="mitmachen">
        <h2 id="mitmachen">{t.joinTitle}</h2>
        <p>{t.joinText}</p>
        <Link className="button secondary" href={withLang("/mitmachen", lang)}>
          {t.joinLink}
        </Link>
      </section>

      <section className="card" aria-labelledby="kontakt">
        <h2 id="kontakt">{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <Link className="button secondary" href={withLang("/kontakt", lang)}>
          {t.contactLink}
        </Link>
      </section>
    </div>
  );
}
