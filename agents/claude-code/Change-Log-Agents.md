# Claude Code — Änderungsprotokoll

Status: **Noch kein Lauf dieses Harnesses.** Vorlage von Codex, erstellt 2026-10-20.

## Format für tatsächliche Einträge

Datum; tatsächlicher Harness und Modell/Version; Ausgangs-Commit; Auftrag; geänderte Dateien; Erkenntnisse; Vorschläge getrennt von Entscheidungen; Quellen und Abrufdatum; ausgeführte/nicht ausgeführte Prüfungen; Hindernisse; nächster Schritt.

Der ausführende Harness hängt seine Einträge hier an. Die Vorlage ist kein Test- oder Tätigkeitsnachweis.

## 2026-10-20 — Unabhängige Zweitanalyse

- **Tatsächlicher Harness / Modell:** Claude Code 2.1.304 / Claude Opus 5.5 (`claude-opus-5-5`); genauer Build unbekannt.
- **Ausgangs-Commit:** `fe68acae4142baca25408124f85e353fb9786674`. Tag `research-baseline-v0.1` lokal und per `git ls-remote --tags origin` auf diesen Commit aufgelöst; leichtgewichtiger Tag. Eigener Worktree, Branch `analysis/claude-code` vom Tag. `main` (`bbd874d`) nicht als Ausgangsstand verwendet.
- **Auftrag:** [Analyseauftrag](assignment.md) — sechs Themen, unabhängige Bewertung der Codex-Grundlage.
- **Geändert:** [analysis.md](analysis.md) (Vorlage ersetzt), dieses Protokoll (Eintrag angehängt). Keine gemeinsamen Dateien, keine anderen Harness-Ordner.
- **Gelesen:** `AGENTS.md`, `README.md`, `state.md`, `Change-Log-Agents.md`, alle `docs/*.md`, alle Codex-Dateien. Nicht gelesen: JCode-/OMP-Ordner (unabhängige Erstbewertung) und die private Altprojekt-Kopie.
- **Erkenntnisse (Auswahl):** Gesundheitsdaten nach Art. 9 DSGVO nicht adressiert; GitHub-Bearbeitungsverlauf öffentlich und Issue-Löschung auf Admins beschränkt; Prompt delegiert Statusprüfung und Issue-Anlage an eine fremde KI und regelt Fotos nicht; Anwendungsfall-Katalog navigationslastig; Bestätigung von R-02/R-03 aus aktueller Google-Dokumentation.
- **Vorschläge (keine Entscheidungen):** Risikoklassen R0–R3 für die Priorisierung; Prompt kürzen und auf Entwurfserstellung begrenzen; Website v0 statisch ohne Formular, erste Moderation über ein Projektpostfach; Prompt-Probe mit fiktiven Personas und Screenreadern als kleinster nächster Schritt; annotierte Tags für künftige Baselines. Liste vorgeschlagener Änderungen an gemeinsamen Dateien in der Analyse.
- **Quellen (abgerufen 2026-10-20):** C-01 bis C-15 im Quellenregister der Analyse, mit P/H/A/O-Kennzeichnung.
- **Nicht erfolgreiche Abrufe:** EUR-Lex (zwei URLs, leerer Inhalt → DSGVO nur über Sekundärquelle); VizWiz-PDF (zu groß → nur Abstract); Apple-Lupe-Seite (nur Navigation); GitHub-Benachrichtigungsdoku (eine URL 404, die andere ohne Aussage zu E-Mail-Inhalten); offizielle Doku zu GitHub-Schreibzugriff externer Chat-Apps nicht gefunden.
- **Ausgeführte Prüfungen:** Tag-Auflösung lokal und remote; relative Dateilinks mit dem Skript aus der README; Abschnittsanker der eigenen Dateien mit einem zusätzlichen Skript; `git diff --check research-baseline-v0.1`; `git diff --name-only research-baseline-v0.1` (nur eigener Ordner); Suche nach absoluten lokalen Pfaden. Ergebnisse im nachfolgenden Abschnitt.
- **Nicht ausgeführt:** Modellaufrufe, Prompt-Läufe in fremden Chat-Apps, Screenreader- oder Nutzertests, Rechtsprüfung, Testrepo-Prüfung zu GitHub-Bearbeitungsverlauf, Website- oder App-Implementierung. Keine Personen kontaktiert.
- **Nächster Schritt:** PR zur Integration durch den Koordinator; danach Prompt-Probe (Vorschlag A) und parallele Klärungen (Vorschlag B) laut Analyse.

### Prüfergebnisse

- Relative Dateilinks (README-Skript, erweitert um Anker der eigenen Dateien): 24 Markdown-Dateien, 146 relative Verweise, keine Befunde. Externe URLs nicht automatisch geprüft; sie wurden beim Abruf einzeln geöffnet.
- `git diff --check research-baseline-v0.1`: keine Befunde.
- `git diff --name-only research-baseline-v0.1`: ausschließlich `agents/claude-code/analysis.md` und `agents/claude-code/Change-Log-Agents.md`.
- Keine absoluten lokalen Pfade, Namen aus früheren Interviews oder Kontaktdaten in den eigenen Dateien.
