import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalDocComponent } from '../../components/legal-doc/legal-doc.component';

@Component({
  selector: 'app-robot-privacy',
  standalone: true,
  imports: [LegalDocComponent, RouterLink],
  template: `
    <app-legal-doc
      heading="PRIVACY NOTICE"
      subheading="The Perfect Robot (formerly Tiny Treads)"
      lastUpdated="2 October 2026">

      <p class="lead">
        The Perfect Robot has no accounts, no ads and no servers of our own. Your progress stays on
        your device. This notice explains the little data that does leave it: what online play needs,
        and what stores handle when you buy the Full Game. Our
        <a routerLink="/games/terms">terms of sale</a> cover purchases.
      </p>

      <div class="toc">
        <ul>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="controller">1. Who is responsible</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="device">2. On your device</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="online">3. Online play</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="purchases">4. Purchases</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="statistics">5. Statistics in versions before 2.0</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="processors">6. Who processes data for us</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="retention">7. How long it is kept</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="rights">8. Your rights</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="children">9. Children</a></li>
          <li><a routerLink="/games/the-perfect-robot/privacy" fragment="changes">10. Changes and contact</a></li>
        </ul>
      </div>

      <h2 id="controller">1. Who is responsible</h2>
      <p>
        <strong>UX Productions AB</strong> (organisationsnummer 556947-8661), Lyckåsgatan 3,
        633 58 Eskilstuna, Sweden, makes The Perfect Robot and is the controller of the personal data
        described here. Questions go to
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a>.
      </p>

      <h2 id="device">2. On your device</h2>
      <p>
        Campaign progress, stars, settings and your chosen robot are saved on your device. On Steam
        they are also kept in your Steam Cloud so they follow you between computers. We never receive
        them. Uninstalling the game removes them from the device.
      </p>

      <h2 id="online">3. Online play</h2>
      <p>
        Online play runs on <strong>Unity Gaming Services</strong>, operated by Unity Technologies.
        When the game starts it signs in to Unity anonymously and gets a random player ID and a
        generated player name. It never asks for your name, email address or a password.
      </p>
      <ul>
        <li>
          When you host or join an online game, Unity Lobby and Relay pass the lobby and match data
          between the players: your generated player name, chosen robot, the map and settings, whether
          you are ready, and the moves you program during the match.
        </li>
        <li>
          To connect you, Unity's servers see your device's IP address and use it to pick a server
          region near you.
        </li>
      </ul>
      <p>
        We use this only to let you play with others (performance of a contract under the GDPR).
        Single-player games are played entirely on your device.
      </p>

      <h2 id="purchases">4. Purchases</h2>
      <p>
        The Full Game is bought through the App Store or Google Play, and the game on Steam through
        Steam. Apple, Google and Valve handle the payment under their own terms and privacy policies.
        We never receive your card or account details; the game only learns whether you own the Full
        Game, so it can unlock it and restore it on a new device.
      </p>

      <h2 id="statistics">5. Statistics in versions before 2.0</h2>
      <p>
        Versions before 2.0 (released as Tiny Treads) sent anonymous gameplay statistics to Unity
        Analytics, such as which levels and modes were played, device model, operating system and
        approximate country, linked to the random player ID. You could turn this off in Settings. We
        used it, on the basis of our legitimate interest, to see where players got stuck. From version
        2.0 the game sends no statistics.
      </p>

      <h2 id="processors">6. Who processes data for us</h2>
      <ul>
        <li>
          <strong>Unity Technologies</strong> — anonymous sign-in, online lobbies and relay servers
          (and statistics in versions before 2.0).
        </li>
        <li>
          <strong>Apple, Google and Valve</strong> — distribution of the game and processing of
          purchases in their stores.
        </li>
      </ul>
      <p>
        We do not show ads, we do not track you across other apps or websites, and we do not sell
        personal data. Unity is based in the United States. Transfers there rely on an approved
        safeguard: the EU–US Data Privacy Framework or the European Commission's standard contractual
        clauses.
      </p>

      <h2 id="retention">7. How long it is kept</h2>
      <ul>
        <li>Progress and settings on your device: until you uninstall the game.</li>
        <li>Lobby and match data: while the lobby or match is running.</li>
        <li>
          The anonymous player ID and, for versions before 2.0, the statistics: kept by Unity under
          its retention schedule, or deleted sooner when you ask us.
        </li>
      </ul>

      <h2 id="rights">8. Your rights</h2>
      <p>
        You can ask us for access to, correction or erasure of your data, a portable copy, restriction
        of its use, or object to processing based on legitimate interests. Because nothing is tied to
        your name or email, tell us the player name shown on the game's main menu so we can find it.
        Email <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a>; we answer
        within one month.
      </p>
      <p>
        If you think we have handled your data wrongly you can complain to the Swedish data
        protection authority, <strong>Integritetsskyddsmyndigheten (IMY)</strong> — Box 8114,
        104 20 Stockholm, <a href="https://www.imy.se" target="_blank" rel="noopener">imy.se</a> — or
        to the supervisory authority in the EU country where you live.
      </p>

      <h2 id="children">9. Children</h2>
      <p>
        The game can be played at any age. It has no accounts and never asks for personal details, and
        online players see only each other's generated player names.
      </p>

      <h2 id="changes">10. Changes and contact</h2>
      <p>
        We may update this notice. The version in force is the one published on this page, with the
        date shown at the top.
      </p>
      <p>
        UX Productions AB<br>
        Lyckåsgatan 3, 633 58 Eskilstuna, Sweden<br>
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a>
      </p>

    </app-legal-doc>
  `,
})
export class RobotPrivacyComponent {}
