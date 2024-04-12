const jsdoc2md = require('jsdoc-to-markdown');

Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';
Object.prototype.source = "any";    // to bypass caching

jsdoc2md.render({ files: './jsdoc-test.js' }).then(console.log) // for `spawn` sink
