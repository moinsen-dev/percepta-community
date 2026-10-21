# Percepta — Recherche und Evidenz

Stand: 2026-10-21. Keine Modelle ausgeführt, keine eigenen Leistungsdaten erhoben. Der [Vergleich von Lookout, Seeing AI, Guided Vision und Apple](existing-assistive-tools.md) ergänzt die bisherige Modellrecherche um bestehende Alltagshilfen und einen Vorschlag für praktische Vergleiche.

## Evidenzregeln

- **P:** Im aktuellen Durchlauf gelesene Primärquelle. Belegt nur die genannte Aussage.
- **H:** Recherchehinweis aus dem vorangegangenen Gespräch; vor Nutzung erneut zu prüfen.
- **A:** Eigene Annahme oder Architekturhypothese.
- **O:** Offene Frage oder derzeit nicht zugängliche Quelle.

Herstellerangaben, Forschungsergebnisse und nachgewiesene Leistung in unserem Anwendungsfall sind verschiedene Evidenzstufen. Versionsstände und Schnittstellen unmittelbar vor einem Experiment erneut prüfen.

## Quellenregister

| ID | Status / geprüft am | Quelle | Relevanz und Grenze |
| --- | --- | --- | --- |
| R-01 | P / 2026-10-20 | [DBSV: E-Scooter](https://www.dbsv.org/e-roller.html) | Beschreibt Hindernisrisiken und kritisiert reine Nähe-Warntöne sowie die Beanspruchung einer Hand durch das Smartphone. Kein Nachweis für unsere Lösung. |
| R-02 | P / 2026-10-20 | [Google Robotics ER](https://ai.google.dev/gemini-api/docs/robotics-overview) | Dokumentiert ER 2 als Preview mit räumlichem/video-basiertem Reasoning und separatem Streaming-Endpunkt; ER 1.6 wird als veraltet geführt. Keine Navigationsvalidierung für Menschen. |
| R-03 | P / 2026-10-20 | [Google Robotics Streaming](https://ai.google.dev/gemini-api/docs/robotics-streaming) | Dokumentiert höchstens ein Bild pro Sekunde, zusätzlichen Auslöser für Antworten und Textausgabe. End-to-End-Latenz ist damit nicht gemessen. |
| R-04 | P / 2026-10-20 | [NVIDIA Cosmos Reason 2](https://docs.nvidia.com/cosmos/latest/reason2/index.html) | Hersteller beschreibt ein anpassbares Reasoning-VLM für räumliche/zeitliche Aufgaben. Kein Smartphone-Benchmark. |
| R-05 | P / 2026-10-20 | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Grundlage des Accessibility-Prüfziels für die Website. Keine bereits erreichte Konformität. |
| R-06 | P / 2026-10-20 | [GitHub: Issues erstellen](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) | Referenz für spätere Issue-Erstellung. Kein anonymes Eingabeformular. |
| R-07 | P / 2026-10-21 | [Apple: neue Bedienungshilfen](https://www.apple.com/de/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/), [VoiceOver-Handbuch](https://support.apple.com/de-de/guide/iphone/iph37e6b3844/ios) | Umgebungsfragen, Liveerkennung, Geräte-/Sprachgrenzen und ausdrückliche Warnung vor Verlass bei Navigation; Herstellerdokumentation, kein Gerätetest. |
| R-08 | H / Gespräch 2026-10-19 | [ARCore Depth](https://developers.google.com/ar/develop/depth), [Apple Tiefenkonfidenz](https://developer.apple.com/documentation/arkit/ardepthdata/confidencemap) | Tiefenmessung und deren Grenzen; konkretes Gerät und Verhalten an dünnen Teilen offen. |
| R-09 | P für Seeing AI / 2026-10-21; H für Be My Eyes | [Seeing AI](https://www.seeingai.com/), [iOS-Storetext](https://apps.apple.com/de/app/seeing-ai/id999062298), [Be My Eyes Nutzungsbedingungen](https://www.bemyeyes.com/terms-of-service/) | Seeing AI anhand Herstellerquellen konkretisiert; Plattform-/Hardwaregrenzen im [Vergleich](existing-assistive-tools.md). Be My Eyes in diesem Durchlauf nicht erneut geprüft; keine Kooperation behauptet. |
| R-10 | H / Gespräch 2026-10-19 | [GoodMaps Positionierung](https://www.goodmaps.com/positioning), [NaviLens Verkehr](https://www.navilens.com/en/sectors/transport/buses) | Ansätze mit vorerfassten Gebäuden bzw. installierten Markierungen. Zugang, Lizenz und lokale Abdeckung offen. |
| R-11 | H / Gespräch 2026-10-19 | [Mobilio-Forschungsarbeit](https://arxiv.org/abs/2605.29120) | Vor Übernahme von Ergebniszahlen Methodik, Stichprobe, Testumgebung und Übertragbarkeit lesen. Kein eigener Nachweis. |
| R-12 | H / Gespräch 2026-10-19 | [Cosmos 3](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai), [Qwen3.5-4B](https://huggingface.co/Qwen/Qwen3.5-4B) | Kandidaten für Modellvergleich; keine Auswahl und keine bestätigte mobile Echtzeitfähigkeit. |
| R-13 | P / lokal geprüft 2026-10-20 | [Früheres Percepta](https://github.com/moinsen-dev/percepta), lokale Referenzkopie | Branch `codex/reboot-0.2-week1`, Commit `d05d5c2a5c7fd3107e84e7462cc9da2d6ce04cd5` statisch gelesen; frühere Interview-Zusammenfassung nur verallgemeinert ausgewertet. Kein Remote-Abgleich, keine Laufzeitprüfung; [Befunde](../agents/codex/legacy-review.md). |
| R-14 | P / 2026-10-21 | [Lookout](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal), [Hilfe](https://support.google.com/accessibility/android/answer/9031274?hl=de) | Lesen, Produkte und Gegenstandssuche; Modi-/Sprach-/Gerätegrenzen. Kein eigener Leistungstest. |
| R-15 | P / 2026-10-21 | [Guided Vision](https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/), [Hilfe](https://support.google.com/accessibility/android/answer/18365638?hl=en) | Live-Fragen und Kameraausrichtung; Rollout, ausdrücklich keine Navigation oder Hinderniserkennung als Verwendungszweck. Kein Nachweis einer einbettbaren Produkt-API. |

## Welche Modellklasse ist relevant?

Vision-Language-Modelle beschreiben Bilder und beantworten Fragen. Embodied-Reasoning-Modelle sollen zusätzlich räumliche Zusammenhänge und nächste Schritte beurteilen. Vision-Language-Action-Modelle können Aktionen für bestimmte Roboter erzeugen. Deren Aktionsraum ist nicht automatisch auf einen gehenden Menschen übertragbar.

**A:** Eine Kombination aus schneller lokaler Hindernis-/Tiefenerfassung, zeitlicher Verfolgung und einem Modell für Kontext könnte sinnvoll sein. Geometrische Messung und situatives Verständnis getrennt bewerten. „Roller erkannt“ beweist weder vollständige Hindernisabdeckung noch einen freien Ausweichweg.

## Vergleichsexperiment für eine spätere Phase

Dies ist ein Vorschlag, kein gestarteter Benchmark:

- Gleiche freigegebene Videosequenzen für ein allgemeines VLM, ein räumliches Reasoning-Modell, eine lokale geometrische Baseline und eine Kombination verwenden.
- Eingänge neben Schaufenstern; freie/besetzte/verdeckte Sitzplätze; stehende/liegende/teilverdeckte Roller; Treppen, Gegenlicht, Dunkelheit, Bewegungsunschärfe und falsche Kameraausrichtung aufnehmen.
- Beobachtung, Position, Wegbezug, Unsicherheit und eventuelle Handlungsentscheidung getrennt bewerten; keine ausschließliche Bewertung anhand eloquenter Texte.
- Manuell geprüfte Referenzdaten und zeitliche Ereignismarken nutzen. Szenen zur Optimierung von späteren Bewertungsszenen trennen.
- Fehlende Sicht, Netzausfall und veraltete Antworten explizit prüfen. Wiederholte Durchläufe für schwankende Modellantworten vorsehen.
- Fehlnegative, falsche Entwarnung/Richtung, Fehlwarnungen je Gehminute, Latenz bis zum hörbaren Hinweis, Kosten und Energie messen.
- Keine unbegleiteten Tests im Straßenverkehr. Ein erfolgreicher Labortest ist keine Freigabe für Straßenüberquerungen.

## Offene Rechercheaufträge

Geräteauswahl und Handhabung mit Langstock; aktuelle Nutzungsrechte/SDKs der Anbieter; Offline-Verhalten; geeignete Karten und ÖPNV-Daten; Aktualisierung von Gebäuden; praktische Screenreader-Nutzung des Interviews; Betriebskosten; freiwillige Praxispartner; Finanzierung ohne voreilige Produktversprechen.

Seit der Umfangserweiterung vom 2026-10-20 außerdem: Unterstützung beim Einkaufen und bei Produkt-/Textfragen, dialogische Rückfragen bei fehlendem Kontext und selbstbestimmte Kommunikation mit anderen Menschen. Allgemeine VLMs, Texterkennung und Sprachinteraktion nach diesen Aufgaben bewerten; ein räumliches Reasoning-Modell ist nicht für jede Alltagshilfe erforderlich. Dokumentierte Produktfähigkeiten sind seit 2026-10-21 im [Vergleich vorhandener Hilfen](existing-assistive-tools.md) erfasst; deren Nutzen in vollständigen Alltagsabläufen bleibt praktisch zu prüfen.

Die [statische Bestandsaufnahme des alten Repositorys](../agents/codex/legacy-review.md) ist abgeschlossen. Sie zeigt einen angebundenen Bild-/Frageablauf mit begrenztem OCR-Fallback, zusätzliche Modell-/Navigationspfade und offene Alltagsabnahmen. Distanzschätzungen aus Objektgröße und Konfidenzwerte aus Textmerkmalen sind keine validierten räumlichen Messungen. Diese Befunde begründen neue Prüfaufgaben; sie sind kein Benchmark heutiger Modelle.

Konkrete Anbieterwahl, Sicherheitsgrenzen, Testschwellen und Architekturentscheidungen folgen erst nach Eingrenzung des Anwendungsfalls.
