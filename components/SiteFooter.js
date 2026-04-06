"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

function withLang(href, lang) {
  if (lang === "de") {
    return href;
  }
  return `${href}?lang=${lang}`;
}

export default function SiteFooter() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "ps" ? "ps" : "de";

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © 2026 Aryob Zazai Sozial- und Kulturverein e.V.
        </p>
        <nav aria-label="Footer Navigation">
          <ul className="footer-links">
            <li>
              <Link href={withLang("/kontakt", lang)}>Kontakt</Link>
            </li>
            <li>
              <Link href={withLang("/impressum", lang)}>Impressum</Link>
            </li>
            <li>
              <Link href={withLang("/datenschutz", lang)}>Datenschutz</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
