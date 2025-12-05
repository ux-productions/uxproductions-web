import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-900 pt-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl font-bold text-white mb-4">
            {{ t().privacy.title }}
          </h1>
          <p class="text-slate-400 text-lg">
            {{ langService.language() === 'sv'
               ? 'Integritetspolicy för appar utvecklade av UX Productions AB (org. nr. 556947-8661)'
               : 'Privacy policy for apps developed by UX Productions AB (org. nr. 556947-8661)' }}
          </p>
        </div>

        <!-- Content -->
        <div class="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 md:p-12">
          @if (langService.language() === 'sv') {
            <div class="space-y-6 text-slate-300">
              <p class="text-lg text-white font-medium">
                Vi bryr oss om användarnas integritet.
              </p>

              <p>Följande gäller för apparna:</p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">1</span>
                  <span class="pt-1">Den samlar inte in någon användarinformation</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">2</span>
                  <span class="pt-1">Den sparar inte några inställningar i enheten eller någon annanstans</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">3</span>
                  <span class="pt-1">Den innehåller inga länkar till externa websidor</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">4</span>
                  <span class="pt-1">Den innehåller inga i-app-köp</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">5</span>
                  <span class="pt-1">Den innehåller ingen egentlig reklam. Det finns endast ett kort textuellt nämnande av vilka företag och personer som varit inblandade i utveckling av appen.</span>
                </li>
              </ul>
            </div>
          } @else {
            <div class="space-y-6 text-slate-300">
              <p class="text-lg text-white font-medium">
                We care for the user's privacy.
              </p>

              <p>The following is true for the apps:</p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">1</span>
                  <span class="pt-1">It does not collect any user information</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">2</span>
                  <span class="pt-1">It stores no settings on the device or elsewhere</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">3</span>
                  <span class="pt-1">It does not contain links to external web pages</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">4</span>
                  <span class="pt-1">It does not contain any in-app purchases</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold">5</span>
                  <span class="pt-1">It does not contain any true form of advertising. It contains only textual information about companies and persons who have participated in the development of the app.</span>
                </li>
              </ul>
            </div>
          }
        </div>

        <!-- Contact -->
        <div class="mt-8 text-center">
          <p class="text-slate-400">
            {{ langService.language() === 'sv'
               ? 'Har du frågor? Kontakta oss på'
               : 'Have questions? Contact us at' }}
            <a href="mailto:info@uxproductions.se" class="text-violet-400 hover:text-violet-300 ml-1">
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
