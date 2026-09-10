/* =============================================================================
   BILD ODER PLATZHALTER
   Solange in content/site.ts bei einem Bild  bild: null  steht, zeigt diese
   Komponente die schraffierte Platzhalter-Fläche aus dem Design (mit Dateiname
   und Motiv-Hinweis). Sobald du dort einen Pfad einträgst, z. B.
       bild: "/bilder/projekt-01.jpg"
   (Datei liegt dann unter public/bilder/projekt-01.jpg), wird stattdessen das
   echte Foto angezeigt – automatisch optimiert durch next/image.
   ============================================================================= */

import Image from "next/image";

type Props = {
  /** Pfad zum Foto in /public, oder null für den Platzhalter */
  bild: string | null;
  /** Dateiname, der im Platzhalter angezeigt wird */
  dateiname: string;
  /** Motiv-Hinweis, der im Platzhalter angezeigt wird */
  hinweis: string;
  /** Alternativtext für Screenreader/SEO, wenn ein echtes Foto gesetzt ist */
  alt?: string;
  /** Seitenverhältnis als CSS-Wert, z. B. "4/3" */
  verhaeltnis?: string;
  /** zusätzliche Klassen (Rahmen o. Ä.) */
  className?: string;
  /** Textgrössen im Platzhalter etwas grösser (Hero) oder kleiner (Karten) */
  gross?: boolean;
};

export default function BildPlatzhalter({
  bild,
  dateiname,
  hinweis,
  alt,
  verhaeltnis = "4/3",
  className = "",
  gross = false,
}: Props) {
  if (bild) {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{ aspectRatio: verhaeltnis }}
      >
        <Image
          src={bild}
          alt={alt ?? hinweis}
          fill
          sizes="(max-width: 900px) 100vw, 620px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`bild-platzhalter flex w-full flex-col items-center justify-center text-center ${
        gross ? "gap-2 p-5" : "gap-[6px] p-4"
      } ${className}`}
      style={{ aspectRatio: verhaeltnis }}
    >
      <span
        className={`font-mono text-grau-text ${gross ? "text-[12.5px]" : "text-[12px]"}`}
      >
        {dateiname}
      </span>
      <span
        className={`font-mono text-platzhalter ${gross ? "text-[11.5px]" : "text-[11px]"}`}
      >
        {hinweis}
      </span>
    </div>
  );
}
