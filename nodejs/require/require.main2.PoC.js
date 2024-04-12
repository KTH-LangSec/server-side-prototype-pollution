// FIXED in v18.19.0 https://github.com/nodejs/node/commit/fe26f8a8609f7af04f9149f2c515f423e483018b

Object.prototype.main = 'C:/PROGRA~1/nodejs/node_modules/corepack/dist/npm.js'  // for Windows
//Object.prototype.main = "/usr/lib/node_modules/corepack/dist/npm.js"              // for Linux
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

require('./test_sub_folder')