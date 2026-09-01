import { TestBed } from '@angular/core/testing';
import { GamesComponent } from './games.component';

describe('GamesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesComponent],
    }).compileComponents();
  });

  it('links The Perfect Race to both mobile stores', async () => {
    const fixture = TestBed.createComponent(GamesComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a'), (link) => link.href);

    expect(links).toContain(
      'https://apps.apple.com/us/app/the-perfect-race/id6800795522',
    );
    expect(links).toContain(
      'https://play.google.com/store/apps/details?id=se.uxproductions.theperfectrace',
    );
  });
});
