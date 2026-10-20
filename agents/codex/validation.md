# Codex — Validierung der Dokumentationslieferung

Stand: 2026-10-20, einschließlich der Erweiterung um Einkaufen, Fragenstellen und menschliche Interaktion sowie der statischen Altprojekt-Analyse. Lokale Dokumentationsprüfungen abgeschlossen; erster Commit öffentlich veröffentlicht und remote bestätigt.

## Strukturelle Prüfung

- Relative Markdown-Dateilinks: nach Umfangserweiterung zunächst 24 Markdown-Dateien und 87 relative Dateiverweise mit Python geprüft; alle Ziele vorhanden. Nach der Altprojekt-Analyse erneut 24 Markdown-Dateien mit jetzt 94 relativen Dateiverweisen geprüft; alle Ziele vorhanden. Keine externen URLs oder Überschriftenanker durch diesen Check geprüft. Private Referenzkopie und erzeugte Verzeichnisse bleiben ausgeschlossen.
- Vollständigkeit der vier Harness-Ordner: jeweils `assignment.md`, `analysis.md` und `Change-Log-Agents.md` vorhanden.
- Whitespace-/Diff-Prüfung: nach Umfangserweiterung 25 Dateien mit `git diff --no-index --check` gegen `/dev/null` sowie auf nachgestellte Leerzeichen und finalen Zeilenumbruch geprüft; keine Befunde. Beim ersten Prüfskript wurde Exitcode 1 irrtümlich als Fehler behandelt; korrigiert, da er hier einen Dateiunterschied anzeigt.
- Personenbezogene Originalnachrichten: redaktionell geprüft; keine Original-E-Mail oder alten Nutzerinnenbeiträge übernommen. Ergänzender Suchlauf auf bekannte persönliche Angaben aus dem Gespräch ohne Treffer. Keine Anhänge oder Zugangsdaten hinzugefügt.
- Konsistente Statusangaben: geprüft; Website, Backend und App nur spezifiziert, drei Fremd-Harness-Analysen ausdrücklich nicht gestartet.
- Nach manueller Einrichtung geprüft: `origin` zeigt auf das richtige Ziel. Der Connector bestätigt `moinsen-dev/percepta-community` als öffentlich und mit Schreibberechtigungen. Der erste Commit `ee24e5623502f911807ea1ba257f938ef78362b4` wurde erfolgreich gepusht und anschließend remote gelesen. Default-Branch ist `main`.
- Veröffentlichungsumfang: genau 25 Dokumentationsdateien gestaged; 96 relative Dateilinks und gezielter Suchlauf auf bekannte persönliche Angaben ohne Befund. `git diff --cached --check` erfolgreich. `git check-ignore` bestätigt den Ausschluss von `private/`, `.env` und `.env.local`.
- Die Abschlussprüfung vergleicht lokale und veröffentlichte Commit-/Tag-Referenzen sowie den veröffentlichten Dateibaum. Ihr Ergebnis wird nach dem unveränderlichen Baseline-Tag protokolliert; spätere Statusprotokolle auf `main` verschieben diesen Tag nicht.

## Redaktionelle Interview-Szenarien

Diese Prüfung erfolgt durch Lesen und Durchspielen der Regeln, nicht durch Ausführung einer fremden KI-Anwendung. Keine Tests mit Betroffenen behauptet.

| Szenario | Zu prüfendes Ergebnis | Status |
| --- | --- | --- |
| Deutsches Interview | Genau eine Frage; überspringen, pausieren, abschließen möglich | Im DE-Prompt ausdrücklich enthalten |
| Englisches Interview | Gleiche Entscheidungen und Schutzregeln | Mit DE-Fassung inhaltlich abgeglichen |
| Keine GitHub-Anbindung | Entwurf zum Kopieren; kein erfundener Issue-Link | Beide Prompts, Schritte 4 und 6 |
| Veröffentlichung abgelehnt | Keine Übermittlung an Percepta | Beide Prompts, Schritt 3 |
| Name/Adresse unabsichtlich genannt | Vor Vorschau entfernen/verallgemeinern | Zusammenfassungsregeln beider Prompts |
| Öffentliche Namensnennung gewünscht | Separate Entscheidung und neue Vorschau | Eigener Absatz vor Veröffentlichungsschritten |
| Eigener GitHub-Account | Sichtbarer Autor wird erklärt | Öffentlichkeitshinweis und Schritt 2 |
| Moderierter Weg nicht aktiv | Kein erfundener Formularlink | Beide Prompts, Schritte 1 und 4 |
| Inhalt nach Vorschau verändert | Neue Freigabe erforderlich | Zustimmung zum exakten Text; Spezifikation fordert erneute Freigabe bei Moderationsänderung |
| Website-Geschichte | Issue-Freigabe reicht nicht aus | Schlussregel beider Prompts; getrennte Freigabe in Spezifikation |
| Einkaufsproblem ohne Wegsuche | Produkt-/Informationsbedarf genügt als Thema | Beide Prompts erlauben eine Situation ohne Navigationsproblem |
| Frage an App oder Menschen | Bedeutung offen klären | Beide Prompts enthalten diese Unterscheidung als Rückfrage bei Unklarheit |
| Gespräch an einem Serviceschalter | Unterstützungsbedarf erfassen, keine Kontakte oder Aufnahmen auslösen | Offene Situationsfrage und ausdrückliche Begrenzung beider Prompts |

Konkrete Durchspielbeispiele: „überspringen“ führt zur nächsten freiwilligen Frage; „abschließen“ beendet die Erhebung; „nur für mich“ führt zu keiner Übermittlung; ein versehentlich genannter genauer Wohnort wird verallgemeinert; ein ausdrücklich gewünschter öffentlicher Name wird erst nach neuer Vorschau freigegeben. Diese Ergebnisse beschreiben den geprüften Sollablauf, keine beobachtete Modell-Ausführung.

Ergänzende Beispiele nach Umfangserweiterung: „Ich kann zwei Packungen nicht unterscheiden“ wird als Einkaufsproblem erfasst; „Ich möchte wissen, was auf dem Schild steht“ als Frage an die App; „Ich möchte am Schalter gezielt um Hilfe bitten“ als Kommunikationsbedarf. Keiner dieser Fälle wird künstlich in eine Wegsuche umgedeutet. Die DE/EN-Fassungen und alle vier Harness-Aufträge wurden redaktionell auf diesen Umfang abgeglichen.

## Frühere Codebasis

Nach den früheren Zugriffsfehlern stellte der Projektverantwortliche eine lokale Kopie unter `private/legacy-percepta/` bereit. Die statische Bestandsaufnahme in `agents/codex/legacy-review.md` ersetzt den bisherigen blockierten Analyseauftrag.

- Remote-Tracking-Referenzen nach Commitdatum gelesen: `origin/codex/reboot-0.2-week1` ist der jüngste enthaltene Stand, Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5`.
- Vergleich mit Default-Branch `origin/develop`: fünf Commits voraus, keine Divergenz. Keine Aktualität gegenüber dem heutigen Remote behauptet.
- Untersuchten Stand direkt über Git gelesen. Normalen Einstieg und exemplarische Datenflüsse mit Code abgeglichen; Fundstellen im Bericht mit Commit und Zeilenangaben versehen.
- Lokale DOCX-Interview-Zusammenfassung mit `textutil` als Text gelesen; gleicher Git-Blob in ausgechecktem und untersuchtem Commit bestätigt. Keine Originaltexte, Namen oder Diagnosen in die Dokumentation kopiert.
- Bericht auf die Unterscheidung zwischen angebundenen Pfaden, zusätzlichen Modulen, historischen Testmeldungen und eigenen Schlussfolgerungen geprüft.
- Relative Dokumentlinks, 26 angegebene Quellpfade/Zeilenbereiche am festgehaltenen Commit sowie Whitespace und bekannte persönliche Angaben in den 25 Dokumentationsdateien erneut geprüft; keine Befunde.
- Arbeitsbaum der Referenzkopie vor und nach der Analyse sauber auf `develop`; keine alten Dateien verändert und keine Skripte ausgeführt.
- Keine Abhängigkeiten installiert, Modelle abgefragt, Builds oder Tests des Altprojekts ausgeführt. Frühere PASS-/BLOCKED-Angaben stammen aus dessen Dokumenten.

Die README-Prüfanleitung schließt jetzt `private/` und erzeugte Verzeichnisse vor dem Durchsuchen aus. Damit werden die alte Codebasis und persönliche Quellen nicht versehentlich wie neue öffentliche Projektdateien geprüft.

## Grenzen

Keine neue Website oder App implementiert: keine entsprechenden Browser-, Accessibility- oder App-Build-Tests ausgeführt. Die alte App wurde ausschließlich statisch gelesen. Keine Modelle ausgeführt. Quellenzugriffe belegen Dokumentation und Code, keine reale Funktionsleistung.
