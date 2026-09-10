/* =============================================================================
   KONTAKT-REGLER  (Briefing Punkt 3)
   Das seitenübergreifende, immer sichtbare Kontakt-Element.

   Zwei Darstellungen, gesteuert allein über CSS – kein JavaScript nötig:
   - ab 1300px Breite: senkrechte Leiste rechts am Bildschirmrand.
     Im Ruhezustand sieht man nur das Icon in einer beigen Kapsel.
     Beim Hover (oder bei Tastatur-Fokus) klappt die Kapsel nach links auf
     und zeigt Telefonnummer / "WhatsApp" / E-Mail-Adresse.
   - darunter: feste Leiste am unteren Bildschirmrand mit drei gleich
     breiten Feldern (fingerfreundlich am Handy).

   Die Links sind echt funktional:
   tel: startet den Anruf, wa.me öffnet WhatsApp, mailto: öffnet die Mail-App.
   ============================================================================= */

import { links, kontakt } from "@/content/site";
import { IconTelefon, IconWhatsapp, IconMail } from "@/components/Icons";

const eintraege = [
  {
    key: "telefon",
    href: links.tel,
    target: "_self",
    titel: "Anrufen",
    kurz: "Anrufen",
    lang: kontakt.telefonAnzeige,
    Icon: IconTelefon,
  },
  {
    key: "whatsapp",
    href: links.whatsapp,
    target: "_blank",
    titel: "WhatsApp öffnen",
    kurz: "WhatsApp",
    lang: "WhatsApp",
    Icon: IconWhatsapp,
  },
  {
    key: "mail",
    href: links.mail,
    target: "_self",
    titel: "E-Mail schreiben",
    kurz: "E-Mail",
    lang: kontakt.email,
    Icon: IconMail,
  },
];

export default function KontaktRegler() {
  return (
    <>
      {/* ---------- Variante A: Seitenleiste rechts (ab 1300px) ---------- */}
      <div className="fixed top-1/2 right-[18px] z-[70] hidden -translate-y-1/2 flex-col items-end gap-[10px] rail:flex">
        {eintraege.map(({ key, href, target, titel, lang, Icon }) => (
          <a
            key={key}
            href={href}
            target={target}
            rel="noopener"
            title={titel}
            aria-label={titel}
            className="group flex h-[52px] items-center gap-[10px] overflow-hidden rounded-[26px] bg-beige px-[15px] text-anthrazit no-underline shadow-[0_2px_10px_rgba(35,38,43,0.14)] hover:text-anthrazit"
          >
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center">
              <Icon />
            </span>
            {/* Dieser Text ist zusammengeklappt (max-width 0) und fährt
                beim Hover auf 280px aus. Dauer: 280ms. */}
            <span className="max-w-0 overflow-hidden text-[15px] font-bold tracking-[0.01em] whitespace-nowrap opacity-0 transition-[max-width,opacity] duration-300 ease-out group-hover:max-w-[280px] group-hover:opacity-100 group-focus:max-w-[280px] group-focus:opacity-100">
              {lang}
            </span>
          </a>
        ))}
      </div>

      {/* ---------- Variante B: Leiste unten (unter 1300px) -------------- */}
      <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-3 border-t border-linie bg-beige pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_12px_rgba(35,38,43,0.12)] rail:hidden">
        {eintraege.map(({ key, href, target, titel, kurz, Icon }) => (
          <a
            key={key}
            href={href}
            target={target}
            rel="noopener"
            title={titel}
            aria-label={titel}
            className="flex min-h-[58px] items-center justify-center gap-[9px] border-l border-[rgba(35,38,43,0.12)] px-[10px] py-2 text-[14.5px] font-bold text-anthrazit no-underline hover:text-anthrazit active:bg-beige-aktiv"
          >
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center">
              <Icon />
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {kurz}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
