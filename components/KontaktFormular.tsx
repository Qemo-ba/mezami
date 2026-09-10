"use client";
/* =============================================================================
   KONTAKTFORMULAR
   Sendet die Eingaben an /api/kontakt (Datei: app/api/kontakt/route.ts).
   "use client", weil das Formular Zustände hat (sendet / erfolgreich / Fehler).

   Feld "webseite" ist eine unsichtbare Honeypot-Falle gegen Spam-Bots:
   Menschen sehen es nicht, Bots füllen es aus – dann verwerfen wir die Anfrage.
   ============================================================================= */

import { useState } from "react";
import { kontaktModul } from "@/content/site";

type Status = "leer" | "sendet" | "gesendet" | "fehler";

export default function KontaktFormular() {
  const [status, setStatus] = useState<Status>("leer");

  async function absenden(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sendet");

    /* Wichtig: das Formular-Element JETZT merken. Nach dem "await" weiter
       unten ist event.currentTarget in React nicht mehr verfügbar. */
    const formular = event.currentTarget;
    const daten = Object.fromEntries(new FormData(formular));

    try {
      const antwort = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(daten),
      });
      if (!antwort.ok) throw new Error("Serverfehler");
      setStatus("gesendet");
      formular.reset();
    } catch {
      setStatus("fehler");
    }
  }

  return (
    <form onSubmit={absenden} className="flex flex-col gap-[18px]">
      <label className="feld-label">
        Name
        <input
          type="text"
          name="name"
          placeholder="Ihr Name"
          required
          autoComplete="name"
          className="feld"
        />
      </label>

      <label className="feld-label">
        E-Mail
        <input
          type="email"
          name="email"
          placeholder="name@beispiel.at"
          required
          autoComplete="email"
          className="feld"
        />
      </label>

      <label className="feld-label">
        Nachricht
        <textarea
          name="nachricht"
          rows={5}
          placeholder="Was können wir für Sie tun?"
          required
          className="feld resize-y"
        />
      </label>

      {/* Spam-Falle – für Menschen unsichtbar */}
      <input
        type="text"
        name="webseite"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={status === "sendet"}
        className="btn btn-primaer w-full px-6 py-[17px] text-base disabled:opacity-70"
      >
        {status === "sendet" ? "Wird gesendet …" : "Nachricht senden"}
      </button>

      {status === "gesendet" && (
        <p className="m-0 text-[14.5px] font-semibold text-anthrazit">
          {kontaktModul.erfolgsmeldung}
        </p>
      )}
      {status === "fehler" && (
        <p className="m-0 text-[14.5px] font-semibold text-anthrazit">
          {kontaktModul.fehlermeldung}
        </p>
      )}
    </form>
  );
}
