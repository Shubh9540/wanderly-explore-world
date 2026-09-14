const fs = require('fs');

const filePath = 'g:\\\\wanderly-explore-world\\\\data\\\\templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

if (data.common?.Footer?.middleSection?.exploreLinks) {
  const exploreLinks = data.common.Footer.middleSection.exploreLinks;
  const pricingIndex = exploreLinks.findIndex(link => link.id === 'ex-4' && link.label === 'Pricing');
  
  if (pricingIndex !== -1) {
    exploreLinks[pricingIndex].label = 'Tour Packages';
    exploreLinks[pricingIndex].url = '/tour-packages';
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
