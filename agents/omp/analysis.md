# OMP / Oh My Pi — unabhängige Zweitanalyse

## Laufdaten

| Feld | Wert |
| --- | --- |
| Datum | 2026-10-20 |
| Tatsächlicher Harness | OMP (Oh My Pi) |
| Modell / Version | `deepseek/deepseek-v4-pro` (laut Laufzeitumgebung); genaue Build-/Versionsnummer nicht separat ermittelbar und ausdrücklich unbekannt |
| Ausgangs-Commit | `fe68acae4142baca25408124f85e353fb9786674` (= Tag `research-baseline-v0.1`, lokal und auf `origin` identisch) |
| Branch / Worktree | `analysis/omp` in `.worktrees/omp`, Arbeitsbaum beim Start sauber |
| Gelesene Fremdanalysen | Nur Codex (Erstanalyse, Validierung, Altprojekt-Bestandsaufnahme). Claude Code und JCode **nicht** gelesen (Baseline-Stand der Vorlagen), wie beauftragt. |

## Ergebnis in Kürze

Ich bestätige die Kernrichtung der Grundlage (D-02, D-11: Dokumentation → zugängliche Beteiligungsseite → Bedarfserhebung → erst dann eingegrenzte App-Experimente; keine vorzeitige Plattform-/Modellwahl). Die Evidenz legt jedoch eine **ausdrückliche Zweistufigkeit** nahe, die in der Codex-Grundlage nur angedeutet ist: Text-/Objektfragen, Szenenbeschreibung und Formulierungshilfe sind mit heutigen Modellen praktisch nutzbar und sollten zuerst geprüft werden; **Navigation/Mobilität ist ein sicherheitskritischer, separat gesperrter Forschungspfad**, für den die dokumentierten Modellgrenzen (1 Bild/s, reine Textausgabe, kein validierter Fußgänger-Nachweis) gegen den Einsatz im Gehen sprechen.

Zwei neue, hier recherchierte Primärbefunde verstärken diese Aufteilung:

1. **Betroffene bevorzugen für räumliche Handlungsanweisungen deterministische Ausgabe vor generativer Beschreibung.** In einer kontrollierten Studie mit 13 blinden/sehbehinderten Teilnehmenden bevorzugten alle die Deep-Learning-Variante gegenüber der generativen KI-Variante für das „Objekt finden“ (niedrigere Belastung, präziser, höhere Erfolgsquote als Trend; [S-05](#quellen)). Das widerlegt die Annahme, eloquente VLM-Antworten seien für räumliche Anweisungen automatisch besser, und begründet eine eigene Vergleichsachse für spätere Experimente.
2. **Der EU-Rechtsstand ist WCAG 2.1 AA, nicht WCAG 2.2.** EN 301 549 V4.1.1 (2026-09) übernimmt WCAG 2.2, ist aber noch nicht im Amtsblatt zitiert; verbindliche Referenz bleibt EN 301 549 V3.2.1 (= WCAG 2.1 AA) ([S-03](#quellen)). Das Prüfziel „WCAG 2.2 AA“ im [Website-Brief](../../docs/website-brief.md) ist als Ziel sinnvoll, darf aber nicht als bereits geltende Pflicht oder erreichte Konformität ausgegeben werden.

Befunde nach Auswirkung geordnet:

1. **D-11 bleibt richtig, aber die ersten Abläufe müssen messbar verankert sein** — Erfolgskriterien (Aufgabenabschluss, Fehlrate, Latenz bis zur hörbaren Information) vor dem ersten Test festlegen, nicht nachträglich.
2. **Navigation nicht als ersten Ablauf wählen.** Die drei nicht-navigativen Bereiche (Einkaufen, Fragen, Interaktion) sind mit heutigen Modellen tragfähiger und ungefährlicher zu erproben.
3. **Datenschutzschärfung:** funktionale Sehfähigkeitsangaben sind Gesundheitsdaten nach Art. 9 DSGVO; der öffentliche GitHub-Issue-Weg ist dafür ungeeignet.
4. **Barrierefreiheit:** WCAG-2.2-Ziel beibehalten, aber Konformitätsaussagen nur gegen den heute geltenden Stand formulieren.
5. **Architektur:** statische Astro-Seite plus genau ein privater Einreichungsweg; keine Datenbank im öffentlichen Repo.

---

## 1. Technische Machbarkeit aktueller Vision-/Reasoning-Modelle

### Befund

Die vier Bereiche sind technisch **asymmetrisch**. Text-/Objektfragen, Szenenbeschreibung und Formulierungshilfe sind heute mit allgemeinen VLMs und mit etablierten Assistenz-Apps praktisch verfügbar und der Nutzen belegt sich durch den Alltagseinsatz (Be My AI, Seeing AI mit Folgefragen; [S-04](#quellen), [S-05](#quellen)). Mobilitäts-/Navigationsanweisungen haben dagegen keinen validierten Fußgänger-Nachweis und stoßen auf dokumentierte Modellgrenzen.

Aktuelle Primärbefunde (Abruf 2026-10-20):

- **Gemini Robotics ER 2 (Streaming-Preview):** Eingabe Audio (16-kHz-PCM) + Bilder (JPEG ≤ **1 Bild/s**) + Text; Ausgabe **nur Text**. Videobilder lösen allein keinen Reasoning-Turn aus — es braucht einen zusätzlichen Text-/Audio-Prompt („Heartbeat“). Sprachausgabe erfolgt über externen TTS-Anbieter ([S-01](#quellen)). Das bestätigt und präzisiert R-03 aus [docs/research.md](../../docs/research.md): selbst das aktuellste Embodied-Reasoning-Streaming ist für Roboter-Orchestrierung gedacht, nicht für einen gehenden Menschen. 1 Bild/s plus externe TTS-Verarbeitung ergibt keine belastbare Latenz für zeitkritische Geh-Hinweise.
- **Modellversionen wechseln schnell:** ER 1.6 wird als veraltet geführt, ER 2 ist Preview; parallel werden „Gemini 3.8 Flash/3.8 Live“ und „Gemini 4 Argon“ beworben ([S-01](#quellen), [S-02](#quellen)). Modellnamen und -stände unmittelbar vor jedem Experiment neu prüfen — eine statische Referenz altert hier in Wochen.
- **Realtime-Sprachmodelle** (z. B. `gpt-realtime-2.1`/`-mini`; Gemini 3.8 Live) verbessern die Sprachinteraktion, sind aber Speech-to-Speech und liefern keinen räumlichen Navigationsnachweis ([S-06](#quellen)).
- **Etablierte Hilfen als Vergleichsbasis:** Be My Eyes/Be My AI und Seeing AI bieten Bildbeschreibung mit Rückfragen; Meta-Glases-Kooperationen (Aira, Be My Eyes) ermöglichen freihändige Nutzung, zeigen aber dokumentierte Grenzen bei wechselnden Lichtverhältnissen, komplexen/neuen Objekten und benötigen stabiles Internet ([S-04](#quellen)). Das ist zugleich eine Stärke (Vergleichsmaßstab) und eine Warnung (Industrie-Volatilität: Soundscape eingestellt, Toyota BLAID abgebrochen).

### Bewertung und Empfehlung

**Problem:** Die Vision beschreibt die vier Bereiche als gleichberechtigt, obwohl die Nachweislast grundverschieden ist. Ohne ausdrückliche Trennung droht, dass die attraktive, aber ungesicherte Navigation die messbaren, erreichbaren Erfolge der anderen Bereiche verdeckt — genau das Muster, das die Altprojekt-Analyse (L-01, L-02, [Bestandsaufnahme](../codex/legacy-review.md)) und die Abandonment-Forschung ([S-04](#quellen)) als Versagensursache benennen.

**Empfehlung:** Zwei Forschungsstränge explizit ausweisen:
- **Stufe 1 (ohne Sicherheitsfreigabe erprobbar):** Produkt/Text lesen, Frage zu einer Szene mit Rückfrage, Formulierungshilfe für eine Bitte, Eingang/Gegenstand im Stehen finden. Vergleichsmaß: heutige VLMs **und** einfache OCR/Objekterkennung; ein Reasoning-Modell ist nicht für jede Aufgabe nötig (bereits als Hypothese in [research.md](../../docs/research.md) notiert, hier mit Evidenz unterlegt).
- **Stufe 2 (gesperrt, nur mit O&M-Fachleuten):** Hindernis-/Stufen-/Überquerungs-/Tür-/Sitzplatzhinweise beim Gehen. Kein Modelltext, keine Konfidenzzahl ersetzt validierte Geometrie oder den Nachweis eines freien Wegs.

**Alternative/Tradeoff:** Alle vier Bereiche weiterhin gemeinsam priorisieren (so die jetzige Vision) — einfacher zu kommunizieren, aber es riskiert, dass ungesicherte Navigationsversprechen die Debatte dominieren und Messergebnisse aus Stufe 1 verzögern.

**Evidenz:** Dokumentierte Modellgrenzen [S-01](#quellen); Abandonment-Ursachen „fehlende Nutzerbeteiligung, unzureichendes Sicherheitstesten, Technik-getrieben statt bedarfsgetrieben“ [S-04](#quellen); Altprojekt-Befunde L-01/L-02 ([Bestandsaufnahme](../codex/legacy-review.md)).

**Nächster Test:** Für jede Stufe-1-Aufgabe vorab Erfolg, zulässige Unsicherheit, Abbruch und Messverfahren festlegen; dann eine kleine manuell geprüfte Referenzmenge (gleiche freigegebene Bilder) gegen ein allgemeines VLM, eine lokale OCR/Objekt-Baseline und ggf. ein Reasoning-Modell messen — getrennt nach Beobachtung, Position, Wegbezug und Handlungsentscheidung (Methodik bereits in [research.md](../../docs/research.md) skizziert, dort auf Navigationsfokus; auf Stufe 1 übertragen).

---

## 2. Nutzerbedürfnisse und Priorisierung

### Befund

Die Grundlage ist hier bereits diszipliniert: ein Einzelbericht ist Ausgangspunkt, keine Studie; die vier Bereiche sind Hypothesen, keine validierten Wünsche ([Vision](../../docs/vision.md), [state.md](../../state.md)). Die recherchierte Literatur bestätigt die zentralen Risiken dieser Disziplin:

- **Abandonment ist der wichtigste unbeachtete Fehlermodus.** Digitale Assistenz-Apps werden möglicherweise ähnlich oft oder häufiger aufgegeben als Hörgeräte (bis 78 %); nur 29 % von 140 untersuchten ETA-Studien bezogen überhaupt Betroffene ein, viele testeten mit verbundenen Augen sehenden Personen ([S-04](#quellen), [S-05](#quellen)). Treiber: schlechtes Design, fehlende Flexibilität, keine Nutzerbeteiligung bei Auswahl, unzureichendes Training, Geräte, die die Behinderung sichtbar machen.
- **Drei Gegenmittel** werden von der Forschung priorisiert: partizipative/transdisziplinäre Forschung, integrierte Ökosysteme statt Einzel-Apps, sozial unterstütztes Engagement ([S-04](#quellen)). D-11 („wenige vollständige Abläufe gemeinsam mit Betroffenen prüfen“) entspricht exakt dem ersten Gegenmittel.
- **Formfaktor und Hände-frei sind offen und folgenreich.** Die Beteiligungsseite darf keine Kameranutzung, kein KI-Abo und keine GitHub-Kenntnisse voraussetzen (bereits in [Website-Brief](../../docs/website-brief.md) und Codex-Analyse richtig erkannt); die späteren App-Experimente müssen Trageweise, Langstock-Kompatibilität und freie Hände separat erheben.

### Empfehlung

**Problem:** Die jetzigen Prompts fragen offen nach „einer Situation“, aber die Priorisierung der ersten Abläufe (D-11) ist noch nicht an messbare Bedarfssignale gekoppelt.

**Empfehlung:** Die ersten vollständigen Abläufe **nach zwei Kriterien gemeinsam mit Betroffenen** auswählen: (a) in Stufe 1 (nicht-navigativ) realisierbar, (b) hohe Alltagshäufigkeit **und** von Betroffenen als hoch eingestufte Relevanz. Bewusst **nicht** nach technischer Attraktivität der Navigation sortieren. Die drei Stufe-1-Kandidaten aus der Vision (Produkt-/Textfrage, Frage an die App, Formulierung einer Bitte) decken dies ab; Eingang-finden im Stehen (UC-04, ohne Geh-Anweisung) ist ein grenzwertiger Vierter.

**Alternative/Tradeoff:** Navigation früh priorisieren, weil dort der größte gefühlte Leidensdruck liegen kann — möglich, aber nur als kontrolliertes, begleitetes Einzelexperiment, nicht als erster Produktablauf.

**Evidenz:** Abandonment-Studie [S-04](#quellen); ETA-Studie (Nutzerpräferenz deterministisch > generativ) [S-05](#quellen); Annahme: Bedarfssignale liegen erst nach echter Erhebung vor.

**Nächster Test:** Interview-Pilot mit 2–3 Betroffenen (nicht repräsentativ, aber ein Echtheitstest des Ablaufs): Schafft eine Person je eine vollständige Situation aus Stufe 1 ohne Zwang, ohne versehentliche Preisgabe und mit Screenreader? Messen: Abschlussquote, Anteil „nur für mich“, Abbruchgründe.

---

## 3. Barrierefreiheit der Website und des Interviewwegs

### Befund

Der [Website-Brief](../../docs/website-brief.md) ist fachlich solide (semantisches HTML, Tastatur/Screenreader, Kontraste, kein CAPTCHA, kein Autoplay, Funktion ohne JS, Vorschau vor Absenden). Zwei Präzisierungen aus aktuellen Primärquellen:

1. **Rechtsstand:** EN 301 549 V4.1.1 (2026-09) übernimmt WCAG 2.2 (sechs neue Kriterien, 4.1.1 Parsing entfällt), ist aber noch **nicht** im Amtsblatt zitiert; verbindliche Referenz bleibt EN 301 549 V3.2.1 = **WCAG 2.1 AA** ([S-03](#quellen)). Empfehlung: auf WCAG 2.2 AA *hin*bauen (Obermenge, zukunftssicher), aber Konformität heute nur gegen WCAG 2.1 AA formulieren und nirgends „WCAG-2.2-konform“ behaupten, solange keine Prüfung vorliegt. Diese Korrektur ist präziser als die aktuelle Formulierung „Prüfziel WCAG 2.2 AA“.
2. **Prüfreihenfolge ist im Brief bereits richtig:** automatische Checks ergänzen, aber nicht ersetzen; echte Screenreader-Durchläufe (VoiceOver/NVDA) und Tests mit Betroffenen sind die eigentliche Abnahme. Keine vorzeitige Konformitätsbehauptung — bereits festgehalten.

### Empfehlung

**Problem:** Der DE/EN-Interviewweg läuft über fremde KI-Chats; deren Barrierefreiheit ist außerhalb der eigenen Kontrolle und darf nicht stillschweigend vorausgesetzt werden.

**Empfehlung:** Den kopierbaren Prompt als eigenständigen, normalen Text anbieten (ist er), **und** einen gleichwertigen manuellen Weg (Formular/eigenes Markdown) als Erstklassen-Pfad mit gleichem Zusammenfassungsschema führen. Die Prompt-Abhängigkeit von einer fremden KI ist eine dokumentierte, nicht garantiert zugängliche Zwischenschicht; der manuelle Weg ist die barrierefreie Grundlinie. Sprachwechsel verwirft keine Eingaben (bereits gefordert) — technisch als serverseitig persistierter Entwurf oder als Warnhinweis lösen, nicht durch Client-Zustand.

**Alternative/Tradeoff:** Nur der KI-Prompt-Weg (weniger Aufwand) — riskiert, genau die Gruppe auszuschließen, die den manuellen Weg am nötigsten hat.

**Evidenz:** EN 301 549/WCAG-Stand [S-03](#quellen); Annahme: fremde Chat-Apps sind nicht durchgängig WCAG-konform.

**Nächster Test:** Vor Website-Bau die beiden Wege (Prompt-Kopie, manuelles Formular) als HTML-Prototyp mit VoiceOver (Safari) und NVDA (Firefox/Chrome) durchspielen; Abnahme erst mit Betroffenen.

---

## 4. Einfachste tragfähige Architektur

### Befund

Die einzige aktuelle Implementierung ist Dokumentation; Website und App sind nur spezifiziert. Für die spätere Beteiligungsseite ist die einfachste tragfähige Form klar umrissen und braucht keine neue Datenbank- oder Backend-Infrastruktur im öffentlichen Repo.

### Empfehlung

**Problem:** Der moderierte Einreichungsweg (D-07) erfordert privaten Empfang + menschliche Moderation + Projektkonto-Veröffentlichung, ohne dass dafür bisher eine minimale Betriebsform festgelegt ist.

**Empfehlung (Form, keine Implementierung):**
- **Statische Astro-Seite (SSG)** für alle Inhalte in DE/EN; keine clientseitige App, keine Datenhaltung im Repo.
- **Genau ein serverseitiger Schreib-Endpunkt** (z. B. Cloudflare Pages Function/Worker) nimmt die freigegebene Zusammenfassung entgegen und legt sie in eine **private** Warteschlange/Ablage (z. B. D1 oder ein moderiertes Postfach). Öffentlich bleibt nur das freigegebene Issue.
- **Zugänglicher Missbrauchsschutz** statt Bild-CAPTCHA: Honeypot + Ratenlimit + menschliche Moderation; eine invisible/managed Turnstile-Variante ist eine zu entscheidende Option, kein Automatismus.
- **Moderation:** Mensch bestätigt, ein **Projektkonto** legt das Issue an; Inhalt nur nach erneuter Freigabe der Person ändern (bereits in [interview-spec](../../docs/interview-spec.md) gefordert). Kein Schema, keine Zugangsdaten, keine Warteschlange im öffentlichen Repo.
- **Offene Entscheidungen aus [state.md](../../state.md) nicht vorwegnehmen:** Hosting, Domain, Betreiber, Aufbewahrung/Löschung, Kontakt-/Rücknahmekanal, Lizenzen. Diese vor dem Website-Bau entscheiden, nicht währenddessen.

**Alternative/Tradeoff:** Moderiertes Postfach ohne Serverless-Endpunkt (E-Mail-basiert) — am einfachsten, aber E-Mail-Metadaten und Zustellbarkeit sind eigene Datenschutz-/Zuverlässigkeitsrisiken; nur als Zwischenschritt, nicht als Ziel.

**Evidenz:** Annahme (Architekturhypothese, als solche gekennzeichnet); keine Implementierung oder Messung ausgeführt. Übereinstimmung mit Codex-Richtung „kleine Astro-Seite + separater serverseitiger Einreichungsweg“.

**Nächster Test:** Nach Betriebsentscheidung den Endpunkt als Wegwerf-Prototyp mit einem Test-POST (ohne echte Personendaten) gegen die private Ablage durchspielen; verifizieren, dass kein Inhalt ins öffentliche Repo gelangt und doppelte Absendungen kontrolliert werden.

---

## 5. Veröffentlichung, Sichtbarkeit und Datenschutz

### Befund

Die Spezifikation [interview-spec.md](../../docs/interview-spec.md) und beide Prompts sind sorgfältig (getrennte Veröffentlichungs-/Namensnennungs-Entscheidungen, Vorschau, kein erfundener Issue-Link, keine Anonymitätsgarantie). Eine datenschutzrechtliche Schärfung fehlt:

- **Funktionale Sehfähigkeitsangaben sind Gesundheitsdaten** im Sinn von Art. 9 DSGVO („data concerning health“) und unterliegen dem Verarbeitungsverbot mit Ausnahmen, z. B. ausdrückliche Einwilligung Art. 9(2)(a) ([S-07](#quellen)). Der öffentliche GitHub-Issue-Weg ist für Gesundheitsdaten **ungeeignet**; der moderierte private Weg ist der richtige Kanal, benötigt aber ausdrückliche Einwilligung, Zweckbindung, Aufbewahrungs-/Löschfristen und einen Rücknahmekanal — alles bereits als „vor Aktivierung klären“ notiert, aber ohne den Art.-9-Bezug.
- **Identifizierbarkeit ist kontextuell:** Der Spezifikationstext ist korrekt („Namen entfernen verringert, gewährleistet nicht“). Ergänzung: bereits „funktionale Angaben“ + Alltagskontext (seltener Arbeitsplatz, genauer täglicher Weg) können gemeinsam re-identifizierend wirken — die Prompts verallgemeinern dies bereits („genaue Orte/Zeiten entfernen“), gut.

### Empfehlung

**Problem:** Die Datenschutztexte benennen Schutzpflichten, aber nicht die Rechtsgrundlage für den sensibelsten Datenpunkt (Sehfähigkeit).

**Empfehlung:** Im [interview-spec](../../docs/interview-spec.md) und in den künftigen Website-Datenschutztexten ausdrücklich festhalten: (a) funktionale Sehfähigkeitsangaben sind Art.-9-Daten und werden **nur bei ausdrücklicher Einwilligung, zweckgebunden und nie in öffentlichen Issues** verarbeitet; (b) Standard ist, gar keine Sehfähigkeitsdaten zu erheben — der Prompt fordert sie bereits „nur bei Bedarf freiwillig“ an, ich empfehle zusätzlich den Default „nicht erfragen, nur auf Eigeninitiative annehmen“. (c) Der moderierte private Weg ist die einzige zulässige Route für jede gesundheitsbezogene Angabe.

**Alternative/Tradeoff:** Sehfähigkeitsangaben komplett aus dem Interview streichen (maximaler Schutz, aber weniger Kontext für die spätere Bedarfsdifferenzierung nach Lebenslage).

**Evidenz:** Art. 9 DSGVO [S-07](#quellen); Annahme: die Zuordnung „Sehfähigkeit = health data“ folgt der etablierten Auslegung von Art. 4 Nr. 15/Art. 9 DSGVO.

**Nächster Test:** Die bestehenden Szenarien in [interview-spec](../../docs/interview-spec.md) um zwei Fälle ergänzen: „Person nennt freiwillig eine funktionale Seheinschränkung“ (→ nicht ins öffentliche Issue, nur moderiert/privat) und „Person erwartet Anonymität bei eigenem Konto“ (→ Sichtbarkeit erklären, moderierten Weg nennen, sofern aktiv).

---

## 6. Kleinster sinnvoller nächster Schritt und Abnahmekriterien

### Empfehlung

**Problem:** Zwischen „Analysen liegen vor“ und „Website bauen“ fehlt ein messbarer, kleiner Schritt, der D-11 direkt bedient und nicht in eine ungeprüfte Website mündet.

**Empfehlung (Reihenfolge):**
1. **Koordinator integriert die drei Analysen** in eine kurze Entscheidungssynthese: erste Abläufe (Stufe 1), Hosting/Backend, Moderations-/Betreiberverantwortung, Lizenz. Übereinstimmung mehrerer Modelle ist **kein** empirischer Nachweis — Entscheidungen begründen, Ablehnungen dokumentieren.
2. **Minimaler Beteiligungsweg** (nicht „die Website“): statische DE/EN-Seite + manueller Weg + moderierter privater Endpunkt + Datenschutztext mit Art.-9-Klarstellung. Das ist das *Vehikel*, um D-11 überhaupt auszuführen.
3. **Interview-Pilot mit 2–3 Betroffenen** (nicht repräsentativ): je eine vollständige Situation aus Stufe 1, mit Screenreader, ohne öffentliches Konto, mit voller Publikationskontrolle. Kein Modell, keine App in diesem Schritt.

**Verifizierbare Abnahmekriterien** (vor Website-Bau vereinbart, danach gemessen):

| Kriterium | Zielwert / Nachweis |
| --- | --- |
| Teilnahmeweg per Tastatur + Screenreader vollständig | 1 durchlaufener Abschluss je Sprache, VoiceOver (Safari) + NVDA (Firefox/Chrome) |
| Eine Situation aus Stufe 1 ohne Navigationsbezug vollständig eingereicht | Mindestens 1 realer Abschluss im Pilot |
| Keine versehentliche Veröffentlichung | 0 ungewollte Issues im Pilot; „nur für mich“ erzeugt 0 Übermittlungen |
| Keine erfundene Einreichungsstelle | Alle „bald verfügbar“-Aussagen korrekt; aktiver Link nur bei aktivem Weg |
| Duplikat-/Wiederholungsschutz | Doppeltes Absenden erzeugt keine unkontrollierten Duplikate |
| Konformitätsaussage ehrlich | Behauptung nur WCAG 2.1 AA (heute geltende Referenz), WCAG 2.2 als Ziel formuliert |
| Relativer Link- und Diff-Check | Prüfskript aus [README](../../README.md) grün; `git diff --check` leer |

**Alternative/Tradeoff:** Direkt mit dem App-Experiment starten (überspringt Website) — widerspricht D-11 und D-02 und wird abgelehnt; Website vor Bedarfserhebung „fertig“ ausbauen — unnötiger Umfang vor dem ersten Nutzernachweis.

**Evidenz:** D-11 ([state.md](../../state.md)); Abandonment-Forschung (partizipative Forschung als Gegenmittel) [S-04](#quellen); die übrigen Kriterien sind Annahmen, bis sie im Pilot gemessen werden.

---

## Widerspruch zur Codex-Grundlage (begründet)

| Punkt | Codex/Stand | OMP-Position | Begründung |
| --- | --- | --- | --- |
| Gleichrangigkeit der vier Bereiche | Vier Bereiche „gleichberechtigt“, getrennte Nachweise | Explizite **Zweistufigkeit**; Navigation gesperrt, Stufe 1 zuerst | Dokumentierte Modellgrenzen (1 Bild/s, Textausgabe) [S-01](#quellen) + fehlender Fußgänger-Nachweis + Abandonment-Risiko [S-04](#quellen) |
| Generative vs. deterministische Ausgabe | „nicht jede Hilfe braucht räumliche Navigation“ (nur implizit) | Empirische **Präferenz deterministischer Ausgabe** für räumliche Anweisungen als eigene Vergleichsachse | ETA-Studie: alle 13 TN bevorzugten DL-Variante [S-05](#quellen) |
| Barrierefreiheit-Ziel | „Prüfziel WCAG 2.2 AA“ | Ziel WCAG 2.2 AA, Konformitätsaussage heute WCAG 2.1 AA | EN 301 549 V4.1.1 noch nicht zitiert [S-03](#quellen) |
| Sehfähigkeitsangaben | „nur bei Bedarf freiwillig“ | Zusätzlich **Art. 9 DSGVO**: Gesundheitsdaten, nie in öffentliche Issues | Art. 9 [S-07](#quellen) |

Übereinstimmung mit Codex: D-02/D-11-Reihenfolge; keine vorzeitige Plattform-/Modellwahl; Trennung Beobachtung/Position/Wegbezug/Anweisung; statische Astro-Seite + separater Einreichungsweg; getrennte Veröffentlichungs-/Namensnennungs-Freigabe. Abweichungen ändern nichts an der bestätigten Vorgehensreihenfolge.

---

## Quellen (Abrufdatum 2026-10-20, sofern nicht anders)

| ID | Quelle | Belegte Aussage / Grenze |
| --- | --- | --- |
| S-01 | [Gemini Robotics ER 2 Streaming (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/robotics-streaming) | Eingabe JPEG ≤ 1 Bild/s, Ausgabe nur Text, Heartbeat-Prompt nötig, TTS extern. Roboter-Orchestrierung, kein Fußgänger-Nachweis. |
| S-02 | [Gemini API Changelog](https://ai.google.dev/gemini-api/docs/changelog) | ER 2 als Preview, ER 1.6 veraltet; Modellnamen wechseln schnell. |
| S-03 | [AccessibleEU: EN 301 549 aktualisiert (2026-09-07)](https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en) | EN 301 549 V4.1.1 übernimmt WCAG 2.2; Rechtsreferenz bleibt V3.2.1 = WCAG 2.1 AA bis Amtsblatt-Zitat. |
| S-04 | [Barak Ventura et al., Frontiers in Digital Health (2026-01-12)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12832816/), DOI 10.3389/fdgth.2025.1719746 | Abandonment-Ursachen; 29 % ETA-Studien mit Betroffenen; Meta-Glases-Grenzen; drei Gegenmittel. |
| S-05 | [Pittet et al., Scientific Reports (2026-01-28)](https://www.nature.com/articles/s41598-026-37578-9), DOI 10.1038/s41598-026-37578-9 | 13 BVI-TN; NOA verbesserte Hindernisvermeidung; alle TN bevorzugten DL- vor generativer KI-Variante beim Objektfinden. |
| S-06 | [OpenAI Realtime API (Developer Guide)](https://developers.openai.com/api/docs/guides/realtime) | Realtime-Sprachmodelle (`gpt-realtime-2.1`) sind Speech-to-Speech; kein räumlicher Navigationsnachweis. |
| S-07 | [Art. 9 DSGVO (GDPR.eu)](https://gdpr.eu/article-9-processing-special-categories-of-personal-data-prohibited/) | Gesundheitsdaten = besondere Kategorie; Verarbeitungsverbot mit Ausnahmen (u. a. ausdrückliche Einwilligung). |

Interne Grundlage: [docs/research.md](../../docs/research.md) (R-01–R-13), [docs/vision.md](../../docs/vision.md), [docs/website-brief.md](../../docs/website-brief.md), [docs/interview-spec.md](../../docs/interview-spec.md), [agents/codex/analysis.md](../codex/analysis.md), [agents/codex/legacy-review.md](../codex/legacy-review.md), [agents/codex/validation.md](../codex/validation.md), [state.md](../../state.md).

## Offene Fragen

- Welche konkreten ersten Abläufe wählen Betroffene aus Stufe 1? (Noch keine Erhebung.)
- Welche Trageweise/Gerät ist für Stufe-1-Aufgaben tatsächlich akzeptabel (Langstock-Kompatibilität, freie Hände)?
- Ist der fremde KI-Chat-Weg für die Zielgruppe überhaupt barrierefrei nutzbar? (Ungeprüft; manueller Weg als Grundlinie.)
- Wie wird der moderierte Weg ohne verpflichtendes persönliches GitHub-Konto betrieben (Moderationsverantwortung, Aufbewahrung, Rücknahme)?
- Lizenzentscheidung für Dokumentation/Beiträge steht aus.

## Ausgeführte und nicht ausgeführte Prüfungen

**Ausgeführt (2026-10-20):**
- Baseline verifiziert: Tag `research-baseline-v0.1` = `fe68acae4142baca25408124f85e353fb9786674` lokal **und** auf `origin`; OMP-Worktree-HEAD identisch, Branch `analysis/omp`, Arbeitsbaum sauber.
- Kontext vollständig gelesen (AGENTS.md, README.md, state.md, assignment, vision, research, website-brief, interview-spec, beide Prompts, Codex-Analyse/Validierung/Bestandsaufnahme).
- Primärquellen S-01 bis S-07 per Web abgerufen und inhaltlich gelesen (nicht nur Erreichbarkeit).

**Nicht ausgeführt (bewusst, mit Begründung):**
- Keine Modelle ausgeführt, keine API aufgerufen, keine eigenen Leistungsdaten erhoben — Herstellerangaben belegen keine Fähigkeit in unseren Situationen; Benchmarks ersetzen keinen Nutzernachweis.
- Keine Website/App implementiert, keine Barrierefreiheits-/Browser-/Screenreader-Tests — es existiert nichts zu testen; wäre eine Behauptung ohne Gegenstand.
- Keine Interviews geführt, keine Personen kontaktiert, keine persönlichen Rohdaten übernommen.
- Claude-Code- und JCode-Berichte nicht gelesen (Erstbewertung unabhängig gehalten).
- Kein Merge; nur dieser Ordner wird committet.

## Grenzen

Alle Modell-/Rechtsstand-Angaben sind Momentaufnahmen vom Abruftag; sie ersetzen keine erneute Prüfung unmittelbar vor einem Experiment oder einer Rechtsfreigabe. Empfehlungen sind Vorschläge, keine angenommenen Projektentscheidungen. Die ETA-Präferenz stammt aus einer kleinen Stichprobe (n = 13) und ist Hinweis, nicht Verallgemeinerung. HTTP-Erreichbarkeit der Quellen wurde inhaltlich durch Lesen bestätigt, nicht durch automatisierte Volltextprüfung.
