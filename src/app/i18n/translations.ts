export type Language = 'sv' | 'en';

export interface Translations {
  nav: {
    home: string;
    games: string;
    tools: string;
    about: string;
    contact: string;
    privacy: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  games: {
    title: string;
    subtitle: string;
    comingSoon: string;
    learnMore: string;
  };
  tools: {
    title: string;
    subtitle: string;
    viewOnAssetStore: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    missionText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    address: string;
    orgNumber: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
  };
  demo: {
    title: string;
    comingSoon: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  sv: {
    nav: {
      home: 'Hem',
      games: 'Spel',
      tools: 'Verktyg',
      about: 'Om oss & Kontakt',
      contact: 'Kontakt',
      privacy: 'Integritetspolicy',
    },
    hero: {
      title: 'Spelutveckling i Mälardalen sedan 2013',
      subtitle: 'Utvecklare av lärospel och interaktiva upplevelser för förskola, förskoleklass, skola eller hemma. Vårt talangfulla och hängivna team ser till att allting som vi skapar är lärorikt, roligt och spännande.',
      cta: 'Utforska våra spel',
    },
    games: {
      title: 'Våra Spel',
      subtitle: 'Lärospel för förskola, förskoleklass, skola och hemma',
      comingSoon: 'Kommer snart',
      learnMore: 'Läs mer',
    },
    tools: {
      title: 'Utvecklarverktyg',
      subtitle: 'Unity-verktyg för spelutvecklare',
      viewOnAssetStore: 'Visa på Asset Store',
    },
    about: {
      title: 'Om UX Productions',
      description: 'UX Productions AB är ett svenskt spelutvecklingsföretag i Mälardalen som sedan 2013 specialiserar sig på lärospel och interaktiva upplevelser för förskola, förskoleklass, skola eller hemma.',
      mission: 'Vårt uppdrag',
      missionText: 'Vi har som målsättning att aldrig släppa något som inte är väl genomarbetat. Vårt talangfulla och hängivna team ser till att allting som vi skapar är lärorikt, roligt och spännande.',
    },
    contact: {
      title: 'Kontakta oss',
      subtitle: 'Har du frågor eller vill veta mer? Hör gärna av dig!',
      email: 'E-post',
      address: 'Adress',
      orgNumber: 'Kontaktperson',
    },
    privacy: {
      title: 'Integritetspolicy',
      lastUpdated: 'Senast uppdaterad',
    },
    demo: {
      title: 'Provspela',
      comingSoon: 'Demo kommer snart!',
    },
    footer: {
      rights: 'Alla rättigheter förbehållna.',
      madeWith: 'Skapat med',
    },
  },
  en: {
    nav: {
      home: 'Home',
      games: 'Games',
      tools: 'Tools',
      about: 'About & Contact',
      contact: 'Contact',
      privacy: 'Privacy Policy',
    },
    hero: {
      title: 'Game Development in Mälardalen since 2013',
      subtitle: 'Developer of educational games and interactive experiences for preschool, kindergarten, school, or home. Our talented and dedicated team ensures that everything we create is educational, fun, and exciting.',
      cta: 'Explore our games',
    },
    games: {
      title: 'Our Games',
      subtitle: 'Educational games for preschool, kindergarten, school, and home',
      comingSoon: 'Coming soon',
      learnMore: 'Learn more',
    },
    tools: {
      title: 'Developer Tools',
      subtitle: 'Unity tools for game developers',
      viewOnAssetStore: 'View on Asset Store',
    },
    about: {
      title: 'About UX Productions',
      description: 'UX Productions AB is a Swedish game development company in Mälardalen that since 2013 specializes in educational games and interactive experiences for preschool, kindergarten, school, or home.',
      mission: 'Our Mission',
      missionText: 'Our goal is to never release anything that is not well-crafted. Our talented and dedicated team ensures that everything we create is educational, fun, and exciting.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have questions or want to know more? Get in touch!',
      email: 'Email',
      address: 'Address',
      orgNumber: 'Contact Person',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
    },
    demo: {
      title: 'Try Demo',
      comingSoon: 'Demo coming soon!',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
    },
  },
};
