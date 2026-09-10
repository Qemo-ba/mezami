/* =============================================================================
   SEITE: DATENSCHUTZ  (/datenschutz)

   >>> BITTE AUSFÜLLEN <<<
   Gerüst für die Datenschutzerklärung. Der Text unten beschreibt bereits, was
   diese Website technisch tut (Kontaktformular, Hosting, Schriften) – er ist
   aber KEINE Rechtsberatung. Bitte vor dem Livegang juristisch prüfen lassen.
   ============================================================================= */

import type { Metadata } from "next";
import { kontakt } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <section className="abschnitt bg-white pt-[clamp(46px,6vw,84px)] pb-[clamp(50px,6vw,86px)]">
      <div className="container-mezami max-w-[70ch]">
        <span className="eyebrow">Rechtliches</span>
        <h1 className="titel-seite mt-[14px]">Datenschutzerklärung</h1>

        <div className="mt-8 flex flex-col gap-6 text-[16.5px] leading-[1.65] text-grau-text">
          <div>
            <strong className="block text-anthrazit">Verantwortlich</strong>
            {kontakt.firma}, {kontakt.adresse}, {kontakt.email}
          </div>
          <div>
            <strong className="block text-anthrazit">Kontaktformular</strong>
            Wenn Sie uns über das Formular schreiben, verarbeiten wir Name,
            E-Mail-Adresse und Ihre Nachricht ausschliesslich, um Ihre Anfrage zu
            beantworten. Eine Weitergabe an Dritte erfolgt nicht.
          </div>
          <div>
            <strong className="block text-anthrazit">Keine Tracking-Cookies</strong>
            Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken.
            Die verwendeten Schriften werden mit der Website selbst ausgeliefert,
            es findet kein Aufruf externer Schriftserver statt.
          </div>
          <div>
            <strong className="block text-anthrazit">Noch zu ergänzen</strong>
            Angaben zum Hosting-Anbieter und Server-Logfiles, Speicherdauer,
            Rechtsgrundlagen (Art. 6 DSGVO), Ihre Rechte (Auskunft, Löschung,
            Beschwerde bei der Datenschutzbehörde).
          </div>
        </div>
      </div>
    </section>
  );
}
