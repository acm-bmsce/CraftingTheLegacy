# Crafting The Legacy — BMSCE 80th Anniversary Logo Showcase

A single-page React + Vite + Tailwind CSS showcase for the Top 15 shortlisted logo
concepts celebrating BMS College of Engineering's 80th anniversary. The visual
direction is Neo-Brutalist / Bauhaus: off-white paper, thick black rules, hard offset
shadows, bold geometric colour blocks and oversized display type.

## Quick start

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173.

## Add the logo artwork

The 15 cards expect these files in `frontend/public/`:

```text
logo1.webp
logo2.webp
logo3.webp
...
logo15.webp
```

The data already points at `/logo1.webp` through `/logo15.webp`. Until the files are
added, each card shows a simple "LOGO 01 / Artwork placeholder" panel — the layout and
light/dark toggle still work.

## Editing the showcase

| File | What it controls |
| --- | --- |
| [`src/data/logos.js`](src/data/logos.js) | The 15 entries: title, designer, concept note, image path and tags |
| [`src/config.js`](src/config.js) | Subtitle, winning-logo note, contact links and anniversary years (the contact values are placeholders — replace them with the chapter's real details) |
| [`src/components/Header.jsx`](src/components/Header.jsx) | Presentation credit and ACM diamond badge |
| [`src/components/Hero.jsx`](src/components/Hero.jsx) | `CRAFTING THE LEGACY` headline, black subtitle banner and geometric composition |
| [`src/components/Showcase.jsx`](src/components/Showcase.jsx) | Showcase header bar and responsive 15-card grid |
| [`src/components/LogoCard.jsx`](src/components/LogoCard.jsx) | Entry badge, image, concept notes, tags and per-card preview toggle |
| [`src/components/BackgroundToggle.jsx`](src/components/BackgroundToggle.jsx) | Light/dark contrast control |
| [`src/components/Footer.jsx`](src/components/Footer.jsx) | Stripe border, winning statement, 80 block and contact details |
| [`src/index.css`](src/index.css) | Google Fonts, palette tokens, grid-paper and warning-stripe utilities |

Each logo entry has this shape:

```js
{
  id: 1,
  title: "The Unbroken Arc",
  designerName: "Ananya Rao",
  conceptDescription: "…",
  imageUrl: "/logo1.webp",
  tags: ["Modern", "Symbolic"],
}
```

## Design system

- **Type:** Archivo Black for display headings, Montserrat for body copy, loaded from
  Google Fonts in `src/index.css`.
- **Palette:** off-white `#F9F9F9`, blue-600/700, yellow-400, red-500, black and white.
- **Shape language:** `border-4 border-black`, `8px 8px 0 #000` shadows, sharp corners,
  alternating yellow squares and blue circles for entry badges.
- **Background accents:** a faint blueprint grid (`.grid-paper`) on the hero and showcase,
  plus black-and-white diagonal warning stripes at the hero/showcase boundary and the top
  of the footer.
- **Toggle:** each card can switch its artwork surface between light (`slate-50`) and dark
  (black) to test contrast. The toggle is independent per card.

## Page structure

The page intentionally contains only four parts, in this order:

1. Header with `PRESENTED BY BMSCE ACM STUDENT CHAPTER` and the ACM diamond badge.
2. Hero with the `CRAFTING THE LEGACY` headline, subtitle banner and floating geometric
   composition.
3. Showcase with exactly 15 logo cards (1 column mobile, 2 tablet, 3 desktop).
4. Footer with the diagonal stripe border, the 2026–27 winning-logo statement and
   contact blocks.

There is no backend, voting, submission or lightbox flow.

## Production build

```bash
npm run build
npm run preview
```

The `dist/` output is fully static and can be deployed to GitHub Pages, Netlify, Vercel,
Cloudflare Pages or any static host. If you deploy under a sub-path, set Vite's `base`
option in [`vite.config.js`](vite.config.js); the card image helper respects
`import.meta.env.BASE_URL`.

## Project structure

```text
frontend/
├── public/
│   ├── favicon.svg
│   └── logo1.webp … logo15.webp   # add these artwork files
├── src/
│   ├── components/
│   │   ├── BackgroundToggle.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LogoCard.jsx
│   │   └── Showcase.jsx
│   ├── data/logos.js
│   ├── lib/cn.js
│   ├── App.jsx
│   ├── config.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
