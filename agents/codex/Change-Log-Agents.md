# Codex — Änderungsprotokoll

## 2026-10-20 — Projektgrundlage erstellt

- **Tatsächlicher Harness:** Codex.
- **Modell:** GPT-6-Familie laut Sitzung; genaue Modell-/Build-Version nicht separat ermittelt.
- **Ausgangs-Commit:** keiner, leerer Workspace.
- **Auftrag:** angenommene erste Dokumentationslieferung umsetzen; Veröffentlichung vorbereiten.
- **Geändert:** gemeinsame Regeln/Status/README/Protokollübersicht; Vision, Recherche, Website-Brief, Interview-Spezifikation und DE/EN-Prompts; eigene Erstanalyse und Aufträge/Vorlagen für alle vier Harnesses; `.gitignore`.
- **Umgesetzt:** nachvollziehbare Trennung zwischen Entscheidungen, Hypothesen, Entwürfen und späterer Implementierung. Fremde Analysen als ausstehend markiert.
- **Vorschläge:** Website nach den Zweitanalysen eingrenzen; App-Architektur erst nach Nutzerpriorisierung und Messungen auswählen.
- **Quellen:** siehe [Recherche](../../docs/research.md), Abrufstatus 2026-10-20.
- **Prüfungen:** Abschlussprüfung noch offen; Ergebnis folgt als eigener Eintrag und im [Validierungsbericht](validation.md).
- **Zugriffsgrenze:** Connector meldet beim alten Repository 404; lokale GitHub-CLI erreicht API nicht. Keine alten Beiträge gelesen.
- **Nächster Schritt:** Dokumente prüfen, Git-/Veröffentlichungsweg verifizieren, Vergleichsbaseline erzeugen.

Die Dateien in den drei anderen Harness-Ordnern wurden in diesem Schritt von Codex als Vorlagen angelegt. Sie sind keine Beiträge von Claude Code, JCode oder OMP.

## 2026-10-20 — Lokale Prüfung abgeschlossen, Veröffentlichung blockiert

- **Harness / Modell:** Codex / GPT-6-Familie wie oben.
- **Ausgangs-Commit:** weiterhin keiner.
- **Geändert:** `state.md` und eigener Validierungsbericht auf tatsächliche Abschluss- und Zugriffsstände aktualisiert.
- **Prüfungen:** 23 Markdown-Dateien, 82 interne Dateilinks und vier vollständige Harness-Ordner erfolgreich geprüft. 24 Dateien ohne Whitespace-Befund. Zehn Interview-Szenarien redaktionell gegen beide Sprachfassungen und Spezifikation geprüft.
- **Korrektur:** Der erste Whitespace-Prüflauf interpretierte den normalen no-index-Diff-Exitcode 1 falsch; Prüflogik korrigiert und Prüfung erfolgreich wiederholt.
- **Nicht durchgeführt:** Harness-Ausführungen außerhalb Codex, Nutzer-/Screenreader-Tests, Modell-Benchmarks, Website-Build.
- **Hindernisse:** `.git` ist im aktiven Workspace-Profil nicht beschreibbar; `git init` scheiterte. GitHub-CLI ohne nutzbaren API-Zugriff, Connector ohne Repository-Erstellungsweg, Browser nicht bei GitHub angemeldet. Kein Commit, Tag, neues Repository oder Push behauptet.
- **Nächster Schritt:** Nach Bereitstellung des Zugriffs den geprüften Stand veröffentlichen, tatsächlichen Remote-Stand prüfen und den gemeinsamen Baseline-Tag erstellen.

## 2026-10-20 — Alltagshilfe erweitert und Altprojekt-Analyse vorbereitet

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** weiterhin keiner.
- **Auftrag:** Einkaufen, Fragenstellen und Interaktion mit Menschen als eigenständige Bereiche aufnehmen; letzten alten Percepta-Branch klonen und analysieren.
- **Geändert:** `AGENTS.md`, `README.md`, `state.md`, Vision, Website-Brief, Recherche, Interview-Spezifikation und beide Prompts; alle vier Analyseaufträge; Codex-Analyse und Validierung; neuer Bericht `agents/codex/legacy-review.md`.
- **Entscheidung:** Navigation ist ein Teilbereich der Alltagshilfe. **Annahme:** Fragenstellen umfasst Fragen an die App und Unterstützung beim Formulieren von Fragen an Menschen. Konkrete Beispiele bleiben zu prüfende Bedarfshypothesen.
- **Quellen:** Umfang aus dem Folgeauftrag; keine neuen Modellfähigkeiten als recherchiert behauptet. Altprojekt-Zugriff erneut versucht.
- **Tatsächliche Ergebnisse:** Connector weiterhin 404; `gh repo view` ohne API-Verbindung; `git ls-remote` scheitert an DNS. In den drei gezielt geprüften lokalen Verzeichnisebenen keine nach Percepta benannte Kopie gefunden. Kein Branch ermittelt und kein Clone ausgeführt.
- **Prüfungen:** 24 Markdown-Dateien, 87 interne Dateilinks, vier vollständige Harness-Ordner und Whitespace-Prüfung für 25 Dateien ohne Befunde. DE/EN-Prompts und Analyseaufträge redaktionell um drei nicht auf Navigation bezogene Szenarien geprüft.
- **Nicht ausgeführt:** Analyse des alten Codes, Laufzeittests, weitere Harnesses und Veröffentlichung.
- **Nächster Schritt:** GitHub-Lese-/Netzwerkzugriff herstellen; ausgewählten Altprojekt-Branch samt Commit in getrennter Referenzkopie statisch untersuchen. Geprüfte gemeinsame Grundlage vor den Zweitanalysen versionieren.

## 2026-10-20 — Zugriff nach erneuter Authentifizierung geprüft

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** weiterhin keiner.
- **Auftrag:** GitHub-Zugriff nach erneuter `gh`-Authentifizierung nochmals versuchen.
- **Geändert:** Zugriffsdiagnose in `state.md` und `agents/codex/legacy-review.md` präzisiert.
- **Prüfungen:** `gh auth status`, `gh repo view`, DNS-Auflösung beider GitHub-Hosts und Connector-Metadatenabruf ausgeführt. DNS weiterhin fehlgeschlagen, Connector weiterhin 404.
- **Korrekte Einordnung:** Eine gültige erneuerte CLI-Anmeldung wird durch die derzeitige Netzwerkdiagnose weder bestätigt noch widerlegt. Kein erneutes Anmelden als Lösung des Netzwerkfehlers vorausgesetzt.
- **Automatische Ablehnung:** Metadatenabruf außerhalb der Sandbox angefordert; Berechtigungsprofil verweigert Sandbox-Eskalationen. Keine Ausführung außerhalb der Sandbox erfolgt.
- **Nicht ausgeführt:** Clone, Branch-Auswahl und Codeanalyse.
- **Nächster Schritt:** In einer Sitzung mit nutzbarem GitHub-Netzwerkzugriff den bereits autorisierten Clone-/Analyseauftrag fortsetzen; alternativ eine vom Projektverantwortlichen lokal bereitgestellte Kopie lesen.

## 2026-10-20 — Bereitgestellte Referenzkopie analysiert

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit der neuen Grundlage:** weiterhin keiner.
- **Auftrag:** Nach gemeldetem Clone den letzten enthaltenen alten Percepta-Branch analysieren, einschließlich Einkaufen, Fragen und Interaktion mit Menschen.
- **Referenz:** `private/legacy-percepta/`, vom Projektverantwortlichen bereitgestellt. Untersucht: `origin/codex/reboot-0.2-week1`, Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5` vom 2026-05-06; fünf Commits vor Default-Branch `develop`. Jüngster lokaler Spitzencommit als dokumentierte Auslegung von „letzter Branch“; kein neuer Remote-Abgleich.
- **Geändert:** `agents/codex/legacy-review.md`, `analysis.md`, `validation.md`, dieses Protokoll sowie `README.md`, `state.md` und `docs/research.md`. Keine Änderungen an der alten Kopie oder an anderen Harness-Ordnern.
- **Befunde:** Hauptablauf Bild/Frage über REST und lokale Sprachausgabe; Offline-Pfad OCR/Barcode; zusätzliche Navigations-/Modellpfade. Geometrie- und Konfidenzheuristiken nicht als verlässliche Messungen nutzbar. Historische Alltagsabnahmen vollständig ausstehend oder blockiert.
- **Bedarfsquelle:** Frühere Interview-Zusammenfassung lokal gelesen; nur verallgemeinerte Erkenntnisse übernommen. Keine Originalzitate oder persönlichen Angaben veröffentlicht.
- **Vorschläge:** Einfache, klar prüfbare Alltagsaufgaben priorisieren; Kameraausrichtung, Rückfragen, Bedienbarkeit und Fehlerbehandlung gemeinsam mit Betroffenen prüfen. Neue Modelle gegen einfache Verfahren bewerten; keine Architekturübernahme.
- **Quellen:** Lokaler Code und Statusdokumente am genannten Commit, geprüft 2026-10-20; konkrete Fundstellen in der Bestandsaufnahme. Keine neuen externen Modellfähigkeiten behauptet.
- **Prüfungen:** Branch-/Commitvergleich, Hauptaufrufpfad, Quellen-/Zeilenangaben, interne Markdown-Dateilinks, Whitespace und persönliche Angaben geprüft; Referenzkopie unverändert. Aktuelle Prüfung im eigenen Validierungsbericht.
- **Nicht ausgeführt:** Builds, Modelle, Altprojekt-Tests, weitere Harnesses und Veröffentlichung. Vorherige GitHub-/DNS-Probleme blockieren die lokale Analyse nicht mehr; Veröffentlichungszugriff und Baseline-Tag bleiben offen.
- **Nächster Schritt:** Geprüfte Dokumentationsgrundlage einschließlich Bestandsaufnahme versionieren und danach die drei unabhängigen Analysen auf derselben Baseline starten.

## 2026-10-20 — Vorgehensempfehlung bestätigt

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** weiterhin keiner.
- **Auftrag / Quelle:** Der Projektverantwortliche hat die Empfehlung nach der Altprojekt-Analyse am 2026-10-20 ausdrücklich angenommen.
- **Geändert:** `state.md`, `AGENTS.md` und dieses Protokoll.
- **Entscheidung D-11:** Frühere Alltagssituationen als Ausgangspunkt nutzen; wenige vollständige Abläufe gemeinsam mit Betroffenen prüfen, bevor die neue App-Architektur festgelegt wird.
- **Offen:** Auswahl und Priorität der ersten Abläufe sowie Plattform und Anbieter. Die Analysebeispiele sind keine bereits beschlossene Funktionsliste.
- **Prüfungen:** Entscheidung und gemeinsame Agentenregeln inhaltlich abgeglichen; relative Dokumentlinks und Whitespace geprüft. Keine neuen persönlichen Inhalte aufgenommen.
- **Nicht ausgeführt:** Nutzerstudie, weitere Harnesses, App-Implementierung oder Veröffentlichung.
- **Nächster Schritt:** D-11 in die gemeinsame Vergleichsbaseline aufnehmen. Die unabhängigen Analysen sollen die Priorisierung und Prüfung weniger vollständiger Alltagsabläufe vorbereiten.

## 2026-10-20 — Übergabebereitschaft geprüft

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** weiterhin keiner.
- **Auftrag:** Prüfen, ob gemeinsame Arbeit vorbereitet und Codex' erster Durchlauf zur Übergabe abgeschlossen ist.
- **Geändert:** Übergabestatus und Codex-Arbeitspaket in `state.md`, dieses Protokoll.
- **Ergebnis:** Dokumentations- und Analysedurchlauf inhaltlich abgeschlossen. Alle vier Harness-Ordner enthalten Auftrag, Analyse beziehungsweise Vorlage und eigenes Protokoll. Regeln für unabhängige Bewertungen, getrennte Checkouts und koordinierte Integration sind vorhanden.
- **Offene Voraussetzung:** Neue gemeinsame Git-Baseline fehlt. `git rev-parse --show-toplevel` meldet kein Repository; `.git` ist nicht vorhanden. Daher noch kein Commit/Tag als vergleichbarer Ausgangspunkt. Die alte Referenzkopie ist ein separates Repository.
- **Prüfungen:** `AGENTS.md`, `state.md`, README, Übergabeanleitung, drei Folgeaufträge und Validierung abgeglichen; Ordnerstruktur, aktuelle Git-Voraussetzung, relative Dokumentlinks und Whitespace geprüft.
- **Nicht ausgeführt:** Git-Initialisierung, neuer Netzwerk-/Anmeldeversuch, Veröffentlichung oder Start eines weiteren Harnesses.
- **Nächster Schritt:** Koordinator stellt die versionierte Baseline bereit; anschließend Claude Code mit seinem vorhandenen Auftrag starten. JCode und OMP verwenden denselben unveränderten Ausgangsstand.

## 2026-10-20 — Git-Initialisierung und öffentliche Erstellung erneut versucht

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** weiterhin keiner.
- **Auftrag / Quelle:** Ausdrücklicher Nutzerauftrag, `git init` auszuführen und ein öffentliches Repository unter `moinsen-dev` anzulegen. Ziel aus D-01: `moinsen-dev/percepta-community`.
- **Geändert:** Zugriffsstatus in `state.md` und dieses Protokoll.
- **Ausgeführt:** Lokalen Git-Status und Ausschluss von `private/` gelesen; `git init -b main` versucht; Zielrepository per CLI und Connector abgefragt; GitHub-Werkzeuge und Pluginsuche geprüft; Repository-Erstellungsseite in Chrome geöffnet.
- **Ergebnisse:** Initialisierung verweigert (`.git: Operation not permitted`); CLI ohne API-Verbindung; Connector 404 und ohne Werkzeug zur Repository-Erstellung; Browser zeigt Anmeldung. Keine Nichtexistenz des Zielrepositorys aus 404 abgeleitet.
- **Nicht ausgeführt:** Anmeldung, Repository-Erstellung, Commit, Tag oder Push. Keine Zugangsdaten ausgelesen, keine Veröffentlichung und keine Änderung der privaten Referenzkopie.
- **Prüfung:** Status und Protokoll auf übereinstimmende Ergebnisse und Whitespace geprüft.
- **Nächster Schritt:** Initialisierung und Repository-Erstellung im eigenen Terminal des Projektverantwortlichen oder in einer Sitzung mit nutzbarem Git-/GitHub-Zugriff ausführen; danach tatsächlichen Zustand prüfen und die gemeinsame Baseline veröffentlichen.

## 2026-10-20 — Repository-Einrichtung bestätigt, Veröffentlichung vorbereitet

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** noch keiner.
- **Auftrag:** Nach gemeldeter manueller Einrichtung den ersten Commit und die gemeinsame Vergleichsbaseline veröffentlichen.
- **Geändert:** Aktuellen Status in `README.md`, `state.md` und `agents/codex/validation.md` berichtigt; dieses Protokoll ergänzt.
- **Bestätigt:** Lokales Repository auf `main`, Remote `origin` für `moinsen-dev/percepta-community`; GitHub-Connector bestätigt öffentliche Sichtbarkeit und Schreibberechtigungen. Lokales Staging ist erfolgreich.
- **Prüfungen:** 25 freigegebene Dokumentationsdateien, 96 interne Dateilinks, gezielter Suchlauf auf bekannte persönliche Angaben und `git diff --cached --check` ohne Befund. `private/` und Umgebungsdateien werden ignoriert.
- **Verbleibende Grenze:** CLI/API- und DNS-Abfragen weiterhin nicht nutzbar. Die erfolgreiche Repository-Erstellung ist davon unabhängig bestätigt.
- **Nächster Schritt:** Commit und Veröffentlichung ausführen, Remote-Inhalt prüfen und den unveränderlichen Baseline-Tag bereitstellen.

## 2026-10-20 — Erstveröffentlichung erfolgreich, Übergabestand vorbereitet

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** `ee24e5623502f911807ea1ba257f938ef78362b4`.
- **Ergebnis:** Ersten Commit mit 25 Dokumentationsdateien erstellt und per `git push -u origin main` veröffentlicht. Connector bestätigt den Commit, öffentliche Sichtbarkeit und Default-Branch `main`.
- **Geändert:** `state.md` und eigener Validierungsbericht auf die erfolgreiche Veröffentlichung aktualisiert; dieses Protokoll ergänzt.
- **Prüfungen:** Veröffentlichter Commit über den Connector gelesen; Remote-Ziel und Default-Branch abgeglichen. Keine private Referenzkopie, Umgebungsdateien oder alte Git-Historie eingecheckt.
- **Korrektur des Zugriffsstands:** Frühere CLI-/DNS-Fehler verhindern den jetzt erfolgreich ausgeführten Git-Push nicht. Keine erneute Authentifizierung erforderlich.
- **Nächster Schritt:** Diesen Übergabestand prüfen, committen und als `research-baseline-v0.1` markieren; Commit und Tag veröffentlichen und anschließend remote verifizieren. Den Tag danach unverändert lassen.

## 2026-10-20 — Baseline veröffentlicht und Übergabe bereit

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit:** `fe68acae4142baca25408124f85e353fb9786674`.
- **Ergebnis:** `research-baseline-v0.1` zeigt unveränderlich auf diesen Commit. `main` und Tag wurden atomar nach `origin` veröffentlicht. Der Tag wurde anschließend von GitHub abgerufen.
- **Geändert:** Abschlussstatus in `state.md`, eigener Validierungsbericht und dieses Protokoll. Dieser Nachtrag auf `main` wird nicht Teil einer verschobenen Baseline.
- **Prüfungen:** 25 versionierte Dokumentationsdateien, 96 relative Dateilinks, gezielter Suchlauf auf persönliche Angaben und Whitespace-Prüfung erfolgreich. Tag-Auflösung stimmt mit dem Baseline-Commit überein; `git ls-tree` bestätigt den Umfang ohne private Referenzkopie. `AGENTS.md` über den Remote-Tag per Connector gelesen. Arbeitsbaum vor diesem Nachtrag sauber.
- **Technischer Ablauf:** Lokaler Versuch eines annotierten Tags scheiterte am Schreiben einer temporären Git-Datei. Stattdessen einen direkt auf den Commit zeigenden Tag per `git push --atomic origin main HEAD:refs/tags/research-baseline-v0.1` veröffentlicht und mit `git pull --ff-only --tags origin main` abgerufen. Kein bestehender Tag verschoben.
- **Nicht ausgeführt:** Weitere Harnesses, Nutzerstudie, Website-/App-Implementierung oder Modelltests.
- **Nächster Schritt:** Claude Code im eigenen Checkout/Worktree vom Tag mit `agents/claude-code/assignment.md` starten. JCode und OMP verwenden denselben Commit; der Projektverantwortliche startet die tatsächlichen Harnesses.

## 2026-10-20 — JCode und OMP parallel zu Claude Code vorbereitet

- **Harness / Modell:** Codex / GPT-6-Familie wie oben. **Ausgangs-Commit auf main:** `bbd874d6614e2e903290df0263c736101860d9e2`.
- **Auftrag / Quelle:** JCode und OMP vorbereiten; Claude Code läuft laut Projektverantwortlichem bereits.
- **Geändert:** `state.md`, `README.md`, gemeinsame Protokollübersicht, neuer eigener Leitfaden `agents/codex/start-prompts.md` und dieses Protokoll. Keine Analyseergebnisse anderer Harnesses geschrieben.
- **Vorbereitet:** Worktrees `.worktrees/jcode` mit Branch `analysis/jcode` und `.worktrees/omp` mit Branch `analysis/omp`, jeweils vom Tag `research-baseline-v0.1` am Commit `fe68acae4142baca25408124f85e353fb9786674`.
- **Unverändert:** Baseline-Tag, vorhandene Folgeaufträge und Claude-Code-Arbeitsbereich. Die neuen Startprompts sind organisatorische Nachträge auf `main` und werden nicht in die Baseline übernommen.
- **Prüfungen:** Vorhandene Worktrees/Branches vor Anlage geprüft; neue Arbeitsbereiche auf richtigen Branch, Baseline und sauberen Zustand geprüft. Dokumentlinks, Prompt-Zuordnung und Whitespace geprüft; Worktree-Verzeichnis wird ignoriert.
- **Nicht ausgeführt:** Start von JCode oder OMP, Lesen laufender Claude-Code-Ergebnisse, Modellaufrufe oder neue Produktimplementierung.
- **Nächster Schritt:** Projektverantwortlicher startet beide tatsächlichen Harnesses mit ihren Prompts in den vorbereiteten Arbeitsbereichen. Danach Ergebnisse und PRs durch den Koordinator vergleichen und integrieren.

## 2026-10-20 — Claude-Code-Analyse gemergt und Übergabe an JCode aktualisiert

- **Harness / Modell:** Codex als Koordinator / GPT-6-Familie laut Sitzung; genaue Modell-/Build-Version nicht separat ermittelt.
- **Ausgangs-Commit auf main:** `73852bfd062bd5593c9e9eee59571347a0741a57`.
- **Auftrag / Freigabe:** PR #1 nach den vorgegebenen Prüfungen mit Merge-Commit übernehmen, den Analyse-Branch erhalten und den gemeinsamen Status in einem separaten Commit aktualisieren. Der Projektverantwortliche hat Merge und Veröffentlichung ausdrücklich beauftragt.
- **Prüfung vor dem Merge:** `git fetch origin` erfolgreich; sauberer Arbeitsbaum auf `main`, synchron mit `origin/main`. Baseline-Tag lokal und remote unverändert auf `fe68acae4142baca25408124f85e353fb9786674`. `gh pr view 1` und `gh pr diff 1` geprüft: `analysis/claude-code` → `main`, ausschließlich `agents/claude-code/analysis.md` und `agents/claude-code/Change-Log-Agents.md`; dokumentierte Laufdaten Claude Code 2.1.304 / Claude Opus 5.5, Ausgangs-Commit `fe68aca…`. GitHub bestätigte `MERGEABLE` / `CLEAN`; vorhandener GitGuardian-Check erfolgreich.
- **Merge:** [PR #1](https://github.com/moinsen-dev/percepta-community/pull/1) aus dem Draft-Status genommen und mit festgelegtem Head `0fbc63544324802f0e5599df7377e99412286b5b` gemergt. [Merge-Commit `e8b2080`](https://github.com/moinsen-dev/percepta-community/commit/e8b2080c99ce90503a1770223d13615920d2ee37) hat die bisherigen Spitzen von `main` und `analysis/claude-code` als Eltern. Beide Analyse-Commits bleiben erhalten; der Remote-Branch wurde nicht gelöscht. Hauptcheckout mit `git pull --ff-only origin main` aktualisiert.
- **Eigene Änderungen nach dem Merge:** `state.md`, `Change-Log-Agents.md`, `README.md` und dieses Protokoll. README angepasst, weil dort Claude Code noch als laufend und ohne integriertes Ergebnis beschrieben war. Keine eigenen Änderungen in den drei anderen Harness-Ordnern.
- **Erkenntnisse / Vorschläge:** Claudes Bericht liegt vor; die inhaltliche Integration steht aus. Seine Vorschläge zu Art. 9 DSGVO, GitHub-Bearbeitungsverlauf und Prompt-Probe sind für die spätere Synthese vorgemerkt. Keine Empfehlung als Entscheidung übernommen; `docs/`, `AGENTS.md` und D-01 bis D-11 bleiben unverändert.
- **Quellen:** PR-Metadaten und Diff, dokumentierte Laufdaten sowie lokale Git- und Remote-Referenzen, geprüft am 2026-10-20. Keine neue fachliche Quellenprüfung oder Modellbewertung.
- **Prüfungen nach dem Merge:** README-Skript für relative Dateilinks und `git diff --check` ohne Befund; Statusangaben und eigene Änderungen auf unbeabsichtigte persönliche Informationen geprüft. Baseline, Entscheidungen, Spezifikationen, Startprompts und fremde Analyseordner unverändert. JCode- und OMP-Worktrees sauber, jeweils auf ihrem Analyse-Branch am Baseline-Commit.
- **Zugriff:** Nach Aktivierung von Full Access funktionieren Fetch, PR-Abfragen, Merge und Abruf von `main`; der frühere Schreibschutz verhindert diesen Auftrag nicht mehr.
- **Nicht ausgeführt:** Inhaltliche Synthese, Rechtsprüfung, Prompt-, Modell-, Nutzer- oder Screenreader-Tests, Website-/App-Bau und Start weiterer Harnesses.
- **Nächster Schritt:** Der Projektverantwortliche startet JCode mit dem [vorhandenen Prompt](start-prompts.md#jcode) in `.worktrees/jcode`, danach OMP. Beide bleiben auf derselben Baseline und lesen andere Zweitanalysen erst nach Abschluss ihrer eigenen Erstbewertung.

## 2026-10-20 — JCode-Analyse geprüft, gemergt und Übergabe an OMP aktualisiert

- **Harness / Modell:** Codex als Koordinator / GPT-6-Familie laut Sitzung; genaue Modell-/Build-Version nicht separat ermittelt.
- **Ausgangs-Commit auf main:** `30fd4597bf56ec3a3b81b64098f3daab1fb31fb0`.
- **Auftrag:** JCodes gemeldeten Abschluss prüfen, PR #2 übernehmen und den gemeinsamen Status für den verbleibenden OMP-Lauf aktualisieren.
- **Review:** PR-Beschreibung, Diff, vollständige Analyse und Protokoll gelesen. Acht Commits bauen ohne Merge auf `research-baseline-v0.1` auf; jeder Commit und der Gesamtdiff betreffen ausschließlich `agents/jcode/analysis.md` und `agents/jcode/Change-Log-Agents.md`. Alle sechs Auftragsthemen, acht Empfehlungen mit Alternativen und Prüfungen sowie Quellenregister vorhanden. JCode `v0.99.0` (Commit `774613c90`), Provider-Route `openai`; die exakte Modell-ID bleibt ausdrücklich unbekannt.
- **Prüfungen vor dem Merge:** Fetch erfolgreich; `main` sauber und mit `origin/main` synchron. Baseline lokal und remote auf `fe68acae4142baca25408124f85e353fb9786674`. 19 relative Dateilinks der beiden PR-Dateien, paarige Code-Fences und `git diff --check` ohne Befund. Die korrigierte Beispielrechnung nachvollzogen: 0,8 s × 1,0–1,4 m/s = 0,8–1,12 m; mit 1 s zusätzlichem Bildalter 1,8–2,52 m. Die gerundeten Werte im Bericht stimmen; die angenommenen Latenzen sind keine Messwerte.
- **Merge:** GitHub bestätigte `MERGEABLE` / `CLEAN` und einen erfolgreichen GitGuardian-Check. [PR #2](https://github.com/moinsen-dev/percepta-community/pull/2) war bereits kein Draft und wurde mit geprüftem Head `8a4ae1e6d54c4f62ff03c0744803ea37224bbf7a` gemergt. [Merge-Commit `0ad41a5`](https://github.com/moinsen-dev/percepta-community/commit/0ad41a5c965f81b05a9246f6ad918bbbeb9eeffa) hat die bisherige Spitze von `main` und den JCode-Head als Eltern. Alle acht Analyse-Commits und der Remote-Branch bleiben erhalten; Hauptcheckout per Fast-forward aktualisiert.
- **Eigene Änderungen:** `state.md`, `README.md`, gemeinsame Protokollübersicht, OMP-Statushinweis in `agents/codex/start-prompts.md` und dieses Protokoll. Keine eigenen Änderungen in fremden Harness-Ordnern, keine Änderung von `docs/`, `AGENTS.md` oder D-01 bis D-11.
- **Ergebnis und Vorschläge:** Der Bericht ist als abgeschlossene Analyse aufgenommen. Inhaltliche Synthese und Annahme von Empfehlungen stehen aus. JCodes Ablaufstudie mit 3 bis 5 Betroffenen, statische Website ohne Backend und manueller Interviewweg sind vorgemerkt; Reihenfolge und Umfang werden erst in der Synthese bewertet.
- **Quellen / Grenzen:** Git- und GitHub-Zustand sowie JCodes Bericht am 2026-10-20 geprüft. Die gemeldeten 24 URL-Prüfungen, 43 Quellenstichproben und zusätzlichen WCAG-/DSGVO-Prüfungen wurden als JCodes dokumentierte Ergebnisse gelesen, nicht als eigene erneute Quellenvalidierung ausgegeben. Die unbekannte Modell-ID und ausstehende fachliche Prüfungen bleiben sichtbar.
- **OMP:** Worktree `.worktrees/omp` sauber auf `analysis/omp` am unveränderten Baseline-Commit. Startprompt auf den Abschluss der beiden anderen Analysen aktualisiert, ohne deren Befunde zu übernehmen; Verbot des vorzeitigen Lesens beider Berichte beibehalten. Installierte OMP-CLI und Hilfe geprüft; kein OMP-Analyselauf gestartet.
- **Abschlussprüfung:** README-Skript für relative Dateilinks und `git diff --check` ohne Befund. Eigener Diff auf die fünf genannten Dateien beschränkt; D-01 bis D-11, Spezifikationen und fremde Analyseordner gegenüber dem Merge unverändert. Statusangaben und eigene Änderungen redaktionell geprüft; keine persönlichen Beiträge oder Kontaktdaten aufgenommen.
- **Nicht ausgeführt:** Fachliche Synthese, erneute externe Quellenprüfung, Rechtsprüfung, Nutzerstudie, Modellmessung, reale Accessibility-Tests und Website-/App-/Backend-Bau.
- **Nächster Schritt:** OMP unabhängig mit dem [Startprompt](start-prompts.md#omp--oh-my-pi) im vorbereiteten Worktree starten; danach die drei Zweitanalysen durch den Koordinator zusammenführen und strittige Empfehlungen entscheiden.

## 2026-10-20 — DeepSeek als zusätzlichen Lauf nach OMP vorbereitet

- **Harness / Modell:** Codex als Koordinator / GPT-6-Familie laut Sitzung; genaue Modell-/Build-Version nicht separat ermittelt.
- **Ausgangs-Commit auf main:** `388d70ed9c417d16b92db975638c76172f2d9fbf`.
- **Auftrag / Entscheidung D-12:** Der Projektverantwortliche hat einen zusätzlichen DeepSeek-Lauf nach Abschluss von OMP beauftragt. Die gemeinsame Synthese berücksichtigt damit vier Zweitanalysen neben der Codex-Grundlage.
- **Geändert:** `AGENTS.md`, `state.md`, `README.md`, gemeinsame Protokollübersicht, `agents/codex/start-prompts.md`, dieses Protokoll sowie neue Dateien `agents/deepseek/assignment.md`, `analysis.md` und `Change-Log-Agents.md`. Die drei neuen Dateien sind Auftrag und Vorlagen von Codex, keine DeepSeek-Ergebnisse. Keine bestehenden fremden Harness-Ordner bearbeitet.
- **Vorbereitung:** `.worktrees/deepseek` auf `analysis/deepseek` vom unveränderten Tag `research-baseline-v0.1` angelegt. Da der neue Ordner im Tag fehlt, ergänzt Commit `b506a180412a2e7c38bd0fce357aa247a716ad4c` ausschließlich diese drei Dateien. Sein einziger Eltern-Commit ist `fe68acae4142baca25408124f85e353fb9786674`. Fachliche Baseline und tatsächlicher Ausgangs-Commit werden im späteren Bericht getrennt erfasst.
- **Integration der Vorbereitung:** Commit `b506a18` mit Merge-Commit `5078cf595144a89b587f15edba722b9ec6fbf8ff` in `main` übernommen. Damit haben `main` und der DeepSeek-Branch für die neuen Dateien denselben Vorfahren; spätere Analyseänderungen bauen auf den bereits gemeinsamen Vorlagen auf.
- **Unabhängigkeit:** Start erst nach bestätigtem OMP-Abschluss. DeepSeek liest Claude Codes, JCodes und OMPs Berichte erst nach der eigenen Erstbewertung. Sein Worktree erhält keine neueren fachlichen Dokumente oder Analyseberichte von `main`. JCode- und OMP-Prompttexte bleiben unverändert.
- **Offene Angaben:** „DeepSeek“ ist die vom Projektverantwortlichen benannte Arbeitsbezeichnung. Konkretes Harness-Programm, CLI-Version, Modell-ID und Provider werden beim tatsächlichen Start getrennt dokumentiert; keine Identität oder Verfügbarkeit aus dem Namen abgeleitet.
- **Prüfungen:** Fetch, sauberer Ausgangsstand auf `main` und unveränderter Tag lokal/remote geprüft. README-Linkskript im Hauptcheckout und im DeepSeek-Worktree erfolgreich; Whitespace ohne Befund. DeepSeek-Worktree sauber, Vorbereitungs-Commit direkt auf der Baseline, Diff exakt drei neue Dateien, fachliche Ausgangsdokumente unverändert. Gemeinsamer Vorfahr, identische Vorlagen in beiden Worktrees, unveränderte D-01 bis D-11, `docs/` und bestehende fremde Harness-Ordner geprüft. Statusangaben, Startreihenfolge und eigene Änderungen redaktionell geprüft; keine persönlichen Beiträge übernommen.
- **Quellen:** Nutzerauftrag und lokale/remote Git-Referenzen, geprüft am 2026-10-20. Keine neue technische Modellrecherche oder externe Quellenbewertung.
- **Nicht ausgeführt:** DeepSeek-Installation, Prüfung einer konkreten DeepSeek-CLI, Start eines Harnesses, Analyse unter fremdem Namen, fachliche Synthese oder Produktimplementierung.
- **Nächster Schritt:** OMP abschließen; danach startet der Projektverantwortliche DeepSeek im vorbereiteten Worktree mit dem [Startprompt](start-prompts.md#deepseek). Anschließend Ergebnisse prüfen und die gemeinsame Synthese durchführen.

## 2026-10-20 — OMP-Analyse geprüft, gemergt und an DeepSeek übergeben

- **Harness / Modell:** Codex als Koordinator / GPT-6-Familie laut Sitzung; genaue Modell-/Build-Version nicht separat ermittelt.
- **Ausgangs-Commit auf main:** `86f79e1a908911280098ba66644767bc5c3bb006`.
- **Auftrag:** Gemeldeten OMP-Abschluss und PR #3 prüfen, Bericht übernehmen und die Übergabe gemäß D-12 an DeepSeek aktualisieren. Die Synthese bleibt nach dem zusätzlichen DeepSeek-Lauf vorgesehen.
- **Review:** PR-Beschreibung, Diff, vollständige Analyse und Protokoll gelesen. Ein Commit `0bfa4028b84ad1163a5f7ae1cacd487697b175fd` direkt auf der Baseline; ausschließlich `agents/omp/analysis.md` und `agents/omp/Change-Log-Agents.md` geändert. Alle sechs Auftragsthemen vorhanden. Dokumentierter Harness OMP (Oh My Pi), Modell `deepseek/deepseek-v4-pro` laut Laufzeitumgebung; genaue Build-/Versionsnummer unbekannt. Diese Modellangabe ist keine Ausführung des separat beauftragten DeepSeek-Harnesses.
- **Prüfungen vor dem Merge:** Fetch erfolgreich; `main` sauber und mit `origin/main` synchron. Baseline-Tag lokal und remote unverändert auf `fe68acae4142baca25408124f85e353fb9786674`. 25 relative Dateilinks der PR-Dateien, Code-Fences und `git diff --check` ohne Befund. GitHub bestätigte `MERGEABLE` / `CLEAN` und erfolgreichen GitGuardian-Check.
- **Fachlicher Reviewvorbehalt — WCAG:** OMPs Schlussfolgerung, Konformitätsaussagen dürften wegen des rechtlichen Normbezugs nur WCAG 2.1 AA betreffen, ist so nicht belegt. Die gelesene [AccessibleEU-Meldung](https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en) behandelt die rechtliche Referenz beziehungsweise Konformitätsvermutung von EN 301 549. [WCAG 2.2, Abschnitt 5.3](https://www.w3.org/TR/WCAG22/#conformance-claims) beschreibt ausdrücklich technische Konformitätsaussagen zu WCAG 2.2 mit Version, Niveau und Geltungsbereich. **Eigene Schlussfolgerung:** Rechtsbezug und nachgewiesene technische Konformität sind getrennt zu bewerten; OMPs pauschale Beschränkung darf nicht ungeprüft übernommen werden. Das bestehende Prüfziel im Website-Brief bleibt unverändert, eine erreichte Konformität wird weiterhin nicht behauptet.
- **Weitere offene Bewertung:** OMPs Zwei-Stufen-Modell, privater Einreichungsweg und Pilot mit 2–3 Betroffenen bleiben Vorschläge. Die Reihenfolge „Synthese der drei Analysen“ beschreibt OMPs eingefrorenen Ausgangskontext; D-12 ergänzt inzwischen DeepSeek. Keine Quelle oder Modellübereinstimmung ersetzt eigene Nutzer-/Leistungsnachweise oder die ausstehende Rechtsprüfung.
- **Merge:** [PR #3](https://github.com/moinsen-dev/percepta-community/pull/3) war bereits kein Draft. Mit festgelegtem Head `0bfa402…` und Merge-Commit [7c7ea95](https://github.com/moinsen-dev/percepta-community/commit/7c7ea95df5903b69f01885ca7c9ababab84b9625) übernommen; beide bisherigen Branch-Spitzen als Eltern geprüft. Analyse-Commit und Remote-Branch bleiben erhalten. Hauptcheckout per `git pull --ff-only origin main` aktualisiert.
- **Eigene Änderungen:** `state.md`, `README.md`, gemeinsame Protokollübersicht, DeepSeek-Statushinweis in `agents/codex/start-prompts.md` und dieses Protokoll. Fremde Analyseordner, `AGENTS.md`, `docs/` und D-01 bis D-12 unverändert. Der OMP-Bericht bleibt als eigenständiger Bericht erhalten; der Merge ist keine Annahme seiner Empfehlungen.
- **DeepSeek-Übergabe:** OMP-Abschluss vom Projektverantwortlichen am 2026-10-20 bestätigt. `.worktrees/deepseek` sauber auf `analysis/deepseek` am Vorbereitungs-Commit `b506a180412a2e7c38bd0fce357aa247a716ad4c`, dessen Eltern-Commit die unveränderte fachliche Baseline ist. Startprompt bestätigt ausschließlich den Abschlussstatus, überträgt keine OMP-Befunde und erhält das Verbot, fremde Zweitanalysen vor der eigenen Erstbewertung zu lesen.
- **Quellen / Grenzen:** PR-/Git-Zustand und Bericht sowie die zwei oben verlinkten Primärquellen am 2026-10-20 gelesen. Die übrigen OMP-Quellen wurden nicht erneut validiert; keine vollständige Quellenrevision oder rechtliche Prüfung behauptet.
- **Abschlussprüfung:** README-Skript für relative Dateilinks und `git diff --check` ohne Befund; neuer Verweis auf diesen Revieweintrag geprüft. Eigener Diff auf die fünf genannten Dateien begrenzt, alle zwölf Entscheidungszeilen und geschützten Projekt-/Analysepfade gegenüber dem Merge unverändert. DeepSeek-Branch, Vorbereitungs-Commit, Baseline-Elternteil und sauberer Worktree bestätigt. Statusangaben und neue Texte redaktionell geprüft; keine persönlichen Beiträge oder Kontaktdaten aufgenommen.
- **Nicht ausgeführt:** Start von DeepSeek, gemeinsame Synthese, Interview-Pilot, Modellmessung, reale Screenreader-/Tastaturtests oder Website-/App-/Backend-Bau.
- **Nächster Schritt:** Der Projektverantwortliche startet DeepSeek mit dem [aktualisierten Prompt](start-prompts.md#deepseek) in `.worktrees/deepseek`. Nach dessen Bericht die vier Zweitanalysen synthetisieren und dabei den WCAG-Reviewvorbehalt ausdrücklich auflösen.

## 2026-10-20 — DSH-Bericht integriert und vier Zweitanalysen synthetisiert

- **Harness / Modell:** Codex als Koordinator / GPT-6-Familie laut Sitzung; genaue Modell-/Build-Version nicht separat ermittelt.
- **Ausgangs-Commit auf main:** `3d795cb665ed56d7f3234d05e0ef23e0b2465e91`.
- **Auftrag:** Gemeldeten DeepSeek-Abschluss prüfen und den mit D-12 vorgesehenen Vergleich aller vier Zweitanalysen erstellen. Veröffentlichung im bestehenden Koordinator-Ablauf; kein neuer Harness-Lauf.
- **Prüfung vor dem Merge:** Fetch erfolgreich; `main` sauber und mit `origin/main` synchron. Baseline lokal und remote unverändert auf `fe68acae4142baca25408124f85e353fb9786674`. PR #4 samt Beschreibung, Diff, Bericht und Protokoll geprüft: ein Analyse-Commit `d423758feb34dea7a9dcfee860f4736ad2178fc3` direkt auf `b506a180412a2e7c38bd0fce357aa247a716ad4c`; dessen Elternteil ist die Baseline. Gemeinsamer Vorfahr mit `main` ist der Vorbereitungs-Commit. Ausschließlich `agents/deepseek/analysis.md` und eigenes Protokoll geändert. Alle sechs Themen, Laufdaten, 15 relative Dateilinks, Code-Fences und `git diff --check` geprüft.
- **Laufdaten und Unabhängigkeit:** DSH 0.2.1-rc.2 als Web-Sitzung, `deepseek-flash` laut Bericht, Provider abgeleitet, exakte Build-ID unbekannt; kein separater CLI-Prozess. Kenntnis von Stichworten des neueren `main/state.md` offengelegt. Bericht als eingeschränkt unabhängig eingeordnet; kein vollständiges Blindreview behauptet. Diese Angaben wurden nicht durch Nachspielen der Sitzung geprüft. DSH ersetzte Protokoll-Vorlagenhinweise; keine früheren tatsächlichen DSH-Arbeitseinträge entfernt.
- **Merge:** [PR #4](https://github.com/moinsen-dev/percepta-community/pull/4) war kein Draft, `MERGEABLE` / `CLEAN`, GitGuardian erfolgreich. Mit festgelegtem Head `d423758…` per Merge-Commit [1cd561e](https://github.com/moinsen-dev/percepta-community/commit/1cd561ecedb76566d8df42b70e64b737133cf6fa) übernommen. Eltern sind bisheriges `main` und DSH-Head. Analyse-Commit und Branch erhalten; Hauptcheckout per Fast-forward aktualisiert.
- **Eigene Änderungen:** Neue `agents/codex/synthesis.md`; `state.md`, `README.md`, gemeinsame `Change-Log-Agents.md`, Archivhinweis in `agents/codex/start-prompts.md` und dieser angehängte Eintrag. Keine eigenen Änderungen in fremden Analyseordnern, `AGENTS.md` oder `docs/`; D-01 bis D-12 unverändert.
- **Synthese:** Alle vier Berichte entlang der sechs Themen verglichen. Unterschiede, Quellenreichweite und sechs offene Vorschläge mit Alternativen dokumentiert. Folgeauftrag beschreibt Teilnahme-Paket, fiktive Probe, privaten Betrieb und späteren Pilot. Keine technische Anbieterwahl, neue D-Entscheidung oder Freigabe zur Erhebung persönlicher Beiträge.
- **Reviewbefunde:** Endpunkt-Bildrate nicht auf sämtliche Cloud-VLMs verallgemeinern; Mobilio-Versuchsbedingungen unterscheiden; NOA-Vergleich variiert auch die Audioführung. OMPs WCAG-Beschränkung fachlich zurückgewiesen. DSHs behauptete Backend-Pflicht für Vorschau und seine Darstellung der bisherigen Architektur korrigiert. Öffentliche Website ebenfalls nicht vollständig rückholbar; Datenschutzinformation, Teilnahmezustimmung und Rechtsgrundlage unterscheiden. Quellen und begrenzte Ableitungen stehen unmittelbar in der Synthese.
- **Quellen / Abruf 2026-10-20:** Relevante Abschnitte von Google Robotics Streaming, W3C WCAG/WAI, GitHub Verlauf/Löschung, Astro-Skripten und EDSA-Antwort zur Gesundheitsforschung gelesen. Mobilio-Abstract direkt auf arXiv; Nature-Originalseiten nach Weiterleitungsfehler über indexierte Abstract-/Abbildungs-/Methodenauszüge geprüft. EUR-Lex-Volltext durch Browserprüfung blockiert, Erwägungsgrund 35 nur im amtlichen Suchauszug gelesen. Fehlgeschlagene BfDI-/Ministeriumsabrufe nicht als Nachweis verwendet. Keine pauschale erneute Validierung aller Harness-Quellen.
- **Abschlussprüfung:** README-Linkskript und Whitespace-Prüfung ohne Befund; Synthese-Anker und Code-Fences geprüft. Eigener Änderungsumfang exakt sechs Dateien einschließlich neuer Synthese; alle zwölf Entscheidungszeilen, gemeinsame Spezifikationen und fremde Analyseordner unverändert. Eigenes Protokoll ausschließlich ergänzt. DeepSeek-Worktree sauber am Analyse-Commit; Baseline unverändert. Neue Texte auf Statuswidersprüche und persönliche Angaben durchgesehen; zusätzliche Suche nach E-Mail-Adressen und Schlüsselmustern ohne Treffer.
- **Nicht ausgeführt:** Modellaufrufe, Harness-Starts, echte oder fiktive Chat-Tests, Interviews, Personenansprache, Rechtsprüfung, GitHub-Löschprobe, Accessibility-/Gerätetests, Website/App/Backend oder Deployment.
- **Nächster Schritt:** Projektverantwortlicher wählt die sechs offenen Vorschläge aus der [Synthese](synthesis.md). Danach den beschriebenen Folgeauftrag konkret beauftragen und gemeinsame Spezifikationen entsprechend aktualisieren.


## 2026-10-20 — Astro-Website und Teilnahme-Paket v0.1

- **Harness / Modell / Ausgangspunkt:** Codex als Koordinator; Modellfamilie laut Sitzung GPT-6, genaue Build-ID unbekannt. Ausgangs-Commit `45dd0b0384a8bb64620b3db4ff0143f3d13fc794` auf sauberem `main`.
- **Auftrag:** Website inklusive vier empfohlener Arbeitsschritte beginnen. Nutzer bestätigt Astro, Cloudflare und `percepta.moinsen.dev` (D-13/D-14). Keine persönliche Einreichung oder Kontaktaufnahme ohne tatsächlichen Betrieb.
- **Geändert:** Astro-Konfiguration, `package.json`/Lockfile, TypeScript-/Wrangler-/Playwright-Konfiguration, `src/`, `public/`, `tests/`, `.github/workflows/website.yml`, `.openai/hosting.json`, `.gitignore`; `AGENTS.md`, `README.md`, `state.md`; Website-/Interview-Spezifikation und DE/EN-Prompts; neue manuelle DE/EN-Vorlagen und `docs/participation-pilot.md`; eigener Auftrag, `participation-dry-run.md`, `website-validation.md` und dieses Protokoll. Fremde Harness-Ordner und Worktrees unverändert.
- **Umgesetzt:** 14 statische HTML-Seiten und 4 Textdownloads, Deutsch/Englisch, Kern ohne JavaScript. Kopieren mit Rückmeldung/Fehleralternative, Sprachwechsel, semantische Struktur, Sprunglink, mobile Darstellung. Kurze Prompts mit 266 deutschen bzw. 275 englischen Wörtern: nur Entwurf, keine Tools/Issues/Übermittlung. Manuelle Vorlage aus derselben Quelle auf Website und im Download. Keine persönliche Datenspeicherung, Analytics oder fingierte Kontaktadresse.
- **Vier Schritte:** Entwurfshilfen implementiert; fiktive Probe redaktionell dokumentiert; Betrieb/Pilot als konkreter Leitfaden vorbereitet; spätere Auswahl und Messung weniger Alltagsabläufe beschrieben. Externe KI-Chat-Probe, reales Betriebsverfahren, Pilot und Modellvergleich sind ausdrücklich nicht durchgeführt.
- **Prüfungen:** `npm run check` 0 Fehler/Warnungen; Build erfolgreich; 19/19 Playwright-Tests gegen lokale Cloudflare-Runtime einschließlich axe, Tastatur, Kopieren/Fehlerfall, Links, Reflow bei 320 Pixeln, Textdownload, ohne JavaScript, Headern und 404. Desktop/Mobil-Screenshots gesichtet. Wrangler-Dry-run erfolgreich. Relative Markdown-Dateilinks und `git diff --check` sauber. Baseline lokal und remote unverändert `fe68acae4142baca25408124f85e353fb9786674`; `origin/main` vor Änderungen auf Ausgangs-Commit.
- **Korrekturen:** Zunächst blockierte die CSP Astros automatisch eingebautes Inline-Script. Build auf externe Script-Datei umgestellt und alle Browserprüfungen erneut erfolgreich ausgeführt. Node-Typen für Testdatei ergänzt; Typprüfung erneut erfolgreich.
- **Quellen / Annahmen:** Offizielle Astro-/Cloudflare-/WCAG-Dokumentation am 2026-10-20 sowie installierter Astro-Code und npm-/GitHub-Release-Metadaten. Links im Website-Prüfbericht. Alle Beispielsituationen sind erfunden; keine ursprünglichen persönlichen Beiträge übernommen. Bestehender Cloudflare-Login geprüft, keine Zugangsdaten ausgegeben oder gespeichert.
- **Deployment / Grenzen:** Sites-Projekt einmalig angelegt und ID unmittelbar gespeichert. Die durch die Laufzeit vorgegebene Sites-Veröffentlichung ist eine getrennte Hosting-Instanz, kein Deploy im bisherigen Cloudflare-Account. Geschützte Vorschau wird nach geprüftem Source-Push veröffentlicht; Ergebnis folgt als eigener Eintrag. Öffentliche Domain und aktive Teilnahme warten auf angefragte Betreiber-/Kontaktangaben, Hosting-Informationen und Betriebsentscheidungen. Keine Screenreader-/Nutzer-/Rechtsprüfung behauptet. Kein öffentlicher DNS-Eintrag geändert.
- **Nächster Schritt:** GitHub und geschützte Vorschau verifizieren; Betreiber-/Kontaktangaben ergänzen, öffentliche Zieldomain anbinden, reale Accessibility-/Chat-Proben und danach privater Pilot gemäß Leitfaden.
