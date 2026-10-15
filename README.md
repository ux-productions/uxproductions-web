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
| Each game's short genre and its one fact for the front page (`genreShort`, `stat`: the number with its unit, such as "4–20 players", and a few words more; shown on the spines, the phone tiles and the studio facts) | `src/data/games.ts` |
| Each game's app icon, as players see it on their phones and in the stores (copied from the game's repo at 256 px: Race `src/Client/public/icon-512.png`, Murder its iOS `AppIcon.appiconset`, Robot `Assets/Icons/AppIcons/appstore.png`), shown on the front page spines, open panels, phone tiles and the phone jump row through `src/components/GameIcon.astro` | `src/assets/<game>/icon.png` |
| Learning apps ("Other work") | `src/data/other.ts` |
| Studio details, socials, Steam release date (and its wording), badges, each game panel's loop by date (`LOOPS`), store button labels, UI strings | `src/data/site.ts` |
| News posts (Markdown, English) | `src/content/news/*.md` |
| Legal texts (terms, privacy) | `src/legal/*.html` |
| Page templates (one per page type, rendered in both languages) | `src/views/` |
| Front page: launch block, the three game panels, news strip, studio band | `src/views/Home.astro` |
| The UX Productions mark as vector paths (traced from `public/press/ux-productions-logo.png`), used in the header (UX and the word PRODUCTIONS), the studio band and the footer | `src/components/Mark.astro` |
| Each game's name as the game itself sets it (Robot: its logo; Murder: Bodoni Moda in gold with the magnifying glass; Race: one line of Press Start 2P with PERFECT in purple), used on the front page, game pages, game cards, press kits and news posts | `src/components/GameTitle.astro` |
| Fonts: every @font-face, the files each page preloads, and the metric-matched fallbacks (see Fonts below) | `src/components/Fonts.astro` |
| Front page art: the Robot key art at full size; Murder's night harbour and Race's pack on Harbour Street, each the first frame of its loop as the game renders it (the Race game page's hero too), each with a crop of that frame for the phone tile (`-phone`, 1170x720, so Race's cars stay large) | `src/assets/robot/key-art.jpg`, `src/assets/murder/harbour-night{,-phone}.jpg`, `src/assets/race/harbour-street-night{,-phone}.jpg` |
| Game cards (games index, 404) and the share images made from them; the Race card is the game's own share image (`the-perfect-race/src/Client/public/og-image.png`) | `src/assets/<game>/card.jpg`, `src/assets/robot/capsule.jpg` |
| Styles: studio palette, the shared page width, and each game's palette | `src/styles/global.css` |
| Press kit downloads (full-size files, thumbnails, zip) | `public/press/<game>/` |
| Trailers | `public/video/` |
| The game panels' muted loops on wide screens, footage from the games themselves with no HUD, filling the open panel. Robot: `robot-loop-halloween` (Grave Circle, from a 4K take; until the end of 31 October 2026, Swedish time, while the Halloween sale runs), then `robot-loop-clockwork` (evergreen). Murder: `murder-loop-daynight`, a round's night, dawn, day and dusk on the harbour, rendered by the game's own engine (16 s). Race: `race-loop-harbour`, a real Quick Race against seven Ace bots on Harbour Street, the circuit the game only runs at night (6.5 s). Each at 1600 and 1200 px wide (the page takes the one the open panel needs), VP9 webm and H.264 mp4, no audio. The Robot's poster is its own `.jpg`; Murder's and Race's is the panel's still, which is the loop's first frame. A loop is downloaded only when its panel is open on a wide screen (the Robot's, open from the start, after the page has loaded), never on phones, with reduced motion or Save-Data. Which loop plays is `LOOPS` in `src/data/site.ts` | `public/video/<name>-<width>.{webm,mp4}` (and the Robot's `.jpg`) |
| Share images (1200x630) | `public/og/`, made by `python scripts/make-og.py` |

## Fonts

Fonts come from `@fontsource` packages, but `src/components/Fonts.astro` declares every `@font-face` itself with the exact files the build emits (imported with `?url`), so a preload and its font can never point at different files. Only the latin and latin-ext subsets are declared (latin covers English and Swedish).

- Every page preloads the faces its first screen needs: Saira Condensed 700 (the studio's headings; the game pages, which never use it, pass `studioFace={false}` to `Base`), Familjen Grotesk 400 (body) and IBM Plex Mono 500 (labels). A page that shows a game's title face on its first screen preloads that one too, with `fonts={['murder', 'race']}` on `Base`.
- Every face uses `font-display: optional`: a font that is not there for the first paint is not swapped in later, so a heading never changes font in front of the reader. A preloaded font is there for the first paint (and a cached one on every later page); on a slow first visit a page may keep the fallback, and the next page uses the real font.
- Each face has a local fallback with its metrics matched to the web font (`size-adjust`, `ascent-override`, `descent-override`, computed from the font files with fontTools), so even that fallback takes almost the same room. If a font or its size changes, recompute them.
- Moving between pages is a short crossfade (`@view-transition`, not under reduced motion); the header is the same on every page, so it stands still.

## Adding a news post

Add `src/content/news/<slug>.md` with `title`, `description` (about 150 characters), `date`, `game` (optional), `image` and `imageAlt`, then run `python scripts/make-og.py` for its share image. A post with a future `date` stays hidden until the first build after that moment; the daily build (16:05 UTC) publishes it, so a launch post can be written ahead of time.

## Languages

English is the main site at `/`, Swedish copies of the home, games, game pages, other work, about, tools and privacy pages are under `/sv/`, linked with `hreflang`. News, press and the game terms are English only.

## Addresses that must keep working

`/games/terms/` and `/games/privacy/` are linked from Stripe Checkout, and `/privacy/` from the app store listings. `/integritetspolicy` forwards to `/sv/privacy/`, `/demo` to `/games/`, and old `/games#<game>` links forward to each game's page.

## License

© 2013-2026 UX Productions AB. All rights reserved.
