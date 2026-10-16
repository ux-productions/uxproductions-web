"""Makes the press kit pages' thumbnails: public/press/<game>/thumbs/<name>.jpg.

Each is the full-size file at most 720 px wide (the widest tile on a press kit page is
about 430 px, so a thumbnail is never drawn enlarged, and stays sharp up to about 1.7x
screens), a JPEG; a transparent PNG (a logo) is set on the site's ground colour.

Run after adding or changing a file in a press kit:
    python scripts/make-press-thumbs.py
Needs Pillow (pip install pillow).
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / 'public' / 'press'
WIDTH = 720
GROUND = (15, 14, 13)  # --ground in src/styles/global.css

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
        if im.width > WIDTH:
            im = im.resize((WIDTH, round(im.height * WIDTH / im.width)), Image.LANCZOS)
        dest = out / (f.stem + '.jpg')
        im.save(dest, 'JPEG', quality=82, optimize=True, progressive=True)
        print(f'{dest.relative_to(ROOT)}: {im.width}x{im.height}, {dest.stat().st_size // 1024} KB')
