#!/usr/bin/env node
// Generate the OG image (1200x630) + every favicon size from the brand SVG.

import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public');
await mkdir(OUT, { recursive: true });

const FOREST = '#0a5d3f';
const INK = '#0c0d12';
const BG = '#fbfaf7';
const TERRACOTTA = '#d97757';
const MUTED = '#6b6b75';

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="18%" cy="22%" r="55%">
      <stop offset="0%" stop-color="${FOREST}" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="${FOREST}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="86%" cy="14%" r="42%">
      <stop offset="0%" stop-color="${TERRACOTTA}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${TERRACOTTA}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>

  <!-- mark + wordmark -->
  <g transform="translate(72,80)">
    <rect width="44" height="44" rx="10" fill="${FOREST}"/>
    <circle cx="22" cy="22" r="5.5" fill="${BG}"/>
    <text x="60" y="32" font-family="ui-sans-serif, system-ui, -apple-system, Inter" font-size="32" font-weight="700" letter-spacing="-1" fill="${INK}">slate<tspan dx="3" dy="-2" font-size="44" fill="${FOREST}">·</tspan><tspan dx="3" dy="2">remote</tspan></text>
  </g>

  <!-- pill tag -->
  <g transform="translate(72,250)">
    <rect width="240" height="38" rx="999" fill="${FOREST}" fill-opacity="0.10"/>
    <text x="22" y="25" font-family="ui-sans-serif, system-ui, -apple-system, Inter" font-size="17" font-weight="600" fill="${FOREST}">Remote tech jobs · daily</text>
  </g>

  <!-- headline -->
  <g transform="translate(72,330)">
    <text font-family="ui-sans-serif, system-ui, -apple-system, Inter" font-size="76" font-weight="800" letter-spacing="-3" fill="${INK}">
      <tspan x="0" y="0">Find your next</tspan>
      <tspan x="0" y="86">remote tech role,</tspan>
      <tspan x="0" y="172" fill="${FOREST}">fresh every day.</tspan>
    </text>
  </g>

  <!-- footer line -->
  <line x1="72" y1="558" x2="1128" y2="558" stroke="${INK}" stroke-opacity="0.08"/>
  <g transform="translate(72,592)">
    <text font-family="ui-sans-serif, system-ui, -apple-system, Inter" font-size="20" fill="${MUTED}">5000+ jobs · 8 sources · 7 languages · updated every 24h</text>
    <text x="1056" font-family="ui-sans-serif, system-ui, -apple-system, Inter" font-size="20" font-weight="600" fill="${INK}">slateremote.com</text>
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .png({ compressionLevel: 9 })
  .toFile(join(OUT, 'og.png'));
console.log('Wrote public/og.png');

const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${FOREST}"/>
  <circle cx="32" cy="32" r="6" fill="${BG}"/>
</svg>`;

for (const size of [16, 32, 180]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
  await sharp(Buffer.from(iconSvg))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(join(OUT, name));
  console.log(`Wrote public/${name}`);
}

const png32 = await sharp(Buffer.from(iconSvg))
  .resize(32, 32)
  .png({ compressionLevel: 9 })
  .toBuffer();

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);
entry.writeUInt8(32, 1);
entry.writeUInt8(0, 2);
entry.writeUInt8(0, 3);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(png32.length, 8);
entry.writeUInt32LE(22, 12);
const ico = Buffer.concat([header, entry, png32]);
await writeFile(join(OUT, 'favicon.ico'), ico);
console.log('Wrote public/favicon.ico');
