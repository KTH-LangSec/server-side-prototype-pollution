var esformatter = require('esformatter');

Object.prototype.plugins = '../../../../payload.js';

// return a string with the formatted code
var formattedCode = esformatter.format('var a=1;var b="";');
console.log(formattedCode);