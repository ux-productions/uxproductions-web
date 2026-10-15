import type { ImageMetadata } from 'astro';
import type { Lang } from './site';

import robotHero from '../assets/robot/hero.jpg';
import robotCapsule from '../assets/robot/capsule.jpg';
import robotLogo from '../assets/robot/logo.png';
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
import murderCard from '../assets/murder/card.jpg';
import murder01 from '../assets/murder/01-role-reveal.jpg';
import murder02 from '../assets/murder/02-night.jpg';
import murder03 from '../assets/murder/03-day.jpg';
import murder04 from '../assets/murder/04-dawn.jpg';
import murder05 from '../assets/murder/05-gameover.jpg';
import murder06 from '../assets/murder/06-lobby.jpg';
import raceHero from '../assets/race/hero.jpg';
import raceCard from '../assets/race/card.jpg';
import race01 from '../assets/race/01-breaker-bay.jpg';
import race02 from '../assets/race/02-switchback-nocturne.jpg';
import race03 from '../assets/race/03-fallow-pines.jpg';
import race04 from '../assets/race/04-ladder.jpg';
import race05 from '../assets/race/05-lobby.jpg';

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
}

export interface Game {
  slug: string;
  name: string;
  shortName: string;
  /** Store subtitle: the genre in a few words. */
  genre: L;
  /** The genre in two or three words, for tight spots like the front page spines. */
  genreShort: L;
  /** One concrete number about the game, for the front page spines and tiles and the studio facts. */
  stat: { value: string; label: L };
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
  stores: Store[];
  website?: string;
  hero: ImageMetadata;
  card: ImageMetadata;
  logo?: ImageMetadata;
  shots: Shot[];
  shotsPortrait?: boolean;
  videos: Video[];
  theme: 'robot' | 'murder' | 'race';
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

export const ROBOT: Game = {
  slug: 'the-perfect-robot',
  name: 'The Perfect Robot',
  shortName: 'Robot',
  genre: { en: 'Programming puzzles and races', sv: 'Programmeringspussel och race' },
  genreShort: { en: 'Programming puzzles', sv: 'Programmeringspussel' },
  stat: { value: '57', label: { en: 'hand-made levels in six worlds', sv: 'handgjorda banor i sex världar' } },
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
      { label: 'Släpps på Steam', value: '22 oktober 2026' },
      { label: 'Hette tidigare', value: 'Tiny Treads' },
      { label: 'Utvecklare', value: 'UX Productions, Sverige' },
    ],
  },
  faq: {
    en: [
      { q: 'Do I need to know how to code?', a: 'No. You program with six move cards: forward, two forward, back, turn left, turn right and wait. The puzzle is in the order you lay them down.' },
      { q: 'When is it out on Steam?', a: 'The Perfect Robot comes out on Steam on 22 October 2026. It is already out on iOS and Android.' },
      { q: 'Can I play with friends?', a: 'Yes. Race or battle friends online, or take on robot rivals in Quick Game.' },
      { q: 'Is this the game that was called Tiny Treads?', a: 'Yes. Tiny Treads became The Perfect Robot with version 2.0 in 2026, with new worlds, new levels and a new look. Your progress carried over.' },
      { q: 'Does it have ads or a subscription?', a: 'No. There are no ads, no subscription and no accounts.' },
    ],
    sv: [
      { q: 'Måste jag kunna programmera?', a: 'Nej. Du programmerar med sex rörelsekort: framåt, två framåt, bakåt, vänd vänster, vänd höger och vänta. Pusslet ligger i ordningen du lägger dem i.' },
      { q: 'När kommer det på Steam?', a: 'The Perfect Robot släpps på Steam den 22 oktober 2026. Det finns redan på iOS och Android.' },
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
  card: robotCapsule,
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
  stat: { value: '4–20', label: { en: 'players, in one room or online', sv: 'spelare, i samma rum eller online' } },
  tagline: {
    en: 'Someone at this table is a killer. Trust no one.',
    sv: 'Någon vid det här bordet är en mördare. Lita på ingen.',
  },
  pitch: {
    en: 'A noir party game of secret roles for 4 to 20 players, in one room or online.',
    sv: 'Ett noir-partyspel med hemliga roller för 4 till 20 spelare, i samma rum eller online.',
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
  card: murderCard,
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
  stat: { value: '4', label: { en: 'circuits and three car classes', sv: 'banor och tre bilklasser' } },
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
      { title: 'Four circuits', text: 'Each with its own grip, rhythm, weather and racing line.' },
      { title: 'Three car classes', text: 'Each with its own handling and leaderboard.' },
    ],
    sv: [
      { title: 'Quick Race', text: 'Ett fullt startfält med egensinniga AI-förare, även offline.' },
      { title: 'Time Attack', text: 'Verifierade varv, säsongstopplistor och spökvarv att ladda ner.' },
      { title: 'Livespel', text: 'Kvalificering och racing hjul mot hjul med vänner.' },
      { title: 'Deathmatch', text: 'Ett eget stridsläge med fordon och stiliserade vapen.' },
      { title: 'Fyra banor', text: 'Var och en med eget grepp, rytm, väder och linje.' },
      { title: 'Tre bilklasser', text: 'Var och en med egen körkänsla och topplista.' },
    ],
  },
  facts: {
    en: [
      { label: 'Genre', value: 'Arcade racing, time attack' },
      { label: 'Platforms', value: 'Browser, iOS, Android' },
      { label: 'Content', value: 'Four circuits, three car classes, Deathmatch arena' },
      { label: 'Price', value: 'Free to start; one-time Full Game unlock' },
      { label: 'Developer', value: 'UX Productions, Sweden' },
    ],
    sv: [
      { label: 'Genre', value: 'Arkadracing, time attack' },
      { label: 'Plattformar', value: 'Webbläsare, iOS, Android' },
      { label: 'Innehåll', value: 'Fyra banor, tre bilklasser, deathmatch-arena' },
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
  card: raceCard,
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

export const GAMES: Game[] = [ROBOT, MURDER, RACE];
export const gameBySlug = (slug: string) => GAMES.find((g) => g.slug === slug);
