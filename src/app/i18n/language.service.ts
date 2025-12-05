import { Injectable, signal, computed } from '@angular/core';
import { Language, translations, Translations } from './translations';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'ux-productions-lang';

  private readonly currentLanguage = signal<Language>(this.getInitialLanguage());

  readonly language = this.currentLanguage.asReadonly();

  readonly t = computed<Translations>(() => translations[this.currentLanguage()]);

  private getInitialLanguage(): Language {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'sv' || stored === 'en') {
        return stored;
      }
    }
    // Default to Swedish as per requirement
    return 'sv';
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.storageKey, lang);
    }
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage() === 'sv' ? 'en' : 'sv';
    this.setLanguage(newLang);
  }
}
