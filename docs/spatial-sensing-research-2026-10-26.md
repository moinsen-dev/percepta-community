# Raumsensorik für Percepta: technische Forschungsoptionen

Stand und Quellenabruf: 2026-10-26. Harness: Codex, genaue Modell-/Build-ID unbekannt. Ausgangs-Commit: `b9d1680d990f422967c38a6030f5aba97d043d28`. Dokumentenrecherche ohne eigene Hardware-, Leistungs- oder Feldtests; keine Architekturentscheidung.

**Ergebnis:** Kameralose Personenerkennung kann einen vorbereiteten Innenraum ergänzen. Sie liefert jedoch weder eine allgemeine visuelle Beschreibung noch automatisch einen begehbaren Weg. Für konkrete Ziele sind markierte Orte oder kompatible Funkanker zunächst leichter abzugrenzen als eine vollständige Rekonstruktion der Umgebung aus WLAN.

## Dokumentierter Stand und Grenzen

| Technik | Belegte Fähigkeit und Voraussetzungen | Einordnung für Percepta |
| --- | --- | --- |
| WiFi-CSI | Espressif dokumentiert die Erfassung detaillierter Kanalinformationen mit ESP32-Hardware. Beispiele erkennen Bewegung/Anwesenheit und verlangen örtliche Kalibrierung. Routerposition, Funkumgebung und Antennenanordnung beeinflussen die Messung. CSI enthält mehr Information als reine Empfangsstärke (RSSI).[1][2] | Interessant für eine freiwillig eingerichtete Wohnung. „Person anwesend“ ist eine andere Aufgabe als „die richtige Person steht an der Küchentür“. Die Fähigkeiten des konkreten Aufbaus müssen gemessen werden. |
| DensePose From WiFi | Die Forschungsarbeit schätzt Körperoberflächen-Zuordnungen aus Amplitude/Phase von CSI; Aufbau mit drei Sende- und drei Empfangsantennen. Ergebnisse verschlechtern sich in unbekannten Raumkonfigurationen; seltene Posen und mindestens drei gleichzeitige Personen führen zu Fehlern. Eine vollständige 3D-Körperrekonstruktion ist dort Zukunftsarbeit.[3] | Forschungszweig für Körperwahrnehmung, kein Ersatz für Kamerabilder, Objektlesen oder Hinderniskarten. Ein Mac mit WLAN allein ist durch diese Arbeit nicht als fertiger Sensor belegt. |
| mmWave-Radar | TI dokumentiert lokale Verarbeitung von Punktwolken und Personen-Tracks auf passenden Radarchips. Ein Beispiel nutzt einen montierten IWRL6844; dessen Ausgabe enthält 3D-Punkte und Tracks. Sichtfeld, Punktdichte, Zielgröße und Konfiguration beeinflussen das Tracking.[4][5] | Für Raumbelegung und grobe Bewegung praktisch prüfbar. Ein Radar-Track liefert keine Identität oder Erklärung der Tätigkeit. Das dokumentierte People-Tracking beweist keine lückenlose Erfassung kleiner Hindernisse. |
| UWB / Nearby Interaction | Apple stellt Distanz und optional Richtung zwischen aktiv beteiligten kompatiblen Geräten/Zubehör bereit. Benötigt werden passende Funkhardware, eine App, Berechtigung und ein Konfigurations-Datenaustausch, beispielsweise per Bluetooth.[6] | Kandidat für gezielt ausgerüstete Gegenstände oder feste Anker: „Wo ist dieses Ziel relativ zu meinem Telefon?“ Die API lokalisiert nicht beliebige Menschen und Gegenstände ohne kompatiblen Gegenpart. Eine Raumposition erfordert weitere Anker-/Kartenlogik. |
| NaviLens | Hersteller dokumentiert gedruckte Farbmarkierungen, Kameraerkennung aus Abstand und Audio-/Vibrationshinweise. Markierungen benötigen keine Batterie.[7] | Konkrete Türen, Haltestellen oder Produkte identifizierbar machen. Funktioniert nur mit sichtbaren, passend angebrachten und inhaltlich gepflegten Codes. Beworbene Reichweiten sind Herstellerangaben, keine eigene Messung. |
| GoodMaps | Hersteller beschreibt vorheriges Gebäudescanning mit LiDAR und Bildern, Kartenaufbereitung und anschließende kamerabasierte Positionierung der App im kartierten Gebäude.[8] | Zeigt einen verfügbaren Ansatz für vorbereitete größere Gebäude. Gebäudezugang, Kartierung und Kartenpflege sind Teil der Infrastruktur; keine spontane universelle Navigation in unbekannten Häusern. Ein eigener API-/Integrationszugang wurde nicht geprüft. |

## Sinnvolle Experimente – Vorschläge, noch nicht beauftragt

1. **Ein bestimmtes Ziel wiederfinden:** In einem vereinbarten Raum dieselbe Tür mit sichtbarer Markierung und mit kompatiblem UWB-Zubehör lokalisieren. Erfolgreiche Zielidentifikation, Suchzeit, Kameraführung, ausgefallene Richtungsangaben und Bedienaufwand getrennt erfassen. Ein AirTag ist nicht automatisch ein frei zugängliches Zubehör für die eigene Nearby-Interaction-App; den konkreten Integrationsweg separat prüfen.
2. **Kameralosen Raumkontext vergleichen:** CSI-Anwesenheit und Radar-Tracking gegen eine bekannte Referenz prüfen: leerer Raum, sitzende Person, mehrere Personen, veränderte Möbel und offene Tür. Erst Anwesenheit oder Zone untersuchen; keine Körperpose oder Personenzuordnung als gegeben voraussetzen.
3. **Vorbereitete Innenraumroute:** Mit einem verfügbaren kartierten Gebäude oder wenigen betreuten Markierungen einen vollständigen Ablauf prüfen: Eingang, Ziel, Rückweg, falscher Startpunkt und ausgefallener Sensor. Die Route und die aktuell wahrgenommenen Hindernisse separat behandeln.

Diese Optionen sind eigene technische Ableitungen aus den Quellen. Teilnehmende, Raumzugang, Installation, Datenschutz und Untersuchungsablauf sind nicht vereinbart. Auch Funkdaten können sensible Anwesenheits- und Bewegungsinformationen enthalten; „ohne Kamera“ bedeutet nicht „ohne personenbezogene Daten“.

## Quellen

Alle Quellen am 2026-10-26 abgerufen. Herstellerdokumentation belegt die beschriebene Implementierung beziehungsweise das Angebot, keine unabhängige Leistungsprüfung für Percepta.

1. [Espressif: ESP-CSI, Quellcode und Beispiele](https://github.com/espressif/esp-csi).
2. [Espressif: CSI-Testplattform und Kalibrierung](https://github.com/espressif/esp-csi/blob/master/examples/esp-radar/console_test/README.md).
3. [Geng, Huang und De la Torre: DensePose From WiFi, arXiv:2301.00250](https://arxiv.org/html/2301.00250v1), insbesondere Versuchsaufbau und Abschnitte 4.7–5. Forschungsarbeit, keine Produktfreigabe.
4. [Texas Instruments: IWRL6844 People Tracking User Guide](https://dev.ti.com/tirex/explore/content/radar_toolbox_4_00_00_05/source/ti/examples/Industrial_and_Personal_Electronics/People_Tracking/IWRL6844_People_Tracking/docs/6844_people_tracking_user_guide.html).
5. [Texas Instruments: Tracking with GTRACK](https://dev.ti.com/tirex/explore/content/radar_academy_2_10_00_2/_build_radar_academy_2_10_00_2/source/algorithms/tracking.html).
6. [Apple: Explore Nearby Interaction with third-party accessories](https://developer.apple.com/videos/play/wwdc2021/10165/), Entwickler-Vortrag und Transkript. Die grundsätzliche API-Fähigkeit ist dokumentiert; heutige Hardwarekompatibilität und Bereitstellungsbedingungen vor Umsetzung erneut prüfen.
7. [NaviLens: Accessible signage for spaces and products](https://www.navilens.com/en/).
8. [GoodMaps: Mapping Service](https://support.goodmaps.com/migration/mapping-service).

## Prüfstatus

Primärquellen und Projektgrundlagen gelesen; keine Pakete installiert, keine Sensoren eingerichtet, kein Code oder Dienst ausgeführt. Diese Notiz ergänzt die [Recherche zum bestehenden App-Angebot](assistive-app-landscape-2026-10.md). Datei-/Whitespace-Prüfung erfolgt im gemeinsamen Dokumentationsdurchlauf des Koordinators.
