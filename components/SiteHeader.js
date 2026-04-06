import Link from "next/link";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Ueber uns" },
  { href: "/mitmachen", label: "Mitmachen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <span className="logo-placeholder" aria-hidden="true">
            Logo
          </span>
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
          <summary aria-label="Navigation oeffnen">Menue</summary>
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
