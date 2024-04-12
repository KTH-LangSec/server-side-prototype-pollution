const { install } = require('mrm-core');

Object.prototype.shell = 'node'
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

install('eslint');