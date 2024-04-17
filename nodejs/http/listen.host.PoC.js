const http = require('http');

//Object.prototype.host = "example.com";  // DoS (via an exception) or sending DNS request
Object.prototype.backlog = "fdsfsd";      // DoS by native uncached exception

try {
  const server = http.createServer(() => {
    console.log("HEJ!")
  });

  server.listen(1234, () => {
    console.log("HELLO!")
  });
} catch (e) {
  console.log(e)
}