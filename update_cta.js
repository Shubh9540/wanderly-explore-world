const fs = require('fs');

const filePath = 'g:\\\\wanderly-explore-world\\\\data\\\\templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

function traverse(obj) {
  for (let k in obj) {
    if (obj[k] && typeof obj[k] === 'object') {
      traverse(obj[k]);
    } else if (k === 'buttonText' && obj[k] === 'Plan Your Trip' && obj['phone'] === 'Contact Us') {
      // This is the CTA object
      obj.buttonLink = '/tour-packages';
      obj.phoneLink = '/contact';
      console.log('Updated CTA links.');
    }
  }
}

traverse(data);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
