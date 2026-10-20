# Percepta — Agenten-Protokolle und Übergabe

Gemeinsame Regeln: [AGENTS.md](AGENTS.md). Verbindliche Entscheidungen und aktueller Status: [state.md](state.md).

## Beteiligte Harnesses

| Harness | Auftrag | Analyse | Eigenes Protokoll |
| --- | --- | --- | --- |
| Codex | [Auftrag](agents/codex/assignment.md) | [Erstanalyse](agents/codex/analysis.md) | [Protokoll](agents/codex/Change-Log-Agents.md) |
| Claude Code | [Auftrag](agents/claude-code/assignment.md) | [Abgeschlossen](agents/claude-code/analysis.md) | [Protokoll](agents/claude-code/Change-Log-Agents.md) |
| JCode | [Auftrag](agents/jcode/assignment.md) | [Abgeschlossen](agents/jcode/analysis.md) | [Protokoll](agents/jcode/Change-Log-Agents.md) |
| OMP / Oh My Pi | [Auftrag](agents/omp/assignment.md) | [Abgeschlossen](agents/omp/analysis.md) | [Protokoll](agents/omp/Change-Log-Agents.md) |
| DeepSeek / DSH | [Auftrag](agents/deepseek/assignment.md) | [Abgeschlossen](agents/deepseek/analysis.md) | [Protokoll](agents/deepseek/Change-Log-Agents.md) |

Die abgeschlossenen Analysen von Claude Code, JCode, OMP und DeepSeek / DSH liegen mit PR #1 bis PR #4 auf `main`. Die tatsächlichen Laufdaten und Prüfgrenzen stehen in den jeweiligen Berichten.

Aktueller Status steht in `state.md`: Die [Koordinator-Synthese](agents/codex/synthesis.md) ist abgeschlossen; der Folgeauftrag D-13/D-14 ist in die gemeinsame Spezifikation übernommen. Website und Teilnahme-Paket v0.1 sind implementiert und als geschützte Vorschau veröffentlicht. [Website-Prüfungen](agents/codex/website-validation.md) und [Pilot-Vorbereitung](docs/participation-pilot.md) dokumentieren Ergebnisse und offene Arbeiten. DSHs offengelegte Kenntnis neuerer Statusstichworte begrenzt die Unabhängigkeit seines Laufs. Die folgenden Startanleitungen und [Prompts](agents/codex/start-prompts.md) dokumentieren den abgeschlossenen Durchlauf, sie beauftragen keinen neuen Start.

## Startanleitung für eine unabhängige Analyse

Voraussetzung: Repository und Tag sind laut `state.md` verfügbar. Alle vier Analyse-Harnesses nach Codex verwenden fachlich den Tag `research-baseline-v0.1`, nicht den jeweils neuesten Stand von `main`. DeepSeek erhält zusätzlich einen Vorbereitungs-Commit mit ausschließlich seinem Auftrag und leeren Vorlagen, weil sein Ordner im Tag noch fehlt. Details stehen im [DeepSeek-Auftrag](agents/deepseek/assignment.md); der Tag bleibt unverändert.

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

5. Für JCode beziehungsweise OMP denselben Starttext mit `agents/jcode/` beziehungsweise `agents/omp/` verwenden. DeepSeek verwendet nach OMP seinen [eigenen Startprompt](agents/codex/start-prompts.md#deepseek), der den Vorbereitungs-Commit berücksichtigt.
6. Ergebnis auf dem eigenen Branch committen; als PR zur Integration bereitstellen. Nur die beauftragten Dateien aufnehmen.

Beispiel für einen lokalen separaten Worktree aus einem vorhandenen Clone:

```sh
git worktree add ../percepta-claude-code -b analysis/claude-code research-baseline-v0.1
```

Für JCode und OMP entsprechend `percepta-jcode` / `analysis/jcode` und `percepta-omp` / `analysis/omp` verwenden. DeepSeek ist unter `.worktrees/deepseek` auf `analysis/deepseek` vorbereitet. In einem anderen Clone dessen veröffentlichten Branch verwenden und die Baseline samt Vorbereitungs-Commit prüfen. Bestehende Branches oder Verzeichnisse nicht überschreiben. Ein Worktree-Aufruf startet noch keinen Harness.

## Auswertung durch den Koordinator

Nach Vorliegen der Berichte werden Empfehlungen je Thema gegenübergestellt: Übereinstimmung, Widerspruch, Evidenz, Entscheidung und nächster Test. Keine Mehrheitsabstimmung als Ersatz für Nutzerfeedback oder technische Messung. Erst angenommene Entscheidungen ändern `state.md` und gemeinsame Spezifikationen.

Der Koordinator protokolliert die Integration unter seinem eigenen Harness. Abgelehnte Vorschläge bleiben in den ursprünglichen Analysen nachvollziehbar.
