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
            <div class="w-10 h-10 rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-white text-lg">
              UX
            </div>
            <span class="text-white font-semibold text-lg hidden sm:block group-hover:text-violet-400 transition-colors">
              Productions
            </span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="text-violet-400 bg-slate-800"
               [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.home }}
            </a>
            <a routerLink="/games" routerLinkActive="text-violet-400 bg-slate-800"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.games }}
            </a>
            <a routerLink="/tools" routerLinkActive="text-violet-400 bg-slate-800"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.tools }}
            </a>
            <a routerLink="/about" routerLinkActive="text-violet-400 bg-slate-800"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {{ t().nav.about }}
            </a>
          </div>

          <!-- Language Toggle & Mobile Menu -->
          <div class="flex items-center gap-2">
            <button
              (click)="langService.toggleLanguage()"
              class="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium border border-slate-700"
            >
              {{ langService.language() === 'sv' ? 'EN' : 'SV' }}
            </button>

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
}
