import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  template: `
    <div class="min-h-screen bg-[#0a0a1a] pt-24 crt-scanlines">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-block dos-box px-8 py-4 mb-4">
            <h1 class="font-pixel text-3xl sm:text-4xl text-amber-400">
              ═══ {{ t().demo.title }} ═══
            </h1>
          </div>
        </div>

        <!-- Demo Container -->
        <div class="flex justify-center">
          <div class="dos-box w-full max-w-4xl">
            <div class="aspect-video bg-zinc-900/50 flex items-center justify-center relative overflow-hidden">
              <!-- Pixel grid background -->
              <div class="absolute inset-0 opacity-30"
                   style="background-image:
                     linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px);
                     background-size: 8px 8px;">
              </div>

              <!-- Coming Soon Message -->
              <div class="relative z-10 text-center p-8">
                <!-- Retro Icon Frame -->
                <div class="w-24 h-24 mx-auto mb-6 dos-box flex items-center justify-center">
                  <span class="font-pixel text-5xl">🎮</span>
                </div>

                <h2 class="font-pixel text-2xl text-amber-400 mb-4">
                  {{ t().demo.comingSoon }}
                </h2>

                <p class="font-pixel text-amber-100/60 text-base max-w-md mx-auto leading-relaxed">
                  {{ langService.language() === 'sv'
                     ? 'Vi arbetar på en spelbar demo. Kom tillbaka snart!'
                     : 'We are working on a playable demo. Check back soon!' }}
                </p>

                <!-- Loading animation -->
                <div class="mt-8 font-pixel text-amber-500/50 text-sm">
                  <span class="inline-block animate-pulse">▓▓▓░░░░░░░</span>
                  <span class="ml-2">LOADING...</span>
                </div>
              </div>

              <!-- Corner decorations -->
              <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/30"></div>
              <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/30"></div>
              <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/30"></div>
              <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/30"></div>
            </div>
          </div>
        </div>

        <!-- Placeholder for future game embed -->
        <!--
          When adding the game, replace the coming soon content with:
          <iframe src="game-url" class="w-full h-full border-0"></iframe>
        -->
      </div>
    </div>
  `,
})
export class DemoComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
}
