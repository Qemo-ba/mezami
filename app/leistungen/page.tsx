/* =============================================================================
   SEITE: LEISTUNGEN  (/leistungen)
   Kartenraster mit allen Gewerken + Kontaktmodul.
   Karten bearbeiten: content/site.ts -> leistungenSeite.leistungen
   ============================================================================= */

import type { Metadata } from "next";
import { leistungenSeite } from "@/content/site";
import { Icon } from "@/components/Icons";
import KontaktModul from "@/components/KontaktModul";

export const metadata: Metadata = {
  title: "Leistungen",
  description: leistungenSeite.text,
};

export default function Leistungen() {
  return (
    <>
      <section className="abschnitt bg-white pt-[clamp(46px,6vw,84px)] pb-[clamp(50px,6vw,86px)]">
        <div className="container-mezami">
          <span className="eyebrow">{leistungenSeite.eyebrow}</span>
          <h1 className="titel-seite mt-[14px] max-w-[24ch]">
            {leistungenSeite.titel}
          </h1>
          <p className="mt-5 max-w-[56ch] text-[17px] leading-[1.62] text-grau-text">
            {leistungenSeite.text}
          </p>

          <div className="mt-[46px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {leistungenSeite.leistungen.map((leistung) => (
              <div
                key={leistung.titel}
                className="karte karte-hover px-[26px] pt-[30px] pb-8"
              >
                <div className="icon-kachel">
                  <Icon name={leistung.icon} />
                </div>
                <h2 className="mt-[22px] mb-[10px] text-[19px] font-bold">
                  {leistung.titel}
                </h2>
                <p className="text-[15px] leading-[1.6] text-grau-text">
                  {leistung.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KontaktModul />
    </>
  );
}
