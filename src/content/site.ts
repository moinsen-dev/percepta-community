export type Lang = 'de' | 'en';
export const languages: Lang[] = ['de', 'en'];
export const repo = 'https://github.com/moinsen-dev/percepta-community';
export const pathFor = (lang: Lang, page = '') => `/${lang}/${page ? `${page}/` : ''}`;

export const labels = {
  de: {
    skip: 'Zum Inhalt', home: 'Startseite', nav: 'Hauptnavigation', footer: 'Weitere Informationen',
    participate: 'Erfahrungen vorbereiten', collaborate: 'Mitwirken', research: 'Forschungsstand',
    accessibility: 'Barrierefreiheit', privacy: 'Datenschutz & Kontakt',
    language: 'Read this page in English', languageShort: 'English',
    phase: 'Gemeinsam am Anfang', tagline: 'Alltag verstehen. Gemeinsam entwickeln.',
    note: 'Percepta ist ein Forschungsprojekt. Es gibt noch keine nutzbare Assistenz-App.',
    github: 'Projekt auf GitHub', copyright: 'Eine Initiative von moinsen',
  },
  en: {
    skip: 'Skip to content', home: 'Home', nav: 'Main navigation', footer: 'More information',
    participate: 'Prepare an experience', collaborate: 'Get involved', research: 'Research status',
    accessibility: 'Accessibility', privacy: 'Privacy & contact',
    language: 'Diese Seite auf Deutsch lesen', languageShort: 'Deutsch',
    phase: 'Starting together', tagline: 'Understand everyday life. Build together.',
    note: 'Percepta is a research project. There is no working assistance app yet.',
    github: 'Project on GitHub', copyright: 'An initiative by moinsen',
  },
};

export const home = {
  de: {
    title: 'Dein Alltag. Deine Fragen. Unser Ausgangspunkt.',
    intro: 'Wir erforschen, wie Technik blinde und sehbehinderte Menschen im Alltag unterstützen kann. Was hilfreich ist, bestimmen wir gemeinsam mit den Menschen, die es nutzen werden.',
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
    ready: 'Du kannst einen kurzen Interview-Prompt oder eine Vorlage ohne KI ausprobieren. Beides ist freiwillig. Ein privater Einreichungsweg wird noch vorbereitet.',
    limitsTitle: 'Was heute da ist — und was offen bleibt',
    limits: 'Die ersten technischen Analysen sind abgeschlossen. Diese Seite macht das Vorhaben und die nächsten Schritte zugänglich. Eine App, sichere Gehführung und eine Wirkung im Alltag sind noch nicht nachgewiesen.',
  },
  en: {
    title: 'Your everyday life. Your questions. Our starting point.',
    intro: 'We explore how technology could support blind and low-vision people in everyday life. What is useful will be decided together with the people who will use it.',
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
    ready: 'Try a short interview prompt or a template without AI. Both are optional. A private way to submit experiences is still being prepared.',
    limitsTitle: 'What exists today — and what remains open',
    limits: 'The first technical reviews are complete. This website explains the project and its next steps. An app, safe walking guidance and benefits in everyday use have not yet been demonstrated.',
  },
};

type Section = { heading: string; paragraphs?: string[]; items?: string[]; links?: { text: string; href: string }[] };
type Article = { title: string; intro: string; sections: Section[] };
export type ArticleKey = 'collaborate' | 'research' | 'accessibility' | 'privacy';
export const articles: Record<Lang, Record<ArticleKey, Article>> = {
  de: {
    collaborate: {
      title: 'Gemeinsam herausfinden, was hilft.',
      intro: 'Percepta braucht Alltagserfahrung, kritische Fragen und unterschiedliche Fähigkeiten. Es gibt noch keine fertige Lösung, die du übernehmen musst.',
      sections: [
        { heading: 'Für blinde und sehbehinderte Menschen', paragraphs: ['Du kennst deinen Alltag am besten. Eine kleine, konkrete Situation hilft mehr als eine lange Wunschliste. Die Vorlage funktioniert auch ohne KI und ohne GitHub-Konto.', 'Wir bereiten einen freiwilligen Pilot mit 3 bis 5 Erwachsenen vor. Anmeldung und privater Empfang sind noch nicht geöffnet.'], links: [{ text: 'Eine Erfahrung vorbereiten', href: '/de/participate/' }] },
        { heading: 'Für Entwicklerinnen und Entwickler', items: ['Die Website mit Tastatur und Screenreader prüfen.', 'Fehler mit reproduzierbaren Schritten melden, ohne persönliche Daten.', 'Technische Annahmen und Quellen in den Analysen hinterfragen.'], paragraphs: ['Technische Issues und Pull Requests sind willkommen. Bitte dort keine persönlichen Geschichten, Kontaktdaten oder Kamerabilder einstellen. Die Lizenzentscheidung ist noch offen.'], links: [{ text: 'Technische Issues auf GitHub', href: `${repo}/issues` }] },
        { heading: 'Für Selbsthilfe, Forschung und Praxispartner', paragraphs: ['Wir möchten verständliche Teilnahmewege, passende Alltagsaufgaben und faire Bedingungen gemeinsam entwickeln. Für den Pilot sind Betreuung, Aufwandsentschädigung und Rückmeldung noch zu klären.', 'Ein privater Kontaktweg wird vorbereitet. Wir behaupten keine bestehenden Partnerschaften.'] },
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
        { heading: 'Vorlagen verwenden', paragraphs: ['Beide Vorlagen sind als Text auf der Seite und als Textdatei verfügbar. Der optionale Kopierknopf meldet Erfolg oder einen Fehler. Ohne JavaScript kannst du den Text markieren oder die Datei herunterladen.'] },
        { heading: 'Prüfungen und offene Tests', paragraphs: ['Automatisierte Prüfungen und Tastaturtests sind Teil der Entwicklung. Der aktuelle Prüfbericht nennt die tatsächlich ausgeführten Tests und Ergebnisse.', 'Manuelle Tests mit VoiceOver/Safari, NVDA/Firefox oder Chrome und mit blinden oder sehbehinderten Menschen stehen aus. Automatische Prüfungen können diese Tests nicht ersetzen.'], links: [{ text: 'Prüfbericht der Website', href: `${repo}/blob/main/agents/codex/website-validation.md` }, { text: 'WCAG 2.2 beim W3C', href: 'https://www.w3.org/TR/WCAG22/' }] },
        { heading: 'Eine Barriere melden', paragraphs: ['Technische Fehler kannst du im öffentlichen GitHub-Projekt melden. Bitte keine persönlichen oder gesundheitlichen Angaben hinzufügen. Ein privater Kontaktweg ohne GitHub-Konto fehlt derzeit; er muss vor Öffnung der Teilnahme eingerichtet werden.'], links: [{ text: 'Technischen Fehler melden', href: `${repo}/issues` }] },
      ],
    },
    privacy: {
      title: 'Du entscheidest über deine Erfahrung.',
      intro: 'Auf dieser ersten Website werden keine Interviews eingereicht. Sie bietet Informationen und Vorlagen zum eigenen Ausprobieren.',
      sections: [
        { heading: 'Was die Website tut', paragraphs: ['Die Seite enthält keine Analysewerkzeuge, Werbetracker, Anmeldung oder Formulare zur Übermittlung persönlicher Berichte. Beim Kopieren wird nur die gewählte Vorlage in die Zwischenablage geschrieben. Wir lesen deine Zwischenablage nicht.', 'Das Aufrufen einer Website übermittelt technische Verbindungsdaten an den Hosting-Dienst. Die endgültigen Betreiberangaben und Angaben zur Verarbeitung durch das Hosting müssen vor dem öffentlichen Start ergänzt und geprüft werden.'] },
        { heading: 'Wenn du eine KI-App nutzt', paragraphs: ['Wenn du eine Vorlage und Antworten in eine KI-App eingibst, verarbeitet deren Anbieter diese Inhalte nach seinen eigenen Bedingungen. Percepta bekommt diesen Chat nicht automatisch.', 'Bitte keine Namen, Kontaktangaben, genauen Wege, Diagnosen oder Angaben über andere Personen eingeben. Du kannst stattdessen die Vorlage ohne KI verwenden.'] },
        { heading: 'Keine automatische Veröffentlichung', paragraphs: ['Der Interview-Prompt erstellt nur einen Entwurf. Er darf kein Issue anlegen, kein Konto verbinden und nichts versenden.', 'Ein späterer privater Empfang und eine spätere öffentliche Geschichte sind unterschiedliche Schritte. Öffentlicher Text und Ziel benötigen deine ausdrückliche Zustimmung. Namensnennung ist eine zusätzliche freiwillige Entscheidung.', 'GitHub-Issues sind öffentlich und zeigen das verwendete Konto. Entfernte Inhalte können in fremden Kopien weiterbestehen. Persönliche Berichte gehören derzeit nicht in Issues.'] },
        { heading: 'Betreiber und Kontakt: noch zu ergänzen', paragraphs: ['Verbindliche Betreiberangaben, Kontaktadresse und Verantwortliche für Moderation und Löschung sind angefragt. Diese Version ist deshalb für die interne Prüfung vorgesehen. Die öffentliche Freischaltung und der private Teilnahmeweg warten auf diese Angaben.'] },
      ],
    },
  },
  en: {
    collaborate: {
      title: 'Work together to find what helps.',
      intro: 'Percepta needs everyday experience, critical questions and different skills. There is no finished solution you are expected to adopt.',
      sections: [
        { heading: 'For blind and low-vision people', paragraphs: ['You know your everyday life best. One specific situation is more useful than a long wish list. The template also works without AI and without a GitHub account.', 'We are preparing a voluntary pilot with 3 to 5 adults. Registration and private submissions are not open yet.'], links: [{ text: 'Prepare an experience', href: '/en/participate/' }] },
        { heading: 'For developers', items: ['Check the website with a keyboard and screen reader.', 'Report technical problems with steps to reproduce them, without personal data.', 'Challenge technical assumptions and sources in the analyses.'], paragraphs: ['Technical issues and pull requests are welcome. Do not include personal stories, contact details or camera images. A licence has not yet been selected.'], links: [{ text: 'Technical issues on GitHub', href: `${repo}/issues` }] },
        { heading: 'For community groups, researchers and practice partners', paragraphs: ['We want to develop understandable participation, relevant everyday tasks and fair conditions together. Support, compensation and feedback for the pilot still need to be agreed.', 'A private contact channel is being prepared. We do not claim any existing partnerships.'] },
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
        { heading: 'Using the templates', paragraphs: ['Both templates are available as page text and downloadable text files. The optional copy button reports success or failure. Without JavaScript, select the text or download the file.'] },
        { heading: 'Checks and outstanding tests', paragraphs: ['Automated checks and keyboard tests are part of development. The website validation report lists the checks actually performed and their results.', 'Manual tests with VoiceOver/Safari, NVDA/Firefox or Chrome and blind or low-vision people remain outstanding. Automated checks cannot replace them.'], links: [{ text: 'Website validation report', href: `${repo}/blob/main/agents/codex/website-validation.md` }, { text: 'WCAG 2.2 at W3C', href: 'https://www.w3.org/TR/WCAG22/' }] },
        { heading: 'Report a barrier', paragraphs: ['You can report technical problems in the public GitHub project. Please do not include personal or health information. A private contact channel without a GitHub account is currently missing; it must be set up before participation opens.'], links: [{ text: 'Report a technical problem', href: `${repo}/issues` }] },
      ],
    },
    privacy: {
      title: 'You decide what happens to your experience.',
      intro: 'This first website does not accept interview submissions. It provides information and templates for you to try.',
      sections: [
        { heading: 'What the website does', paragraphs: ['The website contains no analytics, advertising trackers, registration or forms for sending personal stories. Copying writes only the chosen template to your clipboard. We do not read your clipboard.', 'Visiting a website sends technical connection data to the hosting service. Confirmed operator details and information about processing by the host must be added and reviewed before public launch.'] },
        { heading: 'If you use an AI app', paragraphs: ['If you enter a template and answers into an AI app, its provider processes those contents under its own terms. Percepta does not automatically receive that conversation.', 'Please do not enter names, contact details, exact routes, diagnoses or information about other people. You can use the template without AI instead.'] },
        { heading: 'No automatic publication', paragraphs: ['The interview prompt only prepares a draft. It must not create an issue, connect an account or send anything.', 'Future private intake and a future public story are separate steps. The exact public text and destination need your explicit agreement. Being named is an additional optional choice.', 'GitHub issues are public and show the account used. Removed content may survive in other copies. Personal stories do not belong in issues at this stage.'] },
        { heading: 'Operator and contact: to be added', paragraphs: ['Confirmed operator details, a contact address and people responsible for moderation and deletion have been requested. This version is for internal review. Public launch and the private participation channel await those details.'] },
      ],
    },
  },
};
