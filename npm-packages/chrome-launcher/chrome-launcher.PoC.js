const ChromeLauncher = require('chrome-launcher');

Object.prototype.shell = 'node';
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

ChromeLauncher.launch({
  startingUrl: 'https://google.com'
}).then(chrome => {
  console.log(`Chrome debugging port running on ${chrome.port}`);
});