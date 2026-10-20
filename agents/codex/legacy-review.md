# Früheres Percepta — statische Bestandsaufnahme

Datum: 2026-10-20. Tatsächlicher Harness: Codex. Status: **Lokale Referenzkopie ausgewertet; keine Laufzeitprüfung.**

## Ergebnis

Das alte Percepta war bereits als Alltagshilfe angelegt. Der untersuchte Hauptablauf unterstützt im Code eine kurze Bildbeschreibung, detailliertes Lesen und eine gesprochene Frage zu einem Kamerabild. Einkaufs-, Restaurant- und Haushaltssituationen sind in den früheren Anforderungen enthalten. Die Erweiterung unseres Vorhabens über Navigation hinaus passt zu dieser Erfahrungsquelle.

Die wertvollste Grundlage sind konkrete Alltagssituationen und Bedienungsanforderungen. Die alte Architektur wird nicht übernommen. Der Code enthält echte Implementierungen, parallele Interaktionswege und unvollständige Wahrnehmungsverfahren. Vorhandene Module oder bestandene Logiktests belegen weder eine funktionierende Gesamtanwendung noch sichere Navigation.

Das dokumentierte Reboot-Ziel war bereits, wenige Routinen zuverlässig zu machen. Im ausgewerteten Abnahmeprotokoll ist jedoch keiner der zehn Alltagstests als bestanden markiert. Das erklärt nicht abschließend, warum der frühere Versuch die Erwartungen nicht erfüllt hat; es zeigt eine konkrete Nachweislücke.

## 1. Untersuchte Version und Vorgehen

Die Referenzkopie wurde vom Projektverantwortlichen unter `private/legacy-percepta/` bereitgestellt. `private/` ist in der neuen Projektgrundlage ausgeschlossen. Keine alten Dateien oder Git-Metadaten übernommen, keine Branches gewechselt.

| Referenz in der lokalen Kopie | Spitzencommit | Commitdatum |
| --- | --- | --- |
| Default-Branch `origin/develop`, zugleich ausgecheckter Branch | `c632494009eb8ee0d7dd62011cf4f21c32016d5b` | 2026-02-07, 22:41:08 +01:00 |
| Jüngster enthaltener Remote-Branch `origin/codex/reboot-0.2-week1` | `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5` | 2026-05-06, 08:29:35 +02:00 |

**Auswahl:** Den jüngsten Spitzencommit der lokal enthaltenen Remote-Referenzen untersuchen. Der ausgewählte Branch liegt fünf Commits vor `develop`, ohne abweichende Commits auf `develop`. Im Vergleich ändern sich unter `ios/Apps`, `ios/Core`, `ios/Infrastructure`, `ios/Features` und `ios/Tests` zusammen 38 Dateien, mit 2.581 hinzugefügten und 290 entfernten Zeilen.

Alle Codefundstellen beziehen sich auf Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5`, gelesen über `git show`, ausdrücklich nicht auf den älteren Arbeitsbaum. Ein Commitdatum ist kein Branch-Aktualisierungsdatum. Ohne erneuten Remote-Abgleich ist nicht bestätigt, ob GitHub inzwischen weitere Stände enthält.

Geprüft wurden Einstieg, Hauptinteraktion, relevante Kamera-/Sprach-/KI-Datenflüsse, exemplarische Wahrnehmungsmodule, Tests, Statusdokumente und eine lokale Interview-Zusammenfassung. Dies ist keine vollständige Prüfung jedes Moduls, jeder Abhängigkeit oder der gesamten Git-Historie. Keine Installation, Modellanfrage, App-Ausführung oder alten Projektskripte gestartet.

## 2. Tatsächlicher Hauptablauf

Das alte Projekt ist eine native Swift-/SwiftUI-Anwendung mit iOS- und watchOS-Apps sowie vielen Swift-Package-Modulen. Das Paketmanifest nennt iOS 18, watchOS 11 und macOS 14; diese historische Projektkonfiguration ist keine Plattformentscheidung für den Neustart.

Der normale iOS-Einstieg führt nach den Einführungsschritten von `ContentView` zu `AssistantView` und `AssistantViewModel`:

1. Kurze Beschreibung oder detailliertes Lesen auslösen; alternativ Sprache mit `SpeechCaptureService` erfassen.
2. Das letzte Kamerabild beziehen und gegebenenfalls Orts-/Routenkontext ergänzen.
3. Online Bild und Frage über `OpenAIVisionClient` versenden, die vollständige Textantwort abwarten und lokal vorlesen.
4. Offline Apple-Vision-Texterkennung und Barcode-Erkennung verwenden. Das ersetzt keine allgemeine Szenenanalyse und keine freie Beantwortung der gesprochenen Frage.

**Quellen:** `ios/Apps/PerceptaApp/ContentView.swift:17–27`; `ios/Apps/PerceptaApp/AssistantViewModel.swift:265–378, 452–482, 916–1025`; `ios/Infrastructure/OpenAIClient/Sources/OpenAIVisionClient.swift:78–160`.

Der aktive Vision-Client verwendet einen REST-Aufruf mit einem Bild und höchstens einer aktuellen Frage. Im Request wird keine Gesprächshistorie mitgesendet; Audio-/Antwortstreaming findet in diesem Pfad nicht statt. Sein historischer Standardmodellname ist `gpt-5-mini`. Daraus folgt keine Aussage über heutige Verfügbarkeit oder Eignung.

Der ebenfalls vorhandene `VoiceLoopOrchestrator` mit Realtime-/WhisperKit-Anbindung gehört zu `MainInteractionView`. Im untersuchten App-Verzeichnis wurde für diese View nur der Preview-Aufruf gefunden; `ContentView` öffnet sie nicht. Die übergreifende Architekturbeschreibung darf deshalb nicht mit dem normalen Einstiegsweg gleichgesetzt werden.

Navigation ist trotzdem teilweise angebunden: `AssistantViewModel` kann eine Routensitzung starten sowie einen Umgebungsmodus mit YOLO und FastVLM. Das ist ein zusätzlicher Pfad, nicht der Offline-Ersatz der normalen Fragefunktion. Quellen: `ios/Apps/PerceptaApp/AssistantViewModel.swift:649–690, 776–818`; `ios/Apps/PerceptaApp/MainInteractionView.swift:1158–1189`; `ios/Core/PerceptaAudio/Sources/VoiceLoopOrchestrator.swift:414–461`.

## 3. Zuordnung zu unserem erweiterten Vorhaben

| Bereich | Im untersuchten Stand vorhanden | Grenze des Nachweises |
| --- | --- | --- |
| Einkaufen | Bildfrage und detailliertes Lesen im Hauptablauf; OCR/Barcode offline; zusätzliche Services für Produkt-, Preis- und Datumsinformationen | Keine erfolgreiche Einkaufsabnahme dokumentiert. Die speziellen Produkt-/Menü-/Dokumentservices werden im Hauptablauf nicht direkt aufgerufen. Barcode-Ziffern allein identifizieren kein Produkt. |
| Fragen an die App | Gesprochene Frage plus Kamerabild an den Vision-Client | Kein nachgewiesener mehrstufiger Dialog mit Rückbezug; offline wird die Frage nicht inhaltlich beantwortet. |
| Interaktion mit Menschen | Anforderungen zu Selbstständigkeit in Service- und Alltagssituationen; zusätzlich separate Hörassistenzmodule | Kein dedizierter Ablauf zum Vorbereiten einer Bitte oder Unterstützen eines Gesprächs im untersuchten Hauptpfad gefunden. Hörassistenz ist kein Beleg für diesen Bedarf blinder Menschen. |
| Orientierung und Navigation | POI-/Routensitzungen, Umgebungsmodus, Objekt-/Gefahrenmodule | Teilweise grobe Heuristiken und Platzhalter; kein Nachweis für Bordsteinhöhe, sichere Straßenquerung, freie Zugtür oder freie Ausweichroute. |

Zusätzliche Fundstellen: `ios/Features/VisualAssist/Sources/Services/ProductIdentificationService.swift:68–96, 295–326`; `ios/Package.swift:153–223`; `ios/UAT_0.2_STATUS.md:13–46`.

## 4. Wichtigste technische Befunde

### L-01 — Geometrie und Warnungen sind nicht belastbar nachgewiesen

`TerrainDetectionService.detectEdges` erstellt einen Kantenfilter, verwirft das zugeschnittene Ergebnis und erzeugt anschließend Hinweise an vier festen Bildpositionen. Es prüft dort keine Kantenstärke. Entfernungen werden aus der Bildhöhe abgeleitet; die Tiefenanalyse liefert ein leeres Array. Dies ist keine implementierte Erkennung von Bordsteinen oder Treppen auf-/abwärts.

**Fundstelle:** `ios/Features/SafetyAlerts/Sources/Services/TerrainDetectionService.swift:163–218, 288–339`. Dieser Service wurde im untersuchten App-Einstieg nicht als angebundener Pfad gefunden. Sein Befund ist kein beobachtetes Fehlverhalten der laufenden Hauptansicht.

Im tatsächlich angebundenen Umgebungsmodus schätzt `YOLODetector` die Entfernung anhand der Bounding-Box-Fläche auf feste Werte von 2, 5, 10 oder 20 Metern. Ampeln werden anhand des Objektlabels gemeldet; dieser Alert-Code unterscheidet keine Signalzustände. `AwarenessSession` ordnet VLM-Antworten über englische Schlüsselwörter als freie Strecke oder Gefahr ein und reicht die Antwort zur Ansage weiter.

**Fundstellen:** `ios/Infrastructure/LocalML/Sources/YOLODetector.swift:360–400`; `ios/Apps/PerceptaApp/AwarenessSession.swift:257–298`.

**Folgerung:** Beobachtung, Entfernung, Wegbezug und Bewegungsanweisung getrennt prüfen. Ein neues Vision-/Reasoning-Modell kann Kontext ergänzen; sein Text ersetzt keine validierte Geometrie oder einen Nachweis, dass ein Weg frei ist.

### L-02 — Der VLM-Konfidenzwert misst sprachliche Merkmale

`FastVLMService.estimateConfidence` startet mit einem festen Wert und verändert ihn anhand von Textlänge und Wörtern wie Objekt- und Richtungsbezeichnungen. Die Berechnung vergleicht die Aussage nicht mit Bildreferenzen und ist nicht als Wahrscheinlichkeit der sachlichen Richtigkeit kalibriert.

**Fundstelle:** `ios/Infrastructure/LocalML/Sources/FastVLMService.swift:424–446`.

**Folgerung:** Solche Werte nicht für Sicherheitsfreigaben oder die Aussage „zuverlässig erkannt“ übernehmen. Modellqualität anhand vorher festgelegter Aufgaben und geprüfter Referenzen messen, einschließlich fehlender Sicht und berechtigtem Nichtantworten.

### L-03 — Offline und Dialog waren enger als die Architekturübersicht

Der Hauptablauf besitzt einen sinnvollen OCR-Fallback, aber keine gleichwertige Offline-Konversation. Der alternative Voice-Loop transkribiert offline mit WhisperKit und formuliert eine Rückmeldung zum Gehörten; er belegt damit noch keine lokale visuelle Fragebeantwortung. FastVLM enthält echten Modelllade-/Inferenzcode, setzt aber lokal verfügbare Modelldateien voraus.

**Fundstellen:** `ios/Apps/PerceptaApp/AssistantViewModel.swift:990–1020`; `ios/Core/PerceptaAudio/Sources/VoiceLoopOrchestrator.swift:414–461`; `ios/Infrastructure/LocalML/Sources/FastVLMService.swift:188–231`.

**Folgerung:** Für jede Fähigkeit separat festlegen, was ohne Netz funktioniert und wie eine Einschränkung angesagt wird. Gesprächskontext und Rückfragen als eigene Funktion testen. Keine pauschale Offline-Zusage aus einzelnen lokalen Komponenten ableiten.

### L-04 — Tests belegen noch keine nutzbare Alltagshilfe

Die historische Testmatrix meldet Pakettests als bestanden, UI-/Soak-Prüfungen aber wegen eines Simulator-Runner-Problems als blockiert. Das UAT-Protokoll führt acht Szenarien als manuell ausstehend und zwei als blockiert. Darunter sind Produkt-/Preislesen, Post, Offline-Nutzung und VoiceOver.

FastVLM-Unit- und Integrationstests überspringen macOS-Hostläufe. Integrationstests überspringen außerdem fehlende Modelldateien und verwenden einen lokalen absoluten Modellpfad. Der Test mit einem roten Bild prüft nicht, ob tatsächlich Rot erkannt wurde, sondern nur nicht leere Ausgabe, positiven Konfidenzwert und erzeugte Tokens. Solche Checks testen technische Teilfunktionen, nicht die Richtigkeit der Wahrnehmung.

**Fundstellen:** `ios/TEST_MATRIX_0.2.md:31–46`; `ios/UAT_0.2_STATUS.md:13–46`; `ios/Tests/UnitTests/LocalMLTests/FastVLMServiceTests.swift:36–41`; `ios/Tests/IntegrationTests/FastVLMIntegrationTests.swift:33–46, 106–122`.

**Folgerung:** Ausgeführte, übersprungene und blockierte Tests getrennt ausweisen. Geräteprüfung und tatsächliche Aufgabenerledigung mit Betroffenen benötigen eigene Nachweise. Die damaligen Runner-Probleme wurden hier nicht reproduziert.

### L-05 — Bedienung muss am echten Ablauf geprüft werden

Der Hauptablauf enthält Sprachausgabe, Haptik, lokalisierte Labels, eine Zustandsanzeige und beschriftete Schaltflächen. Daneben verwendet er Gesten für Halten/Sprechen und doppeltes Tippen. Die beiden sichtbaren Hilfsschaltflächen lösen Beschreiben und detailliertes Lesen aus; die Standard-Aktion des Accessibility-Elements löst Beschreiben aus.

Daraus lässt sich keine vollständige VoiceOver-Bedienbarkeit der Fragefunktion ableiten. Das bestehende UAT-Protokoll lässt diese Prüfung offen. Auch die Eingabe eines eigenen API-Schlüssels ist im bisherigen Ablauf eine Einrichtungshürde, deren Zumutbarkeit nicht nachgewiesen ist.

**Fundstellen:** `ios/Apps/PerceptaApp/AssistantView.swift:25–45, 254–282, 305–314`; `ios/Apps/PerceptaApp/AssistantViewModel.swift:161–205, 920–923`; `ios/UAT_0.2_STATUS.md:39–46`.

**Folgerung:** Sichtbare, fokussierbare Aktionen für jede Kernaufgabe; gleichwertige Bedienung ohne Spezialgesten prüfen. Feedback bei Aufnahmebeginn, Verarbeitung, Abbruch, fehlendem Bild und Netzverlust gehört zu den Abnahmekriterien.

### L-06 — Diagnosecode ist keine Vorlage für einen öffentlichen Dienst

Beim normalen App-Start ist ein Upload vorhandener Crashberichte an einen fest eingetragenen lokalen HTTP-Endpunkt vorgesehen; ausgeschlossen ist dort nur der UI-Testmodus. Der Telemetrieclient ist standardmäßig aktiviert und kann vollständige Modell-/Sprachausgabetexte übertragen. Im Haupt-ViewModel werden erkannte Fragen und Antworten in die Konsole geschrieben.

**Fundstellen:** `ios/Apps/PerceptaApp/PerceptaApp.swift:17–40`; `ios/Infrastructure/Analytics/Sources/DebugTelemetry.swift:50–57, 318–353, 446–469`; `ios/Apps/PerceptaApp/AssistantViewModel.swift:334–337, 927–939`.

**Grenze:** Keine Übertragung beobachtet und kein Nachweis, dass echte Nutzerdaten offengelegt wurden. Nicht jeder Telemetrieaufruf gehört zum aktuellen Hauptpfad. Netzwerkadressen und Gerätekennungen werden hier nicht übernommen.

**Folgerung:** Für den Neustart Datenflüsse ausdrücklich definieren. Diagnostik standardmäßig ohne Gesprächsinhalte, Bilder oder persönliche Dokumenttexte gestalten. Modellverarbeitung, technische Diagnostik und die freiwillige öffentliche Interviewzusammenfassung bleiben verschiedene Zwecke.

### L-07 — Statusdokumente und Code müssen zusammen gelesen werden

Die Testmatrix verweist noch auf einen CI-Workflow. Im untersuchten Spitzencommit gibt es jedoch keine Dateien unter `.github/workflows`; der spätere Commit `b393bda` entfernte die Remote-CI. `CLAUDE.md` und `ios/README.md` beschreiben das Projekt als ruhend. Das Reboot-WIP konzentriert sich auf wenige Routinen, während der Code weiterhin Navigations- und Umgebungsfunktionen enthält.

**Folgerung:** Eine Roadmap, ein Agentenbericht oder ein Testplan ist kein Implementierungsnachweis. Für neue Funktionen jeweils Einstieg, tatsächlichen Datenfluss und Abnahmebeleg verknüpfen. Das gilt ebenso für die kommenden Analysen durch Claude Code, JCode und OMP.

## 5. Frühere Nutzererkenntnisse

Eine lokale Interview-Zusammenfassung wurde als Text gelesen. Ihre Übereinstimmung zwischen ausgechecktem und untersuchtem Stand wurde über die Git-Blob-ID geprüft. Es handelt sich um eine bereits zusammengefasste Quelle, nicht um ein hier überprüftes Originaltranskript oder einen neuen Nutzertest. Entstehung, Repräsentativität und Freigabe zur erneuten Veröffentlichung sind nicht bestätigt.

Nur verallgemeinerte Bedürfnisse werden übernommen:

- Im Geschäft: Produkte, Etiketten und Preise selbstständig unterscheiden; wenige Schritte und wenig zusätzliche akustische Belastung.
- In Gastronomie und Haushalt: gedruckte Informationen gezielt lesen lassen und Dinge unterscheiden.
- Unterwegs: Orientierung, Hindernisse und Richtung verständlich vermitteln.
- In der Bedienung: unmittelbar hör- oder fühlbare Rückmeldung, verständliche Fehler, anpassbares Sprechtempo und klare Offline-Grenzen.
- Im sozialen Kontext: selbst entscheiden können, wann und wie Unterstützung durch andere Menschen gewünscht ist.

Keine Namen, wörtlichen Aussagen, Diagnoseangaben oder vollständigen Wunschlisten übernommen. Die Quelle unterstützt neue Interviewfragen; sie bestimmt nicht stellvertretend die Bedürfnisse lebenslang blinder Menschen.

Für die nächste Erhebung besonders relevant: Was bedeutet eine Frage an die App im Gegensatz zu einer Bitte an einen Menschen? Welche Information fehlt genau? Wann ist die Ansage rechtzeitig? Wie erkennt die Person, dass die Kamera den relevanten Gegenstand erfasst? Wann ist Unterstützung durch Menschen erwünscht?

## 6. Empfehlungen für den Neustart

| Beibehaltene Idee | Neu prüfen | Nicht übernehmen |
| --- | --- | --- |
| Konkrete Alltagssituation als Ausgangspunkt | Prioritäten über mehrere Betroffene und unterschiedliche Seh-/Nutzungserfahrungen | Eine einzelne Interview-Zusammenfassung als vollständige Spezifikation |
| Kurze Beschreibung, gezieltes Lesen, konkrete Frage | Kameraausrichtung, Rückfragen und zusammenhängender Dialog | Pauschale Offline- oder Realtime-Zusagen aus vorhandenen Modulnamen |
| Sprachausgabe, Haptik und verständliche Wiederaufnahme nach Fehlern | Vollständiger Ablauf mit VoiceOver und realen Geräten | Gesten als einzige Möglichkeit einer Kernaktion |
| Aufgabenbezogene lokale Verarbeitung als mögliche Ergänzung | Aktuelle VLMs/Reasoning-Modelle gegen OCR und einfachere Lösungen messen | Textheuristiken als Wahrheitswahrscheinlichkeit oder Entfernungsmessung |
| Klare, kleine Abnahmeszenarien | End-to-End-Erfolg, Fehlantworten, Antwortzeit bis zur hörbaren Information und Wiederherstellung | Übersprungene oder nur strukturelle Tests als Nachweis einer funktionierenden Alltagshilfe |

Die bestätigte Reihenfolge bleibt: Dokumentationsgrundlage, unabhängige Analysen, zugängliche Beteiligungsseite, Bedarfserhebung; anschließend eingegrenzte App-Experimente. Keine Plattform-/Modellwahl und kein App-Bau durch diesen Bericht.

Für spätere Experimente bieten sich vier getrennte Aufgaben an: Produkt/Preis lesen; Frage zu einer Szene mit Rückfrage beantworten; eine Bitte in einer Alltagssituation vorbereiten; ein Hindernis in kontrollierter Umgebung beschreiben. Die ersten drei dürfen ohne Navigation bewertet werden. Für jede Aufgabe vorher Erfolg, zulässige Unsicherheit, Abbruch und Messverfahren festlegen. Aktuelle Modellkandidaten bleiben Gegenstand der [Recherche](../../docs/research.md); dieser Review liefert keine neuen Modellbenchmarks.

## 7. Prüfung und Übergabe

- Lokale Referenzen, Commitdaten, Vorfahrenbeziehung und begrenzten Code-Diff geprüft.
- Hauptaufrufpfad und die genannten Fundstellen am festgehaltenen Commit gelesen.
- Frühere Bedarfsquelle lokal gelesen; keine Rohinhalte in die gemeinsame Dokumentation kopiert.
- Clone unverändert belassen; keine Abhängigkeiten installiert, keine Builds, Modelle oder Tests ausgeführt.
- Dokumentationsprüfungen und verbleibende Veröffentlichungsgrenzen: [Validierung](validation.md), [Projektstand](../../state.md).

Die früheren GitHub-/DNS-Zugriffsfehler bleiben im [Änderungsprotokoll](Change-Log-Agents.md) nachvollziehbar. Durch die bereitgestellte Kopie blockieren sie diese statische Analyse nicht mehr.
