// Flag emoji for the country names we use in cities/locations data.
// Done as a string map (not ISO-derived) because some entries are aliased
// (e.g. "United States" matches whether sourced as US/USA).

const FLAGS: Record<string, string> = {
  'Portugal': '🇵🇹',
  'Germany': '🇩🇪',
  'Spain': '🇪🇸',
  'France': '🇫🇷',
  'United Kingdom': '🇬🇧',
  'Netherlands': '🇳🇱',
  'Italy': '🇮🇹',
  'Poland': '🇵🇱',
  'Sweden': '🇸🇪',
  'Norway': '🇳🇴',
  'Denmark': '🇩🇰',
  'Finland': '🇫🇮',
  'Ireland': '🇮🇪',
  'Czech Republic': '🇨🇿',
  'Estonia': '🇪🇪',
  'Hungary': '🇭🇺',
  'Greece': '🇬🇷',
  'Switzerland': '🇨🇭',
  'Austria': '🇦🇹',
  'Belgium': '🇧🇪',
  'United States': '🇺🇸',
  'Canada': '🇨🇦',
  'Mexico': '🇲🇽',
  'Brazil': '🇧🇷',
  'Argentina': '🇦🇷',
  'Colombia': '🇨🇴',
  'Chile': '🇨🇱',
  'Australia': '🇦🇺',
  'New Zealand': '🇳🇿',
  'India': '🇮🇳',
  'Japan': '🇯🇵',
  'Singapore': '🇸🇬',
  'Indonesia': '🇮🇩',
  'Thailand': '🇹🇭',
  'Vietnam': '🇻🇳',
  'Philippines': '🇵🇭',
  'United Arab Emirates': '🇦🇪',
  'Israel': '🇮🇱',
  'Turkey': '🇹🇷',
  'South Africa': '🇿🇦',
  'Georgia': '🇬🇪',
  'Europe': '🇪🇺',
  'Worldwide': '🌍',
};

export function flagFor(country: string | undefined | null): string {
  if (!country) return '🌍';
  return FLAGS[country] ?? '🌍';
}
