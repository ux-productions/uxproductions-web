import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

export interface Tool {
  id: string;
  titleSv: string;
  titleEn: string;
  descriptionSv: string;
  descriptionEn: string;
  image: string;
  assetStoreUrl?: string;
  features: string[];
}

@Component({
  selector: 'app-tools',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-900 pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
            {{ t().tools.title }}
          </h1>
          <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            {{ t().tools.subtitle }}
          </p>
        </div>

        <!-- Tools Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          @for (tool of tools; track tool.id) {
            <div class="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-orange-500/50 transition-all">
              <!-- Tool Image -->
              <div class="aspect-21/9 bg-slate-800 relative overflow-hidden">
                <img [src]="tool.image" [alt]="langService.language() === 'sv' ? tool.titleSv : tool.titleEn"
                     class="w-full h-full object-cover" />
              </div>

              <!-- Content -->
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-white mb-3">
                  {{ langService.language() === 'sv' ? tool.titleSv : tool.titleEn }}
                </h3>
                <p class="text-slate-400 mb-6">
                  {{ langService.language() === 'sv' ? tool.descriptionSv : tool.descriptionEn }}
                </p>

                <!-- Features -->
                <ul class="space-y-2 mb-6">
                  @for (feature of tool.features; track feature) {
                    <li class="flex items-center gap-2 text-slate-300 text-sm">
                      <svg class="w-5 h-5 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {{ feature }}
                    </li>
                  }
                </ul>

                @if (tool.assetStoreUrl) {
                  <a [href]="tool.assetStoreUrl" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-amber-500 to-orange-500 text-zinc-900 font-medium rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/25">
                    {{ t().tools.viewOnAssetStore }}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ToolsComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;

  // Real tools data
  protected readonly tools: Tool[] = [
    {
      id: 'spriteforge',
      titleSv: 'SpriteForge: 3D to 2D Baker',
      titleEn: 'SpriteForge: 3D to 2D Baker',
      descriptionSv: 'SpriteForge omvandlar dina 3D-modeller till spelklara 2D-sprite sheets med bara några klick. Perfekt för att skapa retrospel, top-down RPGs, eller projekt som behöver charmen av 2D-sprites med flexibiliteten hos 3D-assets. Automatiserar hela arbetsflödet—från att fånga flera riktningar och animationsrutor till att skära och organisera ditt sprite sheet.',
      descriptionEn: 'SpriteForge transforms your 3D models into game-ready 2D sprite sheets with just a few clicks. Perfect for creating retro-style games, top-down RPGs, or any project that needs the charm of 2D sprites with the flexibility of 3D assets. Automates the entire workflow—from capturing multiple directions and animation frames to slicing and organizing your sprite sheet.',
      image: 'images/sprite-forge-cover.png',
      assetStoreUrl: 'https://assetstore.unity.com/packages/slug/348280',
      features: [
        'Top-down RPGs with 4 or 8-directional characters',
        'Retro-style games using 3D models as sprite sources',
        'Works seamlessly with popular asset packs like Synty',
        'Rapid prototyping with placeholder sprites from 3D assets',
        'Professional sprites without pixel art skills',
      ],
    },
  ];
}
