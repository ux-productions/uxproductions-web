import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-[#0a0a1a] flex items-center justify-center crt-scanlines crt-vignette">
      <!-- Starfield Background -->
      <div class="absolute inset-0 overflow-hidden">
        @for (star of stars; track $index) {
          <div class="star"
               [style.left.%]="star.x"
               [style.top.%]="star.y"
               [style.animation-delay.s]="star.delay"
               [style.width.px]="star.size"
               [style.height.px]="star.size">
          </div>
        }
      </div>

      <div class="relative z-10 text-center px-4">
        <div class="dos-box p-8 sm:p-12 relative max-w-lg mx-auto">
          <!-- Corner decorations -->
          <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
          <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
          <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
          <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

          <!-- Error Code -->
          <div class="font-pixel text-6xl sm:text-8xl text-amber-500 mb-4 flicker">
            404
          </div>

          <!-- Title -->
          <h1 class="font-pixel text-xl sm:text-2xl text-amber-400 mb-4">
            FILE NOT FOUND
          </h1>

          <!-- Message -->
          <div class="space-y-2 mb-8">
            <p class="font-pixel text-amber-100/80 text-sm">
              > ERROR: The requested path does not exist.
            </p>
            <p class="font-pixel text-amber-100/60 text-sm">
              > The file may have been moved or deleted.
            </p>
          </div>

          <!-- ASCII decoration -->
          <div class="font-pixel text-amber-500/40 text-xs mb-8">
            ╔════════════════════════╗<br>
            ║&nbsp;&nbsp;SYSTEM HALTED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║<br>
            ╚════════════════════════╝
          </div>

          <!-- Back button -->
          <a routerLink="/"
             class="inline-flex items-center justify-center px-8 py-4
                    bg-amber-500 text-black font-pixel text-lg uppercase
                    border-3 border-amber-400
                    hover:bg-amber-400
                    shadow-lg shadow-amber-500/30
                    transition-all">
            <span class="mr-2">◄</span>
            RETURN HOME
          </a>

          <!-- Retry hint -->
          <div class="font-pixel text-xs text-amber-500/50 mt-6">
            [ PRESS BUTTON TO CONTINUE ]
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent {
  // Generate random stars for the background
  protected readonly stars = Array.from({ length: 50 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() > 0.8 ? 3 : Math.random() > 0.5 ? 2 : 1,
  }));
}
