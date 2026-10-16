export type Lang = 'en' | 'sv';

export const SITE = {
  url: 'https://uxproductions.se',
  name: 'UX Productions',
  legalName: 'UX Productions AB',
  orgNumber: '556947-8661',
  vat: 'SE556947866101',
  founded: '2013',
  street: 'Lyckåsgatan 3',
  postalCode: '633 58',
  city: 'Eskilstuna',
  region: 'Mälardalen',
  country: 'SE',
  email: 'info@uxproductions.se',
  supportEmail: 'support@uxproductions.se',
};

export const SOCIALS = [
  { id: 'youtube', name: 'YouTube', handle: '@UXProductionsAB', url: 'https://www.youtube.com/@UXProductionsAB' },
  { id: 'tiktok', name: 'TikTok', handle: '@ux.productions', url: 'https://www.tiktok.com/@ux.productions' },
  { id: 'instagram', name: 'Instagram', handle: '@ux.productions', url: 'https://www.instagram.com/ux.productions/' },
  { id: 'facebook', name: 'Facebook', handle: 'uxproductionsab', url: 'https://www.facebook.com/uxproductionsab' },
] as const;

/** Profiles that are the studio itself, for Organization.sameAs. */
export const SAME_AS = [
  ...SOCIALS.map((s) => s.url),
  'https://apps.apple.com/us/developer/ux-productions-ab/id1558423924',
  'https://play.google.com/store/apps/developer?id=UX+Productions+AB',
];

/** The Steam release of The Perfect Robot: 22 Oct 2026, 18:00 CEST. */
export const ROBOT_STEAM_RELEASE = new Date('2026-10-22T16:00:00Z');
export const robotOnSteam = (now = new Date()) => now >= ROBOT_STEAM_RELEASE;

/** The release day and time in Swedish time, worded from ROBOT_STEAM_RELEASE:
 *  day '22 October' / '22 oktober', time '18:00 CEST' / 'kl. 18.00'.
 *  Each is joined with no-break spaces, so a narrow line never splits it. */
export const steamRelease = (lang: Lang) => {
  const opts = { timeZone: 'Europe/Stockholm' } as const;
  const nb = (s: string) => s.replace(/ /g, ' ');
  const day = ROBOT_STEAM_RELEASE.toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-GB', { ...opts, day: 'numeric', month: 'long' });
  const hm = ROBOT_STEAM_RELEASE.toLocaleTimeString('en-GB', { ...opts, hour: '2-digit', minute: '2-digit' });
  const zone = new Intl.DateTimeFormat('en-GB', { ...opts, timeZoneName: 'short' }).formatToParts(ROBOT_STEAM_RELEASE).find((p) => p.type === 'timeZoneName')?.value;
  return { day: nb(day), time: nb(lang === 'sv' ? `kl. ${hm.replace(':', '.')}` : `${hm} ${zone}`) };
};

/**
 * Front-page badges: the one place to flag something new on a game's panel.
 * Each game shows its first badge whose dates include today; the daily build
 * switches them on and off, so an expired badge simply disappears.
 */
export const BADGES: { game: string; en: string; sv: string; from?: Date; until?: Date }[] = [
  { game: 'the-perfect-robot', en: `On Steam ${steamRelease('en').day}`, sv: `På Steam ${steamRelease('sv').day}`, until: ROBOT_STEAM_RELEASE },
  { game: 'the-perfect-robot', en: 'Out now on Steam', sv: 'Ute nu på Steam', from: ROBOT_STEAM_RELEASE, until: new Date('2026-11-05T16:00:00Z') },
];

export const badgeFor = (game: string, now = new Date()) =>
  BADGES.find((b) => b.game === game && (!b.from || now >= b.from) && (!b.until || now < b.until));

/**
 * Each game panel's muted loop on wide screens, by date like BADGES: each build plays a
 * game's first loop whose `until` is still ahead, and so does a page loaded after an
 * `until` (the choice is made when the page makes the panel's video, so a page left open
 * keeps its loop until it is loaded again). Every loop is footage from the game itself and
 * lives in public/video/ as <name>-1200 and <name>-1600 (the width in pixels; `height` is
 * the 1600 file's), each a .webm and an .mp4 with no audio; the page takes the width the
 * open panel needs. The video stays hidden until it plays, so it needs no poster file;
 * with `stillIsPoster` the panel's own still art, which is the loop's first frame and
 * already loaded, is its poster. `position` is the open panel's object-position, the same
 * as its still's. With `minWidth` the loop plays only in an open panel at least that wide
 * (and wider than it is tall); a narrower one keeps its still, whose crop is made for it.
 */
export const LOOPS: { game: string; name: string; height: number; until?: Date; position: string; stillIsPoster?: boolean; minWidth?: number }[] = [
  // The Robot's Halloween world (Grave Circle, from a 4K take) while the Halloween sale
  // runs: to the end of 31 October 2026, Swedish time. Below 800 px (tablets) the copy
  // would cover the robots, so the key art stays.
  { game: 'the-perfect-robot', name: 'robot-loop-halloween', height: 1024, until: new Date('2026-10-31T23:00:00Z'), position: '0% 50%', minWidth: 800 },
  // Evergreen: the Clockwork world (a robot riding the conveyor onto a turntable).
  { game: 'the-perfect-robot', name: 'robot-loop-clockwork', height: 1024, position: '0% 50%', minWidth: 800 },
  // Murder: a round's night and day on the harbour, night → dawn → day → dusk → night,
  // rendered by the game's own engine from its four paintings of the harbour (16 s).
  { game: 'the-perfect-murder', name: 'murder-loop-daynight', height: 900, position: '0% 50%', stillIsPoster: true },
  // Race: a real Quick Race against seven Ace bots on Harbour Street, the city circuit the
  // game only runs at night: the whole pack through the park S-bends (6.5 s).
  { game: 'the-perfect-race', name: 'race-loop-harbour', height: 1000, position: '50% 50%', stillIsPoster: true },
];
export const loopsFor = (game: string, now = new Date()) => LOOPS.filter((l) => l.game === game && (!l.until || now < l.until));

/** The words on a store button. Steam says Wishlist until the release, then Buy. */
export const storeLabel = (kind: string, lang: Lang, steamOut = robotOnSteam()) => {
  const sv = lang === 'sv';
  switch (kind) {
    case 'steam':
      return steamOut ? (sv ? 'Köp på Steam' : 'Buy on Steam') : sv ? 'Önskelista på Steam' : 'Wishlist on Steam';
    case 'appstore':
      return 'App Store';
    case 'googleplay':
      return 'Google Play';
    default:
      return sv ? 'Spela i webbläsaren' : 'Play in your browser';
  }
};

/** The first word or two of a store button, where room is tight (the front page spines on
 *  laptops): always the start of the full label, so the button's name still begins with
 *  the words it shows. */
export const storeShort = (kind: string, lang: Lang, steamOut = robotOnSteam()) => {
  const sv = lang === 'sv';
  switch (kind) {
    case 'steam':
      return steamOut ? (sv ? 'Köp' : 'Buy') : sv ? 'Önskelista' : 'Wishlist';
    case 'web':
      return sv ? 'Spela' : 'Play';
    default:
      return storeLabel(kind, lang, steamOut);
  }
};

/** A sentence's first word kept with the next one (a no-break space), so a line never ends
 *  on a lone "One" or "Det" that starts the next sentence. */
export const keepOpeners = (text: string) => text.replace(/(^|[.!?]\s+)(\S+) /g, '$1$2\u00a0');

/** The game whose panel is open when the front page loads. */
export const FEATURED_GAME = 'the-perfect-robot';

/** The front page shows news only while the newest post is younger than this. */
export const NEWS_FRESH_DAYS = 90;

const T = {
  en: {
    nav: { games: 'Games', news: 'News', press: 'Press', about: 'About' },
    langName: 'English',
    switchTo: 'På svenska',
    skip: 'Skip to content',
    ourGames: 'Our games',
    allGames: 'All games',
    latestNews: 'News',
    allNews: 'All news',
    readMore: 'Read more',
    aboutGame: 'About the game',
    play: 'Play in your browser',
    trailer: 'Trailer',
    screenshots: 'Screenshots',
    features: 'What you do',
    facts: 'Facts',
    faq: 'Questions',
    pressKit: 'Press kit',
    pressKitText: 'Fact sheet, trailer files, screenshots, logos and key art.',
    getIt: 'Get the game',
    otherWork: 'Other work',
    follow: 'Follow the studio',
    followText: 'Trailers, shorts and what we are building next.',
    footerLegal: 'Legal',
    privacy: 'Privacy policy',
    gamePrivacy: 'Privacy notice (games)',
    gameTerms: 'Terms of sale (games)',
    tools: 'Unity tools',
    contact: 'Contact',
    rights: 'All rights reserved.',
    newsRelated: 'News about',
    published: 'Published',
  },
  sv: {
    nav: { games: 'Spel', news: 'Nyheter', press: 'Press', about: 'Om oss' },
    langName: 'Svenska',
    switchTo: 'In English',
    skip: 'Hoppa till innehållet',
    ourGames: 'Våra spel',
    allGames: 'Alla spel',
    latestNews: 'Nyheter',
    allNews: 'Alla nyheter',
    readMore: 'Läs mer',
    aboutGame: 'Om spelet',
    play: 'Spela i webbläsaren',
    trailer: 'Trailer',
    screenshots: 'Bilder',
    features: 'Det här gör du',
    facts: 'Fakta',
    faq: 'Frågor',
    pressKit: 'Presskit',
    pressKitText: 'Faktablad, trailerfiler, skärmbilder, logotyper och key art (på engelska).',
    getIt: 'Skaffa spelet',
    otherWork: 'Andra projekt',
    follow: 'Följ studion',
    followText: 'Trailers, korta klipp och det vi bygger härnäst.',
    footerLegal: 'Juridik',
    privacy: 'Integritetspolicy',
    gamePrivacy: 'Integritetspolicy (spel)',
    gameTerms: 'Köpvillkor (spel)',
    tools: 'Unity-verktyg',
    contact: 'Kontakt',
    rights: 'Alla rättigheter förbehållna.',
    newsRelated: 'Nyheter om',
    published: 'Publicerad',
  },
};

export const t = (lang: Lang) => T[lang];

/** Path of a page in a language: '/games/' -> '/sv/games/'. */
export const localize = (path: string, lang: Lang) => (lang === 'sv' ? `/sv${path}` : path);

export const formatDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Stockholm',
  });
