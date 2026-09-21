// Verificador de links, imagens e textos do build estático (dist/).
// Uso: node scripts/check-links.cjs
const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '..', 'dist');
const html = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) html.push(p);
  }
})(dist);

const missing = new Set();
const external = new Set();
const textIssues = [];
// Confere se arquivos com extensão de imagem são imagens de verdade (o site legado devolvia HTML com status 200)
const isRealImage = (p) => {
  const b = fs.readFileSync(p).subarray(0, 12);
  return (b[0] === 0xff && b[1] === 0xd8) || b.toString('ascii', 0, 3) === 'GIF' || (b[0] === 0x89 && b.toString('ascii', 1, 4) === 'PNG') || b.toString('ascii', 0, 4) === 'RIFF' || b.toString('utf8', 0, 12).includes('<svg');
};
const exists = (u) => {
  const clean = decodeURIComponent(u.split('#')[0].split('?')[0]);
  if (!clean) return true;
  const p = path.join(dist, clean);
  if (fs.existsSync(p)) {
    if (fs.statSync(p).isDirectory()) return fs.existsSync(path.join(p, 'index.html'));
    if (/\.(jpe?g|png|gif|webp|svg)$/i.test(p) && !isRealImage(p)) return false;
    return true;
  }
  return fs.existsSync(p + '.html') || fs.existsSync(path.join(p, 'index.html'));
};

for (const f of html) {
  const s = fs.readFileSync(f, 'utf8');
  const rel = path.relative(dist, f);
  for (const m of s.matchAll(/\b(?:href|src|srcset)=["']([^"']+)["']/g)) {
    for (const u of m[1].split(',').map((x) => x.trim().split(' ')[0])) {
      if (!u || /^(data:|mailto:|tel:|javascript:)/.test(u)) continue;
      if (/^https?:/.test(u)) { external.add(u); continue; }
      if (u.startsWith('#')) {
        if (u.length > 1 && !s.includes(`id="${u.slice(1)}"`)) missing.add(`${rel} -> âncora ${u}`);
        continue;
      }
      if (!exists(u)) missing.add(`${rel} -> ${u}`);
    }
  }
  const text = s.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const bad of ['undefined', 'NaN', '[object', '{{', '}}', 'lorem']) if (text.includes(bad)) textIssues.push(`${rel}: contém "${bad}"`);
  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) textIssues.push(`${rel}: ${h1} <h1>`);
  for (const m of s.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) textIssues.push(`${rel}: <img> sem alt: ${m[0].slice(0, 90)}`);
}

console.log(`páginas: ${html.length}`);
console.log(`links/imagens locais quebrados: ${missing.size}`);
[...missing].forEach((x) => console.log('  X', x));
console.log(`problemas de texto/markup: ${textIssues.length}`);
textIssues.slice(0, 60).forEach((x) => console.log('  !', x));
console.log(`externos únicos: ${external.size}`);
[...external].forEach((x) => console.log('  >', x));
process.exitCode = missing.size ? 1 : 0;
