#!/usr/bin/env node
// Renders src/index.html + books.json into docs/index.html. Zero dependencies.
// Usage: node tools/build.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const { updated, books } = JSON.parse(fs.readFileSync(path.join(root, 'books.json'), 'utf8'));
const tpl = fs.readFileSync(path.join(root, 'src', 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

for (const b of books) {
  if (!fs.existsSync(path.join(root, 'docs', 'img', 'books', b.img))) {
    throw new Error(`missing image docs/img/books/${b.img} for "${b.title}"`);
  }
}

// Fanned hand of paperbacks inside the step-back. Angles spread around the middle.
const fan = books.map((b, i) => {
  const t = books.length === 1 ? 0 : i / (books.length - 1) - 0.5; // -0.5 .. 0.5
  return `        <a class="fan__card" href="${esc(b.post)}" style="--t:${t.toFixed(3)};--a:${Math.abs(t).toFixed(3)}">
          <img src="img/books/${esc(b.img)}" alt="${esc(b.alt)}" width="512" height="640"${i > 1 ? ' loading="lazy"' : ''}>
        </a>`;
}).join('\n');

const list = books.map((b) => {
  const quote = b.quote
    ? `\n          <blockquote class="book__quote"><p>${esc(b.quote)}</p></blockquote>`
    : '';
  const tropes = b.tropes.map((t) => `<li>${esc(t)}</li>`).join('');
  return `      <li class="book">
        <div class="book__art">
          <a href="${esc(b.post)}" tabindex="-1" aria-hidden="true"><img src="img/books/${esc(b.img)}" alt="" width="512" height="640" loading="lazy"></a>
          <p class="book__work">${esc(b.work)}</p>
        </div>
        <div class="book__text">
          <h3 class="book__title">${esc(b.title)}</h3>
          <p class="book__byline">by ${esc(b.author)} <span>${esc(b.series)}</span></p>${quote}
          <p class="book__blurb">${esc(b.blurb)}</p>
          <ul class="tropes">${tropes}</ul>
          <a class="book__link" href="${esc(b.post)}">See the post<span class="sr"> about ${esc(b.title)}</span> <svg class="ico" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </li>`;
}).join('\n');

// Sticker starburst: 24 points alternating between two radii.
const burst = Array.from({ length: 48 }, (_, i) => {
  const r = i % 2 ? 88 : 98;
  const a = (Math.PI * 2 * i) / 48;
  return `${(100 + r * Math.cos(a)).toFixed(1)},${(100 + r * Math.sin(a)).toFixed(1)}`;
}).join(' ');

// Decorative spine barcode, deterministic from the name.
const seed = [...'THEHIDDENBOOKMARKS'].map((c) => c.charCodeAt(0));
let x = 0;
const bars = [];
for (let i = 0; i < 46; i++) {
  const w = 1 + (seed[i % seed.length] + i * 7) % 3;
  if (i % 2 === 0) bars.push(`<rect x="${x}" y="0" width="${w}" height="40"/>`);
  x += w;
}

const out = tpl
  .replace('{{FAN}}', fan)
  .replace('{{LIST}}', list)
  .replace('{{FEATURE_IMG}}', esc(books[0].img))
  .replace('{{UPDATED}}', esc(updated))
  .replace('{{BURST}}', burst)
  .replace('{{BARCODE}}', bars.join(''))
  .replace('{{BARCODE_W}}', String(x))
  .replace('{{YEAR}}', String(new Date().getFullYear()))
  .replaceAll('{{VERSION}}', Date.now().toString(36));

fs.writeFileSync(path.join(root, 'docs', 'index.html'), out);
console.log(`docs/index.html: ${books.length} books (${updated})`);
