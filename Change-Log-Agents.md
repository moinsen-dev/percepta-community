# Percepta — Agenten-Protokolle und Übergabe

Gemeinsame Regeln: [AGENTS.md](AGENTS.md). Verbindliche Entscheidungen und aktueller Status: [state.md](state.md).

## Beteiligte Harnesses

| Harness | Auftrag | Analyse | Eigenes Protokoll |
| --- | --- | --- | --- |
| Codex | [Auftrag](agents/codex/assignment.md) | [Erstanalyse](agents/codex/analysis.md) | [Protokoll](agents/codex/Change-Log-Agents.md) |
| Claude Code | [Auftrag](agents/claude-code/assignment.md) | [Abgeschlossen](agents/claude-code/analysis.md) | [Protokoll](agents/claude-code/Change-Log-Agents.md) |
| JCode | [Auftrag](agents/jcode/assignment.md) | [Abgeschlossen](agents/jcode/analysis.md) | [Protokoll](agents/jcode/Change-Log-Agents.md) |
| OMP / Oh My Pi | [Auftrag](agents/omp/assignment.md) | [Ausstehend](agents/omp/analysis.md) | [Protokoll](agents/omp/Change-Log-Agents.md) |

Die Dateien für OMP sind weiterhin Vorlagen von Codex. Sie stellen keine ausgeführte Arbeit dieses Harnesses dar. Die abgeschlossenen Analysen von Claude Code und JCode liegen mit PR #1 beziehungsweise PR #2 auf `main`.

Aktueller Laufstatus steht in `state.md`: Die Analysen von Claude Code und JCode sind abgeschlossen und gemergt; die inhaltliche Integration steht aus. Als Nächstes folgt OMP. Dafür sind ein lokaler Worktree vom selben Baseline-Tag und ein [kopierbarer Startprompt](agents/codex/start-prompts.md#omp--oh-my-pi) vorbereitet. Jeder Harness bleibt in seinem eigenen Checkout und liest andere Zweitanalysen erst nach seiner eigenen Erstbewertung.

## Startanleitung für eine unabhängige Analyse

Voraussetzung: Repository und Tag sind laut `state.md` verfügbar. Alle drei Harnesses verwenden den Tag `research-baseline-v0.1`, nicht den jeweils neuesten Stand von `main`.

1. Eigenen Checkout oder Worktree vom Tag anlegen.
2. Ausgangs-Commit mit `git rev-parse HEAD` ermitteln und in die Analyse schreiben.
3. Den tatsächlichen Harness im Checkout starten. Keine ungeprüfte CLI-Syntax voraussetzen.
4. Den passenden Auftrag explizit laden. Beispiel für Claude Code:

   ```text
   Lies AGENTS.md, state.md und agents/claude-code/assignment.md.
   Führe den dort beschriebenen Analyseauftrag aus.
   Schreibe ausschließlich in agents/claude-code/.
   Kennzeichne Quellen, Annahmen, Vorschläge und nicht ausgeführte Prüfungen.
   Lies andere Zweitanalysen erst nach Abschluss deiner eigenen Erstbewertung.
   ```

5. Für JCode beziehungsweise OMP denselben Starttext mit `agents/jcode/` beziehungsweise `agents/omp/` verwenden.
6. Ergebnis auf dem eigenen Branch committen; als PR zur Integration bereitstellen. Nur die beauftragten Dateien aufnehmen.

Beispiel für einen lokalen separaten Worktree aus einem vorhandenen Clone:

```sh
git worktree add ../percepta-claude-code -b analysis/claude-code research-baseline-v0.1
```

Für die beiden anderen Harnesses entsprechend `percepta-jcode` / `analysis/jcode` und `percepta-omp` / `analysis/omp` verwenden. Bestehende Branches oder Verzeichnisse nicht überschreiben. Ein Worktree-Aufruf startet noch keinen Harness.

## Auswertung durch den Koordinator

Nach Vorliegen der Berichte werden Empfehlungen je Thema gegenübergestellt: Übereinstimmung, Widerspruch, Evidenz, Entscheidung und nächster Test. Keine Mehrheitsabstimmung als Ersatz für Nutzerfeedback oder technische Messung. Erst angenommene Entscheidungen ändern `state.md` und gemeinsame Spezifikationen.

Der Koordinator protokolliert die Integration unter seinem eigenen Harness. Abgelehnte Vorschläge bleiben in den ursprünglichen Analysen nachvollziehbar.
