# Cloudflare-Hosting und Datenprüfung

Stand: 2026-10-21. Codex als Koordinator, Ausgangs-Commit `368670b928e476a4e7df6742a84735b74e7b0629`. Auftrag: direktes Hosting im bestehenden Cloudflare-Account voranbringen und die Datenverarbeitung so weit wie mit dem verfügbaren Zugang möglich prüfen. Dies ist eine technische und redaktionelle Bestandsaufnahme, keine juristische Freigabe.

## Hosting-Ziel und Zugriff

Astro erzeugt ausschließlich statische Dateien für Cloudflare Workers Static Assets. Projektname `percepta-community`, Domain `percepta.moinsen.dev`. Kein SSR, keine Datenbank, keine Functions oder zusätzlichen kostenpflichtigen Dienste erforderlich. Die bisherige geschützte Sites-Vorschau liegt in einer getrennten Hosting-Instanz; sie ist kein Nachweis für ein Deployment im Account des Betreibers.

- Wrangler 4.151.3 ist angemeldet; `moinsen.dev` ist im vorhandenen Account als aktive Zone gefunden. Vor diesem Lauf existierte der Worker nicht (Cloudflare-Code 10007).
- Der Token erlaubt Workers-/Routes-Schreibzugriffe und Zone-Lesen. DNS-Listenabruf, Security-Level, Browser-Check und zonenweite Logpush-Jobs antworteten mit HTTP 403. Es wurden keine Berechtigungen verändert oder Zugangsdaten ausgegeben.
- Die Zieldomain und ein unbenutzter Kontrollhostname lieferten dieselben Cloudflare-Adressen: Hinweis auf vorhandenes Wildcard-DNS, kein Beweis für einen eigenen Percepta-Eintrag. Der HTTPS-Aufruf lieferte vor dem Deployment HTTP 403 mit `cf-mitigated: challenge`, außerdem NEL-/Report-To-Header. Eine funktionierende Inhaltsauslieferung oder Cookie-Freiheit ist damit nicht belegt.
- Für die Subdomain war außerdem eine noch unverifizierte Sites-Domainzuordnung vorhanden. Diese ist von der gewünschten Workers-Custom-Domain zu unterscheiden; kein CNAME auf `custom-domains.chatgpt.site` für den direkten Cloudflare-Betrieb setzen.
- Eine native Browser-/Dashboard-Prüfung war nicht möglich: Computer-Use meldete keine verfügbaren Browser und einen Startfehler. Keine Challenge umgangen.

## Tatsächliche Datenwege

| Vorgang | Befund | Grenze / verbleibende Prüfung |
| --- | --- | --- |
| Seite und Textdownloads aufrufen | Browser überträgt IP-Adresse, Zieladresse/ggf. Query, Zeitpunkt und HTTP-/Browserinformationen an Cloudflare; öffentliche statische Inhalte zurück | Zonenweite Schutz-, Reporting- und Logfunktionen sind nicht vollständig einsehbar |
| Percepta im Browser | Ein Script kopiert auf Knopfdruck die ausgewählte Vorlage. Kein Lesen der Zwischenablage, keine Eingabe persönlicher Antworten, keine App-Cookies oder Local-/Session-Storage-Verwendung | Lokale Browserprüfung umfasst alle 16 Seiten; Cloudflare kann zusätzliche Funktionen vorschalten |
| Hosting-Protokolle | `observability.enabled: false`, `logpush: false`; alternative `workers.dev`- und Preview-Adressen deaktiviert | Bezieht sich auf diesen Worker, nicht auf sämtliche Cloudflare-Sicherheitsdaten oder zonenweite Exporte |
| Kontaktmail | Freiwillige Nachricht an die bestätigte Geschäftsadresse; allgemeine Fragen, Barrieren, Datenschutz | Öffentliche MX-Einträge zeigen Google-Mailserver. Tatsächlicher Vertragspartner, Weiterleitungen, Zugriff, Backup/Vault und Löschregeln lassen sich daraus nicht ableiten; keine Mail gelesen oder versendet |
| Externe Links | GitHub, Quellen und Betreiberseite werden verlinkt, nicht eingebettet | Erst der bewusste Aufruf führt zum jeweiligen Anbieter |
| Externer KI-Chat | Nutzer kopiert den Prompt selbst; keine Modell-API in der Website | Chat-Verarbeitung beim gewählten Anbieter; kein automatischer Rückfluss an Percepta |
| Interview/Pilot | Kein Empfang, kein Kontaktregister und kein Backend | Separater Betriebs- und Einwilligungsablauf bleibt erforderlich |
| Alte Sites-Vorschau | Eigentümergeschützter, getrennter Stand mit OpenAI-Zugang | Kein Bestandteil des direkten Aufrufs der Zieldomain; bisherige Vorschau wurde in diesem Lauf nicht öffentlich freigegeben |

## Datenschutztext und Einordnung

Die DE/EN-Hinweise beschreiben Cloudflare als tatsächlichen Hosting-Anbieter des Zieldeployments, technische Daten, Verarbeitungszweck, mögliche Drittlandverarbeitung, Sicherheits-Cookies, Aufbewahrungsgrenzen, Kontakt und Betroffenenrechte. Sie behaupten keine abgeschlossene Compliance-Prüfung. Betreiberangaben stammen aus dem bereits freigegebenen [Quellenregister](legal-sources.md).

Als Arbeitsgrundlage für die minimale Bereitstellung und freiwillige allgemeine Anfragen wird Art. 6 Abs. 1 Buchst. f DSGVO erläutert. Abwägung: zuverlässige, geschützte Information ist nötig; dafür sind Verbindungsdaten erforderlich, persönliche Berichte, Profile und Werbetracking dagegen nicht. Ein Besuch eines Projekts zum Thema Behinderung kann sensible Rückschlüsse begünstigen. Daher keine Besucherprofile, keine zusätzlichen Worker-Logs und keine unnötigen Übermittlungen im eigenen Code. Die rechtliche Tragfähigkeit der gesamten Hosting-/Mailkonfiguration bleibt anhand der tatsächlich aktiven Dienste zu prüfen. Diese Grundlage erlaubt keinen späteren Umgang mit Gesundheitsinterviews ohne eigene Prüfung.

Cloudflares veröffentlichte Self-Serve-Bedingungen (§ 6.1) beziehen das DPA ein. Ein pauschales „erst separat einen AV-Vertrag abschließen“ wäre deshalb aus den öffentlich verfügbaren Unterlagen nicht ableitbar. Das beweist jedoch weder einen konkreten Vertragsstand dieses Accounts noch die Rolle eines unbekannten Maildienstes. Diese Nachweise gehören in private Betriebsunterlagen. Das DPA enthält Regelungen zu Unterauftragnehmern und bestimmten Drittlandtransfers; keine EU-only-Zusage oder selbstständig geprüfte DPF-Zertifizierung behauptet.

Für Aufbewahrung ist keine pauschale Frist erfunden: Cloudflare nennt in seiner allgemeinen Datenschutzerklärung Zwecke und gesetzliche Anforderungen. Produktfristen wie 3–7 Tage bei Logpull sind nicht auf sämtliche Cloudflare-Daten übertragbar und wurden nicht als Percepta-Frist eingesetzt. Worker-Protokolle und zonenweite Sicherheits-/Netzwerkdaten getrennt prüfen. Auch die NEL-Header-Laufzeit ist keine nachgewiesene serverseitige Löschfrist.

Ein deaktiviertes Tracking-Script beweist nicht, dass keine Endeinrichtungsspeicherung stattfindet. Cloudflare dokumentiert technische Sicherheits-Cookies; die Erforderlichkeit nach § 25 Abs. 2 TDDDG ist anhand der tatsächlich aktivierten Funktionen zu bewerten. Kein Cookie-Banner nur auf Verdacht eingebaut und keine pauschale Einwilligungsfreiheit zugesichert.

## Was noch konkret zu prüfen ist

1. **Schutzregeln und Erreichbarkeit:** Für exakt `percepta.moinsen.dev` Ursache der Challenge ermitteln. Erforderliche Schutzfunktion und Barrierefreiheit abwägen, keine pauschale Deaktivierung für die gesamte Domain. Anschließend normale Browser, Tastatur, Screenreader und JavaScript-deaktivierten Abruf prüfen.
2. **Cloudflare-Konfiguration:** DNS-/Custom-Domain-Zuordnung, TLS, Workers-Settings, Web Analytics/Zaraz, NEL, Bot-/Challenge-Regeln sowie zonenweite Logpush-Ziele und Aufbewahrung lesen. Nur tatsächlich aktive Funktionen in der Datenschutzerklärung nennen. Falls Änderungen nötig sind, auf Percepta begrenzen.
3. **Verträge und Mail:** Passenden Cloudflare-Vertragsstand privat sichern; tatsächlichen Maildienst, Auftragnehmer, Weiterleitungen, Zugriff und Lösch-/Backupfristen bestätigen. Die MX-Abfrage allein reicht nicht. Datenschutztext danach konkretisieren.
4. **Betrieb:** Lösch-/Auskunftsanfrage mit erfundenen Daten intern durchspielen; keine Mail an Dritte in diesem Auftrag. Reale Interviewdaten erst nach dem separaten [Pilot-Leitfaden](participation-pilot.md).

Die Übergabe an Claude Code enthält ausführbare Prüf- und Abschlusskriterien: [Cloudflare-Übergabe](../agents/codex/cloudflare-handoff.md).

## Quellen, abgerufen 2026-10-21

- [Cloudflare Static Assets](https://developers.cloudflare.com/workers/static-assets/) und [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/): statischer Betrieb, Wrangler-Zuordnung, automatische DNS-Einrichtung für Custom Domains. Das Fehlen eines separaten DNS-Schreibscopes allein beweist keinen gescheiterten Custom-Domain-Deploy.
- [Static Assets: Billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/): direkte statische Auslieferung ohne zusätzlichen Worker-Handler. Keine Tarifänderung vorgenommen.
- [Cloudflare Self-Serve-Bedingungen](https://www.cloudflare.com/terms/) § 6.1 und [DPA](https://www.cloudflare.com/cloudflare-customer-dpa/): Vertragsbezug und Übermittlungsregeln; keine Bestätigung des individuellen Vertragsstands.
- [Cloudflare-Datenschutz](https://www.cloudflare.com/privacypolicy/) Abschnitte 2, 6/7 und 11: technische Daten, Rollen, Übermittlungen und Aufbewahrungskriterien.
- [Cloudflare Cookies](https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/): mögliche Sicherheits-Cookies; keine Behauptung, alle beschriebenen Produkte seien bei Percepta aktiv.
- [Workers Logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/) und [Logpull-FAQ](https://developers.cloudflare.com/logs/faq/logpull-api/): unterschiedliche Logarten. Konfigurationsfelder zusätzlich im installierten Wrangler-Schema und CLI-Quellcode geprüft.
- [DSGVO, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj): Art. 6, 13, 15–21 und 77 als Prüfrahmen. Direkte HTML-/PDF-Abrufe durch Browserprüfung blockiert; für Art. 6, 13 und 21 amtliche indexierte Textauszüge gelesen. Keine neue juristische Vollprüfung behauptet.
- [§ 25 TDDDG, amtlicher Text](https://www.gesetze-im-internet.de/ttdsg/__25.html): Ausnahme bei unbedingt erforderlicher Speicherung; Suchauszug geprüft, ursprünglicher Abruf unter `/tdddg/` scheiterte.
- [Hamburgische Datenschutzaufsicht: Beschwerde](https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen): tatsächlich erreichbarer Beschwerdeweg.

## Prüf- und Veröffentlichungsstand

Astro-/Typprüfung, Build mit 16 HTML-Seiten/4 Downloads, 21 Browserprüfungen und Wrangler-Dry-run bestanden. Datenschutzassertionen für Drittanfragen, Cookies sowie Local-/Session-Storage wurden zusätzlich auf alle Seiten erweitert. Auch die erweiterte Prüfung besteht 21/21; Astro-/Typprüfung erneut ohne Befund. [GitHub Actions Run 39557300736](https://github.com/moinsen-dev/percepta-community/actions/runs/39557300736) am Quellstand `d9a7f680276f373bd20ac4bc4f2ab577621da443` vollständig erfolgreich.

Direkter interaktiver `wrangler deploy` erfolgreich: Cloudflare-Version `3591fb2e-2a6a-476f-8a3b-a4539096f005`, am 2026-10-21 um 06:44 UTC aktiviert. `wrangler deployments list` bestätigt 100 % auf dieser Version. Cloudflare-API bestätigt `percepta.moinsen.dev` als aktivierte Custom Domain des Workers `percepta-community` in der Zone `moinsen.dev`, mit Zertifikat. TLS-validierender Abruf ohne unsichere Optionen funktioniert. `workers.dev` und Version-Previews sind remote deaktiviert; `logpush: false`, `bindings: []`, `observability: null` (kein aktivierter Observability-Block). Kein Tarifwechsel.

Die unverifizierte Sites-Custom-Domain wurde nach erfolgreicher direkter Zuordnung entfernt; Provider-Liste danach leer. Die Eigentümervorschau selbst bleibt unverändert. Kein bestehender DNS-Konflikt wurde von Wrangler gemeldet oder überschrieben; Cloudflare hat die Custom-Domain-Zuordnung eingerichtet.

**Verbleibende Grenze:** Der Live-Abruf liefert weiterhin HTTP 403 und den Titel „Just a moment…“, keinen Percepta-Inhalt. Das belegt eine Challenge für unsere Abrufe, nicht automatisch eine Sperre sämtlicher Besucher. Im gemessenen Response wurde kein `Set-Cookie` gesendet; eine vollständig durchlaufene Challenge und spätere Cookies konnten nicht geprüft werden. Produktive CSP, Clipboard, Seiten/Downloads und 404 sind deshalb noch nicht live abgenommen. Die lokale Prüfung und der erfolgreiche Upload ersetzen diese Prüfung nicht.
