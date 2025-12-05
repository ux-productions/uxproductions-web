import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-900 pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
            {{ t().about.title }}
          </h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left Column: About + Mission -->
          <div class="space-y-8">
            <!-- Logo -->
            <div class="relative">
              <div class="aspect-video max-w-md mx-auto bg-linear-to-br from-violet-600/20 to-fuchsia-600/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-size-[30px_30px]"></div>
                <div class="w-32 h-32 rounded-3xl bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-white text-5xl shadow-2xl shadow-violet-500/30">
                  UX
                </div>
              </div>
            </div>

            <div>
              <p class="text-xl text-slate-300 leading-relaxed">
                {{ t().about.description }}
              </p>
            </div>

            <div class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 class="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <svg class="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                {{ t().about.mission }}
              </h2>
              <p class="text-slate-400 leading-relaxed">
                {{ t().about.missionText }}
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center p-4 bg-slate-800/30 rounded-xl">
                <div class="text-3xl font-bold text-violet-400">🎮</div>
                <div class="text-slate-400 text-sm mt-2">
                  {{ langService.language() === 'sv' ? 'Spel' : 'Games' }}
                </div>
              </div>
              <div class="text-center p-4 bg-slate-800/30 rounded-xl">
                <div class="text-3xl font-bold text-fuchsia-400">🛠️</div>
                <div class="text-slate-400 text-sm mt-2">
                  {{ langService.language() === 'sv' ? 'Verktyg' : 'Tools' }}
                </div>
              </div>
              <div class="text-center p-4 bg-slate-800/30 rounded-xl">
                <div class="text-3xl font-bold text-cyan-400">🇸🇪</div>
                <div class="text-slate-400 text-sm mt-2">
                  {{ langService.language() === 'sv' ? 'Svenskt' : 'Swedish' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact -->
          <div class="space-y-8">
            <div class="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
              <h2 class="text-2xl font-semibold text-white mb-6">
                {{ t().contact.title }}
              </h2>
              <p class="text-slate-400 mb-8">
                {{ t().contact.subtitle }}
              </p>

              <div class="space-y-6">
                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">{{ t().contact.email }}</h3>
                    <a href="mailto:info@uxproductions.se" class="text-slate-400 hover:text-violet-400 transition-colors">
                      info&#64;uxproductions.se
                    </a>
                  </div>
                </div>

                <!-- Address -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">{{ t().contact.address }}</h3>
                    <p class="text-slate-400">
                      Lyckåsgatan 3<br>
                      633 58 Eskilstuna<br>
                      Sverige
                    </p>
                  </div>
                </div>

                <!-- Contact Person -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">
                      {{ langService.language() === 'sv' ? 'Kontaktperson' : 'Contact Person' }}
                    </h3>
                    <p class="text-slate-400">
                      Christian Sörensen
                    </p>
                  </div>
                </div>

                <!-- Org Number -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">{{ t().contact.orgNumber }}</h3>
                    <p class="text-slate-400">
                      556947-8661
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
}
