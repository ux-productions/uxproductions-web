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
    qualityOverQuantity: string;
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
    inSweden: string;
  };
  log: {
    title: string;
    demo: string;
    games: string;
    tools: string;
    cheat: string;
  };
}

export const translations: Record<Language, Translations> = {
  sv: {
    nav: {
      home: 'Hem',
      games: 'Spel',
      tools: 'Verktyg',
      about: 'Om oss',
      contact: 'Kontakt',
      privacy: 'Integritetspolicy',
    },
    hero: {
      title: 'Handgjorda spelupplevelser',
      subtitle: 'Vi skapar pedagogiska spel, klassiska äventyr och verktyg för utvecklare.',
      cta: 'Utforska våra spel',
      qualityOverQuantity: 'KVALITET FÖRE KVANTITET',
    },
    games: {
      title: 'Våra Spel',
      subtitle: 'Pedagogiska spel och klassiska äventyr',
      comingSoon: 'Kommer snart',
      learnMore: 'Läs mer',
    },
    tools: {
      title: 'Verktyg',
      subtitle: 'Kraftfulla verktyg för spelutvecklare',
      viewOnAssetStore: 'Visa på Asset Store',
    },
    about: {
      title: 'Om UX Productions',
      description: 'Svenskt spelutvecklingsföretag i Mälardalen sedan 2013. Vi skapar pedagogiska spel, klassiska äventyr och verktyg för utvecklare.',
      mission: 'Vårt löfte',
      missionText: 'Vi släpper aldrig något som inte är väl genomarbetat. Kvalitet före kvantitet.',
    },
    contact: {
      title: 'Kontakta oss',
      subtitle: 'Har du frågor eller vill veta mer? Hör gärna av dig!',
      email: 'E-post',
      address: 'Adress',
      orgNumber: 'Org.nummer',
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
      inSweden: 'i Sverige',
    },
    log: {
      title: 'SYSTEM LOGG',
      demo: 'Demo uppdaterad',
      games: 'Spelmodul initierad',
      tools: 'Verktygsmodul initierad',
      cheat: 'Stöd för fusk tillagt',
    },
  },
  en: {
    nav: {
      home: 'Home',
      games: 'Games',
      tools: 'Tools',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy Policy',
    },
    hero: {
      title: 'Handcrafted game experiences',
      subtitle: 'We create educational games, classic adventures, and tools for developers.',
      cta: 'Explore our games',
      qualityOverQuantity: 'QUALITY OVER QUANTITY',
    },
    games: {
      title: 'Our Games',
      subtitle: 'Educational games and classic adventures',
      comingSoon: 'Coming soon',
      learnMore: 'Learn more',
    },
    tools: {
      title: 'Tools',
      subtitle: 'Powerful tools for game developers',
      viewOnAssetStore: 'View on Asset Store',
    },
    about: {
      title: 'About UX Productions',
      description: 'Swedish game development company in Mälardalen since 2013. We create educational games, classic adventures, and tools for developers.',
      mission: 'Our Promise',
      missionText: 'We never release anything that isn\'t well-crafted. Quality over quantity.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have questions or want to know more? Get in touch!',
      email: 'Email',
      address: 'Address',
      orgNumber: 'Org. Number',
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
      inSweden: 'in Sweden',
    },
    log: {
      title: 'SYSTEM LOG',
      demo: 'Demo updated',
      games: 'Games module initialized',
      tools: 'Tools module initialized',
      cheat: 'Cheat code support added',
    },
  },
};
