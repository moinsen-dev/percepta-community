# Percepta — Auftrag für die spätere Website

Status: Umsetzungsauftrag für Website v0.1, freigegeben am 2026-10-20 (D-13/D-14). Astro, Deutsch und Englisch; Cloudflare, Zieldomain `percepta.moinsen.dev`. Prüf- und Veröffentlichungsstand: [state.md](../state.md).

## Ziel und Zielgruppen

Eine Astro-Website sensibilisiert für Alltagsbarrieren, erklärt die Forschungsidee und ermöglicht Beteiligung. Primäre Aufgabe für Betroffene: verstehen, worum es geht, und selbstbestimmt Erfahrungen beitragen. Entwickler, Selbsthilfeorganisationen, Forschende und mögliche Praxispartner finden konkrete Einstiegsmöglichkeiten.

Die Positionierung umfasst Einkaufen, Fragenstellen, Interaktion mit anderen Menschen sowie Orientierung und Navigation. Diese vier Bereiche werden in beiden Sprachen sichtbar; Teilnahme setzt kein Navigationsproblem voraus.

Erfolg wird an verständlichem Projektstand und erfolgreich abgeschlossenen Teilnahmewegen gemessen, nicht an gesammelten persönlichen Daten.

## Inhalte und Sprachen

- Gleichwertige deutsche und englische Seiten unter `/de/` und `/en/`; `/` bietet eine zugängliche Sprachauswahl.
- Startseite: Problem, Projektphase, mögliche Hilfe und aktuelle Grenzen.
- „Erfahrungen beitragen“: Ablauf, kurzer Interview-Prompt, gleichwertige Textvorlage ohne KI und Korrektur des eigenen Entwurfs. Noch keine Übermittlung oder Veröffentlichungsfreigabe auf der Website.
- „Mitwirken“: technische Beiträge, Forschung, Organisationen und spätere Pilotpartner; keine erfundenen Partnerlogos.
- „Stand und Forschung“: belegte Quellen, offene Fragen und GitHub-Verweis.
- Informationen zu Barrierefreiheit, Datenverarbeitung und verantwortlichem Betreiber vor öffentlichem Start.
- Sprachwechsel führt zur entsprechenden Seite. Keine automatische Übersetzung als ungeprüfte Veröffentlichung; Sprachwechsel verwirft keine Formulareingaben.
- Keine automatische Wiederveröffentlichung von Issues als persönliche Geschichten. Website-Darstellung benötigt eine separate Freigabe.

## Barrierefreiheit als Abnahmekriterium

Prüfziel: WCAG 2.2 AA, ohne vorzeitige Konformitätsbehauptung. Primär semantisches HTML und progressive Verbesserung, möglichst wenige clientseitige Komponenten.

- Korrekte Seitensprache, Überschriftenhierarchie, Landmarken und Sprunglink zum Inhalt.
- Gesamter Teilnahmeweg per Tastatur und Screenreader; sichtbarer Fokus und sinnvolle Fokusführung.
- Verständliche Link-/Buttonnamen, dauerhafte Feldbeschriftungen, Fehlerzusammenfassung und Fehler am Feld.
- Lesbare Kontraste, Vergrößerung und Umbruch; Information nicht nur über Farbe oder Bilder.
- Prompt als normal lesbarer Text mit optionalem Kopierknopf; verständliche Rückmeldung beim Kopieren und manuelles Markieren als Alternative.
- Keine erzwungenen Zeitlimits, Autoplay, dekorativen Live-Ansagen oder bildbasierten CAPTCHAs als Teilnahmehürde.
- Für spätere Einreichung: ausdrückliche Zustimmung ohne vorausgewählte Veröffentlichung; Korrekturen vor Absenden. v0.1 hat keine Absendeaktion.
- Funktionsfähiger Kern ohne JavaScript oder dokumentierte, getestete gleichwertige Alternative.

Geplante Prüfung: automatisierte Accessibility-Checks, vollständiger Tastaturdurchlauf, VoiceOver mit Safari und NVDA mit Firefox oder Chrome, mobile Vergrößerung sowie Tests mit Betroffenen. Die Verfügbarkeit dieser Testumgebungen muss vor Abnahme bestätigt werden. Fehlende Prüfungen offen nennen.

## Einreichung und technische Grenzen

Der [Interview-Ablauf](interview-spec.md) ist die inhaltliche Grundlage. Ein späterer serverseitiger Dienst ermöglicht Einreichungen ohne öffentliches Absenderkonto. Zugangsdaten bleiben ausschließlich serverseitig. Keine GitHub-Schreibzugänge im Browser oder Prompt.

Die Website verspricht erst dann eine aktive Einreichung, wenn private Moderation, Projektkonto, Missbrauchsschutz, Kontakt-/Rücknahmekanal und Betrieb tatsächlich bereitstehen. Private Warteschlangen gehören nicht in das öffentliche Repo.

Eintrag zur Kontaktaufnahme oder zu einer Interessentenliste ist getrennt von einer öffentlichen Geschichte. Er ist freiwillig; E-Mail-Adressen erscheinen nicht in Issues. Konkreter Umfang und Aufbewahrung dieses Kanals sind noch zu entscheiden.

## Umsetzung und verbleibende Freigaben

Astro erzeugt statisches HTML; für diese erste Seite sind weder Laufzeit-Adapter noch Datenbank nötig. Systemschriften, keine externen Einbettungen und nur ein kleines Script zum Kopieren. Textdownloads und sichtbare Vorlagen stammen aus denselben versionierten Dateien. Cloudflare und `percepta.moinsen.dev` sind vom Projektverantwortlichen festgelegt; eine geschützte technische Vorschau ersetzt nicht die öffentliche Freischaltung der Zieldomain.

Betreiber-/Kontaktangaben sind mit D-15 bestätigt und als DE/EN-Impressum umgesetzt; [Quellen](legal-sources.md). Vor öffentlichem Start die konkrete Hosting-Datenverarbeitung abschließend prüfen. Vor Aktivierung privater Teilnahme zusätzlich Empfang, Moderation, Aufbewahrung/Löschung, Rechtsprüfung, Rücknahmekanal und Missbrauchsschutz klären. Lizenzentscheidung und reale Accessibility-Tests bleiben offen. Keine Platzhalter-Adresse und kein nicht vorhandenes Postfach als aktiven Kontakt veröffentlichen.

Keine Analytics, Newsletter, Spendenabwicklung oder App-Anmeldung allein wegen ihrer üblichen Verwendung hinzufügen.

## Abnahme v0.1

DE/EN mit gleichwertigen Inhalten; erreichbare Links und Textdownloads; Kopierfehler mit nutzbarer Alternative; sichtbare Inaktivität der Einreichung; Tastatur- und automatisierte Accessibility-Prüfungen mit dokumentierten Grenzen. Kein Frontend-Formular oder Backend als Vorbedingung für die Erklärungsseite.

## Spätere Abnahme des Einreichungswegs

DE und EN decken dieselben vier Bereiche und denselben Teilnahmeweg ab. Nutzer können ohne KI-Chat und ohne persönliches GitHub-Konto beitragen. Eine reine Einkaufs-, Frage- oder Gesprächssituation kann vollständig eingereicht werden. Vorschau, Korrektur, keine Veröffentlichung, optionale Namensnennung und gesonderte Website-Freigabe sind verständlich unterscheidbar. Netzausfälle oder wiederholtes Absenden erzeugen keine irreführende Erfolgsmeldung oder unkontrollierte Duplikate.
