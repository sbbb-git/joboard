// Small visual badge per skill category. ASCII for tech, emoji elsewhere.

export function categoryIcon(category: string): string {
  switch (category) {
    case 'language':
      return '{ }';
    case 'framework':
      return '</>';
    case 'cloud':
      return '☁';
    case 'data':
      return '▤';
    case 'devops':
      return '↻';
    case 'ai':
      return '✦';
    case 'mobile':
      return '▢';
    case 'web3':
      return '◇';
    default:
      return '·';
  }
}

export function categoryColors(category: string): { bg: string; text: string } {
  switch (category) {
    case 'language':
      return { bg: 'bg-forestSoft', text: 'text-forest' };
    case 'framework':
      return { bg: 'bg-terracottaSoft', text: 'text-terracotta' };
    case 'cloud':
      return { bg: 'bg-amberSoft', text: 'text-amber' };
    case 'data':
      return { bg: 'bg-forestSoft', text: 'text-forestDark' };
    case 'devops':
      return { bg: 'bg-sand', text: 'text-ink' };
    case 'ai':
      return { bg: 'bg-terracottaSoft', text: 'text-terracotta' };
    case 'mobile':
      return { bg: 'bg-amberSoft', text: 'text-amber' };
    case 'web3':
      return { bg: 'bg-sand', text: 'text-graphite' };
    default:
      return { bg: 'bg-sand', text: 'text-graphite' };
  }
}
