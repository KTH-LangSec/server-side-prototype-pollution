// PARTIALLY FIXED

const { spawn, spawnSync, exec, execSync, execFile, execFileSync } = require('child_process');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

const cp = spawnSync('hostname', {env: {AAA: "BBB"}});
console.log(cp.output.toString());

