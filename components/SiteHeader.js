"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import logoImage from "../Logo.jpeg";

const navLabels = {
  de: {
    home: "Start",
    about: "Über uns",
    join: "Mitmachen",
    contact: "Kontakt",
  },
  ps: {
    home: "کور",
    about: "زموږ په اړه",
    join: "ګډون",
    contact: "اړیکه",
  },
};

function withLang(href, lang) {
  if (lang === "de") {
    return href;
  }
  return `${href}?lang=${lang}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "ps" ? "ps" : "de";
  const labels = navLabels[lang];

  const navItems = [
    { href: "/", label: labels.home },
    { href: "/ueber-uns", label: labels.about },
    { href: "/mitmachen", label: labels.join },
    { href: "/kontakt", label: labels.contact },
  ];

  const deHref = pathname;
  const psHref = `${pathname}?lang=ps`;

  function allowNativeNavigation(e) {
    return (
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    );
  }

  function goDe(e) {
    if (allowNativeNavigation(e)) return;
    e.preventDefault();
    router.replace(pathname, { scroll: false });
  }

  function goPs(e) {
    if (allowNativeNavigation(e)) return;
    e.preventDefault();
    router.replace(`${pathname}?lang=ps`, { scroll: false });
  }

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <Link className="brand" href={withLang("/", lang)}>
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
                <Link href={withLang(item.href, lang)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lang-switch" aria-label="Sprachauswahl">
          <Link
            href={deHref}
            prefetch={false}
            className={lang === "de" ? "lang-active" : undefined}
            aria-current={lang === "de" ? "true" : undefined}
            onClick={goDe}
          >
            DE
          </Link>
          <span aria-hidden="true"> | </span>
          <Link
            href={psHref}
            prefetch={false}
            className={lang === "ps" ? "lang-active" : undefined}
            aria-current={lang === "ps" ? "true" : undefined}
            onClick={goPs}
          >
            پښتو
          </Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Navigation öffnen">Menü</summary>
          <nav aria-label="Mobile Hauptnavigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={withLang(item.href, lang)}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
