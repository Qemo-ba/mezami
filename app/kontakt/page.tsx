/* =============================================================================
   SEITE: KONTAKT  (/kontakt)
   Hier ist das Kontaktmodul die Hauptsache – deshalb:
   - weisser Hintergrund statt grau (es liegt keine Section darüber)
   - die Überschrift wird als <h1> ausgegeben (alsHauptueberschrift)
   ============================================================================= */

import type { Metadata } from "next";
import { kontakt } from "@/content/site";
import KontaktModul from "@/components/KontaktModul";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `MEZAMI Elektrotechnik kontaktieren — Telefon ${kontakt.telefonAnzeige}, E-Mail ${kontakt.email} oder direkt per WhatsApp.`,
};

export default function Kontakt() {
  return <KontaktModul hintergrund="weiss" alsHauptueberschrift />;
}
