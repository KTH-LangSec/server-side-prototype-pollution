var forever = require('forever-monitor');

Object.prototype.command = 'calc' // command can contain arguments that should be merged with options.args

// this code sample from README
var child = new (forever.Monitor)('your-filename.js', {
  max: 3,
  silent: true,
  args: []
});

child.on('exit', function () {
  console.log('your-filename.js has exited after 3 restarts');
});

child.start();