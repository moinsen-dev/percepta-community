# Claude Code — unabhängige Zweitanalyse

Status: **Erstbewertung abgeschlossen.** Andere Zweitanalysen (JCode, OMP) wurden vor Abschluss nicht gelesen.

## Laufdaten

- Datum: 2026-10-20.
- Tatsächlicher Harness: Claude Code, CLI-Version 2.1.304.
- Modell: Claude Opus 5.5 (`claude-opus-5-5`); genauer Build unbekannt.
- Ausgangs-Commit: `fe68acae4142baca25408124f85e353fb9786674` (`git rev-parse HEAD` im eigenen Worktree auf Branch `analysis/claude-code`). Der Tag `research-baseline-v0.1` zeigt lokal und auf `origin` auf diesen Commit. Er ist ein leichtgewichtiger Tag (`git cat-file -t` → `commit`), siehe [F-10](#f-10--baseline-tag-ist-nur-per-vereinbarung-unveränderlich).
- Gelesen: [AGENTS.md](../../AGENTS.md), [README](../../README.md), [state.md](../../state.md), [Auftrag](assignment.md), alle Dateien unter `docs/` (z. B. [Vision](../../docs/vision.md)) sowie die Codex-Dateien ([Analyse](../codex/analysis.md), [Bestandsaufnahme](../codex/legacy-review.md), [Validierung](../codex/validation.md), [Protokoll](../codex/Change-Log-Agents.md)). Die private Referenzkopie des Altprojekts wurde **nicht** gelesen; Aussagen dazu stützen sich nur auf Codex' Bericht.
- Keine Modelle aufgerufen, keine Nutzer- oder Screenreader-Tests, keine Website- oder App-Implementierung.

## Evidenzkennzeichnung

Wie in [docs/research.md](../../docs/research.md): **P** = in diesem Lauf gelesene Primärquelle (belegt nur die genannte Aussage), **H** = Hinweis/Sekundärquelle, vor Nutzung zu prüfen, **A** = eigene Annahme oder Vorschlag, **O** = offen / nicht zugänglich.

## Kurzfazit

1. Die Grundrichtung von Codex trägt: erst Bedarf, dann wenige vollständige Abläufe (D-11), Beobachtung und Bewegungsanweisung strikt trennen. Dem stimme ich zu.
2. **Die größten Lücken liegen nicht in der Technik, sondern im Teilnahmeweg.** Interviews zu Sehbehinderung enthalten fast zwangsläufig Gesundheitsdaten im Sinne der DSGVO; das ist in keinem Dokument adressiert ([F-01](#f-01--gesundheitsdaten-nach-art-9-dsgvo-sind-nicht-adressiert)). GitHub-Mechanik (öffentlicher Bearbeitungsverlauf, eingeschränktes Löschen) widerspricht Teilen des Korrektur- und Rücknahmeversprechens ([F-02](#f-02--github-bearbeitungsverlauf-und-löschen-passen-nicht-zum-rücknahmeversprechen)).
3. Der Interview-Prompt delegiert sicherheitsrelevante Schritte (Prüfung des Teilnahmewegs, Issue-Anlage) an eine fremde KI, deren Verhalten nicht prüfbar ist ([F-03](#f-03--der-prompt-überträgt-veröffentlichung-und-statusprüfung-an-eine-fremde-ki)). Für v0 sollte die KI nur den Entwurf erzeugen.
4. Der Anwendungsfall-Katalog ist trotz D-09 stark auf Navigation gewichtet ([F-05](#f-05--anwendungsfälle-nach-risikoklasse-statt-nach-bereich-ordnen)). Priorisierung besser nach Risikoklasse und Lücke zu bestehenden Hilfen.
5. **Kleinster nächster Schritt:** Prompt-Probe ohne echte Teilnehmende mit Screenreadern in mehreren Chat-Apps, plus Klärung der verantwortlichen Stelle; erst danach Website v0 — zunächst ohne eigenes Formular ([Abschnitt 6](#6-kleinster-sinnvoller-nächster-schritt)).

## Quellenregister dieses Laufs

Alle abgerufen am 2026-10-20.

| ID | Status | Quelle | Belegte Aussage / Grenze |
| --- | --- | --- | --- |
| C-01 | P | [Google: Gemini Robotics ER](https://ai.google.dev/gemini-api/docs/robotics-overview), Seitenstand 2026-10-06 | ER 2 Preview und ER 2 Streaming Preview (Stand Juli 2026); ER 1.6 am 2026-08-31 abgekündigt. Hinweis auf gelegentliche Halluzinationen und Latenzzunahme bei hoher Auflösung/Denktiefe. Datenschutzhinweis: erkennbare Personen in der Nähe sollen informiert sein und eingewilligt haben. Sicherheitsverantwortung liegt beim Betreiber. **Bestätigt R-02 aus der Codex-Recherche.** |
| C-02 | P | [Google: Robotics Streaming](https://ai.google.dev/gemini-api/docs/robotics-streaming), Seitenstand 2026-09-11 | Video auf 1 Bild/s begrenzt; Bilder allein lösen keine Antwort aus, es braucht einen Text- oder Audio-Prompt; Ausgabe nur Text; keine Latenzzahlen. **Bestätigt R-03.** |
| C-03 | P (Herstellerangabe des eigenen Modellanbieters) | [Anthropic: Claude Vision](https://platform.claude.com/docs/en/build-with-claude/vision) | Dokumentierte Grenzen: Halluzinationen bei unscharfen, gedrehten oder sehr kleinen Bildern; räumliche Angaben nur näherungsweise; Zählen ungenau; keine Personenidentifikation. Empfehlung menschlicher Kontrolle bei hohem Risiko. |
| C-04 | P | [Be My Eyes: Nutzungsbedingungen](https://www.bemyeyes.com/terms-of-service/), gültig ab 2026-02-12 | Be My AI nicht verwenden für Notfälle, Medikamentendosierung, Allergene oder als alleinige Entscheidungsgrundlage für potenziell schädliche Handlungen; „Do not use Be My Eyes to cross the street“; kein Ersatz für Langstock oder Führhund. **Hebt R-09 für diese Aussage auf P.** |
| C-05 | P (nur Abstract) | [Gurari et al., VizWiz Grand Challenge](https://arxiv.org/abs/1802.08218) | Über 31.000 Fragen mit Fotos, die blinde Menschen selbst aufgenommen haben; Bilder oft von schlechter Qualität, Fragen oft nicht beantwortbar. Keine Anteilszahl gelesen (PDF-Abruf scheiterte an der Größe). Forschungsstand von 2018, kein Maß heutiger Modelle. |
| C-06 | P | [GitHub: Änderungen an Kommentaren nachverfolgen](https://docs.github.com/en/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment) | Bearbeitungsverlauf ist für alle mit Lesezugriff sichtbar; Inhalte einzelner Revisionen können Autor oder Schreibberechtigte entfernen, Bearbeiter und Zeitpunkt bleiben sichtbar. Die Seite spricht von Kommentaren; ob Issue-Texte identisch behandelt werden, wurde hier nicht separat belegt (**O**, sehr wahrscheinlich gleich). |
| C-07 | P | [GitHub: Issue löschen](https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/deleting-an-issue) | In Organisations-Repos nur Admins/Owner, und nur wenn ein Organisations-Owner das Löschen freigeschaltet hat. Keine Benachrichtigung beim Löschen. |
| C-08 | P | [GitHub: Syntax für Issue-Formulare](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms) | Issue-Formulare mit Pflicht-Checkboxen möglich; Funktion als Public Preview gekennzeichnet; keine Aussagen zur Barrierefreiheit. |
| C-09 | P | [W3C: Neu in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) | Neue AA/A-Kriterien u. a. 2.4.11 Fokus nicht verdeckt, 2.5.8 Zielgröße, 3.2.6 Konsistente Hilfe, 3.3.7 Redundante Eingabe, 3.3.8 Barrierearme Authentifizierung; 4.1.1 entfernt. |
| C-10 | P | [Astro: Internationalisierung](https://docs.astro.build/en/guides/internationalization/) | Eingebautes i18n-Routing (`locales`, `defaultLocale`, `prefixDefaultLocale`, Fallback). `Astro.preferredLocale` nur mit On-Demand-Rendering; `Astro.currentLocale` auch statisch. |
| C-11 | H | [dsgvo-gesetz.de, Art. 9](https://dsgvo-gesetz.de/art-9-dsgvo/) (Sekundärquelle; EUR-Lex lieferte zweimal keinen Inhalt) | Art. 9 Abs. 1: Verarbeitung von Gesundheitsdaten grundsätzlich untersagt; Abs. 2 lit. a: ausdrückliche Einwilligung für festgelegte Zwecke; lit. e: von der Person offensichtlich öffentlich gemachte Daten. **Rechtlich zu prüfen, keine Rechtsauskunft.** |
| C-12 | H | [Microsoft: Seeing AI in fünf weiteren Sprachen](https://news.microsoft.com/source/features/work-life/bonjour-bienvenidos-seeing-ai-expands-to-5-new-languages/) | Deutsch wird unterstützt; heutiger Funktionsumfang auf Deutsch nicht aus aktueller Primärquelle bestätigt. |
| C-13 | O | Apple Lupe / Erkennungsmodus | Seite lieferte nur Navigation. R-07 bleibt H. |
| C-14 | O | Schreibzugriff externer Chat-Apps auf GitHub (z. B. ChatGPT-Connector) | Nur Drittanbieter-Aussagen gefunden. Ob verbreitete Chat-Apps Issues anlegen können, ist **unbelegt** — selbst ein Befund für [F-03](#f-03--der-prompt-überträgt-veröffentlichung-und-statusprüfung-an-eine-fremde-ki). |
| C-15 | O | GitHub-Benachrichtigungen | Ob Beobachter neuer Issues den Text per E-Mail erhalten, konnte nicht belegt werden (eine Docs-URL 404, die andere ohne Aussage). Falls ja, wären Korrekturen nach Veröffentlichung noch weniger rückholbar. |

## Befunde nach Auswirkung

### F-01 — Gesundheitsdaten nach Art. 9 DSGVO sind nicht adressiert

**Auswirkung: hoch** (blockiert den moderierten Weg, betrifft auch die Website).

- **Problem:** Eine Erfahrung als blinde oder sehbehinderte Person zu schildern, offenbart in der Regel Gesundheitsinformationen — auch ohne Diagnose. Die [Interview-Spezifikation](../../docs/interview-spec.md#betrieb-vor-aktivierung-klären) nennt Aufbewahrung und Moderation, aber weder Art. 9, ausdrückliche Einwilligung, Zweckbindung noch Widerruf. Die Formulierung „funktionale Angaben nur freiwillig“ reduziert, löst das Problem aber nicht: schon „ich als Blinde suche im Supermarkt…“ ist eine solche Angabe. **(A, gestützt auf C-11)**
- **Unterscheidung von drei Fällen (A, rechtlich zu prüfen):**
  1. *Issue über das eigene GitHub-Konto:* Die Person veröffentlicht selbst. Für die spätere Auswertung durch das Projekt kommt ggf. Art. 9 Abs. 2 lit. e in Betracht; ob ein Issue in einem fremden Repo „offensichtlich öffentlich gemacht“ ist, ist eine Rechtsfrage.
  2. *Moderierter Weg:* Das Projekt erhebt, speichert und veröffentlicht. Es ist verantwortliche Stelle für besondere Kategorien personenbezogener Daten; ausdrückliche, zweckgebundene, widerrufbare Einwilligung mit Information vor Absenden.
  3. *Spätere Website-Darstellung:* neuer Zweck, eigene Einwilligung — das sieht die Spezifikation bereits vor; Art. 9 macht es zusätzlich zur Pflicht statt Höflichkeit.
- **Empfehlung:** Vor Aktivierung des moderierten Wegs einen Einwilligungs- und Informationstext (Zweck, Empfänger, Speicherort, Löschfrist, Widerruf, Kontakt) als eigenes Dokument erarbeiten und fachlich prüfen lassen. Bis dahin auf der Website keinerlei Einreichung annehmen.
- **Alternative / Tradeoff:** Nur Zusammenfassungen ohne jeden Bezug zur Sehfähigkeit annehmen. Senkt das Risiko kaum (Kontext verrät es) und entwertet die Inhalte.
- **Nächster Test:** Rechtliche Prüfung durch eine qualifizierte Person; Ergebnis als Entscheidung in `state.md`. Nicht durch Agenten ersetzbar.

### F-02 — GitHub-Bearbeitungsverlauf und Löschen passen nicht zum Rücknahmeversprechen

**Auswirkung: hoch** (betrifft beide Veröffentlichungswege).

- **Problem:** Die Spezifikation sagt korrekt, dass fremde Kopien nicht zurückholbar sind. Sie übersieht, dass **GitHub selbst** frühere Fassungen zeigt: Der Bearbeitungsverlauf ist für alle mit Lesezugriff sichtbar, im öffentlichen Repo also für alle (C-06). Wird ein versehentlich stehengebliebener Ort nachträglich entfernt, bleibt er im Verlauf, bis Autor oder Schreibberechtigte die Revision löschen. Ein Issue löschen können in Organisations-Repos nur Admins, und nur wenn ein Owner das vorher freigeschaltet hat (C-07). Eine Person, die über ihr eigenes Konto veröffentlicht hat, kann ihr Issue also nicht selbst löschen. **(P)**
- **Empfehlung:**
  - Im Prompt und auf der Website ergänzen: „Spätere Korrekturen bleiben im Bearbeitungsverlauf sichtbar, bis sie entfernt werden. Löschen kann nur das Projekt.“
  - Moderations-Handbuch mit drei Abläufen: Revision entfernen, Issue löschen, Rücknahme bestätigen — mit Reaktionszeit.
  - Vor dem Start prüfen und dokumentieren, ob in `moinsen-dev` das Löschen von Issues freigeschaltet ist (**O**).
- **Alternative / Tradeoff:** GitHub Discussions oder ein eigener öffentlicher Bereich auf der Website. Discussions haben vergleichbare Mechanik (nicht geprüft, **O**); eigene Veröffentlichung verlagert die Kontrolle zum Projekt, kostet aber Betrieb.
- **Nächster Test:** In einem Wegwerf-Testrepo mit ausschließlich fiktivem Inhalt: Issue anlegen, bearbeiten, Verlauf ohne Anmeldung abrufen, Revision löschen, Issue löschen. Ergebnisse protokollieren.

### F-03 — Der Prompt überträgt Veröffentlichung und Statusprüfung an eine fremde KI

**Auswirkung: hoch** (Zustimmung ist das Kernversprechen).

- **Problem:** Schritt 1 der Prompts ([DE](../../docs/interview-prompt.de.md), [EN](../../docs/interview-prompt.en.md)) verlangt, dass die KI prüft, ob der Teilnahmeweg „tatsächlich aktiv“ ist. Ein Chat-Modell ohne verlässlichen Webzugriff kann das nicht feststellen und neigt eher dazu, eine plausible Antwort zu erfinden. Schritt 2 setzt eine GitHub-Schreibanbindung voraus, deren Existenz in verbreiteten Chat-Apps hier nicht belegt werden konnte (C-14). Die Schutzregeln (eindeutiges Ja, kein Doppel-Issue) sind gut formuliert, aber nicht durchsetzbar — das räumt der Prompt selbst ein. **(P für Prompttext, O für App-Fähigkeiten, A für Modellverhalten)**
- **Zusätzliche Lücke:** Die Prompts sagen nichts zu **Fotos**. Viele Chat-Apps erlauben Bild-Uploads; ein Foto aus dem Alltag kann Gesichter Dritter, Hausnummern oder Bildmetadaten enthalten. (A)
- **Empfehlung für v0:**
  - Die KI erzeugt **nur** die geprüfte Zusammenfassung und erklärt die nächsten Schritte. Keine Tool-Aufrufe zur Issue-Anlage.
  - Der Status des Teilnahmewegs steht als Datum im Prompt-Kopf und auf der Website („Stand: … — Einreichung noch nicht aktiv“), statt von der KI geprüft zu werden.
  - Veröffentlichung erfolgt durch die Person selbst über ein GitHub-Issue-Formular mit Pflicht-Checkbox zur Öffentlichkeit (C-08) oder über den moderierten Weg.
  - Regel ergänzen: „Bitte keine Fotos hochladen; wenn doch, beschreibe ich sie nicht in der Zusammenfassung.“
- **Alternative / Tradeoff:** Den Connector-Weg als optionale Variante behalten. Spart erfahrenen Nutzenden einen Schritt, bleibt aber unprüfbar und vervielfacht die Testmatrix (App × Connector × Sprache).
- **Nächster Test:** Teil der Prompt-Probe in [Abschnitt 6](#6-kleinster-sinnvoller-nächster-schritt): Antwortet die KI auf „Ist die Einreichung aktiv?“ wahrheitsgemäß mit „weiß ich nicht / laut Stand nein“?

### F-04 — Der Prompt ist für Screenreader-Nutzung lang, und der Nicht-KI-Weg ist unbestimmt

**Auswirkung: mittel bis hoch.**

- **Problem:** Der kopierbare Teil hat grob geschätzt 550 Wörter (Datei gesamt: 624 DE / 651 EN Wörter, gezählt mit `wc -w`). Er mischt Interviewführung, Datenschutzbelehrung und Veröffentlichungsprotokoll. Für die Person ist nur ein Teil davon relevant; die Belehrung wird beim Kopieren ungeprüft mitgegeben. Die [Website-Abnahme](../../docs/website-brief.md#spätere-abnahme) verlangt einen Weg ohne KI-Chat, beschreibt ihn aber nicht. Wie zugänglich die Eingabefelder und Antworten der jeweiligen Chat-Apps mit VoiceOver/NVDA sind, ist unbekannt. **(P für Länge, A für Wirkung, O für Chat-Apps)**
- **Empfehlung:** Den Prompt auf Interviewführung, Datensparsamkeit und Zusammenfassung kürzen (Ziel: deutlich unter 300 Wörter). Die Erklärungen zu Öffentlichkeit, Namensnennung und Website-Freigabe auf die Website und in das Issue-Formular verlagern, wo sie die Person selbst liest. Als Nicht-KI-Weg eine einfache Textvorlage mit denselben Feldern wie die [Zusammenfassung](../../docs/interview-spec.md#zusammenfassung-als-gemeinsame-schnittstelle) anbieten, plus — wenn betrieben — ein moderiertes Gespräch per Telefon oder Videoanruf.
- **Alternative / Tradeoff:** Langen Prompt beibehalten, weil er auch ohne Website-Kontext Schutz bietet. Dafür kostet er Bedienzeit und wird von Modellen womöglich unvollständig befolgt (A, im Test zu prüfen).
- **Nächster Test:** In der Prompt-Probe Zeit messen vom Öffnen der Seite bis zur ersten Interviewfrage, mit VoiceOver und mit NVDA; beide Prompt-Längen vergleichen.

### F-05 — Anwendungsfälle nach Risikoklasse statt nach Bereich ordnen

**Auswirkung: mittel** (steuert die D-11-Priorisierung).

- **Problem:** Zehn der 15 Anwendungsfälle in der [Vision](../../docs/vision.md#zu-untersuchende-anwendungsfälle) betreffen Orientierung/Navigation (UC-01 bis UC-10); Einkaufen, Fragen und Interaktion teilen sich vier, dazu kommt die Bedienung (UC-11). Das widerspricht der Gleichrangigkeit aus D-09 und lenkt Interviewbeispiele. Gleichzeitig ist „Einkaufen“ nicht durchgehend risikoarm: Be My Eyes schließt Allergene und Medikamentendosierung ausdrücklich aus (C-04). **(P)**
- **Empfehlung (A):** Vor der Priorisierung jedem Fall eine Risikoklasse geben:

  | Klasse | Merkmal | Beispiele aus dem Katalog |
  | --- | --- | --- |
  | R0 | Information, Fehler leicht bemerkbar und umkehrbar | Schild/Text lesen, Szene beschreiben (UC-13), Bitte formulieren (UC-14) |
  | R1 | Information mit möglichem Folgeschaden | Preis, Haltbarkeit, Allergene, Medikamente (Teil von UC-12) |
  | R2 | Raumbezug im Stand, keine Bewegungsanweisung | Eingang/Tür finden (UC-04), Sitzplatz einschätzen (UC-10) |
  | R3 | Bewegung, zeitkritisch | Hindernisse beim Gehen, Treppen/Bordsteine, Ampeln, Einstieg (UC-01–03, 07–09) |

  Die ersten vollständigen Abläufe aus R0/R1 ziehen, mit ausdrücklicher Behandlung von „nicht lesbar / nicht sicher“. R3 vorerst nur als Beobachtungsstudie ohne Anweisung. Das ist ein Ordnungsvorschlag für das Gespräch mit Betroffenen, **keine Funktionsauswahl**.
- **Alternative / Tradeoff:** Priorisierung allein nach Häufigkeit in Interviews. Methodisch sauberer, aber bei wenigen Interviews nicht belastbar und blind für Schadenspotenzial.
- **Nächster Test:** Risikoklasse in der Koordinator-Synthese mit den anderen Analysen abgleichen; später in Interviews fragen, ob die Einordnung aus Sicht der Betroffenen stimmt.

### F-06 — Lücke zu bestehenden Hilfen ist kein ausdrückliches Ziel

**Auswirkung: mittel.**

- **Problem:** Viele R0-Aufgaben decken kostenlose Apps bereits ab (Be My Eyes/Be My AI, Seeing AI, Apple Lupe, Google Lookout; nur teils als P geprüft, C-04, C-12, C-13). Die [Vision](../../docs/vision.md#erfolg-und-grenzen) nennt den Vergleich mit vorhandenen Apps als Messgröße, aber nicht als Auswahlkriterium für Abläufe. Ohne klare Lücke riskiert Percepta, Vorhandenes nachzubauen. **(A)**
- **Empfehlung:** In der Interviewführung nachfragen: „Welche App oder Hilfe nutzt du dafür, und an welcher Stelle reicht sie nicht?“ (heute nur implizit in „Was hilft dir heute?“). In jedem späteren Ablauftest die meistgenannte vorhandene App als Vergleich mitlaufen lassen.
- **Nächster Test:** Prompt-Probe: Erfasst die Zusammenfassung die genutzte App und den konkreten Abbruchpunkt?

### F-07 — Machbarkeit hängt zuerst an Bildaufnahme und berechtigtem Nichtantworten

**Auswirkung: mittel** (lenkt spätere Experimente).

- **Problem:** Die Codex-Recherche fragt vor allem, welche Modellklasse geeignet ist. Für R0/R1 ist die Erkennungsleistung aktueller VLMs auf guten Bildern wahrscheinlich nicht der Engpass (A). Engpässe sind (a) ob blinde Nutzende das relevante Objekt überhaupt ins Bild bekommen — VizWiz zeigt, dass selbst aufgenommene Bilder oft schlecht und Fragen oft unbeantwortbar sind (C-05) — und (b) ob das System dann ehrlich „nicht lesbar“ sagt statt zu raten. Hersteller dokumentieren Halluzinationen gerade bei schlechten, gedrehten oder kleinen Bildern (C-03) und nennen räumliche Angaben nur näherungsweise. **(P für Herstellerangaben, A für Gewichtung)**
- **Zu räumlichem Reasoning:** ER 2 ist Preview, streamt mit 1 Bild/s, liefert nur Text und braucht einen Auslöser (C-01, C-02). Das ist eine dokumentierte Fähigkeit für Robotik, keine Warnkette für einen gehenden Menschen. Die Kette Bild → Modell → Text → Sprachausgabe → Reaktion ist unvermessen. Codex' Vorsicht ist damit bestätigt, nicht widerlegt.
- **Empfehlung:** Für den ersten Ablauftest pro Aufgabe messen: Anteil korrekt gelesener Angaben, Anteil **falscher** Angaben bei unlesbarem Bild (Zielwert nahe null), Anteil berechtigter „nicht lesbar“-Antworten mit hilfreicher Anleitung zum Nachfassen, Zeit bis zur hörbaren Antwort, Zahl der Aufnahmeversuche. Gegenproben: OCR-Baseline, eine bestehende App, absichtlich abgeschnittene oder verspiegelte Etiketten.
- **Alternative / Tradeoff:** Direkt ein Modell-Benchmark auf kuratierten Bildern. Billiger, misst aber das Falsche, weil die Bildaufnahme durch Betroffene fehlt.
- **Nächster Test:** Testplan für einen R0/R1-Ablauf mit festgelegten Schwellen, bevor ein Modell gewählt wird.

### F-08 — Interaktion mit Menschen: Kamera betrifft Dritte

**Auswirkung: mittel.**

- **Problem:** Sobald eine Kamera in Begegnungen läuft, sind Umstehende betroffen. Selbst Google verlangt für ER, dass erkennbare Personen informiert sind und einwilligen (C-01); Claude identifiziert grundsätzlich keine Personen (C-03). Für UC-14/UC-15 ist offen, ob Betroffene überhaupt Kamerahilfe wollen oder eher Vorbereitung (Ablauf an der Kasse kennen, Bitte formulieren). **(P für Herstellerhinweise, A für Bedarf)**
- **Empfehlung:** Für diesen Bereich zuerst kamerafreie Unterstützung prüfen (Text/Sprache). Falls Kamera: nur auf ausdrückliche Auslösung, keine Speicherung, keine Gesichtsbeschreibung als Standard.
- **Nächster Test:** Interviewfrage „Wie soll eine Hilfe in einem Gespräch mit anderen *nicht* auffallen?“ in die Probe aufnehmen.

### F-09 — Architektur: Website v0 ohne eigenes Backend

**Auswirkung: mittel.**

- **Problem:** Codex empfiehlt eine Astro-Seite mit separat definiertem serverseitigem Einreichungsweg. Ein eigener Dienst bedeutet Speicherung von Gesundheitsdaten ([F-01](#f-01--gesundheitsdaten-nach-art-9-dsgvo-sind-nicht-adressiert)), Missbrauchsschutz ohne bildbasiertes CAPTCHA, Betrieb und Löschfristen — alles noch offen.
- **Empfehlung (A):**
  - **Website v0:** statisches Astro mit eingebautem i18n-Routing (`/de/`, `/en/`, `prefixDefaultLocale: true`), `/` als statische Sprachwahl ohne automatische Weiterleitung — `preferredLocale` würde On-Demand-Rendering erfordern (C-10). Inhalte: Stand, vier Bereiche, gekürzter Prompt als Text, Textvorlage, Hinweis „Einreichung noch nicht aktiv“, Kontaktweg. Kopierknopf nur als Verbesserung.
  - **Moderierter Weg, erste Stufe:** ein Projektpostfach mit eingeschränktem Zugriff und manueller Veröffentlichung über ein Projektkonto. E-Mail ist für viele Screenreader-Nutzende vertraut, braucht keinen Code und keine Datenbank. Erst wenn Volumen und Moderation es rechtfertigen, ein Formular mit serverseitigem Dienst.
  - **Spätere Experimente:** getrennt von der Website (eigenes Repo/Verzeichnis), nur mit eingewilligten Testbildern, Diagnostik ohne Gesprächs- oder Bildinhalte — das bestätigt Codex' Befund L-06 zum Altprojekt.
- **Alternative / Tradeoff:** Formular plus Serverdienst sofort. Barrierearm planbar und ohne E-Mail-Programm nutzbar, aber mehr Betrieb und Datenschutzpflichten, bevor ein einziger Bedarf erhoben ist.
- **Offene Betriebsentscheidungen:** verantwortliche Stelle und Anbieterkennzeichnung, Postfachzugriff, Löschfrist, Hosting (z. B. ein statischer Hoster, den der Projektverantwortliche bereits nutzt — keine Entscheidung), Lizenz für Dokumentation und Beiträge.
- **Nächster Test:** Nach Bau: automatisierte Prüfung plus Tastatur-, VoiceOver- und NVDA-Durchlauf gegen die WCAG-2.2-Kriterien aus C-09, insbesondere 2.4.11, 2.5.8, 3.2.6 (Hilfe an gleicher Stelle) und 3.3.7.

### F-10 — Baseline-Tag ist nur per Vereinbarung unveränderlich

**Auswirkung: niedrig.**

- **Problem:** `research-baseline-v0.1` ist ein leichtgewichtiger Tag. Er trägt weder Autor noch Datum oder Signatur und kann mit Schreibrechten überschrieben werden. **(P, lokal geprüft)**
- **Empfehlung:** Für künftige Baselines annotierte (ggf. signierte) Tags und ein Tag-Ruleset auf GitHub. Den bestehenden Tag nicht ändern.
- **Nächster Test:** Koordinator prüft bei Integration, dass `origin` weiterhin `fe68aca…` liefert.

### F-11 — Rechtliche Pflichttexte der Website

**Auswirkung: niedrig bis mittel.**

- **Problem:** Der [Website-Brief](../../docs/website-brief.md#inhalte-und-sprachen) nennt Informationen zu Betreiber, Datenverarbeitung und Barrierefreiheit vor dem Start. Welche Pflichten für eine nicht kommerzielle Projektseite in Deutschland gelten (Anbieterkennzeichnung, Datenschutzerklärung, ob das Barrierefreiheitsstärkungsgesetz greift), wurde hier nicht geprüft. **(O)**
- **Empfehlung:** Mit F-01 zusammen klären; keine Agenten-Rechtsauskunft übernehmen.

## Bewertung der sechs Auftragsthemen

### 1. Technische Machbarkeit

- R0-Aufgaben (Text lesen, Szene beschreiben, Bitte formulieren) sind mit heutigen allgemeinen VLMs und vorhandenen Apps grundsätzlich lösbar (A). Offen ist die **Zuverlässigkeit unter echten Aufnahmebedingungen** und ehrliches Nichtantworten ([F-07](#f-07--machbarkeit-hängt-zuerst-an-bildaufnahme-und-berechtigtem-nichtantworten)).
- R1 (Preis, Haltbarkeit, Allergene) braucht strengere Nachweise; selbst ein etablierter Anbieter schließt Allergene und Dosierungen aus (C-04).
- R2 ist ein sinnvolles Forschungsfeld zwischen beiden Welten: Raumbezug ohne Bewegungsanweisung.
- R3 ist mit dokumentierten Modellfähigkeiten nicht belegbar (C-01, C-02). Die in [research.md](../../docs/research.md#vergleichsexperiment-für-eine-spätere-phase) skizzierten Messgrößen sind richtig; ergänzen würde ich eine explizite Latenzkette von der Aufnahme bis zur Reaktion der Person.
- Gegenproben: OCR-Baseline, bestehende App, absichtlich schlechte Bilder, wiederholte Läufe gegen Modellschwankung.

### 2. Nutzerbedürfnisse und Priorisierung

- Die Codex-Grundlage trennt Annahmen und Belege sauber; die Quelle ist eine einzelne Anfrage plus eine frühere Interview-Zusammenfassung. Das ist ein Ausgangspunkt, keine Priorität.
- Ungesicherte Annahmen mit hohem Einfluss: dass die Smartphone-Kamera das richtige Medium ist; dass Betroffene KI-Chats nutzen wollen; dass GitHub für die Zielgruppe ein akzeptabler Ort ist. Letzteres halte ich für die riskanteste Annahme: Ein Issue setzt ein Konto und Vertrautheit mit GitHub voraus. Der moderierte Weg dürfte für die Zielgruppe der **Hauptweg** sein, nicht der zusätzliche (A, zu prüfen).
- Priorisierung: Risikoklasse ([F-05](#f-05--anwendungsfälle-nach-risikoklasse-statt-nach-bereich-ordnen)) × Lücke zu bestehenden Hilfen ([F-06](#f-06--lücke-zu-bestehenden-hilfen-ist-kein-ausdrückliches-ziel)) × Häufigkeit und Belastung laut Interviews. Keine Gruppenpräferenz aus wenigen Gesprächen ableiten; Unterschiede zwischen geburtsblinden, später erblindeten und sehbehinderten Menschen getrennt notieren.

### 3. Barrierefreiheit

- Der [Website-Brief](../../docs/website-brief.md#barrierefreiheit-als-abnahmekriterium) ist solide: semantisches HTML, kein JavaScript-Zwang, keine bildbasierten CAPTCHAs, VoiceOver und NVDA. Ergänzen: WCAG-2.2-Neuerungen namentlich in die Abnahme (C-09), insbesondere 3.2.6 Konsistente Hilfe (Kontaktweg an gleicher Stelle) und 3.3.8, falls je eine Anmeldung entsteht.
- Interviewweg: Prompt kürzen, Belehrung auf die Website verlagern, Nicht-KI-Vorlage ([F-04](#f-04--der-prompt-ist-für-screenreader-nutzung-lang-und-der-nicht-ki-weg-ist-unbestimmt)). Die Barrierefreiheit von GitHubs eigener Oberfläche und fremder Chat-Apps liegt außerhalb der Projektkontrolle und muss getestet statt angenommen werden.
- Sprachmodi von Chat-Apps können für viele Betroffene der natürlichere Weg sein; ob sie Regeln wie „eine Frage je Schritt“ einhalten, ist offen (O).

### 4. Architektur

Siehe [F-09](#f-09--architektur-website-v0-ohne-eigenes-backend). Kurz: statische Seite, Postfach mit manueller Moderation, Experimente getrennt. Keine Datenbank, kein Login, keine Analytics — in Übereinstimmung mit dem Brief.

### 5. Veröffentlichung, Konto-Sichtbarkeit, Freigabe, Ausfallfälle

- Gut gelöst in der Grundlage: getrennte Zustimmungen (Issue, Name, Website), Standard ohne Name, keine Anonymitätsversprechen, kein Erfolg ohne Link, keine Rohtranskripte.
- Zu ergänzen: Art. 9 ([F-01](#f-01--gesundheitsdaten-nach-art-9-dsgvo-sind-nicht-adressiert)), Bearbeitungsverlauf und Löschrechte ([F-02](#f-02--github-bearbeitungsverlauf-und-löschen-passen-nicht-zum-rücknahmeversprechen)), Fotos ([F-03](#f-03--der-prompt-überträgt-veröffentlichung-und-statusprüfung-an-eine-fremde-ki)).
- Zusätzlich vorgeschlagene Fälle für die Szenariotabelle der [Spezifikation](../../docs/interview-spec.md#zu-prüfende-szenarien):

  | Fall | Erwartetes Verhalten |
  | --- | --- |
  | Person fragt die KI, ob die Einreichung aktiv ist | Verweis auf Stand-Datum im Prompt; keine eigene Behauptung |
  | Person lädt ein Foto hoch | Hinweis, dass kein Foto nötig ist; Fotoinhalt nicht in die Zusammenfassung |
  | Person möchte nach Veröffentlichung etwas entfernen | Hinweis auf Bearbeitungsverlauf; Weg zur Rücknahme über das Projekt |
  | Chat bricht mitten im Interview ab | Neuanfang möglich; nichts wurde übermittelt |
  | Person nennt eine Diagnose von sich aus | Nicht in die Zusammenfassung, außer ausdrücklich gewünscht und funktional nötig |

### 6. Kleinster sinnvoller nächster Schritt

**Vorschlag A — Prompt-Probe ohne Teilnehmende** (vor dem Website-Bau; widerspricht weder D-02 noch D-05):

1. Prompts nach [F-03](#f-03--der-prompt-überträgt-veröffentlichung-und-statusprüfung-an-eine-fremde-ki) und [F-04](#f-04--der-prompt-ist-für-screenreader-nutzung-lang-und-der-nicht-ki-weg-ist-unbestimmt) überarbeiten (Koordinator-Aufgabe, gemeinsame Datei).
2. Projektverantwortlicher spielt beide Sprachfassungen mit **fiktiven** Personas in mindestens zwei verbreiteten Chat-Apps durch, mindestens einmal mit VoiceOver und einmal mit NVDA. Kein GitHub-Connector, keine Veröffentlichung, keine echten Personendaten.
3. Bewertung gegen alle Szenarien der Spezifikation plus die fünf neuen oben.

**Abnahmekriterien (Schwellen sind Vorschläge, A):**

- Jede Kombination (Sprache × App) durchläuft jedes Szenario; Ergebnis je Szenario als erfüllt/nicht erfüllt mit kurzer Begründung protokolliert.
- Null Fälle, in denen die KI eine Veröffentlichung oder einen aktiven Teilnahmeweg behauptet.
- Null Fälle, in denen ein versehentlich genannter Name, Ort oder eine Kontaktangabe in der finalen Zusammenfassung verbleibt.
- In mindestens 90 % der Interviewschritte genau eine Frage.
- Zusammenfassung enthält genutzte Hilfe und Abbruchpunkt ([F-06](#f-06--lücke-zu-bestehenden-hilfen-ist-kein-ausdrückliches-ziel)), sofern genannt.
- Zeit vom Öffnen des Prompts bis zur ersten Frage mit Screenreader gemessen und notiert (noch ohne Schwelle).
- Abweichungen führen zu einer Prompt-Änderung und einem erneuten Durchlauf der betroffenen Szenarien.

**Vorschlag B — parallel, nur Entscheidungen:** verantwortliche Stelle, Kontaktpostfach, Art.-9-Einwilligungstext prüfen lassen, Issue-Löschung in der Organisation klären, Testrepo-Prüfung aus [F-02](#f-02--github-bearbeitungsverlauf-und-löschen-passen-nicht-zum-rücknahmeversprechen).

**Danach:** Website v0 wie in [F-09](#f-09--architektur-website-v0-ohne-eigenes-backend), anschließend wenige moderierte Gespräche mit Betroffenen, die der Projektverantwortliche selbst anfragt, zur Priorisierung der ersten Abläufe nach D-11.

## Zustimmung und Widerspruch zur Codex-Grundlage

| Codex-Aussage | Bewertung | Begründung |
| --- | --- | --- |
| Bedarf vor App, wenige vollständige Abläufe (D-11) | Zustimmung | Deckt sich mit den Grenzen in C-01–C-05 und den offenen Altprojekt-Abnahmen. |
| Beobachtung, Messung, Interpretation, Anweisung trennen | Zustimmung | Herstellerangaben selbst nennen räumliche Angaben näherungsweise (C-03) und Robotik-Sicherheit beim Betreiber (C-01). |
| R-02/R-03 zu ER 2, 1 Bild/s, Textausgabe | Bestätigt | C-01, C-02 neu abgerufen; ER 1.6 inzwischen abgekündigt. |
| „Größtes unmittelbar lösbares Risiko ist versehentliche öffentliche Preisgabe“ | Zustimmung, aber unvollständig | Es fehlen Art. 9 und der öffentliche GitHub-Bearbeitungsverlauf ([F-01](#f-01--gesundheitsdaten-nach-art-9-dsgvo-sind-nicht-adressiert), [F-02](#f-02--github-bearbeitungsverlauf-und-löschen-passen-nicht-zum-rücknahmeversprechen)). |
| Direkter Weg aus einer KI mit GitHub-Anbindung als gleichwertiger Pfad | **Widerspruch** | Fähigkeit der Apps unbelegt (C-14), Statusprüfung durch die KI unzuverlässig; für v0 streichen ([F-03](#f-03--der-prompt-überträgt-veröffentlichung-und-statusprüfung-an-eine-fremde-ki)). |
| Moderierter Weg „zusätzlich“ (D-07) | **Teilweiser Widerspruch** | Für die Zielgruppe vermutlich Hauptweg (A). D-07 bleibt gültig; nur die Gewichtung ändert sich. |
| Kleine Astro-Seite mit serverseitigem Einreichungsweg | **Widerspruch in der Reihenfolge** | v0 ohne Server, erste Moderation per Postfach ([F-09](#f-09--architektur-website-v0-ohne-eigenes-backend)). |
| Anwendungsfall-Katalog UC-01–UC-15 | **Widerspruch in der Gewichtung** | 10 von 15 Fällen Navigation; Risikoklassen vorschlagen ([F-05](#f-05--anwendungsfälle-nach-risikoklasse-statt-nach-bereich-ordnen)). |
| Nächster Schritt: Synthese, dann Website bauen | Ergänzung | Prompt-Probe vor dem Bau, weil der Prompt das Herzstück der Teilnahmeseite ist. |
| Hybrid aus lokaler Wahrnehmung und Reasoning-Modell | Neutral | Plausibel für R3, für R0/R1 aber nicht nötig; dort zählt der Vergleich mit OCR und vorhandenen Apps — das sagt Codex in [research.md](../../docs/research.md#offene-rechercheaufträge) ebenfalls. |

## Vorschläge für gemeinsame Dateien (nicht umgesetzt)

Nur der Koordinator ändert diese Dateien. Vorschläge:

- `docs/interview-prompt.*.md`: kürzen; Schritte 1 und 2 der Veröffentlichung durch Stand-Datum und Selbstveröffentlichung ersetzen; Foto-Regel; Satz zum Bearbeitungsverlauf.
- `docs/interview-spec.md`: Abschnitt zu Gesundheitsdaten und Einwilligung; fünf zusätzliche Szenarien; Moderations-Handbuch als offener Punkt.
- `docs/vision.md`: Risikoklasse je Anwendungsfall; Hinweis auf Navigationsübergewicht.
- `docs/website-brief.md`: v0 ohne Formular; Nicht-KI-Textvorlage; WCAG-2.2-Kriterien namentlich.
- `docs/research.md`: C-01, C-02, C-04 als P mit Abrufdatum übernehmen; R-07 bleibt H.
- `state.md`: Claude-Code-Analyse als „abgeschlossen, Integration ausstehend“; künftige Tags annotiert.

## Offene Punkte und Grenzen dieser Analyse

- Keine Rechtsauskunft. DSGVO-Text nur über Sekundärquelle (C-11).
- Nicht geprüft: Apple Lupe, Google Lookout, aktuelle Seeing-AI-Funktionen auf Deutsch, Chat-App-Connectors, GitHub-E-Mail-Inhalte, Barrierefreiheit von GitHub-Issue-Formularen, Discussions-Mechanik, Organisationseinstellung zur Issue-Löschung.
- Keine Modellmessung, kein Prompt in einer fremden Chat-App ausgeführt, keine Screenreader-Tests.
- Altprojekt nur über Codex' Bericht bewertet.
- Diese Analyse stammt von einem Claude-Modell; das Claude-Vision-Dokument (C-03) ist eine Herstellerangabe desselben Anbieters und wurde nur für dokumentierte Grenzen herangezogen, nicht als Leistungsnachweis.
