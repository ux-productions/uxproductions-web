import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-900 pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
            {{ t().contact.title }}
          </h1>
          <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            {{ t().contact.subtitle }}
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 md:p-12">
            <div class="space-y-8">
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
                  <h3 class="text-lg font-semibold text-white mb-1">{{ t().contact.orgNumber }}</h3>
                  <p class="text-slate-400">
                    Christian Sörensen
                  </p>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="my-10 border-t border-slate-700"></div>

            <!-- Social Links (optional) -->
            <div class="flex justify-center gap-4">
              <a href="#" class="w-12 h-12 rounded-xl bg-slate-700/50 hover:bg-violet-500/20 flex items-center justify-center text-slate-400 hover:text-violet-400 transition-all">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-slate-700/50 hover:bg-violet-500/20 flex items-center justify-center text-slate-400 hover:text-violet-400 transition-all">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
}
