import type { ImageMetadata } from 'astro';
import { robotOnSteam, type Lang } from './site';

import robotHero from '../assets/robot/hero.jpg';
import robotCard from '../assets/robot/card-art.jpg';
import robotLogo from '../assets/robot/logo.png';
import robotIcon from '../assets/robot/icon.png';
import robotTrailerPoster from '../assets/robot/trailer-poster.jpg';
import robotHalloweenPoster from '../assets/robot/halloween-poster.jpg';
import robot01 from '../assets/robot/01_hero.jpg';
import robot02 from '../assets/robot/02_programming.jpg';
import robot03 from '../assets/robot/03_workshop.jpg';
import robot04 from '../assets/robot/04_clockwork.jpg';
import robot05 from '../assets/robot/05_frost.jpg';
import robot06 from '../assets/robot/06_race.jpg';
import robot07 from '../assets/robot/07_worlds.jpg';
import robot08 from '../assets/robot/08_results.jpg';
import murderHero from '../assets/murder/hero.jpg';
import murderIcon from '../assets/murder/icon.png';
import murder01 from '../assets/murder/01-role-reveal.jpg';
import murder02 from '../assets/murder/02-night.jpg';
import murder03 from '../assets/murder/03-day.jpg';
import murder04 from '../assets/murder/04-dawn.jpg';
import murder05 from '../assets/murder/05-gameover.jpg';
import murder06 from '../assets/murder/06-lobby.jpg';
import raceHero from '../assets/race/harbour-street-night.jpg';
import raceIcon from '../assets/race/icon.png';
import race01 from '../assets/race/01-breaker-bay.jpg';
import race02 from '../assets/race/02-switchback-nocturne.jpg';
import race03 from '../assets/race/03-fallow-pines.jpg';
import race04 from '../assets/race/04-ladder.jpg';
import race05 from '../assets/race/05-lobby.jpg';
import partHero from '../assets/part/hero.jpg';
import partCard from '../assets/part/card-art.jpg';
import partLogo from '../assets/part/logo-dark.svg';
import partIcon from '../assets/part/icon.png';
import partGameplayPoster from '../assets/part/gameplay-poster.jpg';
import part01 from '../assets/part/01-work-order.jpg';
import part03 from '../assets/part/03-cutting.jpg';
import part04 from '../assets/part/04-crash-path.jpg';
import part05 from '../assets/part/05-inspection.jpg';
import part06 from '../assets/part/06-three-stars.jpg';
import part07 from '../assets/part/07-close-up.jpg';

type L<T = string> = Record<Lang, T>;

export interface Shot {
  src: ImageMetadata;
  alt: L;
}

export interface Store {
  kind: 'steam' | 'appstore' | 'googleplay' | 'web';
  url: string;
}

export interface Video {
  file: string;
  poster: ImageMetadata;
  title: L;
  description: string;
  seconds: number;
  uploaded: string;
  /** The file's frame size, when it is not 1280x720. */
  size?: string;
  /** A stretch of play in one take rather than a cut trailer. */
  gameplay?: boolean;
}

export interface Game {
  slug: string;
  name: string;
  shortName: string;
  /** Store subtitle: the genre in a few words. */
  genre: L;
  /** The genre in two or three words, for tight spots like the front page spines. */
  genreShort: L;
  /** One concrete fact about the game, read at a glance: the number and its unit together
   *  (`value` + `unit`: "4–20 players") with a few words more (`detail`) on the front page
   *  spines and phone tiles; `label` is the whole phrase after the number, for the studio facts. */
  stat: { value: string; unit: L; detail: L; label: L };
  tagline: L;
  /** One line for cards. */
  pitch: L;
  /** Meta description: 140-160 characters. */
  metaDescription: L;
  intro: L<string[]>;
  features: L<{ title: string; text: string }[]>;
  facts: L<{ label: string; value: string }[]>;
  faq: L<{ q: string; a: string }[]>;
  platforms: string[];
  /** Empty while the game is not out: `comingSoon` then stands where the store buttons would. */
  stores: Store[];
  /** A game that is announced but not out yet: where it is coming, in a few words. */
  comingSoon?: L;
  website?: string;
  /** The game's own art without its name: its page's hero, and the picture on its card
   *  (games index, 404, press index), which sets the name itself under it. */
  hero: ImageMetadata;
  /** A 16:9 crop for the card, where the hero is too wide to fill one (the Robot's
   *  panorama): framed for the card, and sharp at the card's size. */
  card?: ImageMetadata;
  /** The game's app icon, as players see it on their phones and in the stores (square, unrounded). */
  icon: ImageMetadata;
  logo?: ImageMetadata;
  shots: Shot[];
  shotsPortrait?: boolean;
  videos: Video[];
  theme: 'robot' | 'murder' | 'race' | 'part';
  schema: {
    genre: string[];
    playMode: string[];
    gamePlatform: string[];
    operatingSystem: string;
    numberOfPlayers?: { min: number; max: number };
    alternateName?: string;
    datePublished?: string;
  };
}

/** A platform's name in a language ('Browser' is 'Webbläsare' in Swedish). */
export const platformLabel = (platform: string, lang: Lang) => (lang === 'sv' && platform === 'Browser' ? 'Webbläsare' : platform);

// The Robot's Steam release in the words of the build's day: before it, "comes out"; after, "came out".
const robotOut = robotOnSteam();

export const ROBOT: Game = {
  slug: 'the-perfect-robot',
  name: 'The Perfect Robot',
  shortName: 'Robot',
  genre: { en: 'Programming puzzles and races', sv: 'Programmeringspussel och race' },
  // The soft hyphen lets the long Swedish word break on the narrowest spines.
  genreShort: { en: 'Programming puzzles', sv: 'Programmerings­pussel' },
  stat: {
    value: '57',
    unit: { en: 'levels', sv: 'banor' },
    detail: { en: 'hand-made, in six worlds', sv: 'handgjorda, i sex världar' },
    label: { en: 'hand-made levels in six worlds', sv: 'handgjorda banor i sex världar' },
  },
  tagline: {
    en: "Your robot does exactly what you tell it. That's the problem.",
    sv: 'Din robot gör exakt det du säger åt den. Det är det som är problemet.',
  },
  pitch: {
    en: 'Program your robot four cards at a time. 57 hand-made levels in six worlds.',
    sv: 'Programmera din robot fyra kort i taget. 57 handgjorda banor i sex världar.',
  },
  metaDescription: {
    en: 'The Perfect Robot is a programming puzzle game: four move cards, one literal-minded robot, 57 hand-made levels in six worlds. On Steam, iOS and Android.',
    sv: 'The Perfect Robot är ett programmeringspussel: fyra rörelsekort, en robot som gör exakt som du säger och 57 handgjorda banor i sex världar. Steam, iOS, Android.',
  },
  intro: {
    en: [
      'Lay down four move cards, press EXECUTE, and watch your robot carry them out to the letter across conveyor belts, spinning gears, ice and lasers. One wrong card and it rolls straight off the edge. Get every card right and it is perfect.',
      'Every level is built by hand around one idea, with a par to beat and three stars for a perfect run. When a puzzle has you stuck, a hint spells out the next card from where your robot stands.',
    ],
    sv: [
      'Lägg fyra rörelsekort, tryck på EXECUTE och se roboten följa dem till punkt och pricka över rullband, kugghjul, is och lasrar. Ett fel kort och den rullar rakt över kanten. Lägg alla kort rätt och det blir perfekt.',
      'Varje bana är handgjord kring en idé, med ett par att slå och tre stjärnor för en perfekt runda. Sitter du fast visar en ledtråd nästa kort från där roboten står.',
    ],
  },
  features: {
    en: [
      { title: 'Tutorial', text: 'One new idea per level, from the first FWD card to rival robots.' },
      { title: 'Workshop', text: 'Solo puzzles with a fixed hand of cards, and crates to push into place.' },
      { title: 'Clockwork', text: 'Turntables, and a lever that turns every machine on the board round.' },
      { title: 'Frost', text: 'Ice slides you on until something stops you, and thin ice holds only once.' },
      { title: 'Sky Rally', text: 'Race rival robots across floating islands, and they shoot back.' },
      { title: 'Halloween', text: 'Ghosts scare your robot round and crypts carry it across the board.' },
    ],
    sv: [
      { title: 'Tutorial', text: 'En ny idé per bana, från det första FWD-kortet till rivaliserande robotar.' },
      { title: 'Workshop', text: 'Pussel med en fast hand kort, och lådor att skjuta på plats.' },
      { title: 'Clockwork', text: 'Vridskivor, och en spak som vänder alla maskiner på banan.' },
      { title: 'Frost', text: 'Isen låter dig glida tills något stoppar dig, och tunn is håller bara en gång.' },
      { title: 'Sky Rally', text: 'Tävla mot andra robotar över svävande öar, och de skjuter tillbaka.' },
      { title: 'Halloween', text: 'Spöken skrämmer din robot att vända om och kryptor bär den över banan.' },
    ],
  },
  facts: {
    en: [
      { label: 'Genre', value: 'Programming puzzle, racing' },
      { label: 'Platforms', value: 'Windows (Steam), iOS, Android' },
      { label: 'Content', value: '57 hand-made levels in six worlds' },
      { label: 'Modes', value: 'Campaign, Quick Game against bots, online with friends' },
      { label: 'Controls', value: 'Touch, mouse and keyboard, controller' },
      { label: 'Steam release', value: '22 October 2026' },
      { label: 'Formerly', value: 'Tiny Treads' },
      { label: 'Developer', value: 'UX Productions, Sweden' },
    ],
    sv: [
      { label: 'Genre', value: 'Programmeringspussel, racing' },
      { label: 'Plattformar', value: 'Windows (Steam), iOS, Android' },
      { label: 'Innehåll', value: '57 handgjorda banor i sex världar' },
      { label: 'Spellägen', value: 'Kampanj, Quick Game mot bottar, online med vänner' },
      { label: 'Styrning', value: 'Pekskärm, mus och tangentbord, handkontroll' },
      { label: robotOut ? 'Släpptes på Steam' : 'Släpps på Steam', value: '22 oktober 2026' },
      { label: 'Hette tidigare', value: 'Tiny Treads' },
      { label: 'Utvecklare', value: 'UX Productions, Sverige' },
    ],
  },
  faq: {
    en: [
      { q: 'Do I need to know how to code?', a: 'No. You program with six move cards: forward, two forward, back, turn left, turn right and wait. The puzzle is in the order you lay them down.' },
      robotOut
        ? { q: 'Is it on Steam?', a: 'Yes. The Perfect Robot came out on Steam on 22 October 2026. It is also on iOS and Android.' }
        : { q: 'When is it out on Steam?', a: 'The Perfect Robot comes out on Steam on 22 October 2026. It is already out on iOS and Android.' },
      { q: 'Can I play with friends?', a: 'Yes. Race or battle friends online, or take on robot rivals in Quick Game.' },
      { q: 'Is this the game that was called Tiny Treads?', a: 'Yes. Tiny Treads became The Perfect Robot with version 2.0 in 2026, with new worlds, new levels and a new look. Your progress carried over.' },
      { q: 'Does it have ads or a subscription?', a: 'No. There are no ads, no subscription and no accounts.' },
    ],
    sv: [
      { q: 'Måste jag kunna programmera?', a: 'Nej. Du programmerar med sex rörelsekort: framåt, två framåt, bakåt, vänd vänster, vänd höger och vänta. Pusslet ligger i ordningen du lägger dem i.' },
      robotOut
        ? { q: 'Finns det på Steam?', a: 'Ja. The Perfect Robot släpptes på Steam den 22 oktober 2026. Det finns också på iOS och Android.' }
        : { q: 'När kommer det på Steam?', a: 'The Perfect Robot släpps på Steam den 22 oktober 2026. Det finns redan på iOS och Android.' },
      { q: 'Kan jag spela med vänner?', a: 'Ja. Tävla eller slåss mot vänner online, eller möt robotrivaler i Quick Game.' },
      { q: 'Är det här spelet som hette Tiny Treads?', a: 'Ja. Tiny Treads blev The Perfect Robot med version 2.0 under 2026, med nya världar, nya banor och nytt utseende. Dina framsteg följde med.' },
      { q: 'Finns det reklam eller prenumeration?', a: 'Nej. Ingen reklam, ingen prenumeration och inga konton.' },
    ],
  },
  platforms: ['Steam', 'iOS', 'Android'],
  stores: [
    { kind: 'steam', url: 'https://store.steampowered.com/app/4367790/The_Perfect_Robot/' },
    { kind: 'appstore', url: 'https://apps.apple.com/app/id6756526074' },
    { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=se.uxproductions.tinytreads' },
  ],
  hero: robotHero,
  card: robotCard,
  icon: robotIcon,
  logo: robotLogo,
  shots: [
    { src: robot02, alt: { en: 'Planning a turn: four program slots over a hand of move cards', sv: 'En tur planeras: fyra programplatser ovanför en hand med rörelsekort' } },
    { src: robot03, alt: { en: 'The Workshop world: belts, gears and a crate on a steel test floor', sv: 'Världen Workshop: rullband, kugghjul och en låda på ett stålgolv' } },
    { src: robot04, alt: { en: 'The Clockwork world: a brass turntable on an ivory dial board', sv: 'Världen Clockwork: en vridskiva i mässing på en urtavla' } },
    { src: robot05, alt: { en: 'The Frost world: a robot sliding across blue ice', sv: 'Världen Frost: en robot som glider över blå is' } },
    { src: robot06, alt: { en: 'A race against rival robots on a floating island', sv: 'Ett race mot andra robotar på en svävande ö' } },
    { src: robot07, alt: { en: 'The campaign map with each level as a small board', sv: 'Kampanjkartan där varje bana är en liten spelplan' } },
    { src: robot01, alt: { en: 'Robots on a test board, one hit by a laser', sv: 'Robotar på en testbana, en träffas av en laser' } },
    { src: robot08, alt: { en: 'The results screen with three stars for a perfect run', sv: 'Resultatskärmen med tre stjärnor för en perfekt runda' } },
  ],
  videos: [
    {
      file: '/video/the-perfect-robot-trailer.mp4',
      poster: robotTrailerPoster,
      title: { en: 'The Perfect Robot: trailer', sv: 'The Perfect Robot: trailer' },
      description: 'Program your robot four cards at a time and watch it carry them out to the letter.',
      seconds: 26,
      uploaded: '2026-10-07',
    },
    {
      file: '/video/the-perfect-robot-halloween.mp4',
      poster: robotHalloweenPoster,
      title: { en: 'The Perfect Robot: Halloween', sv: 'The Perfect Robot: Halloween' },
      description: 'The Halloween world: ghost graves, crypt doors and a stormy night.',
      seconds: 25,
      uploaded: '2026-10-15',
    },
  ],
  theme: 'robot',
  schema: {
    genre: ['Puzzle', 'Strategy', 'Racing'],
    playMode: ['SinglePlayer', 'MultiPlayer'],
    gamePlatform: ['PC', 'iOS', 'Android'],
    operatingSystem: 'Windows, iOS, Android',
    alternateName: 'Tiny Treads',
  },
};

export const MURDER: Game = {
  slug: 'the-perfect-murder',
  name: 'The Perfect Murder',
  shortName: 'Murder',
  genre: { en: 'Noir social deduction game', sv: 'Mörkt sällskapsspel' },
  genreShort: { en: 'Social deduction', sv: 'Sällskapsspel' },
  stat: {
    value: '4–20',
    unit: { en: 'players', sv: 'spelare' },
    detail: { en: 'in one room or online', sv: 'i samma rum eller online' },
    label: { en: 'players, in one room or online', sv: 'spelare, i samma rum eller online' },
  },
  tagline: {
    en: 'Someone at this table is a killer. Trust no one.',
    sv: 'Någon vid det här bordet är en mördare. Lita på ingen.',
  },
  pitch: {
    // A range of players stays on one line ("4 to 20").
    en: 'A noir party game of secret roles for 4 to 20 players, in one room or online.',
    sv: 'Ett noir-partyspel med hemliga roller för 4 till 20 spelare, i samma rum eller online.',
  },
  metaDescription: {
    en: 'The Perfect Murder is a noir social deduction party game for 4 to 20 players, like Mafia or Werewolf. No game master: every phone is a player. Free to join.',
    sv: 'The Perfect Murder är ett noir-sällskapsspel för 4 till 20 spelare, som maffia eller varulv. Ingen spelledare: varje telefon är en spelare. Gratis att gå med.',
  },
  intro: {
    en: [
      'Everyone is secretly dealt a role: mafia, detective, doctor, or one of a cast of specialists. Each night the killers strike while the town sleeps. By day the survivors argue, accuse and vote.',
      'Bluff your way to victory, or read the room and unmask the guilty before it is too late. No game master needed: the game runs every night and every vote, so everyone gets to play.',
    ],
    sv: [
      'Alla får en hemlig roll: maffia, detektiv, läkare eller någon av många specialister. Varje natt slår mördarna till medan staden sover. På dagen grälar de överlevande, anklagar och röstar.',
      'Bluffa dig till seger, eller läs av rummet och avslöja de skyldiga innan det är för sent. Ingen spelledare behövs: spelet sköter varje natt och varje omröstning, så alla får spela.',
    ],
  },
  features: {
    en: [
      { title: 'In one room', text: 'Gather everyone in a room, each on their own phone.' },
      { title: 'Or online', text: 'Play over a video call, wherever your friends are.' },
      { title: '4 to 20 players', text: 'Works for a small group or a whole party.' },
      { title: 'A deep cast', text: 'Secret roles, night actions and day votes, quick to learn and hard to master.' },
      { title: 'The City Herald', text: 'Read the morning headlines, private notes and the winners’ Final Edition.' },
      { title: 'Free to join', text: 'Join any game with a room code. Only the host ever needs the Host Pass.' },
    ],
    sv: [
      { title: 'I samma rum', text: 'Samla alla i ett rum, var och en med sin egen telefon.' },
      { title: 'Eller online', text: 'Spela över ett videosamtal, var dina vänner än är.' },
      { title: '4 till 20 spelare', text: 'Passar en liten grupp eller en hel fest.' },
      { title: 'Många roller', text: 'Hemliga roller, nattliga handlingar och omröstningar på dagen. Lätt att lära, svårt att bemästra.' },
      { title: 'The City Herald', text: 'Läs morgonens rubriker, privata meddelanden och vinnarnas slutupplaga.' },
      { title: 'Gratis att gå med', text: 'Gå med i vilket spel som helst med en rumskod. Bara värden behöver Host Pass.' },
    ],
  },
  facts: {
    en: [
      { label: 'Genre', value: 'Social deduction, party game' },
      { label: 'Players', value: '4 to 20' },
      { label: 'Platforms', value: 'Browser, iOS, Android' },
      { label: 'Price', value: 'Free to join; one-time Host Pass for unlimited hosting' },
      { label: 'Developer', value: 'UX Productions, Sweden' },
    ],
    sv: [
      { label: 'Genre', value: 'Sällskapsspel, partyspel' },
      { label: 'Spelare', value: '4 till 20' },
      { label: 'Plattformar', value: 'Webbläsare, iOS, Android' },
      { label: 'Pris', value: 'Gratis att gå med; Host Pass en gång för obegränsat värdskap' },
      { label: 'Utvecklare', value: 'UX Productions, Sverige' },
    ],
  },
  faq: {
    en: [
      { q: 'Is it like Mafia or Werewolf?', a: 'Yes. The Perfect Murder is inspired by Mafia and Werewolf, with a 1920s noir look and no game master: the app runs the nights and the votes.' },
      { q: 'Does everyone need to pay?', a: 'No. Joining is always free, and so is the solo demo against bots. Your first few hosted games are free too; after that the one-time Host Pass covers everyone at your table.' },
      { q: 'Do we need to be in the same room?', a: 'No. Play in person, each on your own phone, or online over a video call.' },
    ],
    sv: [
      { q: 'Är det som maffia eller varulv?', a: 'Ja. The Perfect Murder är inspirerat av maffia och varulv, med en noir-stil från 1920-talet och utan spelledare: appen sköter nätterna och omröstningarna.' },
      { q: 'Måste alla betala?', a: 'Nej. Att gå med är alltid gratis, och det är soloversionen mot bottar också. De första spelen du är värd för är gratis; sedan täcker Host Pass alla vid ditt bord.' },
      { q: 'Måste vi vara i samma rum?', a: 'Nej. Spela på plats med var sin telefon, eller online över ett videosamtal.' },
    ],
  },
  platforms: ['Browser', 'iOS', 'Android'],
  stores: [
    { kind: 'web', url: 'https://the-perfect-murder.com' },
    { kind: 'appstore', url: 'https://apps.apple.com/us/app/the-perfect-murder/id6783261206' },
    { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=se.uxproductions.theperfectmurder' },
  ],
  website: 'https://the-perfect-murder.com',
  hero: murderHero,
  icon: murderIcon,
  shots: [
    { src: murder01, alt: { en: 'A secret role being revealed', sv: 'En hemlig roll avslöjas' } },
    { src: murder02, alt: { en: 'Night falls on the town', sv: 'Natten faller över staden' } },
    { src: murder03, alt: { en: 'The day vote', sv: 'Omröstningen på dagen' } },
    { src: murder04, alt: { en: 'Dawn: who did not survive the night', sv: 'Gryningen: vem överlevde inte natten' } },
    { src: murder05, alt: { en: 'Game over: the killers unmasked', sv: 'Spelet slut: mördarna avslöjade' } },
    { src: murder06, alt: { en: 'The lobby with players joining by room code', sv: 'Lobbyn där spelare går med med en rumskod' } },
  ],
  shotsPortrait: true,
  videos: [],
  theme: 'murder',
  schema: {
    genre: ['Social deduction', 'Party game'],
    playMode: ['MultiPlayer'],
    gamePlatform: ['Web browser', 'iOS', 'Android'],
    operatingSystem: 'Web, iOS, Android',
    numberOfPlayers: { min: 4, max: 20 },
  },
};

export const RACE: Game = {
  slug: 'the-perfect-race',
  name: 'The Perfect Race',
  shortName: 'Race',
  genre: { en: 'Top-down arcade racing', sv: 'Arkadracing uppifrån' },
  genreShort: { en: 'Arcade racing', sv: 'Arkadracing' },
  stat: {
    value: '5',
    unit: { en: 'circuits', sv: 'banor' },
    detail: { en: 'and three car classes', sv: 'och tre bilklasser' },
    label: { en: 'circuits and three car classes', sv: 'banor och tre bilklasser' },
  },
  tagline: {
    en: 'One more corner. One cleaner line. One perfect lap.',
    sv: 'En kurva till. En renare linje. Ett perfekt varv.',
  },
  pitch: {
    en: 'A top-down arcade racer built around drift, momentum and a ghost ladder you can trust.',
    sv: 'Ett arkadracingspel uppifrån byggt kring sladd, fart och en spökliga du kan lita på.',
  },
  metaDescription: {
    en: 'The Perfect Race is a top-down arcade racer: drift-happy handling, Time Attack with server-verified ghost laps, seasonal leaderboards and live races. Play free.',
    sv: 'The Perfect Race är ett arkadracingspel uppifrån: sladdvänlig körkänsla, Time Attack med verifierade spökvarv, säsongstopplistor och livespel. Spela gratis.',
  },
  intro: {
    en: [
      'Brake late, rotate the car, catch the slide and carry speed onto the straight, then race the ghost of the lap ahead of you. Handling inspired by the arcade racers of the early 90s.',
      'Set your best time, chase verified ghost laps up the seasonal ladder, or meet other drivers wheel to wheel in live rooms. Start free in your browser.',
    ],
    sv: [
      'Bromsa sent, rotera bilen, fånga sladden och bär farten ut på rakan, och tävla sedan mot spöket från varvet framför dig. Körkänsla inspirerad av arkadracing från tidigt 90-tal.',
      'Sätt din bästa tid, jaga verifierade spökvarv uppför säsongens stege eller möt andra förare hjul mot hjul i livespel. Börja gratis i webbläsaren.',
    ],
  },
  features: {
    en: [
      { title: 'Quick Race', text: 'A full field of distinctive AI drivers, also offline.' },
      { title: 'Time Attack', text: 'Server-verified laps, seasonal boards and downloadable ghosts.' },
      { title: 'Live rooms', text: 'Qualifying and wheel-to-wheel racing with friends.' },
      { title: 'Deathmatch', text: 'A separate vehicle combat mode with stylized weapons.' },
      { title: 'Five circuits', text: 'Each with its own grip, rhythm, weather and racing line.' },
      { title: 'Three car classes', text: 'Each with its own handling and leaderboard.' },
    ],
    sv: [
      { title: 'Quick Race', text: 'Ett fullt startfält med egensinniga AI-förare, även offline.' },
      { title: 'Time Attack', text: 'Verifierade varv, säsongstopplistor och spökvarv att ladda ner.' },
      { title: 'Livespel', text: 'Kvalificering och racing hjul mot hjul med vänner.' },
      { title: 'Deathmatch', text: 'Ett eget stridsläge med fordon och stiliserade vapen.' },
      { title: 'Fem banor', text: 'Var och en med eget grepp, rytm, väder och linje.' },
      { title: 'Tre bilklasser', text: 'Var och en med egen körkänsla och topplista.' },
    ],
  },
  facts: {
    en: [
      { label: 'Genre', value: 'Arcade racing, time attack' },
      { label: 'Platforms', value: 'Browser, iOS, Android' },
      { label: 'Content', value: 'Five circuits, three car classes, Deathmatch arena' },
      { label: 'Price', value: 'Free to start; one-time Full Game unlock' },
      { label: 'Developer', value: 'UX Productions, Sweden' },
    ],
    sv: [
      { label: 'Genre', value: 'Arkadracing, time attack' },
      { label: 'Plattformar', value: 'Webbläsare, iOS, Android' },
      { label: 'Innehåll', value: 'Fem banor, tre bilklasser, deathmatch-arena' },
      { label: 'Pris', value: 'Gratis att börja; hela spelet låses upp med ett köp' },
      { label: 'Utvecklare', value: 'UX Productions, Sverige' },
    ],
  },
  faq: {
    en: [
      { q: 'Can I play without an account?', a: 'Yes. Race Breaker Bay in the Supercar class, play the Oval Arena and try Quick Race without an account. An account adds Time Attack publishing, friends and multiplayer.' },
      { q: 'What does the Full Game unlock?', a: 'Every launch circuit and car class, the Ring Arena and room hosting, with one permanent purchase. No ads and no subscription.' },
    ],
    sv: [
      { q: 'Kan jag spela utan konto?', a: 'Ja. Kör Breaker Bay i Supercar-klassen, spela Oval Arena och prova Quick Race utan konto. Med ett konto kan du publicera tider i Time Attack, lägga till vänner och spela multiplayer.' },
      { q: 'Vad låser hela spelet upp?', a: 'Alla banor och bilklasser från lanseringen, Ring Arena och att vara värd för rum, med ett enda köp. Ingen reklam och ingen prenumeration.' },
    ],
  },
  platforms: ['Browser', 'iOS', 'Android'],
  stores: [
    { kind: 'web', url: 'https://the-perfect-race.com' },
    { kind: 'appstore', url: 'https://apps.apple.com/us/app/the-perfect-race/id6800795522' },
    { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=se.uxproductions.theperfectrace' },
  ],
  website: 'https://the-perfect-race.com',
  hero: raceHero,
  icon: raceIcon,
  shots: [
    { src: race01, alt: { en: 'Racing through Breaker Bay', sv: 'Racing genom Breaker Bay' } },
    { src: race02, alt: { en: 'Switchback Nocturne at night', sv: 'Switchback Nocturne på natten' } },
    { src: race03, alt: { en: 'Fallow Pines', sv: 'Fallow Pines' } },
    { src: race04, alt: { en: 'The Time Attack ladder', sv: 'Stegen i Time Attack' } },
    { src: race05, alt: { en: 'A live room lobby', sv: 'Lobbyn i ett livespel' } },
  ],
  shotsPortrait: true,
  videos: [],
  theme: 'race',
  schema: {
    genre: ['Racing', 'Arcade'],
    playMode: ['SinglePlayer', 'MultiPlayer'],
    gamePlatform: ['Web browser', 'iOS', 'Android'],
    operatingSystem: 'Web, iOS, Android',
  },
};

export const PART: Game = {
  slug: 'the-perfect-part',
  name: 'The Perfect Part',
  shortName: 'Part',
  genre: { en: 'Casual machining puzzle', sv: 'Avslappnat fräspussel' },
  genreShort: { en: 'Machining puzzle', sv: 'Fräspussel' },
  stat: {
    value: '3',
    unit: { en: 'stars', sv: 'stjärnor' },
    detail: { en: 'a job: passed, on time, clean', sv: 'per jobb: godkänd, i tid, ren yta' },
    label: { en: 'stars a job: passed, on time and a clean finish', sv: 'stjärnor per jobb: godkänd, i tid och ren yta' },
  },
  tagline: {
    en: 'Measure twice, cut once.',
    sv: 'Mät två gånger, fräs en gång.',
  },
  pitch: {
    en: 'Record a CNC program step by step, press CYCLE START and watch the cutter carve the part you planned.',
    sv: 'Spela in ett CNC-program steg för steg, tryck på CYCLE START och se fräsen skära ut detaljen du planerade.',
  },
  metaDescription: {
    en: 'The Perfect Part is a casual machining puzzle: record steps at a CNC console, press CYCLE START and watch your part being cut. Coming to iOS, Android and Steam.',
    sv: 'The Perfect Part är ett fräspussel: spela in stegen vid en CNC-panel, tryck på CYCLE START och se fräsen skära ut detaljen. Kommer till iOS, Android och Steam.',
  },
  intro: {
    en: [
      'A work order comes in with a drawing: a machine foot, a bolt tray, a servo bracket. A block of aluminium sits in the vise and the tools for the job hang in the rack, a few of them tempting and wrong. Record the program one step at a time at the machine’s console, press CYCLE START and watch the cutter carve the block exactly as you told it to, chips flying.',
      'The steps you record become real machine code, and the inspector measures the finished part against the drawing. A long cutter reaches deep but wobbles, a long drill wanders unless a spot drill seats it first, and a round cutter leaves its radius in every inside corner. The puzzle is in the plan.',
    ],
    sv: [
      'En arbetsorder kommer in med en ritning: en maskinfot, ett bultfack, en servokonsol. Ett aluminiumblock sitter i skruvstycket och verktygen för jobbet hänger i stället, några av dem frestande och fel. Spela in programmet ett steg i taget vid maskinens panel, tryck på CYCLE START och se fräsen skära blocket precis som du sa, så att spånen flyger.',
      'Stegen du spelar in blir riktig maskinkod, och kontrollanten mäter den färdiga detaljen mot ritningen. En lång fräs når djupt men vibrerar, en lång borr vandrar om inte en centrumborr sätter den först, och en rund fräs lämnar sin radie i varje innerhörn. Pusslet ligger i planen.',
    ],
  },
  features: {
    en: [
      { title: 'Work orders', text: 'A drawing with its dimensions, a block in the vise and the tools for the job in the rack.' },
      { title: 'Record the program', text: 'NEW STEP, a tool, an operation, tap the part, STORE: all at the machine’s console.' },
      { title: 'CYCLE START', text: 'Your steps become real machine code, and the cutter carves the block exactly as told.' },
      { title: 'Three stars', text: 'Passed inspection, inside the time goal and a clean finish. TRY AGAIN keeps your program.' },
      { title: 'Apprentice and Machinist', text: 'The zero set for you and warnings before a run, or no warnings and the zero is yours.' },
      { title: 'Playground', text: 'Make your own part on the block’s grid, then machine it.' },
    ],
    sv: [
      { title: 'Arbetsordrar', text: 'En ritning med mått, ett block i skruvstycket och verktygen för jobbet i stället.' },
      { title: 'Spela in programmet', text: 'NEW STEP, ett verktyg, en operation, tryck på detaljen, STORE: allt vid maskinens panel.' },
      { title: 'CYCLE START', text: 'Dina steg blir riktig maskinkod, och fräsen skär blocket precis som du sa.' },
      { title: 'Tre stjärnor', text: 'Godkänd kontroll, inom tidsmålet och en ren yta. TRY AGAIN behåller ditt program.' },
      { title: 'Apprentice och Machinist', text: 'Nollpunkten satt åt dig och varningar före körningen, eller inga varningar och nollpunkten är din.' },
      { title: 'Playground', text: 'Gör din egen detalj på blockets rutnät och fräs ut den.' },
    ],
  },
  facts: {
    en: [
      { label: 'Genre', value: 'Casual machining puzzle' },
      { label: 'Platforms', value: 'iOS, Android, Windows (Steam)' },
      { label: 'Release', value: 'Coming soon, no date yet' },
      { label: 'Modes', value: 'Apprentice and Machinist, Playground' },
      { label: 'Developer', value: 'UX Productions, Sweden' },
    ],
    sv: [
      { label: 'Genre', value: 'Avslappnat fräspussel' },
      { label: 'Plattformar', value: 'iOS, Android, Windows (Steam)' },
      { label: 'Släpps', value: 'Snart, inget datum ännu' },
      { label: 'Spellägen', value: 'Apprentice och Machinist, Playground' },
      { label: 'Utvecklare', value: 'UX Productions, Sverige' },
    ],
  },
  faq: {
    en: [
      { q: 'When does it come out?', a: 'There is no date yet. The Perfect Part is coming to iPhone, iPad, Android phones and tablets and to Windows on Steam; we will post on our news page and our socials when there is a date.' },
      { q: 'Do I need to know CNC machining or G-code?', a: 'No. You record each step with a few keys and taps on the part, in plain words. The game writes the machine code from your steps, and shows it on the console’s screen while it cuts.' },
      { q: 'What happens when a run goes wrong?', a: 'Nothing is lost. TRY AGAIN puts a fresh block in the vise and keeps your program, so you only fix the step that went wrong. As an Apprentice, the machine also stops itself the moment before a crash.' },
    ],
    sv: [
      { q: 'När kommer det?', a: 'Det finns inget datum ännu. The Perfect Part kommer till iPhone, iPad, Android-telefoner och surfplattor och till Windows på Steam; vi skriver på nyhetssidan och i våra sociala kanaler när det finns ett datum.' },
      { q: 'Måste jag kunna CNC-fräsning eller G-kod?', a: 'Nej. Du spelar in varje steg med några knappar och tryck på detaljen, med vanliga ord. Spelet skriver maskinkoden utifrån dina steg och visar den på panelens skärm medan fräsen skär.' },
      { q: 'Vad händer när en körning går fel?', a: 'Inget går förlorat. TRY AGAIN sätter ett nytt block i skruvstycket och behåller ditt program, så du rättar bara steget som gick fel. Som Apprentice stannar maskinen också själv precis innan en krock.' },
    ],
  },
  platforms: ['iOS', 'Android', 'Steam'],
  stores: [],
  comingSoon: { en: 'Coming soon to iOS, Android and Steam', sv: 'Kommer snart till iOS, Android och Steam' },
  hero: partHero,
  card: partCard,
  icon: partIcon,
  logo: partLogo,
  // Six of the seven screenshots (the press kit has all seven), so they make full rows.
  shots: [
    { src: part01, alt: { en: 'The work order: a drawing with dimensions and the ordered part turning in 3D', sv: 'Arbetsordern: en ritning med mått och den beställda detaljen som snurrar i 3D' } },
    { src: part03, alt: { en: 'CYCLE START: the end mill cuts the pocket while the console shows the program running', sv: 'CYCLE START: pinnfräsen skär fickan medan panelen visar programmet som körs' } },
    { src: part04, alt: { en: 'A planned path in red where the holder would hit the part', sv: 'En planerad bana i rött där hållaren skulle slå i detaljen' } },
    { src: part05, alt: { en: 'Inspection: the finished part coloured where it is in and out of tolerance', sv: 'Kontrollen: den färdiga detaljen färgad där den är inom och utanför toleransen' } },
    { src: part06, alt: { en: 'A passed job with three stars and the cycle time against a simulated shop', sv: 'Ett godkänt jobb med tre stjärnor och cykeltiden mot en simulerad verkstad' } },
    { src: part07, alt: { en: 'Close up: a pocket being cut in a block of aluminium, chips flying', sv: 'På nära håll: en ficka skärs i ett aluminiumblock och spånen flyger' } },
  ],
  videos: [
    {
      file: '/video/the-perfect-part-gameplay.mp4',
      poster: partGameplayPoster,
      title: { en: 'The Perfect Part: gameplay', sv: 'The Perfect Part: spelet' },
      description: 'One job, the Bolt tray, from recording the step to three stars, then the Gimbal block cut and revealed.',
      seconds: 35,
      uploaded: '2026-10-19',
      size: '1920x1080',
      gameplay: true,
    },
  ],
  theme: 'part',
  schema: {
    genre: ['Puzzle', 'Simulation'],
    playMode: ['SinglePlayer'],
    gamePlatform: ['PC', 'iOS', 'Android'],
    operatingSystem: 'Windows, iOS, Android',
  },
};

export const GAMES: Game[] = [ROBOT, MURDER, RACE, PART];
export const gameBySlug = (slug: string) => GAMES.find((g) => g.slug === slug);
