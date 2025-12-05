import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-2 group">
            <img src="images/logo.png" alt="UX Productions" class="h-10 w-auto" />
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="text-amber-400 bg-slate-800"
               [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.home }}
            </a>
            <a routerLink="/games" routerLinkActive="text-amber-400 bg-slate-800"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.games }}
            </a>
            <a routerLink="/tools" routerLinkActive="text-amber-400 bg-slate-800"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.tools }}
            </a>
            <a routerLink="/about" routerLinkActive="text-amber-400 bg-slate-800"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.about }}
            </a>
          </div>

          <!-- Language Toggle & Mobile Menu -->
          <div class="flex items-center gap-2">
            <div class="relative">
              <button
                (click)="langDropdownOpen = !langDropdownOpen"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium border border-slate-700"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                {{ langService.language() === 'sv' ? 'Svenska' : 'English' }}
                <svg class="w-3 h-3 transition-transform" [class.rotate-180]="langDropdownOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              @if (langDropdownOpen) {
                <div class="absolute right-0 mt-2 w-36 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50">
                  <button
                    (click)="selectLanguage('sv')"
                    class="w-full px-4 py-2.5 text-left text-sm hover:bg-slate-700 transition-colors flex items-center gap-2"
                    [class.text-amber-400]="langService.language() === 'sv'"
                    [class.text-slate-300]="langService.language() !== 'sv'"
                  >
                    @if (langService.language() === 'sv') {
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    }
                    Svenska
                  </button>
                  <button
                    (click)="selectLanguage('en')"
                    class="w-full px-4 py-2.5 text-left text-sm hover:bg-slate-700 transition-colors flex items-center gap-2"
                    [class.text-amber-400]="langService.language() === 'en'"
                    [class.text-slate-300]="langService.language() !== 'en'"
                  >
                    @if (langService.language() === 'en') {
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    }
                    English
                  </button>
                </div>
              }
            </div>

            <!-- Mobile Menu Button -->
            <button
              (click)="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                @if (mobileMenuOpen) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        @if (mobileMenuOpen) {
          <div class="md:hidden py-4 border-t border-slate-800">
            <div class="flex flex-col gap-1">
              <a routerLink="/" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
                {{ t().nav.home }}
              </a>
              <a routerLink="/games" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
                {{ t().nav.games }}
              </a>
              <a routerLink="/tools" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
                {{ t().nav.tools }}
              </a>
              <a routerLink="/about" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
                {{ t().nav.about }}
              </a>
            </div>
          </div>
        }
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
  protected mobileMenuOpen = false;
  protected langDropdownOpen = false;

  protected selectLanguage(lang: 'sv' | 'en') {
    this.langService.setLanguage(lang);
    this.langDropdownOpen = false;
  }
}
