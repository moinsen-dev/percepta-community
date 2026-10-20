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
