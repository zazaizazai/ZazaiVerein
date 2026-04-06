"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const content = {
  de: {
    subtitle:
      "Sozial- und Kulturarbeit in Hamburg - gemeinnützig, offen und verlässlich.",
    intro:
      "Wir setzen uns für Begegnung, Integration und gesellschaftliche Teilhabe ein. Unsere Arbeit orientiert sich an den in der Satzung festgelegten gemeinnützigen und mildtätigen Zielen.",
    ctaJoin: "Mitmachen",
    ctaContact: "Kontakt aufnehmen",
    aboutTitle: "Über den Verein",
    aboutText1:
      "Der Aryob Zazai Sozial- und Kulturverein e.V. ist ein gemeinnütziger Sozial- und Kulturverein mit Sitz in Hamburg. Wir fördern Austausch, Zusammenhalt und praktische Unterstützung im Alltag.",
    aboutText2:
      "Grundlage unserer Arbeit sind Transparenz, Verlässlichkeit und respektvoller Umgang.",
    joinTitle: "Mitmachen",
    joinText:
      "Mitgliedschaft ist als ordentliche Mitgliedschaft oder Fördermitgliedschaft möglich. Wenn Sie sich einbringen oder den Verein unterstützen möchten, finden Sie alle Informationen unter „Mitmachen“.",
    joinLink: "Zur Seite Mitmachen",
    contactTitle: "Kontakt",
    contactText:
      "Für Fragen zu Vereinsarbeit, Mitgliedschaft oder Kooperationen erreichen Sie uns über aryobzazai.ev@hotmail.com.",
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
    aboutText1:
      "Aryob Zazai Sozial- und Kulturverein e.V. په هامبورګ کې یو عامه ګټې ټولنیز او کلتوري بنسټ دی. موږ د یو بل سره اړیکه، یووالی او عملي ملاتړ پیاوړی کوو.",
    aboutText2:
      "زموږ د کار بنسټ روڼتیا، باور او درناوی دی.",
    joinTitle: "ګډون",
    joinText:
      "غړیتوب د عادي غړیتوب او د ملاتړ غړیتوب په بڼه ممکن دی. که غواړئ ونډه واخلئ یا ټولنه ملاتړ کړئ، د «ګډون» برخه وګورئ.",
    joinLink: "د ګډون پاڼې ته لاړ شئ",
    contactTitle: "اړیکه",
    contactText:
      "د ټولنې د کار، غړیتوب او همکارۍ په اړه پوښتنې مو دې ایمېل ته راولېږئ: aryobzazai.ev@hotmail.com",
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
    <div className={`page ${lang === "ps" ? "lang-ps" : ""}`}>
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">Aryob Zazai Sozial- und Kulturverein e.V.</h1>
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
