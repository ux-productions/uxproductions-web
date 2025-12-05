import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-900 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <img src="images/logo.png" alt="UX Productions" class="w-10 h-10 rounded-lg" />
              <span class="text-white font-semibold text-lg">Productions AB</span>
            </div>
            <p class="text-slate-400 text-sm max-w-md">
              {{ t().about.description }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-4">{{ t().nav.home }}</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/games" class="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  {{ t().nav.games }}
                </a>
              </li>
              <li>
                <a routerLink="/tools" class="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  {{ t().nav.tools }}
                </a>
              </li>
              <li>
                <a routerLink="/about" class="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  {{ t().nav.about }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="text-white font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/integritetspolicy" class="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  {{ t().nav.privacy }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">
            © {{ currentYear }} UX Productions AB. {{ t().footer.rights }}
          </p>
          <p class="text-slate-500 text-sm flex items-center gap-1">
            {{ t().footer.madeWith }}
            <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
            </svg>
            i Sverige
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
