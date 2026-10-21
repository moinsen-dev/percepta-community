export type Lang = 'de' | 'en';
export const languages: Lang[] = ['de', 'en'];
export const repo = 'https://github.com/moinsen-dev/percepta-community';
// Public business details authorised for reuse on 2026-10-21; see docs/legal-sources.md.
export const operator = {
  name: 'Ulrich Diedrichsen',
  street: 'Kippingstraße 27',
  locality: '20144 Hamburg',
  email: 'business@moinsen.dev',
  vatId: 'DE299425124',
  website: 'https://www.moinsen.dev',
};
export const pathFor = (lang: Lang, page = '') => `/${lang}/${page ? `${page}/` : ''}`;

export const labels = {
  de: {
    skip: 'Zum Inhalt', home: 'Startseite', nav: 'Hauptnavigation', footer: 'Weitere Informationen',
    participate: 'Deine Erfahrung', collaborate: 'Mitwirken', research: 'Forschungsstand', tools: 'Hilfreiche Apps',
    accessibility: 'Barrierefreiheit', privacy: 'Datenschutz & Kontakt', imprint: 'Impressum',
    language: 'Read this page in English', languageShort: 'English',
    phase: 'Gemeinsam am Anfang', tagline: 'Alltag verstehen. Gemeinsam entwickeln.',
    note: 'Percepta ist ein Forschungsprojekt. Es gibt noch keine nutzbare Assistenz-App.',
    github: 'Projekt auf GitHub', copyright: 'Eine Initiative von moinsen',
  },
  en: {
    skip: 'Skip to content', home: 'Home', nav: 'Main navigation', footer: 'More information',
    participate: 'Your experience', collaborate: 'Get involved', research: 'Research status', tools: 'Useful apps',
    accessibility: 'Accessibility', privacy: 'Privacy & contact', imprint: 'Legal notice',
    language: 'Diese Seite auf Deutsch lesen', languageShort: 'Deutsch',
    phase: 'Starting together', tagline: 'Understand everyday life. Build together.',
    note: 'Percepta is a research project. There is no working assistance app yet.',
    github: 'Project on GitHub', copyright: 'An initiative by moinsen',
  },
};

export const home = {
  de: {
    title: 'Alltagshilfen für blinde und sehbehinderte Menschen.',
    intro: 'Welche App kann Texte vorlesen, Produkte erkennen oder Fragen beantworten? Hier findest du bestehende Hilfen. Mit Percepta erforschen wir gemeinsam, welche Unterstützung im Alltag noch fehlt.',
    description: 'Hilfreiche Apps für blinde und sehbehinderte Menschen entdecken. Mit Percepta bessere Unterstützung beim Einkaufen, Fragenstellen und Orientieren mitgestalten.',
    secondary: 'Das Vorhaben kennenlernen',
    eyebrow: 'Mehr als Navigation',
    heading: 'Welche Information fehlt dir im entscheidenden Moment?',
    lead: 'Nicht jede Barriere ist ein Hindernis auf dem Weg. Manchmal fehlt eine lesbare Information, manchmal ein guter Einstieg in ein Gespräch.',
    areas: [
      ['Einkaufen', 'Produkte unterscheiden, Angaben lesen oder herausfinden, wo Hilfe gebraucht wird.'],
      ['Fragen stellen', 'Eine Situation verstehen und selbst entscheiden, welche Information gerade wichtig ist.'],
      ['Mit Menschen sprechen', 'Unterstützung für Begegnungen und Gespräche finden, ohne die eigene Entscheidung abzugeben.'],
      ['Sich orientieren', 'Eingänge, Räume und Wege besser verstehen. Auch abgestellte Roller auf Leitlinien gehören zu den Fragen, die wir untersuchen wollen.'],
    ],
    exampleLabel: 'Ein erfundenes Beispiel',
    example: '„Ich will beim Einkaufen zwei Packungen vergleichen. Ich brauche die Unterschiede, nicht eine Beschreibung des ganzen Regals.“',
    exampleNote: 'So konkret möchten wir Situationen verstehen. Das ist kein Interview-Zitat und keine bereits verfügbare Funktion.',
    processTitle: 'Erst zuhören. Dann gezielt entwickeln.',
    steps: [
      ['Erfahrungen verstehen', 'Eine konkrete Situation, das gewünschte Ergebnis und die bisherige Hilfe beschreiben.'],
      ['Gemeinsam priorisieren', 'Mit wenigen Beteiligten prüfen, welche Abläufe wirklich Unterstützung brauchen.'],
      ['Technik daran messen', 'Für ausgewählte Aufgaben testen, ob eine Lösung im Alltag tatsächlich hilft.'],
    ],
    readyTitle: 'Eine Situation genügt.',
    ready: 'Beschreibe eine Erfahrung direkt auf der Seite oder nutze eine Vorlage mit oder ohne KI. Du prüfst den Text vor jeder Übertragung. Der private Empfang ist noch geschlossen.',
    limitsTitle: 'Was heute da ist — und was offen bleibt',
    limits: 'Die ersten technischen Analysen sind abgeschlossen. Diese Seite macht das Vorhaben und die nächsten Schritte zugänglich. Eine App, sichere Gehführung und eine Wirkung im Alltag sind noch nicht nachgewiesen.',
  },
  en: {
    title: 'Everyday assistance for blind and low-vision people.',
    intro: 'Which app can read text, identify products or answer questions? Find existing tools here. Together, we are exploring what support is still missing from everyday life.',
    description: 'Discover useful apps for blind and low-vision people. Help Percepta shape better support for shopping, asking questions and finding your way.',
    secondary: 'Explore the project',
    eyebrow: 'Beyond navigation',
    heading: 'What information is missing when you need it?',
    lead: 'Not every barrier is an obstacle on a path. Sometimes information is inaccessible. Sometimes it is hard to start a conversation.',
    areas: [
      ['Shopping', 'Telling products apart, reading details or identifying where support would help.'],
      ['Asking questions', 'Understanding a situation and choosing which information matters right now.'],
      ['Interacting with people', 'Finding support for encounters and conversations while keeping control of your own decisions.'],
      ['Finding your way', 'Understanding entrances, rooms and routes. Scooters left on tactile paths are among the problems we want to explore.'],
    ],
    exampleLabel: 'A fictional example',
    example: '“I want to compare two packages while shopping. I need the differences, not a description of the whole shelf.”',
    exampleNote: 'This is the level of detail we want to understand. It is not an interview quote or an existing feature.',
    processTitle: 'Listen first. Then build with a purpose.',
    steps: [
      ['Understand experiences', 'Describe a specific situation, the desired result and the help already available.'],
      ['Set priorities together', 'Work with a small group to understand which everyday tasks need support.'],
      ['Test technology against real tasks', 'Evaluate whether a solution actually helps with the selected activities.'],
    ],
    readyTitle: 'One situation is enough.',
    ready: 'Describe an experience on the page or use a template with or without AI. You review the text before any transmission. Private submissions are still closed.',
    limitsTitle: 'What exists today — and what remains open',
    limits: 'The first technical reviews are complete. This website explains the project and its next steps. An app, safe walking guidance and benefits in everyday use have not yet been demonstrated.',
  },
};

type Section = { id?: string; heading: string; paragraphs?: string[]; items?: string[]; links?: { text: string; href: string }[] };
type Article = { title: string; intro: string; sections: Section[] };
export type ArticleKey = 'collaborate' | 'research' | 'accessibility' | 'privacy' | 'imprint' | 'tools';
export const articles: Record<Lang, Record<ArticleKey, Article>> = {
  de: {
    tools: {
      title: 'Hilfreiche Apps für deinen Alltag.',
      intro: 'Texte lesen, Produkte erkennen oder Fragen zu einem Bild stellen: Diese vier Angebote können blinde und sehbehinderte Menschen unterstützen. Hier findest du Empfehlungen zum Ausprobieren.',
      sections: [
        {
          heading: 'Welche Hilfe passt zu dir?',
          paragraphs: ['Stand: 21. Oktober 2026. Unsere Auswahl beruht auf Herstellerinformationen. Wir haben die Apps noch nicht selbst mit Betroffenen getestet. Die Reihenfolge ist keine Rangliste.', 'Diese Hilfen können sich irren. Verlasse dich bei Straßenverkehr, Treppen und Hindernissen auf deine bewährten Mobilitätshilfen. Eine Objektbeschreibung bestätigt keinen freien Weg.'],
          links: [
            { text: 'Android: Lesen und Einkaufen mit Google Lookout', href: '#lookout' },
            { text: 'iPhone oder Android: Alltagshilfe mit Seeing AI', href: '#seeing-ai' },
            { text: 'Android: Kamerafragen mit Guided Vision in Gemini Live', href: '#gemini' },
            { text: 'iPhone: Vorhandene Bedienungshilfen von Apple nutzen', href: '#apple' },
          ],
        },
        {
          id: 'lookout', heading: 'Google Lookout',
          paragraphs: ['Ein möglicher Einstieg, wenn du auf Android Texte vorlesen lassen oder Lebensmittel erkennen möchtest. Lookout kann auch nach bestimmten Gegenständen suchen.'],
          items: ['Gerät und Sprache: Android, unter anderem auf Deutsch. Bildbeschreibungen mit KI-Rückfragen laut Store nur auf Englisch.', 'Grenzen: Suchfunktionen und Entfernungsangaben hängen vom Gerät ab. Der Modus „Erkunden“ ist eine Beta-Version.'],
          links: [
            { text: 'Google Lookout im Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal' },
            { text: 'Lookout-Anleitung von Google', href: 'https://support.google.com/accessibility/android/answer/9031274?hl=de' },
          ],
        },
        {
          id: 'seeing-ai', heading: 'Microsoft Seeing AI',
          paragraphs: ['Zum Lesen, für Produktinformationen und für Fragen zu Fotos oder Dokumenten. Auf dem iPhone kann „Meine Dinge suchen“ beim Wiederfinden persönlicher Gegenstände helfen.'],
          items: ['Geräte: iPhone und Android. Laut Microsoft kostenlos; die iPhone-Version unterstützt Deutsch.', 'Grenzen: Funktionen unterscheiden sich je nach Plattform. Der räumliche iPhone-Modus „Welt“ braucht LiDAR, einen Sensor in bestimmten Geräten.'],
          links: [
            { text: 'Seeing AI: offizielle Website von Microsoft (Englisch)', href: 'https://www.seeingai.com/' },
            { text: 'Seeing AI im Apple App Store', href: 'https://apps.apple.com/de/app/seeing-ai/id999062298' },
            { text: 'Seeing AI im Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.microsoft.seeingai' },
          ],
        },
        {
          id: 'gemini', heading: 'Guided Vision in Gemini Live',
          paragraphs: ['Für Fragen zu dem, was deine Kamera gerade zeigt. Gemini gibt auch Hinweise zum Ausrichten der Kamera. In der deutschen Hilfe heißt die Funktion „Interaktive Orientierungshilfe“.'],
          items: ['Gerät und Zugang: Gemini auf Android. Die Funktion wird schrittweise freigeschaltet. Die Anleitung erklärt die Aktivierung und den Schnellzugriff.', 'Grenzen: Trotz des Namens ist die Funktion laut Google nicht für Navigation, sichere Gehführung oder Hinderniserkennung gedacht.'],
          links: [
            { text: 'Guided Vision einrichten: deutsche Google-Anleitung', href: 'https://support.google.com/accessibility/android/answer/18365638?hl=de' },
            { text: 'Google stellt Guided Vision vor (Englisch)', href: 'https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/' },
          ],
        },
        {
          id: 'apple', heading: 'Apple VoiceOver und Lupe',
          paragraphs: ['Wenn du ein iPhone nutzt, lohnt sich ein Blick auf die eingebauten Bedienungshilfen. Sie bieten Umgebungsbeschreibungen; mit unterstützten Funktionen kannst du auch Fragen stellen.'],
          items: ['Voraussetzungen: Je nach Funktion sind eine bestimmte iOS-Version, Apple Intelligence oder besondere Sensoren nötig. Sprache und Region können die Verfügbarkeit einschränken.', 'Grenzen: Die Erkennung von Türen, Personen und Möbeln funktioniert nur auf unterstützten Geräten. Apple warnt vor Verlass auf die Erkennung bei Navigation.'],
          links: [
            { text: 'Apple-Anleitung: Umgebung mit VoiceOver erkennen', href: 'https://support.apple.com/de-de/guide/iphone/iph37e6b3844/ios' },
            { text: 'Apple stellt die neuen Bedienungshilfen vor', href: 'https://www.apple.com/de/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/' },
          ],
        },
        {
          heading: 'In Ruhe ausprobieren',
          paragraphs: ['Beginne mit einer vertrauten Aufgabe, zum Beispiel dem Lesen einer bekannten Verpackung. So kannst du einschätzen, ob dir Bedienung und Ansagen helfen.', 'Die Links führen zu anderen Anbietern und öffnen im selben Tab. Mit „Zurück“ kommst du wieder hierher. Prüfe dort die aktuellen Geräteanforderungen, mögliche Kosten und den Umgang mit Kamerabildern.'],
          links: [{ text: 'Quellen und ausführlicher Vergleich im Projekt', href: `${repo}/blob/main/docs/existing-assistive-tools.md` }],
        },
      ],
    },
    imprint: {
      title: 'Impressum',
      intro: 'Anbieterangaben für das Projekt Percepta.',
      sections: [
        { heading: 'Anbieter gemäß § 5 DDG', paragraphs: [operator.name, operator.street, `${operator.locality}, Deutschland`] },
        { heading: 'Kontakt', paragraphs: ['Für allgemeine Fragen, Hinweise zur Website und Datenschutzanliegen. Bitte noch keine persönlichen Interview-Berichte senden.'], links: [{ text: operator.email, href: `mailto:${operator.email}` }, { text: 'Website des Betreibers: moinsen.dev', href: operator.website }] },
        { heading: 'Umsatzsteuer-Identifikationsnummer', paragraphs: [`USt-IdNr. gemäß § 27a UStG: ${operator.vatId}`] },
        { heading: 'Verantwortlich für die Inhalte', paragraphs: [`${operator.name}, ${operator.street}, ${operator.locality}, Deutschland.`] },
        { heading: 'Verbraucherstreitbeilegung', paragraphs: ['Der Betreiber nimmt nicht an Verfahren vor einer Verbraucherschlichtungsstelle teil; eine Verpflichtung dazu besteht nach seiner veröffentlichten Angabe nicht.'] },
        { heading: 'Datenschutz', paragraphs: ['Wie die aktuelle Website mit Daten umgeht, steht in den Datenschutzhinweisen.'], links: [{ text: 'Datenschutz und Kontakt', href: '/de/privacy/' }] },
      ],
    },
    collaborate: {
      title: 'Gemeinsam herausfinden, was hilft.',
      intro: 'Percepta braucht Alltagserfahrung, kritische Fragen und unterschiedliche Fähigkeiten. Es gibt noch keine fertige Lösung, die du übernehmen musst.',
      sections: [
        { heading: 'Für blinde und sehbehinderte Menschen', paragraphs: ['Du kennst deinen Alltag am besten. Eine kleine, konkrete Situation hilft mehr als eine lange Wunschliste. Die Vorlage funktioniert auch ohne KI und ohne GitHub-Konto.', 'Wir bereiten einen freiwilligen Pilot mit 3 bis 5 Erwachsenen vor. Anmeldung und privater Empfang sind noch nicht geöffnet.'], links: [{ text: 'Eine Erfahrung vorbereiten', href: '/de/participate/' }] },
        { heading: 'Für Entwicklerinnen und Entwickler', items: ['Die Website mit Tastatur und Screenreader prüfen.', 'Fehler mit reproduzierbaren Schritten melden, ohne persönliche Daten.', 'Technische Annahmen und Quellen in den Analysen hinterfragen.'], paragraphs: ['Technische Issues und Pull Requests sind willkommen. Bitte dort keine persönlichen Geschichten, Kontaktdaten oder Kamerabilder einstellen. Die Lizenzentscheidung ist noch offen.'], links: [{ text: 'Technische Issues auf GitHub', href: `${repo}/issues` }] },
        { heading: 'Für Selbsthilfe, Forschung und Praxispartner', paragraphs: ['Wir möchten verständliche Teilnahmewege, passende Alltagsaufgaben und faire Bedingungen gemeinsam entwickeln. Für den Pilot sind Betreuung, Aufwandsentschädigung und Rückmeldung noch zu klären.', 'Für allgemeine Fragen gibt es den Kontakt im Impressum. Der private Empfang von Interview-Berichten wird gesondert vorbereitet. Wir behaupten keine bestehenden Partnerschaften.'] },
        { heading: 'Woran wir als Nächstes arbeiten', items: ['Interview-Prompt und Textvorlage mit erfundenen Situationen prüfen.', 'Privaten Empfang, Verantwortung und Löschung klären.', 'Einen kleinen Beteiligungs-Pilot durchführen.', 'Daraus wenige Aufgaben für technische Vergleiche auswählen.'] },
      ],
    },
    research: {
      title: 'Offene Forschung. Sichtbare Grenzen.',
      intro: 'Wir beginnen mit Alltagssituationen und prüfen danach die Technik. Ein überzeugender KI-Text ist noch kein Nachweis, dass eine Aufgabe zuverlässig gelingt.',
      sections: [
        { heading: 'Bereits vorhanden', paragraphs: ['Eine erste Analyse von Codex und vier weitere Analysen mit Claude Code, JCode, OMP und DeepSeek liegen vor. Die gemeinsame Auswertung benennt Übereinstimmungen, Widersprüche und Grenzen.', 'Die Berichte sind technische Einschätzungen. Sie ersetzen keine Studie mit Betroffenen. Ein Merge auf GitHub bedeutet keine automatische Annahme aller Empfehlungen.'], links: [{ text: 'Synthese der Analysen lesen', href: `${repo}/blob/main/agents/codex/synthesis.md` }, { text: 'Projektstand und Entscheidungen', href: `${repo}/blob/main/state.md` }] },
        { heading: 'Was wir untersuchen wollen', items: ['Welche Information hilft bei einer vollständigen Alltagsaufgabe?', 'Wie gut funktionieren Bilder bei realer Kameraausrichtung und wechselndem Licht?', 'Wann sollte eine App nachfragen oder ausdrücklich keine Antwort geben?', 'Wie wirken Verzögerungen, Netzausfälle und zu viele Ansagen auf die Bedienung?'] },
        { heading: 'Besonders sorgfältig: Bewegung und Verkehr', paragraphs: ['Objekte beschreiben, Entfernungen messen und Bewegungsanweisungen geben sind verschiedene Aufgaben. Aktuell ist keine sichere Gehführung, Ampelentscheidung oder Hinderniserkennung durch Percepta nachgewiesen.', 'Im Interview werden keine Straßen-, Treppen- oder anderen gefährlichen Versuche angeleitet. Bestehende Mobilitätshilfen werden nicht ersetzt.'] },
        { heading: 'Nächste Nachweise', paragraphs: ['Zuerst prüfen wir den Beteiligungsweg. Danach sollen 3 bis 5 Erwachsene ihre Prioritäten einbringen. Erst aus diesen Ergebnissen werden wenige Abläufe für Modell- und Gerätevergleiche ausgewählt.', 'Es gibt noch keine Nutzerstudie, Modellmessung oder App-Abnahme. Anbieter und App-Plattform sind offen.'], links: [{ text: 'Recherche mit Quellen und Abrufdaten', href: `${repo}/blob/main/docs/research.md` }] },
      ],
    },
    accessibility: {
      title: 'Zugänglichkeit gehört zum Ausgangspunkt.',
      intro: 'Unser Prüfziel ist WCAG 2.2 AA. Wir behaupten keine geprüfte Konformität oder Zertifizierung.',
      sections: [
        { heading: 'So ist diese Seite aufgebaut', items: ['Sprunglink direkt zum Inhalt und klar benannte Bereiche.', 'Sichtbarer Tastaturfokus, große Bedienelemente und anpassbare Textgröße.', 'Alle Inhalte und Vorlagen ohne JavaScript lesbar.', 'Keine automatische Sprachausgabe, Animation oder Zeitbegrenzung.', 'Sprachwechsel zur entsprechenden deutschen oder englischen Seite.'] },
        { heading: 'Erfahrungen und Vorlagen verwenden', paragraphs: ['Eingabefeld, Vorschau, Absenden und Rücknahme benötigen JavaScript. Felder sind beschriftet; Fokuswechsel führen zur Vorschau oder Empfangsbestätigung. Fehler werden als Text gemeldet. Ohne JavaScript bleiben die Vorlagen lesbar und herunterladbar, eine direkte Einreichung ist dann nicht möglich.', 'Beide Vorlagen sind als Text auf der Seite und als Textdatei verfügbar. Der optionale Kopierknopf meldet Erfolg oder einen Fehler. Ohne JavaScript kannst du den Text markieren oder die Datei herunterladen.'] },
        { heading: 'Prüfungen und offene Tests', paragraphs: ['Automatisierte Prüfungen und Tastaturtests sind Teil der Entwicklung. Der aktuelle Prüfbericht nennt die tatsächlich ausgeführten Tests und Ergebnisse.', 'Manuelle Tests mit VoiceOver/Safari, NVDA/Firefox oder Chrome und mit blinden oder sehbehinderten Menschen stehen aus. Automatische Prüfungen können diese Tests nicht ersetzen.'], links: [{ text: 'Prüfbericht der Website', href: `${repo}/blob/main/agents/codex/website-validation.md` }, { text: 'WCAG 2.2 beim W3C', href: 'https://www.w3.org/TR/WCAG22/' }] },
        { heading: 'Eine Barriere melden', paragraphs: ['Technische Fehler kannst du im öffentlichen GitHub-Projekt oder per E-Mail melden. Ein GitHub-Konto ist für eine E-Mail nicht nötig. Bitte beschreibe die Barriere ohne persönliche oder gesundheitliche Einzelheiten.'], links: [{ text: 'Barriere per E-Mail melden', href: `mailto:${operator.email}` }, { text: 'Technischen Fehler auf GitHub melden', href: `${repo}/issues` }] },
      ],
    },
    privacy: {
      title: 'Du entscheidest über deine Erfahrung.',
      intro: 'Du kannst einen Entwurf im Browser schreiben und prüfen. Der private Empfang ist noch geschlossen. Ohne ausdrückliches Absenden erhält Percepta deinen Text nicht.',
      sections: [
        { heading: 'Was die Website tut', paragraphs: ['Der Percepta-Code enthält keine Analysewerkzeuge oder Werbetracker. Er setzt keine Cookies und speichert keine Angaben in Local Storage oder Session Storage. Text im Eingabefeld bleibt zunächst im Arbeitsspeicher des Browserfensters; ein bewusst gespeicherter Download liegt auf deinem Gerät. Beim Kopieren wird nur die gewählte Vorlage in die Zwischenablage geschrieben. Wir lesen deine Zwischenablage nicht.', 'Beim Aufruf verarbeitet die Hosting-Infrastruktur technische Daten wie IP-Adresse, angeforderte Adresse, Zeitpunkt und Browserinformationen. Ohne diese Übertragung kann die Seite nicht ausgeliefert werden. Percepta verwendet diese Daten nicht für Werbung oder persönliche Profile.'] },
        { heading: 'Privater Empfang: noch geschlossen', paragraphs: ['Vor einer Öffnung werden Moderation, Zugriffsrechte und Aufbewahrung verbindlich festgelegt. Der vorbereitete Ablauf zeigt den vollständigen Text, fragt deine ausdrückliche Zustimmung ab und bestätigt einen erfolgreichen Empfang. Ohne Bestätigung gilt die Übertragung als unbestätigt.', 'Vorgeschlagener Pilotbetrieb: Text, selbst gewählter Themenbereich, Sprache, Einreichungs- und Löschdatum sowie die Version deiner Zustimmung werden für die Bedarfserhebung gespeichert. Es werden keine Kontaktdaten abgefragt. Zugriff erhalten der Betreiber und ausdrücklich berechtigte Moderierende. Keine KI-Auswertung und keine automatische Veröffentlichung.', 'Vorgesehen sind 30 Tage in einer privaten Cloudflare-D1-Datenbank mit EU-Jurisdiktion. Die Datenbank selbst läuft und speichert in der EU; das sagt nichts über sämtliche Verarbeitung durch Cloudflares weltweites Netzwerk aus. Tägliche Bereinigung kann bis zu einen weiteren Tag benötigen. Cloudflares Wiederherstellungskopien können gelöschte Daten bis zu 30 weitere Tage enthalten.', 'Ein Löschcode ermöglicht das Zurückziehen aus der aktiven Datenbank ohne Konto. Der Code selbst wird nicht gespeichert, nur sein nicht umkehrbarer Prüfwert. Ohne Code oder Kontaktdaten können wir einen Bericht möglicherweise nicht zuordnen. Die technische Zugriffsbremse verarbeitet beim Absenden kurzzeitig die IP-Adresse; sie wird nicht in der Berichtsdatenbank gespeichert.', 'Für den vorgesehenen freiwilligen Pilot ist ausdrückliche, widerrufbare Zustimmung vorgesehen, auch für gegebenenfalls enthaltene Gesundheitsangaben. Ein Widerruf berührt die vorherige Verarbeitung nicht rückwirkend. Die fachliche Prüfung der Einwilligungs- und Betriebsbedingungen ist noch offen; deshalb sammeln wir noch keine echten Berichte.'] },
        { heading: 'Wenn du eine KI-App nutzt', paragraphs: ['Wenn du eine Vorlage und Antworten in eine KI-App eingibst, verarbeitet deren Anbieter diese Inhalte nach seinen eigenen Bedingungen. Percepta bekommt diesen Chat nicht automatisch.', 'Bitte keine Namen, Kontaktangaben, genauen Wege, Diagnosen oder Angaben über andere Personen eingeben. Du kannst stattdessen die Vorlage ohne KI verwenden.'] },
        { heading: 'Keine automatische Veröffentlichung', paragraphs: ['Der Interview-Prompt erstellt nur einen Entwurf. Er darf kein Issue anlegen, kein Konto verbinden und nichts versenden.', 'Ein späterer privater Empfang und eine spätere öffentliche Geschichte sind unterschiedliche Schritte. Öffentlicher Text und Ziel benötigen deine ausdrückliche Zustimmung. Namensnennung ist eine zusätzliche freiwillige Entscheidung.', 'GitHub-Issues sind öffentlich und zeigen das verwendete Konto. Entfernte Inhalte können in fremden Kopien weiterbestehen. Persönliche Berichte gehören derzeit nicht in Issues.'] },
        { heading: 'Verantwortlicher und Kontakt', paragraphs: [operator.name, `${operator.street}, ${operator.locality}, Deutschland.`, 'Für Fragen zum Datenschutz, zu deinen Daten oder zur Website kannst du dich per E-Mail melden. Ein moderierter Empfang für persönliche Interview-Berichte ist damit noch nicht eröffnet.'], links: [{ text: operator.email, href: `mailto:${operator.email}` }, { text: 'Vollständiges Impressum', href: '/de/imprint/' }] },
        { heading: 'Hosting bei Cloudflare', paragraphs: ['Stand: 21. Oktober 2026. Diese Hinweise betreffen percepta.moinsen.dev. Die statischen Seiten werden bei Cloudflare, Inc., USA, im Account des Betreibers bereitgestellt. OpenAI und KI-Modelle sind an diesem Website-Aufruf nicht beteiligt. Eine frühere, getrennte Sites-Vorschau hat eigene Zugangsvoraussetzungen.', 'Zweck ist die zuverlässige und geschützte Bereitstellung der Informationen. Als Grundlage verwenden wir Art. 6 Abs. 1 Buchst. f DSGVO: unser berechtigtes Interesse an einer erreichbaren und sicheren Website. Wir benötigen dafür keine persönlichen Erfahrungsberichte.', 'Cloudflare kann Daten auch außerhalb der EU verarbeiten. Die veröffentlichten Vertragsbedingungen beziehen einen Auftragsverarbeitungszusatz ein; dieser enthält Regelungen für Unterauftragnehmer und Standardvertragsklauseln für bestimmte internationale Übermittlungen. Eine ausschließliche EU-Verarbeitung wird nicht zugesagt.'], links: [{ text: 'Cloudflare: Datenverarbeitung und Übermittlungen', href: 'https://www.cloudflare.com/cloudflare-customer-dpa/' }, { text: 'Cloudflare: Datenschutzhinweise', href: 'https://www.cloudflare.com/privacypolicy/' }] },
        { heading: 'Sicherheitsprüfungen und Cookies', paragraphs: ['Cloudflare kann vor dem Seitenaufruf eine Sicherheitsprüfung durchführen. Dabei können technische Cookies, etwa zur Speicherung einer bestandenen Prüfung, verwendet werden. Diese Hosting-Funktionen sind zusätzlich zum Percepta-Code zu betrachten.', 'Die tatsächlich aktiven Schutzregeln und ihre Zugänglichkeit werden noch geprüft. Wenn du an einer Sicherheitsprüfung nicht vorbeikommst, melde die Barriere bitte über den Kontakt im Impressum.'], links: [{ text: 'Cloudflare erklärt seine technischen Cookies', href: 'https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/' }] },
        { heading: 'Speicherung und E-Mail-Kontakt', paragraphs: ['Percepta hat keine Besucherdatenbank. Zusätzliche Worker-Protokolle und deren Export sind in unserer Bereitstellung deaktiviert. Das verhindert nicht die Verarbeitung von Betriebs- und Sicherheitsdaten durch Cloudflare. Deren Aufbewahrung richtet sich laut Anbieter nach Verarbeitungszweck und gesetzlichen Pflichten; eine überprüfte einheitliche Tagesfrist liegt uns nicht vor.', 'Wenn du uns freiwillig eine E-Mail schickst, verarbeiten wir Absenderadresse, Inhalt und gegebenenfalls Anhänge zur Bearbeitung deiner Anfrage. Grundlage ist unser berechtigtes Interesse an der Beantwortung nach Art. 6 Abs. 1 Buchst. f DSGVO. Bitte sende keine persönlichen Interview-Berichte oder Gesundheitsangaben.', 'Die konkrete Konfiguration des Maildienstes und die Löschfristen werden noch dokumentiert. Für Fragen zur Speicherung oder eine Löschanfrage nutze bitte die angegebene Kontaktadresse. Die Vorbereitung des privaten Empfangs ist oben getrennt beschrieben.'] },
        { heading: 'Deine Datenschutzrechte', paragraphs: ['Du kannst im gesetzlichen Rahmen Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und gegebenenfalls Datenübertragbarkeit verlangen. Gegen eine Verarbeitung auf Grundlage berechtigter Interessen kannst du aus Gründen deiner besonderen Situation Widerspruch einlegen. Wende dich dafür an den oben genannten Verantwortlichen.', 'Du kannst dich bei einer Datenschutzaufsichtsbehörde beschweren, etwa beim Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit. Percepta trifft keine automatisierten Entscheidungen über dich.'], links: [{ text: 'Beschwerde beim Hamburgischen Datenschutzbeauftragten', href: 'https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen' }] },
      ],
    },
  },
  en: {
    tools: {
      title: 'Useful apps for everyday life.',
      intro: 'Read text, identify products or ask questions about an image. These four tools may support blind and low-vision people. Here are our recommendations to explore.',
      sections: [
        {
          heading: 'Which tool might suit you?',
          paragraphs: ['Updated: 21 October 2026. Our selection is based on information from the providers. We have not yet tested the apps with blind or low-vision people. Their order is not a ranking.', 'These tools can make mistakes. Use your established mobility aids around traffic, stairs and obstacles. An object description does not confirm that a path is clear.'],
          links: [
            { text: 'Android: reading and shopping with Google Lookout', href: '#lookout' },
            { text: 'iPhone or Android: everyday tasks with Seeing AI', href: '#seeing-ai' },
            { text: 'Android: camera questions with Guided Vision in Gemini Live', href: '#gemini' },
            { text: 'iPhone: use Apple’s built-in accessibility features', href: '#apple' },
          ],
        },
        {
          id: 'lookout', heading: 'Google Lookout',
          paragraphs: ['A possible starting point for reading text aloud or identifying food on Android. Lookout can also search for particular objects.'],
          items: ['Device and language: Android, with English and other languages supported. AI image descriptions and follow-up questions are English-only according to the store.', 'Limits: Search features and distance information depend on the device. Explore mode is a beta feature.'],
          links: [
            { text: 'Google Lookout on Google Play', href: 'https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal' },
            { text: 'Google’s guide to using Lookout', href: 'https://support.google.com/accessibility/android/answer/9031274?hl=en' },
          ],
        },
        {
          id: 'seeing-ai', heading: 'Microsoft Seeing AI',
          paragraphs: ['For reading, product information and questions about photos or documents. On iPhone, Find My Things can help you find personal objects again.'],
          items: ['Devices: iPhone and Android. Microsoft describes the app as free; the iPhone version supports English and other languages.', 'Limits: Features differ between platforms. The spatial World mode on iPhone requires LiDAR, a sensor available on certain devices.'],
          links: [
            { text: 'Seeing AI: Microsoft’s official website', href: 'https://www.seeingai.com/' },
            { text: 'Seeing AI on the Apple App Store', href: 'https://apps.apple.com/us/app/seeing-ai/id999062298' },
            { text: 'Seeing AI on Google Play', href: 'https://play.google.com/store/apps/details?id=com.microsoft.seeingai' },
          ],
        },
        {
          id: 'gemini', heading: 'Guided Vision in Gemini Live',
          paragraphs: ['For questions about what your camera is showing. Gemini also gives spoken guidance to help you aim the camera.'],
          items: ['Device and access: Gemini on Android. The feature is rolling out gradually. Google’s guide explains how to enable it and set up shortcuts.', 'Limits: Google explicitly says it is not intended for navigation, safe-travel guidance or obstacle detection.'],
          links: [
            { text: 'Set up Guided Vision: Google’s instructions', href: 'https://support.google.com/accessibility/android/answer/18365638?hl=en' },
            { text: 'Google introduces Guided Vision', href: 'https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/' },
          ],
        },
        {
          id: 'apple', heading: 'Apple VoiceOver and Magnifier',
          paragraphs: ['If you use an iPhone, explore its built-in accessibility features. They offer descriptions of your surroundings; supported features also let you ask questions.'],
          items: ['Requirements: Some features need a particular iOS version, Apple Intelligence or specific sensors. Language and region can affect availability.', 'Limits: Door, people and furniture detection require supported devices. Apple warns against relying on recognition for navigation.'],
          links: [
            { text: 'Apple’s guide: recognise your surroundings with VoiceOver', href: 'https://support.apple.com/en-ie/guide/iphone/iph37e6b3844/ios' },
            { text: 'Apple introduces its new accessibility features', href: 'https://www.apple.com/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/' },
          ],
        },
        {
          heading: 'Try a familiar task first',
          paragraphs: ['Start with a familiar task, such as reading a package you already know. This can help you decide whether the controls and spoken information work for you.', 'The links take you to other providers in the same tab. Use Back to return here. Check their current device requirements, any costs and how they handle camera images.'],
          links: [{ text: 'Sources and detailed comparison in the project (German)', href: `${repo}/blob/main/docs/existing-assistive-tools.md` }],
        },
      ],
    },
    imprint: {
      title: 'Legal notice',
      intro: 'Provider information for the Percepta project.',
      sections: [
        { heading: 'Provider under section 5 DDG', paragraphs: [operator.name, operator.street, `${operator.locality}, Germany`] },
        { heading: 'Contact', paragraphs: ['For general questions, website feedback and privacy requests. Please do not send personal interview reports yet.'], links: [{ text: operator.email, href: `mailto:${operator.email}` }, { text: 'Operator website: moinsen.dev', href: operator.website }] },
        { heading: 'VAT identification number', paragraphs: [`VAT ID under section 27a of the German VAT Act: ${operator.vatId}`] },
        { heading: 'Responsible for the content', paragraphs: [`${operator.name}, ${operator.street}, ${operator.locality}, Germany.`] },
        { heading: 'Consumer dispute resolution', paragraphs: ['The operator does not participate in proceedings before a consumer arbitration body and, according to his published statement, is not obliged to do so.'] },
        { heading: 'Privacy', paragraphs: ['The privacy notes explain how the current website handles data.'], links: [{ text: 'Privacy and contact', href: '/en/privacy/' }] },
      ],
    },
    collaborate: {
      title: 'Work together to find what helps.',
      intro: 'Percepta needs everyday experience, critical questions and different skills. There is no finished solution you are expected to adopt.',
      sections: [
        { heading: 'For blind and low-vision people', paragraphs: ['You know your everyday life best. One specific situation is more useful than a long wish list. The template also works without AI and without a GitHub account.', 'We are preparing a voluntary pilot with 3 to 5 adults. Registration and private submissions are not open yet.'], links: [{ text: 'Prepare an experience', href: '/en/participate/' }] },
        { heading: 'For developers', items: ['Check the website with a keyboard and screen reader.', 'Report technical problems with steps to reproduce them, without personal data.', 'Challenge technical assumptions and sources in the analyses.'], paragraphs: ['Technical issues and pull requests are welcome. Do not include personal stories, contact details or camera images. A licence has not yet been selected.'], links: [{ text: 'Technical issues on GitHub', href: `${repo}/issues` }] },
        { heading: 'For community groups, researchers and practice partners', paragraphs: ['We want to develop understandable participation, relevant everyday tasks and fair conditions together. Support, compensation and feedback for the pilot still need to be agreed.', 'For general questions, use the contact in the legal notice. Private intake for interview reports is being prepared separately. We do not claim any existing partnerships.'] },
        { heading: 'What comes next', items: ['Try the interview prompt and text template with fictional situations.', 'Set up private intake, responsibilities and deletion.', 'Run a small participation pilot.', 'Use the results to select a few tasks for technical comparisons.'] },
      ],
    },
    research: {
      title: 'Open research. Clear limits.',
      intro: 'We start with everyday situations and then evaluate technology. A convincing AI response does not prove that a task can be completed reliably.',
      sections: [
        { heading: 'What exists', paragraphs: ['An initial Codex analysis and four further analyses using Claude Code, JCode, OMP and DeepSeek are available. The synthesis identifies agreement, conflicting findings and limitations.', 'These are technical assessments. They do not replace research with participants. Merging a report on GitHub does not automatically accept all its recommendations.'], links: [{ text: 'Read the synthesis', href: `${repo}/blob/main/agents/codex/synthesis.md` }, { text: 'Project status and decisions', href: `${repo}/blob/main/state.md` }] },
        { heading: 'What we want to investigate', items: ['Which information helps someone complete an everyday task?', 'How well do images work with real camera positioning and changing light?', 'When should an app ask a question or explicitly decline to answer?', 'How do delays, loss of connectivity and excessive audio affect use?'] },
        { heading: 'Particular care: movement and traffic', paragraphs: ['Describing objects, measuring distances and giving movement instructions are different tasks. Percepta has not demonstrated safe walking guidance, traffic-light decisions or obstacle detection.', 'The interview does not direct anyone to carry out street, stair or other dangerous tests. Existing mobility aids are not replaced.'] },
        { heading: 'The next evidence we need', paragraphs: ['First we will check the participation process. Then 3 to 5 adults should contribute their priorities. Those results will guide the selection of a few tasks for model and device comparisons.', 'No participant study, model measurement or app acceptance test has been completed. Providers and app platform remain undecided.'], links: [{ text: 'Research sources and retrieval dates', href: `${repo}/blob/main/docs/research.md` }] },
      ],
    },
    accessibility: {
      title: 'Access is part of our starting point.',
      intro: 'Our test target is WCAG 2.2 AA. We do not claim verified conformance or certification.',
      sections: [
        { heading: 'How this website is built', items: ['A skip link to the content and clearly named page regions.', 'Visible keyboard focus, large controls and resizable text.', 'All content and templates readable without JavaScript.', 'No automatic speech, animation or time limits.', 'Language links to the equivalent English or German page.'] },
        { heading: 'Experiences and templates', paragraphs: ['The input field, preview, submission and withdrawal need JavaScript. Fields have labels; focus moves to the preview or receipt. Errors are reported in text. Without JavaScript, templates remain readable and downloadable, but direct submission is unavailable.', 'Both templates are available as page text and downloadable text files. The optional copy button reports success or failure. Without JavaScript, select the text or download the file.'] },
        { heading: 'Checks and outstanding tests', paragraphs: ['Automated checks and keyboard tests are part of development. The website validation report lists the checks actually performed and their results.', 'Manual tests with VoiceOver/Safari, NVDA/Firefox or Chrome and blind or low-vision people remain outstanding. Automated checks cannot replace them.'], links: [{ text: 'Website validation report', href: `${repo}/blob/main/agents/codex/website-validation.md` }, { text: 'WCAG 2.2 at W3C', href: 'https://www.w3.org/TR/WCAG22/' }] },
        { heading: 'Report a barrier', paragraphs: ['You can report technical problems in the public GitHub project or by email. Email does not require a GitHub account. Please describe the barrier without personal or health details.'], links: [{ text: 'Report a barrier by email', href: `mailto:${operator.email}` }, { text: 'Report a technical problem on GitHub', href: `${repo}/issues` }] },
      ],
    },
    privacy: {
      title: 'You decide what happens to your experience.',
      intro: 'You can write and review a draft in your browser. Private submissions are still closed. Percepta does not receive your text unless you explicitly submit it.',
      sections: [
        { heading: 'What the website does', paragraphs: ['The Percepta code contains no analytics or advertising trackers. It sets no cookies and does not store information in Local Storage or Session Storage. Text in the input field initially stays in the browser window’s memory; a file you deliberately download is saved on your device. Copying writes only the chosen template to your clipboard. We do not read your clipboard.', 'When you visit, the hosting infrastructure processes technical data such as your IP address, requested address, time and browser information. This transmission is needed to deliver the page. Percepta does not use this information for advertising or personal profiles.'] },
        { heading: 'Private submissions: still closed', paragraphs: ['Moderation, access and retention must be settled before opening. The prepared flow shows the complete text, asks for explicit consent and confirms successful receipt. Without a receipt, transmission remains unconfirmed.', 'Proposed pilot operation: the text, chosen topic, language, submission and deletion dates, and consent version are stored for requirements research. No contact details are requested. Access is limited to the operator and explicitly authorised moderators. There is no AI analysis or automatic publication.', 'The proposal is 30 days in a private Cloudflare D1 database with EU jurisdiction. The database itself runs and stores data in the EU; this does not cover all processing in Cloudflare’s global network. Daily cleanup may take up to one additional day. Cloudflare recovery copies may retain deleted data for up to 30 more days.', 'A deletion code allows withdrawal from the active database without an account. The code itself is not stored, only its one-way hash. Without the code or contact details, we may not be able to identify a report. A technical rate limiter briefly processes the IP address on submission; it is not stored in the report database.', 'The proposed voluntary pilot uses explicit, withdrawable consent, including for any health information present. Withdrawal does not retroactively affect earlier processing. Expert review of consent and operating conditions remains open, so we are not collecting real reports yet.'] },
        { heading: 'If you use an AI app', paragraphs: ['If you enter a template and answers into an AI app, its provider processes those contents under its own terms. Percepta does not automatically receive that conversation.', 'Please do not enter names, contact details, exact routes, diagnoses or information about other people. You can use the template without AI instead.'] },
        { heading: 'No automatic publication', paragraphs: ['The interview prompt only prepares a draft. It must not create an issue, connect an account or send anything.', 'Future private intake and a future public story are separate steps. The exact public text and destination need your explicit agreement. Being named is an additional optional choice.', 'GitHub issues are public and show the account used. Removed content may survive in other copies. Personal stories do not belong in issues at this stage.'] },
        { heading: 'Controller and contact', paragraphs: [operator.name, `${operator.street}, ${operator.locality}, Germany.`, 'For questions about privacy, your data or the website, you can contact us by email. This does not open a moderated intake channel for personal interview reports.'], links: [{ text: operator.email, href: `mailto:${operator.email}` }, { text: 'Full legal notice', href: '/en/imprint/' }] },
        { heading: 'Hosting with Cloudflare', paragraphs: ['Updated: 21 October 2026. These notes cover percepta.moinsen.dev. The static pages are hosted by Cloudflare, Inc., USA, in the operator’s account. OpenAI and AI models are not involved in this website visit. An earlier, separate Sites preview has its own access requirements.', 'The purpose is reliable and protected delivery of information. Our basis is Article 6(1)(f) GDPR: our legitimate interest in an available and secure website. We do not need personal experience reports for this.', 'Cloudflare may process data outside the EU. Its published service terms incorporate a data processing addendum with provisions for subprocessors and standard contractual clauses for certain international transfers. Processing exclusively within the EU is not promised.'], links: [{ text: 'Cloudflare: processing and data transfers', href: 'https://www.cloudflare.com/cloudflare-customer-dpa/' }, { text: 'Cloudflare privacy policy', href: 'https://www.cloudflare.com/privacypolicy/' }] },
        { heading: 'Security checks and cookies', paragraphs: ['Cloudflare may show a security check before you reach the page. Technical cookies may be used, for example to remember that a check was passed. These hosting features need to be considered in addition to the Percepta code.', 'The active protection rules and their accessibility are still being reviewed. If you cannot get past a security check, please report the barrier using the contact in the legal notice.'], links: [{ text: 'Cloudflare explains its technical cookies', href: 'https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/' }] },
        { heading: 'Retention and email contact', paragraphs: ['Percepta has no visitor database. Additional Worker logs and their export are disabled in our deployment. This does not prevent Cloudflare from processing operational and security data. The provider describes retention in terms of processing purposes and legal obligations; we do not have a verified single retention period in days.', 'If you choose to email us, we process your sender address, message and any attachments to handle your request. Our basis is our legitimate interest in replying under Article 6(1)(f) GDPR. Please do not send personal interview reports or health information.', 'The email service configuration and deletion periods are still being documented. For questions about retention or a deletion request, use the contact above. Preparation for private submissions is described separately above.'] },
        { heading: 'Your privacy rights', paragraphs: ['Within the conditions set by law, you can request access, correction, erasure, restriction of processing and, where applicable, data portability. You can object to processing based on legitimate interests on grounds relating to your particular situation. Contact the controller listed above.', 'You can lodge a complaint with a data protection authority, such as the Hamburg Commissioner for Data Protection and Freedom of Information. Percepta does not make automated decisions about you.'], links: [{ text: 'Lodge a complaint with the Hamburg data protection authority', href: 'https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen' }] },
      ],
    },
  },
};
