/* =============================================================================
   FOOTER
   Dunkle Fläche (#23262B) mit vier Spalten: Logo/Beschreibung, Adresse,
   Kontakt, Navigation. Darunter Copyright + Impressum/Datenschutz.

   Wichtig: Unterhalb von 1300px liegt der Kontakt-Regler als Leiste am
   unteren Bildschirmrand. Damit er den Footer-Inhalt nicht überdeckt,
   bekommt der Footer dort 94px zusätzlichen Innenabstand unten
   (Klasse pb-[94px]) und ab 1300px nur noch 28px (rail:pb-[28px]).
   ============================================================================= */

import Link from "next/link";
import { kontakt, links, navigation, footer as footerText } from "@/content/site";

export default function Footer() {
  return (
    <footer className="abschnitt bg-anthrazit pt-[clamp(46px,6vw,72px)] pb-[94px] text-footer-text rail:pb-[28px]">
      <div className="container-mezami">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
          {/* Spalte 1: Logo + Kurzbeschreibung */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center bg-white text-base font-extrabold text-anthrazit">
                M
              </span>
              <span className="text-[18px] font-extrabold tracking-[0.14em] text-white">
                MEZAMI
              </span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[14.5px] leading-[1.6] text-linie">
              {footerText.beschreibung}
            </p>
          </div>

          {/* Spalte 2: Adresse */}
          <div>
            <strong className="block text-[12px] font-bold uppercase tracking-[0.2em] text-linie">
              Adresse
            </strong>
            <p className="mt-[14px] text-[15px] leading-[1.65] text-white">
              {kontakt.adresse}
            </p>
          </div>

          {/* Spalte 3: Kontakt */}
          <div>
            <strong className="block text-[12px] font-bold uppercase tracking-[0.2em] text-linie">
              Kontakt
            </strong>
            <div className="mt-[14px] flex flex-col gap-[9px]">
              <a
                href={links.tel}
                className="text-[15px] font-semibold text-white hover:text-beige"
              >
                {kontakt.telefonAnzeige}
              </a>
              <a
                href={links.mail}
                className="text-[15px] font-semibold text-white hover:text-beige"
              >
                {kontakt.email}
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener"
                className="text-[15px] font-semibold text-white hover:text-beige"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Spalte 4: Navigation */}
          <div>
            <strong className="block text-[12px] font-bold uppercase tracking-[0.2em] text-linie">
              Navigation
            </strong>
            <div className="mt-[14px] flex flex-col gap-[9px]">
              {navigation.map((punkt) => (
                <Link
                  key={punkt.href}
                  href={punkt.href}
                  className="text-[15px] text-footer-text hover:text-beige"
                >
                  {punkt.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Untere Zeile */}
        <div className="mt-11 flex flex-wrap justify-between gap-x-[26px] gap-y-[10px] border-t border-footer-linie pt-[22px] text-[13.5px] text-linie">
          <span>{footerText.copyright}</span>
          <span className="flex gap-[22px]">
            {footerText.rechtlicheLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-linie hover:text-beige">
                {l.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
