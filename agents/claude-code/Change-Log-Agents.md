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

## 2026-10-20 — Korrektur und Nachprüfung

- **Harness / Modell:** wie oben. **Ausgangs-Commit:** weiterhin `fe68aca…`; Korrektur auf `analysis/claude-code` nach Commit `b363f13`.
- **Korrektur zum vorigen Eintrag:** Die Aussage, externe URLs seien „beim Abruf einzeln geöffnet“ worden, stimmt für C-12 (Microsoft/Seeing AI) nicht — diese URL stammt nur aus einem Suchtreffer. In der Analyse entsprechend gekennzeichnet.
- **Geändert in `analysis.md`:** F-02-Evidenz präzisiert (P für Kommentar-Verlauf und Löschen; Verlauf von Issue-Beschreibungen O). `moinsen-dev` per `gh api users/moinsen-dev` als Organisation bestätigt. Abwesenheit von Art.-9-Bezügen per `git grep` über `fe68aca` belegt (einziger Treffer: allgemeiner Hinweis auf „Datenschutzkonformität“ in der Codex-Analyse). Astro-Einstellung `redirectToDefaultLocale: false` ergänzt.
- **Geprüft:** `git diff --name-only fe68aca origin/main` — `main` ändert gemeinsame Dateien und Codex-Dateien, nicht `agents/claude-code/`; PR #1 laut GitHub `MERGEABLE` / `CLEAN`. Kein Rebase auf `main`, Ausgangsstand bleibt die Baseline. Links, Anker, `git diff --check` und Dateiliste nach der Korrektur erneut ausgeführt (Ergebnis unten).

- **Ergebnis der Nachprüfung:** 24 Markdown-Dateien, 146 relative Verweise inkl. eigener Anker ohne Befund; `git diff --check research-baseline-v0.1` ohne Befund; Diff weiterhin nur `agents/claude-code/`.

## 2026-10-21 — Folgeauftrag D-18: Wegweiser, Website-Aufbau, Prompt v2

- **Harness / Modell:** Claude Code / Claude Opus 5.5 (`claude-opus-5-5`); Build unbekannt. **Ausgangs-Commit:** `34b1a3ef` auf `main`.
- **Auftrag:** Projektverantwortlicher war mit Website-Aufbau und Prompt unzufrieden. Nach einer Bestandsaufnahme beauftragt: Wegweiser bauen (B), danach die vorgeschlagenen Schritte 1–5 (Besuchersprache, Projektinnensicht von der Website, Prompt v2 inkl. Sprachmodus, Persona-Simulation, Bedienprüfung). Ein ChatGPT-Selbsttest des Projektverantwortlichen samt ChatGPT-Auswertung lag als Material vor.
- **Geändert:** `src/content/site.ts` (Startseite, Wegweiser `tools`, neue Seite `about` statt `research`/`collaborate`, Navigationslabels), `src/pages/[lang]/index.astro`, `src/pages/[lang]/participate.astro`, `src/layouts/Layout.astro`, `src/components/Template.astro` (Prompt eingeklappt, Knopf umbenannt), `src/styles/global.css` (größere Kleintexte, keine automatische Silbentrennung in Überschriften, verwaiste Regeln entfernt), `public/_redirects`, `tests/website.spec.ts`, `docs/interview-prompt.{de,en}.md` (v2), `docs/interview-spec.md`, `docs/website-brief.md`, `docs/existing-assistive-tools.md` (Ergänzungsabschnitt mit Quellen), `README.md`, `state.md` (D-18), [prompt-simulation.md](prompt-simulation.md) mit Skript und Transkripten.
- **Erkenntnisse:** v1 wiederholte in der Simulation erfundene Personendaten (Name, Adresse, Diagnose), antwortete auf „Abbruch“ mit leerer Nachricht, verwies in der Gefahrensituation nicht auf Hilfe vor Ort und lenkte eine wortkarge Persona auf „die App“. v2 behebt das in den simulierten Läufen; ein erster v2-Entwurf fragte nach ausführlicher Erzählung noch doppelt, die Nachschärfung behob das. Live: GPTBot erhält 403 ohne Challenge, andere Kennungen eine Challenge.
- **Vorschläge (nicht umgesetzt):** Persönliche Motivation des Projektverantwortlichen auf „Über Percepta“ ergänzen; Entscheidung über KI-Crawler-Sperre; Rücknahme-Abschnitt hinter den Textvorlagen anordnen (liegt derzeit im Formularbaustein zwischen Eingabefeld und Vorlage).
- **Quellen (abgerufen 2026-10-21):** siehe Ergänzungsabschnitt in `docs/existing-assistive-tools.md`; Recherche durch einen Claude-Code-Unteragenten, Fakten mit URL übernommen, Abweichungen und Altstände dort markiert.
- **Ausgeführte Prüfungen:** `npm run check` (0 Fehler), `npm run build` (16 Seiten), `npx playwright test` 31/31 bestanden (axe WCAG 2.2 AA-Regeln, Tastatur, Reflow 320 px, Sprungziele, ohne JavaScript, Downloads, Sicherheitsheader, Weiterleitungen, privater Testempfang). Sichtprüfung Desktop/390 px und Accessibility-Baum der Teilnahme-Seite über Chrome DevTools. Persona-Simulation siehe Bericht.
- **Nicht ausgeführt:** Test mit VoiceOver/TalkBack auf echten Geräten, Test mit Betroffenen, Sprachmodus von KI-Apps, Deploy. Keine Personen kontaktiert; Cloudflare-Einstellungen nicht verändert.
- **Nächster Schritt:** Freigabe und Deploy durch den Projektverantwortlichen, dann Rückmeldung des Pilotnutzers.

## 2026-10-21 — Nachtrag D-18: Spec-Lücken im Prompt, SEO-Titel

- **Ausgangs-Commit:** `0514876`.
- **Geändert:** Prompt DE/EN: „Pause“ und „Überspringen“ ausdrücklich geregelt; feste Antwort auf eine Bitte um Veröffentlichung, die den getrennten Zustimmungsweg nennt (interview-spec, Prüffälle vor dem Pilot). Wegweiser-Titel trägt jetzt „blinde und sehbehinderte Menschen“ (Seitentitel/SEO); die Frage „Welche Hilfe passt zu dir?“ steht im Einstieg. Simulation um `korrektur`, `pause-ueberspringen` und `en-abbruch` erweitert; finale Transkripte unter `prompt-simulation/v2/`.
- **Prüfungen:** Veröffentlichungsfall vor der festen Formulierung zweimal nur teilweise erfüllt (Hinweis auf getrennte Zustimmung fehlte), danach zweimal erfüllt; vollständiger Lauf aller 13 Fälle siehe Bericht. Build und 31 Playwright-Prüfungen erneut bestanden.

## 2026-10-21 — Deploy, persönliche Motivation, Bedarfe des Testers

- **Ausgangs-Commit:** `6d50a52`. Deploy auf ausdrückliche Freigabe: Version `ec1672a3-5bc6-433d-b183-fd09f9e4e30c`, Domain unverändert.
- **Geändert:** Startseite und „Über Percepta“ um „Warum ich Percepta mache“ ergänzt (Text nach Angaben des Projektverantwortlichen, ohne Namen Dritter; Aussage „nicht kommerziell, Open Source geplant“ aus seinem LinkedIn-Post). Neu: `docs/first-exchange-needs.md` (verallgemeinerte Bedarfe und technische Einordnung). Mail-PDF und Notizen mit Einzelheiten nur in `private/contacts/` (per `.gitignore` ausgeschlossen).
- **Live-Befund KI-Crawler:** robots.txt erlaubt alles; GPTBot und ClaudeBot erhalten 403 ohne Challenge (Cloudflare-Richtlinie „Training“ auf Zonenebene). ChatGPT-User, OAI-SearchBot, Claude-User, PerplexityBot erhalten von unserer Adresse eine Challenge; daraus folgt keine Aussage über echte, verifizierte Bots. Keine Zonenänderung vorgenommen.
- **Prüfungen:** Check, Build, 31/31 Playwright, Sichtprüfung des neuen Abschnitts.

## 2026-10-21 — Folgeauftrag D-19: Öffentliche Geschichten als GitHub-Issues

- **Ausgangs-Commit:** `b2af1e3`. Auftrag: Interview-Ergebnisse anonym als GitHub-Issue veröffentlichen und auf der Website zeigen. Entscheidung des Projektverantwortlichen: Kopier-Prompt behalten, sofort veröffentlichen, nachträglich moderieren.
- **Geändert:** `worker/index.ts` (`POST /api/stories`, Rendering von `/de|en/stories/` per HTMLRewriter aus offenen Issues mit Label `geschichte` und Sprache, 5 Minuten Cache, Ablehnung von E-Mail/Telefon/Links, Tageslimit 30 über D1-Zähler, Escaping, Schutz vor @-Erwähnungen), `worker/migrations/0002_story_days.sql`, `wrangler.jsonc` (`STORIES_OPEN`, `GITHUB_API_URL`, Worker zuerst für Geschichten-Seiten), `src/components/ExperienceForm.astro` (Veröffentlichen mit eigener Einwilligung, Empfangsbestätigung mit Nummer), neue Seite `src/pages/[lang]/stories.astro`, Navigation, Sitemap, Datenschutzabschnitt „Öffentliche Geschichten“, Teilnahme-Texte, Prompt-Schluss DE/EN, `docs/interview-spec.md`, `state.md` (D-19), README. Tests: `tests/github-mock.mjs`, `tests/stories.spec.ts`, Playwright-Konfiguration.
- **Außerhalb des Repos:** Labels `geschichte`, `de`, `en` im GitHub-Repository angelegt.
- **Prüfungen:** Check, Build, 37/37 Playwright (u. a. Einwilligungspflicht, Ablehnung von Kontaktdaten/Links/fremder Herkunft, Issue mit Labels und Markern, Escaping auf der Geschichten-Seite, axe, Tageslimit ohne GitHub-Aufruf, geschlossene Produktivkonfiguration ohne Token). Simulation des Veröffentlichungsfalls mit neuem Prompt-Schluss: feste Antwort korrekt, keine Personendaten wiederholt.
- **Offen:** Token als Secret durch den Projektverantwortlichen; erste echte Probe auf GitHub; Rechtsprüfung der Einwilligungstexte nicht durchgeführt.

## 2026-10-21 — Live-Probe öffentliche Geschichten

- **Ausgangs-Commit:** `6c32e9f`. Secret `GITHUB_TOKEN` vom Projektverantwortlichen gesetzt; `/api/intake-status` meldet `storiesOpen: true`.
- **Live-Probe:** Fiktiver Text über das Formular auf `percepta.moinsen.dev/de/participate/` veröffentlicht. Ergebnis: Issue #5 mit Labels `geschichte` und `de`, Markern und Einwilligungsfuß; Empfangsbestätigung mit Nummer und Fokus auf der Überschrift; Geschichte erschien auf `/de/stories/`. Danach als „not planned“ mit Hinweis geschlossen. Die geschlossene Geschichte kann wegen des 5-Minuten-Caches kurz weiter sichtbar sein.
- **Geändert:** Issue-Fuß nennt den Bereich in Klartext statt des internen Schlüssels (`worker/index.ts`), Test ergänzt.
- **Prüfungen:** Check, Build, 37/37 Playwright.

## 2026-10-21 — Prompt v3 nach zweiter ChatGPT-Analyse

- **Ausgangs-Commit:** `7a5efcd`. Auftrag: Feedback des Projektverantwortlichen (ChatGPT-Analyse von v2 mit Vorschlag „V3“) einarbeiten.
- **Geändert:** `docs/interview-prompt.de.md`/`.en.md` (gezielte Änderungen an v2, siehe Bericht), `docs/experience-template.de.md`/`.en.md` (letzter Absatz auf den Veröffentlichungsweg statt „Empfang geschlossen“), `docs/interview-spec.md`, `state.md`, `prompt-simulation/simulate.py` (Fälle `meta-entwickler`, `widerspruch`), Transkripte `prompt-simulation/v3/`, Bericht.
- **Bewusst nicht übernommen:** fette Überschriften (würden wörtlich in veröffentlichten Geschichten stehen), Hinweis auf private Einreichung (Empfang geschlossen), freie statt fester Antwort auf Veröffentlichungswünsche. Die Empfehlung einer Prüfung vor Veröffentlichung widerspricht D-19 und ist dem Projektverantwortlichen genannt, nicht umgesetzt.
- **Prüfungen:** 15 simulierte Gespräche (`chat-latest`/`gpt-5.5`); Check, Build, Playwright.
