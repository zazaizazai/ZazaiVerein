"use client";

import { useSearchParams } from "next/navigation";

const content = {
  de: {
    title: "Über uns",
    p1: (
      <>
        Der Aryob Zazai Sozial- und Kulturverein e.V. verfolgt gemeinnützige
        und mildtätige Zwecke. Im Mittelpunkt stehen gesellschaftlicher
        Zusammenhalt, kultureller Austausch und konkrete Unterstützung für
        Menschen, die Hilfe benötigen.
      </>
    ),
    p2: (
      <>
        Wir arbeiten parteipolitisch unabhängig und überkonfessionell. Unsere
        Vereinsarbeit ist auf langfristige, verlässliche Zusammenarbeit
        ausgerichtet und orientiert sich an der Satzung.
      </>
    ),
    p3: (
      <>
        Unsere Tätigkeit umfasst insbesondere kulturelle, soziale und
        bildungsbezogene Angebote. Dazu gehören Begegnung, Orientierung,
        Unterstützung im Alltag und die Förderung gesellschaftlicher Teilhabe.
      </>
    ),
  },
  ps: {
    title: "زموږ په اړه",
    p1: (
      <>
        <span className="hero-title-ltr" dir="ltr" lang="de">
          Aryob Zazai Sozial- und Kulturverein e.V.
        </span>{" "}
        عامه ګټې او خیراتي موخې تعقیبوي. زموږ په کار کې ټولنیز یوالی، کلتوري
        تبادلې او هغو خلکو ته عملي مرسته ده چې مرستې ته اړتیا لري.
      </>
    ),
    p2: (
      <>
        موږ له ګوند پلوي څخه ازاد او له مذهبي ډلبندۍ پرته کار کوو. زموږ
        ټولنیز کار پر اوږدمهاله، باوري همکارۍ ولاړ دی او د اساسنامې په رڼا کې
        ترسره کیږي.
      </>
    ),
    p3: (
      <>
        زموږ فعالیت په ځانګړې توګه کلتوري، ټولنیز او زده کړې پلي اړوند
        خدمتونه پکې راځي. پکې لیدنه، لارښوونه، ورځني ژوند کې مرسته او ټولنیز
        ګډون ته وده ورکول شامل دي.
      </>
    ),
  },
};

export default function UeberUnsLocalizedContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "ps" ? "ps" : "de";
  const t = content[lang];

  return (
    <div className={`page ${lang === "ps" ? "lang-ps" : ""}`}>
      <section className="card">
        <h1>{t.title}</h1>
        <p>{t.p1}</p>
        <p>{t.p2}</p>
        <p>{t.p3}</p>
      </section>
    </div>
  );
}
