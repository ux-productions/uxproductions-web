import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="min-h-screen bg-[#0a0a1a] pt-20 sm:pt-24 crt-scanlines">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pt-4 sm:pb-16">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-block dos-box px-8 py-4 mb-4">
            <h1 class="font-pixel text-3xl sm:text-4xl text-amber-400">
              ═══ {{ t().about.title }} ═══
            </h1>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left Column: About + Mission -->
          <div class="space-y-8">
            <div class="dos-box p-6">
              <p class="font-pixel text-lg text-amber-100/80 leading-relaxed">
                {{ t().about.description }}
              </p>
            </div>

            <div class="dos-box p-6">
              <h2 class="font-pixel text-xl text-amber-400 mb-4 flex items-center gap-3">
                <span>⚡</span>
                {{ t().about.mission }}
              </h2>
              <p class="font-pixel text-amber-100/60 leading-relaxed">
                {{ t().about.missionText }}
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4">
              <div class="dos-box text-center p-4">
                <div class="text-3xl mb-2">🎮</div>
                <div class="font-pixel text-amber-400 text-sm">
                  {{ langService.language() === 'sv' ? 'Spel' : 'Games' }}
                </div>
              </div>
              <div class="dos-box text-center p-4">
                <div class="text-3xl mb-2">🛠️</div>
                <div class="font-pixel text-orange-400 text-sm">
                  {{ langService.language() === 'sv' ? 'Verktyg' : 'Tools' }}
                </div>
              </div>
              <div class="dos-box text-center p-4">
                <div class="text-3xl mb-2">🇸🇪</div>
                <div class="font-pixel text-cyan-400 text-sm">
                  {{ langService.language() === 'sv' ? 'Svenskt' : 'Swedish' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact -->
          <div class="space-y-8">
            <div class="dos-box p-6">
              <h2 class="font-pixel text-xl text-amber-400 mb-6">
                {{ t().contact.title }}
              </h2>
              <p class="font-pixel text-amber-100/60 mb-8">
                {{ t().contact.subtitle }}
              </p>

              <div class="space-y-6">
                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 dos-box flex items-center justify-center shrink-0">
                    <span class="text-amber-400 text-xl">✉</span>
                  </div>
                  <div>
                    <h3 class="font-pixel text-base text-amber-300 mb-1">{{ t().contact.email }}</h3>
                    <a href="mailto:info@uxproductions.se" class="font-pixel text-amber-100/60 hover:text-amber-400 transition-colors text-sm">
                      info&#64;uxproductions.se
                    </a>
                  </div>
                </div>

                <!-- Address -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 dos-box flex items-center justify-center shrink-0">
                    <span class="text-orange-400 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 class="font-pixel text-base text-orange-300 mb-1">{{ t().contact.address }}</h3>
                    <p class="font-pixel text-amber-100/60 text-sm">
                      Lyckåsgatan 3<br>
                      633 58 Eskilstuna<br>
                      Sverige
                    </p>
                  </div>
                </div>

                <!-- Contact Person -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 dos-box flex items-center justify-center shrink-0">
                    <span class="text-cyan-400 text-xl">👤</span>
                  </div>
                  <div>
                    <h3 class="font-pixel text-base text-cyan-300 mb-1">
                      {{ langService.language() === 'sv' ? 'Kontaktperson' : 'Contact Person' }}
                    </h3>
                    <p class="font-pixel text-amber-100/60 text-sm">
                      Christian Sörensen
                    </p>
                  </div>
                </div>

                <!-- Org Number -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 dos-box flex items-center justify-center shrink-0">
                    <span class="text-emerald-400 text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 class="font-pixel text-base text-emerald-300 mb-1">{{ t().contact.orgNumber }}</h3>
                    <p class="font-pixel text-amber-100/60 text-sm">
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
