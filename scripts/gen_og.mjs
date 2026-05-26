#!/usr/bin/env node
// Generate static OG image (1200x630) + favicons from an SVG template.
// Run once after design changes. Outputs to public/.

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public');
await mkdir(OUT, { recursive: true });

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fafaf8"/>
  <g transform="translate(64,80)">
    <circle cx="7" cy="14" r="7" fill="#1f7a4d"/>
    <text x="24" y="22" font-family="-apple-system, system-ui, sans-serif" font-size="28" font-weight="600" fill="#111113">slateremote<tspan fill="#1f7a4d">.com</tspan></text>
  </g>
  <g transform="translate(64,260)">
    <rect x="0" y="-32" rx="999" ry="999" width="180" height="42" fill="#e6f3ec"/>
    <text x="20" y="-2" font-family="-apple-system, system-ui, sans-serif" font-size="22" fill="#1f7a4d">Remote tech jobs</text>
    <text x="0" y="80" font-family="-apple-system, system-ui, sans-serif" font-size="62" font-weight="700" fill="#111113">Remote tech jobs</text>
    <text x="0" y="150" font-family="-apple-system, system-ui, sans-serif" font-size="62" font-weight="700" fill="#111113">from across the web,</text>
    <text x="0" y="220" font-family="-apple-system, system-ui, sans-serif" font-size="62" font-weight="700" fill="#1f7a4d">refreshed daily.</text>
  </g>
  <g transform="translate(64,560)">
    <text x="0" y="0" font-family="-apple-system, system-ui, sans-serif" font-size="22" fill="#5b5b63">8 sources · 4 languages · updated every 24h</text>
    <text x="1136" y="0" text-anchor="end" font-family="-apple-system, system-ui, sans-serif" font-size="22" fill="#5b5b63">slateremote.com</text>
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .png({ compressionLevel: 9 })
  .toFile(join(OUT, 'og.png'));
console.log('Wrote public/og.png');

const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#fafaf8"/>
  <circle cx="32" cy="32" r="14" fill="none" stroke="#1f7a4d" stroke-width="6"/>
  <circle cx="32" cy="32" r="5" fill="#111113"/>
</svg>`;

for (const size of [16, 32, 180]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
  await sharp(Buffer.from(iconSvg))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(join(OUT, name));
  console.log(`Wrote public/${name}`);
}

// Generate a 32x32 ICO from the PNG buffer (single-image ICO)
const png32 = await sharp(Buffer.from(iconSvg))
  .resize(32, 32)
  .png({ compressionLevel: 9 })
  .toBuffer();

// ICO header: 6 bytes (reserved=0, type=1, count=1)
// Entry: 16 bytes
// Then PNG data
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // width
entry.writeUInt8(32, 1); // height
entry.writeUInt8(0, 2);  // color count
entry.writeUInt8(0, 3);  // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(png32.length, 8);
entry.writeUInt32LE(22, 12); // offset
const ico = Buffer.concat([header, entry, png32]);
await import('node:fs').then((fs) => fs.writeFileSync(join(OUT, 'favicon.ico'), ico));
console.log('Wrote public/favicon.ico');
