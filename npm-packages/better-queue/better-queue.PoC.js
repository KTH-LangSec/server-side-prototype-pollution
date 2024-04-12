var Queue = require('better-queue');

// see npm-packages\node_modules\better-queue-payload.js
Object.prototype.store = 'payload'

var q = new Queue(function (input, cb) {
  // Some processing here ...
  cb(null, result);
})

q.push(1)
q.push({ x: 1 })