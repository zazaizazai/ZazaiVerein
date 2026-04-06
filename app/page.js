import Link from "next/link";

export const metadata = {
  title: "Start | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Sozial- und Kulturarbeit in Hamburg - gemeinnützig, offen und verlässlich.",
};

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">Aryob Zazai Sozial- und Kulturverein e.V.</h1>
        <p className="muted">
          Sozial- und Kulturarbeit in Hamburg - gemeinnützig, offen und
          verlässlich.
        </p>
        <p>
          Wir setzen uns für Begegnung, Integration und gesellschaftliche
          Teilhabe ein. Unsere Arbeit orientiert sich an den in der Satzung
          festgelegten gemeinnützigen und mildtätigen Zielen.
        </p>
        <div className="button-row">
          <Link className="button" href="/mitmachen">
            Mitmachen
          </Link>
          <Link className="button secondary" href="/kontakt">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <section className="card" aria-labelledby="verein">
        <h2 id="verein">Über den Verein</h2>
        <p>
          Der Aryob Zazai Sozial- und Kulturverein e.V. ist ein gemeinnütziger
          Sozial- und Kulturverein mit Sitz in Hamburg. Wir fördern Austausch,
          Zusammenhalt und praktische
          Unterstützung im Alltag.
        </p>
        <p>
          Grundlage unserer Arbeit sind Transparenz, Verlässlichkeit und
          respektvoller Umgang.
        </p>
      </section>

      <section className="card" aria-labelledby="mitmachen">
        <h2 id="mitmachen">Mitmachen</h2>
        <p>
          Mitgliedschaft ist als ordentliche Mitgliedschaft oder
          Fördermitgliedschaft möglich. Wenn Sie sich einbringen oder den
          Verein unterstützen möchten, finden Sie alle Informationen unter
          &quot;Mitmachen&quot;.
        </p>
        <Link className="button secondary" href="/mitmachen">
          Zur Seite Mitmachen
        </Link>
      </section>

      <section className="card" aria-labelledby="kontakt">
        <h2 id="kontakt">Kontakt</h2>
        <p>
          Für Fragen zu Vereinsarbeit, Mitgliedschaft oder Kooperationen
          erreichen Sie uns über aryobzazai.ev@hotmail.com.
        </p>
        <Link className="button secondary" href="/kontakt">
          Zur Kontaktseite
        </Link>
      </section>
    </div>
  );
}
