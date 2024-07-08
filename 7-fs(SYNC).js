const fs = require('fs')
const first=fs.readFileSync('./3_module/6-text.txt','utf8');
const second = fs.readFileSync('./3_module/text.txt', 'utf8');

console.log(first, second);

fs.writeFileSync('./3_module/newFile.txt', `Here is the result.\n First: ${first}\n Second: ${second}`/*, {
    flag :'a'
}*/);

const newFile = fs.readFileSync('./3_module/newFile.txt', 'utf8');
console.log(newFile);

