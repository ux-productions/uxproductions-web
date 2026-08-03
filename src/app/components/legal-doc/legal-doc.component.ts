import { Component, input } from '@angular/core';

/**
 * Shared shell for the public legal documents under /games.
 * The projected content is plain HTML prose; the .legal-body styles that format
 * it live in styles.css, because emulated encapsulation does not reach
 * content projected in from another component.
 */
@Component({
  selector: 'app-legal-doc',
  standalone: true,
  template: `
    <div class="min-h-screen bg-[#0a0a1a] pt-24 crt-scanlines">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="mb-12 text-center">
          <div class="inline-block dos-box px-6 py-4 mb-6">
            <h1 class="font-pixel text-xl sm:text-3xl text-amber-400">
              ═══ {{ heading() }} ═══
            </h1>
          </div>
          <p class="text-amber-100/70 font-pixel text-sm">{{ subheading() }}</p>
          <p class="text-amber-500/70 font-pixel text-sm mt-2">
            Last updated: {{ lastUpdated() }}
          </p>
        </div>

        <!-- Content -->
        <div class="dos-box p-6 sm:p-8 md:p-12 relative">
          <!-- Corner decorations -->
          <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
          <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
          <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
          <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

          <div class="legal-body text-amber-100/80">
            <ng-content />
          </div>
        </div>

        <!-- Contact -->
        <div class="mt-8 text-center">
          <p class="text-amber-100/60 font-pixel text-sm">
            Questions? Contact us at
            <a href="mailto:support@uxproductions.se" class="text-amber-400 hover:text-amber-300 ml-1 underline">
              support&#64;uxproductions.se
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class LegalDocComponent {
  readonly heading = input.required<string>();
  readonly subheading = input.required<string>();
  readonly lastUpdated = input.required<string>();
}
