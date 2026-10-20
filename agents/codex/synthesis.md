# Percepta — Koordinator-Synthese der vier Zweitanalysen

Stand: 2026-10-20. Verfasst von Codex als Koordinator, Modellfamilie laut Sitzung GPT-6; genaue Build-ID unbekannt. Ausgangsstand auf `main`: `3d795cb665ed56d7f3234d05e0ef23e0b2465e91`; PR #4 anschließend mit `1cd561ecedb76566d8df42b70e64b737133cf6fa` übernommen.

**Abgeschlossene Entscheidungsvorlage; historischer Stand vor dem Website-Auftrag.** Die Bewertungen unten sind Codex' Synthese, kein nachträglicher Konsens der Harnesses. Bei Erstellung waren D-01 bis D-12 und die gemeinsamen Spezifikationen unverändert; es gab keine Website, App, Studie oder Modellmessung.

Nachtrag 2026-10-20: Der anschließende Website-Auftrag ist als D-13/D-14 in [state.md](../../state.md) festgehalten. Astro-Website und Entwurfshilfen sind inzwischen implementiert und geprüft; Pilot und Modellmessungen bleiben ausstehend. Die damaligen Vorschläge unten bleiben als Entscheidungsgrundlage nachvollziehbar.

## Ergebnis

Die vier Berichte stärken D-11: erst konkrete Alltagsabläufe mit Betroffenen verstehen, dann Technik auswählen. Der nächste Engpass ist ein verständlicher und betreibbarer Teilnahmeweg. Für die App fehlt vor allem der Nachweis, dass eine vollständige Aufgabe unter realen Aufnahmebedingungen besser gelingt als mit vorhandenen Hilfen.

**Empfehlung:** Zuerst einen kurzen Interview-Entwurf und eine gleichwertige Textvorlage mit fiktiven Situationen prüfen. Parallel Betreiber, privaten Empfang und Löschverfahren klären. Danach einen kleinen Beteiligungs-Pilot durchführen und daraus zwei bis drei Abläufe für getrennte technische Versuche auswählen. Eine statische DE/EN-Seite kann den Ablauf erklären; ein eigenes Einreichungsbackend ist dafür keine zwingende Vorleistung.

Die ursprüngliche Idee einer unterstützten Issue-Erstellung bleibt als Projektwunsch erhalten. Ob sie im ersten Pilot angeboten wird und ob persönliche Geschichten später auf GitHub oder ausschließlich auf der Website erscheinen, bedarf einer eigenen Entscheidung.

## 1. Vergleichsgrundlage und Unabhängigkeit

Fachliche Baseline aller Läufe: `research-baseline-v0.1` → `fe68acae4142baca25408124f85e353fb9786674`. Laufangaben sind aus den Berichten übernommen; keine unabhängige Prüfung ihrer Laufzeitumgebung.

| Bericht | Harness / Modell laut Bericht | Berichtsspitze / PR | Grenze |
| --- | --- | --- | --- |
| [Claude Code](../claude-code/analysis.md) | Claude Code 2.1.304 / Claude Opus 5.5 | `0fbc63544324802f0e5599df7377e99412286b5b`, PR #1 | Keine anderen Zweitanalysen vorab gelesen; Rechtsquelle teilweise sekundär |
| [JCode](../jcode/analysis.md) | JCode v0.99.0, Build `774613c90` / exakte Modell-ID unbekannt, Route `openai` | `8a4ae1e6d54c4f62ff03c0744803ea37224bbf7a`, PR #2 | Keine anderen Zweitanalysen vorab gelesen; umfangreichste Studienrecherche, weiterhin ohne eigene Messung |
| [OMP](../omp/analysis.md) | Oh My Pi, genaue Version unbekannt / `deepseek/deepseek-v4-pro` | `0bfa4028b84ad1163a5f7ae1cacd487697b175fd`, PR #3 | Keine anderen Zweitanalysen vorab gelesen; einzelne Schlussfolgerungen zu weitreichend |
| [DeepSeek](../deepseek/analysis.md) | DSH 0.2.1-rc.2, Web-Sitzung / `deepseek-flash`, Provider abgeleitet, exakte Build-ID unbekannt | `d423758feb34dea7a9dcfee860f4736ad2178fc3`, PR #4 | Vorbereitungs-Commit `b506a180412a2e7c38bd0fce357aa247a716ad4c`; Kenntnis von Stichworten aus neuerem `main/state.md` offengelegt |

DeepSeek hat laut Bericht keine fremden vollständigen Analysen gelesen, aber den vorgesehenen Informationsabstand nicht vollständig eingehalten. Der Bericht bleibt verwertbar, zählt jedoch **nicht als vollständig blinde unabhängige Replikation**. Kein Neustart oder zusätzlicher Lauf ist beauftragt. OMP und DSH sind getrennte Harness-Läufe, trotz verwandter Modellanbieter. Alle verwenden dieselbe Codex-Grundlage und teilweise dieselben Quellen; vier ähnliche Empfehlungen sind keine vier unabhängigen empirischen Nachweise.

Die ursprünglichen Berichte bleiben unverändert. DeepSeek ersetzte in seinem Protokoll auch die Codex-Vorlagenhinweise; ältere tatsächliche DeepSeek-Arbeitseinträge gab es nicht. Die Vorbereitung bleibt über Git und das Codex-Protokoll nachvollziehbar.

## 2. Gegenüberstellung der sechs Themen

| Thema | Übereinstimmung / Abweichung | Bewertung des Koordinators |
| --- | --- | --- |
| Machbarkeit | Alle trennen Modellbeschreibung und sichere Bewegung. Claude betont Aufnahmequalität und Nichtantworten; JCode Studien und Vergleichshilfen; OMP zwei Forschungsstufen; DSH Stehen/Gehen. | Aufgabenbezogene Risikoprüfung und vollständige Messkette übernehmen **als Empfehlung**; weder pauschale Cloud-Unmöglichkeit noch sichere lokale Warnung ableiten. |
| Nutzerbedürfnisse | Alle befürworten D-11. OMP priorisiert schon nicht-navigative Aufgaben; JCode/DSH verlangen mehr Beobachtung und Vielfalt. | Alle vier Bereiche offen erheben. Erst danach wenige Aufgaben auswählen; keine Feature-Liste durch Agentenmehrheit. |
| Barrierefreiheit | Alle verlangen manuellen Weg, Screenreader und Tastatur. OMP beschränkt Konformitätsaussagen auf WCAG 2.1. | Bestehendes Prüfziel WCAG 2.2 AA beibehalten; OMPs Beschränkung fachlich zurückweisen. Durchgängige Bedienbarkeit zusätzlich prüfen. |
| Architektur | Statisches Astro gemeinsam. Claude/DSH schlagen Postfach vor; OMP einen Endpunkt sofort; JCode erst statische Seite, später privaten Endpunkt. | Öffentliche Erklärung und privaten Empfang getrennt entscheiden. Postfach ist ein Pilotkandidat, kein bereits ausgewählter Dienst. |
| Veröffentlichung | Alle sehen sensible Angaben und Grenzen öffentlicher Issues. DSH möchte Geschichten auf der Website; Claude möchte KI zunächst nur Entwürfe erstellen lassen. | Kein automatischer Wechsel des Veröffentlichungsorts. Zuerst einen privaten, nicht veröffentlichenden Pilot vorschlagen; danach konkrete Freigaben für Text und Ziel. |
| Nächster Schritt | Claude: fiktive Prompt-Probe; JCode: Ablaufstudie mit 3–5; OMP: Teilnahmeweg, dann 2–3; DSH: kleine Seite/Postfach, dann 3–5. | Das sind unterschiedliche Prüfziele. Erst Prozessprobe, dann Beteiligungs-Pilot, dann technische Aufgabenprüfung; nicht alles als einen erfolgreichen Test ausgeben. |

## 3. Fachliche Korrekturen und belastbare Grenzen

### 3.1 Bildrate ist keine gemessene Reaktionszeit

Der konkret geprüfte Endpunkt `gemini-robotics-er-2-streaming-preview` dokumentiert JPEG-Eingabe bis 1 FPS, Textausgabe und einen zusätzlichen Text-/Audio-Auslöser für neue Antworten. Das ist eine Eigenschaft dieses Endpunkts, keine allgemeine Grenze aller Cloud-VLMs. [Google Robotics Streaming, abgerufen 2026-10-20](https://ai.google.dev/gemini-api/docs/robotics-streaming)

**Eigene Rechnung:** Bei angenommenen 1,0–1,4 m/s und exakt 1 FPS beträgt der Weg zwischen zwei Aufnahmen 1,0–1,4 m; bei niedrigerer Bildrate mehr. Mit angenommenen 0,8 s weiterer Verzögerung ergeben sich 0,8–1,12 m, mit zusätzlich bis zu 1 s Bildalter bis zu 1,8–2,52 m. Das ist keine Messung und kein Sicherheitsabstand; Reaktions-/Bremszeit fehlen.

**Bewertung:** DSHs allgemeine Unmöglichkeitsbehauptung ist zu stark. Eine zeitkritische Gehführung ist für Percepta derzeit nicht nachgewiesen. Lokale Verarbeitung allein beweist ebenfalls keine Sicherheit. Eine spätere Prüfung braucht Zeitstempel, Bildalter, Ausfälle, p50/p95 sowie Extremfälle und die Häufigkeit von Deadline-Verletzungen; auch p95 allein reicht nicht als Sicherheitsnachweis. Ein Stoppsignal kann selbst eine Bewegungsanweisung sein und erhält keine Ausnahme von diesen Prüfungen.

### 3.2 Navigationsstudien sind vorhanden, ihre Reichweite ist begrenzt

Mobilio ist neben dem Preprint als begutachteter Artikel vom 24.08.2026 dokumentiert. Abstract: 14 Experimentierteilnehmende, 13 ± 3 % weniger Zeit auf einem Community Path und 41 ± 5 % weniger Umgebungskontakte im beschriebenen Vergleich mit Google Maps und Langstock. Die erweiterte Abbildung 5 zeigt für den getrennten Hindernisparcours weniger Kontakte, aber **mehr** Zeit gegenüber Langstock allein. Diese Bedingungen nicht zusammenziehen. [Mobilio: Abstract und Extended Data Fig. 5, abgerufen 2026-10-20](https://www.nature.com/articles/s41551-026-01772-x)

**Bewertung:** Das korrigiert sowohl OMPs pauschales Fehlen eines Fußgängernachweises als auch eine pauschale Aussage „13 % schneller in allen Aufgaben“. JCodes differenzierte Einordnung trägt weiter als DSHs Abstract-Auswertung. Daraus folgt weder eine Straßenüberquerungsfreigabe noch ein Nachweis für Percepta. Keine Rohdaten, vollständige Statistik oder Übertragbarkeit nach Deutschland hier neu geprüft.

In der von OMP zitierten NOA-Studie bevorzugten alle 13 Teilnehmenden die DL-Variante beim Objektfinden. Die Varianten unterschieden sich auch in der Ausgabe: DL bot räumliche Audioführung zusätzlich zur Beschreibung, die generative Variante nur Beschreibung. Die Studie selbst nennt diesen Zusammenhang. [Pittet et al., Ergebnisse und Versuchsaufbau, abgerufen 2026-10-20](https://www.nature.com/articles/s41598-026-37578-9)

**Bewertung:** Eine nützliche Vergleichshypothese für knappe, konkrete Hinweise; kein isolierter Beweis „deterministisch besser als generativ“. Ein Percepta-Vergleich sollte Informationsgehalt und Ausgabemodalität kontrollieren.

### 3.3 Stehen ist nicht automatisch risikoarm

Claudes Risikoordnung, OMPs Stufen und DSHs Aufgabenklassen sind ergänzende Betrachtungen, keine austauschbaren Freigaben. Falsche Allergen- oder Medikamenteninformation kann auch im Stehen gravierende Folgen haben. Eine Eingangsfrage kann zunächst Beschreibung sein und anschließend eine Gehentscheidung auslösen.

**Empfehlung:** Pro Aufgabe Folgen eines Fehlers, Zeitbedarf und mögliche Folgehandlung erfassen. Erste Versuche auf begrenzte, gut überprüfbare Informationsaufgaben und kamerafreie Kommunikationshilfe eingrenzen. Die Auswahl erfolgt mit Betroffenen; Navigationsbedürfnisse bleiben Teil der Interviews.

### 3.4 WCAG-Prüfziel und rechtliche Einordnung trennen

WCAG 2.2 beschreibt ausdrücklich eigene Konformitätsaussagen. AA verlangt alle anwendbaren A-/AA-Kriterien sowie weitere Konformitätsanforderungen im erklärten Umfang; „keine kritischen Fehler“ allein genügt nicht. OMPs Schluss, nur WCAG 2.1 dürfe genannt werden, ist fachlich nicht haltbar. [W3C WCAG 2.2, Abschnitte 5.2 und 5.3, abgerufen 2026-10-20](https://www.w3.org/TR/WCAG22/#conformance)

Das bestehende Ziel bleibt bestehen. BFSG-Anwendbarkeit und harmonisierte Normreferenzen sind separat fachlich zu prüfen; keine aktuelle Amtsblattprüfung in dieser Synthese. Standards und Tests mit Betroffenen ergänzen sich, kleine Testgruppen erlauben keine allgemeine Nutzbarkeitszusage. [W3C: Involving Users, abgerufen 2026-10-20](https://www.w3.org/WAI/test-evaluate/involving-users/)

### 3.5 Vorschau benötigt nicht zwingend ein Backend

DSHs B-05 ist in zwei Punkten zu korrigieren: Der bestehende [Website-Brief](../../docs/website-brief.md) plant ausdrücklich einen **späteren** serverseitigen Dienst; „kein Backend“ ist keine bestätigte Gesamtarchitektur. Außerdem kann eine Vorschau lokal im Browser stattfinden. Astro unterstützt clientseitige Ereignisse und Inhaltsänderungen. [Astro: Scripts and event handling, abgerufen 2026-10-20](https://docs.astro.build/en/guides/client-side-scripts/)

**Eigene technische Schlussfolgerung:** Vorschau, Übermittlung, private Aufbewahrung und Veröffentlichungsnachweis sind unterschiedliche Funktionen. Eine lokale Vorschau ersetzt den privaten Empfang nicht; ein Postfach ist ebenfalls Infrastruktur. Die offene Frage ist der Umfang der ersten Ausbaustufe. Für einen einfachen Pilot kann Vorschau/Korrektur über den vereinbarten privaten Kanal erfolgen. Keine neue Browserfunktion wird mit dieser Synthese beauftragt.

### 3.6 Öffentliche Website und öffentliche Issues haben beide Löschgrenzen

GitHub dokumentiert sichtbare Bearbeitungsverläufe, das Entfernen sensibler Revisionen und die gesonderten Rechte zum Löschen von Issues in Organisations-Repositories. „Dauerhaft öffentlich“ ist daher als absolute Aussage falsch; vollständig rückholbar sind öffentliche Kopien damit aber nicht. Organisationseinstellungen und praktische Löschung wurden hier nicht getestet. [GitHub: Verlauf](https://docs.github.com/en/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment), [GitHub: Issue löschen](https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/deleting-an-issue), abgerufen 2026-10-20.

**Bewertung:** DSHs Website-Vorschlag bietet mehr Gestaltungskontrolle, keine Garantie gegen Kopien oder Caches. Persönliche Beiträge müssten außerhalb öffentlicher Git-Historie, Build-Logs und alter veröffentlichter Artefakte verwaltet werden. Dafür ist ein Betriebsmodell nötig. Codex' frühere Bezeichnung „nur pseudonym“ ist ebenfalls unzureichend: Ein eigenes Konto kann unmittelbar identifizieren. Gemeinsame Regeln benennen diese Grenze bereits.

### 3.7 Datenschutz gezielt klären, keine pauschalen Rechtsregeln übernehmen

Personenbezogene Angaben über Behinderung werden in Erwägungsgrund 35 ausdrücklich als Gesundheitsinformationen erfasst. Der einschlägige Wortlaut war über den indexierten amtlichen Text lesbar; direkte EUR-Lex-Abrufe scheiterten an der Browserprüfung. [DSGVO, Erwägungsgrund 35, Suchauszug geprüft 2026-10-20](https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1526560528451&uri=CELEX%3A32016R0679)

„Art. 9 verlangt immer Einwilligung“ ist zu pauschal: Rechtsgrundlage nach Art. 6 und eine anwendbare Ausnahme nach Art. 9 sind zu prüfen. Ausdrückliche Einwilligung ist eine Möglichkeit; Teilnahmezustimmung und datenschutzrechtliche Einwilligung sind zu unterscheiden. Das erläutert der EDSA für Gesundheitsforschung; daraus folgt noch keine konkrete Rechtsgrundlage für Percepta. [EDSA, Antwort zur Gesundheitsforschung, Rn. 5–7 und 12, abgerufen 2026-10-20](https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_replyec_questionnaireresearch_final.pdf)

**Empfehlung:** Betreiber und Datenfluss fachlich prüfen lassen; Zwecke, Empfänger, Aufbewahrung, Rücknahme und optionale Veröffentlichung verständlich beschreiben. DSHs E6 ist laut eigener Tabelle Information, keine zusätzliche „Aufbewahrungseinwilligung“. Kontakt für Fallklärung und spätere Einladungen unterscheiden. E2/E4 überlappen beim Website-Vorschlag; Zwecke vor Checkboxen klären. Keine Kontaktabfrage in fremde KI-Chats einbauen. Öffentliche Freigabe des Projektverantwortlichen ersetzt nie die Freigabe der betroffenen Person.

Die Rechtsquellen der Berichte sind teilweise private Textspiegelungen (auch DSH Q-07 bis Q-09), keine amtlichen Primärquellen. Diese Synthese erteilt weder Rechtsfreigaben noch pauschale Verbote eines bestimmten Veröffentlichungsorts.

## 4. Empfohlene technische Prüfungen nach der Bedarfsklärung

Diese Matrix ist ein Vorschlag, kein beauftragter Benchmark. Aktuelle Modelle, Nutzungsbedingungen, Geräteunterstützung und Kosten vor Ausführung erneut prüfen.

| Bereich | Einfacher Vergleich | Zusätzlicher Kandidat | Entscheidende Messung |
| --- | --- | --- | --- |
| Einkaufen | OCR/Barcode und eine bereits genutzte Hilfe | Allgemeines VLM für Zuordnung und Rückfragen | Richtiges Produkt samt Preis; Nichtlesbarkeit statt erfundener Angaben; Aufnahmeversuche |
| Fragen | Vorhandene Hilfe und manuell geprüfte Antwort | VLM mit Folgefragen | Richtigkeit, fehlende Sicht, hilfreiche Rückfrage, Zeit bis zur hörbaren Antwort |
| Interaktion | Selbst formulierte Frage/Textkarte, Rollenspiel | Kamerafreie Sprach-/Texthilfe | Eigene Absicht bleibt erhalten; Belastung, Unterbrechung, freiwilliger Abbruch |
| Orientierung | Beschreibung im Stand und separat lokale Geometrie | Räumliches Reasoning als Ergänzung | Objekt, Position, Wegbezug und Anweisung getrennt; Bildalter, falsche Entwarnung, Ausfälle |

Keine Anbieterwahl aus einem Leaderboard. Modelle nur auf denselben freigegebenen Fällen vergleichen; Optimierungs- und Bewertungsfälle trennen. Nach Bildtests folgt die Prüfung der Aufnahme durch Betroffene, nicht die Behauptung einer fertigen Funktion. Testschwellen vorher anhand der konkreten Fehlerfolgen vereinbaren. Ein kleiner Test mit null Fehlern beweist keine Nullfehlerrate.

## 5. Entscheidungsvorlage für den nächsten Auftrag

Alle Punkte **offen**. Die Kennungen V-01 bis V-06 sind Vorschläge, keine neuen D-Entscheidungen.

| ID | Empfehlung des Koordinators | Alternative / Abwägung | Vor Aktivierung zu klären |
| --- | --- | --- | --- |
| V-01 | Im ersten Pilot erzeugt die KI nur einen korrigierbaren Entwurf; keine Issue-Tools. | Direkte Issue-Anlage spart Schritte, erweitert aber die zu prüfenden Chat-/Connector-Kombinationen. | Umgang mit ursprünglichem Issue-Wunsch ausdrücklich entscheiden; Prompts danach in DE/EN anpassen. |
| V-02 | Gleichwertige Textvorlage ohne KI und eine fiktive Prozessprobe zuerst. | Sofort echte Interviews; schnelleres Feedback, aber vermeidbare Prozessfehler bei echten Daten. | Testumgebungen und Verantwortliche festlegen. |
| V-03 | Statische DE/EN-Informationsseite; privates Projektpostfach als erste zu prüfende Empfangsoption. | Geprüftes Formular mit privatem Endpunkt bei konkreter E-Mail-Hürde; mehr Betrieb. | Betreiber, Anbieter, Zugriff, Löschfristen, zugängliche Rückfragen; Postfach nicht automatisch anonym oder barrierefrei. |
| V-04 | Erster Beteiligungs-Pilot ohne öffentliche persönliche Geschichten. Später Website und Issue getrennt wählen. | Bereits im Pilot veröffentlichen; erfordert vorher festgelegten Zielort und erprobte Rücknahme. | Öffentliche Projektinformationen bleiben möglich; individuelle Freigaben für konkrete Texte separat. |
| V-05 | Zunächst 3–5 Erwachsene für Teilnahmeweg und Bedarfsgespräch einplanen, iterativ. | OMPs 2–3 als erste kleine Runde; geringerer Aufwand, engere Abdeckung. | Rekrutierung, Budget/Entschädigung, Sprachen und realistische Vielfalt; keine Repräsentativität behaupten. |
| V-06 | Aus Ergebnissen zwei bis drei Abläufe auswählen, dann gezielte Technikvergleiche. | Breiter Modellvergleich sofort; mehr Kosten bei ungeklärtem Bedarf. | Erfolg und Fehlergrenzen gemeinsam festlegen; keine vorzeitige Plattform-/App-Architektur. |

Kein Anspruch, mit 3–5 Personen alle Alters-, Seh-, Sprach- und Technikerfahrungen abzudecken. Fehlende Perspektiven dokumentieren und später ergänzen. Zwei Moderierende oder fünf Werktage Reaktionszeit sind Vorschläge aus DSH, keine aus den Quellen folgende Pflicht und keine zugesagte Kapazität.

## 6. Konkreter Folgeauftrag nach Auswahl der Vorschläge

1. **Teilnahme-Paket:** Kurzer DE/EN-Prompt, gleichwertige Textvorlage, verständliche Status-/Veröffentlichungserklärung und Moderationsablauf. Vorhandene Entwürfe gezielt ändern, keine Produktionsschnittstelle als Nebenprodukt.
2. **Probe mit fiktiven Daten:** Beide Sprachen, manueller Weg und mindestens zwei tatsächlich verfügbare Chat-Umgebungen. Überspringen, Pause, Abschluss, versehentlicher Name/Ort, Foto, Daten Dritter, abgelehnte Veröffentlichung und unklarer Übermittlungsstatus prüfen. Keine echten Interviews an fremde Modelle für diese Probe.
3. **Abnahme der Probe:** Keine Übermittlung ohne konkrete Freigabe; keine erfundene Veröffentlichung; keine unbeabsichtigten Identifikatoren im Endtext; Korrektur/Abbruch erreichbar. Eine Frage je Schritt prüfen und Abweichungen protokollieren. Tatsächliche Tastatur-/Screenreader-Kombinationen samt Versionen erfassen, fehlende Tests offen lassen.
4. **Betrieb vor echtem Eingang:** Verantwortlicher, privater Empfang, begründete Fristen, Rücknahme und fachlich geprüfte Informationen stehen fest. Mit fiktivem Vorgang Eingang, Änderung, erneute Freigabe, Abbruch und Löschung durchspielen. Keine pauschale Zustimmung zur Speicherung beim Chat-Anbieter behaupten.
5. **Beteiligungs-Pilot:** Zugang und Verständnis prüfen; je Person eine konkrete Alltagssituation mit heutiger Hilfe nachvollziehen. Kein Gehtest mit ungeprüften Warnungen. Ergebnis sind priorisierte Abläufe, Unterschiede, Abbrüche und offene Anforderungen, keine Wirkungsmessung einer App.
6. **Danach:** Websiteumfang und Technikexperiment anhand der Ergebnisse konkret beauftragen. Für eine veröffentlichte Website bleiben Hosting/Domain, Lizenz, Betreiberangaben und die tatsächliche Accessibility-Abnahme zu klären.

Eine Informationsseite kann separat früher entstehen, sobald ihr Betreiber und Veröffentlichungsumfang feststehen; sie darf dann nur tatsächlich verfügbare Beteiligungswege nennen. Die Reihenfolge ist ein Vorschlag zur Entscheidung, kein neu gestarteter Pilot.

## 7. Quellenstatus und Prüfgrenzen

Am 2026-10-20 alle vier Berichte und die Codex-Grundlage verglichen. Die oben direkt verlinkten Google-, W3C-, GitHub-, Astro- und EDSA-Inhalte wurden in den relevanten Abschnitten gelesen. Mobilio-Preprint-Abstract ebenfalls [direkt geprüft](https://arxiv.org/abs/2605.29120). Nature lieferte beim direkten Öffnen einen Weiterleitungsfehler; Abstract/erweiterte Abbildungen von Mobilio und Ergebnis-/Methodenauszüge der NOA-Arbeit waren über die indexierten Originalseiten lesbar. EUR-Lex nur als gekennzeichneter Suchauszug, nicht als erfolgreich gelesener Volltext. Fehlgeschlagene BfDI-/Ministeriumsabrufe wurden nicht als Nachweis verwendet.

Keine vollständige Wiederholung aller Quellenprüfungen der Harnesses. Insbesondere zusätzliche Modelle, Apps, Abandonment-Zahlen, Normharmonisierung und rechtliche Anwendbarkeit nicht pauschal bestätigt. Keine Provider-Sitzung nachgespielt, keine API, kein Nutzertest, keine Löschprobe bei GitHub und kein Accessibility-Test ausgeführt.

Git-Prüfungen und Dokumentvalidierung stehen im [Codex-Protokoll](Change-Log-Agents.md). Der [Projektstand](../../state.md) führt die offenen Entscheidungen weiter. Nach Auswahl der nächsten Lieferung dort neue Entscheidungen mit tatsächlicher Freigabe und Begründung ergänzen.
