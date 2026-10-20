# Startprompts für JCode und OMP

Vorbereitet von Codex am 2026-10-20. Die folgenden Prompts starten die tatsächlichen Harnesses; sie sind keine ausgeführten Analysen. Der Projektverantwortliche startet JCode und OMP selbst.

Die lokalen Arbeitsbereiche wurden vom Tag `research-baseline-v0.1` angelegt:

| Harness | Verzeichnis relativ zum Hauptcheckout | Branch |
| --- | --- | --- |
| JCode | `.worktrees/jcode` | `analysis/jcode` |
| OMP / Oh My Pi | `.worktrees/omp` | `analysis/omp` |

Beide beginnen am Commit `fe68acae4142baca25408124f85e353fb9786674`. Diese Datei liegt als organisatorischer Nachtrag auf `main`; sie muss nicht in die Analyse-Branches übernommen werden. Der Baseline-Tag wird nicht verschoben. In einem anderen Clone müssen eigene Worktrees angelegt werden; die hier dokumentierten Verzeichnisse sind nur lokal vorbereitet.

## JCode

Öffne den tatsächlichen JCode-Harness im Verzeichnis `.worktrees/jcode` und übergib:

```text
Du führst die unabhängige JCode-Analyse des Projekts Percepta durch.
Dein Arbeitsbereich ist der bereits vorbereitete Worktree .worktrees/jcode
des Hauptcheckouts, Branch analysis/jcode.

Prüfe zunächst Arbeitsverzeichnis, Branch, Arbeitsbaum und Baseline:
research-baseline-v0.1 muss auf
fe68acae4142baca25408124f85e353fb9786674 zeigen.
Bei einem frischen Start muss HEAD diesem Commit entsprechen.
Bei Wiederaufnahme darfst du nur deine eigenen, darauf aufbauenden
Analyse-Commits fortsetzen. Überschreibe keine bestehenden Änderungen.
Erstelle keinen weiteren Worktree und wechsle nicht auf main.

Lies AGENTS.md, README.md, state.md und agents/jcode/assignment.md
sowie die dort genannten Dokumente und beide Interview-Prompts.
Die Statusangaben im eingefrorenen Baseline-Stand können älter sein:
Claude Code läuft inzwischen separat. Lies dessen neue Ergebnisse
und die OMP-Analyse nicht vor Abschluss deiner eigenen Erstbewertung.

Percepta umfasst Einkaufen, Fragenstellen, Interaktion mit Menschen
und Orientierung/Navigation. Prüfe alle sechs Themen deines Auftrags:
Machbarkeit aktueller Vision-/Reasoning-Modelle, Nutzerbedürfnisse,
Barrierefreiheit, einfache Architektur, Veröffentlichung/Datenschutz
und den nächsten sinnvollen Schritt mit überprüfbaren Erfolgskriterien.

Berücksichtige D-11: Wenige vollständige Alltagsabläufe gemeinsam
mit Betroffenen prüfen, bevor die App-Architektur festgelegt wird.
Recherchiere aktuelle Primärquellen mit Abrufdatum. Trenne Evidenz,
Annahmen und Empfehlungen; widersprich Codex, wenn begründet.

Schreibe ausschließlich in agents/jcode/:
Ersetze die Vorlage analysis.md durch deine Bewertung und hänge
tatsächliche Arbeitseinträge an Change-Log-Agents.md an.
Erfasse Datum, Harness, bekannte Modellversion, Ausgangs-Commit,
Befunde, Alternativen, Prüfungen und offene Fragen.

Implementiere noch keine Website oder App, ändere keine gemeinsamen
Dateien, veröffentliche keine persönlichen Rohdaten und kontaktiere
keine Personen. Prüfe relative Dateilinks und git diff --check.
Committe nur deinen Analyseordner auf analysis/jcode und bereite
eine PR gegen main vor; merge sie nicht selbst.

Beginne mit einem kurzen Vorgehen und führe die Analyse anschließend aus.
```

## OMP / Oh My Pi

Öffne den tatsächlichen OMP-Harness im Verzeichnis `.worktrees/omp` und übergib:

```text
Du führst die unabhängige OMP-Analyse (Oh My Pi) des Projekts Percepta durch.
Dein Arbeitsbereich ist der bereits vorbereitete Worktree .worktrees/omp
des Hauptcheckouts, Branch analysis/omp.

Prüfe zunächst Arbeitsverzeichnis, Branch, Arbeitsbaum und Baseline:
research-baseline-v0.1 muss auf
fe68acae4142baca25408124f85e353fb9786674 zeigen.
Bei einem frischen Start muss HEAD diesem Commit entsprechen.
Bei Wiederaufnahme darfst du nur deine eigenen, darauf aufbauenden
Analyse-Commits fortsetzen. Überschreibe keine bestehenden Änderungen.
Erstelle keinen weiteren Worktree und wechsle nicht auf main.

Lies AGENTS.md, README.md, state.md und agents/omp/assignment.md
sowie die dort genannten Dokumente und beide Interview-Prompts.
Die Statusangaben im eingefrorenen Baseline-Stand können älter sein:
Claude Code läuft inzwischen separat. Lies dessen neue Ergebnisse
und die JCode-Analyse nicht vor Abschluss deiner eigenen Erstbewertung.

Percepta umfasst Einkaufen, Fragenstellen, Interaktion mit Menschen
und Orientierung/Navigation. Prüfe alle sechs Themen deines Auftrags:
Machbarkeit aktueller Vision-/Reasoning-Modelle, Nutzerbedürfnisse,
Barrierefreiheit, einfache Architektur, Veröffentlichung/Datenschutz
und den nächsten sinnvollen Schritt mit überprüfbaren Erfolgskriterien.

Berücksichtige D-11: Wenige vollständige Alltagsabläufe gemeinsam
mit Betroffenen prüfen, bevor die App-Architektur festgelegt wird.
Recherchiere aktuelle Primärquellen mit Abrufdatum. Trenne Evidenz,
Annahmen und Empfehlungen; widersprich Codex, wenn begründet.

Schreibe ausschließlich in agents/omp/:
Ersetze die Vorlage analysis.md durch deine Bewertung und hänge
tatsächliche Arbeitseinträge an Change-Log-Agents.md an.
Erfasse Datum, Harness, bekannte Modellversion, Ausgangs-Commit,
Befunde, Alternativen, Prüfungen und offene Fragen.

Implementiere noch keine Website oder App, ändere keine gemeinsamen
Dateien, veröffentliche keine persönlichen Rohdaten und kontaktiere
keine Personen. Prüfe relative Dateilinks und git diff --check.
Committe nur deinen Analyseordner auf analysis/omp und bereite
eine PR gegen main vor; merge sie nicht selbst.

Beginne mit einem kurzen Vorgehen und führe die Analyse anschließend aus.
```
