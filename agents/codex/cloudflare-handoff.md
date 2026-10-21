# Übergabe: Cloudflare und Datenverarbeitung

Stand: 2026-10-21. Dieser Umsetzungsauftrag startet am aktuellen `main`, **nicht** an der Analyse-Baseline. Claude Codes früherer unabhängiger Bericht bleibt unverändert.

## Auftrag zum Kopieren

```text
Du arbeitest als Umsetzungsagent Claude Code für Percepta. Lies AGENTS.md,
state.md, README.md, docs/hosting-data-review.md und dieses Übergabedokument.
Der Nutzer hat direktes Cloudflare-Hosting unter percepta.moinsen.dev sowie
weitere Datenprüfung beauftragt. Codex hat den belegten Stand vorbereitet.

1. Hauptcheckout/Remote und offenen Arbeitsbaum prüfen. Den Ausgangs-Commit
   dokumentieren. Vor Änderungen einen separaten Umsetzungsbranch/Worktree
   von aktuellem main erstellen. research-baseline-v0.1 niemals verschieben.
2. Den dokumentierten Cloudflare-Deploy-Status zuerst prüfen. Bestehenden
   Worker percepta-community im vorhandenen moinsen-Account verwenden;
   keine neue Sites-Instanz und kein zusätzlicher Hostinganbieter.
3. Die HTTP-403-Challenge auf percepta.moinsen.dev untersuchen. DNS, TLS,
   Custom Domain sowie Schutzregeln und mögliche HTML-/JS-Injektionen prüfen.
   Benötigte Dashboard-/API-Berechtigungen gezielt feststellen. Keine Tokens
   ausgeben oder ins Repo schreiben. Andere Hosts und globale Regeln nicht
   ungefragt ändern. Notwendige Anpassungen eng auf Percepta begrenzen.
4. Cloudflare-Log-/Report-/Analytics-Einstellungen und konkrete Aufbewahrung
   prüfen; zusätzliche Worker-Protokolle bleiben deaktiviert. Individuellen
   Vertragsstand/DPA sowie tatsächlichen Maildienst, Empfänger, Weiterleitungen,
   Löschung und Backups anhand privater Betriebsunterlagen bestätigen lassen.
   Keine Vereinbarung, Frist oder EU-only-Verarbeitung erfinden. Öffentliche
   Dokumentation enthält nur das Ergebnis, keine internen Verträge/Logs.
5. DE/EN-Datenschutzhinweise in src/content/site.ts an nachgewiesene Einstellungen
   anpassen. Allgemeine Kontaktmail und künftige Gesundheitsinterviews bleiben
   getrennt; keine Teilnehmerdaten erheben, keine Nachrichten versenden.
6. npm run check, npm run build, npm test und Wrangler-Dry-run durchführen.
   Bei Veröffentlichung im richtigen Account interaktives Wrangler verwenden,
   damit DNS-Konflikte nicht automatisch überschrieben werden. Produktiver
   Build mit SITE_URL=https://percepta.moinsen.dev. Keine pauschale Umleitung
   der Domain auf die alte Sites-Vorschau.
7. Live-Inhalte, richtige Sprache/Links, Datenschutz/Impressum, Textdownloads,
   Clipboard, 404, Sicherheitsheader und ausbleibende unerwartete Netzwerk-
   bzw. Browser-Speicherung prüfen. Lokale Tests belegen keine vorgelagerten
   Cloudflare-Regeln. Reale Screenreader-Abnahme separat dokumentieren.
8. Protokoll im eigenen agents/claude-code/Change-Log-Agents.md anhängen;
   dieses Umsetzungsmandat erlaubt die dafür nötigen gemeinsamen Code-/Doku-
   Änderungen. Alte Analyse nicht verändern. state.md und Prüfbericht mit
   Quellcommit, Deployment, Belegen und noch offenen Punkten aktualisieren.
   Commit/Push/PR erstellen, nicht selbst mergen. Keine Compliance-Zertifizierung
   oder vollständige Freischaltung behaupten, wenn relevante Prüfungen fehlen.
```

Der aktuelle, konkrete Abschlussstand wird nach Codex' Deploy-Versuch unten ergänzt.
