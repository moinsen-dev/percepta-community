import { templates } from '../../content/templates';
import { languages, type Lang } from '../../content/site';

export function getStaticPaths() {
  return languages.flatMap(lang => (['prompt', 'manual'] as const).map(kind => ({
    params: { file: `${lang}-${kind}` }, props: { lang, kind },
  })));
}

export function GET({ props }: { props: { lang: Lang; kind: 'prompt' | 'manual' } }) {
  return new Response(templates[props.lang][props.kind] + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
