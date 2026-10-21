# Privater Rückweg für Erfahrungen

Stand 2026-10-21. Technisch umgesetzt, produktiv **geschlossen** (`INTAKE_OPEN: "false"`). Leere D1-Datenbank `percepta-experiences` mit EU-Jurisdiktion und Migration eingerichtet. Ausschließlich erfundene Berichte lokal getestet. Keine echten Einsendungen, kein Pilot und keine Veröffentlichung persönlicher Beiträge.

## Ablauf für Teilnehmende

1. Auf der DE/EN-Teilnahmeseite eine Situation aufschreiben oder eine geprüfte KI-Zusammenfassung einfügen. Kein Konto, keine KI erforderlich. Kategorie ist optional; Standard „Anderes“.
2. Vorschau lesen. Text ändern oder lokal herunterladen. Keine laufende Übertragung, keine Speicherung durch Percepta in Cookies, Local Storage oder Session Storage. Verlassen/Neuladen kann den Entwurf verlieren.
3. Erst bei geöffnetem Empfang: Zweck, Empfänger, Aufbewahrung und Rücknahme lesen, ausdrückliche Einwilligung selbst ankreuzen und absenden. Änderungen verlangen eine erneute Zustimmung. Zustimmung zur privaten Bedarfserhebung ist keine Veröffentlichungsfreigabe.
4. Nur nach bestätigter Datenbankoperation Empfang mit Nummer und vertraulichem Löschcode anzeigen. Code lokal als Textdatei aufbewahren. Nach unbestätigter Übertragung denselben Text erneut senden oder mit dem bereits lokal verfügbaren Code zurückziehen; kein Erfolg wird vorgetäuscht.
5. Rücknahme ist mit Code auch bei später geschlossenem Empfang möglich. Es gibt keinen öffentlichen Lese-Endpunkt. Ein gültig aussehender unbekannter Code erhält dieselbe neutrale Antwort wie ein schon gelöschter Bericht.

Der Browserweg benötigt JavaScript. Die Textvorlagen bleiben ohne JavaScript lesbar und herunterladbar; sie ersetzen dann **keinen vollständigen Einreichungsweg**. Eine betreute Alternative und reale Screenreader-Abnahme sind vor dem Pilot noch zu klären. Keine automatische Account-Erstellung oder Verbindung zu GitHub.

## Daten und Zugriff

Gespeichert werden Sprache, gewählter Bereich, geprüfter Zusammenfassungstext (höchstens 6.000 Zeichen), Einreichungs-/Ablaufdatum, Einwilligungsversion und SHA-256-Prüfwert eines zufälligen 256-Bit-Löschcodes. Keine Kontaktfelder, IP-Spalte, Rohchats oder Anhänge. Daher auch keine persönliche Antwort oder spätere Freigabeanfrage ohne gesonderten Kontaktweg.

`worker/index.ts` nimmt nur gleichursprüngliche JSON-Anfragen an; 32 KiB Körpergrenze, serverseitige Validierung, explizite Einwilligungsversion, gebundene SQL-Parameter, kein CORS-Freigabeheader. Origin-Prüfung schützt den Browserweg, ersetzt aber keine Authentifizierung gegen direkte HTTP-Clients. Rate Limit: 10 Aufrufe pro Minute und Netzwerkstandort/IP für Einreichung und Rücknahme zusammen, kein CAPTCHA. Das ist eine begrenzte Missbrauchsbremse, keine globale Spam-Garantie. IP-Verarbeitung erfolgt in der Cloudflare-Zugriffsbremse, nicht in der Berichtsdatenbank.

Keine Anwendungslogs von Antworten, Tokens oder Datenbankfehlern; bestehende Cloudflare-Netzwerk-/Sicherheitsverarbeitung bleibt davon getrennt. Keine öffentliche Adminoberfläche. Zugriff auf Berichte derzeit nur über das berechtigte Cloudflare-Konto; tatsächliche Moderatorrollen und deren Zugriff müssen vor Öffnung festgelegt werden. Kein GitHub-Token im Browser, Worker oder Prompt.

## Aufbewahrung — noch vorgeschlagene Betriebsregel

Im vorbereiteten Code: 30 Tage aktive Aufbewahrung; täglicher Cron um 03:17 UTC und zusätzliche Bereinigung bei Einreichung. Der Tageslauf kann bis zu einen weiteren Tag benötigen. Löschung aus aktiver D1-Datenbank ist unmittelbar nach erfolgreicher Rücknahme wirksam. Cloudflares Time Travel kann Daten tarifabhängig noch bis zu 30 Tage in Wiederherstellungskopien halten. Keine Zusage sofortiger vollständiger Löschung aus allen Kopien.

EU-Jurisdiktion begrenzt den Ort der Datenbank, nicht sämtliche Worker-/Netzwerkverarbeitung. Geplanter Zweck: qualitative Bedarfserhebung, keine automatisierte Personenbewertung. Einwilligung und Datenschutztext sind eine technische/redaktionelle Vorlage, keine abgeschlossene Rechtsprüfung.

Vor einer Datenbank-Wiederherstellung: Empfang schließen, Lösch-/Widerrufsvorgänge privat sichern und nach Wiederherstellung erneut anwenden; abgelaufene Berichte bereinigen. Kein Restore durchführen, der zurückgezogene Berichte wieder für Auswertungen verfügbar macht. Konkretes privates Rücknahmeprotokoll und Verantwortlichkeit sind vor Öffnung zu prüfen.

## Wie daraus Anforderungen entstehen

Moderierende lesen Berichte im privaten Cloudflare-Bereich. Pro Bericht herausarbeiten: gewünschtes Ergebnis, bereits hilfreiche Mittel, verbleibende Schwierigkeit, benötigte Information/Unterstützung, Zeitpunkt, störende Rückmeldungen und Erfolgskriterium. Die DE/EN-Vorlagen verwenden dieselben Überschriften. Kategorie-Zahlen sind beschreibend, keine repräsentative Häufigkeit.

Für eine erste interne Übersicht ohne Berichtstexte:

```sh
npx wrangler d1 execute percepta-experiences --remote --command "SELECT category, COUNT(*) AS reports FROM experiences WHERE expires_at > unixepoch() * 1000 GROUP BY category;"
```

Keine automatischen Exporte ins Repository, keine Verarbeitung durch zusätzliche KI-Dienste. Öffentliche technische Anforderungen erst nach menschlicher Prüfung auf Rückschlüsse; persönliche Beispiele nur nach Freigabe des konkreten Textes und Ziels. Keine Freigaben aus einem Löschcode oder einer privaten Einwilligung ableiten. Ein späteres moderiertes GitHub-Gateway ist nicht implementiert.

## Öffnung und Prüfung

Vor Öffnung aus [Pilot-Leitfaden](participation-pilot.md) abschließen: Moderation/Vertretung und Zugriffsrechte; verbindliche Aufbewahrungs-/Backupregel; fachliche Prüfung von Einwilligung, Information und Verträgen; erreichbarer Alternativ-/Rücknahmekanal; reale Tastatur-/Screenreader-Probe und synthetischer Live-Durchlauf. Die Fragen zu Moderation und 30-Tage-Vorschlag sind dem Projektverantwortlichen gestellt, noch nicht beantwortet.

Danach `INTAKE_OPEN` und die sichtbaren Status-/Datenschutzhinweise gemeinsam aktualisieren. Eine geänderte Aufbewahrungsregel muss konsistent in Worker, Formular, Datenschutzhinweisen und Einwilligungsversion erscheinen. Nicht nur den Schalter umlegen. Account-Zugriff, juristische Freigabe und Teilnahmebedingungen gehören in private Betriebsunterlagen, nicht als personenbezogene Nachweise in Git.

Lokale Prüfung: `npm run check && npm run build && npm test`. Der Testserver auf 4321 verwendet den geschlossenen Produktivschalter; 4322 öffnet ausschließlich die lokale, getrennte D1-Testdatenbank unter `.wrangler/intake-test`. Keine entfernte Datenbank in Tests. Tests prüfen Einwilligung, Größen-/Schema-/Originfehler, Wiederholung, Konflikt, Rücknahme, Ablaufbereinigung, Zugriffsbremse und den DE/EN-Ablauf mit verlorener Empfangsantwort.

## Quellen, abgerufen 2026-10-21

- [Cloudflare D1: Datenort und Jurisdiktion](https://developers.cloudflare.com/d1/configuration/data-location/) — Datenbankbegrenzung und weltweiter Worker-Zugriff getrennt.
- [D1 Time Travel](https://developers.cloudflare.com/d1/reference/time-travel/) — immer vorhandene Wiederherstellungshistorie und tarifabhängige Fristen.
- [Workers: Static Assets und Worker-Routing](https://developers.cloudflare.com/workers/static-assets/routing/worker-script/) — API-Routen vor statischen Assets.
- [Workers Rate Limiting](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/) — Zugriffsbremse ist standortbezogen.
- [W3C WAI: verständliche Formularrückmeldungen](https://www.w3.org/WAI/tutorials/forms/notifications/) — Status, Fehler und Fokus.
- [GitHub: Issue-Erstellung](https://docs.github.com/en/rest/issues/issues#create-an-issue) — benötigt authentifizierte Schreibmöglichkeit; ein Prompt allein stellt diese nicht bereit.
