const fs = require('fs');

const now = new Date();
const dateString = now.toISOString();

const content = `\nLast updated: ${dateString}\n`;

fs.appendFileSync('README.md', content);

console.log(`Updated README.md at ${dateString}`);
