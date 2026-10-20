# Codex — Erstanalyse

Datum: 2026-10-20. Tatsächlicher Harness: Codex. Modellfamilie laut Sitzung: GPT-6; genaue Modell-/Build-Version nicht separat ermittelt.

Ausgangslage: leerer Workspace, noch kein Git-Commit. Diese Analyse gehört zur ersten Dokumentationsbaseline; sie ist keine unabhängige Zweitanalyse.

## Ergebnis und Empfehlung

Die sinnvolle nächste Lieferung ist eine zugängliche Beteiligungsseite mit kontrollierter Bedarfserhebung. Die App zur Alltagshilfe sollte erst nach Priorisierung durch Betroffene und begrenzten Machbarkeitsversuchen spezifiziert werden. Der inzwischen ausdrücklich erweiterte Umfang umfasst Einkaufen, Fragenstellen, Interaktion mit Menschen sowie Orientierung und Navigation. Die Website ist bereits als Astro-Projekt in Deutsch und Englisch beschlossen; Backend, Hosting und App-Plattform bleiben offen.

## 1. Machbarkeit und Evidenz

Die gewünschten Aufgaben reichen von Text-/Objekterkennung bis zu zeitkritischen Bewegungsentscheidungen. Diese Bandbreite erfordert getrennte Nachweise. Eingang finden, Treppen erkennen und eine Straße überqueren sind keine gleichwertigen Varianten derselben Funktion.

Produktfragen, das Formulieren einer Bitte und die Unterstützung eines Gesprächs benötigen ebenfalls eigene Erfolgskriterien. Der Nutzen eines dialogischen Assistenten sollte mit einfachen Text-/Sprachangeboten verglichen werden; nicht jede Hilfe setzt Kameranutzung oder räumliche Navigation voraus. Das ist eine neue Arbeitshypothese aus der Umfangserweiterung.

Aktuelle räumliche Modelle sind relevante Kandidaten; ihre Dokumentation belegt keinen verlässlichen Fußgängernavigator. Besonders die dokumentierte Streaming-Bildrate und zusätzliche Verarbeitung/Sprachausgabe müssen im Gehkontext gemessen werden. Eine plausible Ausweichanweisung ohne Sicht auf den Ausweichweg ist kein ausreichendes Ergebnis.

Quellen und Prüfstatus: [R-01 bis R-13](../../docs/research.md). Keine Kosten- oder Geschwindigkeitswerte erfunden, keine Modell-API aufgerufen.

## 2. Nutzerbedürfnisse

Die ursprüngliche Anfrage ist ein guter Ausgangspunkt, aber keine vollständige Anforderungsstudie. Eine einzelne konkrete Alltagssituation ist für das erste Interview ausreichend. Information über Zeitpunkt, Belastung und bestehende Hilfen ist ebenso relevant wie gewünschte Features.

Zusätzliche Hindernisse auf Leitstreifen sind ein eigener Fall. Ein akustischer Nähehinweis allein beantwortet nicht, wo ein Hindernis steht oder wie es erreichbar umgangen werden kann. Smartphone-Haltung und freie Hände gehören in die Bedarfserhebung.

## 3. Barrierefreiheit

Die Teilnahme darf weder GitHub-Kenntnisse noch ein KI-Abonnement voraussetzen. Prompt und manuelle Eingabe sollten denselben Zusammenfassungsweg nutzen. Semantisches HTML, wenige interaktive Komponenten und gleichwertige Sprachfassungen reduzieren die Einstiegshürde.

Automatische Prüfungen sind erforderlich, aber kein Ersatz für tatsächliche Screenreader-Nutzung. Die Interviews selbst sollten kurz, unterbrechbar und nicht auf visuelle Kontrolle angewiesen sein. Es wurde noch kein Nutzertest durchgeführt.

## 4. Architektur und Zusammenarbeit

Die Dokumentation ist die einzige aktuelle Implementierung. Eine kleine Astro-Seite mit separat definiertem serverseitigem Einreichungsweg erscheint als Arbeitsrichtung angemessen. Die Wahl des Dienstes muss Moderation, Betrieb und Datenverarbeitung berücksichtigen; eine Datenbank wird jetzt nicht angelegt.

Für die spätere App ist lokale Wahrnehmung plus kontextuelles Reasoning eine Hypothese. Noch kein Framework, Modellanbieter oder mobiles Betriebssystem festlegen.

Getrennte Analyseordner und Branches machen Vorschläge überprüfbar. Alle Zweitanalysen benötigen denselben Ausgangs-Commit. Ein Koordinator integriert Ergebnisse mit Begründung; Übereinstimmung mehrerer Modelle ist kein empirischer Nachweis.

## 5. Interview-Veröffentlichung

Größtes unmittelbar lösbares Risiko ist eine versehentliche öffentliche Preisgabe. Ein neutraler Titel, verallgemeinerter Kontext und Vorschau sind daher Teil der inhaltlichen Schnittstelle. Veröffentlichung und Namensnennung brauchen getrennte Entscheidungen.

Der direkte GitHub-Weg ist nur pseudonym, wenn das persönliche Konto sichtbar bleibt. Der geplante Projektkonto-Weg reduziert öffentliche Zuordenbarkeit, benötigt aber echte private Moderation und darf keinen absoluten Anonymitätsanspruch erheben.

Moderation darf nicht ohne erneute Freigabe den Inhalt verändern. Der künftige Betreiber muss vor Aktivierung einen Rückfrage-/Rücknahmemechanismus ohne verpflichtendes persönliches GitHub-Konto festlegen. Die Prompt-Entwürfe benennen den noch nicht aktiven Status.

## 6. Kleinster nächster Schritt

Die drei Zweitanalysen auf dieser Grundlage durchführen. Danach eine kurze Entscheidungssynthese mit konkretem Website-Umfang, Betreiber-/Moderationsprozess, Hosting und Lizenz erstellen. Erst dann die Website bauen und mit Screenreader sowie Betroffenen erproben.

## Offene Punkte und Grenzen

- Das frühere Repository ist inzwischen anhand einer bereitgestellten lokalen Kopie statisch untersucht; siehe den nachfolgenden Nachtrag. Laufzeit und heutiger Remote-Stand sind nicht geprüft.
- Kein Teilnehmerfeedback zu den neuen Interview-Prompts; bisher nur redaktionelle Szenarienprüfung.
- Keine belastbare Aussage über Geräteleistung, Datenschutzkonformität eines noch nicht existierenden Dienstes oder sichere Mobilitätsanweisungen.
- Marken-/Domainverfügbarkeit und Finanzierung noch nicht untersucht; Name als Nutzerentscheidung übernommen.
- Publikationszugriff und Git-Status werden in [state.md](../../state.md) und im [Protokoll](Change-Log-Agents.md) aktuell gehalten.

## Nachtrag: früheres Percepta untersucht

Am 2026-10-20 den jüngsten lokal enthaltenen Branch `codex/reboot-0.2-week1` am Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5` gelesen. Die [Bestandsaufnahme](legacy-review.md) enthält Fundstellen, Grenzen und Übernahmeempfehlungen.

Das alte Projekt bestätigt den breiteren Ausgangspunkt: Lesen, Einkaufen und Fragen zu einer Szene waren bereits vorgesehen. Eine frühere Interview-Zusammenfassung betont wenige Bedienhandlungen, sofortige Rückmeldung und verständliche Fehler. Das ist eine einzelne Erfahrungsquelle, keine repräsentative Nutzerstudie; persönliche Inhalte wurden nicht übernommen.

Die Untersuchung stärkt die Empfehlung, konkrete Aufgaben und den durchgängigen Ablauf zu bewerten. Der normale Einstieg nutzt Bild plus Frage über REST und lokale Sprachausgabe; offline OCR/Barcode. Zusätzliche Realtime-/Modellmodule stehen nicht für einen durchgängig integrierten Dialog. Im historischen UAT-Protokoll fehlt für alle zehn Alltagsszenarien eine bestandene Abnahme.

Entfernungsheuristiken und aus Textwörtern berechnete Konfidenzwerte dürfen keine Grundlage für zuverlässige Bewegungsanweisungen werden. Neue VLMs und räumliche Reasoning-Modelle müssen ihren Nutzen gegenüber einfacheren Verfahren in konkreten Aufgaben zeigen. Die Architektur des Altprojekts wird nicht übernommen; Plattform und Anbieter bleiben offen.
