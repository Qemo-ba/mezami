/* =============================================================================
   SEITE: ÜBER UNS  (/ueber-uns)
   Zweispaltiger Textbereich + Stärken-Karten, darunter die Zahlen-Box
   (graue Fläche mit beigem Strich oben), dann das Kontaktmodul.
   Texte bearbeiten: content/site.ts -> ueberUnsSeite
   ============================================================================= */

import type { Metadata } from "next";
import { ueberUnsSeite } from "@/content/site";
import { Icon } from "@/components/Icons";
import KontaktModul from "@/components/KontaktModul";

export const metadata: Metadata = {
  title: "Über uns",
  description: ueberUnsSeite.absaetze[0],
};

export default function UeberUns() {
  return (
    <>
      <section className="abschnitt bg-white pt-[clamp(46px,6vw,84px)] pb-[clamp(50px,6vw,86px)]">
        <div className="container-mezami">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(30px,4vw,64px)]">
            {/* linke Spalte: Fliesstext */}
            <div className="min-w-0">
              <span className="eyebrow">{ueberUnsSeite.eyebrow}</span>
              <h1 className="titel-seite mt-[14px]">{ueberUnsSeite.titel}</h1>
              {ueberUnsSeite.absaetze.map((absatz, i) => (
                <p
                  key={i}
                  className={`max-w-[56ch] text-[17px] leading-[1.65] text-grau-text ${
                    i === 0 ? "mt-[22px]" : "mt-[18px]"
                  }`}
                >
                  {absatz}
                </p>
              ))}
            </div>

            {/* rechte Spalte: vier Stärken-Karten */}
            <div className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[18px]">
              {ueberUnsSeite.staerken.map((staerke) => (
                <div
                  key={staerke.titel}
                  className="rounded-[3px] border border-linie bg-white px-[22px] py-6"
                >
                  <div className="icon-kachel icon-kachel-klein">
                    <Icon name={staerke.icon} />
                  </div>
                  <h2 className="mt-4 mb-2 text-[17px] font-bold">
                    {staerke.titel}
                  </h2>
                  <p className="text-[14.5px] leading-[1.55] text-grau-text">
                    {staerke.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Zahlen-Box: beiger Strich oben ist der einzige grössere
              Beige-Akzent auf dieser Seite (Briefing: Beige sparsam) */}
          <div className="mt-[clamp(40px,5vw,68px)] rounded-[3px] border border-linie border-t-[3px] border-t-beige bg-flaeche p-[clamp(28px,3.4vw,44px)]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7">
              {ueberUnsSeite.zahlen.map((zahl) => (
                <div key={zahl.label}>
                  <strong className="block text-[clamp(30px,3.4vw,42px)] font-extrabold tracking-[-0.02em]">
                    {zahl.wert}
                  </strong>
                  <span className="mt-2 block text-[14.5px] text-grau-text">
                    {zahl.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <KontaktModul />
    </>
  );
}
