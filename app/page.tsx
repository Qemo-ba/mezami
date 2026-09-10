/* =============================================================================
   STARTSEITE  (/)
   Aufbau laut Briefing:
   1. Hero mit Slogan, Text und zwei Buttons
   2. Teaser-Bereich mit drei Karten (Leistungen / Über uns / Referenzen)
   3. Kontaktmodul
   Header und Footer kommen automatisch aus app/layout.tsx.
   Texte änderst du in content/site.ts unter "startseite".
   ============================================================================= */

import Link from "next/link";
import { startseite } from "@/content/site";
import { Icon } from "@/components/Icons";
import BildPlatzhalter from "@/components/BildPlatzhalter";
import KontaktModul from "@/components/KontaktModul";

export default function Startseite() {
  return (
    <>
      {/* ================= 1. HERO ================= */}
      <section className="abschnitt bg-white pt-[clamp(46px,7vw,90px)] pb-[clamp(40px,6vw,74px)]">
        <div className="container-mezami grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(28px,4vw,56px)]">
          {/* linke Spalte: Text */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-[10px] rounded-[2px] bg-beige px-[14px] py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-anthrazit">
              {startseite.badge}
            </div>

            <h1 className="titel-hero mt-[22px]">{startseite.titel}</h1>

            <p className="mt-[22px] max-w-[52ch] text-[clamp(16px,1.35vw,18.5px)] leading-[1.62] text-grau-text">
              {startseite.text}
            </p>

            <div className="mt-[34px] flex flex-wrap gap-[14px]">
              <Link
                href={startseite.ctaPrimaer.href}
                className="btn btn-primaer btn-gross"
              >
                {startseite.ctaPrimaer.label}
              </Link>
              <Link
                href={startseite.ctaSekundaer.href}
                className="btn btn-sekundaer btn-gross"
              >
                {startseite.ctaSekundaer.label}
              </Link>
            </div>
          </div>

          {/* rechte Spalte: Foto (oder Platzhalter) */}
          <BildPlatzhalter
            bild={startseite.heroBild.bild}
            dateiname={startseite.heroBild.dateiname}
            hinweis={startseite.heroBild.hinweis}
            alt="MEZAMI Elektrotechnik – Team auf der Baustelle"
            verhaeltnis="4/3.2"
            className="min-w-0 border border-linie"
            gross
          />
        </div>
      </section>

      {/* ================= 2. TEASER ================= */}
      <section className="abschnitt border-t border-linie bg-flaeche py-[clamp(56px,7vw,94px)]">
        <div className="container-mezami">
          <span className="eyebrow">{startseite.teaserEyebrow}</span>
          <h2 className="titel-abschnitt mt-[14px] max-w-[24ch]">
            {startseite.teaserTitel}
          </h2>

          <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {startseite.teaser.map((karte) => (
              <div
                key={karte.href}
                className="karte flex flex-col px-[26px] pt-[30px] pb-7"
              >
                <div className="icon-kachel">
                  <Icon name={karte.icon} />
                </div>
                <h3 className="mt-[22px] mb-[10px] text-[20px] font-bold">
                  {karte.titel}
                </h3>
                <p className="mb-6 text-[15px] leading-[1.6] text-grau-text">
                  {karte.text}
                </p>
                <Link
                  href={karte.href}
                  className="btn btn-sekundaer btn-mittel mt-auto self-start"
                >
                  {karte.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. KONTAKTMODUL ================= */}
      <KontaktModul />
    </>
  );
}
