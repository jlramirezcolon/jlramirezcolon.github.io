import { getCollection, type CollectionEntry } from 'astro:content';
import { marked } from 'marked';
import type { Lang } from '../i18n';

// News videos live in src/assets/news/; Vite gives each a hashed URL at build time.
const videos = import.meta.glob<string>('../assets/news/*.mp4', { query: '?url', import: 'default', eager: true });

export type Project = {
  slug: string;
  data: CollectionEntry<'projects'>['data'];
  entry: CollectionEntry<'projects'>; // the entry whose body we render
  translated: boolean;
};

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects');
  return all
    .filter((p) => p.id.startsWith('en/'))
    .map((base) => {
      const slug = base.id.slice(3);
      const tr = lang === 'es' ? all.find((p) => p.id === `es/${slug}`) : undefined;
      const data = tr
        ? { ...base.data, title: tr.data.title, summary: tr.data.summary, coverAlt: tr.data.coverAlt || base.data.coverAlt, links: tr.data.links.length ? tr.data.links : base.data.links, art: tr.data.art ?? base.data.art }
        : base.data;
      return { slug, data, entry: tr ?? base, translated: lang === 'en' || !!tr };
    })
    .sort((a, b) => Number(b.data.featured) - Number(a.data.featured) || a.data.order - b.data.order);
}

export async function getNews(lang: Lang) {
  const items = await getCollection('news');
  return items
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((n) => ({
      id: n.id,
      date: n.data.date,
      html: marked.parseInline(lang === 'es' && n.data.es ? n.data.es : n.data.en) as string,
      image: n.data.image,
      video: n.data.video ? videos[`../assets/news/${n.data.video}`] : undefined,
      poster: n.data.poster,
      caption: n.data.caption ? (lang === 'es' && n.data.caption.es ? n.data.caption.es : n.data.caption.en) : undefined,
    }));
}

export function formatMonth(date: Date, locale: string) {
  return date.toLocaleDateString(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
