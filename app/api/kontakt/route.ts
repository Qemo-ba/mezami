/* =============================================================================
   API-ROUTE FÜR DAS KONTAKTFORMULAR   ->  POST /api/kontakt

   Ablauf:
   1. Daten aus dem Formular entgegennehmen und prüfen
   2. Spam-Falle (Feld "webseite") auswerten
   3. E-Mail verschicken – ABER nur, wenn die beiden Umgebungsvariablen
      RESEND_API_KEY und KONTAKT_EMPFAENGER gesetzt sind.

   >>> WICHTIG <<<
   Ohne diese beiden Variablen wird KEINE E-Mail verschickt. Die Anfrage
   landet dann nur im Server-Log (im Terminal bzw. in den Vercel-Logs) und
   der Besucher sieht trotzdem die Danke-Meldung.
   Solange kein Mailversand eingerichtet ist, gilt: die direkten Kontaktwege
   (Telefon / WhatsApp / E-Mail-Button) sind der verlässliche Weg.

   Mailversand aktivieren (Beispiel mit resend.com, kostenloses Kontingent):
   1. Konto bei resend.com anlegen, Domain verifizieren
   2. In Vercel (oder lokal in einer Datei .env.local) eintragen:
        RESEND_API_KEY=re_xxxxxxxxxxxx
        KONTAKT_EMPFAENGER=office@mezami.at
        KONTAKT_ABSENDER=website@mezami.at   (muss zur verifizierten Domain gehören)
   3. Fertig – ab dem nächsten Deploy werden Anfragen zugestellt.
   ============================================================================= */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let daten: Record<string, unknown>;

  try {
    daten = await request.json();
  } catch {
    return NextResponse.json({ ok: false, grund: "ungueltig" }, { status: 400 });
  }

  const name = String(daten.name ?? "").trim();
  const email = String(daten.email ?? "").trim();
  const nachricht = String(daten.nachricht ?? "").trim();
  const honeypot = String(daten.webseite ?? "").trim();

  /* Spam-Bot hat das unsichtbare Feld ausgefüllt: still verwerfen.
     Wir antworten trotzdem mit "ok", damit der Bot nichts lernt. */
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  /* Pflichtfelder prüfen */
  if (!name || !email || !nachricht || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, grund: "felder-fehlen" },
      { status: 400 },
    );
  }

  const empfaenger = process.env.KONTAKT_EMPFAENGER;
  const apiKey = process.env.RESEND_API_KEY;
  const absender = process.env.KONTAKT_ABSENDER ?? "onboarding@resend.dev";

  /* Kein Mailversand eingerichtet -> nur protokollieren */
  if (!empfaenger || !apiKey) {
    console.warn(
      "[Kontaktformular] Kein Mailversand konfiguriert (RESEND_API_KEY / KONTAKT_EMPFAENGER fehlen). Anfrage nur im Log:",
      { name, email, nachricht },
    );
    return NextResponse.json({ ok: true, versendet: false });
  }

  /* E-Mail über die Resend-API verschicken */
  try {
    const antwort = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `MEZAMI Website <${absender}>`,
        to: [empfaenger],
        reply_to: email,
        subject: `Neue Anfrage über die Website – ${name}`,
        text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${nachricht}\n`,
      }),
    });

    if (!antwort.ok) {
      console.error("[Kontaktformular] Mailversand fehlgeschlagen:", await antwort.text());
      return NextResponse.json({ ok: false, grund: "versand" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, versendet: true });
  } catch (fehler) {
    console.error("[Kontaktformular] Fehler beim Mailversand:", fehler);
    return NextResponse.json({ ok: false, grund: "versand" }, { status: 502 });
  }
}
