# Percepta

**Deutsch:** Percepta ist eine Initiative zur Erforschung von Alltagshilfen für blinde und sehbehinderte Menschen: beim Einkaufen, beim Stellen von Fragen, bei der Interaktion mit anderen Menschen sowie bei Orientierung und Navigation. Wir wollen Alltagserfahrungen verstehen, technische Möglichkeiten prüfen und gemeinsam hilfreiche Lösungen entwickeln.

**English:** Percepta is an initiative exploring everyday assistance for blind and low-vision people: shopping, asking questions, interacting with other people, and orientation and navigation. We want to understand everyday experiences, evaluate technology and develop useful solutions together.

## Aktueller Stand / Current status

Dies ist die Dokumentations- und Analysephase. Es gibt noch keine Website, Alltagshilfe-App oder aktive Einreichungsstelle. Die Analysen von [Claude Code](agents/claude-code/analysis.md), [JCode](agents/jcode/analysis.md), [OMP](agents/omp/analysis.md) und [DeepSeek / DSH](agents/deepseek/analysis.md) sind abgeschlossen und mit PR #1 bis PR #4 gemergt. Die [Koordinator-Synthese](agents/codex/synthesis.md) liegt vor; Entscheidungen über ihre Vorschläge und Änderungen der Spezifikationen stehen aus. Der genaue Arbeits- und Veröffentlichungsstand steht in [state.md](state.md).

This repository currently contains project documentation and analysis reports and assignments. There is no deployed website, everyday-assistance app or active submission service. The [Claude Code](agents/claude-code/analysis.md), [JCode](agents/jcode/analysis.md), [OMP](agents/omp/analysis.md) and [DeepSeek / DSH](agents/deepseek/analysis.md) reviews are complete and merged through PR #1–4. The [coordinator synthesis](agents/codex/synthesis.md) compares the findings and records limitations, including DSH's prior exposure to summary keywords. Its proposals await project decisions and changes to shared specifications. Please do not post personal stories or contact details while the participation process is being prepared.

Öffentliches Repository: [moinsen-dev/percepta-community](https://github.com/moinsen-dev/percepta-community). Percepta ist ein Neustart; [das frühere Projekt](https://github.com/moinsen-dev/percepta) wird nicht als Codebasis übernommen.

## Einstieg

- [Vision und Alltagssituationen](docs/vision.md)
- [Recherche und Evidenzstatus](docs/research.md)
- [Auftrag für die spätere Astro-Website](docs/website-brief.md)
- [Interview- und Veröffentlichungsablauf](docs/interview-spec.md)
- [Deutscher Interview-Prompt](docs/interview-prompt.de.md) und [English interview prompt](docs/interview-prompt.en.md) — Entwürfe zur Prüfung, noch keine aktive Einreichungsstelle
- [Gemeinsame Agentenregeln](AGENTS.md)
- [Agenten-Protokolle und Startanleitung](Change-Log-Agents.md)
- [Codex-Erstanalyse](agents/codex/analysis.md)
- [Synthese der vier Zweitanalysen und offene Entscheidungsvorlage](agents/codex/synthesis.md)
- [Bestandsaufnahme des früheren Percepta — Code, Grenzen und Erkenntnisse](agents/codex/legacy-review.md)

## Zusammenarbeit

Betroffene bestimmen mit, welche Probleme relevant sind. Entwickler, Selbsthilfeorganisationen, Forschung und mögliche Praxispartner können die vorgeschlagene Richtung prüfen. Technische Beiträge und Diskussionen sollen keine sensiblen persönlichen Informationen enthalten.

Die vier Analyseläufe sind abgeschlossen; ihre Ordner und Branches bleiben als Nachweise erhalten. Alle verwendeten dieselbe fachliche Baseline, DeepSeek zusätzlich einen Vorbereitungs-Commit nur für Auftrag und Vorlagen. DSH legt Kenntnis neuerer Statusstichworte offen; die Synthese berücksichtigt diese Einschränkung der Unabhängigkeit. Als Nächstes wird der Umfang des Teilnahme-Pakets und eines kleinen Pilots entschieden. Ein weiterer Harness wird nicht automatisch gestartet.

## Dokumentation prüfen

Es sind keine Pakete zu installieren. Relative Markdown-Dateilinks lassen sich ohne Abhängigkeiten prüfen:

```sh
python3 - <<'PY'
import os
import re
from pathlib import Path
from urllib.parse import unquote

root = Path.cwd()
errors = []
files = []
for directory, dirs, names in os.walk(root):
    dirs[:] = [d for d in dirs if d not in {
        ".git", "private", "node_modules", "dist", ".astro", ".worktrees"
    }]
    files.extend(Path(directory) / name for name in names if name.endswith(".md"))
for path in files:
    for target in re.findall(r"\[[^\]]*\]\(([^)\s]+)\)", path.read_text()):
        if "://" in target or target.startswith(("#", "mailto:")):
            continue
        target = unquote(target.split("#", 1)[0])
        if target and not (path.parent / target).exists():
            errors.append(f"{path.relative_to(root)}: {target}")
print("\n".join(errors) if errors else "Relative file links: OK")
raise SystemExit(bool(errors))
PY
git diff --check
```

Diese Prüfung kontrolliert Dateiziele, keine externen URLs oder Überschriftenanker. Private Referenzkopien und erzeugte Verzeichnisse werden nicht durchsucht. `git diff --check` setzt ein initialisiertes Git-Repository voraus. Inhaltliche Reviews und Interview-Szenarien sind im [Codex-Validierungsbericht](agents/codex/validation.md) dokumentiert.

## Lizenz

Die Lizenzentscheidung ist offen. Die öffentliche Sichtbarkeit ist noch keine Open-Source-Lizenz. Vor externer Codeübernahme und breiterer Mitarbeit werden Code-, Dokumentations- und Beitragsbedingungen festgelegt; persönliche Beiträge werden nicht automatisch unter eine Softwarelizenz gestellt.
