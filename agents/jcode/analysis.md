# JCode: unabhängige Zweitanalyse

## Laufdaten und Abgrenzung

- Datum: 2026-10-20.
- Tatsächlicher Harness: JCode, Version `v0.99.0` (Commit `774613c90`). Provider-Route laut Sitzung: `openai`. Die exakte Modell-ID wird im Sitzungskontext nicht ausgewiesen und ist daher **unbekannt**.
- Arbeitsbereich: `.worktrees/jcode`, Branch `analysis/jcode`.
- Ausgangs-Commit: `fe68acae4142baca25408124f85e353fb9786674`, Tag `research-baseline-v0.1`. Arbeitsbaum beim Start sauber.
- Gelesen: [AGENTS.md](../../AGENTS.md), [README.md](../../README.md), [state.md](../../state.md), [Vision](../../docs/vision.md), [Recherche](../../docs/research.md), [Website-Brief](../../docs/website-brief.md), [Interview-Spezifikation](../../docs/interview-spec.md), beide Interview-Prompts, [Codex-Erstanalyse](../codex/analysis.md), [Codex-Validierung](../codex/validation.md) und die Bestandsaufnahme des Altprojekts.
- Nicht gelesen: die Analysen von Claude Code und OMP. Der Baseline-Index führte beide zum Startzeitpunkt als ausstehend.
- Nicht ausgeführt: keine Website, keine App, keine Datenbank, keine Modell-API, keine Nutzerstudie, keine Kontaktaufnahme, keine Änderung gemeinsamer Dateien.

Die Statusangaben der eingefrorenen Baseline können älter sein als `main`. Diese Analyse bewertet die Baseline, nicht den heutigen Projektstand.

## Kurzfassung: Befunde nach Auswirkung

**Hohe Auswirkung**

1. **Das größte unmittelbare Risiko ist nicht die Technik, sondern die Veröffentlichung.** Eine Zusammenfassung, die Blindheit oder Sehbehinderung erkennen lässt, ist ein Gesundheitsdatum nach Art. 9 DSGVO. Ein öffentliches GitHub-Issue ist öffentlich, indexierbar und kopierbar. Löschen beseitigt fremde Kopien nicht. Die Baseline benennt das, unterschätzt aber die rechtliche und praktische Tragweite des direkten GitHub-Wegs.
2. **Die vier Bereiche sind gleichberechtigt erklärt, aber nicht gleich belegt.** Für Navigation liegen inzwischen belastbare Studien vor. Für Einkaufen, Fragen an die App und Unterstützung menschlicher Interaktion fehlen in der Baseline aufgabenspezifische Nachweise. Das ist kein Argument gegen die Bereiche, sondern gegen eine vorschnelle Gleichbehandlung bei der Priorisierung.
3. **Navigation ist machbar, aber nur in engen Grenzen belegt.** Die Mobilio-Studie in *Nature Biomedical Engineering* (2026) zeigt mit 14 Teilnehmenden Verbesserungen auf einem community path und einem Hindernisparcours. Sie belegt keine sichere Straßenüberquerung. Im Hindernisparcours war die Bewältigungszeit mit Mobilio sogar höher. Segmentierungsfehler bei Gehweg/Straße, beschädigten Zebrastreifen und Schnee sind dokumentiert.
4. **Verkehrs- und Bewegungsanweisungen dürfen nicht aus einem plausiblen Modelltext abgeleitet werden.** Die dokumentierte Streaming-Rate von Gemini Robotics ER 2 liegt bei höchstens einem JPEG pro Sekunde. Bei 1,0 bis 1,4 m/s Gehgeschwindigkeit liegen zwischen zwei Bildern bereits 1,0 bis 1,4 m. Modelllatenz, Netzwerk und Sprachausgabe kommen hinzu. Eine kontinuierliche Gehführung ist damit in dieser Form nicht verantwortbar.
5. **Die Baseline unterschätzt die bereits vorhandene On-Device-Konkurrenz.** Apples Magnifier Detection Mode erkennt Türen, Personen und Möbel, meldet Annäherung über Ton, Sprache oder Haptik und schätzt Sitzplatzbelegung. Eine eigene Funktion, die nur „Tür erkannt“ oder „Stuhl frei“ ausgibt, muss sich an dieser kostenlosen Basisfunktion messen lassen.

**Mittlere Auswirkung**

6. **VLM-Nutzen ist nicht durch Herstellerbenchmarks belegt.** Die vorhandenen BLV-Studien sind klein, teils nicht peer-reviewed, und eine frühere Fassung wurde zurückgezogen. Sie zeigen vor allem: automatische Metriken und Modellselbstbewertung ersetzen keine Bewertung durch Betroffene.
7. **Die Interview-Prompts sind redaktionell sorgfältig, aber modellabhängig.** „Immer nur eine Frage“ und „abschließen“ sind Anweisungen an eine fremde KI, keine Garantien. Ohne deterministischen manuellen Weg bleibt der Teilnahmeweg von einem externen Chat-Anbieter abhängig, dessen Barrierefreiheit und Datenverarbeitung nicht geprüft sind.
8. **Barrierefreiheit ist mehr als WCAG 2.2 AA.** Die Norm ist notwendig und prüfbar, aber nach W3C kein Ersatz für Tests mit Betroffenen. Der Teilnahmeweg muss ohne KI-Chat, ohne GitHub-Konto und ohne visuelle Kontrolle funktionieren.
9. **Die Architektur sollte mit einer statischen Website beginnen.** Astro kann DE/EN-Routing und statische Seiten ohne Backend liefern. Ein moderierter Einreichungsweg ist ein Betriebs- und Datenschutzprojekt, keine Nebenfunktion. Ohne Betreiber, Aufbewahrung, Löschung und Moderationsfähigkeit darf er nicht aktiviert werden.

**Niedrigere Auswirkung, aber entscheidungsrelevant**

10. **Der kleinste sinnvolle nächste Schritt ist eine kleine Ablaufstudie, nicht die App.** D-11 verlangt, wenige vollständige Alltagsabläufe mit Betroffenen zu prüfen, bevor die App-Architektur festgelegt wird. Eine statische Statusseite kann parallel oder danach entstehen, darf aber keine Einreichung versprechen.

## 1. Technische Machbarkeit

### 1.1 Dokumentierte Fähigkeit ist nicht nachgewiesene Aufgabe

Die Baseline trennt diese Ebenen bereits richtig. Ich verschärfe die Trennung:

- **Dokumentierte Fähigkeit:** Der Anbieter beschreibt, was ein Modell tun soll.
- **Benchmark:** Ein Modell erzielt auf einem vorbereiteten Datensatz einen Wert. Der Datensatz ist nicht unsere Alltagssituation.
- **Kontrollierte Studie:** Teilnehmende lösen eine definierte Aufgabe in einer begrenzten Umgebung.
- **Nachweis im Alltag:** Die Zielgruppe nutzt die Funktion selbstständig, sicher und wiederholt in realen Situationen. Dieser Nachweis fehlt für alle vier Bereiche.

Die Baseline spricht von „aktuellen räumlichen Modellen“. Der Markt ist inzwischen breiter und unübersichtlicher:

- **Gemini Robotics ER 2** ist laut Google-Dokumentation ein Preview-Modell mit den Endpunkten `gemini-robotics-er-2-preview` und `gemini-robotics-er-2-streaming-preview`. ER 1.6 wurde am 2026-08-31 abgekündigt. Der Streaming-Endpunkt verarbeitet JPEG mit höchstens 1 Bild pro Sekunde, Audio und Text und gibt Text aus. Ein Videobild allein löst keinen Denkschritt aus, es braucht zusätzlich Text oder Audio. Die Dokumentation nennt selbst Halluzinationen, Abhängigkeit von der Promptqualität und höhere Latenz bei komplexen Anfragen. Der Privatsphäre-Hinweis verlangt, dass identifizierbare Personen in der Umgebung vorher informiert und einverstanden sind, wenn ihre Daten an Google gehen. Das ist für eine Hilfe im öffentlichen Raum und für die Interaktion mit fremden Menschen ein sehr hoher praktischer Maßstab. Quelle J-06, J-07.
- **NVIDIA Cosmos Reason 2** wird als anpassbares Reasoning-VLM für physische KI beschrieben, mit räumlich-zeitlichem Verständnis, 2D/3D-Lokalisierung und bis zu 256K Kontext. Ein Smartphone-Benchmark oder eine Fußgängerstudie ist dort nicht belegt. Quelle J-08.
- **NVIDIA Cosmos 3** wird als offenes Omnimodell mit Vision Reasoning, Weltsimulation und Aktionsvorhersage beschrieben. Super und Nano sind verfügbar, Edge ist angekündigt. Die genannten Leaderboard-Werte sind Herstellerangaben. Ein Einsatz auf einem Smartphone für blinde Fußgänger ist damit nicht belegt. Quelle J-09.
- **Qwen3.5-4B** ist ein offenes multimodales Modell. Die Modellkarte nennt 4B Parameter für das Sprachmodell und 262.144 Token Kontext; die Safetensors-Angabe weist 5B Gesamtparameter aus. Die Lizenz ist Apache-2.0. Die Modellkarte nennt Benchmarks, aber keine mobile Echtzeitmessung in unserer Aufgabe. Ein kleines offenes Modell ist ein sinnvoller Kandidat für einen späteren Vergleich, keine Architekturentscheidung. Quelle J-10.

### 1.2 Was die belastbarste Navigationsstudie zeigt

Mobilio (Liu und Slade, *Nature Biomedical Engineering*, publiziert 2026-08-24) ist die stärkste aktuell geprüfte Quelle:

- Befragung von 112 Personen mit Blindheit oder Sehbehinderung: Ein ideales Outdoor-Navigationshilfsmittel soll Turn-by-Turn-Anweisungen, Pfadführung und Hinderniserkennung/-vermeidung können.
- Experiment mit 14 Teilnehmenden auf einem community path und einem Hindernisparcours.
- Mit Mobilio und Langstock: 13 ± 3 Prozent weniger Zeit auf dem community path und 41 ± 5 Prozent weniger Umgebungskontakte im Vergleich zu Google Maps und Langstock.
- Die Studie berichtet ähnliche Zuverlässigkeit wie ein menschlicher Guide.
- Einschränkungen: Die Experimente fanden auf einem community path und einem Hindernisparcours statt. Eine Validierung im öffentlichen Straßenverkehr oder für Straßenüberquerungen wird nicht berichtet. Die erweiterte Abbildung 5c zeigt eine höhere Bewältigungszeit im Hindernisparcours mit Mobilio. Die Autoren nennen selbst Fehlklassifikationen bei Gehwegen, die Straßen ähneln, bei beschädigten Zebrastreifen und bei Schnee. Die Segmentierung nutzt unter anderem Tiefe aus RGB und, falls vorhanden, LiDAR.

Quelle J-11 (peer-reviewed) und J-12 (Preprint). Das ist ein Beleg für Machbarkeit unter Begleitung, kein Sicherheitsnachweis.

NavSight (arXiv 2608.12759, v3 vom 2026-10-06) ergänzt die Alltagsperspektive: sieben Tage Tagebuchstudie mit 12 Personen mit Sehbehinderung, mobile AR mit Echtzeit-Erkennung von Bordsteinen, Fahrzeugen und anderen Objekten. Die Studie berichtet Erkennungsfehler, Einflüsse von Wetter, Licht und Schatten, nicht standardisierten Straßenmarkierungen und Fragen der sozialen Akzeptanz. Das ist wichtig für die Frage, ob Menschen ein Hilfsmittel tatsächlich dauerhaft tragen und bedienen wollen. Quelle J-13.

NavAble (arXiv 2610.19330, 2026-10-14) zeigt den Datenbedarf: elf barrierefreiheitskritische Objektklassen, 41K kuratierte Bilder, 8K neu gesammelte reale Bilder und 452K synthetische Frames. Fine-Tuning erreicht über 80 Prozent mIoU auf dem eigenen Testset. Das ist ein Perception-Benchmark, keine Nutzerstudie und kein Nachweis für Bewegungssicherheit. Quelle J-14.

### 1.3 Was die VLM-Studien zeigen und was nicht

- Eine Studie mit BLV-Teilnehmenden untersucht Präferenzen für VLM-Beschreibungen und entwickelt einen Evaluator, der besser mit menschlichen Urteilen übereinstimmen soll. Die frühere Fassung arXiv 2502.14883 wurde zurückgezogen und durch arXiv 2510.00766 ersetzt. Ich zitiere nur die aktuelle Fassung. Die Studie belegt einen Evaluationsbedarf, nicht die Alltagstauglichkeit eines bestimmten Modells. Quelle J-16.
- Eine ACL-Arbeit von 2025 evaluiert SmolVLM2 mit 500M und 2,2B Parametern auf Outdoor- und Indoor-Datensätzen, vergleicht vier Prompt-Strategien und deployt die Modelle auf einem Smartphone in FP32 und INT8. Das zeigt, dass mobile leichte VLMs untersucht werden. Es zeigt nicht, dass sie eine konkrete Einkaufs-, Frage- oder Gehsituation zuverlässig lösen. Quelle J-15.
- Die Baseline nennt zu Recht, dass ein eloquenter Text keine räumliche Messung ist. Ich ergänze: Auch eine korrekte Objektbezeichnung ist kein Nachweis, dass das Objekt im eigenen Weg liegt, erreichbar ist oder gefahrlos umgangen werden kann.

### 1.4 Bereichsspezifische Machbarkeit

**Einkaufen**

- Wahrscheinlich technisch am ehesten zugänglich: Barcode, OCR, Preisschild, Verpackungstext, Produktvergleich.
- Schwierig ist nicht das Lesen allein, sondern die Zuordnung: Welcher Preis gehört zu welchem Produkt, welche Packung ist die gesuchte, was ist bei ähnlichen Verpackungen oder fehlendem Etikett zu tun.
- Es gibt in den geprüften Quellen keine belastbare Studie, die eine vollständige Einkaufssituation mit blinden Menschen und einem aktuellen VLM evaluiert. Das ist eine Annahme, keine Evidenz.
- Gegenprobe: 20 Produkte, jeweils mit und ohne Barcode, mit ähnlichen Verpackungen, Spiegelungen, schräger Kamera, teilweise verdecktem Etikett, wechselnder Beleuchtung. Messen: korrekte Produkt-Preis-Zuordnung, exakte Textübereinstimmung, Umgang mit Unsicherheit, Zeit, Abbrüche. Zusätzlich mit Apple Live Text, Seeing AI oder Be My AI als Vergleichsbasis, sofern zugänglich.

**Fragen an die App**

- Technisch plausibel für Text, Etiketten, Schilder, Dokumente und einfache Szenenfragen.
- Kritisch sind Antwortrichtigkeit, Quellenbezug, Umgang mit fehlender Sicht und die Entscheidung, wann das System „ich weiß es nicht“ sagen muss.
- Die geprüften Studien stützen die These, dass BLV-Nutzer unterschiedliche Beschreibungstiefe und -form bevorzugen und dass automatische Metriken das nur unvollständig abbilden. Sie stützen keine bestimmte Modellwahl.
- Gegenprobe: 60 Fragen mit manuell geprüften Referenzantworten, davon ein Drittel absichtlich nicht beantwortbar oder mehrdeutig. Messen: korrekt, teilweise korrekt, falsch, erfunden, verweigert, Rückfrage gestellt, Latenz. Zusätzlich von blinden Testpersonen bewerten lassen, ob die Antwort handlungsleitend und ausreichend war.

**Interaktion mit Menschen**

- Hier ist die größte Unsicherheit, und sie ist nicht primär eine Modellfrage. Die App darf keine fremden Menschen ungefragt aufzeichnen, keine Gespräche überlagern und keine Worte vorgeben.
- Die Baseline beschreibt die Absicht gut. Ein belastbarer Nachweis, dass eine App beim Formulieren einer Frage oder beim Verstehen einer Antwort tatsächlich hilft, fehlt.
- Der Privatsphäre-Hinweis von Gemini Robotics ER 2 macht zusätzlich deutlich, dass Anbieter für die Verarbeitung von Personen in der Umgebung eine Information und Zustimmung verlangen können. Das ist im Alltag oft nicht leistbar.
- Gegenprobe: Rollenspiel mit geschulter Person an einem Serviceschalter, ohne Audioaufzeichnung der Umgebung. Messen: Kann die Person ihre Frage selbst formulieren? Fühlt sie sich unterstützt oder gedrängt? Versteht sie die Antwort? Bricht sie ab? Wird die Interaktion sozial akzeptabel erlebt? Vergleich mit einer einfachen vorbereiteten Fragekarte ohne KI.

**Orientierung und Navigation**

- Technisch am weitesten untersucht, aber auch am strengsten zu prüfen.
- Sinnvolle Trennung: statische Beschreibung (Tür, Schild, Treppe, Rolltreppe, Fahrzeuganzeige), lokale Hinderniswarnung und eigentliche Bewegungsführung. Das sind drei verschiedene Risikoklassen.
- Keine Straßenüberquerung, keine unbegleitete Pilotierung, keine Sicherheitszusage aus einer Demo.
- Gegenprobe: geschlossener Parcours mit Spotter, mindestens 10 Teilnehmende, Hindernisse aus verschiedenen Materialien und Höhen, Spiegel, Glas, dünne Stangen, Menschenmenge, Gegenlicht, Dunkelheit, Nässe, Bewegungsunschärfe, falsche Kamerahaltung. Messen: übersehene Hindernisse, falsche Entwarnungen, Fehlwarnungen pro Minute, Zeit bis zur hörbaren Warnung, Abbruchquote, Vertrauen und Fehlerkorrektur.

### 1.5 Latenz und Bewegungsphysik

Eine einfache Rechnung, ausdrücklich als Annahme:

- 1,0 m/s Gehgeschwindigkeit und 1 Bild pro Sekunde ergeben 1,0 m zwischen zwei Bildern.
- 1,4 m/s ergeben 1,4 m.
- Kommen 500 ms Modell- und Netzwerklatenz sowie 300 ms bis zur hörbaren Ausgabe hinzu, liegt die Information bereits 1,3 bis 2,1 m zurück.
- Bei p95-Latenz ist der Abstand größer. Ein Durchschnittswert ist für Sicherheitsfragen ungeeignet.

Daraus folgt für die erste Phase: keine kontinuierliche Bewegungsanweisung. Sinnvoll sind stationäre Fragen („Was ist vor mir?“), eine lokale, nicht-modellbasierte Hinderniswarnung mit klarer Grenze oder ein deutliches „Stopp“ bei erkanntem Hindernis. Ob ein solcher Stopp zuverlässig genug ist, muss gemessen werden, nicht behauptet.

Zu messen sind p50 und p95 der Zeit von der Bildaufnahme bis zum ersten hörbaren Laut, die Zeit bis zur vollständigen Antwort, die Unterbrechbarkeit der Sprachausgabe und das Verhalten bei Netzausfall.

## 2. Nutzerbedürfnisse

### 2.1 Was die Baseline belegen kann und was nicht

Die Baseline stützt sich auf:

- eine private Anfrage einer blinden Person, verallgemeinert,
- die Beobachtung zu E-Scootern und taktilen Leitstreifen,
- die DBSV-Position zu E-Scootern,
- die Codex-Analyse des Altprojekts,
- zwei kleine Studien aus 2026 (Mobilio, NavSight) und eine kleine VLM-Studie.

Das ist ein guter Ausgangspunkt, aber keine repräsentative Bedarfsstudie. Die 112-Personen-Befragung von Mobilio bezieht sich auf Outdoor-Navigation, nicht auf Einkaufen, Fragen oder menschliche Interaktion. Die 14 Experimentierteilnehmenden sind keine Stichprobe für alle blinden und sehbehinderten Menschen. Die 12 Personen bei NavSight haben Sehbehinderung und nutzen AR, was nicht für alle gleich ist.

Die Baseline sagt das selbst. Ich verstärke den Punkt: Auch die vier Bereiche sind keine gleichrangig belegten Bedürfnisse. Einkaufen, Fragen und menschliche Interaktion wurden als Projektumfang beschlossen. Sie sind Forschungshypothesen, bis Betroffene sie in konkreten Situationen bestätigen.

### 2.2 Wie Priorisierung aussehen sollte

Keine Feature-Abstimmung und keine Rangliste nach Lautstärke. Besser:

- **Kritische Ereignisse erfragen:** eine konkrete Situation, in der etwas schiefging oder unnötig schwer war.
- **Ablauf beobachten:** vom Auslöser bis zum Ergebnis, einschließlich Vorbereitung, Kamerahaltung, Fehler, Abbruch und Wiederholung.
- **Bestehende Hilfsmittel vergleichen:** Langstock, Führhund, iPhone Magnifier, Be My Eyes, Seeing AI, Google Maps, menschliche Hilfe. Was leistet die neue Funktion zusätzlich?
- **Belastung messen:** nicht nur Zeit, sondern auch wahrgenommene Anstrengung, Vertrauen, soziale Akzeptanz und Kontrolle.
- **Abbruch als Ergebnis zählen:** Eine Person, die eine Funktion nach zwei Versuchen nicht mehr nutzt, ist ein relevantes Ergebnis, keine missing data.

### 2.3 Stichprobe und Vielfalt

Für die erste Runde reichen 3 bis 5 Personen, wenn die Grenzen klar dokumentiert werden. Wichtig ist eine bewusste Mischung, nicht Repräsentativität:

- von Geburt an blind und später erblindet,
- Blindheit und Sehbehinderung,
- Langstock und Führhund,
- erfahrene und unerfahrene Smartphone-Nutzung,
- unterschiedliche Altersgruppen,
- Deutsch und Englisch,
- möglichst unterschiedliche Alltagskontexte.

Keine Diagnose verlangen. Funktionsbezogene Angaben nur freiwillig und nur, wenn sie für die Aufgabe nötig sind. Die Auswahl begründen und die Grenzen im Bericht nennen.

### 2.4 Was ein „vollständiger Ablauf“ ist

D-11 bleibt sonst zu abstrakt. Ein Ablauf ist erst vollständig, wenn er mindestens umfasst:

1. Auslöser und Ziel der Person,
2. Vorbereitung und Gerätehaltung,
3. eigentliche Aufgabe,
4. Umgang mit fehlender Information oder Fehler,
5. Ergebnis und Abbruch,
6. was die Person danach anders macht.

Beispiele für die erste Runde, ohne sie zur endgültigen Funktionsliste zu machen:

- Einkaufen: ein Produkt finden, von einem ähnlichen unterscheiden und den Preis zuordnen.
- Frage: ein Etikett oder Schild lesen und bei Unklarheit nachfragen.
- Menschliche Interaktion: an einem Serviceschalter eine Frage stellen und die Antwort einordnen.
- Navigation: einen Eingang finden und bis zur Tür gehen, ohne Straßenüberquerung.

## 3. Barrierefreiheit

### 3.1 Prüfziel und Grenze

Prüfziel bleibt WCAG 2.2 AA. Die Norm ist eine W3C-Empfehlung vom 2024-12-12. Sie ist notwendig, aber nicht hinreichend. Das W3C schreibt selbst, dass Konformitätsprüfung und Evaluation mit Betroffenen kombiniert werden sollen und dass Ergebnisse kleiner Gruppen nicht verallgemeinerbar sind. Quelle J-01, J-05.

Keine vorzeitige Konformitätsbehauptung. Immer angeben: geprüfte Seiten, geprüfte Technologien und Versionen, nicht geprüfte Bereiche.

### 3.2 Besonders relevante Kriterien für den Teilnahmeweg

- **1.4.3 Kontrast (Minimum)** und **1.4.11 Nicht-Text-Kontrast:** Text und Bedienelemente müssen auch bei Sehbehinderung unterscheidbar sein. Information nicht nur über Farbe.
- **1.4.4 Text vergrößern** und **1.4.10 Reflow:** 200 Prozent ohne Verlust, 320 CSS Pixel Breite ohne horizontales Scrollen für normalen Inhalt.
- **2.1.1 Tastatur** und **2.4.7 Sichtbarer Fokus:** der gesamte Weg muss ohne Maus funktionieren.
- **2.4.11 Fokus nicht verdeckt:** besonders bei sticky headers oder Cookie-Hinweisen. Keine Overlays, die den Fokus verdecken.
- **2.5.8 Zielgröße (Minimum):** mindestens 24 mal 24 CSS Pixel oder ausreichender Abstand. Für wichtige Schaltflächen größer planen. Quelle J-03.
- **3.2.6 Konsistente Hilfe:** Hilfe und Sprachwechsel an derselben Stelle.
- **3.3.1 Fehlererkennung** und **3.3.3 Fehlervorschlag:** Fehler am Feld und als Zusammenfassung, mit verständlichem Vorschlag.
- **3.3.7 Redundante Eingabe:** Sprache wechseln, zurückgehen oder Validierungsfehler dürfen nicht dazu führen, dass bereits eingegebene Antworten verloren gehen. Quelle J-04.
- **3.3.8 Barrierefreie Authentifizierung:** Falls später ein Konto nötig wird, darf kein kognitiver Test verlangt werden. Ein Audio-CAPTCHA, das abgetippt werden muss, genügt nicht. Quelle J-02.
- **4.1.2 Name, Rolle, Wert:** alle Bedienelemente korrekt ausgezeichnet.

### 3.3 Der Interviewweg

Der Weg über einen externen KI-Chat ist der größte ungeprüfte Barrierefaktor. Die Prompts sind gut lesbar, aber die Barrierefreiheit des jeweiligen Chat-Anbieters ist nicht garantiert. Ein Screenreader-Nutzer kann den Prompt kopieren, aber die Chat-Oberfläche, die Spracherkennung und die Antwortausgabe können unzugänglich sein. Deshalb:

- **Manueller Weg als gleichwertige Alternative:** Fragen als normal lesbarer Text, Antworten in einem eigenen Dokument, per Sprache oder per E-Mail. Kein Zwang zu einem bestimmten Chat.
- **Prompt als Text, nicht als Bild.** Kopierknopf plus Markieren als Fallback. Rückmeldung über eine höfliche Live-Region, nicht über eine nur visuelle Änderung.
- **Ein Schritt pro Seite oder Abschnitt.** Fortschritt, Überspringen, Pause und Abschluss müssen immer erreichbar sein. Kein Zeitlimit.
- **Sprachwechsel als Link, nicht als JavaScript-only-Umschalter.** `lang`-Attribut korrekt setzen. Beim Wechsel keine Eingaben verlieren. Keine automatische Übersetzung als ungeprüfte Veröffentlichung.
- **Keine automatische Sprachausgabe.** Audio nur nach ausdrücklicher Aktion. Keine Autoplay-Ansagen.
- **Fehlerzusammenfassung oben, Fokus dorthin, Felder verlinkt.** Eingaben erhalten.
- **Kein CAPTCHA als Teilnahmehürde.** Missbrauchsschutz serverseitig über Ratenbegrenzung und Moderation, nicht über ein visuelles Rätsel.
- **Löschen und Abbrechen klar beschriften.** „Abschließen“ darf nicht wie „Veröffentlichen“ aussehen.

### 3.4 Testprotokoll

Automatisierte Prüfungen sind der Anfang, nicht der Abschluss:

- axe oder vergleichbar, HTML-Validierung, Linkprüfung, Lighthouse als Hinweis, nicht als Nachweis.
- Vollständiger Tastaturdurchlauf inklusive Fokusreihenfolge und Fokusfalle.
- VoiceOver mit Safari auf macOS und iOS.
- NVDA mit Firefox oder Chrome unter Windows.
- TalkBack mit Chrome auf Android.
- 200 Prozent und 400 Prozent Zoom, 320 CSS Pixel Breite.
- Windows High Contrast beziehungsweise forced colors, reduzierte Bewegung.
- Screenreader mit Braillezeile, falls verfügbar.
- Mindestens drei Betroffene mit unterschiedlichen Hilfsmitteln für den vollständigen Weg. Keine Verallgemeinerung der Ergebnisse.

Die konkreten Versionen, Betriebssysteme und Ergebnisse sind zu protokollieren. „Getestet“ ohne diese Angaben ist keine überprüfbare Aussage.

## 4. Einfachste tragfähige Architektur

### 4.1 Phase A: statische Website ohne Backend

Die einfachste tragfähige Lösung ist eine statische Astro-Website:

- Inhalte als Markdown oder Content Collections, keine Datenbank.
- i18n über Astros eingebaute Routing-Funktionen: `locales: ["de", "en"]`, `defaultLocale: "de"`, `prefixDefaultLocale: true` für `/de/` und `/en/`, `/` als zugängliche Sprachauswahl. Astro dokumentiert diese Optionen und die Fallback-Strategie. Quelle J-23.
- Kein Backend, keine Konten, keine Cookies, keine Analytics, kein Newsletter, keine externen Schriftarten oder Skripte.
- Statisches Hosting mit TLS. Hosting, Domain und Betreiber bleiben offene Entscheidungen.
- Seiten: Status, vier Bereiche, Teilnahme (nur wenn aktiv), Quellen und Forschung, Barrierefreiheit, Datenschutz, Impressum.
- Keine Erfolgsmeldung und kein Formular, solange es keinen aktiven Weg gibt.

Diese Phase ist auch dann sinnvoll, wenn noch keine Moderationslösung existiert. Sie darf aber nicht den Eindruck erwecken, es gäbe bereits eine Einreichungsstelle.

### 4.2 Phase B: moderierter Einreichungsweg

Erst nach diesen Entscheidungen:

- Betreiber und verantwortliche Moderation,
- Rechtsgrundlage und Datenschutzhinweise,
- Aufbewahrungsdauer und Löschverfahren,
- Kontakt- und Rücknahmekanal,
- Missbrauchsschutz und Missbrauchsfolgen,
- Barrierefreiheit des Formulars,
- Betriebsverantwortung und Vertretung.

Die kleinste sinnvolle technische Form:

- Ein schlanker serverseitiger Endpunkt nimmt die freigegebene Zusammenfassung entgegen.
- Speicherung in einem privaten, zugriffsbeschränkten Speicher in der EU.
- Zufällige Vorgangs-ID, keine öffentliche Kontoverknüpfung.
- Optionaler Kontaktweg für Rückfragen und Rücknahme. Wenn Kontaktdaten erhoben werden, getrennt von der Zusammenfassung speichern und gesondert löschen.
- Keine Gesprächsinhalte in Server-Logs. Keine Analyse-Tools.
- Idempotenz-Schlüssel gegen Doppelübermittlung. Bei unklarem Ergebnis erst prüfen, dann erneut senden.
- Moderationscheckliste: Identifizierbarkeit, Daten Dritter, genaue Orte, Einwilligungsstatus, Namenswunsch, Website-Freigabe.
- Veröffentlichung erst nach expliziter Freigabe. Inhaltliche Änderungen erfordern erneute Freigabe.
- Zwei-Personen-Prinzip bei Veröffentlichung, wenn möglich.

Alternativen und Nachteile:

- **Externer Formulardienst:** schnell, aber zusätzlicher Auftragsverarbeiter, mögliche Drittlandübermittlung, Lock-in und eigene Barrierefreiheitsrisiken.
- **E-Mail-Postfach:** sehr einfach, aber unstrukturiert, schwer löschbar, keine verlässliche Vertraulichkeit und kein sauberer Nachweis.
- **Nur GitHub-Issue:** öffentlich, kein privater Weg, keine Anonymität. Als freiwilliger Zusatzweg möglich, nicht als einziger Weg.

Keine eigene Datenbank, kein CMS, keine Benutzerkonten und keine App in dieser Phase. Das wäre vermeidbare Komplexität.

### 4.3 Offene Betriebsentscheidungen

- Wer betreibt die Seite und trägt die rechtliche Verantwortung?
- Wo liegen Domain, Hosting und Backend?
- Wer moderiert, mit welcher Vertretung und welcher Zeit?
- Wie lange werden Einsendungen und Kontaktdaten aufbewahrt?
- Wie wird die Löschung technisch und organisatorisch nachgewiesen?
- Wie werden Sicherheitsvorfälle behandelt?
- Welche Lizenz gilt für Dokumentation und späteren Code?
- Wie werden Betroffene für Tests entschädigt?

## 5. Veröffentlichung, Konto-Sichtbarkeit, Freigabe, Identifizierbarkeit, Ausfälle

### 5.1 Rechtlicher Rahmen

**Art. 9 DSGVO:** Die Verarbeitung von Gesundheitsdaten ist grundsätzlich untersagt. Blindheit und Sehbehinderung sind Gesundheitsdaten. Eine Ausnahme ist die ausdrückliche Einwilligung nach Art. 9 Abs. 2 Buchst. a. Diese muss für einen oder mehrere festgelegte Zwecke erfolgen. Quelle J-21.

Weitere Punkte, die vor Aktivierung zu klären sind:

- **Art. 7 DSGVO:** Bedingungen der Einwilligung, Widerrufbarkeit, Nachweisbarkeit.
- **Art. 13 DSGVO:** Information über Zweck, Empfänger, Speicherdauer, Rechte.
- **Art. 17 DSGVO:** Löschung, soweit keine Ausnahme greift.
- **Art. 5 DSGVO:** Datenminimierung und Speicherbegrenzung.
- **Art. 32 DSGVO:** angemessene technische und organisatorische Sicherheit.
- **Art. 44 DSGVO:** Drittlandübermittlung, falls ein Anbieter außerhalb der EU verarbeitet.

Das ist keine Rechtsberatung. Vor dem öffentlichen Start ist eine juristische Prüfung nötig, insbesondere für den moderierten Weg und für die Frage, ob das BFSG anwendbar ist. Das BFSG gilt seit 2025-06-28 für bestimmte Produkte und Dienstleistungen, darunter Dienstleistungen im elektronischen Geschäftsverkehr. Ob eine reine Informations- und Forschungswebsite darunterfällt, ist nicht pauschal zu bejahen und nicht pauschal zu verneinen. Quelle J-22.

### 5.2 Öffentliches GitHub-Issue

- Das Issue ist öffentlich lesbar, suchbar und kopierbar.
- Das veröffentlichende Konto bleibt als Autor sichtbar.
- Auch nach Löschen können Kopien, Suchmaschinen-Caches, Benachrichtigungen und Forks bestehen.
- Ein entferkter Name garantiert keine Anonymität. Seltene Berufe, genaue Wege, kleine Orte, Kombinationen von Merkmalen können identifizieren.
- „Pseudonym“ ist zu schwach. Solange das Konto einer Person zugeordnet werden kann, ist der Beitrag öffentlich zurechenbar.

Die Baseline formuliert „nur pseudonym“. Ich würde das durch „öffentlich zurechenbar, nicht anonym“ ersetzen. Das ist eine inhaltliche Korrektur, keine Formalie.

### 5.3 Moderierter Weg

- Der moderierte Weg reduziert die öffentliche Kontoverknüpfung, beseitigt aber keine Identifizierbarkeit gegenüber dem Betreiber und keinen Rest an Re-Identifikation im Text.
- Keine absolute Anonymität versprechen.
- Der Betreiber sieht mindestens die Einsendung und den Vorgang. Wenn Kontaktdaten erhoben werden, sieht er auch diese.
- Veröffentlichung unter einem Projektkonto ist keine Anonymität gegenüber der Plattform und keine Garantie gegen Rückverfolgung durch Metadaten.
- Rückfragen dürfen keine verpflichtende öffentliche Kontaktangabe voraussetzen.

### 5.4 Einwilligungsmodell

Vier getrennte Entscheidungen, jeweils ohne Vorauswahl:

1. Teilnahme am Gespräch.
2. Veröffentlichung der Zusammenfassung als Issue oder im moderierten Weg.
3. Öffentliche Namensnennung.
4. Spätere Darstellung als Geschichte auf der Website.

Jede Entscheidung in einfacher Sprache erklären. Zweck, Empfänger, Speicherdauer und Widerruf nennen. Ein „Ja“ zur Teilnahme ist kein „Ja“ zur Veröffentlichung. Ein „Ja“ zum Issue ist kein „Ja“ zur Website. Die Version des Textes und der Zeitpunkt der Einwilligung sollten nachweisbar sein.

### 5.5 Identifizierbarkeit und Moderation

Checkliste vor Veröffentlichung:

- Name, Adresse, Telefonnummer, E-Mail entfernt.
- Genaue Wege, Zeiten, Arbeitgeber, seltene Hobbys und Daten Dritter entfernt oder verallgemeinert.
- Kontext, der in Kombination identifizieren könnte, geprüft.
- Die Person hat den vollständigen Text einschließlich Titel gesehen und freigegeben.
- Vermutungen des Modells sind nicht als Aussagen der Person formuliert.
- Keine Rohtranskripte, Anhänge oder Metadaten.
- Bei Unsicherheit: nachfragen, nicht veröffentlichen.

### 5.6 Ausfall- und Abbruchfälle

- **Kein Netz:** Entwurf lokal halten, klar sagen, dass nichts gesendet wurde.
- **Fehler beim Senden:** keine Erfolgsmeldung. Retry mit Idempotenz, vorher Prüfung auf vorhandene Einsendung.
- **Unklares Ergebnis:** nicht blind erneut senden.
- **Abbruch:** nichts übermitteln, Text auf Wunsch lokal bereitstellen.
- **Keine GitHub-Anbindung:** kopierbaren Text liefern, keinen Issue-Link erfinden.
- **Moderation nicht aktiv:** keinen Formularlink veröffentlichen.
- **Inhalt nach Vorschau geändert:** erneute Freigabe.
- **Widerruf vor Veröffentlichung:** nicht veröffentlichen, Nachweis dokumentieren.
- **Widerruf nach Veröffentlichung:** Löschung versuchen, aber keine vollständige Rückholung fremder Kopien versprechen.

## 6. Kleinster sinnvoller nächster Schritt und Abnahmekriterien

### 6.1 Empfehlung

Der kleinste sinnvolle Schritt ist **keine App und kein Backend**, sondern eine kleine, moderierte Ablaufstudie mit 3 bis 5 Betroffenen. Sie setzt D-11 um und liefert die Grundlage für die Priorisierung. Parallel oder danach kann eine statische Statusseite entstehen. Der moderierte Einreichungsweg folgt erst nach den Betriebs- und Rechtsentscheidungen.

Wenn für die Rekrutierung zwingend eine Website gebraucht wird, ist die statische Seite ohne Formular der erste Implementierungsschritt. Sie darf keine Teilnahme versprechen, solange der Weg nicht aktiv ist.

### 6.2 Ablaufstudie: Abnahmekriterien

- Mindestens 3 Teilnehmende, möglichst 5, mit unterschiedlichen Hilfsmitteln und Seherfahrungen.
- Mindestens zwei der vier Bereiche abgedeckt, davon mindestens ein Nicht-Navigationsbereich.
- Jede Person durchläuft mindestens einen vollständigen Ablauf mit bestehenden Hilfsmitteln oder einem niedrigschwelligen Prototyp.
- Keine Straßenüberquerung, keine unbegleitete Navigation, keine gefährlichen Tests. Spotter anwesend. Jederzeit stoppbar.
- Einwilligung nach Aufklärung, getrennt für Teilnahme und spätere Verwendung. Keine Rohdaten im öffentlichen Repo.
- Eine unabhängige Moderation, die nicht gleichzeitig die technische Lösung verkauft.
- Erhoben werden: Aufgabenabschluss, sachliche Richtigkeit, Zeit, Informationsmenge (zu wenig, passend, zu viel), wahrgenommene Anstrengung, Vertrauen, Fehlerkorrektur, Abbruch, soziale Akzeptanz.
- Ergebnis: eine begründete Priorisierung von zwei bis drei Abläufen, je mit Fehlerbildern, offenen Fragen und messbaren Anforderungen.
- Prüfbar: Protokoll, anonymisierte Notizen, Einwilligungsnachweise, Abschlussbericht mit Grenzen. Keine Namen, keine Rohzitate, keine Kontaktdaten.

### 6.3 Statische Website: Abnahmekriterien

- DE und EN decken dieselben vier Bereiche und denselben Status ab.
- `/` bietet eine zugängliche Sprachauswahl, `/de/` und `/en/` sind direkt erreichbar.
- Kein Backend, keine Konten, keine Cookies, keine Analytics, keine Formulare.
- Der Teilnahmeweg wird nur beschrieben, wenn er tatsächlich aktiv ist. Sonst klar „noch nicht verfügbar“.
- WCAG-2.2-AA-Prüfziel erreicht, soweit automatisiert und manuell geprüft. Ergebnisse und Lücken dokumentiert.
- Tastatur, VoiceOver/Safari, NVDA/Chrome oder Firefox, 320 CSS Pixel, 200/400 Prozent Zoom geprüft.
- Alle relativen Links, die Seitensprache, die Überschriftenhierarchie und die Fokusreihenfolge geprüft.
- Datenschutz, Impressum, Betreiber und Barrierefreiheitserklärung vorhanden.
- Keine erfundenen Partner, keine erfundene Wirkung, keine behauptete Zertifizierung.
- `git diff --check`, Linkprüfung und ein manueller Inhaltsreview bestanden.

### 6.4 Was die Empfehlung ändern würde

- Wenn die Ablaufstudie zeigt, dass bestehende Hilfsmittel die Situation bereits ausreichend lösen, wird der Umfang enger.
- Wenn die Rechtsprüfung das BFSG oder eine andere Pflicht bejaht, ändert sich der Zeitplan.
- Wenn keine Moderation und keine Löschfähigkeit bereitstehen, wird der Einreichungsweg nicht aktiviert.
- Wenn keine diversen Teilnehmenden gewonnen werden können, wird die Aussagekraft ausdrücklich begrenzt und nicht als Repräsentativität ausgegeben.

## Empfehlungsregister

Die folgenden Empfehlungen sind Vorschläge, keine angenommenen Entscheidungen. Jede nennt Problem, Alternative, Evidenz oder Annahme und den nächsten Test.

**E-1: Statische Website ohne Backend zuerst**

- Problem: Ohne öffentliche Information fehlt Transparenz, mit Backend entstehen Datenschutz- und Betriebsrisiken.
- Empfehlung: Statische Astro-Seite in DE/EN, keine Konten, Cookies, Analytics oder Formulare.
- Alternative: Warten, bis der moderierte Weg vollständig betriebsbereit ist. Nachteil: keine öffentliche Statusseite, keine Recruitment-Basis.
- Evidenz/Annahme: Astro dokumentiert i18n-Routing und statische Seiten. Die Betriebsentscheidungen sind offen. Annahme: eine reine Statusseite ist ohne Backend sinnvoll und risikoarm.
- Nächster Test: Statischen Build mit Tastatur, VoiceOver/Safari, NVDA/Chrome, 320 CSS Pixel und 200/400 Prozent Zoom prüfen. Keine Konformitätsbehauptung vor dem Test.

**E-2: Moderierten Einreichungsweg erst nach Betriebs- und Rechtsentscheidungen aktivieren**

- Problem: Ein Formular ohne Betreiber, Löschverfahren und Moderation erzeugt falsche Erwartungen und Datenschutzrisiken.
- Empfehlung: Erst Betreiber, Rechtsgrundlage, Aufbewahrung, Löschung, Kontaktweg und Moderation klären, dann einen schlanken privaten Endpunkt bauen.
- Alternative: Nur GitHub-Issues. Nachteil: öffentlich, nicht anonym, kein geschützter Weg für Menschen ohne Konto.
- Evidenz/Annahme: DSGVO Art. 9 und die Baseline-Spezifikation verlangen ausdrückliche Einwilligung und einen Rücknahmeweg. Annahme: ein kleiner privater Dienst ist ohne eigene Datenbank beherrschbar.
- Nächster Test: Prüfen, ob eine Datenschutz-Folgenabschätzung erforderlich ist. Löschprobe mit Testdaten, bevor echte Daten angenommen werden.

**E-3: Vier getrennte Einwilligungen**

- Problem: Eine pauschale Zustimmung vermischt Teilnahme, Veröffentlichung, Namensnennung und Website-Nutzung.
- Empfehlung: Vier separate, nicht vorausgewählte Entscheidungen mit klarer Sprache und nachweisbarer Version.
- Alternative: Eine einzige Zustimmung mit Checkbox. Nachteil: rechtlich und ethisch zu grob, Widerruf nicht sauber abbildbar.
- Evidenz/Annahme: Art. 9 Abs. 2 Buchst. a DSGVO verlangt ausdrückliche Einwilligung für festgelegte Zwecke. Die Baseline fordert getrennte Entscheidungen bereits in der Spezifikation.
- Nächster Test: Text mit 5 Betroffenen auf Verständlichkeit prüfen, insbesondere Unterschied zwischen Issue und Website.

**E-4: Deterministischer manueller Interviewweg**

- Problem: Der KI-Chat ist möglicherweise nicht barrierefrei und verarbeitet Daten beim Anbieter.
- Empfehlung: Dieselben Fragen als lesbarer Text, Antworten lokal oder per vereinbartem Kontaktweg, ohne Zwang zu einem bestimmten Chat.
- Alternative: Nur KI-Chat. Nachteil: Abhängigkeit von einem fremden Anbieter, ungeprüfte Bedienbarkeit, zusätzliche Datenübermittlung.
- Evidenz/Annahme: W3C empfiehlt die Kombination aus Konformität und Evaluation mit Betroffenen. Die Barrierefreiheit externer Chats wurde nicht geprüft.
- Nächster Test: Vollständigen manuellen Weg mit drei Screenreader-Nutzern durchlaufen, inklusive Kopieren, Sprachwechsel und Abbruch.

**E-5: Keine kontinuierliche Bewegungsführung in der ersten Phase**

- Problem: 1 FPS plus Latenz erzeugt einen zu großen blinden Fleck für Gehanweisungen.
- Empfehlung: Stationäre Fragen, lokale Hinderniswarnung mit klarer Grenze oder deutliches Stoppsignal. Keine Straßenüberquerung.
- Alternative: Kontinuierliche VLM-Führung. Nachteil: ungemessene Latenz, Halluzinationsrisiko, keine Sicherheitsvalidierung.
- Evidenz/Annahme: Gemini-Streaming dokumentiert höchstens 1 FPS. Mobilio validiert kontrollierte Wege; eine Straßenüberquerung wird nicht berichtet. Die Latenzrechnung ist eine Annahme.
- Nächster Test: Geschlossener Parcours mit Spotter, p50/p95-Latenz, falsche Entwarnungen und übersehene Hindernisse messen.

**E-6: Ablaufstudie mit 3 bis 5 Betroffenen vor der App-Architektur**

- Problem: Die Priorisierung der vier Bereiche ist offen, und die Baseline belegt vor allem Navigation.
- Empfehlung: Moderierte Studie mit vollständigen Abläufen, bestehenden Hilfsmitteln und niedrigschwelligem Prototyp.
- Alternative: Online-Umfrage. Nachteil: keine Beobachtung von Kamerahaltung, Fehlern und Abbruch.
- Evidenz/Annahme: D-11 ist bestätigt. Die Baseline nennt keine abgeschlossene Bedarfsstudie für alle vier Bereiche.
- Nächster Test: Protokoll und Einwilligung vorab prüfen, dann mindestens drei vollständige Abläufe beobachten und anonymisiert auswerten.

**E-7: Bestehende Hilfsmittel als Vergleichsbasis**

- Problem: Eine neue Funktion kann schlechter sein als eine bereits vorhandene, kostenlose Lösung.
- Empfehlung: Apple Detection Mode, Be My Eyes, Seeing AI, Google Maps und menschliche Hilfe in die Tests aufnehmen.
- Alternative: Nur die eigene Lösung testen. Nachteil: kein Nachweis eines Zusatznutzens.
- Evidenz/Annahme: Apple Detection Mode ist dokumentiert. Die Baseline nennt bestehende Hilfen, vergleicht sie aber nicht systematisch.
- Nächster Test: Gleiche Aufgabe mit eigener Lösung und mit mindestens einer bestehenden Hilfe, Reihenfolge randomisiert.

**E-8: WCAG 2.2 AA plus Tests mit Betroffenen**

- Problem: Automatische Prüfungen finden nur einen Teil der Barrieren.
- Empfehlung: WCAG 2.2 AA als Prüfziel, ergänzt um Tastatur, Screenreader, Zoom und Tests mit Betroffenen.
- Alternative: Nur automatisierte Checks. Nachteil: keine Aussage über tatsächliche Bedienbarkeit.
- Evidenz/Annahme: W3C beschreibt die Grenzen reiner Konformitätsprüfung ausdrücklich.
- Nächster Test: Prüfprotokoll mit Versionen, Ergebnissen und offenen Lücken veröffentlichen.

## Widersprüche und Korrekturen zur Codex-Grundlage

1. **R-11 ist inzwischen stärker belegt.** Die Baseline führt Mobilio als Recherchehinweis ohne eigenen Nachweis. Die Studie ist am 2026-08-24 in *Nature Biomedical Engineering* peer-reviewed erschienen. Ich übernehme die konkreten Werte, aber nur mit den Einschränkungen der Studie.
2. **R-02 ist bestätigt und präzisiert.** ER 2 ist Preview, ER 1.6 wurde am 2026-08-31 abgekündigt. Die Streaming-Rate und die zusätzliche Auslöseranforderung sind dokumentiert.
3. **R-07 und R-08 sind bestätigt.** Apple Detection Mode und die ARKit-Konfidenzkarte sind Primärquellen. Damit ist die On-Device-Baseline keine bloße Annahme mehr.
4. **R-12 ist als Existenz bestätigt, nicht als Leistung.** Cosmos 3 und Qwen3.5-4B existieren. Die genannten Benchmarks sind Herstellerangaben und keine Messung in unseren Aufgaben.
5. **„Nur pseudonym“ ist zu schwach.** Ein öffentliches Issue mit sichtbarem Konto ist öffentlich zurechenbar. Die Formulierung sollte „nicht anonym“ lauten.
6. **Die Interview-Prompts brauchen einen deterministischen Fallback.** Die Anweisung „eine Frage pro Schritt“ ist eine Bitte an ein fremdes Modell. Ein manueller Weg mit denselben Fragen ist nicht optional, sondern Teil der Barrierefreiheit.
7. **Die Reihenfolge „Analysen, dann Website“ ist zu grob.** Zwischen Synthese und App-Architektur fehlt die Ablaufstudie. Die Website kann statisch vorher entstehen, der Einreichungsweg nicht.

## Offene Fragen

- Welche zwei bis drei Abläufe werden zuerst geprüft, und wer entscheidet das mit Betroffenen?
- Wer betreibt und moderiert, und welche Zeit steht dafür wirklich zur Verfügung?
- Welche Rechtsgrundlage und welche Aufbewahrungsdauer gelten für den moderierten Weg?
- Ist das BFSG auf die geplante Website anwendbar? Das ist juristisch zu klären.
- Wie werden Menschen ohne E-Mail, ohne GitHub und ohne Smartphone erreicht?
- Gibt es eine Finanzierung für Aufwandsentschädigungen und barrierefreie Testgeräte?
- Welche Lizenz gilt für Dokumentation, Website und späteren Code?
- Wie wird verhindert, dass eine scheinbar erfolgreiche Demo als Sicherheitsnachweis verstanden wird?
- Wie wird mit Widersprüchen zwischen Modellausgabe, menschlicher Beobachtung und Messung umgegangen?

## Quellen mit Abrufdatum

Alle Quellen wurden am 2026-10-20 abgerufen. HTTP-Status der geprüften URLs: 200, mit einer Ausnahme: EUR-Lex lieferte für den HTML-Volltext 202 und keinen Inhalt. Der Wortlaut von Art. 9 DSGVO wurde deshalb über die Textspiegelung `dsgvo-gesetz.de` gelesen. Die offizielle Fundstelle bleibt EUR-Lex.

- **J-01:** W3C, *Web Content Accessibility Guidelines (WCAG) 2.2*, W3C Recommendation 2024-12-12, https://www.w3.org/TR/WCAG22/. Belegt Norm und Prüfziel, keine erreichte Konformität.
- **J-02:** W3C WAI, *Understanding SC 3.3.8: Accessible Authentication (Minimum)*, Stand 2026-09-06, https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html.
- **J-03:** W3C WAI, *Understanding SC 2.5.8: Target Size (Minimum)*, Stand 2026-05-11, https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html.
- **J-04:** W3C WAI, *Understanding SC 3.3.7: Redundant Entry*, Stand 2025-09-17, https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html.
- **J-05:** W3C WAI, *Involving Users in Evaluating Web Accessibility*, Stand 2024-04-30, https://www.w3.org/WAI/test-evaluate/involving-users/.
- **J-06:** Google, *Gemini Robotics ER*, zuletzt aktualisiert 2026-10-06, https://ai.google.dev/gemini-api/docs/robotics-overview. Herstellerdokumentation, keine Fußgängervalidierung.
- **J-07:** Google, *Robotics with streaming*, zuletzt aktualisiert 2026-09-11, https://ai.google.dev/gemini-api/docs/robotics-streaming. Belegt JPEG mit höchstens 1 FPS, Textausgabe und Heartbeat-Muster.
- **J-08:** NVIDIA, *Cosmos-Reason2*, zuletzt aktualisiert 2026-08-18, https://docs.nvidia.com/cosmos/latest/reason2/index.html. Herstellerdokumentation, kein Smartphone-Benchmark.
- **J-09:** NVIDIA Newsroom, *NVIDIA Launches Cosmos 3*, 2026-05-31, https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai. Herstellerangaben und Leaderboard-Claims.
- **J-10:** Qwen, *Qwen3.5-4B*, Modellkarte, https://huggingface.co/Qwen/Qwen3.5-4B. Offenes multimodales Modell. Modellkarte: 4B Sprachparameter, 262.144 Token Kontext, Apache-2.0; Safetensors: 5B Gesamtparameter. Herstellerbenchmarks, keine mobile Alltagsmessung.
- **J-11:** Liu, R. und Slade, P., *Improving outdoor navigation for people with blindness using an AI-driven smartphone application and personalized audio guidance*, *Nature Biomedical Engineering*, publiziert 2026-08-24, DOI 10.1038/s41551-026-01772-x, https://www.nature.com/articles/s41551-026-01772-x. Peer-reviewed, n=14, kontrollierte Wege und Parcours.
- **J-12:** Liu, R. und Slade, P., Preprint-Fassung, arXiv:2605.29120, eingereicht 2026-05-27, https://arxiv.org/abs/2605.29120. Gleiche Studie, für Details der Autorenfassung.
- **J-13:** Wu, Y. et al., *NavSight in the Wild*, arXiv:2608.12759, v3 vom 2026-10-06, https://arxiv.org/abs/2608.12759. Tagebuchstudie mit 12 Personen mit Sehbehinderung, mobile AR.
- **J-14:** Hwang, H. et al., *NavAble*, arXiv:2610.19330, 2026-10-14, https://arxiv.org/abs/2610.19330. Datensatz und Perception-Benchmark, keine Nutzerstudie.
- **J-15:** Baghel, S. S. et al., *Towards Blind and Low-Vision Accessibility of Lightweight VLMs and Custom LLM-Evals*, MMLoSo 2025, ACL Anthology, Dezember 2025, https://aclanthology.org/2025.mmloso-1.8/. SmolVLM2, Smartphone-Deployment, keine Alltagsstudie.
- **J-16:** Kim, E. et al., *Are Large Vision-Language Models Ready to Guide Blind and Low-Vision Individuals?*, arXiv:2510.00766, v2 vom 2026-04-01, https://arxiv.org/abs/2510.00766. Ersetzt die zurückgezogene Fassung arXiv:2502.14883. Nutzerstudie und Evaluationsrahmen, kein Produktnachweis.
- **J-17:** Apple, *Detect doors, people, and furniture around you using Magnifier on iPhone*, iPhone User Guide, Copyright 2026, https://support.apple.com/en-ie/guide/iphone/iph35c335575/ios. On-Device-Baseline, keine Navigationsvalidierung.
- **J-18:** Apple, *ARKit ARDepthData.confidenceMap*, Entwicklerdokumentation, https://developer.apple.com/documentation/arkit/ardepthdata/confidencemap. Belegt geringere Konfidenz bei reflektierenden oder stark lichtabsorbierenden Oberflächen.
- **J-19:** Deutscher Blinden- und Sehbehindertenverband, *E-Scooter*, https://www.dbsv.org/e-roller.html. Verbandsbewertung, keine Studie. Kritisiert reine Nähe-Warntöne und die Beanspruchung einer Hand.
- **J-20:** GitHub Docs, *Creating an issue*, https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue. Belegt Issue-Erstellung, nicht die vollständige Sichtbarkeits- und Löschproblematik.
- **J-21:** Verordnung (EU) 2016/679 (DSGVO), Art. 9, offizielle Fundstelle https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679. Wortlaut gelesen über https://www.dsgvo-gesetz.de/art-9-dsgvo/ am 2026-10-20. Belegt Gesundheitsdaten und ausdrückliche Einwilligung.
- **J-22:** Barrierefreiheitsstärkungsgesetz (BFSG), § 1, https://www.gesetze-im-internet.de/bfsg/__1.html. Belegt Anwendungsbereich und Datum 2025-06-28. Keine Aussage, dass die geplante Website darunterfällt.
- **J-23:** Astro Docs, *Internationalization (i18n) Routing*, https://docs.astro.build/en/guides/internationalization/. Belegt i18n-Routing, `prefixDefaultLocale` und Fallback.

## Ausgeführte und nicht ausgeführte Prüfungen

**Ausgeführt**

- Worktree, Branch, Arbeitsbaum und Baseline-Commit geprüft.
- Alle genannten relativen Dokumentlinks vor dem Schreiben geprüft.
- Quellen-URLs mit HTTP-Status geprüft, Ergebnis oben dokumentiert.
- Primärquellen gelesen, soweit angegeben. Widersprüche und Grenzen im Text markiert.
- Keine fremden Zweitanalysen gelesen.
- `git diff --check` und Linkprüfung nach dem Schreiben ausgeführt, Ergebnis im [Protokoll](Change-Log-Agents.md).
- Zusätzliche Nachprüfung nach dem ersten Commit: 43 Stichproben zu Zahlen, Daten und Wortlauten nach HTML-Normalisierung bestätigt. 24 URLs erneut geprüft, davon 23 mit HTTP 200 und EUR-Lex mit HTTP 202. Die Mobilio-Einschränkung wurde auf „eine Straßenüberquerung wird nicht berichtet“ präzisiert. Details im [Protokoll](Change-Log-Agents.md).

**Nicht ausgeführt**

- Keine Website oder App gebaut, kein Astro-Projekt angelegt.
- Keine automatisierten Accessibility-Tools, keine Screenreader-Tests, keine Tastaturtests an einer noch nicht existierenden Seite.
- Keine Modell-API aufgerufen, keine Latenz gemessen, keine Benchmark-Werte nachgerechnet.
- Keine Nutzerstudie, keine Interviews, keine Kontaktaufnahme.
- Keine rechtliche Prüfung. Die Aussagen zu DSGVO und BFSG sind technische Einordnung, keine Rechtsberatung.
- Keine Prüfung der Barrierefreiheit externer KI-Chat-Anbieter.
- Keine Prüfung, ob die genannten Studien auf deutsche Verhältnisse übertragbar sind.

## Nächster sinnvoller Schritt

Zuerst die Synthese der drei unabhängigen Analysen durch den Koordinator. Danach die in Abschnitt 6.2 beschriebene Ablaufstudie mit 3 bis 5 Betroffenen. Die statische Website folgt als eigener, kleiner Implementierungsauftrag ohne Backend. Der moderierte Einreichungsweg wird erst nach Betreiber-, Rechts- und Löschentscheidungen aktiviert.
