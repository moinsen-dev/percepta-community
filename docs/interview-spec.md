# Percepta — Interview und Veröffentlichung

Status: Folgeaufträge D-17 und D-18, Stand 2026-10-21. Prompt v2 (D-18): Gesprächsführung vor Vollständigkeit, sprachmodusfreundlich, Verweis auf den Wegweiser; mit simulierten Personas geprüft ([Bericht](../agents/claude-code/prompt-simulation.md)). DE/EN-Prompts und Vorlage ohne KI mit einheitlichen Überschriften und Rückverweis auf das Website-Eingabefeld. Privater Worker/D1-Empfang implementiert, produktiv geschlossen. Kein gestarteter Pilot; eine öffentliche persönliche Geschichte gehört nicht zum Pilot.

## Zweck

Alltagserfahrungen und Prioritäten verstehen, ohne eine bestimmte technische Lösung vorzugeben. Die Person darf Fragen überspringen, pausieren, Antworten ändern oder ohne Veröffentlichung aufhören. Keine Diagnose, genaue Adresse oder Kontaktinformation verlangen.

Der Umfang schließt Einkaufen, Fragen an eine App oder andere Menschen, menschliche Interaktion sowie Orientierung und Navigation ein. Zunächst offen nach einer Situation fragen. Beispiele nur bei Bedarf geben; niemand muss alle Bereiche behandeln oder ein Problem beim Gehen beschreiben.

Die kurzen Interview-Prompts stehen in [Deutsch](interview-prompt.de.md) und [Englisch](interview-prompt.en.md). Gleichwertig verfügbar sind die Textvorlagen ohne KI in [Deutsch](experience-template.de.md) und [Englisch](experience-template.en.md). Die Website und die Textdownloads verwenden diese Dateien als gemeinsame Quelle. Der Prompt ist eine Anweisung an eine fremde KI-Anwendung, keine Garantie für deren Verhalten. Antworten werden vom jeweiligen Chat-Anbieter verarbeitet; darauf vor dem Kopieren hinweisen.

## Interview

Jeweils nur eine kurze Frage stellen. Auf Wunsch einfacher formulieren oder ein Beispiel geben. Keine lange Pflichtliste abarbeiten; eine relevante Situation genügt.

1. Alltagssituation und konkretes gewünschtes Ergebnis.
2. Was gelingt bereits, und welche Hilfsmittel oder Apps helfen dabei?
3. Wo fehlt Information oder ist Unterstützung nötig?
4. Welche Information wäre wann hilfreich, und welche würde stören?
5. Handhabung von Smartphone, Sprache, Vibration oder anderen Eingabeformen.
6. Wichtigste Verbesserung und Merkmale eines hilfreichen Ergebnisses.
7. Zusammenfassung, Korrekturen und freiwilliges Beenden. Keine Veröffentlichung im ersten Schritt.

Funktionale Angaben zur Sehfähigkeit nur freiwillig und nur, wenn für das Problem nötig. Keine Person auf eine Diagnose reduzieren. Keine gefährlichen Tests oder Live-Navigation während des Interviews anleiten.

## Zusammenfassung als gemeinsame Schnittstelle

Der [private Rückweg](private-intake.md) nimmt Kategorie, Sprache und den geprüften Zusammenfassungstext entgegen. Beide Entwurfswege nutzen dieselben minimalen Inhalte:

- Neutraler Titel ohne Name oder genauen Ort.
- Alltagssituation, Ziel und Schwierigkeit.
- Bestehende Hilfsmittel, nur soweit freiwillig und relevant.
- Gewünschte Information/Unterstützung und Priorität.
- Einschränkungen und offene Fragen, ohne erfundene Antworten.
- Keine Namen im Pilotentwurf. Eine spätere öffentliche Namensnennung ist eine gesonderte Entscheidung.

Die Person erhält den vollständigen Entwurf einschließlich Titel in ihrer Sprache. Vermutungen des Modells werden nicht als Aussagen der Person ausgegeben. Keine Rohtranskripte anhängen.

## Aktueller Weg: Entwurf, Vorschau und vorbereiteter privater Empfang

Die KI interviewt, erstellt eine strukturierte Zusammenfassung, lässt sie korrigieren und nennt die DE/EN-Teilnahmeseite als Rückweg. Sie erstellt weder Repository noch öffentliches Issue und verlangt keine Zugangsdaten. Ein Prompt kann keinen Kontozugang herstellen und den Anbieter nicht technisch einschränken; externe Chat-Proben bleiben nötig.

Die Person kann ohne KI selbst schreiben oder einen geprüften Text in das Website-Eingabefeld einfügen. Texte bleiben beim Schreiben im Browserfenster; keine Anwendungs-Autospeicherung und keine Übertragung in URL-Parametern. Eine Vorschau erlaubt Korrektur oder lokalen Download. Beim Verlassen kann der Entwurf verloren gehen. Ohne JavaScript bleiben die Textvorlagen verfügbar, aber kein vollständiger direkter Einreichungsweg.

Nur bei geöffnetem Empfang folgen ausdrückliche Zustimmung und private Übertragung. Der Dienst bestätigt ausschließlich nach erfolgreicher Datenbankoperation. Wiederholung derselben Einreichung ist idempotent; bei unbestätigtem Empfang wird kein Erfolg behauptet. Ein vertraulicher Löschcode ermöglicht Rücknahme ohne Konto. Daten, Aufbewahrungsvorschlag, Sicherungskopien und technische Grenzen: [private-intake.md](private-intake.md).

Produktiv bleibt `INTAKE_OPEN` auf `false`. Betrieb und Einwilligungsbedingungen gemäß [Pilot-Leitfaden](participation-pilot.md) sind offen. Keine echte Einreichung oder Veröffentlichung im bisherigen Lauf. Die Rollen-/Fristfrage an den Projektverantwortlichen ist noch nicht beantwortet. Einwilligung zu Interview oder privater Verarbeitung erlaubt keine öffentliche Geschichte.

## Spätere Veröffentlichung: gesondert zu entscheiden

Seit D-19 umgesetzt: Nach Vorschau und ausdrücklicher Einwilligung zur Veröffentlichung des genauen Textes legt der Worker sofort ein öffentliches Issue mit dem Label `geschichte` im Projekt-Repository an (Zugang des Projekts, kein Konto der Person) und zeigt offene Issues mit diesem Label auf der Seite „Geschichten“. Der Projektverantwortliche moderiert nach der Veröffentlichung; Schließen nimmt eine Geschichte von der Website, Löschen auf Anfrage. Texte mit E-Mail-Adresse, Telefonnummer oder Link werden abgelehnt; höchstens 30 Geschichten pro Tag. Aktiv nur mit `STORIES_OPEN=true` und gesetztem Secret `GITHUB_TOKEN`. Die folgenden Grundsätze gelten weiter:

- Öffentliche Issues können kopiert werden. Entfernte Inhalte können in fremden Kopien fortbestehen. Ohne Namen ist ein Text nicht automatisch anonym; ein eigenes GitHub-Konto bleibt als Autor sichtbar.
- Eine zukünftige Freigabe muss den vollständigen konkreten Text und das Ziel benennen. Private Teilnahme oder Zustimmung zum Entwurf genügt nicht.
- Ein moderiertes Projektkonto verringert die öffentliche Zuordnung zum Absender; absolute Anonymität wird nicht versprochen. Änderungen benötigen erneute Freigabe.
- Namensnennung ist eine eigene, freiwillige Entscheidung. Website-Nutzung erfordert eine eigene Freigabe und folgt nicht aus einer GitHub-Zustimmung.
- Ohne Einwilligung zur Veröffentlichung kein öffentliches Issue und keine Website-Geschichte.

## Schutz vor versehentlicher Preisgabe

Vor Vorschau Namen, genaue Wege/Zeiten, Adresse, Telefonnummer, E-Mail, identifizierende Arbeitgeberangaben und Daten Dritter entfernen oder verallgemeinern. Notwendige Namensnennung nur über die gesonderte Entscheidung. Im Zweifel nach einer allgemeinen Formulierung fragen.

Keine öffentliche Übertragung bloß um zu „anonymisieren“. Kein komplettes Chatprotokoll, keine Anhänge oder Metadaten ungeprüft weitergeben. Versteckte Identifikatoren und Verweise auf private Originalnachrichten weglassen.

## Betrieb vor Aktivierung klären

Verantwortliche Moderation und Kontakt-/Rücknahmekanal, private Speicherung und Zugriffsrechte, Aufbewahrungsdauer, Protokollierung ohne Gesprächsinhalte, Verfahren zur erneuten Freigabe ohne GitHub-Konto und zur Vermeidung doppelter Issues sowie zugänglicher Missbrauchsschutz.

Der Begriff „anonyme Einreichung“ bezeichnet das Ziel, kein persönliches Konto öffentlich anzuzeigen. Aussagen über technische Anonymität gegenüber Betreiber, Chat-Anbieter oder Infrastruktur erfordern eine tatsächlich geprüfte Implementierung.

## Prüfung

Die [Prozessprobe](../agents/codex/participation-dry-run.md) verwendet ausschließlich erfundene Situationen und kennzeichnet redaktionelle Durchgänge. Sie ist kein Nachweis über eine externe KI-App oder eine echte Nutzerstudie. Die [Website-Validierung](../agents/codex/website-validation.md) dokumentiert Browserprüfungen und noch fehlende manuelle Tests.

Vor dem Pilot: DE und EN, beide Entwurfswege, Überspringen, Pause, Abbruch, Korrektur, versehentliche Identifikatoren, unklare Frage an eine App oder einen Menschen, eine reine Einkaufs-/Gesprächssituation und eine Bitte um Veröffentlichung prüfen. Bei einer Bitte um öffentliche Veröffentlichung muss die Entwurfshilfe den getrennten Freigabeweg erklären und bei Text bleiben. Kein Erfolg darf behauptet werden, solange keine Einreichungsstelle existiert.
