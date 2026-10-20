# DeepSeek — unabhängige Analyse nach OMP

## Start und Arbeitsbereich

Der Projektverantwortliche hat diesen zusätzlichen Lauf am 2026-10-20 für **nach Abschluss von OMP** beauftragt. „DeepSeek“ ist zunächst die Arbeitsbezeichnung dieses Laufs. Tatsächliches Harness-Programm samt Version, Modell-ID und Provider beim Start getrennt erfassen; unbekannte Angaben ausdrücklich als unbekannt kennzeichnen. Eine Modellbezeichnung allein belegt keinen eigenständigen Harness.

Lies [AGENTS.md](../../AGENTS.md), [README.md](../../README.md), [state.md](../../state.md), [Vision](../../docs/vision.md), [Recherche](../../docs/research.md), [Website-Brief](../../docs/website-brief.md), [Interview-Spezifikation](../../docs/interview-spec.md), beide Interview-Prompts und die Codex-Grundlage im eigenen Worktree.

Arbeitsbereich ist `.worktrees/deepseek`, Branch `analysis/deepseek`. Fachliche Vergleichsbaseline bleibt `research-baseline-v0.1` auf `fe68acae4142baca25408124f85e353fb9786674`, lokal und auf `origin`. Da dieser Ordner im Tag noch fehlt, enthält der vorbereitete Branch einen zusätzlichen Commit von Codex mit ausschließlich diesem Auftrag und den beiden leeren Vorlagen in `agents/deepseek/`. Alle fachlichen Ausgangsdokumente entsprechen weiterhin dem Tag.

Prüfe beim ersten Start: sauberer Arbeitsbaum, richtiger Branch, Baseline als Vorfahr und genau ein Vorbereitungs-Commit darüber, dessen Änderungen ausschließlich `agents/deepseek/` betreffen. Halte Baseline-Commit und tatsächlichen Ausgangs-Commit (`git rev-parse HEAD`) getrennt fest. Bei Wiederaufnahme nur eigene darauf aufbauende Analyse-Commits fortsetzen. Bei Abweichungen stoppen und das Hindernis benennen; keinen anderen Ausgangsstand verwenden, keinen Tag verschieben und keine bestehenden Änderungen überschreiben.

Die Baseline-Dokumente nennen diesen später hinzugefügten Lauf noch nicht. Dieser Auftrag ergänzt sie organisatorisch; er ändert keine fachlichen Entscheidungen. Übernimm weder `main` noch die Berichte von Claude Code, JCode oder OMP in deinen Branch.

Starte die Analyse erst, wenn der Projektverantwortliche OMPs Abschluss bestätigt hat. Diese Statusbestätigung erfordert kein Lesen von OMPs Bericht. Schreibe ausschließlich in `agents/deepseek/` und lies andere Zweitanalysen erst nach Abschluss deiner eigenen Erstbewertung.

## Auftrag

Berücksichtige Einkaufen, Fragenstellen, Interaktion mit anderen Menschen sowie Orientierung/Navigation als gleichberechtigte Bereiche. Die Beispiele in der Vision sind Hypothesen, keine bereits validierten Nutzerwünsche. D-11 bleibt Grundlage: wenige vollständige Alltagsabläufe gemeinsam mit Betroffenen prüfen, bevor die App-Architektur festgelegt wird.

Bewerte dieselben sechs Themen wie die anderen Harnesses:

1. Technische Machbarkeit der Anwendungsfälle und aktueller Vision-/Reasoning-Modelle; Quellen, Grenzen und sinnvolle Gegenproben.
2. Nutzerbedürfnisse, ungesicherte Annahmen und Priorisierung ohne vorgetäuschte Repräsentativität.
3. Barrierefreiheit der geplanten Astro-Seite und des DE/EN-Interviewwegs.
4. Einfachste tragfähige Architektur für Website, Moderation und spätere Forschung; offene Betriebsentscheidungen.
5. Veröffentlichung, Konto-Sichtbarkeit, Freigabe, Identifizierbarkeit und Ausfall-/Abbruchfälle.
6. Kleinster sinnvoller nächster Umsetzungsschritt und überprüfbare Abnahmekriterien.

## Erwartetes Ergebnis

Ersetze die Vorlage [analysis.md](analysis.md) durch eine eigenständige Bewertung. Ordne Befunde nach Auswirkung; verlinke betroffene Dokumentabschnitte oder Dateien. Nenne zu jedem wichtigen Vorschlag Problem, Empfehlung, Alternative/Tradeoff, Evidenz oder Annahme und nächsten Test. Widersprich der Codex-Grundlage, wenn begründet.

Hänge tatsächliche Arbeitseinträge an [Change-Log-Agents.md](Change-Log-Agents.md) an. Verwende aktuelle Primärquellen mit Abrufdatum; HTTP-Erreichbarkeit allein belegt keinen Inhalt. Unterscheide dokumentierte Fähigkeiten, eigene Annahmen und tatsächlich ausgeführte Tests. Kennzeichne nicht ausgeführte Prüfungen.

Keine Website/App implementieren, keine gemeinsamen Dateien ändern, keine persönlichen Rohdaten veröffentlichen und keine Personen kontaktieren. Relative Links mit dem README-Skript, `git diff --check` und Änderungsumfang prüfen. Nur den eigenen Analyseordner committen, `analysis/deepseek` pushen und eine PR gegen `main` erstellen; nicht selbst mergen. Empfehlungen bleiben bis zur Koordinator-Synthese Vorschläge.
