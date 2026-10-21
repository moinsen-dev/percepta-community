# Verständlichkeit, SEO und KI-Suche

Stand 2026-10-21. Umsetzung am bestehenden Astro-Projekt; keine Ranking- oder Barrierefreiheitsgarantie.

## Befund und Änderung

- Einstieg bisher: abstrakter Leitsatz und Teilnahme-CTA zu einer reinen Entwurfshilfe. Jetzt: Zielgruppe und Alltagsnutzen im H1, direkte Wahl zwischen vorhandenen Hilfen und eigener Erfahrung, sichtbare Antworten auf häufige Fragen.
- Teilnahme bisher: KI-Entwurf ohne Rückweg. Jetzt: gleichwertiges Eingabefeld ohne KI, Übernahme einer geprüften Zusammenfassung, Vorschau und vorbereiteter privater Empfang. Produktive Erhebung bleibt bis zur Betriebsprüfung geschlossen; [Ablauf und Grenzen](private-intake.md).
- Auffindbarkeit bisher: keine Robots-Datei/Sitemap, überwiegend generische Dokumenttitel. Jetzt: individuelle Titel, Beschreibungen, Canonical, wechselseitige Sprachverweise, Open-Graph-Metadaten und wahrheitsgemäße WebPage/WebSite-Strukturdaten. Sitemap enthält die 17 öffentlichen Inhaltsseiten, keine 404- oder API-Routen; 404 ist `noindex`.
- GEO bedeutet hier Auffindbarkeit in generativen Suchsystemen. Sichtbare, beantwortbare Fragen, klare Projektidentität und Quellen helfen Menschen und maschineller Verarbeitung. Keine unsichtbaren Keyword-Texte, erfundenen Bewertungen oder vermeintlich zwingende `llms.txt`.

Google nennt für seine KI-Suchfunktionen dieselben SEO-Grundlagen und keine zusätzlichen Dateien oder Spezial-Schemas. Technische Eignung garantiert keine Indexierung oder Nennung: [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features), abgerufen 2026-10-21. Diese Aussage gilt für Googles dokumentierte Funktionen, nicht pauschal für alle KI-Anbieter.

## Nachweise und Grenzen

Automatisierte Prüfungen kontrollieren Canonical-/Sprachziele, Strukturdaten, vollständige Sitemap, HTML-Struktur, Links, Kontrastregeln, Reflow und Tastaturabläufe. Kein Ranking, keine Suchmaschinen-Indexierung und keine reale Screenreader-Bedienbarkeit daraus ableiten.

Für den Product-Design-Audit konnte kein aktueller Screenshot erfasst werden: Computer-Use meldet keine Apps/Browser und einen Startfehler. Daher kein abgeschlossener visueller Audit oder screenshotbasierter Befund; die Aussagen oben beruhen auf Quellcode und automatisierten Prüfungen. VoiceOver/Safari, NVDA/Firefox oder Chrome sowie Tests mit Betroffenen bleiben offen.

Nach Veröffentlichung die Sitemap in der zum Betreiber gehörenden Search Console prüfen/einreichen und öffentliche URL-Prüfung durchführen. Zugang zu Search Console ist hier nicht eingerichtet. Frühere automatische Live-Abrufe erhielten Cloudflare-Challenges; das beweist keine Googlebot-Sperre. Tatsächliche Crawler-Erreichbarkeit prüfen, ohne zonenweit Schutzfunktionen abzuschalten. Keine Änderungen an solchen Regeln vorgenommen.

Live-Nachprüfung nach Deployment am 2026-10-21: robots.txt antwortet HTTP 200 und enthält den erwarteten Sitemap-Verweis. Sitemap, DE-Startseite, DE/EN-Teilnahme und Status-API erhalten für unsere automatisierten Abrufe HTTP 403 mit `cf-mitigated: challenge`. Die Cloudflare-Veröffentlichung ist bestätigt, die Indexierbarkeit und ungehinderte Bedienung dadurch noch nicht. Keine Sicherheitsregel verändert.
