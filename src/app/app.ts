import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './i18n/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-[#0a0a1a] text-white flex flex-col">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
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

  ngOnInit(): void {
    // Set initial language on document
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.langService.language();
    }
  }
}
