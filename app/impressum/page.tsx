/* =============================================================================
   SEITE: IMPRESSUM  (/impressum)

   >>> BITTE AUSFÜLLEN <<<
   Im Design war der Impressums-Link nur ein Platzhalter. In Österreich ist ein
   Impressum aber Pflicht (§ 5 ECG, § 25 MedienG). Diese Seite ist deshalb als
   Gerüst angelegt – die Angaben unten musst du durch die echten Firmendaten
   ersetzen (am besten vom Steuerberater / der WKO gegenprüfen lassen).
   ============================================================================= */

import type { Metadata } from "next";
import { kontakt } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <section className="abschnitt bg-white pt-[clamp(46px,6vw,84px)] pb-[clamp(50px,6vw,86px)]">
      <div className="container-mezami max-w-[70ch]">
        <span className="eyebrow">Rechtliches</span>
        <h1 className="titel-seite mt-[14px]">Impressum</h1>

        <div className="mt-8 flex flex-col gap-6 text-[16.5px] leading-[1.65] text-grau-text">
          <div>
            <strong className="block text-anthrazit">Medieninhaber und Herausgeber</strong>
            {kontakt.firma}
            <br />
            {kontakt.adresse}
          </div>
          <div>
            <strong className="block text-anthrazit">Kontakt</strong>
            Telefon: {kontakt.telefonAnzeige}
            <br />
            E-Mail: {kontakt.email}
          </div>
          <div>
            <strong className="block text-anthrazit">Unternehmensgegenstand</strong>
            Elektrotechnik
          </div>
          <div>
            <strong className="block text-anthrazit">Noch zu ergänzen</strong>
            Firmenbuchnummer und Firmenbuchgericht, UID-Nummer, Gewerbebehörde,
            Mitgliedschaft WKO / Fachgruppe, anwendbare Rechtsvorschriften
            (z. B. Gewerbeordnung), Angaben zur Streitschlichtung (OS-Plattform der EU).
          </div>
        </div>
      </div>
    </section>
  );
}
