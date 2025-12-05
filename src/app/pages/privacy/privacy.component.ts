import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="min-h-screen bg-[#0a0a1a] pt-24 crt-scanlines">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="mb-12 text-center">
          <div class="inline-block dos-box px-8 py-4 mb-6">
            <h1 class="font-pixel text-2xl sm:text-3xl text-amber-400">
              ═══ {{ t().privacy.title }} ═══
            </h1>
          </div>
          <p class="text-amber-100/70 font-pixel text-sm">
            {{ langService.language() === 'sv'
               ? 'Integritetspolicy för appar utvecklade av UX Productions AB (org. nr. 556947-8661)'
               : 'Privacy policy for apps developed by UX Productions AB (org. nr. 556947-8661)' }}
          </p>
        </div>

        <!-- Content -->
        <div class="dos-box p-8 md:p-12 relative">
          <!-- Corner decorations -->
          <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
          <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
          <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
          <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

          @if (langService.language() === 'sv') {
            <div class="space-y-6 text-amber-100/80">
              <p class="text-lg text-amber-300 font-pixel">
                > Vi bryr oss om användarnas integritet.
              </p>

              <p class="font-pixel text-sm text-amber-400/80">Följande gäller för apparna:</p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">1</span>
                  <span class="pt-1">Den samlar inte in någon användarinformation</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">2</span>
                  <span class="pt-1">Den sparar inte några inställningar i enheten eller någon annanstans</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">3</span>
                  <span class="pt-1">Den innehåller inga länkar till externa websidor</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">4</span>
                  <span class="pt-1">Den innehåller inga i-app-köp</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">5</span>
                  <span class="pt-1">Den innehåller ingen egentlig reklam. Det finns endast ett kort textuellt nämnande av vilka företag och personer som varit inblandade i utveckling av appen.</span>
                </li>
              </ul>
            </div>
          } @else {
            <div class="space-y-6 text-amber-100/80">
              <p class="text-lg text-amber-300 font-pixel">
                > We care for the user's privacy.
              </p>

              <p class="font-pixel text-sm text-amber-400/80">The following is true for the apps:</p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">1</span>
                  <span class="pt-1">It does not collect any user information</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">2</span>
                  <span class="pt-1">It stores no settings on the device or elsewhere</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">3</span>
                  <span class="pt-1">It does not contain links to external web pages</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">4</span>
                  <span class="pt-1">It does not contain any in-app purchases</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">5</span>
                  <span class="pt-1">It does not contain any true form of advertising. It contains only textual information about companies and persons who have participated in the development of the app.</span>
                </li>
              </ul>
            </div>
          }
        </div>

        <!-- Contact -->
        <div class="mt-8 text-center">
          <p class="text-amber-100/60 font-pixel text-sm">
            {{ langService.language() === 'sv'
               ? 'Har du frågor? Kontakta oss på'
               : 'Have questions? Contact us at' }}
            <a href="mailto:info@uxproductions.se" class="text-amber-400 hover:text-amber-300 ml-1 underline">
              info&#64;uxproductions.se
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class PrivacyComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
}
