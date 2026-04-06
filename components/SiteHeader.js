import Link from "next/link";
import Image from "next/image";
import logoImage from "../Logo.jpeg";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/mitmachen", label: "Mitmachen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <Image
            src={logoImage}
            alt="Logo Aryob Zazai Sozial- und Kulturverein"
            width={34}
            height={34}
            className="logo-image"
          />
          <span>Aryob Zazai Sozial- und Kulturverein e.V.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Navigation öffnen">Menü</summary>
          <nav aria-label="Mobile Hauptnavigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
