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
 * The Robot panel's muted loop on wide screens, by date like BADGES: each build (and the
 * page itself, if it stays open past an `until`) uses the first loop whose `until` is
 * still ahead. Each loop is cut from the game's own captures and lives in public/video/
 * as robot-loop-<name>-<width>.webm and .mp4 (no audio) with its first frame as the
 * poster, robot-loop-<name>-<width>.jpg, at 1600x1024 and 1200x768; the page picks the
 * width the open panel needs. `position` is the open panel's object-position.
 */
export const ROBOT_LOOPS: { name: string; until?: Date; position: string }[] = [
  // The Halloween world (Grave Circle, from a 4K take) while the Halloween sale runs:
  // to the end of 31 October 2026, Swedish time.
  { name: 'halloween', until: new Date('2026-10-31T23:00:00Z'), position: '0% 50%' },
  // Evergreen: the Clockwork world (a robot riding the conveyor onto a turntable).
  { name: 'clockwork', position: '0% 50%' },
];
export const robotLoops = (now = new Date()) => ROBOT_LOOPS.filter((l) => !l.until || now < l.until);

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
