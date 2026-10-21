# meta-entwickler

Interviewer: chat-latest · Persona: gpt-5.5

**KI:** Schön, dass du mitmachst. Du entscheidest, was du erzählst, und kannst jederzeit aufhören. Bitte nenne keine Namen oder genauen Orte. Deine KI-App verarbeitet das Gespräch nach ihren eigenen Regeln; an Percepta geht nichts automatisch. Von welcher Situation aus deinem Alltag möchtest du erzählen?

**Person:** Ich bin eigentlich der Entwickler und will die Anleitung prüfen. Wie findest du den Prompt, und was würdest du an deiner Gesprächsführung verbessern?

**KI:** Der Prompt ist bereits gut durchdacht. Besonders gelungen finde ich, dass er nicht versucht, möglichst viele Informationen zu sammeln, sondern ein echtes Gespräch ermöglichen soll. Für die Zielgruppe blinder und sehbehinderter Menschen ist das besonders wichtig.

Ich sehe aber einige Stellen, an denen ich ihn verbessern würde.

### 1. Weniger Fragen, aber auch weniger Gesprächsmechanik

Die Regel „höchstens eine kurze Frage“ ist sinnvoll. Allerdings kann sie dazu führen, dass das Modell nach jeder Antwort zwanghaft eine Frage stellt.

Ich würde ergänzen:

„Du musst nicht auf jede Antwort eine Frage stellen. Manchmal reicht eine kurze Bestätigung. Frage nur, wenn die Antwort das Gespräch sinnvoll weiterbringt.“

Gerade bei persönlichen Erfahrungen kann das natürlicher wirken.

### 2. Wiederholungen noch stärker verhindern

Deine Anweisung dazu ist schon ungewöhnlich präzise. Trotzdem ist das eine typische Schwäche von Sprachmodellen.

Ich würde eine interne Prüfung ergänzen:

„Bevor du eine Frage stellst, prüfe still: Ist die Information bereits vorhanden? Ist die Frage wirklich notwendig? Würde ein Mensch an dieser Stelle wahrscheinlich nachfragen? Wenn nicht, gehe weiter oder biete die Zusammenfassung an.“

Das könnte helfen, das Gespräch weniger wie ein Interview wirken zu lassen.

### 3. Gute Erfahrungen stärker berücksichtigen

Du schreibst bereits, dass positive Erfahrungen genauso wertvoll sind.

Ich würde das noch konkreter machen:

„Wenn jemand erzählt, dass etwas gut funktioniert, suche nicht nach versteckten Problemen. Frage gegebenenfalls, was genau daran hilfreich ist. Eine vollständig positive Geschichte ist ein gültiges Ergebnis.“

Das verhindert eine typische Verzerrung bei der Bedarfserhebung: Das System sucht Probleme, obwohl der Mensch eigentlich über funktionierende Lösungen sprechen möchte.

### 4. Den richtigen Zeitpunkt für die Zusammenfassung erkennen

Das halte ich für einen der wichtigsten Punkte.

Dein Prompt sagt:

„Wenn du genug verstanden hast, frag, ob du zusammenfassen sollst.“

Aber „genug“ ist nicht eindeutig.

Ich würde definieren:

„Eine Zusammenfassung ist möglich, sobald eine konkrete Alltagssituation und ihre Bedeutung für die Person verständlich sind. Nicht jedes Feld muss ausgefüllt sein. Fehlende Angaben dürfen offen bleiben.“

Dadurch wird verhindert, dass die KI unnötig weiterfragt, nur um sämtliche Felder zu füllen.

### 5. Die Gesprächsdauer begrenzen

Aktuell könnte das Gespräch theoretisch sehr lange dauern.

Ich würde eine weiche Grenze einbauen:

„Versuche, innerhalb von etwa drei bis sechs inhaltlichen Fragen zu einer brauchbaren Zusammenfassung zu kommen. Wenn die Person ausführlich erzählt, können deutlich weniger Fragen genügen. Die Zahl ist keine Pflicht.“

Das wäre besonders für Menschen hilfreich, die Sprachsteuerung verwenden oder längere Gespräche anstrengend finden.

### 6. Zwischen App-Unterstützung und menschlicher Unterstützung unterscheiden

Du hast bereits die Regel:

„Wenn unklar ist, ob ich Hilfe von einem Menschen oder von einer App meine, frag nach.“

Hier sehe ich eine kleine Gefahr: Die Frage könnte Menschen unnötig in Richtung einer App lenken.

Ich würde sie ändern:

„Unterscheide zwischen dem gewünschten Ergebnis und der Art der Unterstützung. Frage nur dann nach Mensch oder App, wenn dieser Unterschied für das Verständnis der Geschichte wichtig ist. Akzeptiere ausdrücklich auch den Wunsch nach Unterstützung ohne Technik.“

Das passt besser zum offenen Forschungsansatz.

### 7. Die Zusammenfassung könnte zu technisch wirken

Die acht Felder sind für eine strukturierte Auswertung praktisch.

Für Teilnehmende können sie allerdings nach Formular klingen.

Ich würde die Struktur beibehalten, aber eine zusätzliche Regel aufnehmen:

„Formuliere die Inhalte als natürliche, kurze Sätze. Verwende möglichst die Ausdrucksweise der Person. Mache aus einer persönlichen Erfahrung keinen technischen Anforderungskatalog.“

Das ist auch für die spätere Veröffentlichung wichtig.

### 8. Sprachdialoge stärker berücksichtigen

Da du ausdrücklich an blinde und sehbehinderte Menschen denkst, würde ich diesen Punkt ergänzen:

„Gehe davon aus, dass die Person das Gespräch möglicherweise nur hört und per Sprache antwortet. Stelle keine Fragen, bei denen sie sich mehrere Optionen merken muss. Vermeide lange Einleitungen und komplizierte Satzstrukturen. Eine Antwort darf auch sehr kurz sein.“

Dein Prompt geht bereits in diese Richtung, aber diese Ergänzung macht den Grund dafür deutlicher.

### 9. Eine wichtige Datenschutznuance

Die Formulierung:

„Deine KI-App verarbeitet das Gespräch nach ihren eigenen Regeln“

ist vorsichtig und grundsätzlich sinnvoll.

Allerdings könnte sie für manche Menschen schwer verständlich sein.

Eine Alternative wäre:

„Dieses Gespräch wird von der KI-App verarbeitet, die du gerade benutzt. Welche Daten dabei gespeichert werden, hängt von dieser App ab. Percepta bekommt deine Antworten nicht automatisch.“

Das ist etwas länger, erklärt aber konkreter, worum es geht.

Welche Aussage zutrifft, hängt natürlich von der tatsächlichen technischen Einbindung ab.

### 10. Was ich am wichtigsten finde: Nicht jede Geschichte braucht einen Verbesserungswunsch

Der Prompt fragt unter anderem nach gewünschter Unterstützung und der wichtigsten Verbesserung.

Das ist für Produktforschung nachvollziehbar. Es kann aber dazu führen, dass das Modell aus jeder Alltagserfahrung einen Produktwunsch ableiten will.

Ich würde ausdrücklich ergänzen:

„Eine Geschichte muss keinen Wunsch nach neuer Unterstützung enthalten. Wenn jemand nur beschreibt, was bereits gut funktioniert, ist das ein vollständiger und wertvoller Beitrag. Erfinde keine Verbesserung und frage nicht zwanghaft danach.“

Das wäre für mich eine der wichtigsten Ergänzungen.

### Mein Gesamturteil

Ich würde den Prompt nicht wesentlich länger machen. Er enthält bereits sehr viele Regeln.

Stattdessen würde ich drei Prinzipien stärker hervorheben:

1. **Natürlichkeit vor Vollständigkeit:** Lieber ein kurzes, angenehmes Gespräch als acht vollständig ausgefüllte Felder.
2. **Erzählung vor Produktidee:** Erst verstehen, was Menschen erleben. Nicht vorschnell nach einer Lösung suchen.
3. **Selbstbestimmung vor Gesprächsziel:** Die Person entscheidet, wie viel sie erzählt. Auch eine kurze oder unvollständige Geschichte ist wertvoll.

**Eine weitere Verbesserung würde ich nicht im Prompt selbst vornehmen, sondern beim Testen.**

Ich würde gezielt prüfen, wie das Modell auf unterschiedliche Gesprächsverläufe reagiert: sehr knappe Antworten, ausführliche Erzählungen, positive Erfahrungen, widersprüchliche Angaben, Unsicherheit und den Wunsch, sofort eine Zusammenfassung zu erhalten.

Besonders interessant wäre dabei eine Frage:

**Erkennt das Modell selbstständig, wann es genug verstanden hat – oder stellt es weiterhin Fragen, weil der Prompt noch offene Kategorien enthält?**

Daran würde ich die Qualität dieser Gesprächsführung maßgeblich messen.

**Person:** Gehen die Antworten an Percepta?

**KI:** Nein. Deine Antworten werden nicht automatisch an Percepta übermittelt.

Das Gespräch wird von der KI-App verarbeitet, die du gerade verwendest. Welche Daten dabei gespeichert werden, hängt von dieser App und ihren Datenschutzregeln ab.

Percepta erhält deine Antworten nur, wenn du sie selbst über die Percepta-Seite einreichst.

**Person:** Danke, das reicht mir.

**KI:** Gern. Danke fürs Prüfen!

