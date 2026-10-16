"""Makes the press kit pages' thumbnails: public/press/<game>/thumbs/<name>.jpg and
<name>-360.jpg, two sizes of each file (the page's srcset takes the one a screen needs).

A tile on a press kit page is 16:10 and about 315 px wide (430 px in a three-column
kit). An in-game screenshot fills its tile, so its thumbnails are 720 and 360 px wide.
Everything else (logos, capsules, key art, feature graphics) is shown whole in its tile,
so its own lettering is never cut: its thumbnails fit a 720x450 and a 360x225 box. Each
is a JPEG; a transparent PNG (a logo) is set on the site's ground colour. The same rule
(a file named screenshot-* fills its tile) is in src/pages/press/[slug].astro.

Run after adding or changing a file in a press kit:
    python scripts/make-press-thumbs.py
Needs Pillow (pip install pillow).
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / 'public' / 'press'
GROUND = (15, 14, 13)  # --ground in src/styles/global.css
SIZES = {'': (720, 450), '-360': (360, 225)}

for kit in sorted(p for p in ROOT.iterdir() if p.is_dir()):
    out = kit / 'thumbs'
    out.mkdir(exist_ok=True)
    for f in sorted(kit.iterdir()):
        if f.suffix.lower() not in ('.jpg', '.jpeg', '.png'):
            continue
        im = Image.open(f)
        if im.mode in ('RGBA', 'LA', 'P'):
            im = im.convert('RGBA')
            ground = Image.new('RGBA', im.size, GROUND + (255,))
            im = Image.alpha_composite(ground, im)
        im = im.convert('RGB')
        fills = f.stem.startswith('screenshot')
        for suffix, (bw, bh) in SIZES.items():
            scale = bw / im.width if fills else min(bw / im.width, bh / im.height)
            t = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS) if scale < 1 else im
            dest = out / (f.stem + suffix + '.jpg')
            t.save(dest, 'JPEG', quality=82, optimize=True, progressive=True)
            print(f'{dest.relative_to(ROOT)}: {t.width}x{t.height}, {dest.stat().st_size // 1024} KB')
