const { fork } = require('child_process');

Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

const child = fork(`${__dirname}/test.js`, { env: { AAA: "BBB" }});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
