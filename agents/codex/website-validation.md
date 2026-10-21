# Website v0.1 — Prüfbericht

Datum: 2026-10-20. Harness: Codex, Modellfamilie laut Sitzung GPT-6, genaue Build-ID unbekannt. Ausgangs-Commit: `45dd0b0384a8bb64620b3db4ff0143f3d13fc794`.

## Implementierter Umfang

Astro 7.4.1, statisch: 14 HTML-Seiten einschließlich Sprachauswahl und Fehlerseite, 4 Textdownloads. DE/EN bieten Start, Teilnahmevorbereitung, Mitarbeit, Forschungsstand, Barrierefreiheit und Datenschutz-/Kontaktstatus. Keine persönliche Dateneingabe, kein Backend, kein Issue-Schreibzugriff, keine Analytics, keine externen Schriften oder Einbettungen. Der einzige Clientcode kopiert Vorlagentext.

Hostingziel laut Auftrag: Cloudflare mit `percepta.moinsen.dev`. Wrangler-Konfiguration für statische Assets vorhanden. Der in dieser Codex-Sitzung vorgegebene Sites-Veröffentlichungsweg verwaltet eine eigene Hosting-Instanz und wird für eine geschützte Vorschau verwendet; das ist kein Deployment in den bestehenden Cloudflare-Account des Projektverantwortlichen. Veröffentlichung und Domainstatus stehen in [state.md](../../state.md). Die Anmeldung beim vorhandenen Cloudflare-Account ist erfolgreich; keine Tokens wurden ausgegeben oder im Repository abgelegt.

## Ausgeführt

| Prüfung | Ergebnis |
| --- | --- |
| `npm run check` | 0 Fehler, 0 Warnungen, 0 Hinweise nach Ergänzung der Node-Typen |
| `npm run build` | 14 HTML-Seiten und 4 Textdownloads erfolgreich erzeugt |
| `npm test` | 19/19 bestanden, Chromium 156 mit Playwright 1.64.1 gegen lokale Cloudflare-Runtime (Wrangler 4.151.3) |
| Automatische Accessibility-Prüfung | axe-core 4.14.0: keine Verletzungen in den ausgeführten Regeln zu WCAG 2 A/AA, 2.1 AA und 2.2 AA auf allen 14 Seiten |
| Semantik, Sprache, lokale Links | Je Seite genau ein `h1` und `main`, passende Seitensprache; alle internen Links erreichbar und verlinkte Fragmentziele vorhanden |
| Schmaler Viewport | Alle 14 Seiten bei 320 CSS-Pixeln ohne horizontalen Überlauf |
| Tastatur, beide Sprachen | Sprunglink fokussiert Inhalt; manueller Kopierknopf über Tab erreichbar und mit Enter bedienbar |
| Zwischenablage | Kopierter Text identisch; simulierte verweigerte Berechtigung zeigt verständliche Alternative |
| Ohne JavaScript | Beide Vorlagen sichtbar, inaktive Kopierknöpfe verborgen, alle Downloads entsprechen den versionierten Quelldateien |
| Sprachwechsel | Teilnahme-Seite führt zur entsprechenden anderen Sprache |
| Netzwerk und Fehler | Teilnahme-Ablauf ohne fremde Requests oder JavaScript-Ausnahmen im Test; echte HTTP-404-Antwort für unbekannte Route |
| Sicherheitsheader | CSP, Permissions-Policy und Referrer-Policy von lokaler Cloudflare-Runtime ausgeliefert |
| `npx wrangler deploy --dry-run` | Erfolgreich; statisches Asset-Paket gelesen, keine Cloudflare-Veröffentlichung durch diesen Befehl |
| Visuelle Prüfung | Vollständige DE-Startseite bei 1440 und 390 Pixeln, EN-Teilnahmeseite bei 390 Pixeln auf Screenshots gelesen; keine abgeschnittenen Inhalte |
| Paketinstallation | npm meldete 0 bekannte Vulnerabilities zum Installationszeitpunkt; keine umfassende Sicherheitsprüfung |

Im ersten Browserlauf blieben Kopierknöpfe verborgen: Astros automatisches Inlining wurde durch die CSP blockiert. `vite.build.assetsInlineLimit: 0` erzeugt jetzt eine separate Script-Datei. Nach dieser Korrektur wurden Build und vollständige Browserprüfung erfolgreich wiederholt. Die spätere Typprüfung der Testdatei benötigte `@types/node`; ergänzt und erneut geprüft.

GitHub Actions führt denselben Build-/Browser-/Dry-run-Pfad auf Änderungen aus. Der erste Linux-Lauf fand einen zusätzlichen Fehler: lange deutsche Überschriften liefen bei 320 Pixeln mit anderer Systemschrift über. Wortumbruch/Silbentrennung ergänzt und die Reflow-Prüfung auf überlaufende Überschriften erweitert. Der erneute lokale Lauf besteht 19/19. Auch [GitHub Actions Run 39464211108](https://github.com/moinsen-dev/percepta-community/actions/runs/39464211108) am Quellstand `cdc203f5ac72a635e2190a86f87a98c0f322aa15` besteht vollständig, einschließlich aller 19 Browserprüfungen und Wrangler-Dry-run unter Linux.

## Nicht ausgeführt und Grenzen

- Keine manuelle Screenreader-Prüfung mit VoiceOver/Safari oder NVDA/Firefox/Chrome. Kein Test mit Betroffenen. Keine Konformitäts- oder BFSG-Behauptung.
- Tastaturtests sind Browserautomation eines konkreten Ablaufs, keine vollständige manuelle Abnahme aller Hilfsmittel.
- 320-Pixel-Reflow ist kein Nachweis für jeden Browserzoom, Vergrößerungsmodus oder mobile Plattform.
- Keine unabhängige Ausführung der Interview-Prompts in externen KI-Chats. [Fiktive Probe](participation-dry-run.md) ist redaktionell.
- Keine Nutzerstudie, App, Modellmessung, Kamera-/Navigationsprüfung oder Rechtsprüfung.
- Betreiber-/Kontaktangaben und Hosting-Datenschutzhinweise fehlen für den öffentlichen Start. Die derzeitige Datenschutzseite benennt diesen Status und ersetzt kein fertiges Impressum.
- Der In-App-Browser war in dieser Sitzung nicht verfügbar; visuelle Prüfung stattdessen über lokale Playwright-Screenshots. Der temporäre lokale Vorschauprozess wird nach Abschluss beendet.

## Implementierungsquellen

Offizielle Quellen, abgerufen 2026-10-20:

- [Astro: Cloudflare Deployment](https://docs.astro.build/en/guides/deploy/cloudflare/) und [Cloudflare: Static Assets](https://developers.cloudflare.com/workers/static-assets/): statische Auslieferung; kein Serveradapter für den gewählten Umfang nötig.
- [Astro: Scripts and event handling](https://docs.astro.build/en/guides/client-side-scripts/): automatische Verarbeitung und mögliches Inlining kleiner Scripts. Konfiguration zusätzlich am installierten Astro-Quellcode geprüft.
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/): Prüfziel, keine aus automatisierten Ergebnissen abgeleitete Konformität.
- Versionen und Node-Anforderung über npm-Metadaten geprüft und im Lockfile festgehalten. GitHub-Action-Versionen über die offiziellen Release-Endpunkte der Repositories `actions/checkout` und `actions/setup-node` geprüft.


## Veröffentlichungsnachweis

Die geschützte Vorschau ist unter `https://percepta-community.leafy-leaf-9434.chatgpt.site` veröffentlicht. Version 2 verwendet exakt den gepushten und in CI geprüften Quellstand `cdc203f5ac72a635e2190a86f87a98c0f322aa15`; Build/Archiv wurden daraus mit dem Sites-Helper erstellt. Deployment `appgdep_6ad7a1ac89a481919c967deae69b444c`: `succeeded` am 2026-10-20. Zugriff bleibt auf den Eigentümer beschränkt. Unangemeldeter Abruf der ersten Veröffentlichung ergab HTTP 401; keine öffentliche Zugriffsfreigabe vorgenommen.

`percepta.moinsen.dev` ist als Custom Domain registriert, DNS-/TLS-Verifizierung jedoch ausstehend. Kein DNS-Eintrag wurde verändert. Die vorhandene Wrangler-Anmeldung weist keinen DNS-Schreibscope aus; eine ergänzende Plugin-Suche lieferte keine passende Cloudflare-DNS-Anbindung. Die öffentliche Domain wird nicht als live ausgewiesen. Statusnachträge in Markdown verändern den veröffentlichten statischen Build nicht.


## Nachtrag 2026-10-21 — Impressum und Betreiberkontakt

Ausgangs-Commit: `404dd7be14459d5ab623b8b12aa6af60df0f0609`. Auf ausdrücklichen Auftrag wurden die öffentlichen Geschäftsangaben von moinsen.dev übernommen (D-15). Der bisherige Befund fehlender Betreiberangaben ist damit erledigt. Quellen, E-Mail-Gegenprüfung und nicht übernommene Vorlagenpassagen stehen in [legal-sources.md](../../docs/legal-sources.md).

DE/EN-Impressum ergänzt, von allen Seiten erreichbar; Datenschutz, Barriere-Meldung und Mitarbeit verweisen auf den geschäftlichen Kontakt. Die Angaben zum Hosting beschreiben die geschützte Vorschau. Kein privater Interview-Empfang eingerichtet, keine Änderung von DNS oder Zugriffsrechten.

- `npm run check`: 0 Fehler, Warnungen oder Hinweise.
- `npm run build`: 16 HTML-Seiten und 4 Textdownloads erfolgreich erzeugt.
- `npm test`: 21/21 bestanden, einschließlich beider Impressumsseiten, axe, Sprache/Links/Anker und 320-Pixel-Reflow; bestehende Tastatur-, Clipboard-, Download-, Ohne-JavaScript- und Header-Prüfungen bestehen ebenfalls.
- Keine neuen manuellen Screenreader-/Nutzertests und keine juristische Freigabe. Die abschließende Prüfung der konkreten Hosting-Datenverarbeitung bleibt offen.

CI und Veröffentlichung des Nachtrags werden nach erfolgreichem Abschluss ergänzt.
