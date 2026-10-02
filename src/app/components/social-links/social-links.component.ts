import { Component, inject, input } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

/** Shared by the homepage and footer. Keep Organization.sameAs in index.html in sync. */
export const SOCIAL_CHANNELS = [
  { id: 'tiktok', name: 'TikTok', handle: '@ux.productions', url: 'https://www.tiktok.com/@ux.productions' },
  { id: 'instagram', name: 'Instagram', handle: '@ux.productions', url: 'https://www.instagram.com/ux.productions/' },
  { id: 'youtube', name: 'YouTube', handle: '@UXProductionsAB', url: 'https://www.youtube.com/@UXProductionsAB' },
] as const;

@Component({
  selector: 'app-social-links',
  standalone: true,
  template: `
    <ul class="social-links" [class.compact]="compact()">
      @for (channel of channels; track channel.id) {
        <li>
          <a [href]="channel.url" target="_blank" rel="noopener noreferrer">
            <span class="platform-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" focusable="false">
                @switch (channel.id) {
                  @case ('tiktok') {
                    <path d="M14 3h3c.5 2.5 2 4 4 4.5v3a9 9 0 0 1-4-1.5v7a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3Z" />
                  }
                  @case ('instagram') {
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  }
                  @case ('youtube') {
                    <rect x="2" y="5" width="20" height="14" rx="4" />
                    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
                  }
                }
              </svg>
            </span>
            <span class="platform-copy">
              <span class="platform-name font-pixel">{{ channel.name }}</span>
              @if (!compact()) {
                <span class="platform-description">{{ t().social[channel.id] }}</span>
                <span class="platform-handle">{{ channel.handle }}</span>
              }
            </span>
            <span class="external-arrow" aria-hidden="true">↗</span>
            <span class="sr-only"> — UX Productions ({{ t().social.opensNewTab }})</span>
          </a>
        </li>
      }
    </ul>
  `,
  styleUrl: './social-links.component.css',
})
export class SocialLinksComponent {
  readonly compact = input(false);
  protected readonly channels = SOCIAL_CHANNELS;
  protected readonly t = inject(LanguageService).t;
}
