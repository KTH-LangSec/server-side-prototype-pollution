var ffmpeg = require('fluent-ffmpeg');

Object.prototype.presets = '../../../../../';   // or .preset

ffmpeg('/path/to/file.avi').preset('divx');