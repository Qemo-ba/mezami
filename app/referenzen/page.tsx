/* =============================================================================
   SEITE: REFERENZEN  (/referenzen)
   Foto-Galerie abgeschlossener Projekte + Kontaktmodul.
   Projekte bearbeiten: content/site.ts -> referenzenSeite.projekte
   Echte Fotos: Datei nach public/bilder/ legen und dort bei "bild" eintragen.
   ============================================================================= */

import type { Metadata } from "next";
import { referenzenSeite } from "@/content/site";
import BildPlatzhalter from "@/components/BildPlatzhalter";
import KontaktModul from "@/components/KontaktModul";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Abgeschlossene Projekte von MEZAMI Elektrotechnik: Wohnbau, Gewerbe, Photovoltaik, Smart Home und E-Mobilität.",
};

export default function Referenzen() {
  return (
    <>
      <section className="abschnitt bg-white pt-[clamp(46px,6vw,84px)] pb-[clamp(50px,6vw,86px)]">
        <div className="container-mezami">
          <span className="eyebrow">{referenzenSeite.eyebrow}</span>
          <h1 className="titel-seite mt-[14px] max-w-[22ch]">
            {referenzenSeite.titel}
          </h1>

          <div className="mt-[46px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[18px]">
            {referenzenSeite.projekte.map((projekt) => (
              <figure
                key={projekt.titel}
                className="karte m-0 overflow-hidden"
              >
                <BildPlatzhalter
                  bild={projekt.bild}
                  dateiname={projekt.dateiname}
                  hinweis={projekt.hinweis}
                  alt={`${projekt.titel} — ${projekt.hinweis}`}
                  verhaeltnis="4/3"
                />
                <figcaption className="px-5 pt-[18px] pb-[22px]">
                  <strong className="block text-[16.5px] font-bold">
                    {projekt.titel}
                  </strong>
                  <span className="mt-[5px] block text-[14px] text-grau-text">
                    {projekt.meta}
                  </span>
                  <p className="mt-[10px] text-[14.5px] leading-[1.55] text-grau-text">
                    {projekt.text}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <KontaktModul />
    </>
  );
}
