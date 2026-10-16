"""Makes the small font files that src/components/Fonts.astro inlines into every page.

The studio's headings (Saira Condensed, always in capitals) and the two games' titles
(Bodoni Moda for The Perfect Murder, Press Start 2P for The Perfect Race) are drawn
from these subsets, which arrive inside the HTML itself: they are there for the first
paint of every page, on any connection, so a heading is never drawn in a fallback face
first. src/assets/fonts/subsets.json lists each subset's source file (from the
@fontsource packages) and the characters it keeps; Fonts.astro reads the same list for
each subset's unicode-range.

Run after changing a list or updating a font package:
    python scripts/make-font-subsets.py
Needs fontTools (pip install fonttools). Writes WOFF (zlib), which needs no brotli.
"""
import json
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'src' / 'assets' / 'fonts'

for s in json.loads((OUT / 'subsets.json').read_text(encoding='utf-8')):
    # The source's own timestamp, so the same input always makes the same file.
    font = TTFont(ROOT / 'node_modules' / s['source'], recalcTimestamp=False)
    opts = subset.Options()
    opts.flavor = 'woff'
    opts.layout_features = ['kern', 'liga', 'calt', 'case']
    opts.name_IDs = [1, 2, 4, 6]
    opts.notdef_outline = False
    sub = subset.Subsetter(opts)
    sub.populate(text=s['text'])
    sub.subset(font)
    missing = [c for c in s['text'] if ord(c) not in font.getBestCmap()]
    if missing:
        raise SystemExit(f"{s['file']}: the font has no {missing}")
    font.flavor = 'woff'
    font.save(OUT / s['file'])
    print(f"{s['file']}: {len(set(s['text']))} characters, {(OUT / s['file']).stat().st_size} bytes")
