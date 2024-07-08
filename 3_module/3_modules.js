const sayHi = require('./3_modules3');
const name = require('./3_modules2');

const alternate = require('./alternative');
console.log(alternate)
console.log(alternate.items[0]);
console.log(alternate.singlePerson.name);

console.log(name);


sayHi("Jasmeet");
sayHi(name.john);
sayHi(name.peter);

require('../4-mind-grenade');
