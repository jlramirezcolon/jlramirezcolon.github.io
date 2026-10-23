# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Bilingual (English/Spanish) personal portfolio site for José Luis Ramírez Colón. Static Astro 5 site deployed to GitHub Pages. See README.md for the owner-facing editing guide.

## About this site
Personal site for José Luis Ramírez Colón: scientist, science communicator,
and a creative. It should not read as a typical academic website. Think
scientist portfolio × science communicator × personal brand.

## Design rules
Visual reference: pioneer-labs.org (clean, editorial, warm, quietly creative). Take its principles, never copy its assets.
- Lots of whitespace, very large light typography, minimal navigation (a few text links over a thin rule).
- Type: Helvetica Neue for everything (`--font-sans`), Light (300) for headings and large text, 400 for body and small text (labels, dates, metadata, filters, buttons via `.ui` and the uppercase tracked `.label`). No other typefaces, including no monospace.
- Color: warm cream paper with one deep indigo ink for all text. The only accents are cobalt (HOMO) and amber (LUMO), used mostly as soft blurred glows (`.glow`) and small markers, so photos and figures carry the color. Inverted ink bands (`--band*` tokens) for the work section and footer.
- Motion: the home hero is the centerpiece: a portrait over a slowly turning spiral galaxy (canvas, one turn every four minutes). Supporting motion is allowed but must stay gentle: slow-drifting glows and fade-up reveals (`data-reveal`). Everything must respect `prefers-reduced-motion` and render fully without JavaScript.
- Editorial devices: a dictionary-style entry (term, pronunciation, part of speech, definition) on the LUMOS page, and data-driven or illustrative interactive pieces inside project pages.
- Must work well on phones and in dark mode.

## Content rules
- The site is bilingual. Any text change needs both English and Spanish (Puerto Rican Spanish).
- News items live in src/content/news/, projects in src/content/projects/. See README.md for the format.
- Never invent facts about my work. If something is missing, leave a comment for me to fill in.

## Commands

Requires Node.js 20+.

```bash
npm run dev       # dev server at http://localhost:4321
npm run build     # static build to dist/ (also validates content frontmatter against schemas)
npm run preview   # serve the built dist/
```

There are no tests, linter, or type-check script. `npm run build` is the verification step: a frontmatter field that violates `src/content.config.ts` (e.g. an unknown `threads` value or a bad `cover` path) fails the build.

Deployment: every push to `main` runs `.github/workflows/deploy.yml` (`withastro/action` → `deploy-pages`). The live site is https://jlramirezcolon.github.io (repo `jlramirezcolon/jlramirezcolon.github.io`, Pages source: GitHub Actions); `site` in `astro.config.mjs` must match it, since hreflang and og:image URLs are built from it. Pushes use an HTTPS token saved in the macOS Keychain (it needs the `repo` and `workflow` scopes). The project lives in an iCloud-synced Desktop folder set to "Keep Downloaded"; if builds hang silently, check for offloaded files with `find . -flags +dataless`.

## Architecture

**i18n pattern.** English is served at `/`, Spanish at `/es/` (Astro i18n, `prefixDefaultLocale: false`). Route files in `src/pages/` and `src/pages/es/` are thin wrappers that render a shared view from `src/views/` with a `lang` prop. Put page logic in the view, never in the route files, so both languages stay in sync. Adding a page means adding a view plus two route wrappers.

- `src/i18n.ts`: all UI strings in `ui.en` / `ui.es` (keys must exist in both), the `threads` list, and the `href(lang, path)` / `otherLangPath()` helpers. Use `href()` for internal links rather than hardcoding `/es` prefixes.
- `src/site.ts`: personal info reused across pages (name, email, CV link, socials). The CV itself is `public/cv.pdf`.

**Content collections** (`src/content.config.ts`, read through `src/lib/content.ts`):
- `projects`: English source of truth in `src/content/projects/en/*.md`; optional translations in `projects/es/` with the **same filename**. `getProjects(lang)` keys off the English entries, overlays translated `title`/`summary`/`coverAlt`/`links` while keeping structural fields (`threads`, `cover`, `featured`, `order`, `year`) from English, and sets `translated: false` when the Spanish file is missing (the view then shows an untranslated notice). Sort: featured first, then `order` ascending. Slug = filename.
- `news`: one file per item in `src/content/news/`, with the text in frontmatter (`en`, optional `es`) rather than the body. Rendered as inline Markdown via `marked.parseInline`; Spanish falls back to English.
- Every project cover is a painting (an art history × science pairing), stored as `src/assets/work/<slug>-project.jpg` with an `art: { title, artist, year }` credit in frontmatter. Spanish files may give a translated painting title. Cards and project pages show the credit; project pages show the painting whole (never cropped).
- Interactive pieces live in `src/components/demos/`. A project lists them with `demos: [name, ...]` in its English frontmatter (add new names to the `demos` enum in `content.config.ts` and the switch in `ProjectPage.astro`), and marks each spot in both language bodies with `<div data-demo-slot="name"></div>`. A small script moves each piece into its slot; interactive ones start hidden (they need JavaScript), static figures like `nanogap-diagram` stay visible. Hoverable drawings use `HotspotFigure.astro` (numbered parts, spotlight, localized labels drawn over text-free art); figures sit directly on the page with no background panel, by the owner's choice. Their strings live in `ui.*.demo` in `i18n.ts`; shared frame styles (`.demo*`) are in `global.css`. Anything not drawn from real data is labeled illustrative.
- Photo galleries: a project sets `gallery: <folder>` (a folder in `src/assets/work/`) and lists `gallery` in `demos`. Photos appear in the order listed in `src/data/galleries.ts`, with bilingual captions that double as alt text; a photo added to a folder but not listed there is not shown.
- Write "article", never "paper", for publications.
- The About page is not a collection: `src/views/AboutPage.astro` imports `src/about/en.md` and `es.md` directly.

**Threads.** `threads` in `i18n.ts` (`research`, `communication`, `leadership`, `design`) is both the Zod enum for project frontmatter and the filter in `src/components/WorkGrid.astro`, which filters client-side via `data-threads` attributes. Adding a thread requires a label in both `ui.en.threads` and `ui.es.threads`.

**Images.** Project covers and inline figures live in `src/assets/work/` and are referenced by relative path from Markdown (`../../../assets/work/x.jpg`) so Astro optimizes them. Only `favicon.svg` (the JR monogram with an amber star and cobalt orbit arc), `apple-touch-icon.png` (the same icon as a 180 px square for iPhone home screens), and `cv.pdf` belong in `public/`. Source documents (articles, abstracts, reports, CV) are kept in `src/docs/` for reference and are not published.

**Hero.** `src/components/Hero.astro`: portrait (`src/assets/work/profile-pic.jpg`), headline (`heroTitle`), greeting, intro, and a link to About, over a canvas spiral galaxy drawn in the site's tokens. **Orbital.** The 3D glycine HOMO/LUMO figure on the LUMOS page (`src/components/demos/OrbitalDemo.astro`, three.js) uses the owner's glycine zwitterion geometry (`src/docs/glycine-zwitterion.mol2`) and real orbital surfaces in `src/data/glycine-orbitals.json`: an ORCA ωB97X-D3/def2-TZVP single point, evaluated on a grid and contoured at ±0.05 a.u. by `src/docs/orbitals/evalmo.py` (each orbital integrates to 1 within 0.2%, the built-in check). The owner's own renders (`glycine-homo.png`, `glycine-lumo.png`) are the visual reference. Never replace the surfaces with hand-drawn lobes.

**Styling.** Design tokens (colors, band colors, fonts, fluid type scale `--step-*`, spacing, `--glow-strength`) are at the top of `src/styles/global.css`, with a dark-mode override that follows the system unless the header toggle sets `data-theme` on `<html>` (saved in `localStorage`, applied before paint in `Base.astro`; canvases recolor on the `themechange` event), plus shared utilities (`.label`, `.button`, `.glow`, `data-reveal`). Components use scoped `<style>` blocks. Helvetica Neue is not a web font: it renders on Apple devices, and other visitors get Inter (loaded from Google Fonts, downloaded only when Helvetica Neue is missing).

**Analytics.** GoatCounter (cookieless) is loaded in the `<head>` of `Base.astro`; the dashboard is https://jlramirezcolon.goatcounter.com.

**Motion plumbing.** `Base.astro` adds a `js` class to `<html>` and runs one IntersectionObserver that adds `.in` to `[data-reveal]` elements; the hidden state only applies under `.js`, so no-JS visitors see everything.

## Content conventions

Project write-ups are drafts containing `<!-- comments -->` that mark what the owner still needs to fill in; preserve them unless replacing them with real content. News dates are approximate (first of the month).
