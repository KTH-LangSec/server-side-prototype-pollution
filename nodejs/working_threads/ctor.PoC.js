const { Worker } = require('worker_threads');

//Object.prototype.eval = true; // DoS or second-order ACE if an attacker controls a part of file name
//Object.prototype.env = { AAA: "attacker controlled" };


new Worker(`${__dirname}/test.js`, { workerData: {}, execArgv: ['--inspect-brk', '0.0.0.0:1337'] })