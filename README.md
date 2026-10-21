# jlramirezcolon.com (working name)

Personal site for José Luis Ramírez Colón, built with [Astro](https://astro.build) and hosted free on GitHub Pages. English at `/`, Spanish at `/es/`.

## Run it on your computer

You need Node.js 20 or newer.

```bash
npm install
npm run dev        # opens http://localhost:4321 and reloads as you edit
```

## Publish it on GitHub Pages

1. Create a GitHub repository. If you name it `YOUR-USERNAME.github.io`, the site lives at that address.
2. In `astro.config.mjs`, change `site` to that address (or your custom domain).
3. Push this folder to the `main` branch.
4. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Every push to `main` rebuilds and republishes the site in about a minute (see `.github/workflows/deploy.yml`).

**Custom domain:** buy the domain, add it under Settings → Pages → Custom domain, follow GitHub's DNS instructions, then update `site` in `astro.config.mjs`.

## Everyday edits

| To change | Edit |
| --- | --- |
| Name, email, social links | `src/site.ts` |
| CV | replace `public/cv.pdf` |
| Hero text, tagline, interface wording (both languages) | `src/i18n.ts` |
| About page | `src/about/en.md`, `src/about/es.md`, `src/about/portrait.jpg` |
| Colors, fonts, glows | top of `src/styles/global.css` |
| Home page headline and intro | `heroTitle`, `heroGreeting`, `heroIntro` in `src/i18n.ts` |
| Photo galleries on project pages | photos in `src/assets/work/<folder>/`, captions in `src/data/galleries.ts` |

### Add a news item

Create a file in `src/content/news/`, for example `2026-11-talk-madrid.md`:

```md
---
date: 2026-11-01
en: Gave a talk on frontier orbitals and life detection at [Centro de Astrobiología](https://cab.inta-csic.es/).
es: Di una charla sobre orbitales frontera y detección de vida en el [Centro de Astrobiología](https://cab.inta-csic.es/).
---
```

The five newest show on the home page; all of them appear on `/news/`, grouped by year. Links and *italics* work. Leave out `es:` and the Spanish site will show the English text.

### Add a project

1. Every project is paired with a painting. Put it in `src/assets/work/` as `your-project-project.jpg` (at least 1600 px wide if possible). Astro resizes and compresses it automatically.
2. Create `src/content/projects/en/your-project.md` (copy an existing one). The key fields:
   - `threads`: any of `research`, `communication`, `leadership`, `design`. These drive the filter on the home page.
   - `art`: the painting's `title`, `artist`, and `year`, shown as a credit under the image.
   - `featured: true` makes it a large card at the top.
   - `order`: lower numbers appear first.
3. Write the case study below the `---` in Markdown. Put figures inline with `![Alt text](../../../assets/work/figure.jpg)`.
4. Optional: add `src/content/projects/es/your-project.md` with the same file name for the Spanish version. Give it its own `coverAlt`, and an `art:` block if the painting has a Spanish title. Without the file, the Spanish page shows the English text with a short note.

## Before you launch

- Replace `src/about/portrait.jpg` with your own photo.
- Project write-ups are starting drafts. Look for `<!-- comments -->` marking what to add, and check every claim.
- News dates are approximate (first of the month). Correct them.

## The orbital in the hero

`src/components/Hero.astro` draws glycine in 3D with three.js. The HOMO and LUMO lobes there are stylized, simple shapes placed by hand to suggest where each orbital sits. They are not calculated isosurfaces, and the caption says so.

To show your real orbitals instead, export isosurfaces from your quantum chemistry pipeline (for example, cube files turned into meshes in Blender or VMD and saved as `.glb`), load them with three.js's `GLTFLoader`, and swap them in for the `homoSpec`/`lumoSpec` lobe groups. Then remove the "Illustrative rendering" note in `src/i18n.ts`.
