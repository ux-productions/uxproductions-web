# UX Productions AB: website

The studio website at [uxproductions.se](https://uxproductions.se): The Perfect Robot, The Perfect Murder and The Perfect Race, The Perfect Part (coming soon), news, press kits and the legal pages for the games.

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
| Games: text (English and Swedish), store links, facts, FAQ, screenshots, trailers. A game that is not out yet has no store links and a `comingSoon` line instead (The Perfect Part): its buttons say where it is coming, and it stays off the front page's panels until its release | `src/data/games.ts` |
| Each game's short genre and its one fact for the front page (`genreShort`, `stat`: the number with its unit, such as "4–20 players", and a few words more; shown on the spines, the phone tiles and the studio facts) | `src/data/games.ts` |
| Each game's app icon, as players see it on their phones and in the stores (copied from the game's repo at 256 px: Race `src/Client/public/icon-512.png`, Murder its iOS `AppIcon.appiconset`, Robot `Assets/Icons/AppIcons/appstore.png`, Part `Assets/Icons/AppIcon.png`), shown on the front page spines, open panels, phone tiles and the phone jump row through `src/components/GameIcon.astro` | `src/assets/<game>/icon.png` |
| Learning apps ("Other work") | `src/data/other.ts` |
| Studio details, socials, Steam release date (and its wording), badges, each game panel's loop by date (`LOOPS`), store button labels, UI strings | `src/data/site.ts` |
| News posts (Markdown, English) | `src/content/news/*.md` |
| Legal texts (terms, privacy) | `src/legal/*.html` |
| Page templates (one per page type, rendered in both languages) | `src/views/` |
| Front page: launch block, the game panels (the games that are out), news strip, studio band | `src/views/Home.astro` |
| The UX Productions mark as vector paths (traced from `public/press/ux-productions-logo.png`), used in the header (UX and the word PRODUCTIONS), the studio band and the footer | `src/components/Mark.astro` |
| Each game's name as the game itself sets it (Robot: its logo; Murder: Bodoni Moda in gold with the magnifying glass; Race: one line of Press Start 2P with PERFECT in purple; Part: its logo for dark grounds, `the-perfect-part/concept/logo/svg/logo-dark.svg`, as `src/assets/part/logo-dark.svg`), used on the front page, game pages, game cards, press kits and news posts | `src/components/GameTitle.astro` |
| Fonts: every @font-face, the one file each page preloads, the small subsets inlined into every page, and the metric-matched fallbacks (see Fonts below) | `src/components/Fonts.astro`, `src/assets/fonts/` (made by `python scripts/make-font-subsets.py`) |
| Front page art: the Robot key art at full size; Murder's night harbour and Race's pack on Harbour Street, each the first frame of its loop as the game renders it (the Race game page's hero too); each with a crop for the phone tile (`-phone`, 1170 px wide: the part of the Robot's panorama the tile shows, and so Race's cars stay large) | `src/assets/robot/key-art{,-phone}.jpg`, `src/assets/murder/harbour-night{,-phone}.jpg`, `src/assets/race/harbour-street-night{,-phone}.jpg` |
| Game cards (games index, 404, press index): each game's hero art without its name (`hero` in `games.ts`), or a 16:9 crop of it where the hero is a panorama (`card`: the Robot's key art around the robot, the laser and the floating head), with the name set by `GameTitle` under it | `src/assets/<game>/hero.jpg`, Race's `harbour-street-night.jpg`, `src/assets/robot/card-art.jpg` |
| The games' share images are made from their card art. The Race card is the game's own share image (`the-perfect-race/src/Client/public/og-image.png`, the same tile, tagline and chequered foot), redrawn with the name on one line as the site sets it | `src/assets/<game>/card.jpg`, `src/assets/robot/capsule.jpg` |
| Styles: studio palette, the shared page width, and each game's palette | `src/styles/global.css` |
| Press kit downloads (full-size files, zip) and their thumbnails, two sizes of each for the page's srcset (720 and 360 px; a screenshot fills its tile, anything else, such as a logo or a capsule, fits whole in it; made by `python scripts/make-press-thumbs.py`) | `public/press/<game>/`, `public/press/<game>/thumbs/` |
| Trailers | `public/video/` |
| The game panels' muted loops on wide screens, footage from the games themselves with no HUD, filling the open panel. Robot: `robot-loop-halloween` (Grave Circle, from a 4K take; until the end of 31 October 2026, Swedish time, while the Halloween sale runs), then `robot-loop-clockwork` (evergreen). Murder: `murder-loop-daynight`, a round's night, dawn, day and dusk on the harbour, rendered by the game's own engine (16 s). Race: `race-loop-harbour`, a real Quick Race against seven Ace bots on Harbour Street, the circuit the game only runs at night (6.5 s). Each at 1600 and 1200 px wide (the page takes the one the open panel needs), VP9 webm and H.264 mp4, no audio. A loop stays hidden until it plays, so it needs no poster file (Murder's and Race's poster is the panel's still, which is the loop's first frame). The Robot's loop ends where its key art does (80% down the panel, fading out under the copy), so the key art stays the page's largest image (LCP), and it plays only in an open panel at least 800 px wide (tablets keep the key art, which is placed for them); Murder's and Race's only in one at least 680 px wide, where the copy leaves the loop room (a 1024x768 iPad keeps their night stills, behind which the gold and purple type keeps its contrast). No loop plays in a panel taller than it is wide. If a loop cannot play, its panel keeps its still and shows no pause button. A loop is downloaded only when its panel is open on a wide screen (the Robot's, open from the start, after the page has loaded), never on phones, with reduced motion or Save-Data, and while the loops are paused not until Play is pressed. Which loop plays is `LOOPS` in `src/data/site.ts` | `public/video/<name>-<width>.{webm,mp4}` |
| Share images (1200x630) | `public/og/`, made by `python scripts/make-og.py` |

## Fonts

Fonts come from `@fontsource` packages, but `src/components/Fonts.astro` declares every `@font-face` itself with the exact files the build emits (imported with `?url`), so a preload and its font can never point at different files. Only the latin and latin-ext subsets are declared (latin covers English and Swedish).

- Headings and the games' names never wait for a download. The studio face (Saira Condensed 700) and the mono labels (IBM Plex Mono 500), both only ever set in capitals, and the two games' title faces (Bodoni Moda 700 for "The Perfect Murder", Press Start 2P for "THE PERFECT RACE") each have a small subset with just the characters they need (`src/assets/fonts/subsets.json`), inlined into every page as `data:` URLs, about 12 KB in all. Declared after the full faces, they are what the browser uses for those characters, and the full face's unicode-range leaves those characters out, so the full files are never fetched (checked in Chromium, Firefox and WebKit on every page); any other character still comes from the full face. The mono and studio subsets also draw the hyphens a browser adds where a word breaks at a soft hyphen (U+2010, U+2011, as the font's own hyphen: `alias` in `subsets.json`). After changing a list or a font package, run `python scripts/make-font-subsets.py` (needs fontTools).
- The body face (Familjen Grotesk, one variable font for 400 to 700) is the one file every page preloads, and it uses `font-display: optional`: a font that is not ready when the page is first drawn is not swapped in later, so text never changes font in front of the reader. A preload does not guarantee it is ready in time, so on some first visits that page keeps the body's fallback (measured with Playwright on the home page: Firefox has the web font up to 80 ms round trips, WebKit up to 40 ms, Chromium at 40 to 80 ms but not always on very fast lines; at 150 ms and 1.6 Mbps every engine keeps the fallback); every later page has the font from the cache.
- Each face has a local fallback with its metrics matched to the web font (`size-adjust`, `ascent-override`, `descent-override`, computed from the font files with fontTools), so even that fallback takes almost the same room. If a font or its size changes, recompute them. A small script next to the fonts asks for the body's fallback faces before the first paint, since Firefox otherwise loads a `local()` face only once it is needed and would draw plain Arial first. A bold fallback lists only bold local fonts; where none is installed, the browser goes on to Arial's own bold.
- Moving between pages is a short crossfade (`@view-transition`, not under reduced motion); the header is the same on every page, so it stands still.

## Adding a news post

Add `src/content/news/<slug>.md` with `title`, `description` (about 150 characters), `date`, `game` (optional), `image` and `imageAlt`, then run `python scripts/make-og.py` for its share image. A post with a future `date` stays hidden until the first build after that moment; the daily build (16:05 UTC) publishes it, so a launch post can be written ahead of time.

## Languages

English is the main site at `/`, Swedish copies of the home, games, game pages, other work, about, tools and privacy pages are under `/sv/`, linked with `hreflang`. News, press and the game terms are English only.

## Addresses that must keep working

`/games/terms/` and `/games/privacy/` are linked from Stripe Checkout, and `/privacy/` from the app store listings. `/integritetspolicy` forwards to `/sv/privacy/`, `/demo` to `/games/`, and old `/games#<game>` links forward to each game's page.

## License

© 2013-2026 UX Productions AB. All rights reserved.
