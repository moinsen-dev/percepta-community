# Percepta

**Deutsch:** Percepta ist eine Initiative zur Erforschung von Alltagshilfen für blinde und sehbehinderte Menschen: beim Einkaufen, beim Stellen von Fragen, bei der Interaktion mit anderen Menschen sowie bei Orientierung und Navigation. Wir wollen Alltagserfahrungen verstehen, technische Möglichkeiten prüfen und gemeinsam hilfreiche Lösungen entwickeln.

**English:** Percepta is an initiative exploring everyday assistance for blind and low-vision people: shopping, asking questions, interacting with other people, and orientation and navigation. We want to understand everyday experiences, evaluate technology and develop useful solutions together.

## Aktueller Stand / Current status

Die erste Astro-Website in Deutsch und Englisch ist implementiert: Vorhaben, Teilnahmevorbereitung, Mitarbeit, Forschung, Barrierefreiheit und Datenschutz-/Kontaktstatus. Ein kurzer Interview-Prompt und eine gleichwertige Textvorlage ohne KI sind lesbar, kopierbar und als Textdownload verfügbar. Mit dem DE/EN-Impressum bestehen alle 21 Browserprüfungen lokal; CI und Veröffentlichung werden im Prüfbericht dokumentiert. Cloudflare und `percepta.moinsen.dev` sind festgelegt; Betreiber-/Kontaktangaben wurden auf ausdrücklichen Auftrag aus den öffentlichen moinsen-Angaben übernommen. Für die öffentliche Freischaltung bleiben DNS/TLS und die abschließende Hosting-Datenschutzprüfung offen. Es gibt noch keine Assistenz-App oder aktive Interview-Einreichung.

The first German/English Astro website is implemented, with project information, a short interview prompt and an equivalent template without AI. All 21 browser checks pass locally, including the new DE/EN legal notice; CI and deployment results are recorded in the validation report. Cloudflare and `percepta.moinsen.dev` are the selected hosting target; operator and contact details have been added from the public moinsen information as requested. DNS/TLS and the final hosting privacy review remain open before public launch. There is no assistance app or active interview submission service. Please do not post personal stories or contact details in public issues.

Alle vier Zweitanalysen sind gemergt. Die [Synthese](agents/codex/synthesis.md) und die bestätigten Folgeentscheidungen D-13/D-14 stehen in [state.md](state.md). Der [Prüfbericht](agents/codex/website-validation.md) trennt technische Checks von noch ausstehenden Screenreader- und Nutzertests.

Öffentliches Repository: [moinsen-dev/percepta-community](https://github.com/moinsen-dev/percepta-community). Percepta ist ein Neustart; [das frühere Projekt](https://github.com/moinsen-dev/percepta) wird nicht als Codebasis übernommen.

Geschützte Vorschau für den Projekteigentümer: [Percepta auf Deutsch](https://percepta-community.leafy-leaf-9434.chatgpt.site/de/) und [English](https://percepta-community.leafy-leaf-9434.chatgpt.site/en/). Die öffentliche Zieldomain ist noch nicht aktiv.

## Einstieg

- [Vision und Alltagssituationen](docs/vision.md)
- [Recherche und Evidenzstatus](docs/research.md)
- [Umfang der Astro-Website](docs/website-brief.md)
- [Betreiberangaben und Quellen der Rechtstexte](docs/legal-sources.md)
- [Interview- und Veröffentlichungsablauf](docs/interview-spec.md)
- [Deutscher Interview-Prompt](docs/interview-prompt.de.md) und [English interview prompt](docs/interview-prompt.en.md) — nur Entwurfshilfe, keine automatische Veröffentlichung
- [Textvorlage ohne KI: Deutsch](docs/experience-template.de.md) und [English](docs/experience-template.en.md)
- [Pilot-Leitfaden](docs/participation-pilot.md) und [fiktive Prozessprobe](agents/codex/participation-dry-run.md)
- [Gemeinsame Agentenregeln](AGENTS.md)
- [Agenten-Protokolle und Startanleitung](Change-Log-Agents.md)
- [Codex-Erstanalyse](agents/codex/analysis.md)
- [Synthese der vier Zweitanalysen und offene Entscheidungsvorlage](agents/codex/synthesis.md)
- [Bestandsaufnahme des früheren Percepta — Code, Grenzen und Erkenntnisse](agents/codex/legacy-review.md)

## Zusammenarbeit

Betroffene bestimmen mit, welche Probleme relevant sind. Entwickler, Selbsthilfeorganisationen, Forschung und mögliche Praxispartner können die vorgeschlagene Richtung prüfen. Technische Beiträge und Diskussionen sollen keine sensiblen persönlichen Informationen enthalten.

Die vier Analyseläufe sind abgeschlossen; ihre Ordner und Branches bleiben als Nachweise erhalten. Alle verwendeten dieselbe fachliche Baseline, DeepSeek zusätzlich einen Vorbereitungs-Commit nur für Auftrag und Vorlagen. DSH legt Kenntnis neuerer Statusstichworte offen; die Synthese berücksichtigt diese Einschränkung der Unabhängigkeit. Das Teilnahme-Paket ist umgesetzt; tatsächlicher privater Empfang und Pilot werden vorbereitet. Ein weiterer Harness wird nicht automatisch gestartet.

## Website entwickeln und prüfen

Node.js ab 22.22.0, npm und für Browserprüfungen Chromium:

```sh
npm ci
npm run dev
# In einem zweiten Terminal bzw. nach Beenden des Dev-Servers:
npm run check
npm run build
npx playwright install chromium
npm test
npx wrangler deploy --dry-run
```

`npm test` startet und beendet eine lokale Cloudflare-Runtime auf Port 4321. Die Tests prüfen unter anderem Links, axe-Regeln, Tastatur, Reflow, Kopieren mit Fehlerfall, Textdownloads, Nutzung ohne JavaScript und Sicherheitsheader. GitHub Actions enthält denselben Prüfpfad. Der Dry-run veröffentlicht nichts.

`wrangler.jsonc` beschreibt das Cloudflare-Ziel mit statischen Assets aus `dist/`. Keine Zugangsdaten ins Repository eintragen. Die geschützte Vorschau dieser Codex-Sitzung verwendet den Sites-Connector und die Zuordnung in `.openai/hosting.json`; sie liegt nicht im bestehenden Cloudflare-Account. Beim Bauen für diese Vorschau `SITE_URL` auf die tatsächliche Vorschau-URL setzen. Ein Deployment ist erst bestätigt, wenn der Provider einen erfolgreichen Abschluss meldet. Aktueller Domain-/Veröffentlichungsstatus: [state.md](state.md).

## Dokumentation prüfen

Für diesen Dateilink-Check sind keine Pakete zu installieren. Relative Markdown-Dateilinks lassen sich ohne Abhängigkeiten prüfen:

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
        ".git", "private", "node_modules", "dist", ".astro", ".worktrees",
        ".wrangler", "test-results", "playwright-report"
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
