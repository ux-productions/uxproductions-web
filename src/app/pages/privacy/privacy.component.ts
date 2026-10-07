import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="min-h-screen bg-[#0a0a1a] pt-24 crt-scanlines">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Header -->
        <div class="mb-12 text-center">
          <div class="inline-block dos-box px-8 py-4 mb-6">
            <h1 class="font-pixel text-2xl sm:text-3xl text-amber-400">
              ═══ {{ t().privacy.title }} ═══
            </h1>
          </div>
          <p class="text-amber-100/70 font-pixel text-sm">
            {{ langService.language() === 'sv'
               ? 'Integritetspolicy för appar utvecklade av UX Productions AB (org. nr. 556947-8661)'
               : 'Privacy policy for apps developed by UX Productions AB (org. nr. 556947-8661)' }}
          </p>
        </div>

        <!-- Content -->
        <div class="dos-box p-8 md:p-12 relative">
          <!-- Corner decorations -->
          <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
          <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
          <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
          <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

          @if (langService.language() === 'sv') {
            <div class="space-y-6 text-amber-100/80">
              <p class="text-lg text-amber-300 font-pixel">
                > Vi bryr oss om användarnas integritet.
              </p>

              <p class="font-pixel text-sm text-amber-400/80">Följande gäller för apparna, om inte appen har ett eget avsnitt nedan:</p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">1</span>
                  <span class="pt-1">Den samlar inte in någon användarinformation</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">2</span>
                  <span class="pt-1">Den sparar inte några inställningar i enheten eller någon annanstans</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">3</span>
                  <span class="pt-1">Den innehåller inga länkar till externa websidor</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">4</span>
                  <span class="pt-1">Den innehåller inga i-app-köp</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">5</span>
                  <span class="pt-1">Den innehåller ingen egentlig reklam. Det finns endast ett kort textuellt nämnande av vilka företag och personer som varit inblandade i utveckling av appen.</span>
                </li>
              </ul>
              <h2 id="the-perfect-robot" class="font-pixel text-lg text-amber-400 pt-6">The Perfect Robot (tidigare Tiny Treads)</h2>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Framsteg, stjärnor och inställningar sparas på din enhet, och på Steam även i Steam Cloud. Vi får aldrig del av dem.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Inga konton, ingen reklam och ingen spårning mellan appar. Spelet frågar aldrig efter ditt namn eller din e-post.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Onlinespel körs på Unity Gaming Services (Unity Technologies). Spelet loggar in anonymt och får ett slumpat spelar-ID och ett genererat spelarnamn. I onlinespel skickar Unity Lobby och Relay ditt spelarnamn, din robot och dina drag till de andra spelarna, och ser din IP-adress för att koppla upp dig och välja en serverregion nära dig. Lobbydata raderas när spelet är slut.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Köp hanteras av Apple, Google och Valve (Steam). Vi ser aldrig kort- eller kontouppgifter.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Spelstatistik (Unity Analytics): från version 2.1 frågar spelet en gång om du vill dela spelstatistik, och inget skickas om du inte svarar ja. Med ditt samtycke skickas vilka banor du startar, klarar eller lämnar, drag, stjärnor, spellägen, robotval och hur du använder erbjudandet om hela spelet, tillsammans med det slumpade spelar-ID:t, enhetsmodell, operativsystem, spelversion och land (utifrån IP-adressen). Unity behandlar uppgifterna åt oss. Du kan stänga av det när som helst i Settings > Data > Share play stats. Version 2.0 skickade ingen statistik; versioner före 2.0 skickade anonym spelstatistik (gick att stänga av i Inställningar).</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Personuppgiftsansvarig är UX Productions AB (556947-8661), Eskilstuna. Vill du att vi raderar dina uppgifter, mejla <a href="mailto:support&#64;uxproductions.se" class="text-amber-400 hover:text-amber-300 underline">support&#64;uxproductions.se</a> med spelarnamnet som visas i spelets huvudmeny. Du kan också klaga hos Integritetsskyddsmyndigheten (IMY).</span>
                </li>
              </ul>
            </div>
          } @else {
            <div class="space-y-6 text-amber-100/80">
              <p class="text-lg text-amber-300 font-pixel">
                > We care for the user's privacy.
              </p>

              <p class="font-pixel text-sm text-amber-400/80">The following is true for the apps, unless an app has its own section below:</p>

              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">1</span>
                  <span class="pt-1">It does not collect any user information</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">2</span>
                  <span class="pt-1">It stores no settings on the device or elsewhere</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">3</span>
                  <span class="pt-1">It does not contain links to external web pages</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">4</span>
                  <span class="pt-1">It does not contain any in-app purchases</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 w-8 h-8 border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400 font-pixel">5</span>
                  <span class="pt-1">It does not contain any true form of advertising. It contains only textual information about companies and persons who have participated in the development of the app.</span>
                </li>
              </ul>
              <h2 id="the-perfect-robot" class="font-pixel text-lg text-amber-400 pt-6">The Perfect Robot (formerly Tiny Treads)</h2>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Progress, stars and settings are saved on your device, and on Steam also in Steam Cloud. We never receive them.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>No accounts, no ads and no tracking across apps. The game never asks for your name or email address.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Online play runs on Unity Gaming Services (Unity Technologies). The game signs in anonymously and gets a random player ID and a generated player name. In online games, Unity Lobby and Relay pass your player name, robot and moves to the other players, and see your IP address to connect you and pick a server region near you. Lobby data is deleted when the game ends.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Purchases are handled by Apple, Google and Valve (Steam). We never see card or account details.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>Play statistics (Unity Analytics): from version 2.1 the game asks once whether you want to share play statistics, and sends nothing unless you say yes. With your consent it sends which levels you start, finish or leave, turns, stars, game modes, robot picks and how you use the Full Game offer, together with the random player ID, device model, operating system, game version and a country derived from your IP address. Unity processes this data on our behalf. You can turn it off at any time in Settings > Data > Share play stats. Version 2.0 sent no statistics; versions before 2.0 sent anonymous gameplay statistics (it could be turned off in Settings).</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="shrink-0 mt-2 w-2 h-2 bg-amber-400"></span>
                  <span>The controller is UX Productions AB (556947-8661), Eskilstuna, Sweden. To have your data deleted, email <a href="mailto:support&#64;uxproductions.se" class="text-amber-400 hover:text-amber-300 underline">support&#64;uxproductions.se</a> with the player name shown on the game's main menu. You can also complain to the Swedish data protection authority (IMY).</span>
                </li>
              </ul>
            </div>
          }
        </div>

        <!-- Contact -->
        <div class="mt-8 text-center">
          <p class="text-amber-100/60 font-pixel text-sm">
            {{ langService.language() === 'sv'
               ? 'Har du frågor? Kontakta oss på'
               : 'Have questions? Contact us at' }}
            <a href="mailto:info@uxproductions.se" class="text-amber-400 hover:text-amber-300 ml-1 underline">
              info&#64;uxproductions.se
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class PrivacyComponent {
  protected readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
}
