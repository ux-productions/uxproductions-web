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
    <div class="min-h-screen bg-[#0a0a1a] pt-24 crt-scanlines">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-block dos-box px-8 py-4 mb-4">
            <h1 class="font-pixel text-3xl sm:text-4xl text-orange-400">
              ═══ {{ t().tools.title }} ═══
            </h1>
          </div>
          <p class="font-pixel text-lg text-orange-100/60 max-w-2xl mx-auto">
            {{ t().tools.subtitle }}
          </p>
        </div>

        <!-- Tools Grid -->
        <div class="flex flex-wrap justify-center gap-8">
          @for (tool of tools; track tool.id) {
            <div class="dos-box p-0 overflow-hidden hover:border-orange-400 transition-all w-full max-w-xl">
              <!-- Tool Image -->
              <div class="aspect-21/9 bg-zinc-900 relative overflow-hidden">
                <img [src]="tool.image" [alt]="langService.language() === 'sv' ? tool.titleSv : tool.titleEn"
                     class="w-full h-full object-cover" />
              </div>

              <!-- Content -->
              <div class="p-8">
                <h3 class="font-pixel text-xl text-orange-300 mb-3">
                  {{ langService.language() === 'sv' ? tool.titleSv : tool.titleEn }}
                </h3>
                <p class="font-pixel text-orange-100/60 text-sm mb-6">
                  {{ langService.language() === 'sv' ? tool.descriptionSv : tool.descriptionEn }}
                </p>

                <!-- Features -->
                <ul class="space-y-2 mb-6">
                  @for (feature of tool.features; track feature) {
                    <li class="flex items-center gap-2 text-orange-100/70 text-sm font-pixel">
                      <span class="text-orange-400">▸</span>
                      {{ feature }}
                    </li>
                  }
                </ul>

                @if (tool.assetStoreUrl) {
                  <a [href]="tool.assetStoreUrl" target="_blank" rel="noopener"
                     class="retro-btn inline-flex items-center gap-2 px-6 py-3
                            bg-orange-500 border-orange-400 text-black font-pixel text-base
                            hover:bg-orange-400 hover:border-orange-300
                            shadow-lg shadow-orange-500/30">
                    {{ t().tools.viewOnAssetStore }}
                    <span>▶</span>
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
