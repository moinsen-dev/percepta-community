# Percepta — Projektstand

Stand: 2026-10-20. Verantwortlicher Harness für die erste Lieferung: Codex.

## Aktuelle Phase

Die Dokumentationsgrundlage ist unter [moinsen-dev/percepta-community](https://github.com/moinsen-dev/percepta-community) öffentlich veröffentlicht. Der Projektverantwortliche hat das Repository angelegt; Codex hat den ersten Commit `ee24e5623502f911807ea1ba257f938ef78362b4` auf `main` gepusht und über den GitHub-Connector bestätigt. `main` ist der Default-Branch. Die Vergleichsversion für weitere Analysen wird durch den unveränderlichen Tag `research-baseline-v0.1` bestimmt.

Die Baseline ist veröffentlicht und geprüft: `research-baseline-v0.1` zeigt auf `fe68acae4142baca25408124f85e353fb9786674`. Die Analysen von Claude Code und JCode sind abgeschlossen und mit PR #1 beziehungsweise PR #2 gemergt; die inhaltliche Integration steht aus. Als nächster Harness ist OMP vorgesehen; Worktree und Startprompt sind vorbereitet. Der Tag enthält die geprüften 25 Dokumentationsdateien; spätere organisatorische Nachträge auf `main` verändern ihn nicht.

Die vom Projektverantwortlichen bereitgestellte alte Percepta-Kopie ist statisch analysiert. Untersucht wurde der jüngste lokal enthaltene Branch `codex/reboot-0.2-week1` am Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5`. Diese private Referenzkopie gehört nicht zum veröffentlichten Repository.

Keine Website, App, Datenbank, Kontaktregistrierung oder Interview-Einreichungsstelle implementiert. Keine Nutzerstudie oder Modellmessung durchgeführt.

## Übergabestatus: unabhängige Analysen

**Codex' erster Dokumentations- und Analysedurchlauf ist inhaltlich abgeschlossen.** Vorliegen: gemeinsame Arbeitsregeln, Vision und Recherche, Website-/Interview-Spezifikation, DE/EN-Interview-Prompts, Codex-Erstanalyse, Altprojekt-Bestandsaufnahme, Validierung und Protokoll. Die angenommene Vorgehensempfehlung ist als D-11 festgehalten.

**Übergabereferenz:** `research-baseline-v0.1`. Jeder weitere Harness prüft vor seiner Analyse, dass der Tag aus `origin` verfügbar ist, arbeitet in einem eigenen Checkout/Worktree davon und hält den mit `git rev-parse HEAD` ermittelten Commit fest. Ein fehlender oder abweichender Tag ist keine Freigabe, ersatzweise den neuesten Stand von `main` zu verwenden.

**Claude Codes Analyse ist abgeschlossen:** [PR #1](https://github.com/moinsen-dev/percepta-community/pull/1) wurde mit Merge-Commit `e8b2080c99ce90503a1770223d13615920d2ee37` übernommen. Die [Analyse](agents/claude-code/analysis.md) liegt damit auf `main`; ihre inhaltliche Integration und die Bewertung ihrer Vorschläge stehen aus.

**JCodes Analyse ist abgeschlossen:** [PR #2](https://github.com/moinsen-dev/percepta-community/pull/2) wurde mit Merge-Commit `0ad41a5c965f81b05a9246f6ad918bbbeb9eeffa` übernommen. Die [Analyse](agents/jcode/analysis.md) behandelt alle sechs Auftragsthemen; dokumentiert sind JCode `v0.99.0` (Commit `774613c90`) und eine unbekannte exakte Modell-ID. Die inhaltliche Integration und Bewertung der Empfehlungen stehen aus.

**Nächster Harness: OMP.** OMP arbeitet vom selben unveränderten Tag `research-baseline-v0.1` und liest die Berichte von Claude Code und JCode erst nach Abschluss seiner eigenen Erstbewertung. Die [Startanleitung](Change-Log-Agents.md) und der [OMP-Startprompt](agents/codex/start-prompts.md#omp--oh-my-pi) beschreiben den Ablauf. Die bestätigte Entscheidung D-11 ist Bestandteil der gemeinsamen Grundlage.

Lokal vorbereitet: `.worktrees/omp` auf `analysis/omp`, weiterhin exakt am Baseline-Commit und mit sauberem Arbeitsbaum. `.worktrees/jcode` bleibt auf dem eigenen Analyse-Branch. Die Worktrees liegen im ignorierten Verzeichnis `.worktrees/`; die Vorbereitung startet keinen Harness. Die Arbeitsbereiche von Claude Code und JCode wurden bei der Integration nicht verändert.

Der nächste Auftrag ist eine unabhängige Bewertung der Grundlage, einschließlich begründeter Gegenargumente und konkreter Prüfempfehlungen. Ergebnisse und Vorschläge gehören in den eigenen Harness-Ordner; gemeinsame Entscheidungen werden danach durch den Koordinator integriert.

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
| Codex-Erstanalyse | Abgeschlossen und zur Übergabe bereit | [Analyse](agents/codex/analysis.md), [Validierung](agents/codex/validation.md) |
| Claude Code | Analyse abgeschlossen, PR #1 gemergt; inhaltliche Integration ausstehend | [Analyse](agents/claude-code/analysis.md) |
| JCode | Analyse abgeschlossen, PR #2 gemergt; inhaltliche Integration ausstehend | [Analyse](agents/jcode/analysis.md) |
| OMP | Worktree und Startprompt bereit; Harness noch nicht gestartet | [Auftrag](agents/omp/assignment.md), [Startprompt](agents/codex/start-prompts.md#omp--oh-my-pi) |
| Repository-Veröffentlichung | Öffentlich; erster Commit erfolgreich gepusht und remote bestätigt | `moinsen-dev/percepta-community`, Default-Branch `main`, Remote `origin` |
| Vergleichsbaseline | Veröffentlicht, von `origin` abgerufen und remote gelesen | `research-baseline-v0.1` → `fe68acae4142baca25408124f85e353fb9786674` |
| Astro-Website | Nur spezifiziert | [Brief](docs/website-brief.md) |
| Interview-Einreichung | Nur spezifiziert; keine aktiven Endpunkte | [Spezifikation](docs/interview-spec.md) |
| Modelle und Alltagshilfe | Bisher Schwerpunkt Navigationsrecherche; weitere Bereiche als Forschungsaufträge ergänzt | [Recherche](docs/research.md) |
| Früheres Percepta klonen und analysieren | Kopie vom Projektverantwortlichen bereitgestellt; statische Bestandsaufnahme abgeschlossen | [Branch-/Commitnachweis und Befunde](agents/codex/legacy-review.md); keine Laufzeitprüfung |

## Zugriffsgrenzen und frühere Quellen

Das frühere Repository `moinsen-dev/percepta` liegt nun getrennt unter `private/legacy-percepta/`. Der Arbeitsbaum bleibt unverändert auf `develop`; der fünf Commits neuere Reboot-Stand wurde direkt aus Git gelesen. Ein erneuter Abgleich mit dem Remote fand nicht statt.

Eine frühere Interview-Zusammenfassung wurde lokal ausgewertet. Nur verallgemeinerte Bedürfnisse fließen in die Bestandsaufnahme ein; keine Namen, Rohinhalte oder persönlichen Zitate. Ihre Entstehung und Freigabe zur erneuten Veröffentlichung sind nicht bestätigt. Die Quelle ist keine repräsentative Bedarfsstudie.

Vor Bereitstellung der Kopie scheiterten Connector-Zugriffe mit 404 und CLI-/Git-Zugriffe an Netzwerk-/DNS-Fehlern. Auch nach erneuter `gh`-Authentifizierung war die Gültigkeit der Anmeldung wegen fehlender DNS-Auflösung nicht verlässlich prüfbar. Ein Metadatenabruf außerhalb der Sandbox wurde automatisch abgelehnt. Diese bisherigen Befunde sind im [Codex-Protokoll](agents/codex/Change-Log-Agents.md) dokumentiert; keine Zugangsdaten wurden ausgelesen oder verändert.

Die früheren Initialisierungsversuche scheiterten am `.git`-Schreibschutz. Nach der manuellen Einrichtung durch den Projektverantwortlichen funktionieren lokale Statusabfrage und Staging. `origin` zeigt auf `https://github.com/moinsen-dev/percepta-community.git`; der Connector bestätigt das öffentliche Repository und Schreibberechtigungen.

Nach Aktivierung von Full Access am 2026-10-20 funktionieren auch `git fetch origin`, `git ls-remote` und die PR-Abfragen mit `gh`. PR #1 und PR #2 wurden erfolgreich gemergt und mit `git pull --ff-only origin main` lokal übernommen. Frühere Zugriffsfehler bleiben im Protokoll erhalten.

## Erkenntnisse aus dem Altprojekt

- Der Hauptablauf kombinierte Kamerabild, aktuelle Frage und Cloud-Antwort; offline waren Texterkennung und Barcodes angebunden. Realtime-/lokale Modellmodule belegen keinen gleichwertigen Gesamtpfad.
- Einkaufs-, Lese- und Bedienbedürfnisse waren bereits vorhanden. Unterstützung bei menschlichen Gesprächen bleibt ein gesonderter Forschungsauftrag.
- Geometrie- und Konfidenzheuristiken sind keine belastbare Grundlage für Geh-Anweisungen. Neueste Modelle auf konkrete Aufgaben prüfen; keine Sicherheitszusagen aus plausiblen Antworten ableiten.
- Im historischen UAT-Protokoll sind alle zehn Alltagsszenarien ausstehend oder blockiert. Es wurden hier keine alten Tests erneut ausgeführt.
- Wenige klare Aktionen, sofortiges Feedback, verständliche Fehler und reale Geräte-/Screenreader-Abnahme sind wichtige Anforderungen für den Neustart.

Das Vorgehen aus D-11 ist bestätigt. Die konkreten ersten Abläufe werden mit Betroffenen priorisiert; die Beispiele aus der Analyse sind noch keine ausgewählte Funktionsliste. Plattform und Anbieter bleiben offen. Quellen und Grenzen stehen in der [Bestandsaufnahme](agents/codex/legacy-review.md).

## Vor dem Website-Bau zu entscheiden

1. Ergebnisse der drei unabhängigen Analysen integrieren; Abweichungen und abgelehnte Vorschläge begründen. Die Claude-Code-Vorschläge (u. a. Art. 9 DSGVO, GitHub-Bearbeitungsverlauf und Prompt-Probe) sowie JCodes Vorschläge (u. a. Ablaufstudie mit 3 bis 5 Betroffenen, statische Website ohne Backend und manueller Interviewweg) werden in dieser späteren Synthese bewertet; sie sind noch nicht beschlossen. Reihenfolge und Umfang der nächsten Schritte bleiben bis dahin offen.
2. Hosting, Domain, Backend und Betrieb des moderierten Einreichungswegs auswählen.
3. Verantwortliche Moderation, private Aufbewahrung/Löschung, Kontakt- und Rücknahmekanal sowie rechtliche Texte klären.
4. Open-Source-/Dokumentationslizenz und Bedingungen für freiwillige öffentliche Beiträge bestimmen.
5. Technische Anforderungen der barrierefreien Teilnahme testen; Einladung weiterer Betroffener planen.
6. Erst danach den Website-Implementierungsauftrag freigeben. Keine fiktive Anmeldemöglichkeit veröffentlichen.

## Nächste Schritte

Als Nächstes startet der Projektverantwortliche OMP in `.worktrees/omp` mit dem [vorhandenen Startprompt](agents/codex/start-prompts.md#omp--oh-my-pi). OMP verwendet denselben Baseline-Tag und liest keine fremden Zweitanalysen vor Abschluss seiner eigenen Erstbewertung. Anschließend bewertet der Koordinator die Vorschläge aller Berichte in einer gemeinsamen Synthese; erst angenommene Empfehlungen werden in gemeinsame Spezifikationen und Entscheidungen übernommen.

Der Baseline-Tag wird nicht verschoben. Spätere Prüfprotokolle oder Statusänderungen auf `main` ändern die Ausgangsversion der Analysen nicht. Eine App-Plattform oder ein KI-Anbieter wird in dieser Lieferung nicht ausgewählt. `private/`, Umgebungsdateien und die alte Git-Historie bleiben ausgeschlossen.
