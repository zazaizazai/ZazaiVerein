import "./globals.css";
import { Suspense } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Aryob Zazai Sozial- und Kulturverein e.V.",
  description:
    "Sozial- und Kulturarbeit in Hamburg - gemeinnützig, offen und verlässlich.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#inhalt">
          Zum Inhalt springen
        </a>
        <div className="site-wrap">
          <Suspense fallback={null}>
            <SiteHeader />
          </Suspense>
          <main id="inhalt" className="main">
            {children}
          </main>
          <Suspense fallback={null}>
            <SiteFooter />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
