# Percepta — Interview und Veröffentlichung

Status: Spezifikation und redaktionell geprüfte Prompt-Entwürfe. Kein laufender Einreichungsdienst, keine automatisierte Verarbeitung und keine Studie.

## Zweck

Alltagserfahrungen und Prioritäten verstehen, ohne eine bestimmte technische Lösung vorzugeben. Die Person darf Fragen überspringen, pausieren, Antworten ändern oder ohne Veröffentlichung aufhören. Keine Diagnose, genaue Adresse oder Kontaktinformation verlangen.

Der Umfang schließt Einkaufen, Fragen an eine App oder andere Menschen, menschliche Interaktion sowie Orientierung und Navigation ein. Zunächst offen nach einer Situation fragen. Beispiele nur bei Bedarf geben; niemand muss alle Bereiche behandeln oder ein Problem beim Gehen beschreiben.

Die beiden kopierbaren Entwürfe stehen in [Deutsch](interview-prompt.de.md) und [Englisch](interview-prompt.en.md). Der Prompt ist eine Anweisung an eine fremde KI-Anwendung, keine Garantie für deren Verhalten. Antworten werden vom jeweiligen Chat-Anbieter verarbeitet; darauf vor dem Kopieren hinweisen.

## Interview

Jeweils nur eine kurze Frage stellen. Auf Wunsch einfacher formulieren oder ein Beispiel geben. Keine lange Pflichtliste abarbeiten; eine relevante Situation genügt.

1. Alltagssituation und konkretes gewünschtes Ergebnis.
2. Was gelingt bereits, und welche Hilfsmittel oder Apps helfen dabei?
3. Wo fehlt Information oder ist Unterstützung nötig?
4. Welche Information wäre wann hilfreich, und welche würde stören?
5. Handhabung von Smartphone, Sprache, Vibration oder anderen Eingabeformen.
6. Wichtigste Verbesserung und Merkmale eines hilfreichen Ergebnisses.
7. Zusammenfassung, Korrekturen und freiwillige Veröffentlichungsentscheidungen.

Funktionale Angaben zur Sehfähigkeit nur freiwillig und nur, wenn für das Problem nötig. Keine Person auf eine Diagnose reduzieren. Keine gefährlichen Tests oder Live-Navigation während des Interviews anleiten.

## Zusammenfassung als gemeinsame Schnittstelle

Keine festgelegte API oder Datenbank in dieser Phase. Das spätere Issue und der moderierte Weg nutzen dieselben minimalen Inhalte:

- Neutraler Titel ohne Name oder genauen Ort.
- Alltagssituation, Ziel und Schwierigkeit.
- Bestehende Hilfsmittel, nur soweit freiwillig und relevant.
- Gewünschte Information/Unterstützung und Priorität.
- Einschränkungen und offene Fragen, ohne erfundene Antworten.
- Optional selbst gewählter öffentlicher Name; Standard ist keine Namensnennung.

Die Person erhält den vollständigen Veröffentlichungstext einschließlich Titel in ihrer Sprache. Vermutungen des Modells werden nicht als Aussagen der Person ausgegeben. Keine Rohtranskripte anhängen.

## Zustimmung und Veröffentlichungswege

**Öffentlichkeit:** Issues im Zielrepo sind öffentlich lesbar und möglicherweise kopierbar. Änderungen und Löschung können fremde Kopien nicht zurückholen. Namen entfernen verringert Identifizierbarkeit, gewährleistet sie aber nicht. Kontext wie ein seltener Arbeitsplatz oder ein genauer täglicher Weg kann ebenfalls identifizieren.

**Direkt aus einer KI mit GitHub-Anbindung:** Nach Vorschau ausdrücklich Zustimmung zum genauen Text und Ziel `moinsen-dev/percepta-community` erfragen. Vorher erklären, dass das verwendete Konto als Autor sichtbar bleibt. Keine Zugangsdaten erfragen. Keine verknüpften Accounts automatisch benutzen. Ohne ausdrückliche Zustimmung kein Tool-Aufruf zur Erstellung.

**Ohne GitHub-Anbindung:** Den fertigen Text zum Kopieren bereitstellen und die fehlende Anbindung klar nennen. Kein Issue-Link und keine erfolgreiche Veröffentlichung erfinden.

**Moderierter Weg ohne öffentliches Absenderkonto:** Später über ein zugängliches Formular die freigegebene Zusammenfassung privat einreichen. Moderation prüft Identifizierbarkeit und Inhalt; ein Projektkonto veröffentlicht den freigegebenen Text. Keine automatische Veröffentlichung beim Eingang. Inhaltliche Änderungen benötigen erneute Freigabe, sonst zurückstellen oder ablehnen. Rückfragen dürfen keine verpflichtende öffentliche Kontaktangabe voraussetzen.

**Namensnennung:** Separat und freiwillig, Standard aus. Bei Zustimmung nur den selbst angegebenen gewünschten Namen übernehmen, keine Kontaktdaten oder Namen Dritter.

**Website-Geschichte:** Getrennte Zustimmung zur Website-Darstellung. In v0 wird nur ein Issue-Entwurf vorbereitet; Website-Zustimmung wird nicht bereits über das Interview eingesammelt. Eine GitHub-Freigabe umfasst keine Website-Nutzung.

**Keine Veröffentlichung:** Text auf Wunsch lokal kopierbar bereitstellen, keine Übermittlung an Percepta. Keine Aussagen über Löschung durch den externen Chat-Anbieter machen.

## Schutz vor versehentlicher Preisgabe

Vor Vorschau Namen, genaue Wege/Zeiten, Adresse, Telefonnummer, E-Mail, identifizierende Arbeitgeberangaben und Daten Dritter entfernen oder verallgemeinern. Notwendige Namensnennung nur über die gesonderte Entscheidung. Im Zweifel nach einer allgemeinen Formulierung fragen.

Keine öffentliche Übertragung bloß um zu „anonymisieren“. Kein komplettes Chatprotokoll, keine Anhänge oder Metadaten ungeprüft weitergeben. Versteckte Identifikatoren und Verweise auf private Originalnachrichten weglassen.

## Betrieb vor Aktivierung klären

Verantwortliche Moderation und Kontakt-/Rücknahmekanal, private Speicherung und Zugriffsrechte, Aufbewahrungsdauer, Protokollierung ohne Gesprächsinhalte, Verfahren zur erneuten Freigabe ohne GitHub-Konto und zur Vermeidung doppelter Issues sowie zugänglicher Missbrauchsschutz.

Der Begriff „anonyme Einreichung“ bezeichnet das Ziel, kein persönliches Konto öffentlich anzuzeigen. Aussagen über technische Anonymität gegenüber Betreiber, Chat-Anbieter oder Infrastruktur erfordern eine tatsächlich geprüfte Implementierung.

## Zu prüfende Szenarien

| Fall | Erwartetes Verhalten |
| --- | --- |
| Deutsch / Englisch | Eine Frage je Schritt, gleiche Wahlmöglichkeiten und Veröffentlichungshinweise |
| Frage überspringen / früh abschließen | Kein Zwang; kurze Zusammenfassung ohne erfundene Lückenfüllung |
| Keine GitHub-Anbindung | Kopierbarer Entwurf; keine behauptete Issue-Erstellung |
| Veröffentlichung abgelehnt | Keine Übermittlung oder öffentliche Anlage |
| Name versehentlich genannt | Vor Vorschau entfernen; keine stillschweigende Namensfreigabe |
| Name ausdrücklich gewünscht | Getrennte Entscheidung und erneute Vorschau |
| Exakter Ort oder Daten Dritter | Verallgemeinern/entfernen, Ergebnis zur Korrektur zeigen |
| Anonymität bei eigenem Konto erwartet | Sichtbarkeit erklären; moderierten Weg nennen, sofern tatsächlich verfügbar |
| Veröffentlichung fehlgeschlagen/unklar | Kein Erfolg behaupten; vor Wiederholung nach vorhandenem Issue prüfen |
| Website-Nutzung | Nicht aus GitHub-Zustimmung ableiten |
| Einkauf ohne Navigationsproblem | Produkt-/Informationsbedarf vollständig erfassen, kein Wegproblem voraussetzen |
| Frage an App oder an eine Person | Bedeutung bei Bedarf klären, keine bestimmte Lösung vorgeben |
| Begegnung oder Gespräch | Informations-/Kommunikationsbedarf erfragen, keine ungefragte Aufzeichnung oder Kontaktaufnahme |

Aktueller Prüfstatus: [Codex-Validierung](../agents/codex/validation.md). Diese Fälle sind noch keine mit externen Chat-Apps oder Betroffenen durchgeführten Tests.
