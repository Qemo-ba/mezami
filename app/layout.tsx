/* =============================================================================
   ROOT-LAYOUT
   Dieser Rahmen umschliesst JEDE Seite. Alles, was hier steht, ist auf allen
   fünf Seiten identisch: Schriften, Header, Kontakt-Regler und Footer.
   {children} ist der Platzhalter für den jeweiligen Seiteninhalt.
   ============================================================================= */

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontaktRegler from "@/components/KontaktRegler";
import "./globals.css";

/* Schriften aus dem Design. next/font lädt sie beim Bauen herunter und legt
   sie selbst mit aus – kein externer Google-Aufruf im Browser der Besucher. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

/* Diese Angaben landen im <head> und bei Google / beim Teilen in WhatsApp. */
export const metadata: Metadata = {
  title: {
    default: "MEZAMI Elektrotechnik — Ihr Partner für moderne Elektrotechnik",
    template: "%s | MEZAMI Elektrotechnik",
  },
  description:
    "Elektrotechnik Meisterbetrieb: Hausinstallation, Gewerbe & Industrie, Smart Home, Photovoltaik, E-Mobilität und Störungsdienst.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${jakarta.variable} ${plexMono.variable}`}>
      <body>
        <div className="relative w-full overflow-x-hidden">
          <Header />
          <KontaktRegler />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
