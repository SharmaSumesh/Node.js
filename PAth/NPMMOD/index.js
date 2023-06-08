const  chalk  =  require('chalk');

console.log(chalk.underline('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
console.log(chalk.blue.bgRed.italic('Hello wewewesumesh'));
var validator = require('validator');

console.log(validator.isEmail('Sharma@gmail.com')); //=> true