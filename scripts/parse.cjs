const fs = require('fs');

const raw = fs.readFileSync('README.md', 'utf-8');
const lines = raw.split(/\r?\n/);

let currentCat = '';
const categories = [];
const tutorials = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.startsWith('####')) {
    // e.g. #### Build your own `Distributed Systems`
    // or #### Uncategorized
    let cat = line.replace(/^#+\s*/, '').trim();
    cat = cat.replace(/^Build your own\s*/i, '').trim();
    cat = cat.replace(/^`+|`+$/g, '').trim();
    currentCat = cat;
    if (cat && !categories.includes(cat)) {
      categories.push(cat);
    }
    continue;
  }

  // Tutorial line: * [**Lang**: _Title_](url) [extra]
  // or * [**(any)**: _Title_](url)
  // or * [**Lang**: Title](url)
  if (line.startsWith('*') && currentCat) {
    const m = line.match(/^\*\s*\[\*\*([^*]+)\*\*:\s*(?:_|\*)*(.*?)(?:_|\*)*\]\((https?:\/\/[^\s\)]+)\)(.*)/);
    if (m) {
      const rawLang = m[1].trim();
      let title = m[2].trim().replace(/^[_*]+|[_*]+$/g, '');
      const url = m[3].trim();
      const extra = m[4].trim();

      // languages list
      const langs = rawLang
        .replace(/^\(|\)$/g, '')
        .split('/')
        .map(l => l.trim())
        .filter(Boolean);

      let format = 'Article';
      if (/video|youtube|vimeo/i.test(extra) || /youtube\.com|youtu\.be/i.test(url)) {
        format = 'Video';
      } else if (/pdf/i.test(extra) || /\.pdf$/i.test(url)) {
        format = 'PDF / Book';
      } else if (/github\.com/i.test(url) && !url.includes('.html')) {
        format = 'Repository';
      } else if (/interactive|course|walkthrough/i.test(title)) {
        format = 'Interactive';
      }

      tutorials.push({
        id: `tut-${tutorials.length + 1}`,
        category: currentCat,
        rawLanguage: rawLang,
        languages: langs,
        title: title || rawLang,
        url: url,
        format: format,
        extra: extra.replace(/^\[|\]$/g, '').trim()
      });
    }
  }
}

console.log('Categories (' + categories.length + '):', categories);
console.log('Total tutorials:', tutorials.length);

fs.writeFileSync('tutorials_parsed.json', JSON.stringify({ categories, tutorials }, null, 2));
