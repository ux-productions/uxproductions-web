import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/95 backdrop-blur-sm border-b-2 border-amber-500/30">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-2 group">
            <img src="images/logo.png" alt="UX Productions" class="h-10 w-auto" />
            <span class="font-pixel text-amber-400 text-base hidden sm:inline">UX PRODUCTIONS</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="!text-amber-400 !border-amber-500"
               [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 font-pixel text-base text-amber-100/70 hover:text-amber-400 border-b-2 border-transparent hover:border-amber-500/50 transition-all">
              {{ t().nav.home }}
            </a>
            <a routerLink="/games" routerLinkActive="!text-amber-400 !border-amber-500"
               class="px-4 py-2 font-pixel text-base text-amber-100/70 hover:text-amber-400 border-b-2 border-transparent hover:border-amber-500/50 transition-all">
              {{ t().nav.games }}
            </a>
            <a routerLink="/tools" routerLinkActive="!text-amber-400 !border-amber-500"
               class="px-4 py-2 font-pixel text-base text-amber-100/70 hover:text-amber-400 border-b-2 border-transparent hover:border-amber-500/50 transition-all">
              {{ t().nav.tools }}
            </a>
            <a routerLink="/about" routerLinkActive="!text-amber-400 !border-amber-500"
               class="px-4 py-2 font-pixel text-base text-amber-100/70 hover:text-amber-400 border-b-2 border-transparent hover:border-amber-500/50 transition-all">
              {{ t().nav.about }}
            </a>
          </div>

          <!-- Language Toggle & Mobile Menu -->
          <div class="flex items-center gap-2">
            <div class="relative">
              <button
                (click)="langDropdownOpen = !langDropdownOpen"
                class="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 text-amber-100/70 hover:text-amber-400 transition-all font-pixel text-sm border-2 border-amber-500/30 hover:border-amber-500"
              >
                <span class="text-amber-500">▸</span>
                {{ langService.language() === 'sv' ? 'SV' : 'EN' }}
              </button>
              @if (langDropdownOpen) {
                <div class="absolute right-0 mt-1 w-36 bg-[#0a0a1a] border-2 border-amber-500/50 shadow-xl shadow-amber-500/10 overflow-hidden z-50">
                  <button
                    (click)="selectLanguage('sv')"
                    class="w-full px-4 py-2.5 text-left font-pixel text-sm hover:bg-amber-500/20 transition-colors flex items-center gap-2"
                    [class.text-amber-400]="langService.language() === 'sv'"
                    [class.text-amber-100/60]="langService.language() !== 'sv'"
                  >
                    @if (langService.language() === 'sv') {
                      <span class="text-amber-400">►</span>
                    } @else {
                      <span class="opacity-0">►</span>
                    }
                    SVENSKA
                  </button>
                  <button
                    (click)="selectLanguage('en')"
                    class="w-full px-4 py-2.5 text-left font-pixel text-sm hover:bg-amber-500/20 transition-colors flex items-center gap-2"
                    [class.text-amber-400]="langService.language() === 'en'"
                    [class.text-amber-100/60]="langService.language() !== 'en'"
                  >
                    @if (langService.language() === 'en') {
                      <span class="text-amber-400">►</span>
                    } @else {
                      <span class="opacity-0">►</span>
                    }
                    ENGLISH
                  </button>
                </div>
              }
            </div>

            <!-- Mobile Menu Button -->
            <button
              (click)="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2 text-amber-100/70 hover:text-amber-400 border-2 border-amber-500/30 hover:border-amber-500 transition-all"
            >
              <span class="font-pixel text-lg">
                @if (mobileMenuOpen) {
                  ✕
                } @else {
                  ☰
                }
              </span>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        @if (mobileMenuOpen) {
          <div class="md:hidden py-4 border-t-2 border-amber-500/30">
            <div class="flex flex-col gap-1">
              <a routerLink="/" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 font-pixel text-base text-amber-100/70 hover:text-amber-400 hover:bg-amber-500/10 transition-all flex items-center gap-2">
                <span class="text-amber-500">▸</span> {{ t().nav.home }}
              </a>
              <a routerLink="/games" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 font-pixel text-base text-amber-100/70 hover:text-amber-400 hover:bg-amber-500/10 transition-all flex items-center gap-2">
                <span class="text-amber-500">▸</span> {{ t().nav.games }}
              </a>
              <a routerLink="/tools" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 font-pixel text-base text-amber-100/70 hover:text-amber-400 hover:bg-amber-500/10 transition-all flex items-center gap-2">
                <span class="text-amber-500">▸</span> {{ t().nav.tools }}
              </a>
              <a routerLink="/about" (click)="mobileMenuOpen = false"
                 class="px-4 py-3 font-pixel text-base text-amber-100/70 hover:text-amber-400 hover:bg-amber-500/10 transition-all flex items-center gap-2">
                <span class="text-amber-500">▸</span> {{ t().nav.about }}
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
