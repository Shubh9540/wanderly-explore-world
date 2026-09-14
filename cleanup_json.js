const fs = require('fs');

const filePath = 'g:\\\\wanderly-explore-world\\\\data\\\\templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

function traverse(obj) {
  for (let k in obj) {
    if (obj[k] && typeof obj[k] === 'object') {
      traverse(obj[k]);
    } else if (k.toLowerCase().includes('url') || k.toLowerCase().includes('link')) {
      if (k === 'videoUrl') continue; // skip videos
      if (obj[k] === '#' || obj[k] === '') {
        obj[k] = '/contact';
        console.log('Replaced link/url to /contact for key:', k, 'in object', obj.label || obj.title || obj.id || '');
      }
    }
  }
}

traverse(data);

// Also clean up any 'Sitemap' that isn't 'SitemapSection'
if (data.categories?.Wanderly?.sections?.Sitemap) {
  delete data.categories.Wanderly.sections.Sitemap;
  console.log('Deleted old Sitemap key');
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
