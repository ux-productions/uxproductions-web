import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalDocComponent } from '../../components/legal-doc/legal-doc.component';

@Component({
  selector: 'app-games-privacy',
  standalone: true,
  imports: [LegalDocComponent, RouterLink],
  template: `
    <app-legal-doc
      heading="PRIVACY NOTICE"
      subheading="How the games from UX Productions AB handle your data"
      lastUpdated="3 August 2026">

      <p class="lead">
        This notice covers <strong>The Perfect Race</strong> and <strong>The Perfect Murder</strong>.
        Both games run on the same stack, so one notice covers both; where something is true of only
        one of them, the game is named. Our
        <a routerLink="/games/terms">terms of sale</a> cover purchases.
      </p>

      <div class="toc">
        <ul>
          <li><a routerLink="/games/privacy" fragment="controller">1. Who is responsible</a></li>
          <li><a routerLink="/games/privacy" fragment="games">2. Which games this covers</a></li>
          <li><a routerLink="/games/privacy" fragment="data">3. What we process</a></li>
          <li><a routerLink="/games/privacy" fragment="guests">4. Playing without an account</a></li>
          <li><a routerLink="/games/privacy" fragment="why">5. Why we process it</a></li>
          <li><a routerLink="/games/privacy" fragment="legal-bases">6. Legal bases</a></li>
          <li><a routerLink="/games/privacy" fragment="cookies">7. Cookies and local storage</a></li>
          <li><a routerLink="/games/privacy" fragment="processors">8. Who processes data for us</a></li>
          <li><a routerLink="/games/privacy" fragment="transfers">9. Transfers outside the EU/EEA</a></li>
          <li><a routerLink="/games/privacy" fragment="retention">10. How long we keep it</a></li>
          <li><a routerLink="/games/privacy" fragment="rights">11. Your rights</a></li>
          <li><a routerLink="/games/privacy" fragment="children">12. Age</a></li>
          <li><a routerLink="/games/privacy" fragment="changes">13. Changes</a></li>
          <li><a routerLink="/games/privacy" fragment="contact">14. Contact</a></li>
        </ul>
      </div>

      <h2 id="controller">1. Who is responsible</h2>
      <p>
        <strong>UX Productions AB</strong> (organisationsnummer 556947-8661), Lyckåsgatan 3,
        633 58 Eskilstuna, Sweden, is the controller of the personal data described here.
      </p>
      <p>
        Questions about this notice, or about your data, go to
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a>.
      </p>

      <h2 id="games">2. Which games this covers</h2>
      <ul>
        <li>
          <strong>The Perfect Race</strong> —
          <a href="https://the-perfect-race.com" target="_blank" rel="noopener">the-perfect-race.com</a>
        </li>
        <li>
          <strong>The Perfect Murder</strong> —
          <a href="https://the-perfect-murder.com" target="_blank" rel="noopener">the-perfect-murder.com</a>
        </li>
      </ul>
      <p>
        Each game also publishes its own notice with detail specific to that game. This one is the
        common description of what we collect and why.
      </p>

      <h2 id="data">3. What we process</h2>
      <ul>
        <li>
          <strong>Account details</strong> — email address, display or racer name, a hash of your
          password, verification status, and the identifier of a linked Google or Apple account if
          you signed in that way. We never see your Google or Apple password.
        </li>
        <li>
          <strong>Purchases</strong> — payment transaction identifiers, what was bought, and the
          entitlements it unlocked. Card details are handled by Stripe; we never receive or store a
          complete card number.
        </li>
        <li>
          <strong>In-game records</strong> — for The Perfect Race, verified lap times, leaderboard
          entries, ghost replays, seasonal results and shareable challenge links; for The Perfect
          Murder, game history, statistics and ladder results. Basic events such as opening or
          completing a shared challenge are recorded too.
        </li>
        <li>
          <strong>Social features</strong> — friend requests, accepted friendships, blocked players
          and activity inbox items.
        </li>
        <li>
          <strong>Preferences</strong> — notification and email settings, leaderboard visibility, and
          in-game appearance choices.
        </li>
        <li>
          <strong>Multiplayer session state</strong> — short-lived room and match state while a game
          is running.
        </li>
        <li>
          <strong>Service logs</strong> — standard security, diagnostics and operational logs,
          including IP address and approximate request timing, produced by running the service.
        </li>
      </ul>

      <h2 id="guests">4. Playing without an account</h2>
      <p>
        Both games can be played as a guest, with no account and no email address. Guest results are
        not published to the leaderboards, and a purchase cannot be attached to a guest session.
      </p>

      <h2 id="why">5. Why we process it</h2>
      <ul>
        <li>To create and operate your account and keep it secure.</li>
        <li>To verify that submitted results are genuine, so leaderboards mean something.</li>
        <li>To deliver and maintain content you have purchased.</li>
        <li>To provide multiplayer, profiles, friends and shared challenges.</li>
        <li>To send account email, and activity email you have asked for.</li>
        <li>To detect and prevent cheating, abuse and fraud.</li>
        <li>To keep the service running reliably and to fix what breaks.</li>
        <li>To keep the accounting records a sale requires.</li>
      </ul>

      <h2 id="legal-bases">6. Legal bases</h2>
      <p>Under the GDPR, we rely on:</p>
      <ul>
        <li>
          <strong>Performance of a contract</strong> — running your account, providing the game
          features that come with it, and delivering what you purchased.
        </li>
        <li>
          <strong>Legitimate interests</strong> — preventing cheating, abuse and fraud, securing the
          service, and keeping it reliable. Our interest is in a service that works and is fair to
          everyone playing it; we weigh it against your interests and use no more data than the
          purpose needs.
        </li>
        <li>
          <strong>Consent</strong> — optional email such as friend-activity notifications. You can
          withdraw consent at any time in your notification settings, without affecting email already
          sent.
        </li>
        <li>
          <strong>Legal obligation</strong> — accounting records of a sale, which Swedish accounting
          law requires us to keep.
        </li>
      </ul>

      <h2 id="cookies">7. Cookies and local storage</h2>
      <p>
        The games use an <strong>essential sign-in cookie</strong> to keep you logged in, and local
        storage on your device for preferences, guest progress and update state.
      </p>
      <p>
        We do not use advertising cookies, we do not run third-party ad or tracking networks, and we
        do not sell personal data.
      </p>

      <h2 id="processors">8. Who processes data for us</h2>
      <ul>
        <li>
          <strong>Microsoft Azure</strong> — hosting, database, operational telemetry and
          transactional email, in the EU.
        </li>
        <li>
          <strong>Stripe</strong> — payment processing. Stripe receives the card details you enter at
          checkout; we never do.
        </li>
        <li>
          <strong>Google and Apple</strong> — only where you choose to sign in with a Google or Apple
          account.
        </li>
        <li>
          <strong>A private ntfy channel</strong> — operational alerts to us about the state of the
          service.
        </li>
      </ul>

      <h2 id="transfers">9. Transfers outside the EU/EEA</h2>
      <p>
        Our hosting and databases are in the EU. Some of the providers above are established outside
        the EU/EEA or may process data there. Where that happens, the transfer relies on an approved
        safeguard — an adequacy decision such as the EU–US Data Privacy Framework, or the European
        Commission's standard contractual clauses.
      </p>

      <h2 id="retention">10. How long we keep it</h2>
      <ul>
        <li>Account and game data: while your account exists.</li>
        <li>Friend activity inbox items: about 180 days, then removed automatically.</li>
        <li>Operational telemetry: normally about 30 days.</li>
        <li>
          Deleted data can remain briefly in encrypted service backups until those backups expire on
          their normal schedule.
        </li>
        <li>
          After you delete your account we keep a <strong>de-linked payment record</strong> —
          transaction identifiers, amount, currency and refund status, with no link back to you as a
          user — for accounting, dispute and refund handling. Swedish accounting law requires it to
          be kept until the end of the seventh year after the calendar year in which the financial
          year ended. Stripe separately keeps its own records under its own legal obligations.
        </li>
      </ul>

      <h2 id="rights">11. Your rights</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>give you access to the personal data we hold about you,</li>
        <li>correct data that is wrong,</li>
        <li>erase your data,</li>
        <li>export your data in a portable form,</li>
        <li>restrict how we use it, or</li>
        <li>object to processing we base on legitimate interests.</li>
      </ul>
      <p>
        You can also withdraw consent for optional email at any time, and you can
        <strong>delete your account permanently from inside the game</strong> — in The Perfect Race
        from Garage, in The Perfect Murder from your profile. Deletion removes your account and the
        game data attached to it.
      </p>
      <p>
        To exercise any of these, email
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a>. We answer
        within one month; if a request is complex we will tell you and may take longer, as the GDPR
        allows.
      </p>
      <p>
        If you think we have handled your data wrongly you can complain to the Swedish data
        protection authority, <strong>Integritetsskyddsmyndigheten (IMY)</strong> — Box 8114,
        104 20 Stockholm, <a href="https://www.imy.se" target="_blank" rel="noopener">imy.se</a> — or
        to the supervisory authority in the EU country where you live.
      </p>

      <h2 id="children">12. Age</h2>
      <p>
        You must be at least
        <span class="todo">TODO: minimum age</span>
        years old to create an account. Younger players can still play as guests, without an account.
      </p>

      <h2 id="changes">13. Changes</h2>
      <p>
        We may update this notice. The version in force is the one published on this page, with the
        date shown at the top.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        UX Productions AB<br>
        Lyckåsgatan 3, 633 58 Eskilstuna, Sweden<br>
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a>
      </p>
      <p>
        See also our <a routerLink="/games/terms">terms of sale</a>.
      </p>

    </app-legal-doc>
  `,
})
export class GamesPrivacyComponent {}
