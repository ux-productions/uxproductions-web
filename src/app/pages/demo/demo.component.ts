import { Component, inject, signal, OnDestroy, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../i18n/language.service';
import pako from 'pako';

// Unity WebGL instance type
declare global {
  interface Window {
    createUnityInstance: (
      canvas: HTMLCanvasElement,
      config: UnityConfig,
      onProgress?: (progress: number) => void
    ) => Promise<UnityInstance>;
  }
}

interface UnityConfig {
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  streamingAssetsUrl?: string;
  companyName?: string;
  productName?: string;
  productVersion?: string;
}

interface UnityInstance {
  Quit: () => Promise<void>;
  SendMessage: (objectName: string, methodName: string, value?: string | number) => void;
  SetFullscreen: (fullscreen: number) => void;
}

@Component({
  selector: 'app-demo',
  standalone: true,
  template: `
    <div class="min-h-screen bg-[#0a0a1a] pt-24 crt-scanlines">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="text-center mb-6">
          <div class="inline-block dos-box px-8 py-4">
            <h1 class="font-pixel text-3xl sm:text-4xl text-amber-400">
              ═══ {{ t().demo.title }} ═══
            </h1>
          </div>
        </div>

        <!-- Demo Container - Portrait layout -->
        <div class="flex justify-center">
          <div class="dos-box w-full max-w-xl">
            <!-- Game area with portrait aspect ratio (3:4) -->
            <div class="aspect-[3/4] bg-zinc-900/50 flex items-center justify-center relative overflow-hidden">
              <!-- Unity Canvas -->
              <canvas #gameCanvas
                      id="unity-canvas"
                      class="w-full h-full"
                      [class.hidden]="!gameLoaded()"
                      tabindex="-1">
              </canvas>

              <!-- Loading Overlay -->
              @if (!gameLoaded()) {
                <div class="absolute inset-0 flex items-center justify-center z-10">
                  <!-- Pixel grid background -->
                  <div class="absolute inset-0 opacity-30"
                       style="background-image:
                         linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px);
                         background-size: 8px 8px;">
                  </div>

                  <div class="relative z-10 text-center p-8">
                    <!-- Retro Icon Frame -->
                    <div class="w-24 h-24 mx-auto mb-6 dos-box flex items-center justify-center">
                      <span class="font-pixel text-5xl">🎮</span>
                    </div>

                    @if (loadError()) {
                      <h2 class="font-pixel text-2xl text-red-400 mb-4">
                        {{ langService.language() === 'sv' ? 'Kunde inte ladda spelet' : 'Failed to load game' }}
                      </h2>
                      <p class="font-pixel text-amber-100/60 text-base max-w-md mx-auto leading-relaxed">
                        {{ loadError() }}
                      </p>
                    } @else {
                      <h2 class="font-pixel text-2xl text-amber-400 mb-6">
                        {{ langService.language() === 'sv' ? 'Laddar...' : 'Loading...' }}
                      </h2>

                      <!-- Single retro progress bar -->
                      <div class="font-pixel text-amber-500 text-sm text-center">
                        <div class="mb-2">{{ getProgressBar() }}</div>
                        <div class="text-amber-500/60">{{ getProgressPercent() }}%</div>
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Corner decorations -->
              <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/30 z-20 pointer-events-none"></div>
              <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/30 z-20 pointer-events-none"></div>
              <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/30 z-20 pointer-events-none"></div>
              <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/30 z-20 pointer-events-none"></div>
            </div>

            <!-- Controls - inside the box -->
            <div class="flex justify-center gap-4 p-4 border-t border-amber-500/20">
              <button (click)="toggleFullscreen()"
                      class="font-pixel text-sm text-amber-400 hover:text-amber-300
                             px-4 py-2 border border-amber-500/30 hover:border-amber-500/60
                             transition-colors">
                {{ langService.language() === 'sv' ? '[ HELSKÄRM ]' : '[ FULLSCREEN ]' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Game Info Section -->
        <div class="max-w-lg mx-auto mt-8 text-center">
          <p class="font-pixel text-amber-100/60 text-sm leading-relaxed">
            {{ langService.language() === 'sv'
               ? 'Tryck SPACE för att hoppa. Resten är tajming! Tryck HELSKÄRM för bästa upplevelse.'
               : 'Press SPACE to jump. The rest is timing! Press FULLSCREEN for best experience.' }}
          </p>
        </div>
      </div>
    </div>
  `,
})
export class DemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('gameCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;

  // ========================================
  // CONFIGURATION
  // ========================================
  private readonly GAME_BUILD_PATH = '/games/generic-climber/Build';
  private readonly GAME_NAME = 'WebGL'; // Matches your file names: WebGL.loader.js, WebGL.data.br, etc.
  // ========================================

  protected readonly loadProgress = signal(0);
  protected readonly gameLoaded = signal(false);
  protected readonly loadError = signal<string | null>(null);

  private unityInstance: UnityInstance | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.loadUnityGame();
    }
  }

  ngOnDestroy(): void {
    if (this.unityInstance) {
      this.unityInstance.Quit();
    }
  }

  private async loadUnityGame(): Promise<void> {
    const buildPath = this.GAME_BUILD_PATH;
    const gameName = this.GAME_NAME;

    const loaderUrl = `${buildPath}/${gameName}.loader.js`;

    try {
      // Dynamically load the Unity loader script
      await this.loadScript(loaderUrl);

      // Fetch and decompress gzip files manually
      this.loadProgress.set(0.1);
      const [dataBlob, frameworkBlob, codeBlob] = await Promise.all([
        this.fetchAndDecompress(`${buildPath}/${gameName}.data.gz`),
        this.fetchAndDecompress(`${buildPath}/${gameName}.framework.js.gz`, 'text/javascript'),
        this.fetchAndDecompress(`${buildPath}/${gameName}.wasm.gz`, 'application/wasm'),
      ]);
      this.loadProgress.set(0.5);

      const config: UnityConfig = {
        dataUrl: URL.createObjectURL(dataBlob),
        frameworkUrl: URL.createObjectURL(frameworkBlob),
        codeUrl: URL.createObjectURL(codeBlob),
        streamingAssetsUrl: '/games/generic-climber/StreamingAssets',
        companyName: 'UX Productions',
        productName: 'Generic Climber',
        productVersion: '1.0',
      };

      this.unityInstance = await window.createUnityInstance(
        this.canvasRef.nativeElement,
        config,
        (progress: number) => {
          // Map Unity's 0-1 progress to 0.5-1 since we already did 0-0.5 for decompression
          this.loadProgress.set(0.5 + progress * 0.5);
        }
      );

      // Clean up blob URLs
      URL.revokeObjectURL(config.dataUrl);
      URL.revokeObjectURL(config.frameworkUrl);
      URL.revokeObjectURL(config.codeUrl);

      this.gameLoaded.set(true);
    } catch (error) {
      console.error('Unity WebGL load error:', error);
      this.loadError.set(
        this.langService.language() === 'sv'
          ? 'Ett fel uppstod vid laddning av spelet.'
          : 'An error occurred while loading the game.'
      );
    }
  }

  private async fetchAndDecompress(url: string, mimeType = 'application/octet-stream'): Promise<Blob> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }

    const compressedData = await response.arrayBuffer();

    // Check if it's actually gzip (magic bytes: 1f 8b)
    const bytes = new Uint8Array(compressedData);
    if (bytes[0] !== 0x1f || bytes[1] !== 0x8b) {
      console.error(`File ${url} is not gzip compressed. First bytes:`, bytes[0]?.toString(16), bytes[1]?.toString(16));
      // Try returning as-is if not compressed
      return new Blob([compressedData], { type: mimeType });
    }

    const decompressedData = pako.ungzip(bytes);
    return new Blob([decompressedData], { type: mimeType });
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.body.appendChild(script);
    });
  }

  protected toggleFullscreen(): void {
    this.unityInstance?.SetFullscreen(1);
  }

  protected getProgressPercent(): number {
    const progress = this.loadProgress();
    // Clamp between 0 and 100
    return Math.min(100, Math.max(0, Math.round(progress * 100)));
  }

  protected getProgressBar(): string {
    const percent = this.getProgressPercent();
    const filled = Math.floor(percent / 10);
    const empty = 10 - filled;
    return '▓'.repeat(filled) + '░'.repeat(empty);
  }

  // Optional: Send messages to Unity
  protected sendToUnity(objectName: string, methodName: string, value?: string | number): void {
    this.unityInstance?.SendMessage(objectName, methodName, value);
  }
}
