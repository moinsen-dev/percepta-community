# Bestehende Alltagshilfen: Lookout, Seeing AI, Gemini und Apple

Stand und Quellenabruf: 2026-10-21. Codex als Koordinator, Ausgangs-Commit `303c96c60f453a30b764eaba97d893223410c670`. Anlass sind vier vom Projektverantwortlichen übermittelte Produkthinweise. Recherche anhand von Herstellerquellen; keine Installation, Geräteprüfung, Messung oder Nutzerstudie. Empfehlungen sind keine neuen Produktentscheidungen.

## Ergebnis für Percepta

Die vier Angebote überschneiden sich mit wesentlichen Teilen unseres Vorhabens. Lesen, Produktinformationen, visuelle Fragen und die Suche nach Gegenständen sind bereits dokumentierte Funktionen. Ein allgemeiner Kamera-Chat allein wäre daher eine schwache Begründung für eine weitere App. Welche vollständigen Alltagsaufgaben trotzdem schwierig bleiben, müssen Betroffene und praktische Vergleiche zeigen.

Die Quellen belegen keine verlässliche Gehführung um abgestellte Roller, sichere Bordstein-/Treppenerkennung oder Straßenüberquerung. Diese offene Frage begründet ein Forschungsproblem, noch keinen geeigneten ersten Produktumfang. Ein gefundener Stuhl belegt zudem weder einen freien Sitzplatz noch einen sicheren Weg dorthin. Das sind unterschiedliche Prüfaufgaben.

## Die vier Angebote

| Angebot | Dokumentierter Funktionsumfang | Verfügbarkeit und wichtige Grenze |
| --- | --- | --- |
| **Google Lookout** | Text und Dokumente lesen, Lebensmittel über Verpackung/Barcode erkennen, Umgebung beschreiben. „Suchen“ nennt unter anderem Türen, Toiletten, Tassen und Fahrzeuge; Richtung und Entfernung sind geräteabhängig. | Android; Deutsch gehört zu den unterstützten Sprachen. Generative Bildfragen laut Store nur auf Englisch. „Erkunden“ wird in der Hilfe als Beta mit geringerer Genauigkeit beschrieben. Dokumentierte Suchkategorien sind kein Nachweis vollständiger Navigation. [Store](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal), [Hilfe](https://support.google.com/accessibility/android/answer/9031274?hl=de). |
| **Microsoft Seeing AI** | Texte, Dokumentfragen, Produkt-/Barcodeerkennung, Bildbeschreibungen mit Rückfragen. „Find My Things“ lernt persönliche Gegenstände und hilft akustisch beim Wiederfinden. Der iOS-Kanal „World“ beschreibt räumliche Objekte per Audio-AR. | iOS und Android; die deutsche iOS-Listung nennt Deutsch. Funktionsgleichheit zwischen Plattformen ist nicht belegt; „World“ setzt dort LiDAR voraus. Microsoft warnt im Handbuch vor alleiniger Verlässlichkeit und Nutzung bei Verletzungsrisiko. [Produktseite](https://www.seeingai.com/), [iOS-Listung](https://apps.apple.com/de/app/seeing-ai/id999062298), [Handbuch](https://www.microsoft.com/en-us/garage/wp-content/uploads/2025/04/Seeing-AI-User-Manual.pdf). |
| **Guided Vision in Gemini Live** | Dialog über das Live-Kamerabild; zusätzlich aktive Hinweise zum Ausrichten der Kamera. Beispiele sind Etiketten, Speisekarten, Geräteeinstellungen und das Auffinden kleiner Gegenstände. Bedienung über Android-Bedienungshilfen/TalkBack vorgesehen. | Veröffentlichung vom 1. Oktober 2026; die Hilfe nennt einen schrittweisen Rollout. Google schließt Navigation, sichere Gehführung und Hinderniserkennung als Verwendungszweck ausdrücklich aus. Kameraführung ist deshalb keine belegte Gehführung. [Ankündigung](https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/), [aktuelle Hilfe](https://support.google.com/accessibility/android/answer/18365638?hl=en). |
| **Apple VoiceOver / Lupe mit Apple Intelligence** | Fragen und Folgefragen zur sichtbaren Umgebung, intelligentere Bildbeschreibungen und Einbindung in vorhandene Bedienungshilfen. Das aktuelle Handbuch beschreibt Liveerkennung für Szenen, Personen, Türen, Möbel und Text sowie anpassbare Ausgaben. | Die Mai-Mitteilung war eine Ankündigung; inzwischen sind Funktionen im iOS-27-Handbuch dokumentiert. Hardware, Sprache und Region begrenzen einzelne Modi; Personen-/Tür-/Möbelerkennung nur auf unterstützten Geräten. Apple warnt vor Verlass auf VoiceOver-Erkennung bei Navigation. [Mitteilung](https://www.apple.com/de/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/), [aktuelles Handbuch](https://support.apple.com/de-de/guide/iphone/iph37e6b3844/ios). |

## Was sich daraus technisch ableiten lässt

1. **Kameraausrichtung gehört zum Ablauf.** Eine gute Antwort setzt ein geeignetes Bild voraus. Guided Vision macht diese oft übersehene Bedienaufgabe ausdrücklich zum Produktbestandteil. Bei einem eigenen Prototyp wären fehlende Sicht und verständliche Korrekturhinweise ebenso zu prüfen wie die Antwortqualität.
2. **Bedienungshilfen sind der Vergleichsmaßstab.** Aufruf, Unterbrechung, Rückfragen, Sprache/Braille/Haptik und Handhabung mit Langstock sind Teil der Nutzbarkeit. Ein besseres Modell bei umständlicherer Bedienung wäre nicht automatisch ein Fortschritt.
3. **Produktfunktion und Entwicklerschnittstelle unterscheiden.** Die gelesenen Produktseiten belegen keinen frei einbettbaren Zugang zu Guided Vision oder Apples vollständiger Liveerkennung. Eine spätere Integration benötigt einen gesonderten SDK-/API- und Rechtecheck. Aus generischen Modell-APIs folgt keine Gleichwertigkeit mit diesen Produkten.
4. **Modi getrennt prüfen.** Lookout dokumentiert herunterladbare Lebensmitteldaten für Offline-Nutzung. Daraus folgt kein Offline-Versprechen für alle Funktionen. Ebenso wenig belegen die anderen Produktseiten eine vollständig lokale Verarbeitung aller Fragen. Netzbedarf, Datenwege, Kosten, Energie und Antwortzeiten sind pro Funktion offen.
5. **Begriffe und Endpunkte nicht vermischen.** Apples „Navigation in natürlicher Sprache“ bezieht sich in der Mitteilung auch auf App-Bedienung. Das ist keine Zusage zur Orientierung im Straßenraum. Die in unserer bisherigen Recherche genannte Bildratenbegrenzung eines Robotics-Streaming-Endpunkts darf nicht auf Gemini Live oder alle Cloud-Modelle übertragen werden.

## Offene Aufgaben statt behaupteter Marktlücken

| Percepta-Bereich | Bereits vorhandener Ansatz | Mit Betroffenen zu prüfende vollständige Aufgabe |
| --- | --- | --- |
| Einkaufen | Etiketten, Barcodes, Produktinformationen | Zwei ähnliche Produkte anhand eines gewünschten Merkmals unterscheiden und die richtige Packung wiederfinden. |
| Fragen stellen | Bild-/Dokumentfragen und Folgefragen | Eine konkrete Information finden, Unklarheit erkennen und durch eine Rückfrage auflösen. |
| Interaktion mit Menschen | Visuelle Situations-/Personenbeschreibung | Klären, ob überhaupt technische Hilfe gewünscht ist: etwa eine Frage an Verkaufspersonal vorbereiten, relevante Information teilen oder die Ausgabe im Gespräch sofort beenden. Eine Personenbeschreibung beweist keine passende Gesprächsunterstützung. |
| Orientierung und Navigation | Gegenstands-, Tür- und Möbelsuche | In einem kontrollierten Innenraum einen Gegenstand lokalisieren; danach getrennt prüfen, welche Hilfe für den weiteren Ablauf fehlt. Keine Ableitung eines freien Wegs aus einer Objekterkennung. |

Keine dieser Fragen ist durch die Produkttexte beantwortet. Umgekehrt beweist eine dort nicht genannte Funktion nicht, dass ein Produkt sie nicht leisten kann. Auch Herstellerberichte über Trainingsdaten oder Testerzahlen ersetzen keinen Vergleich für unsere Aufgaben.

## Vorschlag für den nächsten Schritt

Den bereits vorbereiteten [Pilot](participation-pilot.md) um einen Vergleich vorhandener Hilfen ergänzen, bevor eine App-Architektur gewählt wird. Noch keine Änderung des freigegebenen Interviewablaufs und kein gestarteter Test.

- Zuerst offen erfragen: Welche Hilfen nutzt die Person bereits? Was gelingt damit? Bei welcher konkreten Gelegenheit blieb sie zuletzt hängen? Welche Rolle spielen Bekanntheit, Einrichtung, Sprache, Gerät, Kosten oder Bedienung?
- Mit den vorgesehenen 3–5 Erwachsenen wenige selbst priorisierte Aufgaben auswählen. Beispiele aus der Tabelle sind Vorschläge, keine Pflichtaufgaben. Auch eine ausreichende Lösung mit vorhandenen Hilfen ist ein verwertbares Ergebnis.
- Gewohnte Hilfen als Ausgangspunkt verwenden. Neue Angebote erst nach Einführung und Prüfung der tatsächlich verfügbaren Modi vergleichen; Geräte, Versionen, Sprache, Netz und Übung dokumentieren.
- Aufgabenerfolg, nötige Unterstützung, falsche oder übermäßig sichere Antworten, Zeit bis zur brauchbaren Information, Bedienaufwand und subjektive Selbstbestimmung erfassen. Eine kleine Pilotgruppe liefert Hinweise, keine repräsentativen Erfolgsquoten.
- Orientierung zunächst in kontrollierten Situationen; keine Eignungsprüfung durch unbegleitete Straßen-, Treppen- oder Bahnsteigversuche. Einvernehmliche Erhebung und privater Betrieb bleiben Voraussetzung.

Mögliche Ergebnisse sind ein klar begrenzter neuer Ablauf, eine sinnvolle Integration oder die Erkenntnis, dass Zugang und Einführung in bestehende Hilfen mehr bewirken. Perceptas Ziel bleibt Alltagshilfe; die passende technische Form ist offen.

## Quellenstatus und verbleibende Grenzen

Alle oben verlinkten Herstellerseiten wurden am 2026-10-21 gelesen. Der Lookout-Store wurde ohne den übermittelten Tracking-Parameter aufgerufen. Die Seeing-AI-Startseite ist knapp; konkrete aktuelle Funktionsangaben stammen zusätzlich aus Microsofts iOS-Storetext. Das verlinkte Handbuch trägt Revision D vom 12. Dezember 2024 und ist keine Bestätigung identischer Funktionen in jeder heutigen Version. Es bezeichnet Seeing AI als Medizinprodukt der Klasse I; diese Herstellerangabe ist weder eigenständig rechtlich geprüft noch eine Freigabe für Navigation.

Lookouts Hilfeseite und Storetext beschreiben die regionale Verfügbarkeit generativer Bildfragen unterschiedlich; die konkrete deutsche Nutzung ist daher am Gerät zu prüfen. Bei Gemini stehen Launch-Ankündigung und schrittweiser Rollout nebeneinander. Apples ursprüngliche Zukunftsankündigung wurde mit dem aktuellen Handbuch abgeglichen. Dokumentierte Verfügbarkeit bleibt von erfolgreicher Nutzung auf einem konkreten Gerät getrennt.

Nicht durchgeführt: unabhängiger Leistungsvergleich, Installation oder Anmeldung, Modellaufrufe, Latenz-/Offline-/Datenschutzmessung, Screenreader-Test, Rechtsprüfung oder Kontaktaufnahme. Keine Empfehlung zur sicheren Fortbewegung aus dieser Recherche abgeleitet.
