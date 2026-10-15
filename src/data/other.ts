import type { ImageMetadata } from 'astro';
import type { Lang } from './site';
import skattjakten from '../assets/other/game-skattjakten.jpg';
import aha from '../assets/other/game-aha.jpg';

type L = Record<Lang, string>;

export interface Work {
  id: string;
  title: string;
  image?: ImageMetadata;
  short: L;
  text: L;
  audience?: L;
  credits?: { role: L; name: string }[];
  links: { label: L; url: string }[];
}

export const OTHER_WORK: Work[] = [
  {
    id: 'skattjakten',
    title: 'Skattjakten',
    image: skattjakten,
    short: {
      en: 'A daily word puzzle for school: work out the secret proverb or quote.',
      sv: 'Ett dagligt ordpussel för skolan: lista ut det hemliga ordspråket eller citatet.',
    },
    text: {
      en: 'Skattjakten (The Treasure Hunt) is a fun app where you figure out a secret sentence, a proverb or a thought-provoking quote. At the same time the student practises word formation and logical thinking. The app features an exciting treasure hunt in several unique, atmospheric environments, with a new proverb or quote every day. In Swedish.',
      sv: 'Skattjakten är en rolig app där det gäller att lista ut en hemlig mening, som är ett ordspråk eller ett tankeväckande citat. Samtidigt övar eleven på ordbildning och logiskt tänkande. Appen har en spännande skattjakt i flera unika stämningsfulla miljöer. Spela dagens ordspråk eller citat och få ett nytt varje dag.',
    },
    audience: {
      en: 'Individuals or schools: grades 3-9, upper secondary and adult education',
      sv: 'Privatpersoner eller skolor: grundskolan åk 3-9, gymnasieskolan och vuxenundervisning',
    },
    credits: [
      { role: { en: 'Pedagogy', sv: 'Pedagogik' }, name: 'Alfamax AB' },
      { role: { en: 'Development, illustrations, sound', sv: 'Programutveckling, illustrationer, ljud' }, name: 'UX Productions AB' },
    ],
    links: [
      { label: { en: 'App Store', sv: 'App Store' }, url: 'https://apps.apple.com/app/id6447555720' },
      { label: { en: 'Google Play', sv: 'Google Play' }, url: 'https://play.google.com/store/apps/details?id=se.alfamax.skattjakten' },
    ],
  },
  {
    id: 'aha-en-eller-ett',
    title: 'AHA - en eller ett?',
    image: aha,
    short: {
      en: 'Learn Swedish words with 500 hand-drawn pictures and four games.',
      sv: 'Lär dig svenska ord med 500 tecknade bilder och fyra spel.',
    },
    text: {
      en: 'Learn words with the help of 500 beautifully drawn pictures. AHA has four different games at several levels of difficulty, for children and adults who want to learn the Swedish language.',
      sv: 'Här kan du lära dig ord med hjälp av 500 fint tecknade bilder. AHA innehåller fyra olika spel i flera svårighetsnivåer och kan användas av barn och vuxna som vill lära sig svenska språket.',
    },
    audience: {
      en: 'Children and adults learning Swedish',
      sv: 'Barn och vuxna som vill lära sig svenska',
    },
    credits: [
      { role: { en: 'Pedagogy', sv: 'Pedagogik' }, name: 'Alfamax AB' },
      { role: { en: 'Illustrations', sv: 'Illustrationer' }, name: 'UDAL Design' },
      { role: { en: 'Development', sv: 'Programutveckling' }, name: 'UX Productions AB' },
    ],
    links: [
      { label: { en: 'App Store', sv: 'App Store' }, url: 'https://apps.apple.com/app/id6447555160' },
      { label: { en: 'Google Play', sv: 'Google Play' }, url: 'https://play.google.com/store/apps/details?id=se.alfamax.aha' },
    ],
  },
];
