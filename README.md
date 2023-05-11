# Server-Side Prototype Pollution
This repository contains a collection of Server-Side Prototype Pollution gadgets in Node.js core code and 3rd party NPM packages.

## Node.js
| Function    | OS          | Polluted Properties | Fixed?    | Notes               |
|-------------|-------------|---------------------|-----------|---------------------|
| [execSync](/nodejs/child_process/execSync.env.PoC.js)         | Cros-Platf. | shell; NODE_OPTIONS | Partially | Connect by shell.js |
| [execSync](/nodejs/child_process/execSync.env.lnx.PoC.js)     | Linux       | shell; env          | Yes       |  |
| [execSync](/nodejs/child_process/execSync.input.win.PoC.js)   | Windows     | shell; input        | Yes       |  |
| [spawnSync](/nodejs/child_process/spawnSync.env.PoC.js)       | Cros-Platf. | shell; NODE_OPTIONS | Partially | Connect by shell.js |
| [spawnSync](/nodejs/child_process/spawnSync.env.lnx.PoC.js)   | Linux       | shell; env          | Yes       |  |
| [spawnSync](/nodejs/child_process/spawnSync.input.win.PoC.js) | Windows     | shell; input        | Yes       |  |
| [spawn](/nodejs/child_process/spawn.env.PoC.js)               | Cros-Platf. | shell; NODE_OPTIONS | Partially | Connect by shell.js |
| [require](/nodejs/require/require.main.PoC.js)                | Cros-Platf. | main; NODE_OPTIONS  | Yes       | Requires the absence of `main` property in `package.json` of the loaded package |
| [require](/nodejs/require/require.main2.PoC.js)               | Cros-Platf. | main; NODE_OPTIONS  | No        | Requires the absence of `package.json` in the directory from the argument |
| [import](/nodejs/import/import.source.PoC.js)                 | Cros-Platf. | source              | No        | |

## NPM Packages
TBU
