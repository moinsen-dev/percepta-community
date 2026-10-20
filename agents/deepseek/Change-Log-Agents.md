# DeepSeek — Änderungsprotokoll

Status: **Lauf vom 2026-10-20 abgeschlossen; Erstbewertung und Übergabe vorbereitet.**

## 2026-10-20 — Unabhängige Erstbewertung

- **Datum:** 2026-10-20.
- **Tatsächlicher Harness:** DeepSeek Harness (DSH), Web-Sitzung; CLI-Paket `@deepseek-ai/dsh` in Version `0.2.1-rc.2`; macOS 27.0.1 (Darwin 27.0.0), arm64.
- **Modell / Provider:** `deepseek-flash` laut Laufzeitumgebung; Provider DeepSeek, aus der Modellbezeichnung abgeleitet; exakte Modell-/Build-ID unbekannt. „DeepSeek“ ist die Arbeitsbezeichnung, kein Nachweis eines bestimmten Programms oder Modells.
- **Fachliche Baseline:** `research-baseline-v0.1` → `fe68acae4142baca25408124f85e353fb9786674`; lokal und auf `origin` geprüft.
- **Tatsächlicher Ausgangs-Commit:** `b506a180412a2e7c38bd0fce357aa247a716ad4c`; einziger Eltern-Commit ist die Baseline; der Diff ergänzt ausschließlich drei Dateien in `agents/deepseek/`.
- **Branch / Arbeitsbereich:** `analysis/deepseek` in `.worktrees/deepseek`; Arbeitsbaum beim Start sauber.
- **Auftrag:** [assignment.md](assignment.md); Startprompt `agents/codex/start-prompts.md#deepseek` (organisatorischer Nachtrag auf `main`, nicht im Baseline-Worktree).
- **Geänderte Dateien:** [analysis.md](analysis.md) (Vorlage ersetzt) und diese Datei (Status und Eintrag). Keine anderen Dateien.
- **Erkenntnisse:** Die dokumentierte Bildrate des räumlichen Gemini-Streaming-Endpunkts (JPEG ≤ 1 FPS) verträgt sich nicht mit einer Cloud-VLM-Schleife für unmittelbare Gehentscheidungen; stehende und gehende Aufgaben müssen getrennt werden. Die Mobilio-Studie stützt einen begrenzten Machbarkeitshinweis, nicht sichere Navigation. GitHub-Issues sind als Veröffentlichungsort für persönliche Berichte dauerhaft und öffentlich; die Website-Veröffentlichung ist die passendere Oberfläche. Behinderung fällt unter Gesundheitsdaten (Erwägungsgrund 35 DSGVO); Art. 9 verlangt eine ausdrückliche, trennbare und widerrufbare Einwilligung. Der Website-Brief verspricht Vorschau/Veröffentlichungsentscheidung ohne Backend. WCAG 2.2 AA ist notwendig, aber ohne manuelle Screenreader-/Tastaturtests und Tests mit Betroffenen nicht hinreichend. Die vier Bereiche sind unterschiedlich reif; die Reihenfolge sollte aus den Interviews folgen.
- **Vorschläge (nicht entschieden):** Trennung in stehende und gehende Aufgaben; persönliche Berichte auf der Website statt als Issue; Einwilligungsschichten E1–E6; Beteiligungs-Pilot mit 3–5 Erwachsenen; keine Analytics; keine BFSG-Konformitätsbehauptung ohne Prüfung; Klärung der Vorschau/Entscheidung im Website-Brief; Ergänzung von Kontakt- und Aufbewahrungseinwilligung im Prompt.
- **Entscheidungen:** Keine. Alle Aussagen sind Empfehlungen an die Koordinator-Synthese; ein Merge ist keine inhaltliche Annahme.
- **Quellen:** Q-01 bis Q-17 in [analysis.md](analysis.md#8-quellen), Abruf 2026-10-20. Q-17 (DBSV E-Scooter) war in dieser Sitzung nicht inhaltlich auslesbar und ist nur als Baseline-Hinweis geführt.
- **Ausgeführte Prüfungen:** Arbeitsbereich, Branch, Arbeitsbaum, Baseline, Eltern-Commit und Diff-Umfang geprüft; relativer Linkcheck mit dem README-Skript ohne Fehler; `git diff --check` ohne Befund; Änderungsumfang auf `agents/deepseek/` begrenzt; Suche nach E-Mail-/Telefonmustern und bekannten Namensangaben ohne Treffer; Analyse auf veraltete Vorlagenmarker geprüft.
- **Nicht ausgeführt:** Keine Website, keine App, kein Build, kein Deployment; keine Modell-API, kein Modellvergleich, keine Latenzmessung; keine Screenreader-, Tastatur-, Zoom- oder Mobiltests (keine Website vorhanden); keine Interviews oder Nutzertests; keine Straßentests; keine Rechtsberatung; keine Prüfung der BFSG-Anwendbarkeit, der Betreiberrolle oder der Hosting-/AI-Chat-Verträge; keine vollständige Auswertung der Mobilio-Studie (nur Abstract).
- **Hindernisse:** Die DBSV-Seite zu E-Scootern war wegen Navigation/Kürzung nicht inhaltlich auslesbar; die BFSG-FAQ-Seite war ebenfalls überwiegend Navigation. Beides ist in der Analyse als Grenze markiert. Es gibt keine Website, an der Barrierefreiheit oder der Teilnahmeweg getestet werden könnte.
- **Nächster Schritt:** Koordinator-Synthese der vier Zweitanalysen; danach Entscheidung über den Beteiligungs-Pilot und die Modell-Gegenprobe. Dieser Branch ist für eine PR gegen `main` vorbereitet und wird nicht selbst gemergt.
