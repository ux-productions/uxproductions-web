import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-900 pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
            {{ t().demo.title }}
          </h1>
        </div>

        <!-- Demo Container -->
        <div class="max-w-4xl mx-auto">
          <div class="aspect-video bg-slate-800/50 rounded-2xl border border-slate-700/50 flex items-center justify-center relative overflow-hidden">
            <!-- Background pattern -->
            <div class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

            <!-- Coming Soon Message -->
            <div class="relative z-10 text-center p-8">
              <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                <svg class="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-white mb-2">
                {{ t().demo.comingSoon }}
              </h2>
              <p class="text-slate-400">
                {{ langService.language() === 'sv'
                   ? 'Vi arbetar på en spelbar demo. Kom tillbaka snart!'
                   : 'We are working on a playable demo. Check back soon!' }}
              </p>
            </div>

            <!-- Decorative elements -->
            <div class="absolute top-4 left-4 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl"></div>
            <div class="absolute bottom-4 right-4 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
          </div>

          <!-- Placeholder for future game embed -->
          <!--
            When adding the game, replace the coming soon content with:
            <iframe src="game-url" class="w-full h-full border-0 rounded-2xl"></iframe>
          -->
        </div>
      </div>
    </div>
  `,
})
export class DemoComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
}
