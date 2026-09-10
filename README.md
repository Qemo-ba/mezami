# MEZAMI Elektrotechnik — Website

Umsetzung des Design-Handoffs aus Claude Design (`MEZAMI Elektrotechnik.dc.html`)
als echte Website. Tech-Stack wie im Briefing vorgesehen: **Next.js 15 (App Router)
+ TypeScript + Tailwind CSS 4**, vorbereitet für Hosting auf Vercel.

---

## 1. Schnellstart

```bash
npm install      # einmalig, lädt alle Pakete
npm run dev      # Entwicklungsserver -> http://localhost:3000
npm run build    # Produktions-Build (prüft auch alle Typen)
npm start        # startet den gebauten Stand lokal
```

Beim `npm run dev` siehst du jede Änderung sofort im Browser, ohne neu zu starten.

---

## 2. Wo liegt was? (Ordnerübersicht)

```
mezami/
├── app/                     ← die Seiten (jeder Ordner = eine URL)
│   ├── layout.tsx           ← Rahmen um ALLE Seiten: Schriften, Header, Regler, Footer
│   ├── globals.css          ← Farben, Breakpoints, wiederverwendbare CSS-Klassen
│   ├── page.tsx             ← Startseite            "/"
│   ├── leistungen/page.tsx  ← Leistungen            "/leistungen"
│   ├── ueber-uns/page.tsx   ← Über uns              "/ueber-uns"
│   ├── referenzen/page.tsx  ← Referenzen            "/referenzen"
│   ├── kontakt/page.tsx     ← Kontakt               "/kontakt"
│   ├── impressum/page.tsx   ← Impressum   (Gerüst, bitte ausfüllen)
│   ├── datenschutz/page.tsx ← Datenschutz (Gerüst, bitte ausfüllen)
│   └── api/kontakt/route.ts ← nimmt das Formular entgegen und verschickt die Mail
│
├── components/              ← wiederverwendete Bausteine
│   ├── Header.tsx           ← Navigation oben + Burger-Menü
│   ├── KontaktRegler.tsx    ← das fixe Kontakt-Element (Briefing Punkt 3)
│   ├── KontaktModul.tsx     ← Kontaktblock am Ende jeder Seite
│   ├── KontaktFormular.tsx  ← nur das Formular darin
│   ├── Footer.tsx           ← Fussbereich
│   ├── BildPlatzhalter.tsx  ← zeigt Foto ODER schraffierten Platzhalter
│   └── Icons.tsx            ← alle SVG-Icons
│
├── content/site.ts          ← ★ ALLE TEXTE UND DATEN ★  (hier änderst du am meisten)
├── public/bilder/           ← hier kommen die echten Fotos rein
└── .env.example             ← Vorlage für die Mail-Zugangsdaten
```

**Merksatz:** `app/` = welche Seiten es gibt · `components/` = wie es aussieht ·
`content/site.ts` = was drin steht.

---

## 3. Die drei Dateien, die du zum Ändern brauchst

### 3.1 `content/site.ts` — Texte, Zahlen, Projekte, Kontaktdaten

Praktisch alles Inhaltliche steht in dieser einen Datei, sauber in Abschnitte
gegliedert (Kontaktdaten, Navigation, Startseite, Leistungen, Über uns,
Referenzen, Kontaktmodul, Footer).

Beispiel — Telefonnummer ändern (wirkt sofort im Kontakt-Regler, im
Kontaktmodul *und* im Footer, weil alle drei aus derselben Quelle lesen):

```ts
export const kontakt = {
  telefonAnzeige: "+43 664 123 45 67",   // so wird es angezeigt
  telefonWaehlbar: "+436641234567",      // so wird gewählt (nur Ziffern und +)
  email: "mail@mezami.at",
  whatsapp: "436641234567",              // international, ohne + und ohne Leerzeichen
  adresse: "Industriestraße 12, 6800 Feldkirch, Österreich",
};
```

Eine Leistung ergänzen: den ganzen Block `{ ... }` kopieren, einfügen, anpassen —
das Kartenraster wächst automatisch mit:

```ts
{
  icon: "schild",                        // Name aus components/Icons.tsx ganz unten
  titel: "Blitzschutz",
  text: "Planung und Prüfung von Blitzschutz- und Erdungsanlagen.",
},
```

### 3.2 `app/globals.css` — Farben und Abstände

Ganz oben im Block `@theme` stehen alle Design-Tokens. Ein Wert dort ändert die
Farbe auf der **gesamten** Seite:

| Token              | Wert      | Rolle laut Briefing                        |
| ------------------ | --------- | ------------------------------------------ |
| `--color-weiss`    | `#FFFFFF` | Primär, Seitenhintergrund                  |
| `--color-anthrazit`| `#23262B` | Überschriften, Buttons, Footer             |
| `--color-grau-text`| `#6F7378` | Fliesstext                                 |
| `--color-linie`    | `#C7C7C7` | Rahmen und Trennlinien                     |
| `--color-flaeche`  | `#F5F5F4` | helle Section-Flächen                      |
| `--color-beige`    | `#F7E4C1` | Akzent — bewusst nur klein eingesetzt      |

Jeder Token ist danach als Klasse nutzbar: `bg-beige`, `text-anthrazit`,
`border-linie` usw.

Darunter im Block `@layer components` liegen die Bausteine, damit sich nichts
wiederholt: `.btn` + `.btn-primaer` / `.btn-sekundaer`, `.karte`, `.icon-kachel`,
`.eyebrow`, `.feld` (Formularfeld), `.abschnitt` (Seitenrand), `.container-mezami`
(max. 1240 px, zentriert).

Willst du z. B. **alle** Buttons runder haben, änderst du `border-radius` genau
einmal in `.btn`.

### 3.3 `app/<seite>/page.tsx` — Reihenfolge der Abschnitte

Eine Seite ist eine kurze, gut lesbare Datei. Beispiel Startseite:
Hero → Teaser-Karten → `<KontaktModul />`. Willst du einen Abschnitt
verschieben, verschiebst du den Block; willst du das Kontaktmodul auf einer
Seite weglassen, löschst du dort die Zeile `<KontaktModul />`.

---

## 4. Wie die einzelnen Design-Vorgaben umgesetzt sind

### Hybrid-Struktur (Briefing Punkt 2)

Fünf echte Unterseiten mit echten URLs (kein Onepager), aber jede Seite endet
mit dem vollständigen Kontaktmodul. Umgesetzt dadurch, dass `KontaktModul` eine
eigene Komponente ist, die am Ende von `page.tsx` jeder Seite steht. Auf
`/kontakt` ist sie der einzige Inhalt — dort mit weissem statt grauem
Hintergrund und mit `<h1>` statt `<h2>` (`alsHauptueberschrift`), damit Google
die Seite richtig einordnet.

Header, Footer und Kontakt-Regler stehen **nicht** in den Seiten, sondern einmal
in `app/layout.tsx` — deshalb sind sie garantiert überall identisch.

### Kontakt-Regler (Briefing Punkt 3)

`components/KontaktRegler.tsx`, zwei Darstellungen, gesteuert rein über CSS:

- **ab 1300 px Breite:** senkrechte Leiste rechts, vertikal zentriert
  (`fixed top-1/2 right-[18px] -translate-y-1/2`). Im Ruhezustand nur das Icon
  in einer beigen Kapsel. Beim Hover fährt der Text aus: die Textbreite geht von
  `max-width: 0` auf `280px`, dazu Opacity 0 → 1, Dauer 280 ms. Technisch macht
  das `group-hover` von Tailwind — der Prototyp löste dasselbe mit JavaScript,
  in CSS ist es flüssiger und funktioniert auch ohne JS. `group-focus` ist
  mitgedacht, damit es auch per Tastatur bedienbar ist.
- **darunter:** feste Leiste am unteren Rand mit drei gleich breiten Feldern
  (fingerfreundlich am Handy), inkl. `env(safe-area-inset-bottom)` für iPhones
  mit Home-Indikator. Damit diese Leiste den Footer nicht überdeckt, hat der
  Footer unten 94 px Innenabstand und ab 1300 px nur noch 28 px.

Die Links sind funktional, nicht dekorativ: `tel:` startet den Anruf,
`https://wa.me/…` öffnet den WhatsApp-Chat, `mailto:` die Mail-App. Sie werden
in `content/site.ts` aus den Kontaktdaten zusammengebaut (`links`).

### Farben und Buttons (Briefing Punkte 4 und 5)

Beige ist bewusst nur an vier Stellen grossflächig: Kontakt-Regler, Icon-Kacheln,
Hero-Badge und der 3-px-Strich oben an der Zahlen-Box. Buttons:

- **Primär** (`.btn-primaer`): dunkle Fläche, weisser Text → Hover füllt sich
  komplett beige, Text wird anthrazit.
- **Sekundär** (`.btn-sekundaer`): nur Rahmen → Hover füllt sich beige, Rahmen
  und Text bleiben anthrazit.

Die alten Farben aus dem Vorentwurf (`#EDC23C`, `#F0EBE1`, `#E6E4DE`) kommen
nirgends mehr vor — die Migrationstabelle aus dem Briefing (Punkt 6) ist
vollständig angewendet.

### Zwei eigene Breakpoints

Das Design nutzt nicht die Tailwind-Standardgrössen, sondern zwei eigene Grenzen.
Beide sind in `globals.css` definiert und heissen im Code so:

| Klasse   | ab      | Wirkung                                          |
| -------- | ------- | ------------------------------------------------ |
| `menu:`  | 901 px  | volle Navigation statt Burger-Menü               |
| `rail:`  | 1300 px | Kontakt-Regler rechts statt Leiste unten         |

Beispiel: `hidden menu:flex` = „unter 901 px verstecken, ab 901 px anzeigen“.

### Kartenraster ohne Media Queries

Alle Raster nutzen `grid-cols-[repeat(auto-fit,minmax(250px,1fr))]`. Das heisst:
so viele Spalten wie passen, jede mindestens 250 px breit. Deshalb wird aus
4 Spalten am Desktop von selbst 1 Spalte am Handy — genau wie im Design.

### Schriften

Plus Jakarta Sans (Fliesstext) und IBM Plex Mono (nur die Dateinamen in den
Bild-Platzhaltern) werden über `next/font` beim Build heruntergeladen und
**mit der Website selbst ausgeliefert**. Der Browser der Besucher ruft also
keinen Google-Server auf — das ist schneller und datenschutzfreundlicher als
die `<link>`-Einbindung im Prototyp.

---

## 5. Echte Fotos einbauen

Im Design sind alle Bilder schraffierte Platzhalter mit Dateinamen. Das ist hier
genauso — bis du ein Foto hinterlegst:

1. Foto nach `public/bilder/` kopieren, z. B. `public/bilder/projekt-01.jpg`
2. In `content/site.ts` beim passenden Eintrag `bild: null` ersetzen durch:
   `bild: "/bilder/projekt-01.jpg"`

Fertig. `components/BildPlatzhalter.tsx` schaltet automatisch um und benutzt dann
`next/image` (automatische Grössen, modernes Bildformat, Lazy Loading). Der
`alt`-Text wird aus Projekttitel und Hinweis gebildet.

Empfohlene Grössen: Hero ca. 1600 × 1280, Projektbilder ca. 1200 × 900 (4:3).

---

## 6. Kontaktformular — was es tut und was noch fehlt

Das Formular schickt die Eingaben an `app/api/kontakt/route.ts`. Diese Route:

1. prüft, ob Name, E-Mail und Nachricht ausgefüllt sind (sonst HTTP 400),
2. wertet eine unsichtbare Spam-Falle aus (Feld `webseite`; füllt ein Bot es aus,
   wird die Anfrage still verworfen),
3. verschickt eine E-Mail — **aber nur, wenn Zugangsdaten hinterlegt sind.**

> **Wichtig:** Solange `RESEND_API_KEY` und `KONTAKT_EMPFAENGER` nicht gesetzt
> sind, wird **keine E-Mail verschickt**. Die Anfrage landet dann nur im
> Server-Log, der Besucher sieht trotzdem die Danke-Meldung. Verlässlich
> erreichbar bist du bis dahin über Telefon, WhatsApp und den E-Mail-Button.

Mailversand aktivieren (ca. 10 Minuten):

1. Konto bei [resend.com](https://resend.com) anlegen und die Domain verifizieren
2. In Vercel unter *Settings → Environment Variables* (oder lokal in `.env.local`,
   siehe `.env.example`) eintragen:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   KONTAKT_EMPFAENGER=office@mezami.at
   KONTAKT_ABSENDER=website@mezami.at
   ```
3. Neu deployen — ab dann kommen die Anfragen per Mail an.

Ein anderer Anbieter geht genauso: nur der `fetch`-Aufruf in `route.ts` muss
getauscht werden, der Rest bleibt.

---

## 7. Offene Punkte vor dem Livegang

- [ ] **Echte Kontaktdaten** in `content/site.ts` eintragen (Telefon, E-Mail,
      WhatsApp, Adresse sind aktuell die Beispieldaten aus dem Design)
- [ ] **Fotos** in `public/bilder/` legen und verlinken (siehe Abschnitt 5)
- [ ] **Mailversand** einrichten (siehe Abschnitt 6)
- [ ] **Impressum und Datenschutz** ausfüllen — die Seiten sind angelegt und
      verlinkt, enthalten aber nur ein Gerüst mit Hinweisen. In Österreich ist
      das Impressum Pflicht; bitte juristisch prüfen lassen.
- [ ] Texte gegenlesen — sie stammen als Platzhalter aus dem Design
      (z. B. „20+ Jahre Erfahrung“, „12 Mitarbeiter“, die Projektbeschreibungen)

---

## 8. Deployment auf Vercel

1. Repository auf [vercel.com](https://vercel.com) importieren
2. Vercel erkennt Next.js automatisch — keine Einstellungen nötig
3. Die Umgebungsvariablen aus Abschnitt 6 eintragen
4. Deploy. Jeder Push auf den Branch erzeugt danach eine neue Version.
