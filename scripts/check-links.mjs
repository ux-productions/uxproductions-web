// Fails the build when a page links to a file or page in dist/ that does not exist,
// or to an #anchor that is not on the target page.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const pages = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) pages.push(p);
  }
};
walk(DIST);

const resolveTarget = (url) => {
  const clean = decodeURI(url.split('#')[0].split('?')[0]);
  const p = path.join(DIST, clean);
  if (clean.endsWith('/')) return fs.existsSync(path.join(p, 'index.html')) ? path.join(p, 'index.html') : null;
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  return null;
};
const ids = new Map();
const idsOf = (file) => {
  if (!ids.has(file)) {
    const html = fs.readFileSync(file, 'utf8');
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return ids.get(file);
};

const problems = [];
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const rel = '/' + path.relative(DIST, page).replace(/\\/g, '/');
  for (const m of html.matchAll(/\s(?:href|src|poster|srcset)="([^"]+)"/g)) {
    for (let url of m[1].split(',').map((s) => s.trim().split(' ')[0])) {
      if (!url || /^(https?:|mailto:|tel:|data:)/.test(url)) continue;
      if (url.startsWith('#')) {
        if (url.length > 1 && !idsOf(page).has(url.slice(1))) problems.push(`${rel}: missing anchor ${url}`);
        continue;
      }
      if (!url.startsWith('/')) url = path.posix.join(path.posix.dirname(rel), url);
      const target = resolveTarget(url);
      if (!target) problems.push(`${rel}: broken link ${url}`);
      else if (url.includes('#') && target.endsWith('.html')) {
        const anchor = url.split('#')[1];
        if (anchor && !idsOf(target).has(anchor)) problems.push(`${rel}: missing anchor ${url}`);
      }
    }
  }
}

if (problems.length) {
  console.error([...new Set(problems)].join('\n'));
  console.error(`\n${problems.length} link problem(s) in ${pages.length} pages.`);
  process.exit(1);
}
console.log(`Links OK in ${pages.length} pages.`);
