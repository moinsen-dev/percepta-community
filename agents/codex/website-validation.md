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

[GitHub Actions Run 39554260898](https://github.com/moinsen-dev/percepta-community/actions/runs/39554260898) besteht am Quellstand `1356e6bc172bb966ee2f7a7a4fe0df9fb308a6b5` vollständig, einschließlich Browserprüfungen und Wrangler-Dry-run. README-Dateilinkprüfung und `git diff --check` ebenfalls ohne Befund.

Dieser exakte Quellstand wurde mit dem Sites-Helper gebaut, gepusht und archiviert. Sites-Version 3, Deployment `appgdep_6ad8588564d08191ab47bf4309688e1b`, Status `succeeded` am 2026-10-21. [Geschütztes deutsches Impressum](https://percepta-community.leafy-leaf-9434.chatgpt.site/de/imprint/) und [English legal notice](https://percepta-community.leafy-leaf-9434.chatgpt.site/en/imprint/) sind damit bereitgestellt. Die nachfolgende Provider-Abfrage bestätigt Version 3, dieselbe URL und unverändert einen berechtigten Eigentümer, keine freigegebenen Gruppen. Keine DNS-/Zugriffsänderung; reine Statusnachträge ändern den statischen Build nicht.


## Nachtrag 2026-10-21 — Direktes Cloudflare-Deployment

Quellstand `d9a7f680276f373bd20ac4bc4f2ab577621da443`. DE/EN-Datenschutzhinweise für den direkten Betrieb erweitert; zusätzliche Worker-Protokolle und alternative Preview-Adressen deaktiviert. Keine zusätzlichen Laufzeitpakete oder Datenspeicher.

Astro-/Typprüfung und Build erfolgreich, 16 Seiten/4 Downloads. 21/21 Browserprüfungen lokal; alle 16 Seiten werden zusätzlich auf Drittanfragen, Cookies und Local-/Session-Storage geprüft. [GitHub Actions Run 39557300736](https://github.com/moinsen-dev/percepta-community/actions/runs/39557300736) vollständig erfolgreich, einschließlich Wrangler-Dry-run. Typgenerierung nach Konfigurationsänderung erfolgreich; temporäres Ergebnis außerhalb des Repos.

Direkter interaktiver Wrangler-Deploy im bestehenden Account erfolgreich. Aktive Cloudflare-Version `3591fb2e-2a6a-476f-8a3b-a4539096f005` (100 %), Custom Domain `percepta.moinsen.dev` aktiv, HTTPS-Verbindung mit Zertifikatsprüfung erfolgreich. Remote zusätzliche Preview-Adressen aus, Logpush aus, keine Bindings oder aktivierter Observability-Block. Der separate Sites-Domain-Eintrag ist entfernt; ältere Eigentümervorschau unverändert.

**Live-Grenze:** Unsere Abrufe erhalten HTTP 403 mit `cf-mitigated: challenge`. Es wurde kein Percepta-HTML ausgeliefert, deshalb keine produktive Header-/Clipboard-/Download-/404-Abnahme behauptet. Lokale Tests belegen nicht die Zugänglichkeit vorgeschalteter Cloudflare-Regeln. Kein nativer Browser/Dashboard-Zugang verfügbar; keine manuellen Hilfsmitteltests. Die damalige [Übergabe](cloudflare-handoff.md) ist inzwischen archiviert: Der Projektverantwortliche bestätigt am 2026-10-21 funktionierendes Hosting und erklärt sie für nicht mehr nötig. Kein erneuter technischer Live-Test in diesem Nachtrag; Datenbefunde und Quellen im [Prüfbericht](../../docs/hosting-data-review.md).

## Nachtrag 2026-10-21 — Empfehlungsseite DE/EN

Auftrag: Die vier recherchierten Alltagshilfen auf der Website empfehlen. Neue Routen `/de/tools/` und `/en/tools/`, Eintrag in der Hauptnavigation, Auswahlhilfe nach Gerät und Aufgabe sowie vier direkt anspringbare Überschriften. Inhalte nutzen den vorhandenen Artikel-Renderer; keine neuen Pakete oder clientseitigen Funktionen. Empfehlungen als Herstellerrecherche gekennzeichnet, mit Standdatum und passenden Nutzungsgrenzen.

- Astro-/Typprüfung: 0 Fehler, Warnungen oder Hinweise; Build: 18 HTML-Seiten und 4 Textdownloads.
- Bestehende Browserprüfung erfasst die neuen Routen automatisch: 23/23 bestanden, einschließlich axe, Links/Ankern, 320-Pixel-Reflow, Drittanfragen, Cookies und Browserspeicher. Nach Ergänzung des Android-Downloadlinks erneut erfolgreich.
- Zusätzlicher einmaliger Playwright-Durchlauf ohne JavaScript: beide Seiten aus der Hauptnavigation erreichbar, aktiver Navigationslink korrekt, alle vier Sprunglinks per Tastatur übertragen den Fokus auf die Überschrift, nächste Tab-Taste erreicht den zugehörigen Anbieterlink; Sprachwechsel führt zur entsprechenden Seite.
- Desktop- und Mobilansichten als Screenshots gesichtet; keine neue CSS-Regel erforderlich.
- Wrangler-Dry-run: erfolgreich. Markdown-Dateilinks und `git diff --check` für den Abschluss prüfen.
- Herstellerziele einschließlich DE/EN-Anleitungen und Seeing AI für Android gelesen. Microsofts offizieller Kurzlink leitet auf `https://play.google.com/store/apps/details?id=com.microsoft.seeingai` weiter; Ziel mit HTTP 200 und Anbieter Microsoft verifiziert. Links öffnen im selben Tab, keine eingebetteten Anbieterinhalte.

Native Computer-Use meldete keine verfügbare Browseroberfläche. Die Tastaturprüfung war skriptgesteuert mit Chromium, keine manuelle VoiceOver-/NVDA-Abnahme. Keine Installation oder Leistungsprüfung der empfohlenen Apps. Veröffentlichung und CI-Ergebnis folgen als eigener Nachtrag.
