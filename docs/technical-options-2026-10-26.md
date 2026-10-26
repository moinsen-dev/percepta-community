# Technische Optionen für eine persönliche Percepta-Assistenz

Stand und Quellenabruf: 2026-10-26. Codex, GPT-6 laut Sitzung; genaue Modell-/Build-Version unbekannt. Ausgangspunkt: `b9d1680d990f422967c38a6030f5aba97d043d28` auf lokalem `main`, Arbeitsbaum zunächst sauber. Dokumentenrecherche und offene Entwurfshypothesen; keine Geräteprüfung, Leistungsdaten oder beschlossene App-Architektur. Kein erneuter Remote-Abgleich.

## Ergebnis und Arbeitsannahmen

Die aussichtsreichste Versuchsanordnung verbindet eine freihändige Kamera-/Audio-Brille, ein Smartphone für lokale Wahrnehmung und Bedienung sowie optional einen persönlichen Heimserver. Eine vorbereitete Wohnung kann zusätzliche Ortsanker und Sensoren erhalten. Ein einzelnes Gerät deckt diese Aufgaben nicht gleichwertig ab.

Arbeitsannahmen: Ein Smartphone ist verfügbar; Deutschland/Deutsch ist ein wichtiger Anwendungskontext; ein Heimserver ist eine optionale Ausbaustufe. Weder ein neues iPhone noch ein Mac pro Person sind als Voraussetzung belegt. Vor einer Anschaffung vorhandene Hardware und konkrete Aufgaben messen. Die bestehende Entscheidung D-11 gilt weiter: vollständige Abläufe mit Betroffenen priorisieren; die folgenden Beispiele sind Vorschläge.

„Sehkraft ersetzen“ hat unterschiedliche Bedeutungen: vorhandenes Sehvermögen technisch unterstützen; visuelle Information in Sprache, Klang oder Berührung übersetzen; oder biologisches Sehen wiederherstellen. Diese Recherche behandelt die ersten beiden. Die Quellen belegen keinen universellen technischen Ersatz des Sehens und keine sichere autonome Gehführung.

## 1. Brille als freihändiger Zugang

Meta beschreibt das Wearables Device Access Toolkit 1.0 als unterstützte Version mit Rollout ab 30.09.2026. Kamera, Mikrofon, Audio und Bewegungs-/IMU-Funktionen werden genannt; konkrete Fähigkeiten sind geräteabhängig. Unterstützt werden unter anderem Ray-Ban Meta Gen 1/2 und Display sowie Oakley-Modelle. Verarbeitung in eigener App lokal oder über eigene Dienste ist dokumentiert; die Meta-AI-App bleibt für das Pairing erforderlich. Veröffentlichungs-/Discovery-Zugänge sind laut FAQ noch im Ausbau. **Verfügbares SDK ist keine Zusage eines frei verfügbaren Vertriebswegs.** [Meta-FAQ](https://developers.meta.com/wearables/faq/)

Eine andere offizielle Quelle vom April 2026 beschreibt noch offene Funktionen, eine ältere Ankündigung Entwickler-Preview und eingeschränkte Veröffentlichung. Für den heutigen SDK-Status ist die aktuellere FAQ maßgeblich; Vertriebsbedingungen vor Umsetzung erneut prüfen. [Entwicklerbeitrag April 2026](https://developers.meta.com/blog/explore-whats-possible-with-wearables-device-access-toolkit/)

Das offizielle iOS-Beispiel demonstriert Kamerastream, Foto und Video. Im Beispiel endet die Vorschau beim Wechsel der App in den Hintergrund. Daraus folgt keine generelle technische Unmöglichkeit; Hintergrundbetrieb, Sperrbildschirm, Wiederverbindung und gleichzeitige Audio-/Kameranutzung sind offene Gerätetests. [CameraAccess](https://github.com/facebook/meta-wearables-dat-ios/blob/main/samples/CameraAccess/README.md)

Für Ray-Ban Meta Gen 2 nennt der Hersteller bis zu acht Stunden typische Nutzung. Das ist keine belegte Dauerlaufzeit unserer Kamera-KI-Pipeline. Streamingauflösung, Bildalter, Übertragungszeit, Wärme, Wind und Strombedarf müssen im gewünschten SDK-Modus gemessen werden. [Meta zu Gen 2](https://about.fb.com/news/2025/09/ray-ban-meta-gen-2-better-battery-life-video-capture/)

**Entwurf:** Brille als austauschbare Eingabe-/Ausgabekomponente verwenden. Kopfkamera hilft bei Schild, Produkt und Gesprächssituation; sie zeigt nicht automatisch den Boden und liefert keine belegte vollständige Tiefenkarte. Für klassische Ray-Ban Meta Gen 2 keine LiDAR-Sensorik voraussetzen. Das iPhone in der Tasche misst auch mit LiDAR keine verdeckte Umgebung vor der Person.

Als Vergleichsbasis Be My Eyes auf Meta-Brillen berücksichtigen: Deutschland wird offiziell genannt; die Sprachbefehle sind nicht in jeder Meta-AI-Sprache verfügbar. Deutsche Bedienung des konkreten Ablaufs deshalb gesondert prüfen. [Be-My-Eyes-FAQ](https://support.bemyeyes.com/hc/en-us/articles/29893014835729-Meta-AI-Glasses-FAQ)

## 2. iPhone als mobile Verarbeitung und räumlicher Sensor

Apple dokumentiert aktuell für iPhone 18 Pro/Pro Max einen LiDAR-Scanner sowie Bewegungs- und Ortungssensoren. Das ist eine belegte Geräteoption, keine Beschaffungsempfehlung und keine Voraussetzung für reine Bild-/Textassistenz. [Technische Daten](https://www.apple.com/iphone-18-pro/specs/)

ARKit stellt Szenentiefe und Konfidenzwerte bereit. Diese Tiefenwerte beziehen sich auf die Kamera des messenden Geräts. Eine Brillenkamera und ein unabhängig bewegtes iPhone sehen unterschiedliche Ausschnitte: Für gemeinsame räumliche Aussagen braucht es zeitliche Zuordnung, Kalibrierung und fortlaufend bekannte relative Pose. Eine bloße Verbindung der Geräte leistet das nicht. [Apple-Szenentiefe](https://developer.apple.com/documentation/ARKit/displaying-a-point-cloud-using-scene-depth)

RoomPlan kann mit Kamera/LiDAR einen strukturierten Raumgrundriss mit Abmessungen und Möbelkategorien erstellen. Ein erfasster Grundriss ist keine stets aktuelle Karte beweglicher Gegenstände und kein Nachweis eines begehbaren Wegs. [RoomPlan](https://developer.apple.com/augmented-reality/roomplan/)

Für den einfachsten mobilen Versuch bieten sich Apples Vision-Texterkennung und vorhandene Bedienungshilfen an. Vision verarbeitet die Texterkennung auf dem Gerät; damit lässt sich eine wichtige Teilaufgabe unabhängig von Heimserver und Mobilfunk prüfen. [Texterkennung](https://developer.apple.com/documentation/vision/recognizing-text-in-images)

Apples Erkennungsmodus für Türen, Personen und Möbel ist eine wichtige Vergleichsbasis. Apple schließt ausdrücklich aus, sich darauf für Navigation oder Situationen mit Verletzungsgefahr zu verlassen. Ein dokumentierter Sensor-/Erkennungszugang ändert diese Grenze nicht. [Lupe](https://support.apple.com/guide/iphone/detect-doors-people-and-furniture-around-you-iph35c335575/ios)

## 3. Persönlicher Mac mini als optionale Basis zu Hause

Apple führt den Mac mini mit M6 sowie M5 Pro; beim M6 sind bis 32 GB gemeinsamer Speicher, beim M5 Pro bis 64 GB dokumentiert. MLX unterstützt lokale KI auf Apple Silicon, einschließlich Beispielprojekten für Sprach- und Bild-Sprach-Modelle. Daraus folgt keine gemessene Echtzeitleistung unseres Anwendungsfalls. [Mac-Spezifikation](https://www.apple.com/mac-mini/specs/), [MLX](https://mlx-framework.org/)

**Vorgeschlagene Aufgaben:** ein ausdrücklich verwaltetes persönliches Objektgedächtnis, Dokumente, Wohnungsmodell, individuelle Ausgabepräferenzen und aufwendigere Bild-/Sprachverarbeitung. „Zuletzt gesehen auf dem Küchentisch, gestern“ muss als frühere Beobachtung kenntlich bleiben. Automatische Videoarchive oder Gesichtsidentifikation sind keine notwendige Grundlage.

**Betriebshypothese:** lokale Dienste mit MLX und kleinem lokalem Datenspeicher, Gerät über authentisierte verschlüsselte Verbindung anbinden. Kein öffentlich ungeschützter Modellserver. Lokale Verarbeitung ist ein Datenweg, keine pauschale Aussage über alle Telemetrie-/Kontowege einer Brille. Haushaltsmitglieder, Löschung und individuelle Freigaben müssen Teil des Entwurfs sein.

Zu Hause kann das Smartphone den Server im Heimnetz erreichen; unterwegs braucht es dafür Mobilfunk und einen erreichbaren Heimanschluss. Deshalb soll der mobile Grundbetrieb bei Ausfall des Servers weiter funktionieren. Eine zeitkritische Warnfunktion darf nicht allein von diesem Fernweg abhängen. Wartung, automatische Wiederaufnahme nach Neustart, Updates und Unterstützung gehören zur Wirtschaftlichkeit eines Servers pro Person. Zunächst vorhandene Hardware benchmarken; Speicherausbau anhand Modell, Latenz und Parallelität entscheiden.

## 4. Vorbereitete Räume und Funk

Vertiefung: [Raumsensorik-Recherche](spatial-sensing-research-2026-10-26.md). Die entscheidende Trennung lautet: Anwesenheit einer Person, Position eines Geräts, Körperhaltung und eine begehbare Umgebung sind unterschiedliche Messaufgaben.

Als Entwurf eignen sich benannte NFC-/visuelle Marker für verlässliche Startpunkte, UWB für relative Position zu kompatiblen Gegenstellen und Radar für Anwesenheit/Bewegung. Sicht-/Tiefensensorik und gepflegte Karten ergänzen diese Informationen. WiFi-DensePose ist ein Forschungsansatz für Körperpose aus Funksignalen, keine allgemeine Kamera für Texte, Farben, Gegenstände und Bordsteine.

## 5. Ausgabe und unterschiedliche Sehbedürfnisse

Sprache eignet sich für Bedeutung und Rückfragen, räumlicher Klang oder Haptik möglicherweise für Richtung und Status. Diese Zuordnung ist eine zu prüfende Gestaltungshypothese: Aufmerksamkeitsbedarf, Hörvermögen, Verkehrsschall, Lernaufwand und Abschaltbarkeit bestimmen mit. Core Haptics erlaubt eigene Vibrationsmuster am unterstützten iPhone; ein räumlich verteiltes taktiles Bild braucht zusätzliche Hardware. [Core Haptics](https://developer.apple.com/documentation/CoreHaptics)

Für Menschen mit nutzbarem Sehvermögen auch Vergrößerung, Kontrast und angepasste Darstellung vergleichen. eSight ist ein dokumentiertes Beispiel für digitale Sehhilfe bei zentralem Sehverlust; Herstellerwerbung belegt keine individuelle Eignung oder Wiederherstellung vollständigen Sehens. [eSight](https://www.esighteyewear.com/)

Als weitergehende Forschungsrichtung existiert direkte Bild-zu-Klang-Übersetzung, etwa The vOICe. Das System beschreibt Kameraansichten als Klangmuster und verweist auf Training; Nutzbarkeit und Belastung sind gesonderte Fragen. Es ist keine Zusage eines intuitiven vollständigen Sehersatzes. [The-vOICe-Nutzungshinweise](https://www.seeingwithsound.com/webvoice2.htm)

## 6. Zusammenspiel als überprüfbare Entwurfshypothese

1. **Mobile Ebene:** Smartphone erfasst passende Sensoren, führt kleine lokale Auswertungen aus und verwaltet VoiceOver-zugängliche Bedienung, Audio und Status. Brille optional als alternative Kamera/Audioquelle.
2. **Persönliche Ebene:** optionaler Mac für persistente, korrigierbare Daten und größere Modelle. Cloud nur als bewusst auswählbare zusätzliche Verarbeitung mit erkennbaren Datenwegen und Kosten.
3. **Umgebungsebene:** verifizierte Raum-/Ortsanker, Karten und geeignete Sensoren, wo Infrastruktur bereitgestellt und gepflegt werden kann.

Innerhalb dieser Ebenen Beobachtung, Messung, Deutung und Handlungsanweisung getrennt behandeln. Für räumliche Aussagen Quelle, Zeitpunkt, Sensorpose und fehlende Abdeckung mitführen; „nicht erkannt“ bedeutet nicht „nicht vorhanden“. Ein generatives Bild-Sprach-Modell kann erklären, aber fehlende geometrische Messung nicht durch plausible Sprache ersetzen.

## 7. Mögliche vollständige Abläufe und Vergleich

| Bereich | Vorgeschlagener Versuch | Vergleich und Nachweis |
| --- | --- | --- |
| Einkaufen | Bestimmtes Produkt finden und Etikett erfragen. | Bestehende App, Smartphone und Brille vergleichen; richtige Identifikation, Kameraführung, Zeit, Korrekturen, Offline-Verhalten. |
| Informationen | Brief oder Gerätedisplay lesen, eine gezielte Rückfrage stellen. | Lokale OCR gegen umfassendere Bild-KI; tatsächlich korrekt beantwortete Frage, Datenschutz und Bedienaufwand. |
| Menschliche Interaktion | Gewünschte Gesprächsinformation liefern oder auf ausdrücklichen Wunsch Hilfe zuschalten. | Selbstbestimmte Auslösung und Verständlichkeit; keine Emotionserkennung oder Identitätszuordnung als gesicherte Information voraussetzen. |
| Orientierung | Einen benannten Ort in einem vorbereiteten Innenraum wiederfinden. | Bekannter Startpunkt, passende Sensortrageweise, Zielverwechslungen, Abbruch bei Lokalisierungsverlust; im kontrollierten Versuch begleitet. |

Ein einfacher Ausgangspunkt kann Smartphone plus vorhandene Software sein; eine Brille muss erkennbaren Zusatznutzen bringen. Für räumliche Forschung alternativ ein gemeinsam ausgerichtetes Kamera-/Tiefenmodul am Körper untersuchen, um die schwierige Kopplung unabhängig bewegter Geräte zu vermeiden. Befestigung, Gewicht, Sichtfeld und soziale Akzeptanz bleiben offen.

Prüfplan vor Entwicklung: erst Auswahl der Abläufe mit Betroffenen; dann bestehende Hilfen als Referenz; anschließend Gerätetest für Kamera, Sperrbildschirm, Latenz und Akku; zuletzt kontrollierte Vergleiche. Fehlerarten, ausgelassene Informationen, Aufgabenabschluss, Belastung und Hilfebedarf messen. Bei bewegungsbezogenen Versuchen Fachkompetenz für Orientierung und Mobilität einbeziehen. Hardwarekauf und Forschungsumfang ergeben sich aus den Ergebnissen.

## Evidenzgrenzen und offene Entscheidungen

Alle technischen Quellen sind Primärquellen, überwiegend Hersteller-/Entwicklerdokumentation; keine unabhängigen Leistungsversuche dieses Berichts. Kein Zugriff auf private Interviews oder alte Skriptausführung. Modell-, Geräte-, Sprach- und Vertriebsdetails vor Implementierung erneut prüfen. Offen bleiben erste priorisierte Abläufe, geeignete Trageweise, zulässige Datenhaltung und gemessener Zusatznutzen. Eine eigene Assistenz-App, sichere Gehführung oder Anschaffung wurde hier weder umgesetzt noch beschlossen.
