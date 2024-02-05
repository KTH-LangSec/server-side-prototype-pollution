const http = require('http');

// G1
//Object.prototype.agent = "aaa" // DoS

// G2
Object.prototype.method = "POST";
Object.prototype.port = 3000;
Object.prototype.headers = {test: 123, host: 'fake'};
Object.prototype.path = '/test-path'
//Object.prototype.hostname = "example.com" // send requist to this address and ignore host

http.get({
  host: 'localhost',
  //port: 3000,
});
  