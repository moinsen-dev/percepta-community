# JCode: Änderungsprotokoll

Status: Lauf 1 abgeschlossen am 2026-10-20. Die ursprüngliche Vorlage von Codex bleibt als Formatreferenz erhalten.

## Format für tatsächliche Einträge

Datum; tatsächlicher Harness und Modell/Version; Ausgangs-Commit; Auftrag; geänderte Dateien; Erkenntnisse; Vorschläge getrennt von Entscheidungen; Quellen und Abrufdatum; ausgeführte/nicht ausgeführte Prüfungen; Hindernisse; nächster Schritt.

Der ausführende Harness hängt seine Einträge hier an. Die Vorlage ist kein Test- oder Tätigkeitsnachweis.

## Lauf 1: Unabhängige JCode-Zweitanalyse

**Datum:** 2026-10-20.

**Harness und Version:** JCode `v0.99.0` (Commit `774613c90`). Provider-Route laut Sitzung: `openai`. Die exakte Modell-ID wurde im Sitzungskontext nicht ausgewiesen und ist daher unbekannt. Keine nachträgliche Behauptung einer Modellversion.

**Ausgangs-Commit:** `fe68acae4142baca25408124f85e353fb9786674`, Tag `research-baseline-v0.1`, Branch `analysis/jcode`, Worktree `.worktrees/jcode`. Arbeitsbaum beim Start sauber.

**Auftrag:** Unabhängige Zweitanalyse gemäß [assignment.md](assignment.md). Bewertung von technischer Machbarkeit, Nutzerbedürfnissen, Barrierefreiheit, Architektur, Veröffentlichung/Datenschutz und kleinstem nächstem Schritt. Keine Website oder App implementieren, keine gemeinsamen Dateien ändern, keine fremden Zweitanalysen vor Abschluss der eigenen Erstbewertung lesen.

**Geänderte Dateien:**

- [analysis.md](analysis.md): Vorlage ersetzt durch die eigenständige Bewertung.
- [Change-Log-Agents.md](Change-Log-Agents.md): dieser Eintrag.

Keine Änderungen an `AGENTS.md`, `README.md`, `state.md`, `docs/`, anderen Harness-Ordnern oder gemeinsamen Dateien.

**Vorgehen:**

1. Worktree, Branch, Arbeitsbaum und Baseline-Commit geprüft.
2. Baseline-Dokumente, beide Interview-Prompts, Codex-Erstanalyse, Codex-Validierung und Altprojekt-Bestandsaufnahme gelesen.
3. Primärquellen mit Abrufdatum 2026-10-20 recherchiert und gelesen, darunter WCAG 2.2, W3C WAI, Google Gemini Robotics, NVIDIA Cosmos, Qwen3.5-4B, Mobilio in *Nature Biomedical Engineering*, NavSight, NavAble, eine ACL-Arbeit zu leichten VLMs, Apple Magnifier und ARKit, DBSV, GitHub Docs, DSGVO Art. 9, BFSG § 1 und Astro i18n.
4. Befunde nach Auswirkung geordnet, je Bereich Problem, Empfehlung, Alternative, Evidenz/Annahme und Prüfung dokumentiert.
5. Widersprüche und Korrekturen zur Codex-Grundlage ausdrücklich benannt.
6. Relative Links, `git diff --check`, Leerzeichen und Änderungsumfang geprüft.

**Zentrale Erkenntnisse:**

- Das größte unmittelbare Risiko ist die Veröffentlichung, nicht die Modelltechnik. Blindheit oder Sehbehinderung ist ein Gesundheitsdatum nach Art. 9 DSGVO. Ein öffentliches GitHub-Issue ist öffentlich zurechenbar, nicht anonym. Löschen beseitigt fremde Kopien nicht.
- Die vier Bereiche sind gleichberechtigt erklärt, aber nicht gleich belegt. Für Navigation liegt mit Mobilio eine peer-reviewed Studie vor. Für Einkaufen, Fragen an die App und menschliche Interaktion fehlen aufgabenspezifische Nachweise.
- Mobilio zeigt Machbarkeit unter Begleitung, aber keine sichere Straßenüberquerung. Die Studie berichtet 13 ± 3 Prozent weniger Zeit und 41 ± 5 Prozent weniger Umgebungskontakte auf einem community path, aber eine höhere Bewältigungszeit im Hindernisparcours sowie Fehlklassifikationen bei Gehweg/Straße, beschädigten Zebrastreifen und Schnee.
- Gemini Robotics ER 2 Streaming verarbeitet höchstens 1 JPEG pro Sekunde. Bei 1,0 bis 1,4 m/s liegen zwischen zwei Bildern 1,0 bis 1,4 m. Eine kontinuierliche Bewegungsführung ist damit in dieser Form nicht verantwortbar.
- Apples Magnifier Detection Mode erkennt Türen, Personen und Möbel und meldet Annäherung über Ton, Sprache oder Haptik. Eine eigene Funktion, die nur diese Basisinformation liefert, muss sich daran messen lassen.
- VLM-Nutzen ist nicht durch Herstellerbenchmarks belegt. Die BLV-Studien sind klein, teils nicht peer-reviewed. Die frühere Fassung arXiv 2502.14883 wurde zurückgezogen und durch arXiv 2510.00766 ersetzt.
- Die Interview-Prompts sind redaktionell sorgfältig, aber modellabhängig. Ein deterministischer manueller Weg mit denselben Fragen ist Teil der Barrierefreiheit, nicht optional.
- Die einfachste tragfähige Architektur ist eine statische Astro-Website ohne Backend. Der moderierte Einreichungsweg ist ein Betriebs- und Datenschutzprojekt und darf erst nach Betreiber-, Rechts-, Aufbewahrungs- und Löschentscheidungen aktiviert werden.
- Der kleinste sinnvolle nächste Schritt ist eine moderierte Ablaufstudie mit 3 bis 5 Betroffenen, nicht die App. Die statische Statusseite kann parallel oder danach entstehen.

**Vorschläge, nicht Entscheidungen:**

- Ablaufstudie mit 3 bis 5 Betroffenen und den in [analysis.md](analysis.md) genannten Abnahmekriterien.
- Statische DE/EN-Website ohne Backend, Konten, Cookies, Analytics oder Formulare.
- Vier getrennte Einwilligungen: Teilnahme, Veröffentlichung, Namensnennung, Website-Geschichte.
- Moderierter Weg mit privater EU-Speicherung, getrennten Kontaktdaten, Idempotenz, Löschverfahren und Zwei-Personen-Prinzip bei Veröffentlichung.
- Ersetzung der Formulierung „nur pseudonym“ durch „öffentlich zurechenbar, nicht anonym“.
- Deterministischer manueller Interviewweg zusätzlich zum KI-Chat.
- Keine kontinuierliche Bewegungsführung in der ersten Phase. Keine Straßenüberquerung. Keine Sicherheitszusage aus einer Demo.

Diese Vorschläge sind keine angenommenen Entscheidungen. Die Integration in gemeinsame Dateien und `state.md` erfolgt durch den Koordinator.

**Quellen mit Abrufdatum:** Alle am 2026-10-20 abgerufen. Vollständige Liste mit J-01 bis J-23 in [analysis.md](analysis.md#quellen-mit-abrufdatum). Wichtigste Quellen: WCAG 2.2, W3C WAI Involving Users, Gemini Robotics ER 2 und Streaming, NVIDIA Cosmos Reason 2 und Cosmos 3, Qwen3.5-4B, Liu und Slade 2026 (Nature Biomedical Engineering), NavSight, NavAble, Baghel et al. 2025 (ACL), Kim et al. 2026 (arXiv), Apple Detection Mode und ARKit, DBSV, GitHub Docs, DSGVO Art. 9, BFSG § 1, Astro i18n.

**Ausgeführte Prüfungen:**

- `git rev-parse HEAD` ergab `fe68acae4142baca25408124f85e353fb9786674`, `git tag --points-at HEAD` ergab `research-baseline-v0.1`, Branch `analysis/jcode`, Arbeitsbaum sauber.
- Relative Markdown-Dateilinks: 24 Markdown-Dateien geprüft, alle relativen Ziele vorhanden. Keine externen URLs oder Überschriftenanker durch dieses Skript geprüft.
- `git diff --check`: Exitcode 0, keine Befunde.
- Leerzeichen am Zeilenende in den geänderten Dateien: keine Befunde.
- URL-Erreichbarkeit: 23 von 24 geprüften URLs lieferten HTTP 200. EUR-Lex lieferte für den HTML-Volltext HTTP 202 ohne Inhalt. Art. 9 DSGVO wurde deshalb zusätzlich über die Textspiegelung `dsgvo-gesetz.de` gelesen. Die offizielle Fundstelle bleibt EUR-Lex.
- Änderungsumfang: `git status --short` zeigte ausschließlich `agents/jcode/analysis.md` vor dem Protokolleintrag. Nach dem Protokolleintrag kommen nur `agents/jcode/Change-Log-Agents.md` und der Commit selbst hinzu.

**Nicht ausgeführte Prüfungen:**

- Keine Website oder App gebaut, kein Astro-Projekt angelegt, kein Build ausgeführt.
- Keine automatisierten Accessibility-Tools, keine Screenreader-, Tastatur- oder Zoomtests an einer noch nicht existierenden Seite.
- Keine Modell-API aufgerufen, keine Latenz gemessen, keine Benchmark-Werte nachgerechnet.
- Keine Nutzerstudie, keine Interviews, keine Kontaktaufnahme.
- Keine rechtliche Prüfung. Die Einordnung zu DSGVO und BFSG ist keine Rechtsberatung.
- Keine Prüfung der Barrierefreiheit externer KI-Chat-Anbieter.
- Keine Prüfung, ob die genannten Studien auf deutsche Verhältnisse übertragbar sind.

**Hindernisse und Einschränkungen:**

- Die exakte Modell-ID des JCode-Laufs war nicht auslesbar.
- EUR-Lex war für den HTML-Volltext nicht abrufbar. Die DSGVO-Wortlaute wurden über eine Textspiegelung gelesen und die offizielle Fundstelle zusätzlich angegeben.
- Einige Suchmaschinen lieferten Anti-Bot-Seiten. Die Recherche stützte sich daher auf direkt abrufbare Primärquellen und gezielte URL-Prüfungen.
- Die Baseline ist eingefroren. Aussagen über den heutigen Stand von `main`, über Claude Code oder OMP sind nicht Teil dieser Analyse.
- Die Studie von Liu und Slade ist teilweise hinter einer Bezahlschranke. Gelesen wurden Abstract, Extended Data und die Preprint-Fassung. Die vollständige Methodik wurde nicht im Detail geprüft.

**Nächster sinnvoller Schritt:**

Synthese der drei unabhängigen Analysen durch den Koordinator. Danach die Ablaufstudie mit 3 bis 5 Betroffenen gemäß Abschnitt 6.2 der Analyse. Die statische Website folgt als eigener Implementierungsauftrag ohne Backend. Der moderierte Einreichungsweg wird erst nach den offenen Betriebs- und Rechtsentscheidungen aktiviert.

## Lauf 1a: Nachprüfung nach dem ersten Commit

**Datum:** 2026-10-20.

**Anlass:** Zusätzliche Validierung der abgeschlossenen Arbeit, ohne den Analyseumfang zu erweitern. Keine neuen Nutzerdaten, keine Modellaufrufe, keine Website oder App.

**Ausgangsstand:** Commit `16f852c282d13c8c9d6cbf47d063cc7dc496455c`, Branch `analysis/jcode`, PR #2 gegen `main`.

**Geänderte Dateien in dieser Nachprüfung:**

- [analysis.md](analysis.md): Präzisierung der Mobilio-Einschränkung. Statt „kein öffentlicher Straßenverkehr, keine Straßenüberquerung“ steht nun, dass die Experimente auf einem community path und einem Hindernisparcours stattfanden und eine Validierung im öffentlichen Straßenverkehr oder für Straßenüberquerungen nicht berichtet wird. Das ist durch die Quelle gedeckt und vermeidet eine Überinterpretation.
- [Change-Log-Agents.md](Change-Log-Agents.md): dieser Nachprüfungseintrag und die präzisere Bezeichnung „geprüfte URLs“ statt „geprüfte Quellen“.

**Ergebnis der Nachprüfung:**

- Die sechs geforderten Themen sind als eigene Abschnitte vorhanden: technische Machbarkeit, Nutzerbedürfnisse, Barrierefreiheit, Architektur, Veröffentlichung/Datenschutz, kleinster nächster Schritt.
- Das Empfehlungsregister enthält acht Empfehlungen mit Problem, Empfehlung, Alternative/Nachteil, Evidenz oder Annahme und nächstem Test.
- Die Überschriftenhierarchie springt nicht über Ebenen. Keine Platzhalter wie TODO oder TBD. Das einzige Vorkommen von „ausstehend“ beschreibt den Baseline-Status der fremden Analysen, nicht einen offenen eigenen Abschnitt.
- Keine absoluten lokalen Pfade, keine E-Mail-Adressen, keine Telefonnummern und keine Namen in den beiden geänderten Dateien.
- 23 Quelleneinträge J-01 bis J-23 und 24 eindeutige URLs im Quellenregister.
- 43 Stichproben zu Zahlen, Daten, Kriterien und Wortlauten aus den Primärquellen wurden nach HTML-Normalisierung bestätigt. Fünf Rohvergleiche scheiterten zunächst an HTML-Entities oder eingefügten Leerzeichen, nicht am Inhalt:
  - Natur-Studie: `13 ± 3%`, `41 ± 5%` und `n = 14` sind im bereinigten Text vorhanden.
  - Gemini-Streaming: `JPEG <= 1FPS` ist als HTML-Entity `JPEG &lt;= 1FPS` vorhanden.
  - BFSG: „Dienstleistungen im elektronischen Geschäftsverkehr“ ist als HTML-Entity im Fließtext vorhanden.
- Die Aussage „higher hallway completion time“ ist in den Extended Data der Nature-Studie vorhanden.
- Die Aussage, dass eine Straßenüberquerung nicht berichtet wird, ist eine vorsichtige Formulierung. Die Studie untersucht einen community path und einen Hindernisparcours. Eine darüber hinausgehende Validierung wird in den gelesenen Teilen nicht berichtet.
- Alle 24 URLs wurden erneut geprüft: 23 lieferten HTTP 200, EUR-Lex HTTP 202 ohne Inhalt. Die DSGVO-Wortlaute wurden weiterhin über die Textspiegelung gelesen und die offizielle Fundstelle angegeben.
- `git diff --check fe68acae4142baca25408124f85e353fb9786674..HEAD` vor dieser Nachprüfung: Exitcode 0.
- Der erste Commit änderte ausschließlich `agents/jcode/analysis.md` und `agents/jcode/Change-Log-Agents.md`.
- Der Remote-Tag `research-baseline-v0.1` zeigt weiterhin auf `fe68acae4142baca25408124f85e353fb9786674`. Der Remote-Branch `analysis/jcode` zeigt auf den lokalen Analyse-Commit. PR #2 ist offen, gegen `main` gerichtet und als mergeable gemeldet.
- Die PR-Dateiliste enthält ausschließlich die beiden Dateien im eigenen Ordner.

**Nicht bestätigt oder weiterhin offen:**

- Die exakte Modell-ID des JCode-Laufs bleibt unbekannt.
- Die vollständige Methodik der Nature-Studie ist hinter einer Bezahlschranke und wurde nicht im Detail geprüft. Bestätigt sind Abstract, Extended Data und die Preprint-Fassung.
- Die Übertragbarkeit der Studien auf deutsche Verhältnisse ist nicht geprüft.
- Es gab keine Rechtsprüfung, keine Barrierefreiheitsprüfung einer realen Website und keine Nutzerstudie.
- Die Behauptung, dass keine fremden Zweitanalysen gelesen wurden, ist eine Prozessangabe und kein technischer Nachweis.

**Nächster Schritt:** Nachprüfung committen und den bestehenden PR #2 aktualisieren. Kein Merge.
