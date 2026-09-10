"use client";
/* =============================================================================
   HEADER / NAVIGATION
   - klebt beim Scrollen oben ("sticky")
   - ab 901px Breite: volle Navigation   (Breakpoint "menu" in globals.css)
   - darunter: Burger-Button + aufklappbares Menü
   - der aktive Menüpunkt bekommt einen beigen Unterstrich
   "use client" oben ist nötig, weil die Komponente den geöffneten
   Menü-Zustand speichert und weiss, auf welcher Seite du gerade bist.
   ============================================================================= */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";

export default function Header() {
  const pfad = usePathname();
  const [menuOffen, setMenuOffen] = useState(false);

  /* Beim Seitenwechsel schliesst sich das Mobil-Menü automatisch */
  useEffect(() => {
    setMenuOffen(false);
  }, [pfad]);

  const istAktiv = (href: string) =>
    href === "/" ? pfad === "/" : pfad.startsWith(href);

  return (
    <header className="abschnitt sticky top-0 z-[60] border-b border-linie bg-white/95 backdrop-blur-[10px]">
      <div className="container-mezami flex min-h-[78px] items-center justify-between gap-4">
        {/* ---- Logo ------------------------------------------------------- */}
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-[34px] w-[34px] items-center justify-center bg-anthrazit text-[17px] font-extrabold text-white">
            M
          </span>
          <span className="flex flex-col leading-[1.1]">
            <strong className="text-[19px] font-extrabold tracking-[0.14em] text-anthrazit">
              MEZAMI
            </strong>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-grau-text">
              Elektrotechnik
            </span>
          </span>
        </Link>

        {/* ---- Navigation ab 901px ---------------------------------------- */}
        <nav className="hidden items-center gap-[clamp(16px,2.2vw,34px)] menu:flex">
          {navigation.map((punkt) => (
            <Link
              key={punkt.href}
              href={punkt.href}
              className={`border-b-2 pb-[3px] text-[15px] font-semibold transition-colors hover:text-anthrazit ${
                istAktiv(punkt.href)
                  ? "border-beige text-anthrazit"
                  : "border-transparent text-grau-text"
              }`}
            >
              {punkt.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="btn btn-primaer btn-klein whitespace-nowrap"
          >
            Angebot anfragen
          </Link>
        </nav>

        {/* ---- Burger-Button unter 901px ---------------------------------- */}
        <button
          type="button"
          onClick={() => setMenuOffen((offen) => !offen)}
          aria-label="Menü"
          aria-expanded={menuOffen}
          className="flex h-[46px] w-[46px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[2px] border border-linie bg-white menu:hidden"
        >
          <span className="block h-[2px] w-5 bg-anthrazit" />
          <span className="block h-[2px] w-5 bg-anthrazit" />
          <span className="block h-[2px] w-5 bg-anthrazit" />
        </button>
      </div>

      {/* ---- Aufgeklapptes Mobil-Menü ------------------------------------- */}
      {menuOffen && (
        <nav className="flex flex-col gap-[2px] border-t border-[#E4E4E2] pt-2 pb-[18px] menu:hidden">
          {navigation.map((punkt) => (
            <Link
              key={punkt.href}
              href={punkt.href}
              className={`border-b border-[#EFEFED] px-1 py-[14px] text-base font-semibold ${
                istAktiv(punkt.href) ? "text-anthrazit" : "text-grau-text"
              }`}
            >
              {punkt.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="btn btn-primaer mt-3 w-full px-[22px] py-4 text-[15px]"
          >
            Angebot anfragen
          </Link>
        </nav>
      )}
    </header>
  );
}
