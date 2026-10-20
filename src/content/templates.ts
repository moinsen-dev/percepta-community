import promptDE from '../../docs/interview-prompt.de.md?raw';
import promptEN from '../../docs/interview-prompt.en.md?raw';
import manualDE from '../../docs/experience-template.de.md?raw';
import manualEN from '../../docs/experience-template.en.md?raw';
import type { Lang } from './site';

export const templates: Record<Lang, { prompt: string; manual: string }> = {
  de: { prompt: promptDE.split('## Kopierbarer Prompt\n')[1].trim(), manual: manualDE.replace(/^# .+\n+/, '').trim() },
  en: { prompt: promptEN.split('## Copyable prompt\n')[1].trim(), manual: manualEN.replace(/^# .+\n+/, '').trim() },
};
