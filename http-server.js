const http = require('http');

const server = http.createServer((req, res) => {
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

        // Sending response
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Request received and logged.');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
