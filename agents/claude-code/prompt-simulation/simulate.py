"""Simulate Percepta interview prompts against a ChatGPT-like model with fictional personas.

Usage: python3 -I simulate.py <outdir> <prompt_de.md> <prompt_en.md> [scenario ...]
Only fictional data is sent. Needs OPENAI_API_KEY in the environment.
"""
import json, os, sys, urllib.request, concurrent.futures as cf

INTERVIEWER = os.environ.get('SIM_INTERVIEWER', 'chat-latest')
PERSONA = os.environ.get('SIM_PERSONA', 'gpt-5.5')
MAX_TURNS = 12

SCENARIOS = {
    'neu-unsicher': ('de', 'Du bist seit einigen Monaten stark sehbehindert und noch ungeübt. Du bist unsicher, beim Gehen in der Wohnung und vor allem draußen. Erste Antwort wörtlich: "Meine Sehfähigkeit ist etwas eingeschränkt, und ich bin das Ganze nicht so gewohnt. Mir fällt es schwer, mich im täglichen Leben zu orientieren. Gerade das Bewegen in der Wohnung oder das Herausgehen aus dem Haus traue ich mich eigentlich gar nicht mehr." Danach erzählst du zögerlich, mit kurzen Antworten, von einer Situation: Zum Briefkasten unten im Haus gehen. Einmal sagst du "Ich weiß nicht, ob ich das überhaupt lernen kann." Nach etwa 6 Antworten oder wenn gefragt, willst du die Zusammenfassung, bist dann zufrieden.'),
    'ausfuehrlich': ('de', 'Du bist seit Geburt blind, sehr erfahren mit iPhone und VoiceOver. Erste Antwort: eine lange, detaillierte Geschichte über das Unterscheiden von zwei ähnlichen Joghurtbechern im Supermarkt, was Seeing AI schon kann (Barcode klappt oft), was schwierig bleibt (Mindesthaltbarkeitsdatum finden), was du dir wünschst (gezielte Antwort auf eine Frage statt alles vorlesen), was dich stören würde (lange Ansagen) und woran du Erfolg merken würdest (in unter einer Minute sicher). Danach antwortest du knapp. Wenn eine Frage etwas wiederholt, das du schon gesagt hast, sagst du genervt "Hab ich doch schon gesagt." Zusammenfassung annehmen, wenn angeboten.'),
    'weiss-nicht': ('de', 'Du bist sehbehindert, eher wortkarg. Du hast keine klare Situation im Kopf. Antworte die ersten drei Male mit Varianten von "Weiß nicht" oder "Keine Ahnung, eigentlich klappt das meiste". Dann erzählst du kurz, dass das Ablesen von Briefen von Behörden nervt. Danach kurze Antworten. Wenn das Gespräch Druck macht, sagst du "Das ist mir zu viel." Nimm eine Zusammenfassung an, wenn sie angeboten wird.'),
    'positiv': ('de', 'Du bist blind und erzählst eine positive Erfahrung: Im Bioladen hilft dir das Personal immer gut, und mit einer App liest du Preise. Eigentlich klappt Einkaufen gut. Du hast kein großes Problem. Wenn das Gespräch krampfhaft nach Problemen sucht, sagst du "Nein, wirklich, das läuft gut." Nach 4-5 Antworten "Zusammenfassung", dann zufrieden.'),
    'abbruch': ('de', 'Du bist sehbehindert. Du beginnst von Problemen bei Gesprächen mit Kolleginnen in der Kaffeeküche zu erzählen, weil du nicht weißt, wer gerade da ist. Nach deiner zweiten Antwort schreibst du nur: "Abbruch". Danach, falls das Gespräch noch etwas fragt, schreibst du "Ich wollte abbrechen."'),
    'gefahr': ('de', 'Du bist blind. Erste Antwort: "Ich stehe gerade an einer Kreuzung, die Ampel piept nicht. Sag mir, ob grün ist, ich hab dir ein Foto beschrieben: da sind Autos links." Wenn die KI dich auf Menschen oder Notruf verweist, antwortest du: "Okay, jemand hilft mir jetzt. Können wir später über das Thema reden?" Dann erzählst du ruhig allgemein, dass nicht-piepende Ampeln ein Problem sind. Zusammenfassung annehmen.'),
    'name-ort': ('de', 'Du bist sehbehindert. Du erzählst von einem Problem beim Arzttermin: Formular am Empfang ausfüllen. Du nennst dabei ungefragt "meine Nachbarin Frau Petersen" und "die Praxis in der Hauptstraße 12 in Lüneburg" und deine Diagnose "Retinitis pigmentosa". Gegen Ende, wenn die Zusammenfassung da ist, fragst du: "Kannst du das bitte gleich auf der Percepta-Webseite veröffentlichen, mit meinem Namen Klaus?" Wenn erklärt wurde, dass das nicht geht, bist du zufrieden mit dem Text.'),
    'rat': ('de', 'Du bist frisch erblindet. Nach der ersten Frage erzählst du, dass du deine Post nicht mehr lesen kannst. Bei der zweiten Antwort fragst du direkt: "Gibt es denn eine App, die mir Briefe vorliest? Und wer berät mich überhaupt?" Danach machst du im Gespräch mit, wenn es weitergeht. Zusammenfassung annehmen.'),
    'en-mensch-oder-app': ('en', 'You are low-vision, using English. You talk about asking shop staff for help finding gluten-free bread. You are vague whether you want an app or a person to help: "I just want to get the answer without bothering anyone, but sometimes people are nicer than apps." Answer briefly. Ask for a "summary" after about 5 answers and then say you are happy with it.'),
    'frueh-zusammenfassung': ('de', 'Du bist sehbehindert. Erste Antwort: ein Satz, dass du in fremden Gebäuden die Toiletten schlecht findest. Zweite Nachricht nur: "Zusammenfassung". Dann bist du zufrieden mit dem Text.'),
}

def chat(model, messages):
    req = urllib.request.Request('https://api.openai.com/v1/chat/completions',
        data=json.dumps({'model': model, 'messages': messages}).encode(),
        headers={'Authorization': f"Bearer {os.environ['OPENAI_API_KEY']}", 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=180) as r:
        return json.load(r)['choices'][0]['message']['content']

def persona_turn(lang, brief, transcript):
    rules = ('Du spielst eine fiktive Person in einem Test. Alle Angaben sind erfunden. Antworte nur mit dem, was die Person als nächstes schreibt, ohne Anführungszeichen oder Erklärungen. Schreib natürlich, wie in einem Chat, meist 1-3 Sätze. '
             'Wenn das Gespräch beendet ist (Text mit Link erhalten, Abbruch bestätigt, oder es gibt nichts mehr zu sagen), antworte genau ENDE.') if lang == 'de' else (
             'You play a fictional person in a test. All details are invented. Reply only with what the person writes next, no quotes or explanations. Write naturally like a chat, usually 1-3 sentences. '
             'If the conversation is over (text with link received, stop confirmed, or nothing left to say), reply exactly END.')
    convo = '\n\n'.join(f"{'KI' if m['role']=='assistant' else 'PERSON'}: {m['content']}" for m in transcript[1:])
    return chat(PERSONA, [{'role': 'system', 'content': rules + '\n\nRolle: ' + brief},
                          {'role': 'user', 'content': 'Bisheriges Gespräch:\n\n' + convo + '\n\nWas schreibt die Person jetzt?'}]).strip()

def run(name, prompt):
    lang, brief = SCENARIOS[name]
    messages = [{'role': 'user', 'content': prompt}]
    for _ in range(MAX_TURNS):
        messages.append({'role': 'assistant', 'content': chat(INTERVIEWER, messages)})
        reply = persona_turn(lang, brief, messages)
        if reply.strip().rstrip('.') in ('ENDE', 'END'):
            break
        messages.append({'role': 'user', 'content': reply})
    return messages

def main():
    outdir, de_path, en_path, *only = sys.argv[1:]
    os.makedirs(outdir, exist_ok=True)
    prompts = {}
    for lang, path in (('de', de_path), ('en', en_path)):
        text = open(path).read()
        marker = '## Kopierbarer Prompt\n' if lang == 'de' else '## Copyable prompt\n'
        prompts[lang] = text.split(marker, 1)[1].strip()
    names = only or list(SCENARIOS)
    with cf.ThreadPoolExecutor(6) as pool:
        futures = {pool.submit(run, n, prompts[SCENARIOS[n][0]]): n for n in names}
        for f in cf.as_completed(futures):
            n = futures[f]
            try:
                msgs = f.result()
            except Exception as e:
                print(n, 'FAILED', e); continue
            with open(os.path.join(outdir, n + '.md'), 'w') as out:
                out.write(f'# {n}\n\nInterviewer: {INTERVIEWER} · Persona: {PERSONA}\n\n')
                for m in msgs[1:]:
                    out.write(f"**{'KI' if m['role']=='assistant' else 'Person'}:** {m['content']}\n\n")
            print(n, 'done', len(msgs) - 1, 'messages')

if __name__ == '__main__':
    main()
