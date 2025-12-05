import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#0a0a1a] border-t-2 border-amber-500/30 relative">
      <!-- Scanlines -->
      <div class="absolute inset-0 pointer-events-none opacity-30" style="background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <img src="images/logo.png" alt="UX Productions" class="w-12 h-12" />
              <span class="font-pixel text-amber-400 text-lg">UX PRODUCTIONS AB</span>
            </div>
            <p class="font-pixel text-amber-100/70 text-base max-w-md leading-relaxed">
              {{ t().about.description }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-pixel text-amber-400 text-base mb-4">[ NAVIGATION ]</h3>
            <ul class="space-y-3">
              <li>
                <a routerLink="/games" class="text-amber-100/70 hover:text-amber-400 transition-colors text-base font-pixel flex items-center gap-2">
                  <span class="text-amber-500/70">▸</span> {{ t().nav.games }}
                </a>
              </li>
              <li>
                <a routerLink="/tools" class="text-amber-100/70 hover:text-amber-400 transition-colors text-base font-pixel flex items-center gap-2">
                  <span class="text-amber-500/70">▸</span> {{ t().nav.tools }}
                </a>
              </li>
              <li>
                <a routerLink="/about" class="text-amber-100/70 hover:text-amber-400 transition-colors text-base font-pixel flex items-center gap-2">
                  <span class="text-amber-500/70">▸</span> {{ t().nav.about }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="font-pixel text-amber-400 text-base mb-4">[ LEGAL ]</h3>
            <ul class="space-y-3">
              <li>
                <a routerLink="/integritetspolicy" class="text-amber-100/70 hover:text-amber-400 transition-colors text-base font-pixel flex items-center gap-2">
                  <span class="text-amber-500/70">▸</span> {{ t().nav.privacy }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t-2 border-amber-500/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="font-pixel text-amber-500/70 text-sm">
            © {{ currentYear }} UX PRODUCTIONS AB • {{ t().footer.rights }}
          </p>
          <p class="font-pixel text-amber-500/70 text-sm flex items-center gap-1">
            {{ t().footer.madeWith }}
            <span class="text-red-500">♥</span>
            {{ t().footer.inSweden }}
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
  protected readonly currentYear = new Date().getFullYear();
}
