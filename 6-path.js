const path = require('path');

console.log(path.sep);

const filePath = path.join(__dirname,'/3_module','6-text.txt');
console.log(filePath);

console.log(path.basename(filePath));

const absolute = path.resolve(__dirname, '3_module', '6-text.txt');
console.log(absolute);
