// Curated Unsplash CDN photo URLs per city slug. All URLs hit
// images.unsplash.com directly, no API key, no Unsplash Source API
// (deprecated). Photos selected for landscape framing and warm tone.

const FALLBACK =
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80&fit=crop&auto=format';

const IMAGES: Record<string, string> = {
  // Europe
  'lisbon':
    'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80&fit=crop&auto=format',
  'porto':
    'https://images.unsplash.com/photo-1555881400-69a4cee8cd7c?w=1200&q=80&fit=crop&auto=format',
  'madeira':
    'https://images.unsplash.com/photo-1593102062926-7d54df3b1c45?w=1200&q=80&fit=crop&auto=format',
  'barcelona':
    'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80&fit=crop&auto=format',
  'madrid':
    'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80&fit=crop&auto=format',
  'valencia':
    'https://images.unsplash.com/photo-1599735734060-c437f97cf09e?w=1200&q=80&fit=crop&auto=format',
  'malaga':
    'https://images.unsplash.com/photo-1591801074660-d10e6395e6f6?w=1200&q=80&fit=crop&auto=format',
  'las-palmas':
    'https://images.unsplash.com/photo-1564352938632-86fcc7d22d1d?w=1200&q=80&fit=crop&auto=format',
  'tenerife':
    'https://images.unsplash.com/photo-1591789528878-451a51b75c25?w=1200&q=80&fit=crop&auto=format',
  'berlin':
    'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80&fit=crop&auto=format',
  'munich':
    'https://images.unsplash.com/photo-1599982998760-ed31bf3a14fe?w=1200&q=80&fit=crop&auto=format',
  'amsterdam':
    'https://images.unsplash.com/photo-1534351590666-13e3e96c5017?w=1200&q=80&fit=crop&auto=format',
  'paris':
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&fit=crop&auto=format',
  'london':
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80&fit=crop&auto=format',
  'dublin':
    'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1200&q=80&fit=crop&auto=format',
  'warsaw':
    'https://images.unsplash.com/photo-1606818616331-bcdf38d7e6df?w=1200&q=80&fit=crop&auto=format',
  'prague':
    'https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80&fit=crop&auto=format',
  'budapest':
    'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1200&q=80&fit=crop&auto=format',
  'tallinn':
    'https://images.unsplash.com/photo-1561565078-fdba90fc1bc4?w=1200&q=80&fit=crop&auto=format',
  'copenhagen':
    'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80&fit=crop&auto=format',
  'stockholm':
    'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80&fit=crop&auto=format',
  'helsinki':
    'https://images.unsplash.com/photo-1559564484-0a30dc28e1c2?w=1200&q=80&fit=crop&auto=format',
  'antalya':
    'https://images.unsplash.com/photo-1599735734060-c437f97cf09e?w=1200&q=80&fit=crop&auto=format',
  // Americas
  'mexico-city':
    'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=80&fit=crop&auto=format',
  'medellin':
    'https://images.unsplash.com/photo-1599582959859-c9aab4d4f24a?w=1200&q=80&fit=crop&auto=format',
  'buenos-aires':
    'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=80&fit=crop&auto=format',
  'rio-de-janeiro':
    'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80&fit=crop&auto=format',
  'sao-paulo':
    'https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1200&q=80&fit=crop&auto=format',
  'new-york':
    'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80&fit=crop&auto=format',
  'san-francisco':
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80&fit=crop&auto=format',
  'seattle':
    'https://images.unsplash.com/photo-1502175353174-a7a93e8b6c2e?w=1200&q=80&fit=crop&auto=format',
  'austin':
    'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&q=80&fit=crop&auto=format',
  'denver':
    'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1200&q=80&fit=crop&auto=format',
  'miami':
    'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80&fit=crop&auto=format',
  'toronto':
    'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1200&q=80&fit=crop&auto=format',
  'vancouver':
    'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1200&q=80&fit=crop&auto=format',
  // Asia / Oceania
  'bali':
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&fit=crop&auto=format',
  'chiang-mai':
    'https://images.unsplash.com/photo-1583395145631-cbe3b1a9d1a2?w=1200&q=80&fit=crop&auto=format',
  'bangkok':
    'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80&fit=crop&auto=format',
  'kuala-lumpur':
    'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80&fit=crop&auto=format',
  'da-nang':
    'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80&fit=crop&auto=format',
  'taipei':
    'https://images.unsplash.com/photo-1552413544-30a5fa3d0d27?w=1200&q=80&fit=crop&auto=format',
  'seoul':
    'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80&fit=crop&auto=format',
  'tokyo':
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=80&fit=crop&auto=format',
  'singapore':
    'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80&fit=crop&auto=format',
  // Africa / Middle East
  'dubai':
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&fit=crop&auto=format',
  'cape-town':
    'https://images.unsplash.com/photo-1486591038900-c1305d1ddfae?w=1200&q=80&fit=crop&auto=format',
  'marrakech':
    'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=80&fit=crop&auto=format',
  'tbilisi':
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80&fit=crop&auto=format',
};

export function cityImage(slug: string): string {
  return IMAGES[slug] ?? FALLBACK;
}
