# DeepSeek — unabhängige Analyse nach OMP

## Laufdaten

| Feld | Wert |
| --- | --- |
| Datum | 2026-10-20 |
| Tatsächliches Harness | DeepSeek Harness (DSH), Web-Sitzung; CLI-Paket `@deepseek-ai/dsh` |
| Harness-Version | `0.2.1-rc.2` (Paketmanifest im npx-Cache) |
| Modell | `deepseek-flash` laut Laufzeitumgebung |
| Provider | DeepSeek, abgeleitet aus der Modellbezeichnung |
| Exakte Modell-/Build-ID | unbekannt; nicht separat abfragbar |
| Betriebssystem | macOS 27.0.1 (Darwin 27.0.0), arm64 |
| Fachliche Baseline | `research-baseline-v0.1` → `fe68acae4142baca25408124f85e353fb9786674` |
| Tatsächlicher Ausgangs-Commit | `b506a180412a2e7c38bd0fce357aa247a716ad4c` |
| Branch / Arbeitsbereich | `analysis/deepseek` in `.worktrees/deepseek` |
| Auftrag | [agents/deepseek/assignment.md](assignment.md) |
| Status | Erstbewertung abgeschlossen; keine Website, keine App, keine Modell-API, keine Nutzertests |

Der Lauf erfolgte in dieser DSH-Sitzung. Ein separater DeepSeek-CLI-Prozess wurde nicht gestartet. „DeepSeek“ bleibt die Arbeitsbezeichnung des Auftrags; Harness-Programm, Version, Modell und Provider sind oben getrennt erfasst. Die Modellbezeichnung allein belegt keine eigenständige Modellversion und keine bestimmte Modellleistung.

## Vorgehen und Unabhängigkeit

Gelesen wurden der Auftrag, [AGENTS.md](../../AGENTS.md), [README.md](../../README.md), [state.md](../../state.md), alle Dateien unter `docs/`, die [Codex-Erstanalyse](../codex/analysis.md), die [Codex-Validierung](../codex/validation.md) und die [Altprojekt-Bestandsaufnahme](../codex/legacy-review.md) im eingefrorenen Worktree. Der Arbeitsbaum war sauber; der Vorbereitungs-Commit ergänzt ausschließlich drei Dateien in `agents/deepseek/`.

Die Berichte von Claude Code, JCode und OMP habe ich nicht gelesen. Allerdings nennt der neuere `state.md` auf `main` einige Stichworte aus diesen Berichten (unter anderem Art. 9 DSGVO, 3 bis 5 Betroffene, statische Website, zwei Forschungsstufen). Diese Kenntnis ist eine Kontamination, die ich offenlege. Die Bewertung stützt sich nicht auf diese Berichte; sie ist aus der eingefrorenen Grundlage und eigenen Quellenprüfungen abgeleitet. Ein Vergleich mit den anderen Analysen bleibt der Koordinator-Synthese vorbehalten.

Die Quellen wurden am 2026-10-20 über den Harness abgerufen. Bei umfangreichen Seiten war die Ausgabe gekürzt oder von Navigation überlagert; das ist bei den jeweiligen Quellen vermerkt. „Abrufbar“ ist kein Inhaltsnachweis. Die Quellenliste unten trennt geprüfte Aussage, Reichweite und Grenze.

## Kurzfazit

Die Grundlage ist tragfähig, aber sie vermischt drei Dinge, die getrennt werden müssen: **dokumentierte Modellfähigkeit**, **messbare Aufgabentauglichkeit** und **Sicherheit im Gehen**. Der wichtigste technische Befund ist eine harte Zeitgrenze: Die dokumentierte Bildrate des räumlichen Gemini-Streaming-Endpunkts liegt bei höchstens einem JPEG pro Sekunde ([Q-12](#q-12)). Für eine gehende Person ist das keine Hinderniswahrnehmung, sondern eine langsame Momentaufnahme. Ein Cloud-VLM gehört deshalb nicht in die unmittelbare Gehschleife. Lokale Sensorik und ein stehendes Frage-/Leseszenario sind getrennte Produkte mit getrennten Nachweisen.

Die Studie „Mobilio“ zeigt, dass eine Smartphone-App mit Sensorfusion und personalisierter Audioführung die Gehzeit und die Zahl der Umgebungskontakte in einem kontrollierten Außenpfad und einem Hindernisparcours verbessern kann ([Q-13](#q-13)). Das ist ein ermutigender Machbarkeitshinweis, kein Beleg für sichere Straßenüberquerung, beliebige Umgebungen oder die spezifischen Percepta-Abläufe. Die Stichprobe ist klein, die Studie ist eine einzelne Veröffentlichung, und die Teilnehmenden nutzten weiterhin einen Langstock.

Der zweite Schwerpunkt ist die Veröffentlichung. GitHub-Issues sind öffentlich, dauerhaft indexierbar und an ein Konto gebunden; auch der Projektkonto-Weg erzeugt ein öffentliches Artefakt. Für persönliche Erfahrungsberichte ist eine website-eigene Veröffentlichung aus einem privaten Bestand die passendere Oberfläche, weil sie sich zurücknehmen lässt und nicht als Issue-Historie fortbesteht. Der GitHub-Weg bleibt für technische Beiträge und Metadiskussion sinnvoll. Diese Empfehlung ändert die bestätigten Entscheidungen D-06 und D-07 nicht; sie betrifft ihre Umsetzung.

Der dritte Schwerpunkt ist Barrierefreiheit. WCAG 2.2 AA ist als Prüfziel richtig, aber weder hinreichend noch ein Nachweis. Entscheidend sind der vollständige Teilnahmeweg mit Screenreader und Tastatur, die Verständlichkeit der Einwilligung und ein Weg ohne KI-Chat. Der geplante Teilnahmeweg enthält mehrere Brüche: Prompt kopieren, in eine fremde KI einfügen, Ergebnis zurückbringen, Vorschau prüfen, getrennt zustimmen. Diese Kette muss als Ganzes getestet werden, nicht nur die Website.

Die vier Bereiche sind politisch gleichberechtigt, aber nicht technisch gleich reif. Einkaufen und Fragen an die App sind näher an einem belastbaren Pilot; die Interaktion mit Menschen braucht zuerst eine Datenschutz- und Aufnahmekultur; Navigation ist der riskanteste und am schwierigsten zu belegende Bereich. D-11 bleibt richtig: erst wenige vollständige Abläufe mit Betroffenen prüfen, dann Architektur.

## Befunde nach Auswirkung

| ID | Befund | Auswirkung | Empfehlung |
| --- | --- | --- | --- |
| B-01 | Cloud-VLM-Streaming ist mit ≤ 1 Bild/s dokumentiert; bei 1,0–1,4 m/s Gehgeschwindigkeit liegen zwischen zwei Bildern etwa 1,0–1,4 m. | Eine cloudbasierte Bildfolge kann ein unmittelbares Hindernis nicht rechtzeitig erkennen. | Gehen und Stehen trennen; Cloud-VLM nur für stehende Aufgaben oder asynchrone Beschreibung; lokale Sensorik für Hindernisse, ohne Sicherheitszusage. |
| B-02 | Die Mobilio-Studie verbessert Zeit und Kontakte, bleibt aber eine kleine Einzelstudie mit Langstock. | Machbarkeit belegt, Sicherheit nicht. | Als Kandidatenhinweis nutzen; eigene Aufgabenmessung mit Referenzdaten; keine Straßenfreigabe. |
| B-03 | GitHub-Issues sind öffentlich (so auch die [Interview-Spezifikation](../../docs/interview-spec.md)) und dauerhaft; der Projektkonto-Weg ist nur pseudonym. | Veröffentlichung persönlicher Berichte erzeugt ein kaum rückholbares öffentliches Artefakt. | Erfahrungsberichte auf der Website veröffentlichen; Issues für Technik/Meta; bei Issue-Nutzung „dauerhaft öffentlich“ ausdrücklich zustimmen lassen. |
| B-04 | Behinderung ist Gesundheitsdatum im Sinne von Erwägungsgrund 35 DSGVO; Art. 9 verlangt ausdrückliche Einwilligung. | Ohne saubere Einwilligung ist die Verarbeitung unzulässig; die Einwilligung muss trennbar, widerrufbar und nachweisbar sein. | Einwilligungsschichten, Informationspflicht, Widerruf, Löschung und Aufbewahrung vor dem Pilot festlegen. |
| B-05 | Der Website-Brief verspricht „Vorschau und Veröffentlichungsentscheidung“ auf der Website, der aktuelle Plan hat aber kein Backend. | Die Spezifikation ist mit der geplanten statischen Seite nicht erfüllbar; Erwartungen an Teilnehmende könnten brechen. | Vorschau/Entscheidung im Chat oder per Moderation verorten oder ausdrücklich als spätere Formularfunktion kennzeichnen. |
| B-06 | WCAG 2.2 AA ist notwendig, aber Tests mit Werkzeugen allein reichen nicht; die KI-Chat-Oberfläche ist fremd. | Ein formal grüner Check kann den tatsächlichen Teilnahmeweg für blinde Menschen unbenutzbar lassen. | Manuelle Screenreader-/Tastatur-Matrix, Test mit Betroffenen und vollständiger Weg ohne KI-Chat. |
| B-07 | Die vier Bereiche werden gleichberechtigt behandelt, sind aber unterschiedlich reif und riskant. | Ressourcen könnten zugunsten der Navigation gebunden werden, bevor einfache Bedürfnisse geklärt sind. | Interviews priorisieren lassen; Einkaufen/Fragen zuerst, Interaktion mit Schutzregeln, Navigation zuletzt. |
| B-08 | Es fehlen explizite Regeln für Kontaktaufnahme, Aufbewahrung, Widerruf und Moderationsnachweise. | Der Pilot könnte Daten sammeln, ohne sie löschen oder eine Zustimmung belegen zu können. | Moderations-Runbook und Einwilligungsregister vor dem ersten Eingang; keine Rohdaten in Git. |

### Steckbriefe der wichtigsten Vorschläge

| Vorschlag | Problem | Empfehlung | Alternative / Tradeoff | Evidenz oder Annahme | Nächster Test |
| --- | --- | --- | --- | --- | --- |
| V-01 Stehen und Gehen trennen | Ein Cloud-VLM mit ≤ 1 Bild/s kann keine unmittelbare Geh-Entscheidung tragen; die Vision behandelt alle Aufgaben als eine Hilfe. | Getrennte Aufgabenklassen und Latenzbudgets; Cloud nur für stehende Aufgaben, lokale Sensorik für Hindernisse. | Cloud-only für alles (zu langsam), lokal-only (zu wenig Kontext), Hybrid (mehr Komplexität). | Q-12; Annahme 1,0–1,4 m/s; keine eigene Messung. | Aufgezeichnete Clips und lokale Latenzmessung; keine Live-Gehtests. |
| V-02 Website statt Issue veröffentlichen | Öffentliche Issues sind dauerhaft, indexierbar und an ein Konto gebunden; Löschung ist unvollständig. | Berichte als Website-Seite aus privatem Bestand; Issues nur für Technik/Meta. | Projektkonto-Issue mit ausdrücklicher „dauerhaft öffentlich“-Zustimmung. | Spezifikation bezeichnet Issues als öffentlich; DSGVO-Löschgrenzen; Q-11. | Pilot mit Widerrufsprobe und Suche nach Kopien. |
| V-03 Einwilligungsschichten E1–E6 | Art. 9 verlangt ausdrückliche, trennbare Einwilligung; Kontakt und Aufbewahrung sind derzeit nicht explizit. | Sechs getrennte Entscheidungen, Nachweis von Version/Zeit/Text. | Eine Sammelzustimmung (einfacher, aber schwächer und schwer widerrufbar). | Q-07, Q-08, Q-09. | Verständnistest mit 5 Personen; Rechtsprüfung. |
| V-04 Beteiligungs-Pilot | Es gibt keinen getesteten Teilnahmeweg; ein vollständiger Website-Bau wäre verfrüht. | Eine statische Seite, eine Mailbox, 3–5 Erwachsene, Runbook, manuelle Auswertung. | Zuerst Modell-Gegenprobe (technisch), dann Teilnahmeweg. | D-11; WCAG-Prüfmatrix; keine eigenen Tests. | Der Pilot selbst mit den Kriterien aus Abschnitt 6.2. |
| V-05 Keine BFSG-Behauptung, keine Analytics | Rechtsanwendung ist offen; Tracking würde eine neue Einwilligung und Risiken erzeugen. | WCAG 2.2 AA als Ziel, keine Konformitätsbehauptung; Erfolg manuell zählen. | Späteres formales Audit und datenschutzfreundliche Reichweitenmessung. | Q-04, Q-05, Q-06; Q-03. | Rechtsprüfung; manuelle Zählung im Pilot. |

## 1. Technische Machbarkeit

### 1.1 Vier Aufgabenklassen statt einer „Alltagshilfe“

Die Vision listet fünfzehn Anwendungsfälle. Für die Technik sind sie nicht Varianten derselben Funktion. Mindestens vier Klassen brauchen unterschiedliche Nachweise:

| Klasse | Beispiel | Was die Person tut | Kritischer Fehler | Geeignete Technik (Hypothese) |
| --- | --- | --- | --- | --- |
| A — Stehende Inspektion | Produkt, Etikett, Preisschild, Dokument lesen | hält still, richtet die Kamera, wartet | falsches Produkt, falscher Preis, unlesbare Stelle als sicher ausgegeben | OCR/Barcode lokal, VLM als Ergänzung, Rückfrage bei Unsicherheit |
| B — Situationsfrage | „Was ist hier?“ mit Rückfrage | hält still oder geht langsam, fragt nach | erfundene Details, fehlende Sicht nicht benannt | VLM plus Dialog, Unsicherheit und Bildausschnitt offenlegen |
| C — Kommunikation | Bitte formulieren, am Schalter nachfragen | spricht mit Menschen | ungewollte Aufnahme, falsche Wiedergabe, Eskalation | Text-/Sprachbausteine, keine heimliche Aufzeichnung |
| D — Gehen | Hindernis, Eingang, Fahrzeugtür, Weg | geht, hat oft eine Hand am Stock/Hund | übersehenes Hindernis, falsche Entwarnung, zu späte Ansage | lokale Sensorik, haptische/akustische Warnung, Karten/Positionierung; Cloud höchstens asynchron |

Für Einkaufen ist der kritische Fehler nicht „Objekt erkannt“, sondern „Preis oder Etikett dem falschen Produkt zugeordnet“. Barcode und OCR liefern Bausteine, aber die Zuordnung und die unlesbare Stelle bleiben das eigentliche Problem. Ein VLM, das ein Produkt plausibel beschreibt, ohne den Preis zu treffen, löst die Einkaufssituation nicht.

Die Klassen A und B können mit einem Smartphone in der Hand funktionieren. Klasse C braucht vor allem Gesprächs- und Datenschutzdesign, nicht zwingend Kamera. Klasse D braucht eine andere Latenz- und Sicherheitsarchitektur. Wird das nicht getrennt, entsteht ein Produkt, das keines der vier Probleme zuverlässig löst.

**Vorschlag:** Jede spätere Funktion wird genau einer Klasse zugeordnet. Eine Funktion, die „im Gehen“ eingesetzt wird, darf nicht mit demselben Cloud-VLM-Pfad bewertet werden wie eine stehende Lesefunktion.

### 1.2 Zeitbudget: Warum 1 Bild pro Sekunde nicht reicht

Die Gemini-Dokumentation für Robotik-Streaming nennt als Eingabe unter anderem „images (JPEG <= 1FPS)“ und Text als Ausgabe, über eine zustandsbehaftete WebSocket-Verbindung ([Q-12](#q-12)). Das ist keine Aussage über die End-to-End-Latenz; es ist eine Obergrenze der Bildrate. Für eine gehende Person ist sie entscheidend.

**Annahme:** Eine erwachsene Person geht in einer ruhigen Innenstadt etwa 1,0 bis 1,4 m/s. Bei 1 Bild/s liegen zwischen zwei Bildern 1,0 bis 1,4 m. Ein Hindernis, das zwischen zwei Bildern auftaucht, ist im nächsten Bild möglicherweise schon zu nah. Dazu kommen Netzwerk, Modellverarbeitung, Serverwartezeit und Sprachausgabe. Selbst wenn jedes Glied nur einige hundert Millisekunden braucht, ist die hörbare Information später als die nächste Entscheidung.

Daraus folgt nicht, dass Cloud-Modelle nutzlos sind. Sie sind für stehende Aufgaben, für die nachträgliche Beschreibung und für Dialog sinnvoll. Für die unmittelbare Gehschleife folgt: **keine Cloud-VLM-Abhängigkeit**. Lokale Kamera, Tiefe, IMU und eine lokale Warnlogik können eine kürzere Latenz haben; auch sie sind keine Garantie. Die Dokumentation von ARKit/ARCore-Tiefe und die Grenzen bei dünnen Kanten, Glas, Dunkelheit und fehlender Textur bleiben zu prüfen.

**Vorschlag für eine Architekturregel:** Eine Funktion, deren Ausgabe eine Bewegung auslösen oder bestätigen soll, muss ihre Latenz und ihre Fehlergrenzen lokal messen. Ein Cloud-Modell darf sie höchstens ergänzen, nicht tragen. Diese Regel ist eine Hypothese, kein bestätigter Standard; sie ist aber mit der dokumentierten Bildrate begründbar.

### 1.3 Was die Mobilio-Studie belegt — und was nicht

Die Studie „Improving outdoor navigation for people with blindness using an AI-driven smartphone application and personalized audio guidance“ (arXiv 2605.29120, eingereicht am 27. Mai 2026) berichtet:

- 112 Personen mit Blindheit oder Sehbehinderung wurden befragt; ein ideales Hilfsmittel solle Turn-by-Turn-Anweisungen, Wegeführung sowie Hinderniserkennung und -vermeidung leisten.
- In Experimenten mit 14 Teilnehmenden auf einem Außenpfad und einem Hindernisparcours reduzierte die App mit Langstock die Zeit um 13 ± 3 % und die Umgebungskontakte um 41 ± 5 % gegenüber Google Maps mit Langstock.
- Die App erreichte nach Angaben der Autorinnen und Autoren eine ähnliche Zuverlässigkeit wie eine menschliche Begleitung; die Teilnehmenden bewerteten sie als einfach und mit geringer Belastung.

**Was das stützt:** Ein Smartphone mit Sensorfusion, personalisierter Audioausgabe und einer klaren Aufgabenführung kann in einem begrenzten Außensetting einen messbaren Nutzen haben. Das ist stärker als eine reine Herstellerdemonstration.

**Was das nicht stützt:** sichere Straßenüberquerung, beliebige Städte, unbekannte Baustellen, Gedränge, Fahrzeugtüren, Treppen, Bordsteine, Wetter, Akkulaufzeit, Datenschutz, Barrierefreiheit der App, Langzeitnutzung. Die Stichprobe ist klein, die Studie ist eine Veröffentlichung, der Pfad ist ausgewählt, und die Teilnehmenden nutzten weiterhin einen Langstock. Ein Vergleich mit „menschlicher Begleitung“ ist kein Beweis für Gleichwertigkeit in jeder Situation.

**Folgerung:** Die Studie rechtfertigt ein eigenes, enges Experiment, nicht die Aussage „Navigation ist machbar“. Sie ist ein Kandidat für die spätere Gegenprobe, nicht für eine Produktzusage.

### 1.4 Kameraausrichtung und Hände

Blinde Menschen können die Kamera nicht visuell auf ein Ziel richten. Das ist keine Randnotiz, sondern eine Grundbedingung. Eine App, die „einfach ein Foto“ erwartet, verlagert die schwierigste Aufgabe auf die Person. Sinnvoll sind:

- Weitwinkel oder mehrere Aufnahmen, damit das Ziel wahrscheinlich im Bild ist.
- Akustische oder haptische Rückmeldung zum Bildausschnitt („links ist noch Tisch, bitte etwas nach rechts“).
- Wiederholen und Verwerfen ohne Strafe; ein unscharfes Bild ist ein normaler Zustand, kein Bedienfehler.
- Eine klare Ansage, wenn das Bild für die Frage nicht ausreicht, statt einer plausiblen Antwort.
- Freihändige Optionen (Brustgurt, Brillen, Clip) erst nach Bedarfstest; sie sind keine Voraussetzung für den ersten Pilot.

Der Langstock oder Blindenführhund bindet eine Hand. Die DBSV-Seite zu E-Scootern nennt die Beanspruchung einer Hand durch das Smartphone als Problem (Baseline R-01). Ich habe die Seite in dieser Sitzung nicht inhaltlich geprüft; die Aussage stammt aus der Codex-Recherche und ist hier als Hinweis, nicht als neuer Beleg geführt. Für die Bedarfserhebung ist sie trotzdem zentral: „Wie hältst du das Telefon, während du gehst?“ ist eine bessere Frage als „Welche Funktion willst du?“.

### 1.5 Offline, Netzausfall und veraltete Antworten

Der Hauptpfad des Altprojekts nutzte Online-Vision plus lokale Sprachausgabe; offline blieben OCR und Barcode. Das ist eine vernünftige Degradation, aber keine gleichwertige Offline-Hilfe. Für den Neustart gilt:

- Jede Funktion hat einen sichtbaren/hörbaren Zustand „nicht verfügbar“ statt einer stillen Lücke.
- Eine Antwort trägt einen Zeitstempel und, wenn möglich, den Hinweis, worauf sie sich stützt (aktuelles Bild, gespeicherte Information, Weltwissen).
- Ein altes Bild darf nicht als aktuelle Situation ausgegeben werden.
- Ein Netzausfall während einer Aktion darf nicht als Erfolg erscheinen.
- Lokale OCR/Barcode sind eine Baseline, die ein VLM schlagen muss, nicht umgekehrt.

### 1.6 Vorschlag für eine Modell-Gegenprobe (ohne Gehtest)

Vor jedem App-Bau, aber nach der Bedarfsklärung:

- **Daten:** 30 bis 60 freigegebene Kurzclips und Standbilder aus den Klassen A, B und D (D nur in geschützter Umgebung, nicht im Straßenverkehr). Szenen: Etikett, Preisschild, Regal, Eingang neben Schaufenster, Tisch/Stuhl, Roller, Treppe, Bordstein, Gegenlicht, Dunkelheit, Bewegungsunschärfe, falsche Kameraausrichtung.
- **Referenz:** manuell geprüfte Beschreibung, Entfernung (nur wo messbar), Objektliste, zulässige Antwort, zulässige Unsicherheit. Keine Szene zur Optimierung und Bewertung gleichzeitig.
- **Vergleich:** OCR/Barcode-Baseline, allgemeines VLM, räumliches Reasoning-Modell, Kombination. Keine Auswahl eines Anbieters vor dem Ergebnis.
- **Metriken:** sachliche Richtigkeit, falsche Entwarnung (kritisch), falsche Warnung, begründete Enthaltung, Latenz bis zur hörbaren Ausgabe, Kosten, Reproduzierbarkeit bei Wiederholung.
- **Abbruchregel:** Wenn ein Modell bei kritischen Fehlern nicht deutlich besser ist als die einfache Baseline oder die Latenz das Zeitbudget reißt, wird die zugehörige Funktion nicht weiterverfolgt. Schwellenwerte werden vor dem Test mit Betroffenen und Fachleuten festgelegt, nicht nachträglich.

Diese Gegenprobe ist kein Nutzertest. Sie ersetzt weder die Abläufe mit Betroffenen noch die spätere Abnahme am Gerät.

### 1.7 Widerspruch zur Grundlage

Die [Recherche](../../docs/research.md) nennt die 1-Bild/s-Grenze bereits (R-03), zieht daraus aber keine architektonische Konsequenz. Die [Vision](../../docs/vision.md) behandelt Hindernisse, Ampeln und Eingänge als Beispiele derselben Alltagshilfe. Ich halte die Trennung in stehende und gehende Aufgaben für die wichtigste fehlende Entscheidung. Ohne sie wird die spätere Architektur entweder zu langsam für das Gehen oder zu schwer für das Stehen.

## 2. Nutzerbedürfnisse

### 2.1 Was die Grundlage hat — und was fehlt

Die Grundlage hat: eine konkrete frühere Anfrage (verallgemeinert), eine Altprojekt-Zusammenfassung, vier vom Projektverantwortlichen gesetzte Bereiche, fünfzehn Hypothesen und die richtige Entscheidung D-11, zuerst Abläufe zu prüfen. Sie hat nicht: eine repräsentative Erhebung, eine Priorisierung durch Betroffene, eine Untersuchung der Bedienlast im Gehen, eine Untersuchung der Erwartungen an Anonymität.

Die vier Bereiche sind eine **Umfangsentscheidung**, kein Nachweis gleicher Nachfrage. Die Beispiele in der Vision sind Hypothesen. Das ist im Dokument sauber benannt und sollte in jeder Zusammenfassung so bleiben. Die globale Zahl von mindestens 2,2 Milliarden Menschen mit Seheinschränkung ([Q-14](#q-14)) zeigt die Größe des Feldes; sie sagt nichts über die Häufigkeit der vier Bereiche oder über den Percepta-Bedarf.

### 2.2 Stichprobe: 3 bis 5 sind ein Pilot, keine Studie

Für den ersten Ablauf sind 3 bis 5 Personen sinnvoll. Sie können aber nicht „die Bedürfnisse blinder Menschen“ repräsentieren. Für den Pilot sollten bewusst unterschiedliche Erfahrungen vorkommen:

- von Geburt an blind, später erblindet, sehbehindert;
- Langstock, Blindenführhund, keine Mobilitätshilfe;
- erfahrene Screenreader-Nutzung und geringe Technikerfahrung;
- jüngere und ältere Personen;
- Deutsch und Englisch;
- mindestens eine Person, die keinen KI-Chat nutzt oder nutzen möchte.

Rekrutierung über eine Selbsthilfeorganisation ist naheliegend, aber selektiv. Die bestehende Kontaktperson und eine zweite, unabhängige Quelle sind besser als eine Organisation allein. Aufwandsentschädigung, barrierefreie Unterlagen, Wahl zwischen Text, Sprache und Telefon, keine Diagnose, keine Verpflichtung zur Veröffentlichung.

### 2.3 Fragen, die Abläufe statt Wünsche erheben

Der Interview-Prompt ist gut darin, eine Situation offen zu lassen. Er könnte stärker auf den **letzten konkreten Fall** zielen:

- „Erzähl von der letzten Situation, in der du etwas nicht erkennen konntest. Was war das Ziel?“
- „Was hast du stattdessen getan? Wie lange hat es gedauert?“
- „Was war daran belastend — die Information, der Zeitpunkt, die Bedienung oder die Reaktion anderer?“
- „Welche Information hätte gereicht? Was wäre zu viel gewesen?“
- „Wer war beteiligt? Was dürfte auf keinen Fall aufgenommen oder veröffentlicht werden?“
- „Wann würdest du lieber eine Person fragen als eine App?“

Diese Fragen sind keine Feature-Liste. Sie liefern die Größen, die später in Messgrößen übersetzt werden: Zeit, Fehler, Belastung, sozialer Kontext, Abbruch.

### 2.4 Priorisierung ohne Scheingenauigkeit

Ein einfaches Priorisierungsraster pro Person und Ablauf:

| Kriterium | Frage |
| --- | --- |
| Häufigkeit | Wie oft tritt das auf? |
| Wichtigkeit | Was passiert, wenn es nicht gelingt? |
| Heutige Lösung | Was hilft bereits, und was kostet sie? |
| Risiko | Welcher Fehler wäre gefährlich oder peinlich? |
| Technische Reife | Gibt es einen belegbaren Weg, oder ist es Forschung? |
| Bedienlast | Wie viel Aufmerksamkeit/Hand braucht die Lösung? |

Die Auswertung nennt die Zahl der Personen und die Unterschiede. Sie behauptet keine Repräsentativität. Ein Vorschlag ist angenommen, wenn er in der Synthese begründet wird, nicht weil mehrere Modelle ihn nennen.

### 2.5 „Interaktion mit Menschen“ braucht eine eigene Schutzlogik

Die Vision möchte „relevante Informationen erhalten“ und „die eigene Kommunikation vorbereiten“. Das kann sehr Unterschiedliches heißen:

- Die Person formuliert eine Frage oder Bitte und lässt sie sich vorlesen.
- Die Person zeigt einen Text/eine Karte vor, um etwas zu erklären.
- Die Person möchte verstehen, was am Schalter gesagt wurde.

Die dritte Variante führt schnell zu heimlicher Aufnahme und zur Verarbeitung der Stimme Dritter. Das ist datenschutzrechtlich und sozial heikel. Für den Pilot gilt: **keine Aufnahme Dritter ohne deren Kenntnis und Zustimmung**, keine automatische Transkription von Umgebungsgesprächen, keine Weitergabe an einen Cloud-Anbieter. Unterstützt wird die eigene Formulierung, nicht das Belauschen. Wenn eine Aufnahme nötig erscheint, muss sie sichtbar, vom Nutzer ausgelöst und auf das Nötigste begrenzt sein; die Projektseite erklärt das vorab.

### 2.6 Digital Divide

Der KI-Chat-Weg setzt ein Konto, eine Datenverbindung, eine Chat-App, Lesekompetenz und Vertrauen in einen fremden Anbieter voraus. Nicht alle blinden Menschen nutzen solche Dienste; manche nutzen sie täglich, andere lehnen sie ab. Der manuelle Weg darf nicht der schlechtere Rest sein. Er muss gleichwertig erklärt, gleich gut erreichbar und ohne KI-Chat vollständig abschließbar sein. Ein telefonischer oder postalischer Weg ist denkbar, aber mit Kosten und Datenschutzfolgen verbunden; er sollte nicht versprochen werden, bevor er betrieben werden kann.

### 2.7 Widerspruch zur Grundlage

Die Aussage „alle vier Bereiche sind gleichberechtigt“ ist als Projektumfang richtig. Als Forschungsreihenfolge ist sie zu stark. Ich empfehle, die Reihenfolge von den Interviews abhängig zu machen und Navigation nicht deshalb vorzuziehen, weil sie technisch beeindruckt. Die frühere Erfahrung der anfragenden Person ist ein Ausgangspunkt, keine Bedarfsstudie; das steht so in der Grundlage und sollte in der Website-Sprache nicht verwischt werden.

## 3. Barrierefreiheit

### 3.1 Standard und Rechtsrahmen

Das Prüfziel WCAG 2.2 AA ist angemessen. WCAG 2.2 ist eine W3C-Empfehlung vom 12. Dezember 2024 ([Q-01](#q-01)). Die neuen Kriterien betreffen unter anderem:

- 2.4.11 Fokus nicht verdeckt (AA),
- 2.5.7 Ziehen ohne Ziehen (AA),
- 2.5.8 Zielgröße mindestens 24 × 24 CSS-Pixel (AA),
- 3.2.6 Konsistente Hilfe (A),
- 3.3.7 Keine doppelte Eingabe (A),
- 3.3.8 Barrierefreie Authentifizierung (AA) ([Q-02](#q-02)).

Das BFSG gilt seit dem 28. Juni 2025 unter anderem für Dienstleistungen im elektronischen Geschäftsverkehr und für bestimmte Produkte ([Q-04](#q-04)). Kleinstunternehmen, die Dienstleistungen anbieten, sind nach § 3 Abs. 3 BFSG ausgenommen ([Q-05](#q-05)). Ob die Percepta-Website eine solche Dienstleistung ist, ob die Ausnahme greift und ob die Website überhaupt geschäftsmäßig betrieben wird, ist eine Rechts- und Tatsachenfrage. Ich behaupte weder eine Pflicht noch eine Ausnahme. Unabhängig davon ist WCAG 2.2 AA das richtige freiwillige Ziel; eine Konformitätsbehauptung darf erst nach tatsächlicher Prüfung erscheinen.

### 3.2 Was WCAG nicht abdeckt

WCAG prüft Inhalte und Bedienung, nicht die Verständlichkeit einer Einwilligung, nicht die Qualität einer Antwort und nicht die Barrierefreiheit einer fremden KI-Chat-App. Die W3C-Evaluierungsseite sagt ausdrücklich, dass kein Werkzeug allein die Barrierefreiheit feststellt und menschliche Prüfung nötig ist ([Q-03](#q-03)). Für Percepta heißt das:

- Die Website kann formal konform sein und der Teilnahmeweg trotzdem scheitern.
- Der KI-Chat ist ein fremdes Produkt. Seine Bedienung, seine Spracheingabe und seine Datenverarbeitung liegen nicht in Perceptas Kontrolle. Die Website muss das sagen und einen vollständigen Weg ohne ihn anbieten.
- Die Einwilligung muss verstanden werden, nicht nur angeklickt. Das ist ein eigener Test.

### 3.3 Prüfmatrix für den späteren Teilnahmeweg

| Ebene | Prüfung | Abbruchkriterium |
| --- | --- | --- |
| Automatisiert | HTML-Validierung, Linkprüfung, axe/Lighthouse als Hinweis, keine Fehler in der Konsole | kritische A/AA-Fehler bleiben offen |
| Desktop-Screenreader | NVDA mit Firefox und Chrome (Windows), VoiceOver mit Safari (macOS), nach Möglichkeit JAWS | eine Kernaufgabe ist ohne Sicht nicht abschließbar |
| Mobil | VoiceOver mit Safari (iOS), TalkBack mit Chrome (Android), Hochformat und Querformat | Fokus verloren, Bedienelement nicht erreichbar, Ansage falsch |
| Vergrößerung | 200 % und 400 % Zoom, 320 CSS-Pixel Umbruch, Textabstand, hoher Kontrast, reduzierte Bewegung | Inhalt oder Funktion geht verloren |
| Tastatur | vollständiger Durchlauf ohne Maus, sichtbarer Fokus, keine Falle, Sprunglink | Tastaturfokus verschwindet oder ist verdeckt |
| Inhalt | Seitensprache, Überschriftenhierarchie, Linktexte, Alternativtexte, Fehlermeldungen, Statusmeldungen | Information nur über Farbe/Bild oder unverständliche Ansage |
| Teilnahmeweg | finden, verstehen, Prompt kopieren (Button und manuelles Markieren), im Chat öffnen, zurückkehren, Vorschau, Zustimmen, Widerrufen | ein Schritt setzt Sicht, Maus oder ein Konto voraus |
| KI-Chat | mindestens zwei verbreitete Anbieter, mit Datum/Version, mit und ohne Konto, mit Screenreader | keine gleichwertige Alternative ohne Chat |

Die Matrix ist ein Vorschlag. Sie ist noch nicht ausgeführt; es gibt keine Website und keinen Test.

### 3.4 Konkrete Befunde am Website-Brief

- **„Funktionsfähiger Kern ohne JavaScript“** ist richtig. Der Kopierknopf braucht dann eine echte Alternative: Text markierbar, Auswahl per Tastatur, klare Rückmeldung. Ein Knopf, der ohne JavaScript nichts tut, ist ein Rückschritt.
- **„Sprachwechsel verwirft keine Formulareingaben“** ist ohne Formular gegenstandslos. Wenn später ein Formular kommt, ist die Anforderung richtig; heute sollte sie nicht als bereits gelöst erscheinen. Ein Sprachwechsel darf nicht automatisch weiterleiten und muss den Kontext (Seite, Abschnitt) erhalten.
- **„Vorschau und Veröffentlichungsentscheidung“** auf der Website setzt eine serverseitige Funktion voraus. Der aktuelle Plan hat keine. Entweder wird die Vorschau in den Chat/die Moderation verlegt und auf der Website nur erklärt, oder die Website bekommt später ein Formular mit Vorschau. Beides ist möglich; die Spezifikation muss sich entscheiden.
- **„Erfolg an abgeschlossenen Teilnahmewegen messen“** kollidiert mit „keine Analytics“. Die Lösung ist eine manuelle Zählung in der Moderation (Eingänge, veröffentlichte Texte, Abbrüche, Rückfragen), nicht ein Tracking-Skript. Das ist weniger genau, aber datenschutzfreundlich und für einen Pilot ausreichend.
- **„GitHub-Verweis“** darf kein Pflichtweg sein. GitHub ist ein zusätzliches Angebot für technische Beiträge; die Teilnahme am Interview darf nicht davon abhängen.
- **„Leichte Sprache“** ist keine automatische Verbesserung. Sie ist eine eigene Textsorte mit Zielgruppenprüfung. Für den Pilot reicht „einfache, klare Sprache“, getestet mit Betroffenen; „Leichte Sprache“ nur, wenn sie tatsächlich geprüft wird.

### 3.5 Abnahmekriterien (Vorschlag)

- Alle Kernaufgaben des Teilnahmewegs sind mit Screenreader und Tastatur ohne Sicht und ohne fremde Hilfe abschließbar.
- Keine kritischen WCAG-A/AA-Fehler im geprüften Umfang; kleinere Befunde mit Schweregrad und Frist.
- Der Kopierweg funktioniert mit JavaScript und als manuelle Auswahl.
- Der Sprachwechsel erhält die Seite und die bereits gemachten Angaben (falls es welche gibt).
- Alle Testpersonen können erklären: standardmäßig keine Veröffentlichung, getrennte Namensentscheidung, Widerruf möglich, Chat-Anbieter verarbeitet die Eingabe.
- Kein veröffentlichter Text enthält unbeabsichtigte Namen, Adressen, Kontaktdaten oder Daten Dritter.
- Die Seite behauptet keine Konformität, keine Sicherheit und keine Partnerschaft, die nicht belegt ist.

## 4. Einfachste tragfähige Architektur

### 4.1 Was jetzt gebraucht wird

Für den nächsten Schritt reicht:

- eine statische Astro-Seite in Deutsch und Englisch, build-time gerendert, ohne Backend und ohne Datenbank;
- Inhalte als Markdown/Content Collections, damit sie ohne CMS pflegbar sind;
- kein Analytics, keine Cookies, keine externen Fonts/CDNs, keine Werbe- oder Social-Media-Einbettungen;
- ein Kopierknopf als progressive Verbesserung, mit manueller Auswahl als Fallback;
- eine klare, kurze Erklärung des Wegs und der Grenzen;
- eine private Ablage für Moderation, getrennt vom öffentlichen Repo.

Astro ist als statischer Generator naheliegend ([Q-15](#q-15)); die Projektentscheidung D-05 legt ihn fest. Die technische Empfehlung ist nicht „mehr Astro“, sondern **so wenig clientseitige Logik wie möglich**. Jede zusätzliche Komponente ist eine zusätzliche Barriere und ein zusätzlicher Testfall.

### 4.2 Einreichungsweg: vier Optionen

| Option | Vorteile | Nachteile | Eignung |
| --- | --- | --- | --- |
| GitHub-Issue | kostenlos, öffentlich, nachvollziehbar, keine eigene Infrastruktur | Konto nötig, öffentlich, dauerhaft, Autor sichtbar, Historie, Kopien, nicht anonym | nur für technische/Meta-Beiträge; nicht für persönliche Berichte |
| E-Mail an Projektadresse | keine Anmeldung, vertraut, barrierearm, einfach | nicht anonym gegenüber dem Projekt, Spam, manuelle Sortierung, Providerzugriff, Adresse muss geschützt werden | gut für einen kleinen Pilot |
| Hosted Formular | bessere Führung, Pflichtfelder, Vorschau möglich | Drittanbieter, Auftragsverarbeitung, Tracking, Barrierefreiheit unklar, Kosten | erst nach Prüfung und DPA; nicht jetzt |
| Eigenes Backend | volle Kontrolle, Vorschau, Löschung | Bau, Betrieb, Sicherheit, Missbrauch, Kosten, Rechtsfragen | zu früh; nicht in dieser Phase |

**Empfehlung für den Pilot:** eine dedizierte Projekt-Mailbox bei einem EU-Anbieter, Zwei-Faktor-Anmeldung, zwei Personen mit Zugriff, ein privates Moderationsregister (Fall-ID, Eingangsdatum, Status, Einwilligungsversion, Löschdatum), keine Rohdaten in Git, keine Weiterleitung an private Postfächer. Die Website erklärt den Weg und stellt eine kopierbare Textvorlage bereit; sie behauptet keine Anonymität gegenüber dem Projekt.

**Alternative:** Wenn der Pilot zeigt, dass E-Mail für die Zielgruppe eine Hürde ist, ist ein Formular mit Auftragsverarbeitung und getesteter Barrierefreiheit der nächste Schritt. Es ist mehr Aufwand als ein Backend, aber weniger als ein eigener Dienst. Die Entscheidung gehört in die Synthese, nicht in diese Analyse.

### 4.3 Moderationsablauf

1. Eingang prüfen, Fall-ID vergeben, Eingang bestätigen (falls Kontakt vorhanden).
2. Identifizierende Angaben markieren: Namen, Adressen, genaue Wege/Zeiten, Arbeitgeber, Daten Dritter, seltene Kombinationen.
3. Vorschlag zur Verallgemeinerung an die Person senden; keine inhaltliche Änderung ohne erneute Freigabe.
4. Exakten Text, Titel und Ziel (Website, nicht Issue) zur Zustimmung vorlegen.
5. Veröffentlichen, mit Datum und Widerrufsweg; standardmäßig ohne Namen.
6. Einwilligungsnachweis speichern (Version, Zeit, Kanal, Text-Hash), nicht den Rohchat.
7. Roh-E-Mail nach der Veröffentlichung oder nach Abbruch innerhalb einer festgelegten Frist löschen; die Frist steht vorher in der Datenschutzinformation.
8. Widerruf: Seite offline nehmen, Löschung der projektseitigen Daten, Suche/Archivkopien soweit möglich; keine vollständige Löschung Dritter versprechen.

Der Ablauf braucht eine zweite Person für die Freigabe (Vier-Augen-Prinzip) und eine Stellvertretung. Eine einzelne Person ist kein Betrieb.

### 4.4 Hosting-Kriterien

- EU/EWR oder angemessene Garantien; Auftragsverarbeitungsvertrag.
- Keine standardmäßige Analytics, keine Werbe-Cookies, kurze Server-Log-Aufbewahrung.
- TLS, Sicherheitsupdates, Backup und Wiederherstellung.
- Löschung einzelner Seiten ohne Git-Historie im öffentlichen Repo.
- Barrierefreie Verwaltungsoberfläche, falls die moderierende Person blind ist.
- Kein Anbieterwechsel, der die Zustimmungstexte ungültig macht, ohne erneute Information.

Eine Anbieterauswahl ist nicht Teil dieser Analyse. Die Kriterien sind eine Checkliste für die spätere Entscheidung.

### 4.5 Spätere App

Für die App gilt weiterhin: keine Plattform, keinen Anbieter, kein Framework festlegen. Die Architekturfolge ist:

1. Abläufe mit Betroffenen (D-11).
2. Modell-Gegenprobe auf stehenden Aufgaben.
3. Begrenzte App-Funktion mit lokaler Wahrnehmung, falls die Gegenprobe trägt.
4. Gehen nur mit eigener Sicherheitsprüfung, lokaler Latenz und klaren Grenzen.

Die App ist nicht der nächste Schritt. Sie ist auch nicht der einzige mögliche Weg: Ein guter Text-/Sprachweg ohne Kamera kann für „Fragen stellen“ und „Kommunikation“ hilfreicher sein als eine Bildfunktion.

### 4.6 Widerspruch zur Grundlage

Der [Website-Brief](../../docs/website-brief.md) beschreibt eine Website mit Vorschau und Veröffentlichungsentscheidung, während die Architektur „kein Backend“ vorsieht. Das ist kein Widerspruch, der sich durch mehr Technik löst, sondern durch eine klare Entscheidung: Entweder ist die Website im ersten Schritt nur Erklärungs- und Kontaktseite (Vorschau im Chat/E-Mail), oder sie bekommt später ein Formular. Beides ist vertretbar; die aktuelle Spezifikation vermischt sie.

## 5. Veröffentlichung, Datenschutz und Identifizierbarkeit

### 5.1 Rechtliche Einordnung

**Gesundheitsdaten:** Erwägungsgrund 35 DSGVO zählt Informationen über Behinderungen ausdrücklich zu Gesundheitsdaten ([Q-08](#q-08)). Art. 9 Abs. 1 DSGVO verbietet deren Verarbeitung grundsätzlich; Art. 9 Abs. 2 Buchstabe a erlaubt sie unter anderem bei ausdrücklicher Einwilligung für festgelegte Zwecke ([Q-07](#q-07)). Ein Interview über Alltagserfahrungen einer blinden Person kann solche Daten enthalten, auch wenn nicht nach einer Diagnose gefragt wird. Die Einwilligung muss daher ausdrücklich, informiert, konkret, nachweisbar und trennbar sein.

**Einwilligung:** Art. 7 DSGVO verlangt unter anderem, dass der Verantwortliche die Einwilligung nachweisen kann, dass sie klar und in verständlicher Sprache erfolgt und dass der Widerruf jederzeit und so einfach wie die Einwilligung möglich ist ([Q-09](#q-09)). Der Widerruf wirkt nur für die Zukunft; bereits erfolgte Verarbeitung bleibt rechtmäßig. Das ist für die Kommunikation wichtig: „Löschung“ ist nicht dasselbe wie „Rücknahme der Einwilligung“.

**Information:** Art. 13 DSGVO verlangt die Information über Verantwortlichen, Zwecke, Rechtsgrundlage, Empfänger, Übermittlungen, Speicherdauer und Rechte. Diese Information muss vor der Erhebung erreichbar sein, nicht erst nach dem Absenden. Für den Pilot heißt das: eine kurze Datenschutzseite in beiden Sprachen, die auch ohne KI-Chat lesbar ist.

**Löschung:** Art. 17 DSGVO gibt ein Recht auf Löschung unter bestimmten Voraussetzungen. Das Projekt muss einen Weg anbieten, aber keine Löschung bei Dritten, in Suchmaschinen-Caches oder in Kopien versprechen.

**Auftragsverarbeitung und Übermittlung:** E-Mail-Hosting und Website-Hosting sind typischerweise Auftragsverarbeitung (Art. 28 DSGVO). Bei Anbietern außerhalb der EU sind Art. 44 ff. DSGVO zu prüfen. GitHub dokumentiert internationale Datenübermittlungen und einen Abschnitt zum Data Privacy Framework; die konkrete Grundlage und die vertraglichen Bedingungen sind vor einer Nutzung zu prüfen ([Q-11](#q-11)). Für den Pilot ist ein EU-Mailanbieter die einfachere Wahl, aber auch dort bleibt der Anbieter ein Empfänger.

**Cookies/Endgerätezugriff:** § 25 TDDDG verlangt für Speicherung auf dem Endgerät oder Zugriff darauf grundsätzlich eine Einwilligung, außer wenn sie für den ausdrücklich gewünschten Dienst unbedingt erforderlich ist ([Q-06](#q-06)). Eine Website ohne Cookies, ohne Analytics und ohne lokale Speicherung vermeidet die Frage. Eine Sprachpräferenz in `localStorage` wäre nicht „unbedingt erforderlich“; besser jedes Mal die Sprachauswahl anbieten oder die Browsersprache nur als Vorschlag verwenden, ohne automatische Weiterleitung.

**Impressum:** § 5 DDG verlangt für geschäftsmäßige, in der Regel entgeltliche digitale Dienste bestimmte Angaben ([Q-10](#q-10)). Ob Percepta darunter fällt, ist mit der Betreiberrolle zu klären. Ein Impressum ist ohnehin gute Praxis; die Betreiberangaben sind derzeit offen.

**Minderjährige:** Für den Pilot sollten nur Erwachsene teilnehmen. Die Einwilligung Minderjähriger und die damit verbundenen Schutzfragen sind ein eigener Fall; sie sollten nicht nebenbei mitbehandelt werden.

**KI-Chat:** Der Chat-Anbieter ist ein eigener Verantwortlicher für die Verarbeitung im Chat. Percepta kann dessen Löschung, Training oder Aufbewahrung nicht steuern. Die Website muss das erklären, auf die Einstellungen des Anbieters verweisen und keine falsche Sicherheit versprechen. Der Projektweg erhält nur die freigegebene Zusammenfassung, nicht den Rohchat.

### 5.2 Einwilligungsschichten

| Ebene | Zweck | Standard | Nachweis |
| --- | --- | --- | --- |
| E1 Teilnahme | Interview führen, Zusammenfassung erstellen | nein | dokumentierte Einwilligung vor Beginn |
| E2 Veröffentlichung | exakten Text auf der Website veröffentlichen | nein | Zustimmung zum angezeigten Text, Version/Hash |
| E3 Name | selbst gewählten Namen nennen | nein | separate Entscheidung, erneute Vorschau |
| E4 Website-Geschichte | spätere redaktionelle Darstellung | nein | separate Zustimmung, nicht aus E2 abgeleitet |
| E5 Kontakt | Rückfragen/zukünftige Beteiligung | nein | separate Zustimmung, jederzeit widerrufbar |
| E6 Aufbewahrung | Kenntnis der Löschfristen und Anbieterverarbeitung | Information | bestätigte Kenntnisnahme, keine Kopplung |

Die aktuellen Prompt-Entwürfe decken E1–E3 und E4 als Hinweis ab. E5 (Kontakt für später) und E6 (Aufbewahrung/Anbieter) sind nicht explizit. Sie sollten ergänzt werden, ohne den Prompt zu überladen. Ein Satz genügt: „Möchtest du, dass wir dich später noch einmal kontaktieren? Das ist freiwillig und getrennt von der Veröffentlichung.“ Und: „Wie lange wir deine E-Mail aufbewahren, steht in der Datenschutzinformation; du kannst sie jederzeit löschen lassen.“

### 5.3 Identifizierbarkeit ist mehr als der Name

Ein neutraler Titel und das Entfernen des Namens reichen nicht. Identifizierend können sein:

- ein seltener Beruf oder Arbeitgeber;
- der tägliche Weg, eine bestimmte Haltestelle, ein Wohnviertel;
- eine ungewöhnliche Kombination aus Hilfsmittel, Alter, Wohnort und Lebenssituation;
- ein Datum, ein Ereignis, eine Person, die in der Geschichte vorkommt;
- die Stimme oder ein Foto, auch als Screenshot;
- der Zeitpunkt und der Stil der Veröffentlichung.

Die Moderation braucht eine Checkliste und die Bereitschaft, im Zweifel zu verallgemeinern oder abzulehnen. Die Person entscheidet, was sie preisgibt; die Moderation entscheidet, was das Projekt verantworten kann. Bei Uneinigkeit wird nicht veröffentlicht.

Daten Dritter: Wenn eine Geschichte eine andere Person identifizierbar macht, braucht es deren Zustimmung oder eine so starke Verallgemeinerung, dass sie nicht mehr erkennbar ist. Ein Gespräch am Schalter darf nicht dazu führen, dass die Person am Schalter im Internet erkennbar wird.

### 5.4 Veröffentlichungsoberfläche: Website statt Issue

Für persönliche Erfahrungsberichte empfehle ich eine Website-Seite, die aus einem privaten Bestand erzeugt und bei Widerruf offline genommen wird. Gründe:

- Sie ist nicht als Issue-Historie dauerhaft öffentlich; die Seite kann entfernt werden.
- Sie braucht kein GitHub-Konto und keine GitHub-Oberfläche.
- Sie kann in beiden Sprachen und im Layout der Website erscheinen.
- Die Zustimmung kann sich auf „diese Seite“ beziehen, nicht auf ein fremdes Produkt.

GitHub-Issues bleiben sinnvoll für technische Beiträge, Fehlerberichte und Diskussionen. Wenn ein Erfahrungsbericht dennoch als Issue erscheint, muss die Zustimmung ausdrücklich „dauerhaft öffentlich, auch nach Löschung in Kopien/Forks“ umfassen. Der aktuelle Prompt erklärt die Öffentlichkeit gut; er sollte die Dauerhaftigkeit und die fehlende vollständige Löschbarkeit noch klarer machen.

### 5.5 Lizenz und Widerruf

Eine pauschale freie Lizenz für persönliche Erfahrungsberichte ist nicht angemessen. Die Person gibt eine konkrete, widerrufbare Erlaubnis zur Veröffentlichung auf der Percepta-Website; sie gibt nicht automatisch eine Lizenz zur Weiterverwendung, Übersetzung oder Bearbeitung. Für Code und Dokumentation ist die Lizenzfrage separat und weiterhin offen. Ein „Open Source“-Label darf nicht auf persönliche Beiträge ausstrahlen.

### 5.6 Sicherheit und Vorfall

- Keine Zugangsdaten, Tokens oder Rohinterviews in Git, Issues, Logs oder Testdateien.
- Zwei-Faktor-Anmeldung für Mailbox und Hosting; keine geteilten Passwörter; Zugriff nur für die Moderation.
- Keine Weiterleitung an private Adressen; keine automatische Synchronisierung auf private Geräte.
- Vorfallprozess: Zugriff entziehen, Betroffene informieren, Aufsichtsbehörde prüfen (Art. 33/34 DSGVO), Veröffentlichung stoppen.
- Keine KI-Verarbeitung von eingereichten Texten ohne Auftragsverarbeitung und Information. Für den Pilot ist die einfachste Regel: keine Modellverarbeitung der Rohdaten.

### 5.7 Offene Rechtsfragen

- Wer ist Verantwortlicher (Einzelperson, Verein, Gesellschaft)?
- Greift das BFSG, und greift die Kleinstunternehmens-Ausnahme?
- Ist eine Datenschutz-Folgenabschätzung nötig? Für einen kleinen Pilot wahrscheinlich nicht, aber die Einschätzung ist zu dokumentieren.
- Braucht es einen Datenschutzbeauftragten?
- Wie werden Minderjährige, gesetzliche Betreuung und Barrierefreiheit der Einwilligung behandelt?
- Welche Rechtsgrundlage gilt für Server-Logs und Missbrauchsabwehr?
- Wie wird mit Löschbegehren nach einer Veröffentlichung umgegangen, wenn Kopien bestehen?

**Quellenhinweis:** Einzeln abgerufen wurden in dieser Sitzung Art. 7 und Art. 9 DSGVO sowie Erwägungsgrund 35. Die Artikel 13, 17, 28, 33/34 und 44 ff. DSGVO sind hier als Rechtsrahmen genannt und wurden nicht separat geprüft. Das ersetzt keine Rechtsberatung.

Diese Fragen sind keine Entscheidungen dieser Analyse. Sie gehören vor den öffentlichen Start.

## 6. Kleinster sinnvoller nächster Schritt

### 6.1 Empfehlung: Beteiligungs-Pilot statt Website-Bau

Der kleinste sinnvolle Schritt ist kein vollständiger Website-Bau und keine App, sondern ein **Beteiligungs-Pilot**:

1. Eine statische Seite (Deutsch/Englisch) mit: Worum es geht, was Teilnahme bedeutet, was nicht veröffentlicht wird, Interview-Prompt, manuelle Textvorlage, Datenschutz, Kontakt.
2. Eine dedizierte Projekt-Mailbox mit klarer Löschfrist und zwei Personen Zugriff.
3. Drei bis fünf Erwachsene mit unterschiedlichen Seh- und Technikerfahrungen, mindestens eine Person ohne KI-Chat.
4. Ein Moderations-Runbook und ein privates Fallregister.
5. Eine Auswertung, die Abläufe, Hindernisse und Prioritäten festhält, ohne Repräsentativität zu behaupten.

Warum dieser Schritt: Er prüft den Teilnahmeweg und die Verständlichkeit der Einwilligung, bevor in eine größere Website investiert wird. Er liefert die Ablaufprioritäten für D-11. Er ist mit geringem Risiko und ohne Backend möglich. Er ist kein Ersatz für die spätere Website, sondern ihre Vorstufe.

**Alternative:** Wenn die Projektverantwortlichen zuerst die technische Machbarkeit klären wollen, ist die Modell-Gegenprobe (Abschnitt 1.6) der kleinere technische Schritt. Sie sollte aber nicht als Nutzertest ausgegeben werden und nicht mit einer Geh-Empfehlung enden. Beide Schritte können parallel laufen, wenn die Kapazität es zulässt; der Teilnahmeweg ist die Voraussetzung für die Bedarfserhebung.

### 6.2 Abnahmekriterien des Pilots (Vorschlag)

| Bereich | Kriterium |
| --- | --- |
| Rekrutierung | 3–5 Erwachsene; mindestens zwei Seherfahrungen, eine sehbehinderte Person, eine Person ohne KI-Chat, eine mit Langstock/Führhund; Aufwandsentschädigung; barrierefreie Unterlagen |
| Auffindbarkeit | Alle Teilnehmenden finden die Teilnahmeseite von der Startseite aus, in ihrer Sprache, ohne Sicht |
| Bedienung | Alle schließen den Weg mit Screenreader und Tastatur ab; keine kritischen WCAG-A/AA-Fehler; Kopierweg auch ohne JavaScript |
| Verständnis | Alle erklären: keine automatische Veröffentlichung, getrennte Namensentscheidung, Widerruf möglich, Chat-Anbieter verarbeitet die Eingabe |
| Datenschutz | Kein veröffentlichter Text enthält unbeabsichtigte personenbezogene Daten; Einwilligungsnachweis vollständig; Rohdaten nach Frist gelöscht |
| Moderation | Rückmeldung innerhalb von fünf Werktagen; Vier-Augen-Freigabe; Widerruf innerhalb von fünf Werktagen umgesetzt |
| Veröffentlichung | Höchstens drei Berichte; jeder mit exakter Textfreigabe; Website-Seite, kein Issue; Widerrufsweg sichtbar |
| Messung | Manuelle Zählung; keine Analytics; Abschlussbericht mit Abbrüchen und Gründen |
| Sprache | Beide Sprachen gleichwertig; keine maschinelle Übersetzung ohne Prüfung |

### 6.3 Abbruchregeln

- Wenn eine Person den Weg wegen einer Barriere nicht abschließen kann, wird nicht veröffentlicht, bis sie behoben ist.
- Wenn die Verständnisprüfung nicht von allen bestanden wird, wird der Einwilligungstext überarbeitet und erneut getestet.
- Wenn die Moderation Löschung/Widerruf nicht fristgerecht leisten kann, wird nicht veröffentlicht.
- Wenn keine klare Ablaufpriorität entsteht, wird nicht gebaut; es werden weitere Interviews geführt.
- Wenn die Modell-Gegenprobe kritische falsche Entwarnungen oder eine Latenz über dem Zeitbudget zeigt, wird die Geh-Funktion nicht weiterverfolgt.

### 6.4 Was ausdrücklich nicht als Nächstes kommt

- keine vollständige Website mit „Mitwirken“- und „Forschung“-Bereichen;
- keine App, keine Navigation, keine Straßentests;
- keine Datenbank, kein Login, keine Registrierung;
- keine Analytics, keine Newsletter, keine Spendenabwicklung;
- keine Anbieter- oder Plattformwahl;
- keine Veröffentlichung von Rohinterviews oder Namen ohne separate Zustimmung.

### 6.5 Danach

Erst nach dem Pilot und der Koordinator-Synthese:

1. Abläufe priorisieren (D-11).
2. Entscheiden, ob der Teilnahmeweg skaliert oder ein Formular braucht.
3. Modell-Gegenprobe für die gewählten stehenden Aufgaben.
4. Erst dann eine begrenzte App-Funktion oder eine reine Text-/Sprachhilfe erwägen.
5. Gehen bleibt ein eigener, späterer Forschungszweig mit Sicherheitsnachweis.

## 7. Prüfungen, Grenzen und nicht Ausgeführtes

### 7.1 Tatsächlich ausgeführt

- Arbeitsbereich, Branch, Arbeitsbaum, Baseline und Vorbereitungs-Commit geprüft.
- `git diff` des Vorbereitungs-Commit auf `agents/deepseek/` begrenzt.
- Dokumente und Codex-Grundlage im Worktree gelesen.
- Externe Quellen am 2026-10-20 abgerufen; Aussagen und Grenzen in der Quellenliste getrennt.
- Relative Dateilinks mit dem README-Skript geprüft; `git diff --check`; Änderungsumfang geprüft (Ergebnisse im [Änderungsprotokoll](Change-Log-Agents.md)).
- Keine personenbezogenen Daten aus der früheren Quelle übernommen; keine Namen, Rohzitate oder Kontaktdaten.

### 7.2 Nicht ausgeführt

- Keine Website, keine App, kein Build, kein Deployment.
- Keine Modell-API aufgerufen, keine Vision-/Reasoning-Modelle verglichen, keine Latenz gemessen.
- Keine Screenreader-, Tastatur-, Zoom- oder Mobiltests; es gibt keine Website.
- Keine Interviews, keine Nutzertests, keine Straßentests.
- Keine Rechtsberatung; die rechtliche Einordnung ist eine technische Prüfempfehlung, keine Freigabe.
- Keine Prüfung der tatsächlichen BFSG-Anwendbarkeit, der Betreiberrolle, der Hosting- und AI-Chat-Verträge.
- Keine vollständige Auswertung der Mobilio-Studie (nur Abstract); keine Prüfung der Datengrundlage, der statistischen Auswertung oder der Reproduzierbarkeit.
- Keine Prüfung der DBSV-Seite zu E-Scootern in dieser Sitzung; die Aussage stammt aus der Baseline und ist als Hinweis markiert.

### 7.3 Grenzen der Quellen

- Herstellerdokumentation belegt dokumentierte Fähigkeiten, keine Leistung in Percepta-Aufgaben.
- Die 1-Bild/s-Angabe ist eine Eingabegrenze, keine gemessene End-to-End-Latenz.
- Die Mobilio-Zahlen sind Autorenangaben aus dem Abstract; die Studie ist klein und spezifisch.
- WCAG 2.2 ist ein Standard, keine Garantie für Nutzbarkeit mit jedem Screenreader.
- Die rechtlichen Quellen sind Gesetzestexte und offizielle Informationen; die Anwendung auf Percepta ist eine offene Rechtsfrage.
- Webseiten können sich ändern; das Abrufdatum ist Teil der Evidenz.

## 8. Quellen

| ID | Quelle | Abruf | Belegt | Grenze |
| --- | --- | --- | --- | --- |
| <a id="q-01"></a>Q-01 | [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/) | 2026-10-20 | Empfehlung vom 12.12.2024; Success Criteria und Konformitätsstufen | Standard, keine Prüfung einer Website |
| <a id="q-02"></a>Q-02 | [W3C WAI: What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) | 2026-10-20 | Neue Kriterien 2.4.11, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8; Zielgröße 24 × 24 CSS-Pixel | Zusammenfassung, nicht der vollständige Standard |
| <a id="q-03"></a>Q-03 | [W3C WAI: Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/) | 2026-10-20 | Kein Werkzeug allein bestimmt Barrierefreiheit; menschliche Prüfung nötig | Keine Aussage über Percepta |
| <a id="q-04"></a>Q-04 | [BFSG § 1](https://www.gesetze-im-internet.de/bfsg/__1.html) | 2026-10-20 | Anwendungsbereich; Dienstleistungen im elektronischen Geschäftsverkehr; Geltung nach 28.06.2025; Ausnahmen | Anwendung auf Percepta offen |
| <a id="q-05"></a>Q-05 | [BFSG § 3](https://www.gesetze-im-internet.de/bfsg/__3.html) | 2026-10-20 | Barrierefreiheitspflicht; Ausnahme für Kleinstunternehmen bei Dienstleistungen | Kleinstunternehmensbegriff und Betreiberrolle nicht geprüft |
| <a id="q-06"></a>Q-06 | [TDDDG § 25](https://www.gesetze-im-internet.de/ttdsg/__25.html) | 2026-10-20 | Einwilligung für Speicherung/Zugriff auf Endgeräte; Ausnahme für unbedingt erforderliche Zwecke | Gilt für Cookies/localStorage; keine Prüfung einer Website |
| <a id="q-07"></a>Q-07 | [DSGVO Art. 9](https://dsgvo-gesetz.de/art-9-dsgvo/) | 2026-10-20 | Verbot besonderer Kategorien; Ausnahme der ausdrücklichen Einwilligung | Keine Rechtsberatung |
| <a id="q-08"></a>Q-08 | [DSGVO Erwägungsgrund 35](https://dsgvo-gesetz.de/erwaegungsgruende/nr-35/) | 2026-10-20 | Gesundheitsdaten umfassen Informationen über Behinderungen | Auslegung im Einzelfall |
| <a id="q-09"></a>Q-09 | [DSGVO Art. 7](https://gdpr-info.eu/art-7-gdpr/) | 2026-10-20 | Nachweis, klare Sprache, Widerruf jederzeit und einfach | Keine Rechtsberatung |
| <a id="q-10"></a>Q-10 | [DDG § 5](https://www.gesetze-im-internet.de/ddg/__5.html) | 2026-10-20 | Allgemeine Informationspflichten für geschäftsmäßige digitale Dienste | Anwendbarkeit auf Percepta offen |
| <a id="q-11"></a>Q-11 | [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) | 2026-10-20 | Internationale Datenübermittlungen, DPF-Abschnitt, Verarbeitung für Produktverbesserung/KI | Konkrete Vertragsgrundlage und Löschverhalten nicht geprüft |
| <a id="q-12"></a>Q-12 | [Gemini API: Robotics with streaming](https://ai.google.dev/gemini-api/docs/robotics-streaming) | 2026-10-20 | Streaming-Endpunkt; Eingabe u. a. JPEG ≤ 1 FPS; Textausgabe; WebSocket | Keine Latenzmessung; Herstellerdokumentation |
| <a id="q-13"></a>Q-13 | [Liu & Slade: Mobilio (arXiv 2605.29120)](https://arxiv.org/abs/2605.29120) | 2026-10-20 | n = 14; 13 ± 3 % schneller, 41 ± 5 % weniger Kontakte gegenüber Google Maps + Langstock; ähnliche Zuverlässigkeit wie menschliche Begleitung (Autorenangabe) | Nur Abstract gelesen; kleine Stichprobe; spezifischer Pfad; keine Straßenüberquerung |
| <a id="q-14"></a>Q-14 | [WHO: Blindness and vision impairment](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment) | 2026-10-20 | Mindestens 2,2 Mrd. Menschen mit Seheinschränkung; geschätzte Produktivitätskosten | Globale Zahl, kein Nachweis für Percepta-Bedarf |
| <a id="q-15"></a>Q-15 | [Astro: Why Astro?](https://docs.astro.build/en/concepts/why-astro/) | 2026-10-20 | Statischer, inhaltsorientierter Ansatz; Inseln | Keine Barrierefreiheitsgarantie |
| <a id="q-16"></a>Q-16 | [GitHub Docs: Creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) | 2026-10-20 | Lesende mit Repository-Zugriff können Issues erstellen | Nicht die vollständige Sichtbarkeits-/Löschlogik |
| <a id="q-17"></a>Q-17 | Baseline [R-01 DBSV E-Scooter](https://www.dbsv.org/e-roller.html) | 2026-10-20 (Abruf; Inhalt nicht auslesbar) | Hinweis auf Handbeanspruchung und Hindernisrisiken | Seite in dieser Sitzung nicht inhaltlich geprüft; nur als Baseline-Hinweis |

## 9. Offene Fragen

1. Wer betreibt die Website und ist Verantwortlicher im Sinne der DSGVO?
2. Ist die Website ein „elektronischer Geschäftsverkehr“ im Sinne des BFSG, und greift die Kleinstunternehmens-Ausnahme?
3. Welche zwei bis drei Abläufe priorisieren die Betroffenen? Einkaufen, Fragen, Kommunikation oder Gehen?
4. Wie viel Anonymität erwarten die Teilnehmenden, und welchen Kompromiss akzeptieren sie für Rückfragen und Widerruf?
5. Welcher Kanal ist für die Zielgruppe tatsächlich erreichbar: E-Mail, Telefon, Post, Formular, Chat?
6. Wie lange darf eine E-Mail mit Rohdaten aufbewahrt werden, und wer löscht sie?
7. Welche KI-Chat-Anbieter werden getestet, und wie wird ihre Barrierefreiheit und Datenverarbeitung dokumentiert?
8. Soll die Website persönliche Berichte selbst hosten, oder bleibt GitHub Issue der Veröffentlichungsort?
9. Welche Latenz und welche Fehlerrate sind für welche Aufgabe akzeptabel? Wer legt die Schwellen fest?
10. Gibt es eine Person mit Budget und Zeit für Moderation, Rechtsprüfung und Tests?

## 10. Empfehlungen an den Koordinator

**Zur Übernahme empfohlen:**

- Die Trennung in stehende und gehende Aufgaben (B-01, Abschnitt 1).
- Die Website-Veröffentlichung persönlicher Berichte statt GitHub-Issue (B-03, Abschnitt 5.4).
- Die Einwilligungsschichten E1–E6 und das Moderations-Runbook (B-04, B-08, Abschnitt 5.2/4.3).
- Der Beteiligungs-Pilot mit 3–5 Personen und die Abnahmekriterien (Abschnitt 6).
- Keine Analytics; Erfolg manuell zählen (Abschnitt 3.4/4.1).
- Keine BFSG-Konformitätsbehauptung ohne Prüfung; WCAG 2.2 AA als Ziel (Abschnitt 3.1).

**Zu überarbeiten:**

- Der Website-Brief sollte klären, wo Vorschau und Veröffentlichungsentscheidung stattfinden (B-05).
- Der Interview-Prompt sollte E5 (Kontakt) und E6 (Aufbewahrung/Anbieter) ergänzen (Abschnitt 5.2).
- Die Vision sollte die vier Bereiche nicht als gleich reif darstellen; die Reihenfolge bleibt offen (B-07).
- Die Forschung sollte die 1-Bild/s-Grenze in die Architekturanforderung aufnehmen (Abschnitt 1.7).

**Nicht entschieden:**

- Ob ein Formular, eine Mailbox oder ein anderer Kanal der richtige ist.
- Ob die App überhaupt gebaut wird.
- Welche Plattform, welcher Anbieter, welches Modell.
- Ob eine Geh-Funktion jemals sicher genug ist.
- Ob und wann die Website veröffentlicht wird.

Diese Empfehlungen sind Vorschläge. Sie werden erst durch die Koordinator-Synthese zu Entscheidungen; ein Merge dieses Berichts ist keine inhaltliche Annahme.
