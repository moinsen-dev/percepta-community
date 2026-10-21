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
    participate: 'Mitmachen', stories: 'Geschichten', about: 'Über Percepta', tools: 'Hilfe finden',
    accessibility: 'Barrierefreiheit', privacy: 'Datenschutz & Kontakt', imprint: 'Impressum',
    language: 'Read this page in English', languageShort: 'English',
    tagline: 'Alltag verstehen. Gemeinsam entwickeln.',
    note: 'Percepta ist ein Forschungsprojekt. Es gibt noch keine nutzbare Assistenz-App.',
    github: 'Projekt auf GitHub', copyright: 'Eine Initiative von moinsen',
  },
  en: {
    skip: 'Skip to content', home: 'Home', nav: 'Main navigation', footer: 'More information',
    participate: 'Take part', stories: 'Stories', about: 'About', tools: 'Find help',
    accessibility: 'Accessibility', privacy: 'Privacy & contact', imprint: 'Legal notice',
    language: 'Diese Seite auf Deutsch lesen', languageShort: 'Deutsch',
    tagline: 'Understand everyday life. Build together.',
    note: 'Percepta is a research project. There is no working assistance app yet.',
    github: 'Project on GitHub', copyright: 'An initiative by moinsen',
  },
};

export const home = {
  de: {
    title: 'Alltagshilfen für blinde und sehbehinderte Menschen.',
    intro: 'Welche App liest Briefe vor? Wer berät, wenn das Sehen nachlässt? Hier findest du Hilfen, die es heute schon gibt. Und du kannst mitbestimmen, was wir als Nächstes verbessern.',
    description: 'Wegweiser zu Apps, Beratung und Training für blinde und sehbehinderte Menschen: Texte lesen, Produkte erkennen, Fragen stellen, sicherer unterwegs sein. Dazu: Erfahrungen teilen und Percepta mitgestalten.',
    findHelp: 'Passende Hilfe finden',
    share: 'Erfahrung teilen',
    tasksTitle: 'Was möchtest du tun?',
    tasks: [
      ['Texte und Briefe lesen', 'lesen'],
      ['Beim Einkaufen Produkte erkennen', 'einkaufen'],
      ['Fragen zu dem stellen, was vor dir ist', 'fragen'],
      ['Mit einem sehenden Menschen per Video schauen', 'mensch'],
      ['Eigene Gegenstände wiederfinden', 'wiederfinden'],
      ['Neu mit Sehverlust: Beratung und Training', 'beratung'],
    ],
    whyTitle: 'Warum ich Percepta mache',
    why: [
      'Percepta hat mit zwei Begegnungen angefangen. Die Frau eines Freundes ist vor Kurzem erblindet. Sie hat mir selbst erzählt, wie sich ihr Alltag verändert hat, und mich ein Stück daran teilhaben lassen.',
      'Kurz danach wollte ein Mann eine meiner Apps testen und erwähnte nebenbei, dass er blind ist. Ich war mir nicht sicher, ob er meine App überhaupt bedienen kann. Er hat mir geschildert, wie sein Tag aussieht, und gefragt, ob man nicht eine App für blinde Menschen bauen könnte.',
      'Wir reden jeden Tag darüber, wie schnell KI Software baut. Ich möchte diese Möglichkeiten dafür nutzen, dass andere Menschen selbstständiger durch ihren Alltag kommen. Percepta ist nicht kommerziell; ich mache es neben meiner Arbeit. Daraus soll ein frei zugängliches Open-Source-Projekt werden.',
    ],
    whySignature: 'Uli (Ulrich Diedrichsen), moinsen aus Hamburg',
    projectTitle: 'Gemeinsam herausfinden, was noch fehlt.',
    project: 'Viele Hilfen gibt es schon. Trotzdem bleiben im Alltag Momente, in denen die richtige Information fehlt: beim Einkaufen, bei einer Frage, im Gespräch mit anderen Menschen oder unterwegs. Percepta sammelt solche Momente gemeinsam mit blinden und sehbehinderten Menschen. Erst danach entscheiden wir, was wir bauen.',
    steps: [
      ['Zuhören', 'Du erzählst von einer Situation aus deinem Alltag, in deinen Worten.'],
      ['Gemeinsam auswählen', 'Wir suchen mit Betroffenen die Situationen aus, bei denen Hilfe am meisten bringt.'],
      ['Ehrlich testen', 'Wir prüfen vorhandene Apps und neue Ideen an genau diesen Aufgaben.'],
    ],
    aboutLink: 'Mehr über Percepta',
    readyTitle: 'Erzähl uns von deinem Alltag.',
    ready: 'Eine Situation genügt. Du kannst sie selbst aufschreiben oder dich von einer KI durch ein kurzes Gespräch führen lassen.',
    questions: [
      ['Was ist Percepta?', 'Percepta ist ein Projekt von moinsen aus Hamburg. Wir wollen gemeinsam mit blinden und sehbehinderten Menschen herausfinden, welche Unterstützung im Alltag fehlt. Eine eigene Percepta-App gibt es noch nicht.'],
      ['Kostet das etwas?', 'Nein. Die Website, der Wegweiser und das Mitmachen sind kostenlos. Ob eine empfohlene App etwas kostet, steht beim jeweiligen Anbieter.'],
      ['Brauche ich KI oder ein GitHub-Konto?', 'Nein. Du kannst deine Erfahrung auch ohne KI aufschreiben. Ein Konto brauchst du nicht.'],
    ],
  },
  en: {
    title: 'Everyday help for blind and low-vision people.',
    intro: 'Which app reads letters aloud? Who can advise you when your sight changes? Find help that already exists today. And help decide what we improve next.',
    description: 'A guide to apps, advice and training for blind and low-vision people: reading text, recognising products, asking questions, getting around more safely. Share your experience and help shape Percepta.',
    findHelp: 'Find the right help',
    share: 'Share your experience',
    tasksTitle: 'What would you like to do?',
    tasks: [
      ['Read text and letters', 'reading'],
      ['Recognise products while shopping', 'shopping'],
      ['Ask about what is in front of you', 'asking'],
      ['Look at something together with a sighted person', 'person'],
      ['Find your own belongings', 'finding'],
      ['New to sight loss: advice and training', 'advice'],
    ],
    whyTitle: 'Why I am doing Percepta',
    why: [
      'Percepta began with two encounters. A friend’s wife recently lost her sight. She told me herself how her everyday life has changed and let me share a little of it.',
      'Shortly afterwards, a man wanted to test one of my apps and mentioned in passing that he is blind. I was not sure he could use my app at all. He described what his day looks like and asked whether someone could build an app for blind people.',
      'Every day we talk about how fast AI can build software. I want to use these possibilities to help other people get through their day more independently. Percepta is not commercial; I do it alongside my job. The aim is a freely available open-source project.',
    ],
    whySignature: 'Uli (Ulrich Diedrichsen), moinsen, Hamburg',
    projectTitle: 'Finding out together what is still missing.',
    project: 'Many tools already exist. Still, there are everyday moments when the right information is missing: while shopping, when you have a question, with other people or on the way somewhere. Percepta collects these moments together with blind and low-vision people. Only then do we decide what to build.',
    steps: [
      ['Listen', 'You describe one situation from your everyday life, in your own words.'],
      ['Choose together', 'With blind and low-vision people, we pick the situations where help matters most.'],
      ['Test honestly', 'We check existing apps and new ideas against exactly these tasks.'],
    ],
    aboutLink: 'More about Percepta',
    readyTitle: 'Tell us about your everyday life.',
    ready: 'One situation is enough. Write it down yourself or let an AI guide you through a short conversation.',
    questions: [
      ['What is Percepta?', 'Percepta is a project by moinsen from Hamburg, Germany. Together with blind and low-vision people, we want to find out what support is missing in everyday life. There is no Percepta app yet.'],
      ['Does it cost anything?', 'No. The website, the guide and taking part are free. Whether a recommended app costs money is stated by its provider.'],
      ['Do I need AI or a GitHub account?', 'No. You can also write down your experience without AI. You do not need an account.'],
    ],
  },
};

type Section = { id?: string; heading: string; paragraphs?: string[]; items?: string[]; links?: { text: string; href: string }[] };
type Article = { title: string; intro: string; sections: Section[] };
export type ArticleKey = 'about' | 'accessibility' | 'privacy' | 'imprint' | 'tools';
export const articles: Record<Lang, Record<ArticleKey, Article>> = {
  de: {
    tools: {
      title: 'Apps und Beratung für blinde und sehbehinderte Menschen.',
      intro: 'Welche Hilfe passt zu dir? Wähle aus, was du gerade tun möchtest. Zu jeder Aufgabe findest du Apps und Beratungsangebote, die du heute schon nutzen kannst, mit Links zu Anleitungen.',
      sections: [
        {
          heading: 'Was möchtest du tun?',
          links: [
            { text: 'Texte und Briefe lesen', href: '#lesen' },
            { text: 'Beim Einkaufen Produkte erkennen', href: '#einkaufen' },
            { text: 'Fragen zu dem stellen, was vor dir ist', href: '#fragen' },
            { text: 'Mit einem sehenden Menschen per Video schauen', href: '#mensch' },
            { text: 'Eigene Gegenstände wiederfinden', href: '#wiederfinden' },
            { text: 'Neu mit Sehverlust: Beratung und Training', href: '#beratung' },
            { text: 'Unterwegs: Was Apps nicht leisten', href: '#unterwegs' },
          ],
          paragraphs: ['Stand: 21. Oktober 2026. Die Angaben stammen von den Anbietern. Wir haben die Apps noch nicht selbst mit Betroffenen getestet; die Reihenfolge ist keine Rangliste.'],
        },
        {
          id: 'lesen', heading: 'Texte und Briefe lesen',
          paragraphs: ['Mehrere Apps lesen gedruckten Text vor, zum Beispiel Briefe, Etiketten oder Speisekarten. Du hältst die Kamera über den Text, die App liest ihn vor.'],
          links: [
            { text: 'Seeing AI: liest Texte und Dokumente vor (iPhone, Android)', href: '#seeing-ai' },
            { text: 'Google Lookout: liest Texte und Dokumente vor (Android)', href: '#lookout' },
            { text: 'Be My Eyes: KI beschreibt ein Foto, oder ein Mensch liest mit (iPhone, Android)', href: '#be-my-eyes' },
          ],
        },
        {
          id: 'einkaufen', heading: 'Beim Einkaufen Produkte erkennen',
          paragraphs: ['Diese Apps erkennen Produkte über die Verpackung oder den Barcode und sagen dir, was du in der Hand hältst.'],
          links: [
            { text: 'Google Lookout: erkennt Lebensmittel über Verpackung und Barcode (Android)', href: '#lookout' },
            { text: 'Seeing AI: erkennt Produkte über den Barcode (iPhone, Android)', href: '#seeing-ai' },
            { text: 'Be My Eyes: Freiwillige schauen per Video mit (iPhone, Android)', href: '#be-my-eyes' },
          ],
        },
        {
          id: 'fragen', heading: 'Fragen zu dem stellen, was vor dir ist',
          paragraphs: ['Mit diesen Hilfen kannst du ein Foto oder das Live-Kamerabild beschreiben lassen und Rückfragen stellen, etwa: „Welche Farbe hat das Hemd?“'],
          links: [
            { text: 'Guided Vision in Gemini Live: Fragen zum Live-Kamerabild, mit Hinweisen zum Ausrichten (Android)', href: '#gemini' },
            { text: 'Be My AI in Be My Eyes: Fragen zu einem Foto (iPhone, Android)', href: '#be-my-eyes' },
            { text: 'Seeing AI: Fragen zu Fotos und Dokumenten (iPhone, Android)', href: '#seeing-ai' },
            { text: 'Apple VoiceOver und Lupe: Fragen zur Umgebung (iPhone)', href: '#apple' },
          ],
        },
        {
          id: 'mensch', heading: 'Mit einem sehenden Menschen per Video schauen',
          paragraphs: ['Manchmal ist ein Mensch die bessere Hilfe als eine KI. Be My Eyes verbindet dich per Videoanruf mit Freiwilligen. Sie schauen durch deine Kamera und sagen dir, was sie sehen.'],
          links: [{ text: 'Mehr zu Be My Eyes', href: '#be-my-eyes' }],
        },
        {
          id: 'wiederfinden', heading: 'Eigene Gegenstände wiederfinden',
          paragraphs: ['Zwei Apps helfen beim Suchen: Seeing AI lernt deine eigenen Gegenstände und meldet sich mit Tönen, wenn die Kamera sie findet. Lookout sucht nach bestimmten Dingen wie Türen oder Tassen.'],
          links: [
            { text: 'Seeing AI: „Meine Dinge suchen“ (iPhone)', href: '#seeing-ai' },
            { text: 'Google Lookout: Suchen-Modus (Android, abhängig vom Gerät)', href: '#lookout' },
          ],
        },
        {
          id: 'beratung', heading: 'Neu mit Sehverlust: Beratung und Training',
          paragraphs: ['Wenn das Sehen nachlässt, fühlen sich Wege und Handgriffe oft plötzlich unsicher an. Dafür gibt es Beratung von Menschen, die das selbst kennen, und Training für Wege und Alltag. Apps sind dabei nur ein Teil.'],
          items: [
            'Blickpunkt Auge: kostenlose, unabhängige Beratung rund ums Sehen, meist von selbst betroffenen Menschen. Auch Angehörige sind willkommen. Telefon 030 28 53 87-183; dort vermittelt man dir Beratung in deiner Nähe oder berät dich am Telefon.',
            'Orientierungs- und Mobilitätstraining: Eine Rehabilitationslehrerin oder ein Rehabilitationslehrer übt mit dir den Langstock und deine Wege, meist an deinem Wohnort. Die gesetzliche Krankenkasse kann die Kosten übernehmen. Dafür braucht es eine ärztliche Verordnung für den Langstock und die Schulung.',
            'Lebenspraktische Fähigkeiten: Training für Kochen, Haushalt, Kleidung und das Markieren von Geräten. Wer die Kosten übernimmt, klärst du am besten mit der Beratung.',
            'Selbsthilfe vor Ort: Die Landesvereine des Deutschen Blinden- und Sehbehindertenverbands (DBSV) bieten Beratung, Austausch und Freizeitangebote.',
            'Smartphone mit Screenreader: VoiceOver auf dem iPhone und TalkBack auf Android lesen den Bildschirm vor. Die Anleitungen der Hersteller erklären Einschalten und Gesten.',
          ],
          links: [
            { text: 'Blickpunkt Auge anrufen: 030 28 53 87-183', href: 'tel:+4930285387183' },
            { text: 'Blickpunkt Auge: Beratung in deiner Nähe finden', href: 'https://blickpunkt-auge.de/' },
            { text: 'Rehalehrer:innen finden beim Bundesverband der Rehabilitationslehrer', href: 'https://www.rehalehrer.de/' },
            { text: 'DBSV: Was Orientierung und Mobilität umfasst', href: 'https://www.dbsv.org/orientierung-mobilitaet-o-m.html' },
            { text: 'DBSV: Landesverein in deiner Nähe', href: 'https://www.dbsv.org/landesvereine.html' },
            { text: 'Apple: VoiceOver auf dem iPhone einschalten und üben', href: 'https://support.apple.com/de-de/guide/iphone/iph3e2e415f/ios' },
            { text: 'Google: Android mit TalkBack verwenden', href: 'https://support.google.com/accessibility/android/answer/6283677?hl=de' },
          ],
        },
        {
          id: 'unterwegs', heading: 'Unterwegs: Was Apps nicht leisten',
          paragraphs: ['Alle Apps auf dieser Seite können sich irren. Für Straßenverkehr, Treppen und Hindernisse bleiben Langstock, Führhund und Mobilitätstraining die bewährten Hilfen. Mehrere Anbieter schreiben ausdrücklich, dass ihre Apps dafür nicht gedacht sind. Be My Eyes rät zum Beispiel davon ab, damit eine Straße zu überqueren.'],
        },
        {
          id: 'lookout', heading: 'Google Lookout',
          paragraphs: ['Ein guter Einstieg, wenn du auf Android Texte vorlesen lassen oder Lebensmittel erkennen möchtest. Lookout kann auch nach bestimmten Gegenständen suchen.'],
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
          id: 'be-my-eyes', heading: 'Be My Eyes',
          paragraphs: ['Verbindet dich per Videoanruf mit sehenden Freiwilligen. Mit Be My AI kannst du außerdem ein Foto beschreiben lassen und Rückfragen stellen.'],
          items: ['Geräte und Kosten: iPhone und Android, laut Anbieter kostenlos. Die App gibt es auf Deutsch; Freiwillige sprechen viele Sprachen. Nutzung ab 18 Jahren.', 'Grenzen: Be My AI kann sich irren. Laut Nutzungsbedingungen nicht bei Notfällen, Medikamenten, Allergenen oder zum Überqueren von Straßen verwenden. Fotos für Be My AI verarbeitet auch ein Dienstleister in den USA.'],
          links: [
            { text: 'Be My Eyes: Website des Anbieters (Englisch)', href: 'https://www.bemyeyes.com/' },
            { text: 'Be My Eyes im Apple App Store', href: 'https://apps.apple.com/de/app/be-my-eyes/id905177575' },
            { text: 'Be My Eyes im Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.bemyeyes.bemyeyes&hl=de' },
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
          paragraphs: ['Wenn du ein iPhone nutzt, lohnt sich ein Blick auf die eingebauten Bedienungshilfen. Sie beschreiben die Umgebung; mit unterstützten Funktionen kannst du auch Fragen stellen.'],
          items: ['Voraussetzungen: Je nach Funktion sind eine bestimmte iOS-Version, Apple Intelligence oder besondere Sensoren nötig. Sprache und Region können die Verfügbarkeit einschränken.', 'Grenzen: Die Erkennung von Türen, Personen und Möbeln funktioniert nur auf unterstützten Geräten. Apple warnt davor, sich bei der Navigation auf die Erkennung zu verlassen.'],
          links: [
            { text: 'Apple-Anleitung: Umgebung mit VoiceOver erkennen', href: 'https://support.apple.com/de-de/guide/iphone/iph37e6b3844/ios' },
            { text: 'Apple stellt die neuen Bedienungshilfen vor', href: 'https://www.apple.com/de/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/' },
          ],
        },
        {
          heading: 'In Ruhe ausprobieren',
          paragraphs: ['Beginne mit einer vertrauten Aufgabe, zum Beispiel dem Lesen einer bekannten Verpackung. So merkst du, ob dir Bedienung und Ansagen helfen.', 'Die Links führen zu anderen Anbietern und öffnen im selben Tab; mit „Zurück“ kommst du wieder hierher. Prüfe dort Geräteanforderungen, mögliche Kosten und den Umgang mit Kamerabildern. Fehlt eine Hilfe, die dir viel bringt? Schreib uns über den Kontakt im Impressum.'],
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
    about: {
      title: 'Über Percepta',
      intro: 'Percepta will gemeinsam mit blinden und sehbehinderten Menschen herausfinden, welche Unterstützung im Alltag wirklich fehlt. Erst danach bauen wir Technik dafür.',
      sections: [
        { heading: 'Worum es geht', paragraphs: ['Es geht um mehr als Navigation. Uns interessieren vier Bereiche des Alltags:'], items: ['Einkaufen: Produkte unterscheiden und Angaben lesen.', 'Fragen stellen: eine Situation verstehen und selbst entscheiden, welche Information gerade wichtig ist.', 'Mit Menschen sprechen: Begegnungen und Gespräche, ohne die eigene Entscheidung abzugeben.', 'Sich orientieren: Eingänge, Räume und Wege besser verstehen.'] },
        { heading: 'Warum es Percepta gibt', paragraphs: [...home.de.why, `— ${home.de.whySignature}`], links: [{ text: 'Kontakt und Impressum', href: '/de/imprint/' }] },
        { heading: 'So gehen wir vor', items: ['Zuhören: Menschen erzählen von Situationen aus ihrem Alltag, in ihren eigenen Worten.', 'Gemeinsam auswählen: Mit Betroffenen suchen wir die Situationen aus, bei denen Hilfe am meisten bringt.', 'Ehrlich testen: Wir prüfen vorhandene Apps und neue Ideen an genau diesen Aufgaben. Wenn eine vorhandene Hilfe reicht, ist auch das ein gutes Ergebnis.'], paragraphs: ['Wir arbeiten offen: Pläne, Entscheidungen und Quellen liegen öffentlich auf GitHub. Partnerorganisationen gibt es bisher nicht.'] },
        { heading: 'Wo wir gerade stehen', paragraphs: ['Es gibt diese Website mit einem Wegweiser zu vorhandenen Hilfen und eine Gesprächshilfe, mit der du eine Alltagserfahrung beschreiben kannst. Als Nächstes führen wir erste Gespräche mit Betroffenen. Eine eigene Percepta-App gibt es noch nicht.'], links: [{ text: 'Projektstand und Entscheidungen auf GitHub', href: `${repo}/blob/main/state.md` }, { text: 'Recherche mit Quellen', href: `${repo}/blob/main/docs/research.md` }] },
        { heading: 'Vorsicht bei Bewegung und Verkehr', paragraphs: ['Einen Gegenstand beschreiben, eine Entfernung messen und eine Gehanweisung geben sind verschiedene Aufgaben. Percepta gibt keine Weganweisungen und ersetzt keine Mobilitätshilfen. In unseren Gesprächen leiten wir keine Versuche an Straßen, Treppen oder anderen gefährlichen Stellen an.'] },
        { id: 'mitwirken', heading: 'Mitwirken', items: ['Blinde und sehbehinderte Menschen: Erzähl uns von einer Situation aus deinem Alltag. Das geht ohne KI und ohne Konto.', 'Entwicklerinnen und Entwickler: Prüft die Website mit Tastatur und Screenreader, meldet Fehler und hinterfragt unsere Quellen. Bitte keine persönlichen Geschichten in öffentliche Issues.', 'Selbsthilfe, Forschung und Praxis: Wir suchen faire Wege, um Alltagsaufgaben gemeinsam auszuwählen und zu prüfen. Schreib uns.'], links: [{ text: 'Eine Erfahrung teilen', href: '/de/participate/' }, { text: 'Technische Issues auf GitHub', href: `${repo}/issues` }, { text: `E-Mail an ${operator.email}`, href: `mailto:${operator.email}` }] },
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
        { heading: 'Öffentliche Geschichten', paragraphs: ['Wenn du in der Vorschau ausdrücklich zustimmst, veröffentlichen wir genau deinen Text sofort ohne deinen Namen: als Issue im öffentlichen GitHub-Repository moinsen-dev/percepta-community und auf der Seite „Geschichten“. Angelegt wird das Issue mit dem Zugang des Projekts. Deine IP-Adresse und dein Name werden dabei nicht übermittelt oder gespeichert.', 'Grundlage ist deine ausdrückliche Einwilligung, auch für enthaltene Angaben zu deiner Sehbehinderung (Art. 6 Abs. 1 Buchst. a und Art. 9 Abs. 2 Buchst. a DSGVO). GitHub, Inc. (USA) verarbeitet den Text als Anbieter der Plattform. Öffentliche Texte können von anderen kopiert oder gespeichert werden; das können wir nicht rückgängig machen.', 'Wir lesen jede Geschichte nach der Veröffentlichung und entfernen erkennbare Angaben oder Beiträge, die nicht hierher gehören. Texte mit E-Mail-Adresse, Telefonnummer oder Link nimmt die Website nicht an. Für die Begrenzung auf 30 Geschichten pro Tag zählen wir nur die Anzahl, nicht den Inhalt. Du kannst deine Einwilligung jederzeit widerrufen: Schreib uns mit der Nummer deiner Geschichte, dann löschen wir sie.'] },
        { heading: 'Keine automatische Veröffentlichung', paragraphs: ['Der Interview-Prompt erstellt nur einen Entwurf. Er darf kein Issue anlegen, kein Konto verbinden und nichts versenden.', 'Ein späterer privater Empfang und eine spätere öffentliche Geschichte sind unterschiedliche Schritte. Öffentlicher Text und Ziel benötigen deine ausdrückliche Zustimmung. Namensnennung ist eine zusätzliche freiwillige Entscheidung.', 'GitHub-Issues sind öffentlich und zeigen das verwendete Konto. Entfernte Inhalte können in fremden Kopien weiterbestehen. Lege deshalb bitte keine eigenen Issues mit persönlichen Geschichten an; nutze den Weg über die Vorschau auf unserer Seite.'] },
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
      title: 'Apps and advice for blind and low-vision people.',
      intro: 'Which help suits you? Choose what you want to do right now. For each task you will find apps and advice services you can use today, with links to guides.',
      sections: [
        {
          heading: 'What would you like to do?',
          links: [
            { text: 'Read text and letters', href: '#reading' },
            { text: 'Recognise products while shopping', href: '#shopping' },
            { text: 'Ask about what is in front of you', href: '#asking' },
            { text: 'Look at something together with a sighted person', href: '#person' },
            { text: 'Find your own belongings', href: '#finding' },
            { text: 'New to sight loss: advice and training', href: '#advice' },
            { text: 'Out and about: what apps cannot do', href: '#out-and-about' },
          ],
          paragraphs: ['Last checked: 21 October 2026. The details come from the providers. We have not yet tested the apps ourselves with blind or low-vision people; the order is not a ranking. Advice and training services are listed for Germany.'],
        },
        {
          id: 'reading', heading: 'Read text and letters',
          paragraphs: ['Several apps read printed text aloud, such as letters, labels or menus. You hold the camera over the text and the app reads it.'],
          links: [
            { text: 'Seeing AI: reads text and documents (iPhone, Android)', href: '#seeing-ai' },
            { text: 'Google Lookout: reads text and documents (Android)', href: '#lookout' },
            { text: 'Be My Eyes: AI describes a photo, or a person reads along (iPhone, Android)', href: '#be-my-eyes' },
          ],
        },
        {
          id: 'shopping', heading: 'Recognise products while shopping',
          paragraphs: ['These apps recognise products from the packaging or barcode and tell you what you are holding.'],
          links: [
            { text: 'Google Lookout: recognises food from packaging and barcodes (Android)', href: '#lookout' },
            { text: 'Seeing AI: recognises products from barcodes (iPhone, Android)', href: '#seeing-ai' },
            { text: 'Be My Eyes: volunteers look along by video (iPhone, Android)', href: '#be-my-eyes' },
          ],
        },
        {
          id: 'asking', heading: 'Ask about what is in front of you',
          paragraphs: ['With these tools you can have a photo or the live camera view described and ask follow-up questions, such as “What colour is the shirt?”'],
          links: [
            { text: 'Guided Vision in Gemini Live: questions about the live camera view, with hints for aiming (Android)', href: '#gemini' },
            { text: 'Be My AI in Be My Eyes: questions about a photo (iPhone, Android)', href: '#be-my-eyes' },
            { text: 'Seeing AI: questions about photos and documents (iPhone, Android)', href: '#seeing-ai' },
            { text: 'Apple VoiceOver and Magnifier: questions about your surroundings (iPhone)', href: '#apple' },
          ],
        },
        {
          id: 'person', heading: 'Look at something together with a sighted person',
          paragraphs: ['Sometimes a person helps more than an AI. Be My Eyes connects you with volunteers by video call. They look through your camera and tell you what they see.'],
          links: [{ text: 'More about Be My Eyes', href: '#be-my-eyes' }],
        },
        {
          id: 'finding', heading: 'Find your own belongings',
          paragraphs: ['Two apps help you search: Seeing AI learns your own items and plays sounds when the camera finds them. Lookout searches for certain things such as doors or cups.'],
          links: [
            { text: 'Seeing AI: “Find My Things” (iPhone)', href: '#seeing-ai' },
            { text: 'Google Lookout: Find mode (Android, depends on the device)', href: '#lookout' },
          ],
        },
        {
          id: 'advice', heading: 'New to sight loss: advice and training',
          paragraphs: ['When your sight gets worse, familiar routes and everyday tasks can suddenly feel unsafe. There is advice from people who know this from their own experience, and training for getting around and daily life. Apps are only one part of it. The services below are in Germany; the websites are in German.'],
          items: [
            'Blickpunkt Auge: free, independent advice about sight loss, mostly from people who are affected themselves. Relatives are welcome too. Phone +49 30 28 53 87-183; they put you in touch with advice near you or advise you by phone.',
            'Orientation and mobility training: a rehabilitation teacher practises the long cane and your routes with you, usually where you live. Statutory health insurance can cover the costs. This requires a medical prescription for the long cane and the training.',
            'Daily living skills: training for cooking, housework, clothing and marking appliances. Ask the advice service who may cover the costs.',
            'Local self-help: the regional associations of the German Federation of the Blind and Partially Sighted (DBSV) offer advice, exchange and leisure activities.',
            'Smartphone screen readers: VoiceOver on iPhone and TalkBack on Android read the screen aloud. The manufacturers’ guides explain how to turn them on and use the gestures.',
          ],
          links: [
            { text: 'Call Blickpunkt Auge: +49 30 28 53 87-183', href: 'tel:+4930285387183' },
            { text: 'Blickpunkt Auge: find advice near you (German)', href: 'https://blickpunkt-auge.de/' },
            { text: 'Find a rehabilitation teacher (German)', href: 'https://www.rehalehrer.de/' },
            { text: 'DBSV in English', href: 'https://www.dbsv.org/dbsv-in-english.html' },
            { text: 'DBSV: regional associations (German)', href: 'https://www.dbsv.org/landesvereine.html' },
            { text: 'Apple: turn on and practise VoiceOver on iPhone', href: 'https://support.apple.com/en-gb/guide/iphone/iph3e2e415f/ios' },
            { text: 'Google: get started on Android with TalkBack', href: 'https://support.google.com/accessibility/android/answer/6283677?hl=en' },
          ],
        },
        {
          id: 'out-and-about', heading: 'Out and about: what apps cannot do',
          paragraphs: ['Every app on this page can make mistakes. For traffic, stairs and obstacles, the long cane, guide dog and mobility training remain the proven aids. Several providers state explicitly that their apps are not meant for this. Be My Eyes, for example, advises against using it to cross a street.'],
        },
        {
          id: 'lookout', heading: 'Google Lookout',
          paragraphs: ['A good place to start if you use Android and want text read aloud or food identified. Lookout can also search for certain objects.'],
          items: ['Device and language: Android, including German and English. According to the store, AI image descriptions with follow-up questions are available only in English.', 'Limits: search features and distance information depend on the device. Explore mode is in beta.'],
          links: [
            { text: 'Google Lookout on Google Play', href: 'https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal' },
            { text: 'Google’s Lookout guide', href: 'https://support.google.com/accessibility/android/answer/9031274?hl=en' },
          ],
        },
        {
          id: 'seeing-ai', heading: 'Microsoft Seeing AI',
          paragraphs: ['For reading, product information and questions about photos or documents. On iPhone, “Find My Things” can help you find personal items.'],
          items: ['Devices: iPhone and Android. Free according to Microsoft.', 'Limits: features differ between platforms. The spatial iPhone “World” mode requires LiDAR, a sensor in certain devices.'],
          links: [
            { text: 'Seeing AI: Microsoft’s official website', href: 'https://www.seeingai.com/' },
            { text: 'Seeing AI on the Apple App Store', href: 'https://apps.apple.com/app/seeing-ai/id999062298' },
            { text: 'Seeing AI on Google Play', href: 'https://play.google.com/store/apps/details?id=com.microsoft.seeingai' },
          ],
        },
        {
          id: 'be-my-eyes', heading: 'Be My Eyes',
          paragraphs: ['Connects you with sighted volunteers by video call. With Be My AI you can also have a photo described and ask follow-up questions.'],
          items: ['Devices and cost: iPhone and Android, free according to the provider. Volunteers speak many languages. For people aged 18 and over.', 'Limits: Be My AI can make mistakes. According to the terms, do not use it for emergencies, medication, allergens or crossing streets. Photos sent to Be My AI are also processed by a service provider in the USA.'],
          links: [
            { text: 'Be My Eyes website', href: 'https://www.bemyeyes.com/' },
            { text: 'Be My Eyes on the Apple App Store', href: 'https://apps.apple.com/app/be-my-eyes/id905177575' },
            { text: 'Be My Eyes on Google Play', href: 'https://play.google.com/store/apps/details?id=com.bemyeyes.bemyeyes' },
          ],
        },
        {
          id: 'gemini', heading: 'Guided Vision in Gemini Live',
          paragraphs: ['For questions about what your camera is showing. Gemini also gives hints on how to aim the camera.'],
          items: ['Device and access: Gemini on Android. The feature is rolling out gradually. Google’s guide explains how to turn it on and use the shortcut.', 'Limits: despite the name, Google says the feature is not intended for navigation, safe walking guidance or obstacle detection.'],
          links: [
            { text: 'Set up Guided Vision: Google’s guide', href: 'https://support.google.com/accessibility/android/answer/18365638?hl=en' },
            { text: 'Google introduces Guided Vision', href: 'https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/' },
          ],
        },
        {
          id: 'apple', heading: 'Apple VoiceOver and Magnifier',
          paragraphs: ['If you use an iPhone, the built-in accessibility features are worth a look. They describe your surroundings, and supported features let you ask questions.'],
          items: ['Requirements: depending on the feature, a specific iOS version, Apple Intelligence or particular sensors are needed. Language and region can limit availability.', 'Limits: detection of doors, people and furniture works only on supported devices. Apple warns against relying on detection for navigation.'],
          links: [
            { text: 'Apple guide: detect your surroundings with VoiceOver', href: 'https://support.apple.com/en-gb/guide/iphone/iph37e6b3844/ios' },
            { text: 'Apple announces its new accessibility features', href: 'https://www.apple.com/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/' },
          ],
        },
        {
          heading: 'Try things at your own pace',
          paragraphs: ['Start with a familiar task, such as reading a package you know. That way you can tell whether the controls and announcements help you.', 'The links lead to other providers and open in the same tab; use “Back” to return here. Check device requirements, possible costs and how camera images are handled there. Is a tool missing that helps you a lot? Let us know via the contact details in the legal notice.'],
          links: [{ text: 'Sources and detailed comparison (German)', href: `${repo}/blob/main/docs/existing-assistive-tools.md` }],
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
    about: {
      title: 'About Percepta',
      intro: 'Percepta wants to find out, together with blind and low-vision people, what support is really missing in everyday life. Only then do we build technology for it.',
      sections: [
        { heading: 'What it is about', paragraphs: ['It is about more than navigation. We are interested in four areas of everyday life:'], items: ['Shopping: telling products apart and reading details.', 'Asking questions: understanding a situation and deciding for yourself which information matters right now.', 'Interacting with people: encounters and conversations, while keeping control of your own decisions.', 'Finding your way: understanding entrances, rooms and routes.'] },
        { heading: 'Why Percepta exists', paragraphs: [...home.en.why, `— ${home.en.whySignature}`], links: [{ text: 'Contact and legal notice', href: '/en/imprint/' }] },
        { heading: 'How we work', items: ['Listen: people describe situations from their everyday lives in their own words.', 'Choose together: with blind and low-vision people, we pick the situations where help matters most.', 'Test honestly: we check existing apps and new ideas against exactly these tasks. If an existing tool is good enough, that is a good result too.'], paragraphs: ['We work in the open: plans, decisions and sources are public on GitHub. There are no partner organisations yet.'] },
        { heading: 'Where we are now', paragraphs: ['There is this website with a guide to existing help and a conversation guide you can use to describe an everyday experience. Next, we will hold first conversations with blind and low-vision people. There is no Percepta app yet.'], links: [{ text: 'Project status and decisions on GitHub (German)', href: `${repo}/blob/main/state.md` }, { text: 'Research and sources (German)', href: `${repo}/blob/main/docs/research.md` }] },
        { heading: 'Care around movement and traffic', paragraphs: ['Describing an object, measuring a distance and giving walking directions are different tasks. Percepta does not give directions and does not replace mobility aids. Our conversations never ask anyone to try anything at roads, stairs or other dangerous places.'] },
        { id: 'get-involved', heading: 'Get involved', items: ['Blind and low-vision people: tell us about one situation from your everyday life. No AI or account needed.', 'Developers: check the website with a keyboard and screen reader, report bugs and question our sources. Please do not post personal stories in public issues.', 'Self-help groups, research and practice: we are looking for fair ways to choose and test everyday tasks together. Get in touch.'], links: [{ text: 'Share an experience', href: '/en/participate/' }, { text: 'Technical issues on GitHub', href: `${repo}/issues` }, { text: `Email ${operator.email}`, href: `mailto:${operator.email}` }] },
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
        { heading: 'Public stories', paragraphs: ['If you explicitly agree in the preview, we publish exactly your text right away without your name: as an issue in the public GitHub repository moinsen-dev/percepta-community and on the “Stories” page. The issue is created with the project’s access. Your IP address and name are not transmitted or stored in the process.', 'The legal basis is your explicit consent, including for any information about your visual impairment (Art. 6(1)(a) and Art. 9(2)(a) GDPR). GitHub, Inc. (USA) processes the text as the platform provider. Public texts can be copied or saved by others; we cannot undo that.', 'We read every story after publication and remove recognisable details or posts that do not belong here. The website does not accept texts containing an email address, phone number or link. To limit publishing to 30 stories a day, we count only the number, not the content. You can withdraw your consent at any time: write to us with your story’s number and we will delete it.'] },
        { heading: 'No automatic publication', paragraphs: ['The interview prompt only prepares a draft. It must not create an issue, connect an account or send anything.', 'Future private intake and a future public story are separate steps. The exact public text and destination need your explicit agreement. Being named is an additional optional choice.', 'GitHub issues are public and show the account used. Removed content may survive in other copies. So please do not open your own issues with personal stories; use the preview on our website instead.'] },
        { heading: 'Controller and contact', paragraphs: [operator.name, `${operator.street}, ${operator.locality}, Germany.`, 'For questions about privacy, your data or the website, you can contact us by email. This does not open a moderated intake channel for personal interview reports.'], links: [{ text: operator.email, href: `mailto:${operator.email}` }, { text: 'Full legal notice', href: '/en/imprint/' }] },
        { heading: 'Hosting with Cloudflare', paragraphs: ['Updated: 21 October 2026. These notes cover percepta.moinsen.dev. The static pages are hosted by Cloudflare, Inc., USA, in the operator’s account. OpenAI and AI models are not involved in this website visit. An earlier, separate Sites preview has its own access requirements.', 'The purpose is reliable and protected delivery of information. Our basis is Article 6(1)(f) GDPR: our legitimate interest in an available and secure website. We do not need personal experience reports for this.', 'Cloudflare may process data outside the EU. Its published service terms incorporate a data processing addendum with provisions for subprocessors and standard contractual clauses for certain international transfers. Processing exclusively within the EU is not promised.'], links: [{ text: 'Cloudflare: processing and data transfers', href: 'https://www.cloudflare.com/cloudflare-customer-dpa/' }, { text: 'Cloudflare privacy policy', href: 'https://www.cloudflare.com/privacypolicy/' }] },
        { heading: 'Security checks and cookies', paragraphs: ['Cloudflare may show a security check before you reach the page. Technical cookies may be used, for example to remember that a check was passed. These hosting features need to be considered in addition to the Percepta code.', 'The active protection rules and their accessibility are still being reviewed. If you cannot get past a security check, please report the barrier using the contact in the legal notice.'], links: [{ text: 'Cloudflare explains its technical cookies', href: 'https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/' }] },
        { heading: 'Retention and email contact', paragraphs: ['Percepta has no visitor database. Additional Worker logs and their export are disabled in our deployment. This does not prevent Cloudflare from processing operational and security data. The provider describes retention in terms of processing purposes and legal obligations; we do not have a verified single retention period in days.', 'If you choose to email us, we process your sender address, message and any attachments to handle your request. Our basis is our legitimate interest in replying under Article 6(1)(f) GDPR. Please do not send personal interview reports or health information.', 'The email service configuration and deletion periods are still being documented. For questions about retention or a deletion request, use the contact above. Preparation for private submissions is described separately above.'] },
        { heading: 'Your privacy rights', paragraphs: ['Within the conditions set by law, you can request access, correction, erasure, restriction of processing and, where applicable, data portability. You can object to processing based on legitimate interests on grounds relating to your particular situation. Contact the controller listed above.', 'You can lodge a complaint with a data protection authority, such as the Hamburg Commissioner for Data Protection and Freedom of Information. Percepta does not make automated decisions about you.'], links: [{ text: 'Lodge a complaint with the Hamburg data protection authority', href: 'https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen' }] },
      ],
    },
  },
};
