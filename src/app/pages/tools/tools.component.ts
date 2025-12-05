import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

export interface Tool {
  id: string;
  titleSv: string;
  titleEn: string;
  descriptionSv: string;
  descriptionEn: string;
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
            <div class="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-fuchsia-500/50 transition-all">
              <!-- Image placeholder -->
              <div class="aspect-21/9 bg-linear-to-br from-fuchsia-600/20 to-violet-600/20 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.1)_1px,transparent_1px)] bg-size-[20px_20px]"></div>
                <svg class="w-20 h-20 text-fuchsia-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
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
                      <svg class="w-5 h-5 text-fuchsia-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {{ feature }}
                    </li>
                  }
                </ul>

                @if (tool.assetStoreUrl) {
                  <a [href]="tool.assetStoreUrl" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-fuchsia-600 to-violet-600 text-white font-medium rounded-xl hover:from-fuchsia-500 hover:to-violet-500 transition-all shadow-lg shadow-fuchsia-500/25">
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
      assetStoreUrl: '#', // Replace with actual URL
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
