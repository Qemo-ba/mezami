/* =============================================================================
   KONTAKTMODUL
   Der Block, der laut Briefing (Punkt 2) am Ende JEDER Seite steht:
   links die direkten Kontaktwege + Adresse, rechts das Formular.

   Zwei Einstellungen:
   - hintergrund: "grau"  -> #F5F5F4 (Standard, hebt sich von der weissen Seite ab)
                  "weiss" -> #FFFFFF (auf /kontakt, weil dort keine Section darüber liegt)
   - alsHauptueberschrift: auf /kontakt ist dieser Block die Hauptsache,
                  deshalb wird die Überschrift dort als <h1> ausgegeben (gut für Google),
                  sonst als <h2>.
   ============================================================================= */

import { kontakt, links, kontaktModul } from "@/content/site";
import { IconTelefon, IconWhatsapp, IconMail, IconPin } from "@/components/Icons";
import KontaktFormular from "@/components/KontaktFormular";

type Props = {
  hintergrund?: "grau" | "weiss";
  alsHauptueberschrift?: boolean;
};

export default function KontaktModul({
  hintergrund = "grau",
  alsHauptueberschrift = false,
}: Props) {
  const Ueberschrift = alsHauptueberschrift ? "h1" : "h2";

  return (
    <section
      id="kontakt"
      className={`abschnitt border-t border-linie py-[clamp(52px,6.5vw,92px)] ${
        hintergrund === "weiss" ? "bg-white" : "bg-flaeche"
      }`}
    >
      <div className="container-mezami grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(30px,4vw,60px)]">
        {/* ---- linke Spalte: Text + direkte Kontaktwege ------------------- */}
        <div className="min-w-0">
          <span className="eyebrow">{kontaktModul.eyebrow}</span>
          <Ueberschrift className="titel-abschnitt mt-[14px] max-w-[24ch] text-[clamp(27px,3.4vw,40px)]">
            {kontaktModul.titel}
          </Ueberschrift>
          <p className="mt-5 max-w-[46ch] text-[16.5px] leading-[1.62] text-grau-text">
            {kontaktModul.text}
          </p>

          <div className="mt-8 flex flex-col gap-[14px] border-t border-linie pt-7">
            <a href={links.tel} className="flex items-center gap-3 text-base font-semibold">
              <span className="icon-kachel icon-kachel-mini">
                <IconTelefon />
              </span>
              {kontakt.telefonAnzeige}
            </a>

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 text-base font-semibold"
            >
              <span className="icon-kachel icon-kachel-mini">
                <IconWhatsapp />
              </span>
              WhatsApp-Chat öffnen
            </a>

            <a href={links.mail} className="flex items-center gap-3 text-base font-semibold">
              <span className="icon-kachel icon-kachel-mini">
                <IconMail />
              </span>
              {kontakt.email}
            </a>

            <div className="flex items-start gap-3 text-base text-grau-text">
              <span className="icon-kachel icon-kachel-mini">
                <IconPin />
              </span>
              <span className="pt-[7px]">{kontakt.adresse}</span>
            </div>
          </div>
        </div>

        {/* ---- rechte Spalte: Formular-Karte ------------------------------ */}
        <div className="karte min-w-0 p-[clamp(24px,3vw,36px)]">
          <KontaktFormular />

          {/* Direkt-Buttons unter dem Formular */}
          <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[14px] border-t border-linie pt-[26px]">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener"
              className="btn btn-primaer btn-breit"
            >
              WhatsApp schreiben
            </a>
            <a href={links.mail} className="btn btn-sekundaer btn-breit">
              E-Mail öffnen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
