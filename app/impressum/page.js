import { Suspense } from "react";
import DeOnlyNotice from "../../components/DeOnlyNotice";

export const metadata = {
  title: "Impressum | Aryob Zazai Sozial- und Kulturverein e.V.",
  description: "Impressumsangaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <div className="page">
      <section className="card">
        <h1>Impressum</h1>
        <Suspense fallback={null}>
          <DeOnlyNotice />
        </Suspense>
        <p>Angaben gemäß § 5 TMG</p>

        <p>
          Aryob Zazai Sozial- und Kulturverein e.V.
          <br />
          e.V.
          <br />
          Postfach 26 11 13
          <br />
          20501
        </p>

        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Faiz Zazay (Vorsitzender)
          <br />
          Gul Ahmad Shah Zazai (Stellvertreter)
        </p>

        <p>
          <strong>Kontakt:</strong>
          <br />
          E-Mail: aryobzazai.ev@hotmail.com
          <br />
          Telefon: 0163 9507480
        </p>

        <p>
          <strong>Registereintrag (falls vorhanden):</strong>
          <br />
          Eintragung im Vereinsregister
          <br />
          Registergericht: Amtsgericht Hamburg
          <br />
          Registernummer: VR 25880
        </p>

      </section>
    </div>
  );
}
