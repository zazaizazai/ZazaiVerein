export const metadata = {
  title: "Mitmachen | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Informationen zur ordentlichen Mitgliedschaft und Foerdermitgliedschaft beim Aryob Zazai Sozial- und Kulturverein e.V.",
};

export default function MitmachenPage() {
  return (
    <div className="page">
      <section className="card">
        <h1>Mitmachen</h1>
        <p>
          Wir freuen uns ueber Menschen, die sich aktiv einbringen oder den
          Verein dauerhaft unterstuetzen moechten.
        </p>

        <h2>Ordentliche Mitgliedschaft</h2>
        <p>
          Ordentliche Mitglieder nehmen am Vereinsleben aktiv teil und haben
          Stimm- und Wahlrecht gemaess Satzung. Die Aufnahme erfolgt auf
          schriftlichen Antrag beim Vorstand.
        </p>

        <h2>Foerdermitgliedschaft</h2>
        <p>
          Foerdermitglieder unterstuetzen den Verein ideell oder finanziell. Sie
          begleiten die Vereinsarbeit ohne Stimm- und Wahlrecht.
        </p>

        <h2>Mitgliedsantrag</h2>
        <p>
          Den Mitgliedsantrag finden Sie hier als Download:
          {" "}
          <a
            href="/downloads/Mitgliedsantrag_Vorlage.md"
            download
            aria-label="Mitgliedsantrag herunterladen"
          >
            Mitgliedsantrag herunterladen
          </a>
          .
          Bitte senden Sie den ausgefuellten Antrag an
          aryobzazai.ev@hotmail.com.
        </p>
      </section>
    </div>
  );
}
