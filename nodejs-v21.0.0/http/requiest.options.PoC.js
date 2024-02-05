const http = require('http');

Object.prototype.method = "POST";
Object.prototype.port = 3000;
Object.prototype.headers = {test: 123, host: 'fake'};
Object.prototype.path = '/test'
//Object.prototype.hostname = "example.com" // send requist to this address and ignore host

const req = http.request({
  host: 'localhost',
  //port: 3000,
});

req.end();
  