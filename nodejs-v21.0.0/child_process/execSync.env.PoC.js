// PARTIALLY FIXED

const { spawn, spawnSync, exec, execSync } = require('child_process');

Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

const output = execSync('node -e "console.log(`NORMAL EXECUTION`)"', { env: {AAA: "BBB"} });
console.log(output.toString());
