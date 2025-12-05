import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background gradient -->
        <div class="absolute inset-0 bg-linear-to-br from-zinc-900 via-slate-900 to-zinc-900"></div>

        <!-- Animated background shapes -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-zinc-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl"></div>
        </div>

        <!-- Grid pattern overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="space-y-8">
            <!-- Logo -->
            <div class="flex justify-center mb-8">
              <img src="images/logo.png" alt="UX Productions" class="w-32 h-auto rounded-2xl shadow-2xl shadow-black/50" />
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {{ t().hero.title }}
            </h1>

            <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {{ t().hero.subtitle }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a routerLink="/games"
                 class="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-zinc-900 font-semibold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105">
                {{ t().hero.cta }}
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a routerLink="/demo"
                 class="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-amber-500/50 transition-all">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ t().demo.title }}
              </a>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      <!-- Features Preview -->
      <section class="py-24 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Games Card -->
            <a routerLink="/games" class="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all hover:bg-slate-800">
              <div class="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">{{ t().nav.games }}</h3>
              <p class="text-slate-400 mb-4">{{ t().games.subtitle }}</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">Web</span>
                <span class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">iOS</span>
                <span class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">Android</span>
                <span class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">Desktop</span>
              </div>
            </a>

            <!-- Tools Card -->
            <a routerLink="/tools" class="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all hover:bg-slate-800">
              <div class="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">{{ t().nav.tools }}</h3>
              <p class="text-slate-400 mb-4">{{ t().tools.subtitle }}</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">Unity</span>
                <span class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">Asset Store</span>
              </div>
            </a>

            <!-- About Card -->
            <a routerLink="/about" class="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-zinc-500/50 transition-all hover:bg-slate-800">
              <div class="w-14 h-14 rounded-xl overflow-hidden mb-6 group-hover:scale-110 transition-transform">
                <img src="images/logo.png" alt="UX Productions" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">{{ t().nav.about }}</h3>
              <p class="text-slate-400">{{ t().about.description }}</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
}
