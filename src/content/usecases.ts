// Working map of everyday use cases, 28 October 2026. Own assessment, not yet reviewed with blind or low-vision people.
// Model timings come from our own measurements in a separate test app on that date (iPhone 16 Pro Max, Pixel 10a).

type Group = { heading: string; items: string[] };
type Branch = { id: string; heading: string; intro?: string; groups: Group[] };
type Speed = 'once' | 'fast' | 'slow';
type Step = { say: string; how: string; tags: { label: string; speed: Speed }[]; setup?: boolean };

export type UseCaseMap = {
  title: string;
  intro: string;
  status: string[];
  jump: { text: string; href: string }[];
  branchesHeading: string;
  branchesIntro: string;
  branches: Branch[];
  matrix: {
    heading: string;
    intro: string;
    caption: string;
    rowHeader: string;
    sumLabel: string;
    columns: string[];
    levels: [string, string, string];
    rows: { name: string; values: (0 | 1 | 2)[] }[];
    legend: string;
  };
  findingsHeading: string;
  findings: { heading: string; text: string }[];
  flow: { heading: string; intro: string; speeds: Record<Speed, string>; steps: Step[]; note: string };
  next: { heading: string; paragraphs: string[]; links: { text: string; href: string }[] };
};

const de: UseCaseMap = {
  title: 'Use-Case-Karte: das ganze Bild.',
  intro: 'Bevor wir einzelne Funktionen bauen, wollen wir das Ganze verstehen: wer welche Hilfe braucht, an welchen Orten, mit welcher Absicht – und was die heutige Technik dafür leisten kann. Diese Karte ordnet das. Du kannst von groben Bereichen bis zu einzelnen Situationen hineinzoomen.',
  status: [
    'Stand: 28. Oktober 2026. Das ist unsere eigene Arbeitskarte, noch nicht mit blinden und sehbehinderten Menschen geprüft. Sie ist keine Funktionsliste und keine Entscheidung, was gebaut wird. Welche Situationen zuerst wichtig sind, wählen wir gemeinsam aus.',
    'Die Zeitangaben zu Sprachmodellen stammen aus eigenen Messungen in einer getrennten Test-App vom selben Tag. Sie zeigen, was auf einem Telefon technisch möglich ist, nicht, dass eine Hilfe im Alltag funktioniert.',
  ],
  jump: [
    { text: 'Die Karte: Menschen, Orte, Absichten, Fähigkeiten, Technik, Grenzen, Bausteine', href: '#karte' },
    { text: 'Querschnitt: welche Absicht welche Fähigkeit braucht', href: '#querschnitt' },
    { text: 'Ein Ablauf: „Ich will Zähne putzen“', href: '#ablauf' },
  ],
  branchesHeading: 'Die Karte',
  branchesIntro: 'Sieben Bereiche. Jeder lässt sich aufklappen. Die Reihenfolge geht vom Menschen zur Technik: Erst wer und wo, dann was jemand tun möchte, dann was ein System dafür können müsste.',
  branches: [
    {
      id: 'menschen', heading: 'Menschen',
      groups: [
        { heading: 'Lebenslang blind', items: ['Kann: Langstock oder Führhund, Training in Orientierung und Mobilität, VoiceOver in hohem Tempo, innere Karten, Tasten und Hören.', 'Braucht: Gedrucktes, Anzeigen, Schilder, Linien, Produkte – das, was im Moment vor ihr oder ihm ist.', 'Möchte: knappe, schnelle Antworten ohne Bevormundung, Richtungen bezogen auf den eigenen Körper.', 'Risiko: zu viel Gerede, lange Wartezeit, schlechte Bedienbarkeit mit VoiceOver.'] },
        { heading: 'Neu erblindet', items: ['Kann: visuelles Gedächtnis, kennt Wohnung und Wege von früher, kennt das Smartphone visuell.', 'Braucht: einen Einstieg, Zutrauen, Hilfe beim Ausrichten der Kamera, einfache Bedienung, den Weg zu Beratung und Rehabilitation.', 'Möchte: Farbe und Aussehen beschrieben bekommen, Geduld, einen Menschen auf Knopfdruck.', 'Risiko: verlässt sich zu früh beim Gehen auf Technik, fühlt sich überfordert.'] },
        { heading: 'Sehrest oder fortschreitender Sehverlust', items: ['Vergrößerung, Kontrast und Sprache kombiniert.', 'Wechselnde Tagesform, Blendung, Dämmerung.'] },
        { heading: 'Weitere Einschränkungen', items: ['Hören: Vibration, Braillezeile.', 'Motorik: nur eine Hand frei, Sprache statt Gesten.', 'Hohes Alter, wenig Technikerfahrung.'] },
        { heading: 'Umfeld', items: ['Angehörige, Assistenz, Mitbewohner.', 'Fachkräfte für Orientierung und Mobilität sowie Lebenspraktische Fähigkeiten.', 'Betreiber von Gebäuden und Verkehr.'] },
      ],
    },
    {
      id: 'orte', heading: 'Orte',
      groups: [
        { heading: 'Zuhause', items: ['Räume: Flur, Bad, Schlafzimmer, Küche, Wohnzimmer.', 'Feste Orte: Bett, Schrank, Waschbecken, Herd, Sofa, Türen.', 'Wandernde Dinge: Schlüssel, Brille, Fernbedienung, Telefon, Tasse.'] },
        { heading: 'Fremde Innenräume', items: ['Hotelzimmer, Arztpraxis, Büro, Behörde.', 'Restaurant, Supermarkt, Kaufhaus, Bahnhofshalle.', 'Treppe, Aufzug, Rolltreppe, Toilette, Empfang.'] },
        { heading: 'Draußen bekannt', items: ['Weg zur Bäckerei, zur Haltestelle, zur Arbeit.'] },
        { heading: 'Draußen fremd', items: ['Neue Adresse, Umstieg, Baustelle, Veranstaltung.'] },
        { heading: 'Übergänge', items: ['Haustür, einen Eingang finden, ein- und aussteigen.'] },
      ],
    },
    {
      id: 'absichten', heading: 'Absichten',
      intro: 'Was jemand erreichen möchte. Die Beispiele sind Gesprächsanlässe, keine ausgewählten Funktionen.',
      groups: [
        { heading: 'Sich orientieren', items: ['„Wo bin ich?“ – den Raum erkennen.', '„Ich will Zähne putzen“ – zum Bad, zum Waschbecken, zur Zahnbürste.', '„Zum Bett“, „zum Schrank“.', 'Ein fremdes Hotelzimmer kennenlernen: Was ist wo?', 'Den Eingang eines Geschäfts finden, die letzten Meter.', 'Stockwerk, Aufzugtasten, Wegweiser.'] },
        { heading: 'Finden und merken', items: ['„Wo ist mein Schlüssel?“', '„Merk dir: Brille auf dem Nachttisch.“', 'Etwas Heruntergefallenes finden.', 'Ist der Herd aus? Ist das Fenster zu? Brennt Licht?'] },
        { heading: 'Lesen und verstehen', items: ['Post, Briefe, Formulare.', 'Gerätedisplays: Herd, Waschmaschine, Kaffeemaschine, Thermostat.', 'Packungen: Preis, Haltbarkeit, Zutaten, Allergene.', 'Medikamente: Name und Dosis – hohes Risiko bei Fehlern.', 'Schilder, Fahrplan, Abfahrtstafel, Linie am Bus.', 'Automaten und Bildschirme ohne Barrierefreiheit.', 'Geldscheine.'] },
        { heading: 'Haushalt', items: ['Kochen: Zutaten, Füllstand.', 'Kleidung: Farbe, Muster, Flecken, kombinieren.', 'Putzen: Flecken, Krümel.'] },
        { heading: 'Unterwegs', items: ['Welche Linie fährt ein, mit welchem Ziel?', 'Tür am Fahrzeug, freier Sitzplatz.', 'Bahnsteig und Gleis.', 'Straßenname, eine Kreuzung beschreiben – keine Ampelauskunft.', '„Bin ich beim richtigen Geschäft?“'] },
        { heading: 'Begegnung', items: ['Personal finden: Uniform, Namensschild.', 'Warteschlange, freier Schalter.', 'Einen Menschen zur Hilfe zuschalten.', 'Keine Identifikation fremder Menschen.'] },
        { heading: 'Freizeit und Teilhabe', items: ['Fotos beschreiben, eigene und geteilte.', 'Speisekarte.', 'Museum, Natur, Veranstaltungen.'] },
        { heading: 'Einstieg und Lernen', items: ['Die erste Aufgabe wieder selbst erledigen.', 'Das Ausrichten der Kamera üben.', 'Die eigene Wohnung neu kennenlernen.', 'Den Weg zu Beratung, Orientierungs- und Alltagstraining finden.'] },
      ],
    },
    {
      id: 'faehigkeiten', heading: 'Fähigkeiten',
      intro: 'Was ein System können müsste, damit diese Absichten gelingen.',
      groups: [
        { heading: 'Wahrnehmen', items: ['Text lesen.', 'Gegenstände finden und benennen.', 'Szene und Raum beschreiben.', 'Einen Raum einordnen, mit Angabe der Sicherheit.', 'Tiefe und Entfernung messen.', 'Veränderungen bemerken (Video, später).'] },
        { heading: 'Verorten', items: ['Wo im Raum stehe ich, wohin schaue ich?', 'In welchem Raum bin ich?', 'Draußen: Satellitenortung und Kompass.'] },
        { heading: 'Erinnern', items: ['Ein Modell der Wohnung: Räume, Türen, feste Möbel.', 'Dinge mit Ort und Zeitpunkt: „zuletzt gesehen“.', 'Gewohnheiten und Vorlieben.'] },
        { heading: 'Planen', items: ['Aus einer Absicht ein Ziel machen.', 'Vom Ziel zum Weg durch die Räume.', 'Nachfragen, wenn etwas mehrdeutig ist.'] },
        { heading: 'Führen', items: ['Richtung und Entfernung: Uhrzeit, Schritte.', 'Töne und Vibration: wärmer, kälter.', 'Wegpunkte ansagen: Tür, Flur.', 'Die Ankunft bestätigen.'] },
        { heading: 'Sprechen', items: ['Spracheingabe auf dem Gerät.', 'Sprachausgabe und VoiceOver.', 'Stil: knapp oder begleitend.', 'Unterbrechen, schweigen.'] },
        { heading: 'Absichern', items: ['Unsicherheit benennen.', '„Nicht erkannt“ heißt nicht „nicht da“.', 'Keine Gehführung, keine Ampelauskunft.', 'Einen Menschen zuschalten.', 'Die Daten anderer Menschen schützen.'] },
      ],
    },
    {
      id: 'technik', heading: 'Technik heute',
      intro: 'Bausteine, die es heute gibt. Messwerte stammen aus unserer Test-App, Herstellerangaben sind als solche gekennzeichnet.',
      groups: [
        { heading: 'Sprachmodelle auf dem Telefon (LFM3 von Liquid AI)', items: ['Bildmodell LFM3-VL-2B: Text lesen, Gegenstände mit Position und Namen. Eigene Messung: 2 bis 8 Sekunden pro Bild auf einem iPhone 16 Pro Max, 15 bis 20 Sekunden auf einem Pixel 10a.', 'Textmodell LFM3-1.7B: Dialog, Planung, Werkzeuge. Eigene Messung: 35 bis 38 Wörter-Teile (Token) pro Sekunde auf dem iPhone, 13,5 auf dem Pixel.', 'Sprachmodell LFM3-Audio-2B: Gespräch in 18 Sprachen laut Hersteller; von uns noch nicht getestet.', 'Entscheidungsmodell d1-2B: Antworten mit Wahrscheinlichkeit, etwa „Bad, 93 Prozent“, laut Hersteller; noch nicht getestet.'] },
        { heading: 'iPhone', items: ['Kamera und LiDAR: Tiefe, eine gespeicherte Raumkarte wiederfinden.', 'Raumgrundrisse mit Türen und Möbelarten (RoomPlan).', 'Text und Gegenstände sehr schnell verfolgen.', 'VoiceOver und Apples Erkennung von Türen, Personen und Möbeln als Vergleich.', 'Ultrabreitband: AirTag-Suche.', 'AirPods: räumlicher Klang, der der Kopfbewegung folgt.'] },
        { heading: 'Android', items: ['Geschätzte Tiefe ohne LiDAR.', 'Text und Gegenstände verfolgen.', 'TalkBack.', 'Eigene Messung: Die Grafikeinheit des Pixel 10a war für diese Modelle langsamer als der Prozessor.'] },
        { heading: 'Weitere', items: ['Brille mit Kamera und Ton, freihändig.', 'Ein persönlicher Rechner zu Hause: größere Modelle, Gedächtnis.', 'Funk-Baken, NFC- und Tastmarkierungen.', 'Satellitenortung und Echtzeit-Fahrplandaten.', 'Sehende Freiwillige per Video, etwa Be My Eyes.'] },
      ],
    },
    {
      id: 'grenzen', heading: 'Grenzen und Risiken',
      groups: [
        { heading: 'Technik', items: ['Antwortzeit von 2 bis 20 Sekunden: keine Führung in Echtzeit.', 'Falsche Antworten: ein falsches Etikett, ein falscher Raum.', 'Die Kamera erfasst das Ziel nicht.', 'Akku und Wärme: Auf dem Pixel sank die Geschwindigkeit nach wenigen Bildern merklich.', 'Verschobene Möbel machen eine gespeicherte Karte ungenau.', 'LiDAR gibt es nur in den Pro-Modellen des iPhone.'] },
        { heading: 'Sicherheit', items: ['Gehführung, Ampeln, Hindernisse: ausgeschlossen.', 'Falsches Vertrauen, Überforderung.'] },
        { heading: 'Daten und Recht', items: ['Wohnung, Mitbewohner und fremde Menschen im Bild.', 'Die Lizenz des Modells ist noch zu prüfen.'] },
      ],
    },
    {
      id: 'bausteine', heading: 'Bausteine einer möglichen App',
      intro: 'Arbeitshypothese: So ließe sich eine Hilfe in Teile zerlegen. Gebaut ist davon in Percepta nichts.',
      groups: [
        { heading: 'Erfassen', items: ['Auslösen ohne Hinsehen: Taste, Sprachwort, Brille.', 'Kameraführung: Ist das Ziel ganz im Bild?', 'Licht: Taschenlampe bei Bedarf.'] },
        { heading: 'Langsam wahrnehmen', items: ['Bildmodell: lesen, beschreiben, Gegenstände finden.', 'Räume erkennen.'] },
        { heading: 'Schnell wahrnehmen', items: ['Einen gefundenen Gegenstand verfolgen, etwa 30 Bilder pro Sekunde.', 'Tiefe messen.'] },
        { heading: 'Raummodell', items: ['Einlernen: ein Rundgang, Räume benennen.', 'Räume, Türen und Wege als Netz.', 'Feste Orte: Bett, Schrank, Waschbecken.', 'Wiedererkennen über eine gespeicherte Raumkarte.'] },
        { heading: 'Gedächtnis', items: ['Dinge mit Ort und Zeitpunkt.', 'Ansehen, korrigieren, löschen.'] },
        { heading: 'Planer', items: ['Von der Absicht über das Ziel zum Plan, mit einem kleinen Sprachmodell.'] },
        { heading: 'Führung', items: ['Richtung und Entfernung als Sprache, Ton oder Vibration.', 'Wegpunkte und Ankunft.'] },
        { heading: 'Dialog, Sicherheit, menschliche Hilfe', items: ['Sprache hin und zurück, Stil, Unterbrechen.', 'Grenzen, Unsicherheit, Abbruch.', 'Einen Menschen zuschalten.'] },
        { heading: 'Unterwegs und Profil', items: ['Ortung, Fahrplan, Schilder.', 'Persönliche Einstellungen: Detailgrad, Richtungsangabe, Darstellung für Sehrest.'] },
      ],
    },
  ],
  matrix: {
    heading: 'Querschnitt: Absichten und Fähigkeiten',
    intro: 'Welche Fähigkeit braucht welche Gruppe von Absichten? Wo sich die Kernpunkte häufen, liegt ein Baustein, der viele Situationen trägt.',
    caption: 'Absichten in den Zeilen, Fähigkeiten in den Spalten. Jede Zelle sagt, ob die Fähigkeit dafür Kern ist, teilweise gebraucht wird oder nicht nötig ist.',
    rowHeader: 'Absicht',
    sumLabel: 'Summe',
    columns: ['Wahrnehmen', 'Verorten', 'Erinnern', 'Planen', 'Führen', 'Sprechen', 'Absichern'],
    levels: ['nicht nötig', 'teilweise', 'Kern'],
    rows: [
      { name: 'Sich orientieren', values: [2, 2, 2, 2, 2, 2, 2] },
      { name: 'Finden und merken', values: [2, 2, 2, 1, 2, 2, 1] },
      { name: 'Lesen und verstehen', values: [2, 0, 1, 1, 0, 2, 2] },
      { name: 'Haushalt', values: [2, 1, 1, 1, 1, 2, 2] },
      { name: 'Unterwegs', values: [2, 2, 1, 2, 1, 2, 2] },
      { name: 'Begegnung', values: [1, 0, 0, 0, 0, 2, 2] },
      { name: 'Freizeit und Teilhabe', values: [2, 0, 0, 0, 0, 2, 1] },
      { name: 'Einstieg und Lernen', values: [1, 1, 2, 1, 1, 2, 2] },
    ],
    legend: 'Summe: Kern zählt 2, teilweise 1. Eigene Einschätzung, nicht mit Betroffenen geprüft.',
  },
  findingsHeading: 'Was der Querschnitt zeigt',
  findings: [
    { heading: 'Das Fundament', text: 'Wahrnehmen, Sprechen und Absichern stecken in jeder Zeile. Diese drei müssen zuerst gut sein: Hilfe beim Ausrichten der Kamera, ein Bildmodell, Sprache hin und zurück und ehrliche Angaben zur Unsicherheit.' },
    { heading: 'Der neue Kern', text: 'Verorten, Erinnern und Führen treten gemeinsam auf, beim Orientieren und beim Wiederfinden. Zusammen ergeben sie ein Modell der eigenen Wohnung. Das bieten die bekannten Apps bisher nicht; hier könnten ein Bildmodell und die Tiefenmessung des Telefons zusammenwirken.' },
    { heading: 'Planen verbindet', text: '„Ich will Zähne putzen“ ist keine Bilderkennung, sondern eine Absicht. Ein kleines Sprachmodell auf dem Telefon könnte daraus Ziel, Weg und Gegenstand machen.' },
    { heading: 'Draußen kommt später', text: 'Unterwegs braucht es dieselben Bausteine, aber mit höherem Risiko, schlechterem Netz und fremden Menschen im Bild. Sinnvoll wäre, zuerst drinnen zu lernen und einzelne Leseaufgaben erst danach nach draußen zu tragen.' },
  ],
  flow: {
    heading: 'Ein Ablauf quer durch die Bausteine: „Ich will Zähne putzen“',
    intro: 'Ein ausgedachtes Beispiel, das zeigt, wie die Bausteine zusammenspielen könnten. Jeder Schritt nennt, wie schnell er sein müsste.',
    speeds: { once: 'einmal eingerichtet', fast: 'schnell, unter einer Zehntelsekunde', slow: 'langsam, 2 bis 8 Sekunden auf dem iPhone' },
    steps: [
      { setup: true, say: 'Die Wohnung einlernen', how: 'Einmal, allein oder mit einer Vertrauensperson: mit dem iPhone durch die Wohnung gehen, Räume benennen und feste Orte sagen, etwa „hier ist das Waschbecken“. Daraus entstehen ein Netz aus Räumen und Türen und eine gespeicherte Raumkarte.', tags: [{ label: 'Raummodell', speed: 'once' }] },
      { say: '„Ich will Zähne putzen.“', how: 'Auslösen ohne Hinsehen, mit einer Taste oder einem Sprachwort. Die Sprache wird auf dem Gerät erkannt.', tags: [{ label: 'Dialog', speed: 'fast' }] },
      { say: 'Aus der Absicht wird ein Ziel', how: 'Ziel: Bad, dann Waschbecken, dann Zahnbürste. Eine Rückfrage nur, wenn etwas mehrdeutig ist, etwa bei zwei Badezimmern.', tags: [{ label: 'Planer', speed: 'slow' }] },
      { say: 'Wo bin ich?', how: 'Die gespeicherte Raumkarte findet die Position wieder. Gelingt das nicht, ordnet das Bildmodell den Raum ein und sagt, wie sicher es ist.', tags: [{ label: 'Wiedererkennen', speed: 'fast' }, { label: 'Raum einordnen', speed: 'slow' }] },
      { say: 'Den Weg bestimmen', how: 'Schlafzimmer, Flur, Bad – über die eingelernten Türen.', tags: [{ label: 'Raumnetz', speed: 'fast' }] },
      { say: '„Tür auf 11 Uhr, etwa drei Meter.“', how: 'Richtung als Uhrzeit oder als Ton, der höher wird, wenn die Richtung stimmt. Wegpunkte wie „Türrahmen“ werden angesagt. Langstock und eigene Orientierung bleiben die Grundlage.', tags: [{ label: 'Führung', speed: 'fast' }, { label: 'Tiefe', speed: 'fast' }] },
      { say: '„Du bist im Bad. Das Waschbecken ist vor dir.“', how: 'Die Ankunft wird mit einem neuen Bild bestätigt, nicht nur aus der Karte geschlossen.', tags: [{ label: 'Bildmodell', speed: 'slow' }] },
      { say: '„Zahnbürste rechts neben dem Wasserhahn, 30 Zentimeter.“', how: 'Das Bildmodell findet die Zahnbürste einmal; danach führt die schnelle Verfolgung die Hand mit Tönen dorthin.', tags: [{ label: 'Gegenstand finden', speed: 'slow' }, { label: 'Verfolgen', speed: 'fast' }] },
      { say: 'Merken, nur auf Wunsch', how: '„Zahnbürste steht rechts am Waschbecken“, mit Zeitpunkt. Der Eintrag lässt sich ansehen, korrigieren und löschen.', tags: [{ label: 'Gedächtnis', speed: 'fast' }] },
    ],
    note: 'In der eigenen Wohnung ist das Risiko vergleichsweise gering. Stufen und offene Türen bleiben trotzdem Gefahren. Für Menschen, die neu erblindet sind, gehört eine solche Führung in Absprache mit einer Fachkraft für Orientierung und Mobilität geübt.',
  },
  next: {
    heading: 'Welche Situation ist für dich die wichtigste?',
    paragraphs: ['Diese Karte ist ein Gesprächsangebot. Wenn du blind oder sehbehindert bist: Welche drei Situationen kosten dich heute am meisten Zeit oder fremde Hilfe? Was müsste eine Hilfe sagen, und wann sollte sie still sein? Deine Erfahrung entscheidet, welche Zeile der Karte wir zuerst genauer untersuchen.'],
    links: [
      { text: 'Eine Alltagserfahrung teilen', href: '/de/participate/' },
      { text: 'Ideen für eine persönliche Alltagshilfe', href: '/de/ideas/' },
      { text: 'Vorhandene Hilfen finden', href: '/de/tools/' },
    ],
  },
};

const en: UseCaseMap = {
  title: 'Use-case map: the whole picture.',
  intro: 'Before we build individual features, we want to understand the whole: who needs which kind of help, where, for what purpose – and what today’s technology can contribute. This map puts it in order. You can zoom in from broad areas to individual situations.',
  status: [
    'Updated: 28 October 2026. This is our own working map and has not yet been reviewed with blind or low-vision people. It is not a feature list or a decision about what to build. We will choose the most important situations together.',
    'The timings for language models come from our own measurements in a separate test app on the same day. They show what is technically possible on a phone, not that a tool works in everyday life.',
  ],
  jump: [
    { text: 'The map: people, places, purposes, capabilities, technology, limits, building blocks', href: '#map' },
    { text: 'Cross-section: which purpose needs which capability', href: '#cross-section' },
    { text: 'One flow: “I want to brush my teeth”', href: '#flow' },
  ],
  branchesHeading: 'The map',
  branchesIntro: 'Seven areas. Each one can be expanded. The order goes from people to technology: first who and where, then what someone wants to do, then what a system would need to be able to do.',
  branches: [
    {
      id: 'people', heading: 'People',
      groups: [
        { heading: 'Blind since birth or early childhood', items: ['Can: long cane or guide dog, orientation and mobility training, fast VoiceOver, mental maps, touch and hearing.', 'Needs: print, displays, signs, bus lines, products – whatever is in front of them right now.', 'Wants: short, fast answers without being patronised, directions relative to their own body.', 'Risk: too much talking, long waits, poor VoiceOver support.'] },
        { heading: 'Recently blind', items: ['Can: visual memory, knows their home and routes from before, knows the phone visually.', 'Needs: a way in, confidence, help aiming the camera, simple controls, a route to advice and rehabilitation.', 'Wants: colour and appearance described, patience, a person at the press of a button.', 'Risk: relying on technology for walking too early, feeling overwhelmed.'] },
        { heading: 'Residual or progressive sight loss', items: ['Magnification, contrast and speech combined.', 'Changing daily condition, glare, dusk.'] },
        { heading: 'Additional disabilities', items: ['Hearing: vibration, refreshable braille.', 'Motor: only one hand free, speech instead of gestures.', 'Older age, little experience with technology.'] },
        { heading: 'People around them', items: ['Family, personal assistants, housemates.', 'Orientation and mobility and daily living skills specialists.', 'Building and transport operators.'] },
      ],
    },
    {
      id: 'places', heading: 'Places',
      groups: [
        { heading: 'Home', items: ['Rooms: hallway, bathroom, bedroom, kitchen, living room.', 'Fixed places: bed, wardrobe, washbasin, cooker, sofa, doors.', 'Things that move around: keys, glasses, remote, phone, mug.'] },
        { heading: 'Unfamiliar indoor spaces', items: ['Hotel room, doctor’s surgery, office, public authority.', 'Restaurant, supermarket, department store, station concourse.', 'Stairs, lift, escalator, toilet, reception.'] },
        { heading: 'Familiar outdoor routes', items: ['The way to the bakery, the stop, work.'] },
        { heading: 'Unfamiliar outdoor places', items: ['A new address, a change of trains, roadworks, an event.'] },
        { heading: 'Transitions', items: ['The front door, finding an entrance, getting on and off.'] },
      ],
    },
    {
      id: 'purposes', heading: 'Purposes',
      intro: 'What someone wants to achieve. The examples are conversation starters, not selected features.',
      groups: [
        { heading: 'Getting oriented', items: ['“Where am I?” – recognise the room.', '“I want to brush my teeth” – to the bathroom, the washbasin, the toothbrush.', '“To the bed”, “to the wardrobe”.', 'Getting to know an unfamiliar hotel room: what is where?', 'Finding a shop entrance, the last few metres.', 'Floor numbers, lift buttons, signs.'] },
        { heading: 'Finding and remembering', items: ['“Where are my keys?”', '“Remember: glasses on the bedside table.”', 'Finding something that was dropped.', 'Is the cooker off? Is the window closed? Is a light on?'] },
        { heading: 'Reading and understanding', items: ['Post, letters, forms.', 'Device displays: cooker, washing machine, coffee machine, thermostat.', 'Packaging: price, best-before date, ingredients, allergens.', 'Medicines: name and dose – mistakes carry a high risk.', 'Signs, timetables, departure boards, the line on a bus.', 'Machines and screens without accessibility.', 'Banknotes.'] },
        { heading: 'Household', items: ['Cooking: ingredients, fill levels.', 'Clothing: colour, pattern, stains, matching.', 'Cleaning: stains, crumbs.'] },
        { heading: 'Out and about', items: ['Which line is arriving, and where is it going?', 'The door of the vehicle, a free seat.', 'Platform and track.', 'Street names, describing a junction – no traffic-light information.', '“Am I at the right shop?”'] },
        { heading: 'Meeting people', items: ['Finding staff: uniform, name badge.', 'Queues, a free counter.', 'Calling in a person to help.', 'No identification of strangers.'] },
        { heading: 'Leisure and participation', items: ['Describing photos, your own and shared ones.', 'Menus.', 'Museums, nature, events.'] },
        { heading: 'Getting started and learning', items: ['Doing the first task yourself again.', 'Practising how to aim the camera.', 'Getting to know your own home again.', 'Finding advice, orientation and daily living training.'] },
      ],
    },
    {
      id: 'capabilities', heading: 'Capabilities',
      intro: 'What a system would need to do for these purposes to succeed.',
      groups: [
        { heading: 'Perceive', items: ['Read text.', 'Find and name objects.', 'Describe a scene and a room.', 'Classify a room, stating how sure it is.', 'Measure depth and distance.', 'Notice changes (video, later).'] },
        { heading: 'Locate', items: ['Where in the room am I, which way am I facing?', 'Which room am I in?', 'Outdoors: satellite positioning and compass.'] },
        { heading: 'Remember', items: ['A model of the home: rooms, doors, fixed furniture.', 'Things with place and time: “last seen”.', 'Routines and preferences.'] },
        { heading: 'Plan', items: ['Turn a purpose into a goal.', 'From the goal to a route through the rooms.', 'Ask when something is ambiguous.'] },
        { heading: 'Guide', items: ['Direction and distance: clock positions, steps.', 'Sounds and vibration: warmer, colder.', 'Announce waypoints: door, hallway.', 'Confirm arrival.'] },
        { heading: 'Speak', items: ['Speech input on the device.', 'Speech output and VoiceOver.', 'Style: brief or supportive.', 'Interrupt, stay quiet.'] },
        { heading: 'Safeguard', items: ['State uncertainty.', '“Not detected” does not mean “not there”.', 'No walking guidance, no traffic-light information.', 'Call in a person.', 'Protect other people’s data.'] },
      ],
    },
    {
      id: 'technology', heading: 'Technology today',
      intro: 'Building blocks that exist today. Measurements come from our test app; manufacturer statements are marked as such.',
      groups: [
        { heading: 'Language models on the phone (LFM3 by Liquid AI)', items: ['Vision model LFM3-VL-2B: reads text, finds objects with position and name. Our measurement: 2 to 8 seconds per image on an iPhone 16 Pro Max, 15 to 20 seconds on a Pixel 10a.', 'Text model LFM3-1.7B: dialogue, planning, tools. Our measurement: 35 to 38 tokens per second on the iPhone, 13.5 on the Pixel.', 'Speech model LFM3-Audio-2B: conversation in 18 languages according to the manufacturer; not yet tested by us.', 'Decision model d1-2B: answers with a probability, such as “bathroom, 93 per cent”, according to the manufacturer; not yet tested.'] },
        { heading: 'iPhone', items: ['Camera and LiDAR: depth, finding a saved room map again.', 'Room plans with doors and furniture types (RoomPlan).', 'Very fast tracking of text and objects.', 'VoiceOver and Apple’s detection of doors, people and furniture as a comparison.', 'Ultra Wideband: AirTag search.', 'AirPods: spatial sound that follows head movement.'] },
        { heading: 'Android', items: ['Estimated depth without LiDAR.', 'Tracking of text and objects.', 'TalkBack.', 'Our measurement: the Pixel 10a’s graphics unit was slower than its processor for these models.'] },
        { heading: 'Other', items: ['Glasses with camera and audio, hands-free.', 'A personal computer at home: larger models, memory.', 'Radio beacons, NFC and tactile markers.', 'Satellite positioning and real-time timetable data.', 'Sighted volunteers by video, such as Be My Eyes.'] },
      ],
    },
    {
      id: 'limits', heading: 'Limits and risks',
      groups: [
        { heading: 'Technology', items: ['Response times of 2 to 20 seconds: no real-time guidance.', 'Wrong answers: the wrong label, the wrong room.', 'The camera does not capture the target.', 'Battery and heat: on the Pixel, speed dropped noticeably after a few images.', 'Moved furniture makes a saved map inaccurate.', 'LiDAR only exists in iPhone Pro models.'] },
        { heading: 'Safety', items: ['Walking guidance, traffic lights, obstacles: excluded.', 'Misplaced trust, feeling overwhelmed.'] },
        { heading: 'Data and law', items: ['Homes, housemates and strangers in the picture.', 'The model licence still needs to be checked.'] },
      ],
    },
    {
      id: 'building-blocks', heading: 'Building blocks of a possible app',
      intro: 'Working hypothesis: how an assistant could be broken into parts. None of this has been built in Percepta.',
      groups: [
        { heading: 'Capture', items: ['Trigger without looking: a button, a spoken word, glasses.', 'Camera guidance: is the target fully in view?', 'Light: torch when needed.'] },
        { heading: 'Slow perception', items: ['Vision model: read, describe, find objects.', 'Recognise rooms.'] },
        { heading: 'Fast perception', items: ['Track an object once found, at about 30 images per second.', 'Measure depth.'] },
        { heading: 'Home model', items: ['Setup: one walk through, naming rooms.', 'Rooms, doors and routes as a network.', 'Fixed places: bed, wardrobe, washbasin.', 'Recognition from a saved room map.'] },
        { heading: 'Memory', items: ['Things with place and time.', 'View, correct, delete.'] },
        { heading: 'Planner', items: ['From purpose to goal to plan, with a small language model.'] },
        { heading: 'Guidance', items: ['Direction and distance as speech, sound or vibration.', 'Waypoints and arrival.'] },
        { heading: 'Dialogue, safety, human help', items: ['Speech both ways, style, interrupting.', 'Limits, uncertainty, stopping.', 'Calling in a person.'] },
        { heading: 'Out and about, and profile', items: ['Positioning, timetables, signs.', 'Personal settings: level of detail, direction format, display for residual sight.'] },
      ],
    },
  ],
  matrix: {
    heading: 'Cross-section: purposes and capabilities',
    intro: 'Which capability does each group of purposes need? Where the core marks cluster, there is a building block that supports many situations.',
    caption: 'Purposes in rows, capabilities in columns. Each cell says whether the capability is core, partly needed or not needed.',
    rowHeader: 'Purpose',
    sumLabel: 'Total',
    columns: ['Perceive', 'Locate', 'Remember', 'Plan', 'Guide', 'Speak', 'Safeguard'],
    levels: ['not needed', 'partly', 'core'],
    rows: [
      { name: 'Getting oriented', values: [2, 2, 2, 2, 2, 2, 2] },
      { name: 'Finding and remembering', values: [2, 2, 2, 1, 2, 2, 1] },
      { name: 'Reading and understanding', values: [2, 0, 1, 1, 0, 2, 2] },
      { name: 'Household', values: [2, 1, 1, 1, 1, 2, 2] },
      { name: 'Out and about', values: [2, 2, 1, 2, 1, 2, 2] },
      { name: 'Meeting people', values: [1, 0, 0, 0, 0, 2, 2] },
      { name: 'Leisure and participation', values: [2, 0, 0, 0, 0, 2, 1] },
      { name: 'Getting started and learning', values: [1, 1, 2, 1, 1, 2, 2] },
    ],
    legend: 'Total: core counts 2, partly 1. Our own assessment, not reviewed with blind or low-vision people.',
  },
  findingsHeading: 'What the cross-section shows',
  findings: [
    { heading: 'The foundation', text: 'Perceive, speak and safeguard appear in every row. These three need to work well first: help with aiming the camera, a vision model, speech both ways and honest statements of uncertainty.' },
    { heading: 'The new core', text: 'Locate, remember and guide appear together, for orientation and for finding things again. Together they form a model of your own home. Well-known apps do not offer this yet; a vision model and the phone’s depth sensing could work together here.' },
    { heading: 'Planning connects', text: '“I want to brush my teeth” is not image recognition but a purpose. A small language model on the phone could turn it into a goal, a route and an object.' },
    { heading: 'Outdoors comes later', text: 'Out and about needs the same building blocks, but with higher risk, weaker connectivity and strangers in the picture. It would make sense to learn indoors first and only then take individual reading tasks outside.' },
  ],
  flow: {
    heading: 'One flow across the building blocks: “I want to brush my teeth”',
    intro: 'A made-up example showing how the building blocks could work together. Each step states how fast it would need to be.',
    speeds: { once: 'set up once', fast: 'fast, under a tenth of a second', slow: 'slow, 2 to 8 seconds on the iPhone' },
    steps: [
      { setup: true, say: 'Teaching the home', how: 'Once, alone or with a trusted person: walk through the home with the iPhone, name the rooms and say the fixed places, such as “this is the washbasin”. This creates a network of rooms and doors and a saved room map.', tags: [{ label: 'Home model', speed: 'once' }] },
      { say: '“I want to brush my teeth.”', how: 'Triggered without looking, with a button or a spoken word. Speech is recognised on the device.', tags: [{ label: 'Dialogue', speed: 'fast' }] },
      { say: 'The purpose becomes a goal', how: 'Goal: bathroom, then washbasin, then toothbrush. A follow-up question only when something is ambiguous, for example with two bathrooms.', tags: [{ label: 'Planner', speed: 'slow' }] },
      { say: 'Where am I?', how: 'The saved room map finds the position again. If that fails, the vision model classifies the room and says how sure it is.', tags: [{ label: 'Recognition', speed: 'fast' }, { label: 'Room classification', speed: 'slow' }] },
      { say: 'Working out the route', how: 'Bedroom, hallway, bathroom – through the doors that were set up.', tags: [{ label: 'Room network', speed: 'fast' }] },
      { say: '“Door at 11 o’clock, about three metres.”', how: 'Direction as a clock position or as a tone that rises when the direction is right. Waypoints such as “door frame” are announced. The long cane and your own orientation remain the basis.', tags: [{ label: 'Guidance', speed: 'fast' }, { label: 'Depth', speed: 'fast' }] },
      { say: '“You are in the bathroom. The washbasin is in front of you.”', how: 'Arrival is confirmed with a new image, not just inferred from the map.', tags: [{ label: 'Vision model', speed: 'slow' }] },
      { say: '“Toothbrush to the right of the tap, 30 centimetres.”', how: 'The vision model finds the toothbrush once; fast tracking then guides the hand there with sounds.', tags: [{ label: 'Find object', speed: 'slow' }, { label: 'Tracking', speed: 'fast' }] },
      { say: 'Remembering, only on request', how: '“The toothbrush is to the right of the washbasin”, with a time. The entry can be viewed, corrected and deleted.', tags: [{ label: 'Memory', speed: 'fast' }] },
    ],
    note: 'In your own home the risk is comparatively low. Steps and open doors still remain hazards. For people who have recently lost their sight, this kind of guidance should be practised with an orientation and mobility specialist.',
  },
  next: {
    heading: 'Which situation matters most to you?',
    paragraphs: ['This map is an invitation to talk. If you are blind or have low vision: which three situations cost you the most time or need help from others today? What should an assistant say, and when should it stay quiet? Your experience decides which row of the map we look at more closely first.'],
    links: [
      { text: 'Share an everyday experience', href: '/en/participate/' },
      { text: 'Ideas for personal everyday assistance', href: '/en/ideas/' },
      { text: 'Find existing help', href: '/en/tools/' },
    ],
  },
};

export const usecases = { de, en };
