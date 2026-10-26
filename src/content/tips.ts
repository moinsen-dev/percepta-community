// Apple documentation checked 26 October 2026; not a device or screen-reader test.
export const tips = {
  de: {
    title: 'Tipps und Tricks für blinde und sehbehinderte Menschen.',
    intro: 'Manche nützlichen Hilfen sind schon auf deinem Smartphone, aber schwer zu finden. Hier erklären wir den Einstieg Schritt für Schritt. Wir beginnen mit Apples App „Lupe“ auf dem iPhone.',
    sections: [
      { heading: 'Direkt zur passenden Anleitung', links: [
        { text: 'Die Lupe öffnen', href: '#oeffnen' },
        { text: 'Die versteckte Erkennung einblenden', href: '#erkennung' },
        { text: 'Text vorlesen lassen', href: '#text' },
        { text: 'Türen, Personen und Möbel erkennen', href: '#umgebung' },
        { text: 'Die Lupe schneller erreichen', href: '#schnellzugriff' },
        { text: 'Wenn etwas nicht klappt', href: '#probleme' },
      ], paragraphs: ['Stand: 26. Oktober 2026. Grundlage sind Apples Anleitungen für iOS 27. Auf älteren Versionen können Menüs anders heißen. Diese Anleitung ist noch nicht am Gerät mit VoiceOver oder mit Betroffenen erprobt.'] },
      { id: 'oeffnen', heading: '1. Die Lupe öffnen', paragraphs: ['Die Lupe ist eine eigene App. Du musst dafür nicht erst die Kamera-App öffnen. Suche in der App-Mediathek nach „Lupe“ und öffne sie. Falls du Siri verwendest, kannst du auch „Öffne Lupe“ versuchen.', 'Mit VoiceOver: Streiche nach rechts oder links, um ein Bedienelement auszuwählen. Ein Doppeltipp aktiviert das ausgewählte Element. Wenn wir im Folgenden „öffne“ oder „wähle“ schreiben, ist auch diese Bedienung gemeint.'], links: [
        { text: 'Apple: Apps in der App-Mediathek finden', href: 'https://support.apple.com/de-de/guide/iphone/iph87abad19a/ios' },
        { text: 'Apple: VoiceOver einschalten und üben', href: 'https://support.apple.com/de-de/guide/iphone/iph3e2e415f/ios' },
      ] },
      { id: 'erkennung', heading: '2. Die versteckte Erkennung einblenden', paragraphs: ['Die Lupe kann mehr als vergrößern. Wenn die Taste „Erkennungsmodus“ fehlt, lässt sie sich in der App einblenden.'], steps: [
        'Öffne in der Lupe „Einstellungen“.',
        'Wähle „Erkennen“.',
        'Schalte „Im Steuerungsbereich anzeigen“ ein. Kehre zur Kameraansicht der Lupe zurück.',
        'Aktiviere dort „Erkennungsmodus“. Wähle anschließend die gewünschte Erkennung, zum Beispiel „Text“ oder auf unterstützten Geräten „Türen“.',
      ], links: [{ text: 'Apple: Steuerelemente der Lupe anpassen', href: 'https://support.apple.com/de-de/guide/iphone/ipheed8d2fca/ios' }] },
      { id: 'text', heading: '3. Text vorlesen lassen', paragraphs: ['Wähle im Erkennungsmodus „Text“. Halte die Rückkamera auf eine bekannte Verpackung oder einen kurzen gedruckten Text. Beginne im Sitzen und bewege die Kamera langsam.', 'Falls „Zeigen & Sprechen“ verfügbar ist, kannst du auf eine Beschriftung zeigen. Die Kamera muss dann deinen Finger und den Text sehen. Diese Texthilfen sind nicht dasselbe wie die LiDAR-gestützte Türerkennung; Verfügbarkeit und Sprachen unterscheiden sich je nach iOS-Version.'], links: [{ text: 'Apple: Text erkennen und laut vorlesen', href: 'https://support.apple.com/de-de/guide/iphone/iph29dbe3fb6/ios' }] },
      { id: 'umgebung', heading: '4. Türen, Personen und Möbel erkennen', paragraphs: ['Diese Funktionen brauchen ein unterstütztes iPhone mit LiDAR: Apple nennt die Pro- und Pro-Max-Modelle von iPhone 12 bis iPhone 18. Ein normales iPhone derselben Generation hat diese Sensorik nicht automatisch.', 'Wähle im Erkennungsmodus zum Beispiel „Türen“ und richte die Rückkamera auf eine bekannte Tür. Unter „Einstellungen“, „Erkennen“ und „Türen“ lässt sich das Feedback anpassen. Probiere zunächst nur eine Erkennung aus.', 'Wichtig: Diese Erkennung ist keine verlässliche Gehführung. Verlasse dich darauf weder bei Straßenquerungen noch an Treppen oder anderen gefährlichen Stellen. Eine fehlende Meldung bedeutet nicht, dass der Weg frei ist.'], links: [
        { text: 'Apple: Türen, Personen und Möbel erkennen', href: 'https://support.apple.com/de-de/guide/iphone/iph35c335575/ios' },
        { text: 'Apple: genaue Liste der iPhones mit LiDAR', href: 'https://support.apple.com/de-de/guide/iphone/aside/iphc07537a89/27/ios/27' },
      ] },
      { id: 'schnellzugriff', heading: '5. Die Lupe schneller erreichen', paragraphs: ['Du kannst einen Tastenkurzbefehl einrichten. Wichtig: Entferne dabei keinen bereits benötigten VoiceOver-Kurzbefehl.'], steps: [
        'Öffne die iPhone-Einstellungen und dann „Bedienungshilfen“.',
        'Wähle „Bedienungshilfen-Kurzbefehl“. In älteren Versionen heißt der Eintrag eventuell nur „Kurzbefehl“. Wähle zusätzlich „Lupe“.',
        'Drücke dreimal die Seitentaste, bei einem iPhone mit Home-Taste dreimal die Home-Taste. Bei mehreren ausgewählten Hilfen erscheint eine Auswahl; bei nur einer startet sie direkt.',
      ], paragraphsAfter: ['Auf einem iPhone mit Aktionstaste kannst du alternativ unter „Einstellungen“ und „Aktionstaste“ die Lupe zuordnen.'], links: [
        { text: 'Apple: Bedienungshilfen schnell öffnen', href: 'https://support.apple.com/de-de/guide/iphone/iph3e2e31a5/ios' },
        { text: 'Apple: Aktionstaste anpassen', href: 'https://support.apple.com/de-de/guide/iphone/iphe89d61d66/ios' },
      ] },
      { id: 'probleme', heading: 'Wenn etwas nicht klappt', items: [
        'Die Taste fehlt: Prüfe noch einmal die Lupen-Einstellungen unter „Erkennen“. Wähle im verlinkten Apple-Handbuch deine iOS-Version.',
        '„Türen“ fehlt: Prüfe dein Modell unter „Einstellungen“, „Allgemein“, „Info“ und vergleiche es mit Apples LiDAR-Liste.',
        'Du hörst nichts: Prüfe Lautstärke, Stummmodus und ein verbundenes Headset. Kontrolliere unter „Einstellungen“, „Erkennen“ und der gewählten Erkennung, ob gesprochenes Feedback aktiviert ist.',
        'Die Kamera erkennt wenig: Prüfe Licht, freie Kameralinse und Ausrichtung. Halte das Gerät ruhig; nicht jede Beschriftung oder jeder Gegenstand wird erkannt.',
      ], paragraphs: ['„Lupe fragen“ ist eine zusätzliche KI-Funktion mit eigenen Geräte-, Sprach- und Regionsvoraussetzungen. Du brauchst sie nicht, um die hier erklärte Erkennung zu suchen.'], links: [
        { text: 'Weitere Apps und Beratung finden', href: '/de/tools/' },
        { text: 'Orientierung und Navigation: vorhandene Hilfen', href: '/de/navigation/' },
      ] },
    ],
  },
  en: {
    title: 'Tips and tricks for blind and low-vision people.',
    intro: 'Some useful tools are already on your phone but hard to find. These step-by-step guides help you get started. Our first guide covers Apple’s Magnifier app on iPhone.',
    sections: [
      { heading: 'Jump to the instructions you need', links: [
        { text: 'Open Magnifier', href: '#open' }, { text: 'Show the hidden detection control', href: '#detection' },
        { text: 'Read text aloud', href: '#text' }, { text: 'Detect doors, people and furniture', href: '#surroundings' },
        { text: 'Reach Magnifier faster', href: '#shortcut' }, { text: 'If something does not work', href: '#troubleshooting' },
      ], paragraphs: ['Updated: 26 October 2026. Based on Apple’s iOS 27 instructions. Earlier versions may use different menu names. We have not yet tested this guide on a device with VoiceOver or with blind or low-vision people.'] },
      { id: 'open', heading: '1. Open Magnifier', paragraphs: ['Magnifier is a separate app. You do not need to open Camera first. Search for “Magnifier” in the App Library and open it. If you use Siri, you can also try “Open Magnifier”.', 'With VoiceOver: swipe right or left to select a control, then double-tap to activate it. When these instructions say “open” or “choose”, you can use this method.'], links: [
        { text: 'Apple: find apps in the App Library', href: 'https://support.apple.com/en-gb/guide/iphone/iph87abad19a/ios' },
        { text: 'Apple: turn on and practise VoiceOver', href: 'https://support.apple.com/en-gb/guide/iphone/iph3e2e415f/ios' },
      ] },
      { id: 'detection', heading: '2. Show the hidden detection control', paragraphs: ['Magnifier does more than enlarge things. If Detection Mode is missing, you can make it visible in the app.'], steps: [
        'Open Settings inside Magnifier.', 'Choose Detect.',
        'Turn on Show in Control Panel. Return to Magnifier’s camera view.',
        'Activate Detection Mode. Then choose a detection option such as Text, or Doors on supported devices.',
      ], links: [{ text: 'Apple: customise Magnifier controls', href: 'https://support.apple.com/en-gb/guide/iphone/ipheed8d2fca/ios' }] },
      { id: 'text', heading: '3. Read text aloud', paragraphs: ['Choose Text in Detection Mode. Aim the rear camera at a familiar package or a short printed passage. Start while seated and move the camera slowly.', 'If Point & Speak is available, you can point to a label. The camera needs to see both your finger and the text. These text tools are different from LiDAR-based door detection; availability and languages vary with your iOS version.'], links: [{ text: 'Apple: detect text and read it aloud', href: 'https://support.apple.com/en-gb/guide/iphone/iph29dbe3fb6/ios' }] },
      { id: 'surroundings', heading: '4. Detect doors, people and furniture', paragraphs: ['These features require a supported iPhone with LiDAR. Apple lists Pro and Pro Max models from iPhone 12 to iPhone 18. A standard iPhone of the same generation does not automatically include that sensor.', 'Choose an option such as Doors in Detection Mode and aim the rear camera at a familiar door. Adjust feedback under Settings, Detect, then Doors. Start with one detection option.', 'Important: this detection is not reliable walking guidance. Do not rely on it at road crossings, stairs or other dangerous places. No announcement does not mean the way is clear.'], links: [
        { text: 'Apple: detect doors, people and furniture', href: 'https://support.apple.com/en-gb/guide/iphone/iph35c335575/ios' },
        { text: 'Apple: exact list of iPhones with LiDAR', href: 'https://support.apple.com/en-gb/guide/iphone/aside/iphc07537a89/27/ios/27' },
      ] },
      { id: 'shortcut', heading: '5. Reach Magnifier faster', paragraphs: ['You can set up a button shortcut. Keep any VoiceOver shortcut you already depend on selected.'], steps: [
        'Open iPhone Settings, then Accessibility.', 'Choose Accessibility Shortcut and add Magnifier.',
        'Triple-click the side button, or the Home button on an iPhone with one. If several tools are selected, choose from the menu. If only one is selected, it starts directly.',
      ], paragraphsAfter: ['On an iPhone with an Action button, you can instead assign Magnifier under Settings, then Action Button.'], links: [
        { text: 'Apple: quickly open accessibility features', href: 'https://support.apple.com/en-gb/guide/iphone/iph3e2e31a5/ios' },
        { text: 'Apple: customise the Action button', href: 'https://support.apple.com/en-gb/guide/iphone/iphe89d61d66/ios' },
      ] },
      { id: 'troubleshooting', heading: 'If something does not work', items: [
        'Missing control: check Detect in Magnifier’s settings again. Choose your iOS version in the linked Apple guide.',
        'Missing Doors option: find your model under Settings, General, About and compare it with Apple’s LiDAR list.',
        'No speech: check volume, Silent mode and any connected headset. In Settings inside Magnifier, choose Detect and your detection option, then check spoken feedback.',
        'Poor recognition: check lighting, the camera lens and where it is pointing. Keep the phone steady; not every label or object can be recognised.',
      ], paragraphs: ['Ask Magnifier is an additional AI feature with separate device, language and region requirements. It is not required to look for the detection features explained here.'], links: [
        { text: 'Find more apps and advice', href: '/en/tools/' }, { text: 'Existing orientation and navigation tools', href: '/en/navigation/' },
      ] },
    ],
  },
};
