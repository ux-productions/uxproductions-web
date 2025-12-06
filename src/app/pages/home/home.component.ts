import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../i18n/language.service';

interface LogEntry {
  id: 'demo' | 'games' | 'tools' | 'cheat';
  version: string;
  status: string;
  date: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-[#0a0a1a] relative overflow-hidden">

      <!-- Hero Section - CRT Monitor Style -->
      <section class="relative min-h-screen flex items-center justify-center crt-scanlines crt-vignette pt-24 pb-12">

        <!-- Starfield Background -->
        <div class="absolute inset-0 overflow-hidden">
          <!-- Static stars -->
          @for (i of stars; track i) {
            <div class="star"
                 [style.left.%]="i.x"
                 [style.top.%]="i.y"
                 [style.animation-delay.s]="i.delay"
                 [style.width.px]="i.size"
                 [style.height.px]="i.size">
            </div>
          }

          <!-- Gradient nebula -->
          <div class="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>

        <!-- Pixel grid overlay -->
        <div class="absolute inset-0 opacity-10"
             style="background-image:
               linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px);
               background-size: 8px 8px;">
        </div>

        <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <!-- Retro Frame Container -->
          <div class="dos-box p-8 sm:p-12 relative crt-glow">

            <!-- Corner decorations -->
            <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
            <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
            <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
            <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

            <!-- Title Bar -->
            <div class="absolute -top-px left-8 right-8 h-7 bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 flex items-center justify-center">
              <span class="font-pixel text-sm text-black tracking-widest">★ UX PRODUCTIONS ★</span>
            </div>

            <div class="space-y-8 pt-6">
              <!-- ASCII Art Style Logo Area -->
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <img src="images/logo.png"
                       alt="UX Productions"
                       class="w-28 h-auto pixel-art rounded-lg shadow-lg shadow-amber-500/20"
                       style="image-rendering: auto;" />
                  <!-- Glow effect -->
                  <div class="absolute inset-0 bg-amber-500/20 blur-xl -z-10 rounded-lg"></div>
                </div>
              </div>

              <!-- Main Title - Pixel Font -->
              <h1 class="font-pixel text-3xl sm:text-4xl lg:text-5xl retro-text leading-relaxed">
                {{ t().hero.title }}
              </h1>

              <!-- Subtitle with typewriter effect -->
              <div class="max-w-2xl mx-auto">
                <p class="font-pixel text-lg sm:text-xl text-amber-100 leading-relaxed tracking-wide">
                  > {{ t().hero.subtitle }}<span class="cursor-blink"></span>
                </p>
              </div>

              <!-- Retro Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <a routerLink="/games"
                   class="retro-btn inline-flex items-center justify-center px-8 py-4
                          bg-amber-500 text-black font-pixel text-lg uppercase
                          border-amber-400
                          hover:bg-black hover:text-amber-500 hover:border-amber-500">
                  <span class="mr-2">▶</span>
                  {{ t().hero.cta }}
                </a>
                <a routerLink="/demo"
                   class="retro-btn inline-flex items-center justify-center px-8 py-4
                          bg-zinc-800 border-zinc-600 text-amber-400 font-pixel text-lg uppercase
                          hover:bg-zinc-700 hover:text-amber-300 hover:border-zinc-500">
                  <span class="mr-2">◉</span>
                  {{ t().demo.title }}
                </a>
              </div>

              <!-- Retro Status Bar -->
              <div class="pt-8 border-t border-amber-500/30 mt-8">
                <div class="flex flex-wrap justify-center gap-4 sm:gap-8 text-base font-pixel text-amber-400">
                  <span>EST. 2013</span>
                  <span class="hidden sm:inline">•</span>
                  <span>MÄLARDALEN, SWEDEN</span>
                  <span class="hidden sm:inline">•</span>
                  <span>GAMES & TOOLS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator - Retro arrow -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div class="font-pixel text-amber-500/60 text-xs mb-2 animate-pulse">SCROLL</div>
          <div class="font-pixel text-amber-400 text-2xl animate-bounce">▼</div>
        </div>
      </section>

      <!-- Features Section - Adventure Game Menu Style -->
      <section class="py-24 bg-linear-to-b from-[#0a0a1a] via-[#0d0d20] to-[#0a0a1a] relative crt-scanlines">

        <!-- Section divider - pixel style -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Section Header -->
          <div class="text-center mb-16">
            <div class="inline-block dos-box px-8 py-4 mb-4">
              <h2 class="font-pixel text-2xl sm:text-3xl text-amber-400">
                ═══ SELECT YOUR QUEST ═══
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Games Card -->
            <a routerLink="/games"
               class="group retro-card dos-box p-6 hover:border-amber-400 transition-all cursor-pointer block">
              <div class="text-center space-y-4">
                <!-- Icon Frame -->
                <div class="w-20 h-20 mx-auto bg-linear-to-b from-amber-500/20 to-amber-700/20
                            border-2 border-amber-500/50 flex items-center justify-center
                            group-hover:border-amber-400 group-hover:bg-amber-500/30 transition-all">
                  <span class="font-pixel text-4xl text-amber-400 group-hover:scale-110 transition-transform">🎮</span>
                </div>

                <h3 class="font-pixel text-xl text-amber-300 group-hover:text-amber-200">
                  {{ t().nav.games }}
                </h3>

                <p class="text-amber-100/80 text-sm leading-relaxed">
                  {{ t().games.subtitle }}
                </p>

                <!-- Platform Tags -->
                <div class="flex gap-2 flex-wrap justify-center pt-2">
                  <span class="px-2 py-1 text-xs font-pixel bg-zinc-800 text-amber-500/80 border border-amber-500/30">WEB</span>
                  <span class="px-2 py-1 text-xs font-pixel bg-zinc-800 text-amber-500/80 border border-amber-500/30">iOS</span>
                  <span class="px-2 py-1 text-xs font-pixel bg-zinc-800 text-amber-500/80 border border-amber-500/30">ANDROID</span>
                </div>

                <!-- Hover instruction -->
                <div class="font-pixel text-xs text-amber-500/60 group-hover:text-amber-400 transition-colors">
                  [ PRESS TO CONTINUE ]
                </div>
              </div>
            </a>

            <!-- Tools Card -->
            <a routerLink="/tools"
               class="group retro-card dos-box p-6 hover:border-orange-400 transition-all cursor-pointer block">
              <div class="text-center space-y-4">
                <!-- Icon Frame -->
                <div class="w-20 h-20 mx-auto bg-linear-to-b from-orange-500/20 to-orange-700/20
                            border-2 border-orange-500/50 flex items-center justify-center
                            group-hover:border-orange-400 group-hover:bg-orange-500/30 transition-all">
                  <span class="font-pixel text-4xl text-orange-400 group-hover:scale-110 transition-transform">⚙️</span>
                </div>

                <h3 class="font-pixel text-xl text-orange-300 group-hover:text-orange-200">
                  {{ t().nav.tools }}
                </h3>

                <p class="text-orange-100/80 text-sm leading-relaxed">
                  {{ t().tools.subtitle }}
                </p>

                <!-- Platform Tags -->
                <div class="flex gap-2 flex-wrap justify-center pt-2">
                  <span class="px-2 py-1 text-xs font-pixel bg-zinc-800 text-orange-500/80 border border-orange-500/30">UNITY</span>
                  <span class="px-2 py-1 text-xs font-pixel bg-zinc-800 text-orange-500/80 border border-orange-500/30">ASSET STORE</span>
                </div>

                <!-- Hover instruction -->
                <div class="font-pixel text-xs text-orange-500/60 group-hover:text-orange-400 transition-colors">
                  [ PRESS TO CONTINUE ]
                </div>
              </div>
            </a>

            <!-- About Card -->
            <a routerLink="/about"
               class="group retro-card dos-box p-6 hover:border-amber-400 transition-all cursor-pointer block">
              <div class="text-center space-y-4">
                <!-- Logo Frame -->
                <div class="w-20 h-20 mx-auto bg-linear-to-b from-amber-500/20 to-amber-700/20
                            border-2 border-amber-500/50 flex items-center justify-center overflow-hidden
                            group-hover:border-amber-400 group-hover:bg-amber-500/30 transition-all">
                  <img src="images/logo.png" alt="UX Productions"
                       class="w-14 h-14 object-cover group-hover:scale-110 transition-transform" />
                </div>

                <h3 class="font-pixel text-xl text-amber-300 group-hover:text-amber-200">
                  {{ t().nav.about }}
                </h3>

                <p class="text-amber-100/80 text-sm leading-relaxed">
                  {{ t().about.description }}
                </p>

                <!-- Hover instruction -->
                <div class="font-pixel text-xs text-amber-500/60 group-hover:text-amber-400 transition-colors pt-6">
                  [ PRESS TO CONTINUE ]
                </div>
              </div>
            </a>
          </div>

          <!-- Bottom ASCII Art Decoration -->
          <div class="text-center mt-16 font-pixel text-amber-500/50 text-base">
            <div>╔═══════════════════════════════════════════════════╗</div>
            <div>║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ t().hero.qualityOverQuantity }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║</div>
            <div>╚═══════════════════════════════════════════════════╝</div>
          </div>
        </div>

        <!-- Bottom divider -->
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
      </section>

      <!-- System Log Section -->
      <section class="py-16 bg-[#0a0a1a] relative border-t border-amber-900/30">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="dos-box p-6 sm:p-8 bg-black/40">
            <h3 class="font-pixel text-amber-500 text-xl mb-6 flex items-center">
              <span class="animate-pulse mr-2">_</span> {{ t().log.title }}
            </h3>

            <div class="font-mono text-sm sm:text-base space-y-3">
              @for (entry of logEntries(); track entry.id) {
                <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-amber-500/80 border-b border-amber-900/30 pb-2 last:border-0">
                  <span class="text-amber-700">[{{ entry.date }}]</span>
                  <span class="text-amber-300 font-bold w-24">{{ entry.version }}</span>
                  <span class="flex-1 text-amber-100/90">
                    {{ t().log[entry.id] }}
                  </span>
                  <span class="text-xs px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-500/20">
                    {{ entry.status }}
                  </span>
                </div>
              }
              <div class="pt-2 text-amber-500/50 animate-pulse">
                > AWAITING INPUT...
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
  private readonly http = inject(HttpClient);

  protected readonly logEntries = toSignal(this.http.get<LogEntry[]>('system-log.json'), { initialValue: [] });

  // Generate random stars for the background
  protected readonly stars = Array.from({ length: 80 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() > 0.8 ? 3 : Math.random() > 0.5 ? 2 : 1,
  }));
}
