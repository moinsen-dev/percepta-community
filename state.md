# Percepta — Projektstand

Stand: 2026-10-20. Verantwortlicher Harness für die erste Lieferung: Codex.

## Aktuelle Phase

Dokumentationsgrundlage lokal erstellt und geprüft. Der Projektverantwortliche hat das lokale Git-Repository und das öffentliche Repository `moinsen-dev/percepta-community` angelegt. Branch `main` und Remote `origin` sind lokal bestätigt; die öffentliche Sichtbarkeit ist über den GitHub-Connector geprüft. Der erste Commit und die Veröffentlichung der Vergleichsbaseline werden vorbereitet.

Die vom Projektverantwortlichen bereitgestellte alte Percepta-Kopie ist inzwischen statisch analysiert. Untersucht wurde der jüngste lokal enthaltene Branch `codex/reboot-0.2-week1` am Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5`. Die lokale Kopie löst den bisherigen Analyseblocker; daraus folgt kein bestätigter Veröffentlichungszugriff.

Keine Website, App, Datenbank, Kontaktregistrierung oder Interview-Einreichungsstelle implementiert. Keine Nutzerstudie oder Modellmessung durchgeführt.

## Übergabestatus: Codex → Claude Code

**Codex' erster Dokumentations- und Analysedurchlauf ist inhaltlich abgeschlossen.** Vorliegen: gemeinsame Arbeitsregeln, Vision und Recherche, Website-/Interview-Spezifikation, DE/EN-Interview-Prompts, Codex-Erstanalyse, Altprojekt-Bestandsaufnahme, Validierung und Protokoll. Die angenommene Vorgehensempfehlung ist als D-11 festgehalten.

**Die versionierte Übergabe wird vorbereitet.** Das neue Git-Repository ist initialisiert und mit dem öffentlichen Ziel verbunden. Ausgangs-Commit und Tag `research-baseline-v0.1` werden vor dem Start der weiteren Harnesses erstellt und geprüft. Die separate alte Referenzkopie bleibt ausgeschlossen.

Als nächster Harness ist **Claude Code** vorgesehen, mit [eigenem Analyseauftrag](agents/claude-code/assignment.md). Vor dessen Start muss der Koordinator die geprüfte Grundlage einschließlich D-11 versionieren und den unveränderlichen Tag bereitstellen. Die [Startanleitung](Change-Log-Agents.md) beschreibt die anschließende Arbeit im eigenen Checkout/Worktree. JCode und OMP beginnen später vom selben Tag.

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
| Gemeinsame Dokumentation | Lokal erstellt und geprüft | [README](README.md), [AGENTS](AGENTS.md) |
| Codex-Erstanalyse | Inhaltlich abgeschlossen; versionierte Übergabe noch offen | [Analyse](agents/codex/analysis.md), [Validierung](agents/codex/validation.md) |
| Claude Code | Nicht gestartet | [Auftrag](agents/claude-code/assignment.md) |
| JCode | Nicht gestartet | [Auftrag](agents/jcode/assignment.md) |
| OMP | Nicht gestartet | [Auftrag](agents/omp/assignment.md) |
| Repository-Veröffentlichung | Öffentliches Repository angelegt und bestätigt; Dokumente zur Veröffentlichung vorbereitet | `moinsen-dev/percepta-community`, Remote `origin` |
| Vergleichsbaseline | In Vorbereitung; erster Commit und Tag noch ausstehend | Geplanter unveränderlicher Tag `research-baseline-v0.1` |
| Astro-Website | Nur spezifiziert | [Brief](docs/website-brief.md) |
| Interview-Einreichung | Nur spezifiziert; keine aktiven Endpunkte | [Spezifikation](docs/interview-spec.md) |
| Modelle und Alltagshilfe | Bisher Schwerpunkt Navigationsrecherche; weitere Bereiche als Forschungsaufträge ergänzt | [Recherche](docs/research.md) |
| Früheres Percepta klonen und analysieren | Kopie vom Projektverantwortlichen bereitgestellt; statische Bestandsaufnahme abgeschlossen | [Branch-/Commitnachweis und Befunde](agents/codex/legacy-review.md); keine Laufzeitprüfung |

## Zugriffsgrenzen und frühere Quellen

Das frühere Repository `moinsen-dev/percepta` liegt nun getrennt unter `private/legacy-percepta/`. Der Arbeitsbaum bleibt unverändert auf `develop`; der fünf Commits neuere Reboot-Stand wurde direkt aus Git gelesen. Ein erneuter Abgleich mit dem Remote fand nicht statt.

Eine frühere Interview-Zusammenfassung wurde lokal ausgewertet. Nur verallgemeinerte Bedürfnisse fließen in die Bestandsaufnahme ein; keine Namen, Rohinhalte oder persönlichen Zitate. Ihre Entstehung und Freigabe zur erneuten Veröffentlichung sind nicht bestätigt. Die Quelle ist keine repräsentative Bedarfsstudie.

Vor Bereitstellung der Kopie scheiterten Connector-Zugriffe mit 404 und CLI-/Git-Zugriffe an Netzwerk-/DNS-Fehlern. Auch nach erneuter `gh`-Authentifizierung war die Gültigkeit der Anmeldung wegen fehlender DNS-Auflösung nicht verlässlich prüfbar. Ein Metadatenabruf außerhalb der Sandbox wurde automatisch abgelehnt. Diese bisherigen Befunde sind im [Codex-Protokoll](agents/codex/Change-Log-Agents.md) dokumentiert; keine Zugangsdaten wurden ausgelesen oder verändert.

Die früheren Initialisierungsversuche scheiterten am `.git`-Schreibschutz. Nach der manuellen Einrichtung durch den Projektverantwortlichen funktionieren lokale Statusabfrage und Staging. `origin` zeigt auf `https://github.com/moinsen-dev/percepta-community.git`; der Connector bestätigt das öffentliche Repository und Schreibberechtigungen.

Die CLI erreicht die GitHub-API in dieser Sitzung weiterhin nicht; `git ls-remote` scheitert an DNS. Diese Netzwerkgrenze ist von der inzwischen erfolgreichen Repository-Erstellung zu unterscheiden. Der Veröffentlichungsweg wird am tatsächlichen Push-/Remote-Ergebnis geprüft. Frühere Fehlschläge bleiben im Protokoll erhalten.

## Erkenntnisse aus dem Altprojekt

- Der Hauptablauf kombinierte Kamerabild, aktuelle Frage und Cloud-Antwort; offline waren Texterkennung und Barcodes angebunden. Realtime-/lokale Modellmodule belegen keinen gleichwertigen Gesamtpfad.
- Einkaufs-, Lese- und Bedienbedürfnisse waren bereits vorhanden. Unterstützung bei menschlichen Gesprächen bleibt ein gesonderter Forschungsauftrag.
- Geometrie- und Konfidenzheuristiken sind keine belastbare Grundlage für Geh-Anweisungen. Neueste Modelle auf konkrete Aufgaben prüfen; keine Sicherheitszusagen aus plausiblen Antworten ableiten.
- Im historischen UAT-Protokoll sind alle zehn Alltagsszenarien ausstehend oder blockiert. Es wurden hier keine alten Tests erneut ausgeführt.
- Wenige klare Aktionen, sofortiges Feedback, verständliche Fehler und reale Geräte-/Screenreader-Abnahme sind wichtige Anforderungen für den Neustart.

Das Vorgehen aus D-11 ist bestätigt. Die konkreten ersten Abläufe werden mit Betroffenen priorisiert; die Beispiele aus der Analyse sind noch keine ausgewählte Funktionsliste. Plattform und Anbieter bleiben offen. Quellen und Grenzen stehen in der [Bestandsaufnahme](agents/codex/legacy-review.md).

## Vor dem Website-Bau zu entscheiden

1. Ergebnisse der drei unabhängigen Analysen integrieren; Abweichungen und abgelehnte Vorschläge begründen.
2. Hosting, Domain, Backend und Betrieb des moderierten Einreichungswegs auswählen.
3. Verantwortliche Moderation, private Aufbewahrung/Löschung, Kontakt- und Rücknahmekanal sowie rechtliche Texte klären.
4. Open-Source-/Dokumentationslizenz und Bedingungen für freiwillige öffentliche Beiträge bestimmen.
5. Technische Anforderungen der barrierefreien Teilnahme testen; Einladung weiterer Betroffener planen.
6. Erst danach den Website-Implementierungsauftrag freigeben. Keine fiktive Anmeldemöglichkeit veröffentlichen.

## Nächste Schritte

Die geprüften 25 Dokumentationsdateien committen und auf `origin` veröffentlichen. `private/`, Umgebungsdateien und die alte Git-Historie bleiben ausgeschlossen. Den tatsächlichen Remote-Stand prüfen, den Tag `research-baseline-v0.1` auf die geprüfte Ausgangsversion setzen und ebenfalls veröffentlichen; nicht später verschieben.

Anschließend den Status mit den tatsächlichen Commit-/Tag-Nachweisen aktualisieren. Danach die drei Harnesses anhand der [Startanleitung](Change-Log-Agents.md) unabhängig analysieren lassen. Eine App-Plattform oder ein KI-Anbieter wird in dieser Lieferung nicht ausgewählt.

Die abgeschlossene Altprojekt-Bestandsaufnahme in die gemeinsame Ausgangsversion aufnehmen. Den noch nicht erstellten Baseline-Tag erst auf die aktualisierte, geprüfte Grundlage setzen; später hinzukommende Erkenntnisse über gesonderte, versionierte Nachträge einbringen. Die private Referenzkopie bleibt ausgeschlossen.
