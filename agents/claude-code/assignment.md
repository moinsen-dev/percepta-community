# Claude Code — unabhängige Analyse

## Start und Arbeitsbereich

Du arbeitest im tatsächlichen Harness **Claude Code**. Lies [AGENTS.md](../../AGENTS.md), [state.md](../../state.md), [Vision](../../docs/vision.md), [Recherche](../../docs/research.md), [Website-Brief](../../docs/website-brief.md) und [Interview-Spezifikation](../../docs/interview-spec.md).

Beginne am Tag `research-baseline-v0.1` in einem eigenen Checkout/Worktree und Branch `analysis/claude-code`. Fehlt der Tag, dokumentiere dies und fordere die gemeinsame Baseline an, statt einen beliebigen Stand als vergleichbar auszugeben. Halte `git rev-parse HEAD`, Datum, tatsächlichen Harness und bekannte Modell-/Versionsangaben fest.

Schreibe ausschließlich in `agents/claude-code/`. Prüfe die Grundlage unabhängig; andere Zweitanalysen erst nach Abschluss deiner Erstbewertung lesen.

## Auftrag

Berücksichtige Einkaufen, Fragenstellen, Interaktion mit anderen Menschen sowie Orientierung/Navigation als gleichberechtigte Bereiche. Prüfe, ob Interview und Architektur über Navigation hinaus geeignet sind. Die Beispiele in der Vision sind Hypothesen, keine bereits validierten Nutzerwünsche.

Bewerte alle sechs Themen:

1. Technische Machbarkeit der Anwendungsfälle und aktueller Vision-/Reasoning-Modelle; Quellen, Grenzen und sinnvolle Gegenproben.
2. Nutzerbedürfnisse, ungesicherte Annahmen und Priorisierung ohne vorgetäuschte Repräsentativität.
3. Barrierefreiheit der geplanten Astro-Seite und des DE/EN-Interviewwegs.
4. Einfachste tragfähige Architektur für Website, Moderation und spätere Forschung; offene Betriebsentscheidungen.
5. Veröffentlichung, Konto-Sichtbarkeit, Freigabe, Identifizierbarkeit und Ausfall-/Abbruchfälle.
6. Kleinster sinnvoller nächster Umsetzungsschritt und überprüfbare Abnahmekriterien.

## Erwartetes Ergebnis

Ersetze die Platzhalter in [analysis.md](analysis.md) durch eine eigenständige Bewertung. Ordne Befunde nach Auswirkung; verlinke betroffene Dokumentabschnitte oder Dateien. Zu jedem wichtigen Vorschlag: Problem, Empfehlung, Alternative/Tradeoff, Evidenz oder Annahme und nächster Test. Widersprich der Codex-Grundlage, wenn begründet.

Führe ein tatsächliches Arbeitsprotokoll in [Change-Log-Agents.md](Change-Log-Agents.md). Kennzeichne nicht ausgeführte Prüfungen. Verwende primäre Quellen mit Abrufdatum; ein Modell-Benchmark ersetzt keinen Nachweis in unseren Situationen.

Keine Website/App implementieren, keine gemeinsamen Dateien ändern, keine Rohinterviews veröffentlichen, keine Personen kontaktieren. Zum Abschluss relative Links und `git diff --check` prüfen und nur den eigenen Ordner committen. PR für Integration vorbereiten, keinen eigenmächtigen Merge.
