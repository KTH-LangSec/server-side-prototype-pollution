const tls = require('tls');

//Object.prototype.session = 1  // DoS
Object.prototype.port = 3000;
Object.prototype.path = '/test';
//Object.prototype.rejectUnauthorized = false;

tls.connect({
  //port: 3000,
  //path: '/test',
  host: '127.0.0.1',
  //ALPNProtocols: ['h2'],
}).on('error', (e) => console.log(e));
