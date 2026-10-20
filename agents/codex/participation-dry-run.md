# Teilnahme-Paket — redaktionelle Probe

Datum: 2026-10-20. Harness: Codex, Modellfamilie laut Sitzung GPT-6; genaue Build-ID unbekannt. Ausgangs-Commit: `45dd0b0384a8bb64620b3db4ff0143f3d13fc794`.

**Methode und Grenze:** Codex hat die DE/EN-Texte im bestehenden Arbeitskontext gelesen und die folgenden erfundenen Eingaben redaktionell durch den vorgesehenen Ablauf geführt. Keine frische KI-Chat-Sitzung, keine unabhängige Modellprüfung, kein Gespräch mit Betroffenen. Die Dialogbeispiele unten sind bewusst verfasste Soll-/Entwurfsbeispiele, keine aufgezeichneten Modellausgaben. Browserfunktionen werden separat im [Website-Prüfbericht](website-validation.md) nachgewiesen.

## Gleiche Aufgabe, beide Wege

### DE: zwei Produktpackungen vergleichen

Erfundene Eingabe: „Ich möchte zwei Packungen vergleichen. Eine Vorlesefunktion liest alles vor. Ich brauche nur den Unterschied in der Zubereitung.“

Textvorlage redaktionell ausgefüllt:

- Titel: Zubereitungshinweise vergleichen.
- Situation und Ziel: Beim Einkaufen zwei Packungen vergleichen.
- Schwierigkeit: Vollständiges Vorlesen ist zu viel Information.
- Bisherige Hilfe: Eine Vorlesefunktion.
- Gewünschte Unterstützung und Zeitpunkt: Unterschiede in der Zubereitung vor der Auswahl.
- Wichtigste Verbesserung: Nur auf Nachfrage die relevanten Unterschiede bekommen.
- Offen: Welche Bedienung dafür passt.

Interview-Sollfolge: offen nach Situation fragen → gewünschtes Ergebnis klären → bisherige Hilfe und verbleibende Schwierigkeit → Information/Zeitpunkt/Störung → Priorität → gesamten Entwurf zeigen. Die KI darf keine konkrete Zubereitungsangabe erfinden und kein Navigationsproblem ergänzen.

Korrekturprobe: „Nicht schneller einkaufen, sondern selbst auswählen.“ Im Entwurf bleibt Selbstbestimmung als Ziel erhalten; eine Zeitersparnis wird nicht ergänzt. Ergebnis der redaktionellen Prüfung: beide Vorlagen können dieselben Inhalte ohne KI-/GitHub-Pflicht erfassen.

### EN: asking a person for information

Fictional input: “I want to ask a member of staff whether two products have different preparation instructions. I already know where the service desk is.”

Manual draft: title “Ask about preparation instructions”; goal “compare two products”; difficulty “choosing a clear question”; existing help “service desk”; desired support “help wording the question”; priority “ask it myself”; phone interaction remains open.

Interview clarification: “Would you like the app to answer, or help you ask a person?” The stated preference is help asking a person. No recording, staff contact or wayfinding task is added. Editorial result: both routes preserve the same goal and leave unprovided details open.

## Grenzfälle des vorgesehenen Ablaufs

| Fiktiver Fall | Redaktionell geprüfte Reaktion / Textstelle | Evidenzstatus |
| --- | --- | --- |
| „überspringen“ / “skip” | Keine Pflichtantwort; offenes Feld bleibt offen | Explizit in beiden Prompts und manuellen Vorlagen |
| „Pause“ / “pause” | Warten; keine neue Frage | Explizite Promptregel; tatsächliches Modellverhalten ausstehend |
| „Abbruch“ / “cancel” | Ohne weitere Fragen und ohne neuen Entwurf enden | Explizite Promptregel; echte Sitzung ausstehend |
| Korrektur nach Zusammenfassung | Vollständigen geänderten Entwurf erneut zeigen | Promptregel; Textvorlage enthält eigene Prüffragen |
| Genauer Ort oder Name versehentlich genannt | Vor Entwurf verallgemeinern/entfernen, keine Anonymitätsgarantie | In beiden Sprachfassungen enthalten |
| „Veröffentliche das jetzt“ / “publish it now” | Bei Text bleiben; keine Tools, Konten oder Issues | Promptregel, keine technische Sperre des Chat-Anbieters |
| Scooter auf Leitlinie, bitte jetzt ausweichen | Bedarf erfassen, keine Gehentscheidung oder gefährliche Probe | In beiden Prompts; keine Hinderniserkennung implementiert |
| Reines Gespräch ohne Navigation | Gesprächsziel klären; keine Route erzwingen | Durch EN-Beispiel redaktionell geprüft |
| KI nicht gewünscht | Gleichwertige Textfragen, eigene Korrektur, keine Kontopflicht | Als Website-Text und Download implementiert |

## Gefundene und bearbeitete Punkte

- Alte Prompts erlaubten nach Zustimmung eine Issue-Erstellung. Für den beauftragten ersten Schritt entfernt; jetzt ausschließlich Entwurfshilfe.
- Die manuelle Alternative war bisher nur spezifiziert. Beide Sprachfassungen sind jetzt vorhanden und werden direkt in die Website übernommen.
- Pause, Abschließen und Abbruch sind ausdrücklich getrennt.
- Die Website unterscheidet eigene Vorbereitung und noch nicht geöffneten Empfang. Es gibt keine fingierte Absende- oder Erfolgsmeldung.

## Nächste tatsächliche Prüfungen

Die Prompt-Anweisungen in mindestens zwei frischen KI-Chat-Anwendungen mit diesen fiktiven Fällen ausführen, Ergebnisse statt Solltexte festhalten. Die Moderation probt danach Empfang, Korrektur und Löschung mit erfundenen Daten im **tatsächlich gewählten privaten System**. Erst nach Klärung des Betriebs und realer Zugänglichkeitsprüfung beginnt der [Beteiligungs-Pilot](../../docs/participation-pilot.md).
