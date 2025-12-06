import { Component, inject, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './i18n/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-[#0a0a1a] text-white flex flex-col relative">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />

      <!-- Cheat Code Overlay -->
      @if (showCheat) {
        <div class="fixed inset-0 z-50 flex items-center justify-center pointer-events-none bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div class="dos-box p-12 bg-black border-4 border-green-500 shadow-[0_0_100px_rgba(34,197,94,0.4)] transform scale-110">
            <h1 class="font-pixel text-4xl sm:text-6xl text-green-500 mb-4 text-center tracking-widest animate-pulse">
              CHEAT ACTIVATED
            </h1>
            <p class="font-pixel text-xl sm:text-2xl text-green-300 text-center mb-2">
              > GOD MODE: ENABLED
            </p>
            <p class="font-pixel text-lg text-green-500/60 text-center">
              > UNLIMITED LIVES ADDED
            </p>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class App implements OnInit {
  private readonly langService = inject(LanguageService);

  // The Classic Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  private readonly konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  private currentInput: string[] = [];
  protected showCheat = false;

  ngOnInit(): void {
    // Set initial language on document
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.langService.language();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // Add key to buffer
    this.currentInput.push(event.key);

    // Keep buffer same length as code
    if (this.currentInput.length > this.konamiCode.length) {
      this.currentInput.shift();
    }

    // Check if buffer matches code
    if (this.currentInput.join(',').toLowerCase() === this.konamiCode.join(',').toLowerCase()) {
      this.activateCheat();
      this.currentInput = []; // Reset
    }
  }

  private activateCheat() {
    this.showCheat = true;

    // Play a retro sound effect if possible (using AudioContext for a simple beep)
    this.playRetroSound();

    // Hide after 3 seconds
    setTimeout(() => {
      this.showCheat = false;
    }, 4000);
  }

  private playRetroSound() {
    try {
      const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'square'; // Retro 8-bit sound
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch (e) {
      // Ignore audio errors
    }
  }
}
