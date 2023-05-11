# Server-Side Prototype Pollution
This repository contains a collection of Server-Side Prototype Pollution gadgets in Node.js core code and 3rd party NPM packages.

## Node.js
| Function    | OS          | Polluted Properties | Fixed?    | Notes               |
|-------------|-------------|---------------------|-----------|---------------------|
| execSync    | Cros-Platf. | shell; NODE_OPTIONS | Partially | Connect by shell.js |
| execSync    | Linux       | shell; env          | Yes       |  |
| execSync    | Windows     | shell; input        | Yes       |  |
| spawnSync   | Cros-Platf. | shell; NODE_OPTIONS | Partially | Connect by shell.js |
| spawnSync   | Linux       | shell; env          | Yes       |  |
| spawnSync   | Windows     | shell; input        | Yes       |  |
| spawn       | Cros-Platf. | shell; NODE_OPTIONS | Partially | Connect by shell.js |
| require     | Cros-Platf. | main; NODE_OPTIONS  | Yes       | Requires the absence of `main` property in `package.json` of the loaded package |
| require     | Cros-Platf. | main; NODE_OPTIONS  | No        | Requires the absence of `package.json` in the directory from the argument |
| import      | Cros-Platf. | source              | No        | |

## NPM Packages
TBU
