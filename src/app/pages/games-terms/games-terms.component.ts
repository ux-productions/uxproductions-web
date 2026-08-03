import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalDocComponent } from '../../components/legal-doc/legal-doc.component';

@Component({
  selector: 'app-games-terms',
  standalone: true,
  imports: [LegalDocComponent, RouterLink],
  template: `
    <app-legal-doc
      heading="TERMS OF SALE"
      subheading="Purchase terms for games published by UX Productions AB"
      lastUpdated="3 August 2026">

      <p class="lead">
        These terms apply when you buy something in one of our games. They are the terms linked
        as our terms of service on the payment page, and you accept them by ticking the box there
        before you pay. Please read them first. Our
        <a routerLink="/games/privacy">privacy notice for the games</a> explains how we handle your
        data.
      </p>

      <div class="toc">
        <ul>
          <li><a routerLink="/games/terms" fragment="seller">1. Who you are buying from</a></li>
          <li><a routerLink="/games/terms" fragment="scope">2. What these terms cover</a></li>
          <li><a routerLink="/games/terms" fragment="what-you-buy">3. What you are buying</a></li>
          <li><a routerLink="/games/terms" fragment="price">4. Price and tax</a></li>
          <li><a routerLink="/games/terms" fragment="withdrawal">5. Delivery and your right of withdrawal</a></li>
          <li><a routerLink="/games/terms" fragment="refunds">6. Refunds</a></li>
          <li><a routerLink="/games/terms" fragment="accounts">7. Your account</a></li>
          <li><a routerLink="/games/terms" fragment="availability">8. Availability, updates and changes</a></li>
          <li><a routerLink="/games/terms" fragment="game-terms">9. The rules of each game</a></li>
          <li><a routerLink="/games/terms" fragment="law">10. Governing law and disputes</a></li>
          <li><a routerLink="/games/terms" fragment="contact">11. Contact</a></li>
        </ul>
      </div>

      <h2 id="seller">1. Who you are buying from</h2>
      <p>
        You are buying from <strong>UX Productions AB</strong>, a limited company registered in
        Sweden.
      </p>
      <ul>
        <li>Company: UX Productions AB</li>
        <li>Registration number (organisationsnummer): 556947-8661</li>
        <li>Address: Lyckåsgatan 3, 633 58 Eskilstuna, Sweden</li>
        <li>Email: <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a></li>
        <li>VAT number: SE556947866101</li>
      </ul>
      <p>
        UX Productions AB is the seller and merchant of record for everything described here. Stripe
        collects the payment on our behalf and is only the payment processor — Stripe is not the
        seller and sells you nothing. Your contract is with UX Productions AB.
      </p>

      <h2 id="scope">2. What these terms cover</h2>
      <p>These terms cover one-time purchases made on the web in either of our two games:</p>
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
        Both games are published by UX Productions AB and both use the same checkout, so the same
        terms apply whichever game you bought in.
      </p>
      <p>
        These terms do <strong>not</strong> cover purchases made inside an app installed from the
        Apple App Store or Google Play. When you buy there, the store handles the sale and its own
        terms, billing and refund rules apply.
      </p>
      <p>Each game also has its own rules for playing it — see section 9.</p>

      <h2 id="what-you-buy">3. What you are buying</h2>
      <p>
        Everything sold here is a <strong>one-time purchase of digital content</strong>. There is no
        subscription, nothing renews and you are not charged again.
      </p>
      <p>
        A purchase unlocks content on <strong>the account that made it</strong> and stays unlocked on
        that account. It cannot be transferred to another account, resold or shared. You therefore
        need an account to buy — both games can be played as a guest, but a purchase cannot be
        attached to a guest session.
      </p>
      <p>
        We may issue gift or promotional codes at our discretion. A code grants access without a
        purchase, has no cash value and cannot be exchanged for money.
      </p>

      <h3 id="the-perfect-race">The Perfect Race — Full Game — $14.99 USD</h3>
      <p>
        A single payment that unlocks the complete launch game on your account: all launch circuits,
        all launch car classes, ranked Time Attack on every launch board, and Friends and
        Multiplayer. The Perfect Race can be played for free without buying anything; the Full Game
        unlocks the rest.
      </p>

      <h3 id="the-perfect-murder">The Perfect Murder — Supporter — $3.00 USD</h3>
      <p>
        A single payment that adds Supporter status to your account and unlocks the supporter
        features and cosmetics described at checkout. The Perfect Murder is free to play; the
        Supporter purchase is optional and helps pay for the game and its servers.
      </p>

      <h2 id="price">4. Price and tax</h2>
      <p>
        Prices are shown in <strong>US dollars (USD)</strong>. The price shown at checkout includes
        any tax that applies in your country, and it is the amount that will be charged. Nothing is
        added afterwards.
      </p>
      <p>
        Your bank or card issuer may apply its own currency conversion or foreign transaction fee.
        That is between you and them; we do not receive it and cannot refund it.
      </p>
      <p>Payment is collected by Stripe. We never receive or store your full card details.</p>

      <h2 id="withdrawal">5. Delivery and your right of withdrawal</h2>
      <div class="callout">
        <p>
          <strong>Read this before you tick the box at checkout.</strong> It is the part of these
          terms that changes what you can do after you pay.
        </p>
      </div>
      <p>
        What you buy is digital content and it is delivered immediately: access unlocks on your
        account the moment the payment succeeds. There is nothing to ship and no waiting period.
      </p>
      <p>
        Consumers in the EU and EEA normally have <strong>14 days</strong> to withdraw from a
        distance purchase. For digital content, that right ends once delivery has begun at your
        express request and with your acknowledgement that it will end.
      </p>
      <p>
        At checkout you ask us to start delivering the content immediately, and you acknowledge that
        you thereby <strong>lose your 14-day right of withdrawal</strong> once access has been
        granted. Ticking the consent box on the payment page is how you make that request and give
        that acknowledgement.
      </p>
      <p>
        <strong>Until access has actually been granted, your right of withdrawal is unaffected.</strong>
        If you paid and nothing was unlocked, see section 6.
      </p>
      <p>
        None of this affects your statutory rights if what you bought is faulty or is not what was
        described.
      </p>

      <h2 id="refunds">6. Refunds</h2>
      <p>
        <strong>If a payment succeeded but your access did not unlock</strong>, email
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a> with your
        payment receipt. We will either fix the entitlement or refund the purchase.
      </p>
      <p>
        We may also refund at our discretion in other cases, even where we are not required to. Ask
        us — we would rather hear from you than not.
      </p>
      <p>
        A <strong>full refund revokes the access that purchase granted</strong>. A partial refund
        does not.
      </p>
      <p>Refunds are returned through Stripe to the payment method you used.</p>

      <h2 id="accounts">7. Your account</h2>
      <p>
        Keep your credentials secure and use an email address you control — it is how we reach you
        about your purchase. You are responsible for what happens through your account.
      </p>
      <p>
        You can delete your account permanently from inside the game. Deleting it also ends the
        access your purchase granted, and does not by itself entitle you to a refund.
      </p>
      <p>
        If you are under 18, only buy with the agreement of a parent or guardian.
      </p>

      <h2 id="availability">8. Availability, updates and changes</h2>
      <p>
        We may update, suspend or discontinue features to keep the service secure, reliable and fair,
        or for ordinary product reasons. Individual circuits, seasons, cosmetics and online features
        can change as a game evolves. We do not promise uninterrupted availability.
      </p>
      <p>
        Normal updates to the game you bought are included in your purchase. Substantial future
        content — new cars, circuits, expansions or comparable additions — may be sold separately.
      </p>
      <p>
        We may change these terms. The version in force is the one published on this page, with the
        date shown at the top. Changes do not apply retroactively to a purchase you have already
        made.
      </p>

      <h2 id="game-terms">9. The rules of each game</h2>
      <p>
        These terms govern <strong>your purchase</strong>. Each game's own terms govern
        <strong>how you use that game</strong> — the licence to its content, fair play, leaderboards,
        replays and multiplayer conduct.
      </p>
      <ul>
        <li>
          The Perfect Race:
          <a href="https://the-perfect-race.com/terms" target="_blank" rel="noopener">terms</a>
          and
          <a href="https://the-perfect-race.com/privacy" target="_blank" rel="noopener">privacy notice</a>
        </li>
        <li>
          The Perfect Murder:
          <a href="https://the-perfect-murder.com/privacy" target="_blank" rel="noopener">privacy notice</a>
          — this game does not publish separate in-game terms, so these terms are the ones that
          apply to it.
        </li>
      </ul>
      <p>
        If a game's own terms conflict with these terms on a question about the purchase itself —
        price, tax, delivery, withdrawal or refunds — these terms apply. On any question about
        playing the game, that game's own terms apply.
      </p>

      <h2 id="law">10. Governing law and disputes</h2>
      <p>
        Swedish law applies to these terms. If you are a consumer you also keep the protection of any
        mandatory consumer rules of the country where you live; nothing here takes those away.
      </p>
      <p>
        If something goes wrong, please contact
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a> first — most
        things are quickest to fix that way. If we cannot agree:
      </p>
      <ul>
        <li>
          Consumers in Sweden can refer the dispute to
          <strong>Allmänna reklamationsnämnden (ARN)</strong>, the National Board for Consumer
          Disputes — Box 174, 101 23 Stockholm,
          <a href="https://www.arn.se" target="_blank" rel="noopener">arn.se</a>.
        </li>
        <li>
          Consumers elsewhere in the EU or EEA can use the out-of-court dispute body in their own
          country; the
          <a href="https://www.eccnet.eu" target="_blank" rel="noopener">European Consumer Centres Network</a>
          can point you to it. The European Commission's online dispute resolution (ODR) platform
          closed on 20 July 2025 and is no longer available.
        </li>
        <li>
          A dispute may also be brought before the competent Swedish courts. A consumer may instead
          bring proceedings in the courts of their own country of residence.
        </li>
      </ul>

      <h2 id="contact">11. Contact</h2>
      <p>
        UX Productions AB<br>
        Lyckåsgatan 3, 633 58 Eskilstuna, Sweden<br>
        <a href="mailto:support&#64;uxproductions.se">support&#64;uxproductions.se</a>
      </p>
      <p>
        See also our <a routerLink="/games/privacy">privacy notice for the games</a>.
      </p>

    </app-legal-doc>
  `,
})
export class GamesTermsComponent {}
