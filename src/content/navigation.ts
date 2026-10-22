// Provider research, 22 October 2026. These are starting points, not field-tested rankings.
export const navigation = {
  de: {
    title: 'Orientierung und Navigation: passende Hilfe finden.',
    intro: 'Eine Route planen, den richtigen Eingang finden und Hindernisse bemerken sind verschiedene Aufgaben. Hier findest du Apps, örtliche Systeme und persönliche Hilfe mit ihren jeweiligen Grenzen.',
    sections: [
      {
        heading: 'Was möchtest du tun?',
        paragraphs: ['Quellenstand: 22. Oktober 2026. Die Angaben stammen aus Herstelleranleitungen, App-Stores und Informationen von Verkehrs- und Selbsthilfeorganisationen. Wir haben die Angebote noch nicht selbst mit Betroffenen getestet. Die Reihenfolge ist keine Rangliste.'],
        links: [
          { text: 'Draußen orientieren und Wege vorbereiten', href: '#draussen' },
          { text: 'In Gebäuden den Weg finden', href: '#gebaeude' },
          { text: 'Haltestellen und Umstiege verstehen', href: '#nahverkehr' },
          { text: 'Informationen zu Fußgängerampeln', href: '#ampeln' },
          { text: 'Persönliche Hilfe per Video', href: '#fernassistenz' },
          { text: 'Neu mit Sehverlust: einen Einstieg finden', href: '#einstieg' },
          { text: 'Grenzen der Hilfen verstehen', href: '#grenzen' },
        ],
      },
      {
        id: 'einstieg', heading: 'Neu mit Sehverlust: einen Einstieg finden',
        paragraphs: ['Welche Hilfe zu dir passt, hängt von deinem Alltag, deinem Sehvermögen und deiner Erfahrung ab. Du musst nicht mehrere Apps auf einmal lernen. Du kannst zunächst eine vertraute Aufgabe auswählen und gemeinsam mit einer Beratungsstelle oder Rehalehrkraft passende Hilfen kennenlernen.', 'VoiceOver auf dem iPhone und TalkBack auf Android unterstützen die Bedienung des Smartphones. Orientierung und Mobilität sowie lebenspraktische Fähigkeiten lassen sich mit Fachkräften üben. Auch Angehörige können sich beraten lassen.'],
        links: [
          { text: 'Beratung, Smartphone-Einstieg und Training im Wegweiser', href: '/de/tools/#beratung' },
          { text: 'DBSV: Orientierung und Mobilität', href: 'https://www.dbsv.org/orientierung-mobilitaet-o-m.html' },
        ],
      },
      {
        id: 'draussen', heading: 'Draußen orientieren und Wege vorbereiten',
        paragraphs: ['Diese Angebote helfen bei Straßen, Orten und Routen. Ein Zielpunkt auf der Karte bestätigt noch nicht, dass du vor dem richtigen Eingang stehst. Aktuelle Hindernisse und Straßenquerungen sind zusätzliche Aufgaben.'],
        items: [
          'Lazarillo: GPS-Orientierung und Routen mit Audiohinweisen auf iPhone und Android; laut Anbieter kostenlos. Für Innenraumfunktionen muss der Ort entsprechend ausgestattet sein.',
          'BlindSquare: beschreibt Orte und Kreuzungen in der Umgebung auf dem iPhone. Im deutschen App Store am 22. Oktober 2026 für 44,99 Euro gelistet. Gesprochene Abbiegehinweise werden laut Handbuch über eine weitere Navigationsapp ergänzt.',
          'MyWay Pro: eigene Wege und Wegpunkte aufzeichnen, Adressnavigation und Routen austauschen; für iPhone und Android. Kauf- und Abo-Varianten im jeweiligen Store prüfen.',
          'VoiceVista auf dem iPhone und Soundscape der Scottish Tech Army auf iPhone und Android: Orte und Richtungen über räumlichen Klang kennenlernen. Soundscape ist kostenlos und bietet herunterladbare Offline-Karten. Die Angebote führen den Ansatz des eingestellten Microsoft Soundscape weiter.',
          'WeWALK: Navigation, Umgebungs- und ÖPNV-Informationen auf iPhone und Android. Abo und Funktionsumfang hängen auch davon ab, ob du einen unterstützten WeWALK-Langstock nutzt.',
        ],
        links: [
          { text: 'Lazarillo: Informationen und Downloads (Englisch)', href: 'https://lazarillo.app/' },
          { text: 'BlindSquare im deutschen App Store', href: 'https://apps.apple.com/de/app/blindsquare/id500557255' },
          { text: 'BlindSquare: Handbuch (Englisch)', href: 'https://www.blindsquare.com/user-guide/' },
          { text: 'MyWay Pro beim Schweizerischen Blinden- und Sehbehindertenverband', href: 'https://sbv-fsa.ch/publikationen-und-apps/apps/myway-pro-sichere-navigation-im-oeffentlichen-raum/' },
          { text: 'VoiceVista im deutschen App Store', href: 'https://apps.apple.com/de/app/voicevista-blindnavigation/id6450388413' },
          { text: 'Soundscape: Funktionen und Anleitung (Englisch)', href: 'https://scottish-tech-army.github.io/Soundscape-Android/' },
          { text: 'WeWALK: App-Abonnement und Freischaltung (Englisch)', href: 'https://support.wewalk.io/en/article/how-can-i-become-a-subscriber-of-the-wewalk-mobile-application-2/' },
        ],
      },
      {
        id: 'gebaeude', heading: 'In Gebäuden den Weg finden',
        paragraphs: ['Prüfe vor einem Besuch, ob das konkrete Gebäude unterstützt wird. Eine verfügbare App bedeutet nicht, dass jede Klinik, jedes Geschäft oder jeder Bahnhof erfasst ist.'],
        items: [
          'GoodMaps erkennt die Position über die Kamera und ein zuvor erfasstes Gebäudemodell. Deutsch wird unterstützt; die App und der konkrete Standort müssen verfügbar sein.',
          'Waymap nutzt Bewegungssensoren und eine Gebäudekarte. Je nach Angebot kommt eine visuelle Startlokalisierung hinzu. Ohne dauernden GPS- oder Funkempfang zu arbeiten bedeutet nicht, ohne Gebäudekarte auszukommen.',
          'NaviLens liest besondere Farbmarkierungen, etwa an Haltestellen, in Gebäuden oder auf Verpackungen. Die App ist kostenlos. Die entsprechenden Codes müssen vorhanden sein.',
          'RightHear bietet eine kostenlose iPhone-/Android-App für sprechende Beschilderung an ausgestatteten Orten. Clew auf dem iPhone kann aufgezeichnete Innenraumrouten wiederverwenden. Beide erschließen nicht automatisch jedes unbekannte Gebäude.',
        ],
        links: [
          { text: 'GoodMaps: Positionierung und Standorterfassung (Englisch)', href: 'https://www.goodmaps.com/positioning' },
          { text: 'GoodMaps: Sprachen und Verfügbarkeit (Englisch)', href: 'https://connect.goodmaps.com/docs/app-languages/' },
          { text: 'Waymap: Funktionsweise und Voraussetzungen (Englisch)', href: 'https://www.waymapnav.com/our-tech' },
          { text: 'NaviLens: Informationen auf Deutsch', href: 'https://www.navilens.com/de' },
          { text: 'RightHear: App und Downloads (Englisch)', href: 'https://www.right-hear.com/app/' },
          { text: 'Clew im deutschen App Store', href: 'https://apps.apple.com/de/app/clew/id1268077870' },
        ],
      },
      {
        id: 'nahverkehr', heading: 'Haltestellen und Umstiege verstehen',
        paragraphs: ['Eine Verbindung im Fahrplan, der genaue Haltestellenmast und die Tür des tatsächlich ankommenden Fahrzeugs sind unterschiedliche Informationen. Frage beim örtlichen Verkehrsunternehmen nach den vorhandenen Hilfen und aktuellen Änderungen.'],
        items: [
          'VBB Bus & Bahn bietet im abgedeckten Gebiet Profile „Blind“ und „Seheingeschränkt“ mit detaillierten Wege-, Umsteige- und Ausstiegshinweisen. Mastgenaue Routendaten bedeuten keine ebenso genaue Smartphone-Ortung.',
          'RTB LOC.id kann an entsprechend ausgestatteten Ampeln, Fahrzeugen und Informationspunkten akustische Hinweise aktivieren. Die Ausstattung unterscheidet sich von Ort zu Ort.',
          'NaviLens hilft an markierten Haltestellen und Verkehrsangeboten. Die App kann fehlende örtliche Markierungen oder Daten nicht ersetzen.',
        ],
        links: [
          { text: 'VBB: die Profile für blinde und sehbehinderte Fahrgäste', href: 'https://www.vbb.de/barrierefrei-unterwegs/bus-bahn-app-barrierefrei/' },
          { text: 'RTB: Informationen zu LOC.id', href: 'https://www.rtb-bl.de/lichtzeichenanlagen/loc-id/' },
          { text: 'Deutsche Bahn: Reisen mit eingeschränkter Sehfähigkeit und Mobilitätsservice', href: 'https://www.bahn.de/service/individuelle-reise/barrierefrei/eingeschraenkte-sehfaehigkeit' },
        ],
      },
      {
        id: 'ampeln', heading: 'Informationen zu Fußgängerampeln',
        paragraphs: ['Oko auf dem iPhone erkennt Fußgängersignale und bietet Routenhinweise. Der aktuelle Store-Eintrag nennt die App kostenlos; frühere Aboangaben sind überholt. Welche Signaltypen vor Ort unterstützt werden, musst du gesondert prüfen.', 'Ein erkanntes grünes Signal bestätigt keinen gefahrlosen Weg. Es muss zur eigenen Querung gehören; Fahrzeuge, Fahrräder und Verkehrsinseln bleiben weitere Aspekte. Bei LOC.id stammt die Unterstützung aus ausgestatteter Infrastruktur. Das ist ein anderer Ansatz als die Erkennung im Kamerabild.'],
        links: [
          { text: 'Oko: aktueller App-Store-Eintrag und Versionshistorie (Englisch)', href: 'https://apps.apple.com/us/app/oko-cross-streets-and-maps/id1583614988' },
          { text: 'Grenzen und Mobilitätshilfen', href: '#grenzen' },
        ],
      },
      {
        id: 'fernassistenz', heading: 'Persönliche Hilfe per Video',
        paragraphs: ['Eine Person kann über deine Kamera visuelle Informationen erklären. Auch sie sieht nur das, was du zeigst, und braucht eine brauchbare Verbindung. Verfügbarkeit, Sprache und Kosten unterscheiden sich.'],
        items: [
          'Be My Eyes verbindet dich kostenlos mit Freiwilligen. Die Nutzungsbedingungen schließen den Einsatz zum Überqueren von Straßen aus.',
          'TOWER Fernassistenz bietet geschulte Assistenz auf Deutsch über iPhone und Android. Reguläre Servicezeit laut Anbieter: Montag bis Freitag, 9 bis 19 Uhr; außerhalb davon nach Termin. Der kostenlose App-Download bedeutet keine kostenlose Assistenzleistung. Aktuelle Konditionen beim Anbieter prüfen.',
          'Aira bietet professionelle visuelle Fernassistenz mit Minutenpaketen und durch Organisationen finanzierten Zugängen. Eine gleichwertige deutschsprachige Versorgung ist in unserer Recherche nicht belegt; Land und Sprache vor Nutzung prüfen.',
        ],
        links: [
          { text: 'Be My Eyes im Wegweiser', href: '/de/tools/#be-my-eyes' },
          { text: 'TOWER: Angebote, Zeiten und Zugang', href: 'https://tower-assist.de/' },
          { text: 'Aira: persönliche Abonnements (Englisch)', href: 'https://aira.io/subscriptions/' },
          { text: 'Aira: von Organisationen finanzierte Zugänge (Englisch)', href: 'https://aira.io/our-partners/' },
        ],
      },
      {
        id: 'grenzen', heading: 'Grenzen der Hilfen verstehen',
        paragraphs: ['Eine Beschreibung, eine Entfernungsmessung und eine Gehanweisung sind verschiedene Leistungen. Keine der hier genannten Funktionen belegt allein einen hindernisfreien Weg oder eine sichere Straßenquerung. Langstock, Führhund und erlernte Mobilitätsstrategien bleiben wichtig.', 'Prüfe Gerät, Sprache, Kosten, Netzbedarf und die tatsächliche Ortsabdeckung. Vereinbare das Erlernen neuer Wege und Mobilitätshilfen mit einer passenden Fachkraft. Percepta führt keine Gehversuche an Straßen, Treppen oder Bahnsteigen an.'],
        links: [
          { text: 'DBSV: Orientierung und Mobilität', href: 'https://www.dbsv.org/orientierung-mobilitaet-o-m.html' },
          { text: 'Be My Eyes: Nutzungsbedingungen und Sicherheitsgrenzen (Englisch)', href: 'https://www.bemyeyes.com/terms-of-service/' },
        ],
      },
      {
        id: 'quellen', heading: 'Was wir wissen und noch prüfen müssen',
        paragraphs: ['Diese Übersicht beschreibt vorhandene Angebote. Sie ist keine Zusage für ein bestimmtes Gerät oder einen konkreten Weg. Forschungsprototypen und Vorführungen sind nicht automatisch verfügbare Alltagshilfen.', 'Gemeinsam mit Betroffenen wollen wir prüfen, welche vollständigen Aufgaben mit vorhandenen Hilfen gelingen und was dabei fehlt. Eine eigene Percepta-Assistenz-App gibt es noch nicht.'],
        links: [
          { text: 'Ausführliche Recherche mit Quellen und Marktannahmen auf GitHub', href: 'https://github.com/moinsen-dev/percepta-community/blob/main/docs/assistive-app-landscape-2026-10.md' },
          { text: 'Zurück zum Wegweiser für alle Alltagsaufgaben', href: '/de/tools/' },
          { text: 'Eine Alltagserfahrung beschreiben', href: '/de/participate/' },
        ],
      },
    ],
  },
  en: {
    title: 'Orientation and navigation: find suitable help.',
    intro: 'Planning a route, finding the right entrance and noticing obstacles are different tasks. Explore apps, local systems and personal support, with the limits of each approach.',
    sections: [
      {
        heading: 'What would you like to do?',
        paragraphs: ['Sources checked on 22 October 2026: provider guides, app stores, transport operators and sight-loss organisations. We have not yet tested these services ourselves with blind or low-vision people. The order is not a ranking. Local advice and transport examples below focus on Germany.'],
        links: [
          { text: 'Outdoor orientation and preparing routes', href: '#outdoors' },
          { text: 'Finding your way inside buildings', href: '#buildings' },
          { text: 'Understanding stops and interchanges', href: '#transport' },
          { text: 'Information about pedestrian signals', href: '#signals' },
          { text: 'Personal help by video', href: '#remote-help' },
          { text: 'New to sight loss: getting started', href: '#getting-started' },
          { text: 'Understanding the limits', href: '#limits' },
        ],
      },
      {
        id: 'getting-started', heading: 'New to sight loss: getting started',
        paragraphs: ['Suitable support depends on your daily life, vision and experience. You do not have to learn several apps at once. You can start with one familiar task and explore appropriate help with an advice service or rehabilitation teacher.', 'VoiceOver on iPhone and TalkBack on Android help you operate a smartphone. Professionals can teach orientation and mobility as well as daily living skills. Relatives can seek advice too.'],
        links: [
          { text: 'Advice, smartphone basics and training in our guide', href: '/en/tools/#advice' },
          { text: 'DBSV: orientation and mobility (German)', href: 'https://www.dbsv.org/orientierung-mobilitaet-o-m.html' },
        ],
      },
      {
        id: 'outdoors', heading: 'Outdoor orientation and preparing routes',
        paragraphs: ['These services provide information about streets, places and routes. A destination pin does not confirm that you are at the right entrance. Current obstacles and street crossings are separate tasks.'],
        items: [
          'Lazarillo: GPS orientation and routes with audio guidance on iPhone and Android; free according to the provider. Indoor features require an equipped location.',
          'BlindSquare: describes nearby places and intersections on iPhone. Listed at €44.99 in the German App Store on 22 October 2026; prices differ by country. According to its manual, spoken turn-by-turn directions are supplied by another navigation app.',
          'MyWay Pro: record routes and waypoints, navigate to an address and share routes; available on iPhone and Android. Check the relevant store for purchase and subscription options.',
          'VoiceVista on iPhone and Scottish Tech Army Soundscape on iPhone and Android: learn about places and directions through spatial audio. Soundscape is free and supports downloaded offline maps. These projects continue the approach of the discontinued Microsoft Soundscape.',
          'WeWALK: navigation, nearby places and public transport information on iPhone and Android. Subscription and available features also depend on whether you use a supported WeWALK cane.',
        ],
        links: [
          { text: 'Lazarillo: information and downloads', href: 'https://lazarillo.app/' },
          { text: 'BlindSquare in the German App Store (German)', href: 'https://apps.apple.com/de/app/blindsquare/id500557255' },
          { text: 'BlindSquare user guide', href: 'https://www.blindsquare.com/user-guide/' },
          { text: 'MyWay Pro at the Swiss Federation of the Blind (German)', href: 'https://sbv-fsa.ch/publikationen-und-apps/apps/myway-pro-sichere-navigation-im-oeffentlichen-raum/' },
          { text: 'VoiceVista in the German App Store (German)', href: 'https://apps.apple.com/de/app/voicevista-blindnavigation/id6450388413' },
          { text: 'Soundscape features and guide', href: 'https://scottish-tech-army.github.io/Soundscape-Android/' },
          { text: 'WeWALK app subscriptions and access', href: 'https://support.wewalk.io/en/article/how-can-i-become-a-subscriber-of-the-wewalk-mobile-application-2/' },
        ],
      },
      {
        id: 'buildings', heading: 'Finding your way inside buildings',
        paragraphs: ['Before visiting, check whether the particular building is supported. An available app does not mean that every hospital, shop or station has been mapped or equipped.'],
        items: [
          'GoodMaps locates you through the camera and a previously captured building model. German is supported; both the app and the particular location must be available.',
          'Waymap uses motion sensors and a building map. Depending on the product, visual starting-position detection is added. Working without continuous GPS or wireless reception does not mean working without a building map.',
          'NaviLens reads special colour markers, for example at stops, in buildings or on packaging. The app is free; the relevant codes must be present.',
          'RightHear provides a free iPhone/Android app for talking signage at equipped locations. Clew on iPhone can reuse recorded indoor routes. Neither automatically covers every unfamiliar building.',
        ],
        links: [
          { text: 'GoodMaps: positioning and capturing a location', href: 'https://www.goodmaps.com/positioning' },
          { text: 'GoodMaps: languages and availability', href: 'https://connect.goodmaps.com/docs/app-languages/' },
          { text: 'Waymap: how it works and what it requires', href: 'https://www.waymapnav.com/our-tech' },
          { text: 'NaviLens: official information', href: 'https://www.navilens.com/en' },
          { text: 'RightHear app and downloads', href: 'https://www.right-hear.com/app/' },
          { text: 'Clew in the App Store', href: 'https://apps.apple.com/us/app/clew/id1268077870' },
        ],
      },
      {
        id: 'transport', heading: 'Understanding stops and interchanges',
        paragraphs: ['A journey in a timetable, the exact stop pole and the door of the arriving vehicle are different pieces of information. Ask the local transport operator about available support and current changes.'],
        items: [
          'VBB Bus & Bahn provides blind and low-vision profiles in its covered area, with detailed walking, interchange and exit information. Routing to a stop pole does not imply equally precise smartphone positioning.',
          'RTB LOC.id can activate acoustic guidance at equipped signals, vehicles and information points. Coverage differs by location.',
          'NaviLens helps at marked stops and transport facilities. The app cannot replace missing local markers or data.',
        ],
        links: [
          { text: 'VBB: app features for blind and low-vision passengers', href: 'https://www.vbb.de/en/accessible-travel/barrier-free-vbb-busbahn-app/' },
          { text: 'RTB: information about LOC.id (German)', href: 'https://www.rtb-bl.de/lichtzeichenanlagen/loc-id/' },
          { text: 'Deutsche Bahn: travelling with sight loss and mobility assistance (German)', href: 'https://www.bahn.de/service/individuelle-reise/barrierefrei/eingeschraenkte-sehfaehigkeit' },
        ],
      },
      {
        id: 'signals', heading: 'Information about pedestrian signals',
        paragraphs: ['Oko on iPhone recognises pedestrian signals and provides route directions. Its current store listing says it is free; earlier subscription information is outdated. Supported local signal types need separate checking.', 'Detecting a green signal does not confirm a safe route. It must refer to your crossing; vehicles, bicycles and traffic islands remain relevant. LOC.id relies on equipped infrastructure, a different approach from recognising a camera image.'],
        links: [
          { text: 'Oko: current App Store listing and version history', href: 'https://apps.apple.com/us/app/oko-cross-streets-and-maps/id1583614988' },
          { text: 'Limits and mobility aids', href: '#limits' },
        ],
      },
      {
        id: 'remote-help', heading: 'Personal help by video',
        paragraphs: ['A person can explain visual information through your camera. They also see only what you show and need a usable connection. Availability, language and cost differ.'],
        items: [
          'Be My Eyes connects you with volunteers for free. Its terms exclude using the service to cross streets.',
          'TOWER provides trained German-speaking assistance on iPhone and Android. Regular hours according to the provider: Monday–Friday, 9am–7pm local time, with appointments outside those hours. A free app download does not mean free assistance. Check current terms with the provider.',
          'Aira provides professional visual interpreting through minute plans and organisation-funded access. Our research has not established an equivalent German-language service; check country and language before use.',
        ],
        links: [
          { text: 'Be My Eyes in our guide', href: '/en/tools/#be-my-eyes' },
          { text: 'TOWER: services, hours and access (German)', href: 'https://tower-assist.de/' },
          { text: 'Aira personal subscriptions', href: 'https://aira.io/subscriptions/' },
          { text: 'Aira organisation-funded access', href: 'https://aira.io/our-partners/' },
        ],
      },
      {
        id: 'limits', heading: 'Understanding the limits',
        paragraphs: ['A description, a distance measurement and a walking instruction are different services. None of these features alone establishes an obstacle-free path or safe street crossing. Canes, guide dogs and learned mobility strategies remain important.', 'Check your device, language, costs, connection requirements and actual location coverage. Work with a suitable professional when learning new routes and mobility aids. Percepta does not instruct walking trials at roads, stairs or platforms.'],
        links: [
          { text: 'DBSV: orientation and mobility (German)', href: 'https://www.dbsv.org/orientierung-mobilitaet-o-m.html' },
          { text: 'Be My Eyes terms and safety limits', href: 'https://www.bemyeyes.com/terms-of-service/' },
        ],
      },
      {
        id: 'sources', heading: 'What we know and still need to check',
        paragraphs: ['This overview describes existing services. It is not an assurance for a particular device or route. Research prototypes and demonstrations are not automatically available everyday tools.', 'Together with blind and low-vision people, we want to find out which complete tasks existing tools support and what is missing. There is no Percepta assistance app yet.'],
        links: [
          { text: 'Detailed research, sources and market assumptions on GitHub (German)', href: 'https://github.com/moinsen-dev/percepta-community/blob/main/docs/assistive-app-landscape-2026-10.md' },
          { text: 'Back to the guide for all everyday tasks', href: '/en/tools/' },
          { text: 'Describe an everyday experience', href: '/en/participate/' },
        ],
      },
    ],
  },
};
