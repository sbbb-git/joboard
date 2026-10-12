import type { ReactNode } from 'react';

// Renders a guide body. Bodies are stored as a small Markdown subset:
// "## " headings, "- " bullets, "1. " numbered items, pipe tables and plain
// paragraph lines. They used to be dumped as raw text in a pre-line div, so
// every page showed literal "## " markers and ASCII tables, and the 99 guide
// pages carried 594 headings with not one real <h2> for search engines to
// read. Output is plain React elements (no HTML injection); bodies contain no
// inline markup, so text is rendered as-is.

type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'ul' | 'ol'; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'p'; lines: string[] };

const cells = (line: string) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());

// The |---|---| row under a table header.
const isSeparator = (line: string) => /^[\s|:-]+$/.test(line) && line.includes('-');

export function parseGuideBody(body: string): Block[] {
  const blocks: Block[] = [];
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trimEnd();
    if (!line.trim()) {
      i++;
      continue;
    }
    if (/^#{2,6} /.test(line)) {
      blocks.push({ kind: 'h2', text: line.replace(/^#{2,6} /, '').trim() });
      i++;
      continue;
    }
    if (/^- /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i])) items.push(lines[i++].replace(/^- /, '').trim());
      blocks.push({ kind: 'ul', items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) items.push(lines[i++].replace(/^\d+\. /, '').trim());
      blocks.push({ kind: 'ol', items });
      continue;
    }
    if (/^\|/.test(line.trim())) {
      const rows: string[][] = [];
      while (i < lines.length && /^\|/.test(lines[i].trim())) {
        if (!isSeparator(lines[i])) rows.push(cells(lines[i]));
        i++;
      }
      const [head = [], ...rest] = rows;
      blocks.push({ kind: 'table', head, rows: rest });
      continue;
    }
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,6} |- |\d+\. |\|)/.test(lines[i].trim())
    ) {
      para.push(lines[i++].trim());
    }
    blocks.push({ kind: 'p', lines: para });
  }
  return blocks;
}

// Stable anchor ids, so headings can be linked to directly.
function slug(text: string, seen: Map<string, number>): string {
  const base =
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section';
  const n = seen.get(base) ?? 0;
  seen.set(base, n + 1);
  return n ? `${base}-${n + 1}` : base;
}

export function GuideBody({ body }: { body: string }) {
  const seen = new Map<string, number>();
  return (
    <div className="prose-body">
      {parseGuideBody(body).map((b, idx): ReactNode => {
        switch (b.kind) {
          case 'h2':
            return (
              <h2 key={idx} id={slug(b.text, seen)}>
                {b.text}
              </h2>
            );
          case 'ul':
            return (
              <ul key={idx}>
                {b.items.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={idx}>
                {b.items.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ol>
            );
          case 'table':
            return (
              <div key={idx} className="overflow-x-auto my-4">
                <table>
                  {b.head.length > 0 && (
                    <thead>
                      <tr>
                        {b.head.map((c, j) => (
                          <th key={j} scope="col">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return (
              <p key={idx}>
                {b.lines.map((l, j) => (
                  <span key={j}>
                    {j > 0 && <br />}
                    {l}
                  </span>
                ))}
              </p>
            );
        }
      })}
    </div>
  );
}
