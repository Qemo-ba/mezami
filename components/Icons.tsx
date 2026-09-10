/* =============================================================================
   ICONS
   Alle Icons der Seite an einem Ort – 1:1 aus dem Design übernommen.
   Es sind reine SVGs (keine Icon-Bibliothek), damit nichts nachgeladen wird.

   Neues Icon hinzufügen:
   1. Unten eine neue Funktion nach dem gleichen Muster anlegen.
   2. Den Namen in "icons" unten eintragen.
   3. In content/site.ts diesen Namen als icon: "..." verwenden.
   ============================================================================= */

type Props = React.SVGProps<SVGSVGElement>;

/* Grundeinstellungen für alle Linien-Icons (Stroke-Style) */
const linie: Props = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/* Grundeinstellungen für gefüllte Icons (Fill-Style) */
const flaeche: Props = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
};

export const IconTelefon = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M15.5 21A13 13 0 0 1 3 8.5a2 2 0 0 1 2-2h2.6a1 1 0 0 1 1 .8l.7 3a1 1 0 0 1-.4 1l-1.4 1a11 11 0 0 0 4.7 4.7l1-1.4a1 1 0 0 1 1-.4l3 .7a1 1 0 0 1 .8 1V19a2 2 0 0 1-2 2Z" />
  </svg>
);

export const IconMail = (p: Props) => (
  <svg {...linie} {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
    <path d="m3 6.5 9 6.5 9-6.5" />
  </svg>
);

export const IconWhatsapp = (p: Props) => (
  <svg {...flaeche} {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.9a8.1 8.1 0 0 1 0 16.2 8 8 0 0 1-4.1-1.1l-.4-.2-2.9.8.8-2.8-.2-.4A8.1 8.1 0 0 1 12 3.9Zm-3.4 4c-.2 0-.5.1-.7.3-.3.3-.8.9-.8 1.9 0 1 .7 2 .8 2.2.1.2 1.4 2.4 3.5 3.3 1.7.7 2.1.6 2.5.6.5 0 1.5-.5 1.7-1.1.2-.6.2-1 .2-1.1l-.2-.2-1.6-.8c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.5-.6.1-.4-.7-1.7c-.1-.3-.2-.3-.4-.3h-.4Z" />
  </svg>
);

export const IconPin = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const IconHaus = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M4 10.5 12 4l8 6.5" />
    <path d="M6 9.8V20h12V9.8" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const IconGebaeude = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M4 20V6.5A1.5 1.5 0 0 1 5.5 5h6A1.5 1.5 0 0 1 13 6.5V20" />
    <path d="M13 11h5.5A1.5 1.5 0 0 1 20 12.5V20" />
    <path d="M3 20h18" />
    <path d="M7 9h2M7 13h2M16 15h1" />
  </svg>
);

export const IconSmartHome = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M4.5 10.5 12 4.5l7.5 6" />
    <path d="M6.5 10v10h11V10" />
    <path d="M9.5 14.5h5v4h-5z" />
  </svg>
);

export const IconSonne = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M12 3v2M12 19v2M4.2 12h2M17.8 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
  </svg>
);

export const IconBlitz = (p: Props) => (
  <svg {...flaeche} {...p}>
    <path d="M13.5 2 5 13.2h5.2L9.8 22 19 10.6h-5.4L13.5 2Z" />
  </svg>
);

export const IconSchild = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M12 3.5 19 6v5.5c0 4.3-3 7.4-7 9-4-1.6-7-4.7-7-9V6l7-2.5Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconStern = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M12 4.5l2.3 4.7 5.2.8-3.8 3.6.9 5.1-4.6-2.5-4.6 2.5.9-5.1L4.5 10l5.2-.8L12 4.5Z" />
  </svg>
);

export const IconHaken = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="m5 13 4.5 4.5L19 7" />
  </svg>
);

export const IconUhr = (p: Props) => (
  <svg {...linie} {...p} strokeLinejoin={undefined}>
    <circle cx="12" cy="12" r="8.2" />
    <path d="M12 7.5V12l3.2 2" />
  </svg>
);

export const IconRaster = (p: Props) => (
  <svg {...linie} {...p}>
    <path d="M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z" />
  </svg>
);

export const IconTeam = (p: Props) => (
  <svg {...linie} {...p}>
    <circle cx="10" cy="8.5" r="3.2" />
    <path d="M4 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
    <path d="M16.5 6.2a3 3 0 0 1 0 5.6M18 19.5c0-2.2-.7-3.8-2-4.8" />
  </svg>
);

/* --------------------------------------------------------------------------
   Namensregister: verbindet den Text-Namen aus content/site.ts
   mit der oben definierten Icon-Komponente.
   -------------------------------------------------------------------------- */
export const icons = {
  telefon: IconTelefon,
  mail: IconMail,
  whatsapp: IconWhatsapp,
  pin: IconPin,
  haus: IconHaus,
  gebaeude: IconGebaeude,
  smarthome: IconSmartHome,
  sonne: IconSonne,
  blitz: IconBlitz,
  schild: IconSchild,
  stern: IconStern,
  haken: IconHaken,
  uhr: IconUhr,
  raster: IconRaster,
  team: IconTeam,
} as const;

export type IconName = keyof typeof icons;

/** Rendert ein Icon anhand seines Namens, z. B. <Icon name="sonne" /> */
export function Icon({ name, ...rest }: { name: IconName } & Props) {
  const Komponente = icons[name];
  return <Komponente {...rest} />;
}
