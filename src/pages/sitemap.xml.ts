// sitemap.xml for search engines: every page in both languages, with each page's
// English/Spanish pair linked so Google treats them as translations of each other.
import type { APIRoute } from 'astro';
import { getProjects } from '../lib/content';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects('en');
  const paths = ['/', '/news/', '/about/', ...projects.map((p) => `/work/${p.slug}/`)];
  const abs = (p: string) => new URL(p, site).href;
  const es = (p: string) => (p === '/' ? '/es/' : `/es${p}`);
  const entry = (loc: string, en: string) => `  <url>
    <loc>${abs(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(es(en))}"/>
  </url>`;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths.flatMap((p) => [entry(p, p), entry(es(p), p)]).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
