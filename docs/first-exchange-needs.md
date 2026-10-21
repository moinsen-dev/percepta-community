# Bedarfe aus einem ersten Austausch mit einem blinden Tester

Stand 2026-10-21. Claude Code im Auftrag des Projektverantwortlichen. Quelle ist ein privater E-Mail-Verlauf (19. bis 21. Oktober 2026) zwischen dem Projektverantwortlichen und einem blinden Mann, der seine Mitarbeit und Tests angeboten hat. Hier stehen nur verallgemeinerte Bedürfnisse: keine Namen, Kontaktdaten, Orte, Linien oder Haltestellen. Der Verlauf selbst und eine Fassung mit Einzelheiten liegen außerhalb des Repositorys. Eine Person ist keine repräsentative Bedarfsstudie; die Liste ist Ausgangspunkt für Gespräche, keine Funktionsliste.

## Was er sich wünscht

Ausgangslage: iPhone mit LiDAR-Sensor, VoiceOver, Google Maps und BlindSquare. Diese Apps führen ihn zum Ziel, sagen aber nicht im Moment, was direkt vor ihm passiert.

1. **Ansagen beim Gehen:** kurze Richtungshinweise („etwas rechts“, „etwas links“, „Stopp“) und Warnungen vor Personen oder Gegenständen im Weg.
2. **Höhenunterschiede:** Treppen und Bordsteine, aufwärts oder abwärts, auch „hoher Bordstein“.
3. **Ampeln:** wo die Ampel ist und ob sie grün oder rot zeigt.
4. **Bus, Straßenbahn und Zug:** welche Linie mit welchem Ziel gerade einfährt; die Tür finden (etwa Fahrertür oder erster Wagen); freie Sitzplätze; dem Fahrpersonal per App einen Ausstiegswunsch melden.
5. **Eingänge und Gebäude:** vor einem bestimmten Geschäft oder Café den Eingang finden und dorthin geführt werden; drinnen erfahren, wo man ist und was im Eingangsbereich liegt; Rolltreppen mit Fahrtrichtung; in Kaufhäusern pro Stockwerk eine Übersicht.
6. **Sitzplatz und Toilette:** zu einem Tisch geführt werden und hören, welcher Stuhl frei ist; Toiletten finden.

Dazu eine Rückmeldung zur Website (Stand vor dem Umbau am 21. Oktober 2026): Mit VoiceOver gut lesbar, Links verständlich beschriftet und per Doppeltipp zuverlässig zu öffnen. Er nannte das ausdrücklich, weil das auf vielen Websites nicht klappt.

## Einschätzung: was heute geht und was schwierig bleibt

Das ist eine erste technische Einordnung, keine Prüfung mit ihm und kein Versprechen.

| Wunsch | Heute vorhanden | Einschätzung für Percepta |
| --- | --- | --- |
| Personen und Türen erkennen | Apple beschreibt für unterstützte iPhones eine Liveerkennung von Personen, Türen und Möbeln in VoiceOver und Lupe ([Apple-Anleitung](https://support.apple.com/de-de/guide/iphone/iph37e6b3844/ios)). Ob sein Gerät alle Modi unterstützt, ist am Gerät zu prüfen. | Zuerst gemeinsam ausprobieren, ob das seinem Wunsch schon nahekommt. |
| Einfahrende Linie und Ziel | Echtzeit-Fahrplandaten der Verkehrsbetriebe; Anzeigen am Fahrzeug lassen sich mit der Kamera lesen. | Gut für einen ersten Versuch geeignet: hilfreich, gut prüfbar, und eine falsche Antwort ist nicht unmittelbar gefährlich. |
| Eingang eines bestimmten Geschäfts finden | Navigations-Apps führen in die Nähe; Türerkennung siehe oben. | Möglicher zweiter Versuch: das letzte Stück vom „Ziel erreicht“ bis zur Tür. In ruhiger Umgebung und mit Begleitung testen. |
| Stockwerks- und Eingangsübersicht, Rolltreppen | Schilder und Übersichtstafeln sind mit Kamera-KI lesbar. | Machbar, wenn Schilder vorhanden sind; Innenraumkarten gibt es meist nicht. |
| Freier Stuhl, freier Sitzplatz | Kamera-KI erkennt Stühle und Personen. | Unsicher: Ein erkannter Stuhl heißt nicht, dass er frei ist oder dass der Weg dorthin frei ist. |
| Tür am Fahrzeug finden | Kamera-KI kann Türen erkennen. | Zeitkritisch auf dem Bahnsteig, deshalb nur mit Begleitung erforschen. |
| Ausstiegswunsch an das Fahrpersonal | — | Braucht die Technik der Verkehrsbetriebe; Percepta kann das nicht allein bauen. |
| Laufende Warnungen vor Hindernissen, Treppen, Bordsteinen | Einzelne Apps beschreiben Objekte; die Anbieter schließen den Einsatz zur sicheren Gehführung aus (siehe [vorhandene Hilfen](existing-assistive-tools.md)). | Sicherheitskritisch. Eine fehlende oder falsche Warnung kann zu einem Sturz führen. Nur als Forschungsfrage mit Fachleuten für Orientierung und Mobilität, nicht als Versprechen. |
| Ampel grün oder rot | — | Am kritischsten. Eine falsche Antwort kann lebensgefährlich sein. Keine Umsetzung ohne nachgewiesene Zuverlässigkeit; Langstock und Mobilitätstraining bleiben die Grundlage. |

## Vorschlag für das nächste Gespräch

- Ihn bitten, die drei wichtigsten Situationen zu wählen. Die Frage steht schon in der Mail vom 19. Oktober und ist noch offen.
- Apples Liveerkennung gemeinsam auf seinem iPhone ausprobieren: Was fehlt ihm dann noch?
- Seine Erfahrungen auf Wunsch mit der Gesprächshilfe der Website festhalten. Eine Veröffentlichung braucht seine Zustimmung zum genauen Text.
