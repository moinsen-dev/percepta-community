# OMP / Oh My Pi — Änderungsprotokoll

Status: **Noch kein Lauf dieses Harnesses.** Vorlage von Codex, erstellt 2026-10-20.

## Format für tatsächliche Einträge

Datum; tatsächlicher Harness und Modell/Version; Ausgangs-Commit; Auftrag; geänderte Dateien; Erkenntnisse; Vorschläge getrennt von Entscheidungen; Quellen und Abrufdatum; ausgeführte/nicht ausgeführte Prüfungen; Hindernisse; nächster Schritt.

Der ausführende Harness hängt seine Einträge hier an. Die Vorlage ist kein Test- oder Tätigkeitsnachweis.

---

## 2026-10-20 — OMP (Oh My Pi), erste unabhängige Zweitanalyse

- **Datum:** 2026-10-20.
- **Tatsächlicher Harness:** OMP (Oh My Pi).
- **Modell/Version:** `deepseek/deepseek-v4-pro` laut Laufzeitumgebung; genaue Build-/Versionsnummer unbekannt und als unbekannt gekennzeichnet (nicht erschlossen).
- **Ausgangs-Commit:** `fe68acae4142baca25408124f85e353fb9786674` (= Tag `research-baseline-v0.1`; lokal und auf `origin` identisch geprüft). Branch `analysis/omp`, Worktree `.worktrees/omp`, Arbeitsbaum beim Start sauber.
- **Auftrag:** Unabhängige Bewertung der sechs Themen (Machbarkeit, Nutzerbedürfnisse, Barrierefreiheit, Architektur, Veröffentlichung/Datenschutz, nächster Schritt) unter Beachtung von D-11; ausschließlich in `agents/omp/` schreiben.
- **Geänderte Dateien:** `agents/omp/analysis.md` (Vorlage ersetzt), `agents/omp/Change-Log-Agents.md` (dieser Eintrag).

**Erkenntnisse (Evidenz):**
- Gemini Robotics ER 2 Streaming: JPEG ≤ 1 Bild/s, Ausgabe nur Text, Heartbeat-Prompt erforderlich, TTS extern — Roboter-Orchestrierung, kein Fußgänger-Nachweis (S-01). ER 1.6 veraltet, ER 2 Preview (S-02).
- EN 301 549 V4.1.1 (2026-09) übernimmt WCAG 2.2; verbindliche Rechtsreferenz bleibt V3.2.1 = WCAG 2.1 AA bis Amtsblatt-Zitat (S-03).
- Abandonment als Hauptfehlermodus; nur 29 % von 140 ETA-Studien mit Betroffenen; drei Gegenmittel (partizipativ, integriert, sozial) (S-04).
- 13 BVI-Teilnehmende bevorzugten deterministische DL-Ausgabe vor generativer KI beim Objektfinden (niedrigere Belastung, präziser) (S-05).
- Sehfähigkeitsangaben = Gesundheitsdaten nach Art. 9 DSGVO; öffentlicher Issue-Weg dafür ungeeignet (S-07).

**Vorschläge (noch keine Entscheidungen):**
- Explizite Zweistufigkeit: Stufe 1 (Einkaufen/Fragen/Interaktion) zuerst und ohne Sicherheitsfreigabe erprobbar; Navigation als gesperrter Forschungspfad.
- Deterministische vs. generative Ausgabe als eigene Vergleichsachse in späteren Experimenten.
- Konformität nur gegen WCAG 2.1 AA behaupten, WCAG 2.2 AA als Ziel formulieren.
- Art.-9-Bezug und Default „keine Sehfähigkeitsdaten erheben“ in Datenschutztexten/Spezifikation ergänzen.
- Nächster Schritt: Entscheidungssynthese durch Koordinator → minimaler Beteiligungsweg → Interview-Pilot mit 2–3 Betroffenen, mit den im Bericht genannten Abnahmekriterien.

**Widerspruch zu Codex (begründet):** Zweistufigkeit statt bloß „getrennte Nachweise“; empirische Nutzerpräferenz deterministisch > generativ als eigene Achse; WCAG-2.2-Rechtsstand-Präzisierung; Art.-9-DSGVO-Schärfung. Übereinstimmung: D-02/D-11-Reihenfolge, keine vorzeitige Plattformwahl, statische Astro-Seite + separater Einreichungsweg, getrennte Veröffentlichungs-/Namensnennungs-Freigabe.

**Quellen mit Abrufdatum (alle 2026-10-20):** S-01 [Robotics Streaming](https://ai.google.dev/gemini-api/docs/robotics-streaming), S-02 [Changelog](https://ai.google.dev/gemini-api/docs/changelog), S-03 [AccessibleEU EN 301 549](https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en), S-04 [Frontiers Digital Health](https://pmc.ncbi.nlm.nih.gov/articles/PMC12832816/), S-05 [Scientific Reports](https://www.nature.com/articles/s41598-026-37578-9), S-06 [OpenAI Realtime](https://developers.openai.com/api/docs/guides/realtime), S-07 [Art. 9 DSGVO](https://gdpr.eu/article-9-processing-special-categories-of-personal-data-prohibited/).

**Eigene Annahmen:** Zuordnung „Sehfähigkeit = Gesundheitsdaten“ nach Art. 9 DSGVO; Architekturform (statische Seite + ein Serverless-Endpunkt + private Ablage) ist Hypothese; ETA-Präferenz (n=13) ist Hinweis, keine Verallgemeinerung.

**Ausgeführte Prüfungen:** Baseline-Tag/-Commit lokal und auf `origin` identisch (`fe68acae…`); Worktree-HEAD = Baseline; Arbeitsbaum sauber; Primärquellen inhaltlich gelesen (nicht nur Erreichbarkeit). Relative Dateilinks und `git diff --check` werden vor dem Commit ausgeführt (Ergebnis im Commit-/PR-Abschluss dokumentiert).

**Nicht ausgeführte Prüfungen:** Keine Modelle/APIs ausgeführt; keine Website/App gebaut; keine Barrierefreiheits-/Screenreader-Tests; keine Interviews/Kontakte; Claude-Code- und JCode-Berichte nicht gelesen.

**Hindernisse:** Keine. (Netz-/DNS-Zugriff war in dieser Sitzung für Web-Quellen nutzbar.)

**Nächster Schritt:** Prüfskript (Links, `git diff --check`) ausführen, nur `agents/omp/` committen, Branch pushen, PR gegen `main` erstellen — ohne Merge.
