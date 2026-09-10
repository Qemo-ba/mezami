/* =============================================================================
   INHALTE DER WEBSITE  —  DIE WICHTIGSTE DATEI ZUM ÄNDERN

   Hier stehen alle Texte, Kontaktdaten, Leistungen, Zahlen und Projekte.
   Du kannst diese Datei bearbeiten, ohne eine einzige Zeile Layout anzufassen.
   Die Komponenten lesen alles von hier.

   Regeln:
   - Text ändern  -> einfach den Text zwischen den Anführungszeichen ersetzen
   - Eintrag mehr -> Block { ... } kopieren und anpassen (Komma nicht vergessen)
   - Eintrag weg  -> ganzen Block { ... } löschen
   - icon: "..."  -> erlaubte Namen stehen in components/Icons.tsx unten
   ============================================================================= */

import type { IconName } from "@/components/Icons";

/* -----------------------------------------------------------------------------
   1. KONTAKTDATEN
   Diese vier Werte werden überall verwendet: Kontakt-Regler, Kontaktmodul,
   Footer. Einmal ändern reicht.
   -------------------------------------------------------------------------- */
export const kontakt = {
  /** So wie die Nummer auf der Seite angezeigt wird */
  telefonAnzeige: "+43 664 123 45 67",
  /** Nur Ziffern und +, wird für den tel:-Link benutzt */
  telefonWaehlbar: "+436641234567",
  email: "mail@mezami.at",
  /** WhatsApp-Nummer in internationaler Schreibweise OHNE + und ohne Leerzeichen */
  whatsapp: "436641234567",
  adresse: "Industriestraße 12, 6800 Feldkirch, Österreich",
  firma: "MEZAMI Elektrotechnik",
};

/** Fertige Links – daraus gebaut, nicht von Hand ändern. */
export const links = {
  tel: `tel:${kontakt.telefonWaehlbar.replace(/[^+0-9]/g, "")}`,
  mail: `mailto:${kontakt.email}`,
  whatsapp: `https://wa.me/${kontakt.whatsapp.replace(/[^0-9]/g, "")}`,
};

/* -----------------------------------------------------------------------------
   2. NAVIGATION
   Reihenfolge hier = Reihenfolge im Header und im Footer.
   "href" muss zum Ordnernamen unter app/ passen.
   -------------------------------------------------------------------------- */
export const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

/* -----------------------------------------------------------------------------
   3. STARTSEITE
   -------------------------------------------------------------------------- */
export const startseite = {
  badge: "Elektrotechnik Meisterbetrieb",
  titel: "Ihr Partner für moderne Elektrotechnik",
  text: "Planung, Installation und Service für Wohnbau, Gewerbe und Industrie. Sauber ausgeführt, termingerecht übergeben, dauerhaft geprüft — von einem Team, das jedes Detail selbst verantwortet.",
  ctaPrimaer: { label: "Kostenlos beraten lassen", href: "/kontakt" },
  ctaSekundaer: { label: "Leistungen ansehen", href: "/leistungen" },

  /** Das grosse Bild rechts im Hero.
      bild: null  -> zeigt den schraffierten Platzhalter
      bild: "/bilder/hero.jpg" -> zeigt dein Foto (Datei in public/bilder/ legen) */
  heroBild: {
    bild: null as string | null,
    dateiname: "hero-foto.jpg",
    hinweis: "Elektriker-Team auf der Baustelle · 1600×1280",
  },

  teaserEyebrow: "Überblick",
  teaserTitel: "Drei Wege, uns kennenzulernen",
  teaser: [
    {
      icon: "raster" as IconName,
      titel: "Leistungen",
      text: "Hausinstallation, Gewerbe, Smart Home, Photovoltaik, E-Mobilität und Service — im Überblick.",
      cta: "Alle Leistungen ansehen",
      href: "/leistungen",
    },
    {
      icon: "team" as IconName,
      titel: "Über uns",
      text: "Regionaler Meisterbetrieb mit eigenen Monteuren, festen Ansprechpartnern und klaren Terminen.",
      cta: "Mehr erfahren",
      href: "/ueber-uns",
    },
    {
      icon: "haus" as IconName,
      titel: "Referenzen",
      text: "Fotos abgeschlossener Baustellen: Wohnbau, Bürogebäude, PV-Anlagen und Industriehallen.",
      cta: "Projekte ansehen",
      href: "/referenzen",
    },
  ],
};

/* -----------------------------------------------------------------------------
   4. LEISTUNGEN
   -------------------------------------------------------------------------- */
export const leistungenSeite = {
  eyebrow: "Leistungen",
  titel: "Alles aus einer Hand — von der Leitung bis zur Anlage",
  text: "Wir planen, installieren und prüfen elektrotechnische Anlagen für private und gewerbliche Auftraggeber — mit eigenen Monteuren und festen Ansprechpartnern.",
  leistungen: [
    {
      icon: "haus" as IconName,
      titel: "Hausinstallation",
      text: "Neubau, Umbau und Sanierung: Verteiler, Leitungsnetz, Beleuchtung und Sicherheitstechnik nach Norm.",
    },
    {
      icon: "gebaeude" as IconName,
      titel: "Gewerbe & Industrie",
      text: "Starkstrom, Schaltanlagen, Maschinenanschlüsse und wiederkehrende Anlagenprüfungen im laufenden Betrieb.",
    },
    {
      icon: "smarthome" as IconName,
      titel: "Smart Home",
      text: "KNX und Funklösungen für Licht, Beschattung, Heizung und Zutritt — herstellerneutral geplant.",
    },
    {
      icon: "sonne" as IconName,
      titel: "Photovoltaik",
      text: "PV-Anlagen, Speicher und Wallboxen: Auslegung, Montage, Anmeldung beim Netzbetreiber, Inbetriebnahme.",
    },
    {
      icon: "blitz" as IconName,
      titel: "E-Mobilität",
      text: "Ladeinfrastruktur für Einfamilienhaus, Wohnanlage und Betrieb — inklusive Lastmanagement.",
    },
    {
      icon: "uhr" as IconName,
      titel: "Service & Störungsdienst",
      text: "Fehlersuche, Reparatur, E-Check und Prüfprotokolle. Reaktion im Störfall innerhalb von 24 Stunden.",
    },
  ],
};

/* -----------------------------------------------------------------------------
   5. ÜBER UNS
   -------------------------------------------------------------------------- */
export const ueberUnsSeite = {
  eyebrow: "Über uns",
  titel: "Ein Team, das für seine Arbeit einsteht",
  absaetze: [
    "MEZAMI Elektrotechnik ist ein regionaler Meisterbetrieb. Wir arbeiten mit eigenen Monteuren, festen Ansprechpartnern und klaren Terminen — vom Einfamilienhaus bis zur gewerblichen Anlage. Was wir zusagen, halten wir; was wir übergeben, ist geprüft und dokumentiert.",
    "Ein Ansprechpartner begleitet Ihr Projekt von der ersten Besichtigung bis zur Abnahme — ohne wechselnde Subfirmen auf Ihrer Baustelle.",
  ],
  /** Die vier kleinen Karten rechts neben dem Text */
  staerken: [
    {
      icon: "haken" as IconName,
      titel: "Zuverlässigkeit",
      text: "Fixe Termine, verbindliche Zusagen, erreichbar auch nach der Übergabe.",
    },
    {
      icon: "stern" as IconName,
      titel: "Erfahrung",
      text: "Über 20 Jahre Praxis in Wohnbau, Gewerbe und Sanierung.",
    },
    {
      icon: "schild" as IconName,
      titel: "Qualität",
      text: "Normgerechte Ausführung, Markenmaterial, vollständige Prüfprotokolle.",
    },
    {
      icon: "blitz" as IconName,
      titel: "Schnelligkeit",
      text: "Kurze Wege in der Region, Störungsdienst innerhalb von 24 Stunden.",
    },
  ],
  /** Die Zahlen-Box unten (graue Fläche mit beigem Strich oben) */
  zahlen: [
    { wert: "20+", label: "Jahre Erfahrung" },
    { wert: "12", label: "Mitarbeiter im Team" },
    { wert: "450+", label: "Abgeschlossene Projekte" },
    { wert: "24 h", label: "Reaktion im Störfall" },
  ],
};

/* -----------------------------------------------------------------------------
   6. REFERENZEN
   Sobald du echte Fotos hast: Datei nach public/bilder/ kopieren und bei
   "bild" den Pfad eintragen, z. B. bild: "/bilder/projekt-01.jpg".
   Solange bild: null steht, wird der schraffierte Platzhalter angezeigt.
   -------------------------------------------------------------------------- */
export const referenzenSeite = {
  eyebrow: "Referenzen",
  titel: "Abgeschlossene Projekte aus der Region",
  projekte: [
    {
      bild: null as string | null,
      dateiname: "projekt-01.jpg",
      hinweis: "Verteilerschrank Neubau",
      titel: "Wohnanlage Bahnhofstraße",
      meta: "24 Wohneinheiten · Hausinstallation",
      text: "Komplette Elektroinstallation inkl. Zählerverteilung und Allgemeinbeleuchtung.",
    },
    {
      bild: null as string | null,
      dateiname: "projekt-02.jpg",
      hinweis: "Kabelverlegung Rohbau",
      titel: "Bürogebäude Nordring",
      meta: "Gewerbe · Netzwerk & Beleuchtung",
      text: "Strukturierte Verkabelung über drei Geschosse, DALI-Lichtsteuerung im Großraum.",
    },
    {
      bild: null as string | null,
      dateiname: "projekt-03.jpg",
      hinweis: "PV-Montage Dach",
      titel: "Einfamilienhaus Götzis",
      meta: "Photovoltaik 12 kWp · Speicher",
      text: "Aufdachanlage mit 10 kWh Speicher, Wallbox und Überschussladung.",
    },
    {
      bild: null as string | null,
      dateiname: "projekt-04.jpg",
      hinweis: "KNX Schaltschrank",
      titel: "Villa am Hang",
      meta: "Smart Home · KNX Vollausbau",
      text: "Licht, Beschattung, Heizung und Zutritt in einer Visualisierung zusammengeführt.",
    },
    {
      bild: null as string | null,
      dateiname: "projekt-05.jpg",
      hinweis: "Industriehalle Elektrik",
      titel: "Produktionshalle Rankweil",
      meta: "Industrie · Maschinenanschlüsse",
      text: "Starkstromverteilung und Anschluss von 14 Maschinen im laufenden Betrieb.",
    },
    {
      bild: null as string | null,
      dateiname: "projekt-06.jpg",
      hinweis: "Wallbox Installation",
      titel: "Tiefgarage Stadtquartier",
      meta: "E-Mobilität · 18 Ladepunkte",
      text: "Ladeinfrastruktur mit dynamischem Lastmanagement und Abrechnung pro Stellplatz.",
    },
  ],
};

/* -----------------------------------------------------------------------------
   7. KONTAKTMODUL (steht am Ende jeder Seite)
   -------------------------------------------------------------------------- */
export const kontaktModul = {
  eyebrow: "Kontakt",
  titel: "Schreiben Sie uns — wir melden uns am selben Werktag",
  text: "Kurz beschreiben, worum es geht — Sie erhalten eine Einschätzung und einen Terminvorschlag für die Besichtigung.",
  erfolgsmeldung: "Danke — Ihre Anfrage ist eingegangen. Wir melden uns in Kürze.",
  fehlermeldung: "Das hat leider nicht geklappt. Bitte rufen Sie uns an oder schreiben Sie uns per WhatsApp.",
};

/* -----------------------------------------------------------------------------
   8. FOOTER
   -------------------------------------------------------------------------- */
export const footer = {
  beschreibung:
    "Elektrotechnik Meisterbetrieb — Installation, Smart Home, Photovoltaik und Service.",
  copyright: `© ${new Date().getFullYear()} MEZAMI Elektrotechnik. Alle Rechte vorbehalten.`,
  rechtlicheLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};
