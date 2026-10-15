# UX Productions AB: website

The studio website at [uxproductions.se](https://uxproductions.se): The Perfect Robot, The Perfect Murder and The Perfect Race, news, press kits and the legal pages for the games.

Built with [Astro](https://astro.build) as a static site: every page is a finished HTML file, so search engines, link previews and AI crawlers see the content without running JavaScript. It deploys to GitHub Pages on every push to `main` and once a day.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run check      # fails on broken internal links or anchors in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Games: text (English and Swedish), store links, facts, FAQ, screenshots, trailers | `src/data/games.ts` |
| Learning apps ("Other work") | `src/data/other.ts` |
| Studio details, socials, Steam release date, UI strings | `src/data/site.ts` |
| News posts (Markdown, English) | `src/content/news/*.md` |
| Legal texts (terms, privacy) | `src/legal/*.html` |
| Page templates (one per page type, rendered in both languages) | `src/views/` |
| Styles: studio palette and each game's palette | `src/styles/global.css` |
| Press kit downloads (full-size files, thumbnails, zip) | `public/press/<game>/` |
| Trailers | `public/video/` |
| Share images (1200x630) | `public/og/`, made by `python scripts/make-og.py` |

## Adding a news post

Add `src/content/news/<slug>.md` with `title`, `description` (about 150 characters), `date`, `game` (optional), `image` and `imageAlt`, then run `python scripts/make-og.py` for its share image. A post with a future `date` stays hidden until the first build after that moment; the daily build (16:05 UTC) publishes it, so a launch post can be written ahead of time.

## Languages

English is the main site at `/`, Swedish copies of the home, games, game pages, other work, about, tools and privacy pages are under `/sv/`, linked with `hreflang`. News, press and the game terms are English only.

## Addresses that must keep working

`/games/terms/` and `/games/privacy/` are linked from Stripe Checkout, and `/privacy/` from the app store listings. `/integritetspolicy` forwards to `/sv/privacy/`, `/demo` to `/games/`, and old `/games#<game>` links forward to each game's page.

## License

© 2013-2026 UX Productions AB. All rights reserved.
