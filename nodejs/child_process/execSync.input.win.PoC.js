// FIXED !!!

const { exec, execSync } = require('child_process');

Object.prototype.shell = 'cmd.exe.';
Object.prototype.input = 'echo PWNED\n';

// execSync copies the options by secure way now
const output = execSync('echo "NORMAL EXECUTION"');
console.log(output.toString());
