const fs = require('fs');

const filePath = 'g:\\\\wanderly-explore-world\\\\data\\\\templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

if (data.categories.Wanderly.sections.Sitemap) {
  data.categories.Wanderly.sections.SitemapSection = data.categories.Wanderly.sections.Sitemap;
  delete data.categories.Wanderly.sections.Sitemap;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
