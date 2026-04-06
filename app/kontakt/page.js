export const metadata = {
  title: "Kontakt | Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Kontaktinformationen für Anfragen zu Vereinsarbeit, Mitgliedschaft und Kooperationen.",
};

export default function KontaktPage() {
  return (
    <div className="page">
      <section className="card">
        <h1>Kontakt</h1>
        <p>Bei Fragen oder Anliegen können Sie uns gerne kontaktieren.</p>

        <div className="contact-block">
          <p>
            <strong>E-Mail:</strong> aryobzazai.ev@hotmail.com
          </p>
          <p>
            <strong>Adresse:</strong> Postfach 26 11 13, 20501
          </p>
          <p>
            <strong>Telefon:</strong> 0163 9507480
          </p>
        </div>

        <p>
          Anfragen zu Mitgliedschaft, Zusammenarbeit oder Projekten richten Sie
          bitte an unsere Vereinsadresse:
          {" "}
          aryobzazai.ev@hotmail.com.
        </p>
      </section>
    </div>
  );
}
