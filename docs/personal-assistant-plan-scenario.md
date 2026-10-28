# Plan-Szenario: persönliche Alltagshilfe mit Brille, iPhone und Mac mini

Stand: 26. Oktober 2026. Aus dem gemeinsamen Planungsgespräch mit dem Projektverantwortlichen festgehalten durch Codex; Modell laut Sitzung GPT-6, genaue Build-ID unbekannt. Ausgangs-Commit: `8cec8fb29d4aaee97fa76bce1d8a61246a4ae8f9`.

**Status: Entwurf für Forschung und Erprobung.** Dieses Dokument beschreibt ein mögliches Zusammenspiel der Technik und vorgeschlagene Versuche. Es ist keine implementierte Assistenz-App, keine nachgewiesene Leistungsbeschreibung und kein Auftrag zum Kauf oder zur Entwicklung. Die Priorisierung vollständiger Alltagsabläufe mit Betroffenen nach D-11 bleibt maßgeblich.

## 1. Zielbild

Eine blinde oder sehbehinderte Person kann eine Alltagshilfe durch Sprache starten, gezielt visuelle Informationen erfragen und eine Aufgabe über mehrere Schritte verfolgen. Eine Brille hält die Hände frei. Das iPhone übernimmt die mobile Verarbeitung und Bedienung. Ein persönlicher Mac mini kann zusätzliche Rechenleistung und ein korrigierbares Gedächtnis bereitstellen.

Die Hilfe soll die gewünschte Information zum passenden Zeitpunkt liefern. Sie soll sich unterbrechen lassen, Unklarheiten benennen und auf Wunsch schweigen. Der mögliche Nutzen liegt im selbstständigeren Abschluss einer Aufgabe, nicht in möglichst vielen Ansagen.

Das vollständige Zielbild umfasst Einkaufen, Informationszugang, menschliche Interaktion sowie Orientierung. Die folgenden Beispiele sind fiktiv und keine bereits mit Betroffenen ausgewählte Funktionsliste.

## 2. Angenommene Versuchsausstattung

| Baustein | Vorgesehene Rolle | Noch zu prüfen |
| --- | --- | --- |
| Unterstützte Meta-Brille | Kamera aus Kopfperspektive, Mikrofon und Audioausgabe; Anbindung an eigene Software. | Konkretes Modell, SDK-Funktionen, Kameraführung, Bildqualität, Wiederverbindung, Akku und zugängliche Bedienung. |
| Aktuelles iPhone mit LiDAR, beispielsweise iPhone 18 Pro | Mobile Zentrale für Geräteverbindung, lokale Auswertung, Standort, Bewegung und bei geeigneter Ausrichtung Tiefendaten. | Welche Sensoren gleichzeitig nutzbar sind; Trageweise, Sperrbildschirm, Hintergrundbetrieb, Wärme und Energiebedarf. |
| Persönlicher Mac mini M6 | Größere lokale Modelle, Dokumente und ausdrücklich gespeicherte persönliche Informationen. | Modellkompatibilität, Speicherbedarf, Antwortzeit, Betriebskosten und Wartung. |
| Optionale Ortsanker und Raumsensoren | Bekannte Ziele oder ergänzenden Raumkontext bereitstellen. | Zusatznutzen und Aufwand gegenüber Kamera, vorhandener Software und einfachen Markierungen. |

Dies ist eine Versuchskonfiguration, keine Mindestanforderung für spätere Nutzer. Vorhandene Geräte sollen als Vergleich dienen. Ein Mac pro Person müsste seinen Zusatznutzen gegenüber Verarbeitung allein auf dem Smartphone belegen.

## 3. Vorgeschlagenes Zusammenspiel

1. Die Person startet eine konkrete Aufgabe, zum Beispiel: „Hilf mir, dieses Gerät zu bedienen.“
2. Die mobile App erfasst passende aktuelle Bilder und die Frage. Sie prüft, ob die Kamera ausreichende Informationen liefert, und fordert bei Bedarf eine andere Ausrichtung an.
3. Einfache Auswertungen laufen möglichst auf dem iPhone. Aufwendigere Aufgaben können bei verfügbarer Verbindung an den persönlichen Mac gehen.
4. Der Assistent antwortet kurz und aufgabenbezogen. Fehlende Sicht oder widersprüchliche Informationen lösen eine Rückfrage aus.
5. Nach einer Handlung wird die aktuelle Situation neu erfasst. Eine frühere Antwort wird nicht ungeprüft als aktueller Zustand fortgeschrieben.
6. Nur ausdrücklich gewünschte Informationen werden dauerhaft in das persönliche Gedächtnis übernommen. Die Person kann den Ablauf jederzeit beenden.

Die Architektur soll Smartphone, Kameraquelle und Modellverarbeitung austauschbar halten. Eine Cloud-Verarbeitung wäre eine gesondert auswählbare Erweiterung mit erkennbaren Datenwegen und Kosten; sie ist in diesem Szenario keine Voraussetzung.

## 4. Mögliche vollständige Alltagsabläufe

### A. Ein Gerät bedienen und Rückfragen stellen

**Ausgangssituation:** Eine Person möchte an einer bekannten Kaffeemaschine ein Getränk zubereiten und kann die Beschriftung oder Anzeige nicht lesen.

**Möglicher Ablauf:**

1. Die Person nennt das Ziel. Der Assistent erfasst Anzeige und erkennbare Bedienelemente.
2. Er erläutert die relevante Beschriftung und fragt gegebenenfalls nach der gewünschten Zubereitung.
3. Nach einer Bedienhandlung wertet er ein neues Bild aus und liest den geänderten Anzeigetext vor.
4. Bei unlesbarer Anzeige, verdecktem Bedienelement oder unbekanntem Gerätezustand benennt er die Lücke und setzt den Ablauf nicht anhand einer Vermutung fort.
5. Die Person bestätigt den Abschluss oder beendet die Unterstützung.

**Möglicher Mehrwert:** Ein zusammenhängender Dialog verbindet aktuelle Beobachtung, Rückfrage und eine bei Bedarf hinterlegte Anleitung. Gerätetyp, Funktion und aktueller Zustand dürfen nicht verwechselt werden. Erste Tests verwenden eine ungefährliche Bedienoberfläche oder Simulation ohne heiße Flüssigkeiten oder bewegte Teile.

### B. Ein Produkt beim Einkauf auswählen

**Ausgangssituation:** „Ich suche Hafermilch ohne Zuckerzusatz.“

Der Assistent könnte sichtbare Kandidaten eingrenzen, eine Nahaufnahme oder einen Barcode anfordern und die gewünschte Produktangabe vorlesen. Rückfragen zu Menge, Preis oder Zutaten beziehen sich auf das tatsächlich identifizierte Produkt. Nicht lesbare Angaben bleiben offen.

**Möglicher Mehrwert:** Die Person kann ein Produkt gezielter auswählen und Angaben überprüfen. Eine vollständige Erfassung des Supermarkts oder das Lesen kleiner Etiketten aus beliebiger Entfernung wird nicht vorausgesetzt.

### C. Einen Gegenstand bewusst merken und wiederfinden

**Ausgangssituation:** „Merk dir: Ich lege meinen Schlüssel hier ab.“

Das System speichert auf Wunsch eine Beobachtung mit benanntem Ort und Zeitpunkt. Eine spätere Antwort könnte lauten: „Du hast ihn heute Morgen auf die Ablage neben der Wohnungstür gelegt. Ob er noch dort liegt, weiß ich nicht.“

Die Person kann den Ort korrigieren, einen Eintrag ersetzen oder ihn löschen. Eine neue Sichtprüfung kann bestätigen, ob der Gegenstand noch dort liegt. Das Szenario setzt kein dauerhaftes Videoarchiv voraus.

**Möglicher Mehrwert:** Ein persönliches Gedächtnis ergänzt die aktuelle Wahrnehmung. Dieselbe Grundidee kann ausdrücklich gespeicherte Dokumente und Anleitungen erschließen, etwa die gesuchte Ersatzfilterbezeichnung aus einer Geräteanleitung.

### D. Räume und Eingänge verstehen

**Ausgangssituation:** „Welche Schilder erkennst du im Eingangsbereich? Gibt es einen Hinweis auf die Anmeldung?“

Der Assistent könnte sichtbare Beschilderung vorlesen und erkannte räumliche Beziehungen beschreiben. In einer vorbereiteten Wohnung könnten benannte Räume und feste Ablageplätze ergänzend hinterlegt sein. Markierungen oder kompatible Funkanker wären mögliche Erweiterungen für ein bestimmtes Ziel.

**Möglicher Mehrwert:** Ein Ort wird verständlicher und ein Ziel besser identifizierbar. Eine erkannte Tür und ein sicherer Weg zu dieser Tür bleiben unterschiedliche Aufgaben. Bewegungsbezogene Versuche erfolgen gesondert, kontrolliert und mit geeigneter Fachkompetenz für Orientierung und Mobilität.

### E. Begegnungen selbstbestimmt unterstützen

**Ausgangssituation:** Eine Person möchte eine ausgehängte Gesprächsinformation oder ein Namensschild lesen oder ausdrücklich einen sehenden Menschen per Video hinzuschalten.

Der Assistent erschließt auf Wunsch die konkrete sichtbare Information. Eine Kontaktaufnahme erfolgt nur nach ausdrücklicher Auslösung. Vermutete Gefühle, Gesprächsbereitschaft oder Identitäten werden nicht als gesicherte Information ausgegeben.

**Möglicher Mehrwert:** Die Person entscheidet selbst, wann zusätzliche Information oder menschliche Hilfe nützlich ist.

## 5. Technische Grenzen, die den Plan bestimmen

- **Unterschiedliche Perspektiven:** Die Brille schaut mit dem Kopf, das iPhone möglicherweise in eine andere Richtung. Gemeinsame räumliche Aussagen benötigen passende Zeitstempel, Kalibrierung und eine bekannte relative Lage. LiDAR in der Tasche liefert keine Sicht auf den Weg vor der Person.
- **Unvollständige Wahrnehmung:** Eine Kamera erfasst nur ihren Ausschnitt. Ein nicht erkanntes Hindernis ist kein Beleg für einen freien Weg. Tiefenmessungen können fehlen oder unbrauchbar sein.
- **Veraltete Informationen:** Bildalter und Zeitpunkt gespeicherter Beobachtungen müssen zur Aussage passen. Ein früher gespeicherter Gegenstand kann inzwischen bewegt worden sein.
- **Verbindung und Ausfälle:** Unterwegs benötigt der Heimserver einen erreichbaren Netzweg. Ausfälle müssen erkennbar sein; der mobile Grundbetrieb soll unabhängig vom Mac funktionieren. Zeitkritische Warnungen dürfen nicht allein vom Fernweg abhängen.
- **Aufmerksamkeit:** Sprache, Klang, Haptik und visuelle Darstellung müssen zur Person und Aufgabe passen. Daueransagen können stören; nutzbares Sehvermögen, Hörvermögen und alternative Bedienung sind zu berücksichtigen.

Ein vollständiger Ersatz des Sehens oder ein verlässlicher digitaler Blindenführhund ist damit nicht nachgewiesen. Generative Erklärung, Sensorbeobachtung, räumliche Messung und Bewegungsanweisung sind getrennt zu behandeln.

## 6. Persönliche Daten und Betrieb

Das persönliche Gedächtnis wird bewusst ausgelöst und bleibt einsehbar, korrigierbar und löschbar. Rohvideo wird nicht standardmäßig dauerhaft archiviert. Kamera-, Audio-, Dokument- und Funkdaten sind gleichermaßen bei der Gestaltung der Datenhaltung zu berücksichtigen.

Die Verbindung zwischen Telefon und Mac benötigt Authentisierung und Verschlüsselung. Ein lokal laufendes Modell belegt nicht automatisch einen vollständig lokalen Datenweg aller beteiligten Geräte. Zugriffsrechte, Pairing, Kontoverbindungen und mögliche Telemetrie sind vor einem Versuch konkret zu prüfen.

Für einen persönlichen Server gehören Neustartverhalten, Updates, Sicherung und Löschung, Support sowie Energie- und Anschaffungskosten zum Produktentwurf. Das Paket soll im Alltag ohne Entwicklerbedienung nutzbar werden; das ist ein Entwicklungsziel und noch kein erreichter Stand.

## 7. Vorgeschlagene Erprobung

| Schritt | Ergebnis, das vor dem nächsten Schritt vorliegen sollte |
| --- | --- |
| Aufgaben gemeinsam priorisieren | Betroffene wählen relevante vollständige Abläufe; die Beispiele dieses Dokuments werden bestätigt, verändert oder verworfen. |
| Vorhandene Hilfen vergleichen | Dokumentierter Ausgangswert für Aufgabenabschluss, Bedienaufwand und verbleibende Schwierigkeiten. |
| Technikzugänge prüfen | Nachweis von Kamera-/Audiozugriff, zugänglichem Start/Stopp, Wiederverbindung, geeignetem Sensorblickfeld und erkennbarem Ausfall. |
| Einen Ablauf durchgängig erproben | Aufgabenabschluss und Fehlerverhalten auf kontrolliertem Material, zunächst ohne gefährliche Handlungen. |
| Kombinationen vergleichen | Smartphone allein, Smartphone plus Brille und zusätzlich Mac an derselben Aufgabe bewerten. |
| Erweiterung begründen | Gedächtnis, zusätzliche Sensoren oder weitere Abläufe nur anhand des beobachteten Nutzens planen. |

**Empfehlung für den ersten Vergleich:** „Hilf mir, dieses Gerät zu bedienen“ verbindet Bild, Text, Dialog und eine mögliche persönliche Anleitung. Als zweiter unabhängiger Versuch eignet sich das bewusst ausgelöste Objektgedächtnis. Diese Empfehlung ist noch keine gemeinsam beschlossene Priorisierung.

Zu messen sind tatsächlicher Aufgabenabschluss, falsche und ausgelassene Informationen, notwendige Kamerakorrekturen, Hilfebedarf, Antwortzeit einschließlich langsamer Ausreißer, Akku-/Wärmeverhalten und subjektive Belastung. Für gespeicherte Informationen kommen Korrektur und Löschung hinzu. Akzeptanzkriterien werden vor dem jeweiligen Versuch festgelegt; ausgedachte Erfolgsquoten oder Latenzwerte werden nicht als Zielnachweis ausgegeben.

## 8. Offene Entscheidungen und nächster Schritt

Offen sind die priorisierten Aufgaben, konkrete Geräte und Trageweise, Modelle und Verarbeitungsorte, Umfang des Gedächtnisses und die passenden Ausgabekanäle. Insbesondere ist zu prüfen, ob der Mac einen hinreichenden Zusatznutzen bietet und welche Funktionen ohne ihn sinnvoll bleiben.

Der nächste sinnvolle Schritt ist die Auswahl eines vollständigen Ablaufs mit Betroffenen und der Vergleich mit bereits vorhandenen Hilfen. Dieses Dokument selbst beauftragt weder die Rekrutierung noch einen Feldversuch, Kauf oder Implementierungsbeginn.

## 9. Grundlage und Evidenzstatus

Das Szenario hält das Planungsgespräch fest und leitet daraus überprüfbare Hypothesen ab. Es ergänzt die [technische Recherche vom 26.10.2026](technical-options-2026-10-26.md), die [Raumsensorik-Vertiefung](spatial-sensing-research-2026-10-26.md) und den [Vergleich vorhandener Angebote](assistive-app-landscape-2026-10.md). Dort stehen datierte Primärquellen und dokumentierte Grenzen.

Für diesen Speichervorgang wurden keine neuen Herstellerfunktionen recherchiert und keine Geräte, Modelle oder Personen getestet. Verfügbarkeit, SDK-/Vertriebsbedingungen und konkrete Hardwarefähigkeiten sind vor einer Umsetzung erneut zu prüfen. Der aktuelle Gesamtstand und bestätigte Entscheidungen stehen in [state.md](../state.md).
