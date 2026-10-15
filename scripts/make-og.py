"""Write the 1200x630 share images in public/og/ from the site's art.

Run from the repo root after adding a game or a news post:  python scripts/make-og.py
"""
import re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / 'src' / 'assets'
OUT = ROOT / 'public' / 'og'
W, H = 1200, 630
GROUND = (23, 18, 13)


def cover(src, focus_x=0.5, focus_y=0.5):
    im = Image.open(src).convert('RGB')
    scale = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    x = round((im.width - W) * focus_x)
    y = round((im.height - H) * focus_y)
    return im.crop((x, y, x + W, y + H))


def save(im, name):
    OUT.mkdir(parents=True, exist_ok=True)
    im.save(OUT / name, 'JPEG', quality=86, optimize=True, progressive=True)
    print('og/' + name)


def studio():
    """The three games side by side on the studio ground, with the logo."""
    canvas = Image.new('RGB', (W, H), GROUND)
    cards = [ASSETS / 'robot' / 'capsule.jpg', ASSETS / 'murder' / 'card.jpg', ASSETS / 'race' / 'card.jpg']
    cw, ch, gap = 360, 203, 24
    x0 = (W - 3 * cw - 2 * gap) // 2
    for i, c in enumerate(cards):
        im = Image.open(c).convert('RGB')
        scale = max(cw / im.width, ch / im.height)
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        im = im.crop(((im.width - cw) // 2, (im.height - ch) // 2, (im.width - cw) // 2 + cw, (im.height - ch) // 2 + ch))
        canvas.paste(im, (x0 + i * (cw + gap), 300))
    logo = Image.open(ASSETS / 'logo.png').convert('RGBA').resize((180, 180), Image.LANCZOS)
    canvas.paste(logo, ((W - 180) // 2, 70), logo)
    return canvas


save(cover(ASSETS / 'robot' / 'capsule.jpg', 0.5, 0.35), 'home.jpg')
save(studio(), 'studio.jpg')
save(cover(ASSETS / 'robot' / 'capsule.jpg', 0.5, 0.35), 'the-perfect-robot.jpg')
save(cover(ASSETS / 'murder' / 'card.jpg'), 'the-perfect-murder.jpg')
save(cover(ASSETS / 'race' / 'card.jpg'), 'the-perfect-race.jpg')

for post in sorted((ROOT / 'src' / 'content' / 'news').glob('*.md')):
    m = re.search(r'^image:\s*(.+)$', post.read_text(encoding='utf-8'), re.M)
    if m:
        save(cover((post.parent / m.group(1).strip()).resolve()), f'news-{post.stem}.jpg')
