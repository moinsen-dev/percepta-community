# Percepta — Projektstand

Stand: 2026-10-21. Koordination: Codex. Folgeauftrag zu Verständlichkeit, SEO/GEO, Barrierefreiheit und Interview-Rückweg ab Ausgangs-Commit `12b45daad08ccf805b4f632bcff16bd9532eb489`. Die Änderungen umfassen Website und einen noch geschlossenen privaten Empfang.

## Aktuelle Phase

Die Dokumentationsgrundlage ist unter [moinsen-dev/percepta-community](https://github.com/moinsen-dev/percepta-community) öffentlich veröffentlicht. Der Projektverantwortliche hat das Repository angelegt; Codex hat den ersten Commit `ee24e5623502f911807ea1ba257f938ef78362b4` auf `main` gepusht und über den GitHub-Connector bestätigt. `main` ist der Default-Branch. Die Vergleichsversion für weitere Analysen wird durch den unveränderlichen Tag `research-baseline-v0.1` bestimmt.

Die Baseline ist veröffentlicht und geprüft: `research-baseline-v0.1` zeigt auf `fe68acae4142baca25408124f85e353fb9786674`. Alle vier Zweitanalysen sind abgeschlossen und mit PR #1 bis PR #4 gemergt. Die [Koordinator-Synthese](agents/codex/synthesis.md) liegt vor. Der Folgeauftrag zur Website und den vier empfohlenen Arbeitsschritten ist erteilt (D-13/D-14); nicht sämtliche Einzelvorschläge der Berichte sind damit angenommen. Kein weiterer Harness-Lauf ist vorgesehen. Der Tag enthält 24 Markdown-Dateien und `.gitignore` (25 Dateien insgesamt); spätere Nachträge auf `main` verändern ihn nicht.

Die vom Projektverantwortlichen bereitgestellte alte Percepta-Kopie ist statisch analysiert. Untersucht wurde der jüngste lokal enthaltene Branch `codex/reboot-0.2-week1` am Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5`. Diese private Referenzkopie gehört nicht zum veröffentlichten Repository.

Website v0.1 ist mit Astro in DE/EN implementiert: 18 HTML-Seiten einschließlich Impressum, Datenschutzhinweisen und [Empfehlungen](https://percepta.moinsen.dev/de/tools/), 4 Textdownloads, kurzer Interview-Prompt und gleichwertige Vorlage ohne KI. Die neue Empfehlungsseite beschreibt Lookout, Seeing AI, Guided Vision und Apples Bedienungshilfen; über die Hauptnavigation und ohne JavaScript nutzbar (D-16). Betreiberangaben sind gemäß D-15 übernommen. Seit 2026-10-21 liegt die Website direkt im bestehenden Cloudflare-Account des Betreibers unter [percepta.moinsen.dev](https://percepta.moinsen.dev/de/). Worker `percepta-community`, aktive Custom-Domain-Zuordnung und gültige HTTPS-Verbindung sind bestätigt. Die damaligen automatisierten Inhaltsabrufe erhielten HTTP 403 mit `cf-mitigated: challenge`. Der Projektverantwortliche bestätigt inzwischen am 2026-10-21 funktionierendes Hosting und erklärt die Claude-Code-Übergabe für nicht mehr nötig. Diese Rückmeldung ersetzt keine dokumentierte manuelle Accessibility-Abnahme; in der anschließenden Produktrecherche fand kein erneuter technischer Live-Test statt. Der spätere Abruf nach Veröffentlichung der Empfehlungsseiten ist unten separat dokumentiert.

Vorheriger Cloudflare-Quellstand (Empfehlungsseite): `27dd29361e0ab4c60bada6d8f3dae1bb6ad73488`. Damals aktive Version `f8bbeba6-ec9c-43c3-9c0e-ea68ef6d9224` (100 %), Deployment am 2026-10-21 erfolgreich. Lokal bestehen Astro-/Typprüfung, Build, 23 Browserprüfungen und Wrangler-Dry-run; der damalige [GitHub Actions Run 39569007402](https://github.com/moinsen-dev/percepta-community/actions/runs/39569007402) ist für diesen Quellstand vollständig erfolgreich. Zusätzliche skriptgesteuerte Tastaturprüfung der Empfehlungen ohne JavaScript erfolgreich. Die automatisierten Live-Abrufe beider neuen Routen erhalten weiterhin eine Cloudflare-Challenge; kein erneuter Handoff oder Eingriff in Zonenregeln. Datenverarbeitung und Restfragen sind im [Prüfbericht](docs/hosting-data-review.md) dokumentiert. Die frühere [Übergabe an Claude Code](agents/codex/cloudflare-handoff.md) ist archiviert und kein aktiver Auftrag.

Aktueller Website-/Worker-Quellstand: `27ba139a8e97d2fe1b6cce90846df15bc2e025c6`. Cloudflare-Version `4788d7d5-8327-4f70-9c47-a70293fb865c`, am 2026-10-21 um 09:52 UTC mit 100 % aktiviert, bestehende Domain unverändert. [CI Run 39580302540](https://github.com/moinsen-dev/percepta-community/actions/runs/39580302540) erfolgreich einschließlich 32 Browser-/API-Prüfungen und Deploy-Dry-run. Produktiv `INTAKE_OPEN: false`; leere D1-Datenbank mit EU-Jurisdiktion bestätigt. Live: robots.txt HTTP 200 mit korrektem Sitemap-Verweis; Homepage, DE/EN-Teilnahme, Sitemap und Status-API HTTP 403 mit Cloudflare-Challenge für unsere Abrufe. Keine vollständige Live-Abnahme oder bestätigte Crawler-Sperre daraus ableiten. Keine Schutzregel verändert.

Die [ältere geschützte Sites-Vorschau](https://percepta-community.leafy-leaf-9434.chatgpt.site/de/) bleibt am Quellstand `1356e6bc172bb966ee2f7a7a4fe0df9fb308a6b5` (Version 3) erhalten, ausschließlich für den Eigentümer. Ihre noch unverifizierte Custom-Domain-Zuordnung wurde entfernt; sie ist nicht das aktuelle Hosting-Ziel. Die Sites-Vorschau wird nicht als aktueller Veröffentlichungsweg verwendet.

**Folgeauftrag D-18 (Claude Code, 2026-10-21, Ausgangs-Commit `34b1a3ef`):** Website auf Besucher statt Projektinnensicht umgebaut. Navigation: Hilfe finden (Wegweiser nach Alltagsaufgaben, ergänzt um Be My Eyes, Blickpunkt Auge, O&M-/LPF-Training, DBSV-Landesvereine, VoiceOver/TalkBack), Mitmachen, Über Percepta (ersetzt Forschungsstand und Mitwirken; alte Adressen per 301 weitergeleitet). Interview-Prompt v2 nach Selbsttest des Projektverantwortlichen in ChatGPT; simulierte Persona-Gespräche gegen `chat-latest` (zehn Fälle für v1, 13 für v2, 15 für die nach einer zweiten ChatGPT-Analyse nachgeschärfte v3) ([Bericht](agents/claude-code/prompt-simulation.md)). 31 lokale Prüfungen bestanden (Astro-Check, Build, Playwright mit axe, Tastatur, Reflow, Weiterleitungen). Live-Abruf am 2026-10-21: GPTBot erhält HTTP 403 ohne Challenge, Browser-/curl-/Googlebot-Kennungen von unserer Adresse eine Challenge; KI-Crawler-Sperre in Cloudflare vom Betreiber zu prüfen. Am 2026-10-21 auf Freigabe des Projektverantwortlichen deployt (Version `ec1672a3-5bc6-433d-b183-fd09f9e4e30c`). Danach ergänzt: persönliche Motivation des Projektverantwortlichen auf Startseite und „Über Percepta“ (auf seinen Wunsch, ohne Namen Dritter) und [verallgemeinerte Bedarfe eines blinden Testers](docs/first-exchange-needs.md) aus einem privaten Mail-Verlauf; der Verlauf selbst liegt nur unter `private/`. Der Tester meldet, dass die Website (Stand vor dem Umbau) mit VoiceOver gut bedienbar ist. Kein Test mit Betroffenen; der Pilotnutzer soll als Nächstes Website und Prompt prüfen. Koordination dieses Folgeauftrags durch Claude Code auf ausdrücklichen Auftrag des Projektverantwortlichen.

Vorher umgesetzt: verständlichere DE/EN-Einstiege, SEO-/Sprachmetadaten, Sitemap/Robots und WebPage-Strukturdaten; Eingabefeld, Vorschau, Einwilligung und Empfang/Rücknahme über Cloudflare Worker/D1. Der produktive Schalter bleibt geschlossen. D1-Datenbank mit EU-Jurisdiktion und Migration eingerichtet; nur lokale synthetische Berichte verwendet. 32 lokale Prüfungen bestanden. [Technischer Rückweg und offene Betriebsbedingungen](docs/private-intake.md), [SEO-/Verständlichkeitsreview](docs/website-discoverability.md). Keine Assistenz-App und kein Kontaktregister implementiert. Keine Nutzerstudie oder Modellmessung durchgeführt. [Website-Prüfbericht](agents/codex/website-validation.md), [fiktive redaktionelle Probe](agents/codex/participation-dry-run.md) und [Pilot-Leitfaden](docs/participation-pilot.md) liegen vor. Der Pilot ist vorbereitet, nicht gestartet.

## Abgeschlossene unabhängige Analysen

**Codex' erster Dokumentations- und Analysedurchlauf ist inhaltlich abgeschlossen.** Vorliegen: gemeinsame Arbeitsregeln, Vision und Recherche, Website-/Interview-Spezifikation, DE/EN-Interview-Prompts, Codex-Erstanalyse, Altprojekt-Bestandsaufnahme, Validierung und Protokoll. Die angenommene Vorgehensempfehlung ist als D-11 festgehalten.

**Historische Vergleichsreferenz:** `research-baseline-v0.1`. Diese Ausgangsversion galt für den abgeschlossenen Analysedurchlauf. Der Tag bleibt unverändert und auf `origin` verfügbar; die tatsächlichen Ausgangs-Commits stehen in den Berichten.

**Folgeaufträge:** Website- und Dokumentationsarbeit beginnt auf aktuellem `main`, bei paralleler Bearbeitung in getrennten Worktrees/Branches mit eindeutigem Dateiumfang. Die alten Analyse-Startprompts und die archivierte Cloudflare-Übergabe lösen keine neue Arbeit aus. Es ist derzeit kein weiterer Harness-Start beauftragt.

**Claude Codes Analyse ist abgeschlossen:** [PR #1](https://github.com/moinsen-dev/percepta-community/pull/1) wurde mit Merge-Commit `e8b2080c99ce90503a1770223d13615920d2ee37` übernommen. Die [Analyse](agents/claude-code/analysis.md) liegt auf `main` und ist in der Synthese berücksichtigt.

**JCodes Analyse ist abgeschlossen:** [PR #2](https://github.com/moinsen-dev/percepta-community/pull/2) wurde mit Merge-Commit `0ad41a5c965f81b05a9246f6ad918bbbeb9eeffa` übernommen. Die [Analyse](agents/jcode/analysis.md) behandelt alle sechs Auftragsthemen; dokumentiert sind JCode `v0.99.0` (Commit `774613c90`) und eine unbekannte exakte Modell-ID. In der Synthese berücksichtigt.

**OMPs Analyse ist abgeschlossen:** Der Projektverantwortliche hat den Abschluss am 2026-10-20 bestätigt. [PR #3](https://github.com/moinsen-dev/percepta-community/pull/3) wurde mit Merge-Commit `7c7ea95df5903b69f01885ca7c9ababab84b9625` übernommen. Die [Analyse](agents/omp/analysis.md) behandelt alle sechs Auftragsthemen und dokumentiert OMP (Oh My Pi) mit dem Modell `deepseek/deepseek-v4-pro` laut Laufzeitumgebung; eine genaue Build-/Versionsnummer ist unbekannt. OMP und DSH sind getrennte Läufe. In der Synthese berücksichtigt, einschließlich des WCAG-Reviewvorbehalts.

**DeepSeeks Analyse ist abgeschlossen:** [PR #4](https://github.com/moinsen-dev/percepta-community/pull/4) wurde mit Merge-Commit `1cd561ecedb76566d8df42b70e64b737133cf6fa` übernommen. Die [Analyse](agents/deepseek/analysis.md) behandelt alle sechs Auftragsthemen. Dokumentiert sind DeepSeek Harness (DSH) 0.2.1-rc.2 als Web-Sitzung und `deepseek-flash` laut Laufzeitumgebung; Provider DeepSeek abgeleitet, exakte Modell-/Build-ID unbekannt. Kein separater CLI-Prozess. Der Bericht legt Kenntnis von Stichworten aus neuerem `main/state.md` offen; seine Unabhängigkeit ist entsprechend eingeschränkt. In der Synthese berücksichtigt.

DeepSeeks Analyse-Commit `d423758feb34dea7a9dcfee860f4736ad2178fc3` baut direkt auf dem Vorbereitungs-Commit `b506a180412a2e7c38bd0fce357aa247a716ad4c` auf. Dessen einziger Eltern-Commit ist die fachliche Baseline `fe68acae4142baca25408124f85e353fb9786674`; er ergänzt ausschließlich Auftrag und zwei Vorlagen in `agents/deepseek/`. Der Analyse-Diff betrifft nur Bericht und eigenes Protokoll. Keine anderen vollständigen Zweitanalysen wurden laut DSH vorab gelesen.

Die Arbeitsbereiche aller vier Harnesses wurden bei der Integration nicht verändert. DeepSeeks Worktree `.worktrees/deepseek` war beim Integrationsabschluss sauber am Analyse-Commit. Diese historische Angabe ist keine erneute Prüfung aller Worktrees. Die Analyse-Branches bleiben als Nachweise erhalten; die Startprompts dokumentieren den abgeschlossenen ersten Durchlauf.

**Umsetzung nach der Synthese:** D-13/D-14 bestätigen Website und vier nächste Arbeitsschritte; D-15/D-16 ergänzen Betreiberangaben und Empfehlungen. Website und Entwurfshilfen sind veröffentlicht. Privater Empfang, externe KI-Chat-Proben und Pilot stehen weiterhin aus. Diese bestätigten Entscheidungen übernehmen nicht pauschal alle Einzelvorschläge der Analysen; die ursprünglichen Berichte bleiben unverändert.

## Bestätigte Entscheidungen

| ID | Entscheidung | Herkunft |
| --- | --- | --- |
| D-01 | Produktname Percepta; neues öffentliches Repo `moinsen-dev/percepta-community` | Projektverantwortlicher, 2026-10-20 |
| D-02 | Erst Dokumentation und unabhängige Analysen, danach Website | Bestätigte Auswahl, 2026-10-20 |
| D-03 | Codex beginnt; danach Claude Code, JCode und OMP / Oh My Pi | Projektauftrag |
| D-04 | Eigener Ordner und eigenes `Change-Log-Agents.md` je Harness | Projektauftrag |
| D-05 | Spätere Website mit Astro, Deutsch und Englisch, für Screenreader und Tastatur geeignet | Projektauftrag |
| D-06 | Interview-Prompt für externe KI-Chats; Vorschau und Zustimmung vor Veröffentlichung | Angenommener Umsetzungsplan |
| D-07 | Zusätzlich moderierte Einreichung ohne öffentliches persönliches GitHub-Konto | Bestätigte Auswahl, 2026-10-20 |
| D-08 | Altes Repository unverändert; kein Fork und keine Codeübernahme | Projektauftrag |
| D-09 | Alltagshilfe umfasst Einkaufen, Fragenstellen, Interaktion mit Menschen und Orientierung/Navigation | Umfangserweiterung, 2026-10-20 |
| D-10 | Letzten Branch des alten Percepta getrennt klonen und als Erfahrungsquelle analysieren | Folgeauftrag, 2026-10-20 |
| D-11 | Frühere Alltagssituationen als Ausgangspunkt nutzen; wenige vollständige Abläufe gemeinsam mit Betroffenen prüfen, bevor die neue App-Architektur festgelegt wird | Empfehlung nach Altprojekt-Analyse ausdrücklich angenommen, 2026-10-20 |
| D-12 | Nach Abschluss von OMP zusätzlich DeepSeek als unabhängigen Analyselauf aufnehmen; gleiche fachliche Baseline, eigener Ordner und Worktree, anschließend gemeinsame Synthese | Ausdrücklicher Folgeauftrag des Projektverantwortlichen, 2026-10-20 |
| D-13 | Website mit Astro, Hosting bei Cloudflare, Zieldomain `percepta.moinsen.dev` | Ausdrücklicher Umsetzungsauftrag, 2026-10-20 |
| D-14 | Website und vier empfohlene Schritte beginnen: kurze DE/EN-Entwurfshilfen mit gleichwertiger Alternative ohne KI; fiktive Prozessprobe; privaten Betrieb klären und Pilot mit 3–5 Erwachsenen vorbereiten; daraus später wenige Abläufe für Technikvergleiche auswählen. Im ersten Schritt ausschließlich eigene Entwürfe, keine automatischen Issues oder öffentliche persönliche Geschichten | Auftrag „Webpage inklusive der vier Empfehlungen“, 2026-10-20; vor Umsetzung so konkretisiert. Keine Freigabe persönlicher Inhalte oder ungefragter Kontaktaufnahme |
| D-15 | Öffentliche Betreiber-/Rechtsangaben von www.moinsen.dev für Percepta übernehmen; keine Übernahme fremder Dienstfunktionen oder veralteter Verweise | Ausdrücklicher Folgeauftrag, 2026-10-21; [Quellen und Abgrenzung](docs/legal-sources.md) |
| D-16 | Empfehlungsseite für blinde und sehbehinderte Menschen mit Lookout, Seeing AI, Guided Vision und Apples Bedienungshilfen; bestehende DE/EN-Website um Herstellerinformationen und direkte Zugänge ergänzen | Ausdrücklicher Folgeauftrag, 2026-10-21; keine eigene App-Leistungsprüfung oder Anbieterentscheidung für Percepta |
| D-19 | Öffentliche Geschichten: Nach Vorschau und ausdrücklicher Einwilligung legt der Worker sofort ein öffentliches GitHub-Issue (Label `geschichte`) über den Projektzugang an; Seite „Geschichten“ zeigt offene Issues; Moderation nachträglich durch den Projektverantwortlichen. Kopier-Prompt für externe KI-Chats bleibt der Interviewweg | Ausdrückliche Auswahl des Projektverantwortlichen, 2026-10-21 („Kopier-Prompt behalten“, „Sofort als GitHub-Issue“) gegen die Empfehlung einer vorherigen Prüfung; Risiken (sofort sichtbar, kopierbar) wurden vorab genannt |
| D-18 | Website als Wegweiser nach Alltagsaufgaben ausbauen (inkl. Beratung/Training), Startseite und Navigation auf Besucher ausrichten, Interview-Prompt v2 als Gesprächspartner statt Fragebogen; Simulationsprüfung, danach Rückmeldung eines blinden Pilotnutzers | Ausdrücklicher Folgeauftrag des Projektverantwortlichen, 2026-10-21 („Wegweiser B bauen, danach Schritte 1–5“); Pilotnutzer vom Projektverantwortlichen selbst angesprochen |
| D-17 | Website auf verständliche Inhalte, SEO/GEO und zugängliche Bedienung überarbeiten; Interview-Prompt und brauchbaren Rückweg für Erfahrungen umsetzen | Folgeauftrag 2026-10-21 und „continue“. Privater Rückweg als offengelegte Umsetzungsannahme; keine Zustimmung zur Veröffentlichung persönlicher Inhalte oder bestätigte Aufbewahrungsregel |

## Annahmen, keine bestätigten Nutzermerkmale

- Deutschland und deutsche Alltagssituationen als erster Forschungskontext, englischsprachige Beteiligung ebenfalls vorgesehen.
- Smartphone als Ausgangspunkt; Plattform, Gerät und Trageweise noch offen.
- Ergänzende Unterstützung zu bestehenden Mobilitätshilfen; noch keine nachgewiesene Navigationssicherheit.
- Keine verfügbaren Partnergebäude, Kartendaten oder Verkehrsbetriebs-Schnittstellen vorausgesetzt.
- Kurze, selbstbestimmte Information könnte hilfreicher sein als dauerhafte Ansagen; mit Betroffenen prüfen.
- „Organisationen“ umfasst zunächst Selbsthilfe, Interessenvertretung, Forschung und ehrenamtliche Unterstützung.
- „Fragen stellen“ umfasst vorläufig Fragen an die App und Unterstützung beim Formulieren von Fragen an Menschen; genaue Bedürfnisse offen erheben.

## Arbeitspakete

| Paket | Status | Nachweis / nächster Schritt |
| --- | --- | --- |
| Gemeinsame Dokumentation | Geprüft und auf `main` veröffentlicht | [README](README.md), [AGENTS](AGENTS.md) |
| Codex-Erstanalyse | Abgeschlossen; Grundlage des ebenfalls abgeschlossenen Analysevergleichs | [Analyse](agents/codex/analysis.md), [Validierung](agents/codex/validation.md) |
| Claude Code | Analyse abgeschlossen, PR #1 gemergt; in Synthese bewertet | [Analyse](agents/claude-code/analysis.md) |
| JCode | Analyse abgeschlossen, PR #2 gemergt; in Synthese bewertet | [Analyse](agents/jcode/analysis.md) |
| OMP | Analyse abgeschlossen, PR #3 gemergt; in Synthese bewertet | [Analyse](agents/omp/analysis.md) |
| DeepSeek / DSH | Analyse abgeschlossen, PR #4 gemergt; eingeschränkte Unabhängigkeit dokumentiert | [Analyse](agents/deepseek/analysis.md) |
| Koordinator-Synthese | Vergleich abgeschlossen; Folgeauftrag D-13/D-14 in Spezifikationen übernommen | [Entscheidungsvorlage](agents/codex/synthesis.md) |
| Repository-Veröffentlichung | Öffentlich; erster Commit erfolgreich gepusht und remote bestätigt | `moinsen-dev/percepta-community`, Default-Branch `main`, Remote `origin` |
| Vergleichsbaseline | Veröffentlicht, von `origin` abgerufen und remote gelesen | `research-baseline-v0.1` → `fe68acae4142baca25408124f85e353fb9786674` |
| Astro-Website | Verständliche Einstiege und SEO/GEO-Grundlagen ergänzt; 32 lokale Prüfungen einschließlich privatem Testempfang bestanden. auf Cloudflare veröffentlicht und CI erfolgreich; manuelle Accessibility-Abnahme offen | [Brief](docs/website-brief.md), [Prüfbericht](agents/codex/website-validation.md) |
| Empfehlungen für vorhandene Hilfen | Zum Wegweiser nach Aufgaben ausgebaut (D-18), Be My Eyes und Beratungs-/Trainingsangebote ergänzt; Herstellerrecherche, keine eigenen App-Leistungstests | [Deutsch](https://percepta.moinsen.dev/de/tools/), [English](https://percepta.moinsen.dev/en/tools/), [Quellenvergleich](docs/existing-assistive-tools.md) |
| Interview-Einreichung | Strukturierte DE/EN-Vorlagen, Browser-Vorschau und Worker/D1 mit Einwilligung, Empfang und Löschcode implementiert; produktiver Empfang geschlossen, Betrieb noch offen | [Spezifikation](docs/interview-spec.md), [Pilot-Vorbereitung](docs/participation-pilot.md) |
| Fiktive Prozessprobe | Redaktioneller Durchgang dokumentiert; simulierte KI-Chat-Probe mit zehn Personas für Prompt v1/v2 durchgeführt ([Bericht](agents/claude-code/prompt-simulation.md)); Sprachmodus und andere Chat-Apps ungeprüft | [Probe](agents/codex/participation-dry-run.md) |
| Beteiligungs-Pilot / Technikvergleiche | Ablauf und Auswahlkriterien vorbereitet; keine Teilnehmenden oder Messergebnisse | [Leitfaden](docs/participation-pilot.md) |
| Modelle und Alltagshilfe | Modellrecherche um vier bestehende Alltagshilfen ergänzt; Herstellerquellen gelesen, praktische Vergleiche ausstehend | [Recherche](docs/research.md), [Lookout / Seeing AI / Gemini / Apple](docs/existing-assistive-tools.md) |
| Früheres Percepta klonen und analysieren | Kopie vom Projektverantwortlichen bereitgestellt; statische Bestandsaufnahme abgeschlossen | [Branch-/Commitnachweis und Befunde](agents/codex/legacy-review.md); keine Laufzeitprüfung |

## Zugriffsgrenzen und frühere Quellen

Das frühere Repository `moinsen-dev/percepta` liegt nun getrennt unter `private/legacy-percepta/`. Der Arbeitsbaum bleibt unverändert auf `develop`; der fünf Commits neuere Reboot-Stand wurde direkt aus Git gelesen. Ein erneuter Abgleich mit dem Remote fand nicht statt.

Eine frühere Interview-Zusammenfassung wurde lokal ausgewertet. Nur verallgemeinerte Bedürfnisse fließen in die Bestandsaufnahme ein; keine Namen, Rohinhalte oder persönlichen Zitate. Ihre Entstehung und Freigabe zur erneuten Veröffentlichung sind nicht bestätigt. Die Quelle ist keine repräsentative Bedarfsstudie.

Vor Bereitstellung der Kopie scheiterten Connector-Zugriffe mit 404 und CLI-/Git-Zugriffe an Netzwerk-/DNS-Fehlern. Auch nach erneuter `gh`-Authentifizierung war die Gültigkeit der Anmeldung wegen fehlender DNS-Auflösung nicht verlässlich prüfbar. Ein Metadatenabruf außerhalb der Sandbox wurde automatisch abgelehnt. Diese bisherigen Befunde sind im [Codex-Protokoll](agents/codex/Change-Log-Agents.md) dokumentiert; keine Zugangsdaten wurden ausgelesen oder verändert.

Die früheren Initialisierungsversuche scheiterten am `.git`-Schreibschutz. Nach der manuellen Einrichtung durch den Projektverantwortlichen funktionieren lokale Statusabfrage und Staging. `origin` zeigt auf `https://github.com/moinsen-dev/percepta-community.git`; der Connector bestätigt das öffentliche Repository und Schreibberechtigungen.

Nach Aktivierung von Full Access am 2026-10-20 funktionieren auch `git fetch origin`, `git ls-remote` und die PR-Abfragen mit `gh`. PR #1 bis PR #4 wurden erfolgreich gemergt und mit `git pull --ff-only origin main` lokal übernommen. Frühere Zugriffsfehler bleiben im Protokoll erhalten.

## Erkenntnisse aus dem Altprojekt

- Der Hauptablauf kombinierte Kamerabild, aktuelle Frage und Cloud-Antwort; offline waren Texterkennung und Barcodes angebunden. Realtime-/lokale Modellmodule belegen keinen gleichwertigen Gesamtpfad.
- Einkaufs-, Lese- und Bedienbedürfnisse waren bereits vorhanden. Unterstützung bei menschlichen Gesprächen bleibt ein gesonderter Forschungsauftrag.
- Geometrie- und Konfidenzheuristiken sind keine belastbare Grundlage für Geh-Anweisungen. Neueste Modelle auf konkrete Aufgaben prüfen; keine Sicherheitszusagen aus plausiblen Antworten ableiten.
- Im historischen UAT-Protokoll sind alle zehn Alltagsszenarien ausstehend oder blockiert. Es wurden hier keine alten Tests erneut ausgeführt.
- Wenige klare Aktionen, sofortiges Feedback, verständliche Fehler und reale Geräte-/Screenreader-Abnahme sind wichtige Anforderungen für den Neustart.

Das Vorgehen aus D-11 ist bestätigt. Die konkreten ersten Abläufe werden mit Betroffenen priorisiert; die Beispiele aus der Analyse sind noch keine ausgewählte Funktionsliste. Plattform und Anbieter bleiben offen. Quellen und Grenzen stehen in der [Bestandsaufnahme](agents/codex/legacy-review.md).

## Offene Betriebsfragen und Voraussetzungen für den Pilot

1. Betreiberangaben sind umgesetzt. Datenwege, fehlende Anwendungstracker, technische Cloudflare-Verarbeitung und Rechtstexte sind geprüft/ergänzt; konkrete Zonen-Schutz-/Logeinstellungen, Vertragsstand und Mail-Löschregeln bleiben offen. Siehe [Datenprüfung](docs/hosting-data-review.md).
2. Privater Empfang technisch in Worker/D1 vorbereitet. Moderation/Vertretung, Zugriff, verbindliche Aufbewahrung und Rechtsprüfung vor Öffnung klären. Vorschlag: 30 Tage aktive Speicherung, tägliche Bereinigung, Sicherungskopien bis zu 30 weitere Tage. Rückfrage an Projektverantwortlichen zu Moderation und Frist noch unbeantwortet; [Betriebsleitfaden](docs/private-intake.md).
3. Lizenz für Code/Dokumentation und Bedingungen späterer freiwilliger öffentlicher Beiträge.
4. Cloudflare-Zoneneinstellungen: KI-Crawler (z. B. GPTBot) werden mit 403 abgewiesen, andere Abrufe erhalten eine Challenge. Ob das gewollt ist, entscheidet der Betreiber; es betrifft Auffindbarkeit in KI-Suchen und möglicherweise Screenreader-Nutzende.
5. Reale Screenreader-/Tastaturabnahme, externe KI-Chat-Probe mit fiktiven Daten und anschließend Rekrutierung, Betreuung und Aufwandsentschädigung des Pilots. Domainanbindung und Hosting-Übergabe sind keine offenen Umsetzungspakete; die dokumentierte Grenze automatisierter Live-Abrufe bleibt bestehen.

## Nächste Schritte

Nach D-19: Worker-Secret `GITHUB_TOKEN` ist gesetzt (2026-10-21), das Veröffentlichen ist live aktiv. Eine fiktive Probe-Geschichte lief über das Formular auf percepta.moinsen.dev durch (Issue #5 mit Labels `geschichte`/`de`, erschien auf `/de/stories/`) und ist wieder geschlossen. Die Issues erscheinen unter dem Konto des Token-Inhabers. Cloudflare-KI-Richtlinien (Agent/Search erlauben, Training für percepta ausnehmen) stellt der Betreiber im Dashboard um.

Nach D-18: Freigabe und Deploy durch den Projektverantwortlichen; danach prüft der blinde Pilotnutzer Website, Wegweiser und Prompt v2 (Text- und Sprachmodus) und gibt Rückmeldung. Für seine Rückmeldung braucht es keinen geöffneten Empfang; der Projektverantwortliche hält den Kontakt direkt.


Die vier Produkthinweise sind im [Vergleich vorhandener Hilfen](docs/existing-assistive-tools.md) ausgewertet und als DE/EN-Empfehlungsseite veröffentlicht. Nächste offene Arbeit: reale Accessibility-Abnahme und Einwilligungs-/Betriebsbedingungen des privaten Rückwegs abschließen. Die bisherige Empfangsfrage wird nicht mehr nur durch einen Prompt beantwortet; die technische Vorbereitung liegt vor. Empfehlung zur weiteren Planung: mit Betroffenen vorhandene Hilfen und verbleibende Schwierigkeiten in wenigen vollständigen Alltagsaufgaben vergleichen, bevor ein eigener App-Umfang festgelegt wird. Keine Anbieter- oder Architekturentscheidung für die spätere Assistenz-App.

Die Cloudflare-Übergabe entfällt auf Rückmeldung des Projektverantwortlichen; kein weiterer Harness wurde gestartet. Offene Betriebs- und Accessibility-Prüfungen für den privaten Teilnahmeweg bleiben bestehen. Diesen zunächst mit erfundenen Daten erproben und erst bei geklärtem Betrieb und zugänglichem Ablauf den Pilot starten. Keine Personenansprache erfolgt.

Der Baseline-Tag wird nicht verschoben. Spätere Prüfprotokolle oder Statusänderungen auf `main` ändern die Ausgangsversion der Analysen nicht. App-Plattform und KI-Anbieter für eine eigene Assistenz-App sind weiterhin offen. `private/`, Umgebungsdateien und die alte Git-Historie bleiben ausgeschlossen.
