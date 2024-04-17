const { exec } = require('child_process');

Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

const spawnedProcess = exec('node -e "console.log(`NORMAL EXECUTION`)"', {env: {... process.env, AAA: "BBB" }});

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