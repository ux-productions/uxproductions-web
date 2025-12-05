import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

export interface Game {
  id: string;
  titleSv: string;
  titleEn: string;
  descriptionSv: string;
  descriptionEn: string;
  image: string;
  collaborators?: { role: string; name: string }[];
  targetAudienceSv?: string;
  targetAudienceEn?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  comingSoon?: boolean;
}

@Component({
  selector: 'app-games',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-900 pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
            {{ t().games.title }}
          </h1>
          <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            {{ t().games.subtitle }}
          </p>
        </div>

        <!-- Games Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (game of games; track game.id) {
            <div class="group bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-violet-500/50 transition-all">
              <!-- Image placeholder -->
              <div class="aspect-video bg-linear-to-br from-violet-600/20 to-fuchsia-600/20 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-size-[20px_20px]"></div>
                <svg class="w-16 h-16 text-violet-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
                </svg>
                @if (game.comingSoon) {
                  <div class="absolute top-4 right-4 px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    {{ t().games.comingSoon }}
                  </div>
                }
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-2">
                  {{ langService.language() === 'sv' ? game.titleSv : game.titleEn }}
                </h3>
                <p class="text-slate-400 mb-4">
                  {{ langService.language() === 'sv' ? game.descriptionSv : game.descriptionEn }}
                </p>
                @if (game.targetAudienceSv) {
                  <p class="text-sm text-violet-400 mb-3">
                    <span class="font-medium">{{ langService.language() === 'sv' ? 'Målgrupp' : 'Target audience' }}:</span>
                    {{ langService.language() === 'sv' ? game.targetAudienceSv : game.targetAudienceEn }}
                  </p>
                }
                @if (game.collaborators && game.collaborators.length > 0) {
                  <div class="text-sm text-slate-500 mb-4 space-y-1">
                    @for (collab of game.collaborators; track collab.name) {
                      <p>{{ collab.role }}: <span class="text-slate-400">{{ collab.name }}</span></p>
                    }
                  </div>
                }

                <!-- App Store Links (placeholder) -->
                <div class="flex gap-3">
                  @if (game.appStoreUrl) {
                    <a [href]="game.appStoreUrl" target="_blank" rel="noopener"
                       class="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  }
                  @if (game.playStoreUrl) {
                    <a [href]="game.playStoreUrl" target="_blank" rel="noopener"
                       class="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Google Play
                    </a>
                  }
                  @if (!game.appStoreUrl && !game.playStoreUrl) {
                    <span class="text-slate-500 text-sm italic">
                      {{ t().games.comingSoon }}
                    </span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class GamesComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;

  // Real games data
  protected readonly games: Game[] = [
    {
      id: 'skattjakten',
      titleSv: 'Skattjakten',
      titleEn: 'The Treasure Hunt',
      descriptionSv: 'Skattjakten är en rolig app där det gäller att lista ut en hemlig mening, som är ett ordspråk eller ett tankeväckande citat. Samtidigt övar eleven på ordbildning och logiskt tänkande. Appen har en spännande skattjakt i flera unika stämningsfulla miljöer. Spela dagens ordspråk/citat och få ett nytt varje dag.',
      descriptionEn: 'The Treasure Hunt is a fun app where you need to figure out a secret sentence, which is a proverb or a thought-provoking quote. At the same time, the student practices word formation and logical thinking. The app features an exciting treasure hunt in several unique atmospheric environments.',
      image: '',
      targetAudienceSv: 'Privatpersoner eller skolor. Grundskolan åk 3-9. Gymnasieskolan/Vuxenundervisning',
      targetAudienceEn: 'Individuals or schools. Elementary school grades 3-9. High school/Adult education',
      collaborators: [
        { role: 'Pedagogik', name: 'Alfamax AB' },
        { role: 'Programutveckling, illustrationer, ljud', name: 'UX Productions AB' },
      ],
    },
    {
      id: 'aha-en-eller-ett',
      titleSv: 'AHA - en eller ett?',
      titleEn: 'AHA - en or ett?',
      descriptionSv: 'Här kan du lära dig ord med hjälp av 500 fint tecknade bilder. AHA innehåller 4 olika spel i flera svårighetsnivåer. AHA kan användas av barn och vuxna som vill lära sig svenska språket.',
      descriptionEn: 'Here you can learn words with the help of 500 beautifully drawn pictures. AHA contains 4 different games at multiple difficulty levels. AHA can be used by children and adults who want to learn the Swedish language.',
      image: '',
      targetAudienceSv: 'Barn och vuxna som vill lära sig svenska språket',
      targetAudienceEn: 'Children and adults who want to learn the Swedish language',
      collaborators: [
        { role: 'Pedagogik', name: 'Alfamax AB' },
        { role: 'Illustrationer', name: 'UDAL Design' },
        { role: 'Programutveckling', name: 'UX Productions AB' },
      ],
    },
  ];
}
