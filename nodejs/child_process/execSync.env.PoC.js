const { spawn, spawnSync, exec, execSync } = require('child_process');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

const output = execSync('echo "NORMAL EXECUTION"');
console.log(output.toString());
