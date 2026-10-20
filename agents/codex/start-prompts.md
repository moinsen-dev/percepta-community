# Startprompts für JCode, OMP und DeepSeek

Vorbereitet von Codex am 2026-10-20. **Archiv des ersten Durchlaufs:** JCode, OMP und DeepSeek / DSH sind abgeschlossen; PR #2 bis PR #4 sind gemergt. Die folgenden Prompts dokumentieren die damaligen Aufträge und lösen keinen erneuten Start aus. Aktuell sind [Projektstand](../../state.md) und [Synthese](synthesis.md).

Die lokalen Arbeitsbereiche wurden vom Tag `research-baseline-v0.1` angelegt:

| Harness | Verzeichnis relativ zum Hauptcheckout | Branch |
| --- | --- | --- |
| JCode | `.worktrees/jcode` | `analysis/jcode` |
| OMP / Oh My Pi | `.worktrees/omp` | `analysis/omp` |
| DeepSeek | `.worktrees/deepseek` | `analysis/deepseek` |

Fachliche Baseline für alle ist `fe68acae4142baca25408124f85e353fb9786674`. DeepSeek beginnt technisch am Vorbereitungs-Commit `b506a180412a2e7c38bd0fce357aa247a716ad4c`, der darauf ausschließlich seinen Auftrag und leere Vorlagen ergänzt. Diese Datei liegt als organisatorischer Nachtrag auf `main`; sie muss nicht in die Analyse-Branches übernommen werden. Der Baseline-Tag wird nicht verschoben. In einem anderen Clone müssen eigene Worktrees angelegt werden; die hier dokumentierten Verzeichnisse sind nur lokal vorbereitet.

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
Die Analysen von Claude Code und JCode sind inzwischen abgeschlossen
und auf main gemergt. Lies beide Berichte nicht vor Abschluss deiner
eigenen Erstbewertung; bleibe für deine Analyse auf der Baseline.

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

## DeepSeek

Historischer Startprompt nach OMPs Abschluss. Der DSH-Lauf ist inzwischen mit PR #4 abgeschlossen; tatsächliche Laufdaten und Grenzen stehen in seiner [Analyse](../deepseek/analysis.md). Der Worktree bleibt erhalten; kein erneuter Lauf ist beauftragt.

```text
Du führst den zusätzlichen unabhängigen DeepSeek-Analyselauf
des Projekts Percepta nach OMP durch. Der Projektverantwortliche
hat OMPs Abschluss am 2026-10-20 bestätigt. Diese Voraussetzung
ist erfüllt; lies OMPs Analyse nicht zur erneuten Statusprüfung.

Arbeite im vorbereiteten Worktree .worktrees/deepseek des
Hauptcheckouts, Branch analysis/deepseek.

Prüfe Arbeitsverzeichnis, Branch, sauberen Arbeitsbaum und Baseline:
research-baseline-v0.1 muss lokal und auf origin auf
fe68acae4142baca25408124f85e353fb9786674 zeigen.
Bei einem frischen Start muss HEAD der Vorbereitungs-Commit
b506a180412a2e7c38bd0fce357aa247a716ad4c sein.
Sein einziger Eltern-Commit muss die genannte Baseline sein,
sein Diff darf nur die drei Dateien in agents/deepseek/ ergänzen.
Dieser Commit enthält nur Auftrag und Vorlagen von Codex.
Bei Wiederaufnahme nur eigene darauf aufbauende Analyse-Commits
fortsetzen. Bei Abweichungen stoppen und das Hindernis benennen.
Keine Änderungen überschreiben, keinen neuen Worktree erstellen,
main nicht übernehmen und den Baseline-Tag nicht verschieben.

Lies agents/deepseek/assignment.md sowie AGENTS.md, README.md,
state.md, alle docs/ und die Codex-Grundlage im eigenen Worktree.
Die eingefrorenen Statusdateien kennen den später ergänzten
DeepSeek-Lauf noch nicht. Der eigene Auftrag ergänzt sie organisatorisch.
Lies die Berichte von Claude Code, JCode und OMP nicht vor Abschluss
deiner eigenen Erstbewertung. Übernimm keine neueren fachlichen
Dokumente von main in deine Vergleichsgrundlage.

Percepta umfasst Einkaufen, Fragenstellen, Interaktion mit Menschen
und Orientierung/Navigation. Prüfe alle sechs Themen des Auftrags:
Machbarkeit aktueller Vision-/Reasoning-Modelle, Nutzerbedürfnisse,
Barrierefreiheit, einfache Architektur, Veröffentlichung/Datenschutz
und nächsten sinnvollen Schritt mit überprüfbaren Erfolgskriterien.

Berücksichtige D-11: Wenige vollständige Alltagsabläufe gemeinsam
mit Betroffenen prüfen, bevor die App-Architektur festgelegt wird.
Recherchiere aktuelle Primärquellen mit Abrufdatum. Trenne Evidenz,
Annahmen und Empfehlungen; widersprich Codex, wenn begründet.
HTTP-Erreichbarkeit allein belegt keinen Quelleninhalt.

Schreibe ausschließlich in agents/deepseek/:
Ersetze analysis.md durch deine Bewertung und hänge tatsächliche
Arbeitseinträge an Change-Log-Agents.md an. Erfasse Datum,
tatsächliches Harness-Programm und Version, Modell-ID und Provider,
fachlichen Baseline-Commit und tatsächlichen Ausgangs-Commit.
"DeepSeek" ist die Arbeitsbezeichnung, kein Beleg für das verwendete
Programm oder Modell. Unbekannte Angaben ausdrücklich kennzeichnen.
Dokumentiere Befunde, Alternativen, Prüfungen und offene Fragen.

Keine Website oder App bauen, keine gemeinsamen Dateien ändern,
keine persönlichen Rohdaten veröffentlichen und keine Personen
kontaktieren. Prüfe relative Dateilinks mit dem README-Skript,
git diff --check und den Änderungsumfang.

Committe nur deinen Analyseordner auf analysis/deepseek, pushe
den Branch und erstelle eine PR gegen main. Merge sie nicht selbst.
Berichte PR-Link, Commit, geänderte Dateien, tatsächliche
Prüfergebnisse und Grenzen. Empfehlungen sind keine Entscheidungen.

Beginne mit einem kurzen Vorgehen und führe die Analyse anschließend aus.
```
