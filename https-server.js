const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
  console.log('Received request:');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);

  // Collecting request body data
  let body = [];
  req.on('data', chunk => {
      body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('Body:', body);
    console.log('==========================================================');

    // Check for 'auth' header
    const authHeader = req.headers['auth'];
    if (!authHeader) {
      res.writeHead(200);
      res.end('Hello world\n');
      return;
    }

    // Generate a simple secret related to the 'auth' value
    const secret = `secret-${authHeader}\n`;

    // Respond with the generated secret
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Your secret: ${secret}`);
  });
}).listen(443, () => console.log('Server running on https://localhost:443'));
