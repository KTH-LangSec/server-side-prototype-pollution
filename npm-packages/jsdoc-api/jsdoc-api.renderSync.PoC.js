const jsdoc = require('jsdoc-api')

Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

jsdoc.renderSync({ source: '/** example doclet */ \n var example = true' })  // `spawnSync` sink