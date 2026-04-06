import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © 2026 Aryob Zazai Sozial- und Kulturverein e.V.
        </p>
        <nav aria-label="Footer Navigation">
          <ul className="footer-links">
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
