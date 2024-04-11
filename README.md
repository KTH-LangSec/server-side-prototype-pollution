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

## Deno
| Function                                                                             | Polluted Properties                  | Type                        | Notes                                 |
|--------------------------------------------------------------------------------------|--------------------------------------|-----------------------------|---------------------------------------|
| [fetch](/deno/fetch/fetch.PoC.ts)                                                    | `body`; `headers`; `method`; `0`     | Server Side Request Forgery | Limited by network permissions        |
| [Deno.makeTempDir](/deno/Deno/makeTempDir/makeTempDir.dir.PoC.ts)                    | `dir`                                | Path Traversal              | Limited by file system permissions    |
| [Deno.makeTempDir](/deno/Deno/makeTempDir/makeTempDir.prefix.PoC.ts)                 | `prefix`                             | Path Traversal              | Limited by file system permissions`*` |
| [Deno.makeTempDirSync](/deno/Deno/makeTempDir/makeTempDirSync.dir.PoC.ts)            | `dir`                                | Path Traversal              | Limited by file system permissions    |
| [Deno.makeTempDirSync](/deno/Deno/makeTempDir/makeTempDirSync.prefix.PoC.ts)         | `prefix`                             | Path Traversal              | Limited by file system permissions`*` |
| [Deno.makeTempFile](/deno/Deno/makeTempFile/makeTempFile.dir.PoC.ts)                 | `dir`                                | Path Traversal              | Limited by file system permissions    |
| [Deno.makeTempFile](/deno/Deno/makeTempFile/makeTempFile.prefix.PoC.ts)              | `prefix`                             | Path Traversal              | Limited by file system permissions`*` |
| [Deno.makeTempFileSync](/deno/Deno/makeTempFile/makeTempFileSync.dir.PoC.ts)         | `dir`                                | Path Traversal              | Limited by file system permissions    |
| [Deno.makeTempFileSync](/deno/Deno/makeTempFile/makeTempFileSync.prefix.PoC.ts)      | `prefix`                             | Path Traversal              | Limited by file system permissions`*` |
| [Deno.mkdir](/deno/Deno/mkdir/mkdir.mode.PoC.ts)                                     | `mode`                               | Privilege Escalation        | `options` must not be undefined       |
| [Deno.mkdirSync](/deno/Deno/mkdir/mkdirSync.mode.PoC.ts)                             | `mode`                               | Privilege Escalation        | `options` must not be undefined       |
| [Deno.open](/deno/Deno/open/open.append.PoC.ts)                                      | `append`                             | Unauthorized Modifications  |                                       |
| [Deno.open](/deno/Deno/open/open.mode.PoC.ts)                                        | `mode`                               | Privilege Escalation        |                                       |
| [Deno.open](/deno/Deno/open/open.truncate.PoC.ts)                                    | `truncate`                           | Unauthorized Modifications  |                                       |
| [Deno.openSync](/deno/Deno/open/open.append.PoC.ts)                                  | `append`                             | Unauthorized Modifications  |                                       |
| [Deno.openSync](/deno/Deno/open/open.mode.PoC.ts)                                    | `mode`                               | Privilege Escalation        |                                       |
| [Deno.openSync](/deno/Deno/open/open.truncate.PoC.ts)                                | `truncate`                           | Unauthorized Modifications  |                                       |
| [Deno.writeFile](/deno/Deno/writeFile/writeFile.append.PoC.ts)                       | `append`                             | Unauthorized Modifications  |                                       |
| [Deno.writeFile](/deno/Deno/writeFile/writeFile.mode.PoC.ts)                         | `mode`                               | Privilege Escalation        | Affects new and existing files        |
| [Deno.writeFileSync](/deno/Deno/writeFile/writeFileSync.append.PoC.ts)               | `append`                             | Unauthorized Modifications  |                                       |
| [Deno.writeFileSync](/deno/Deno/writeFile/writeFileSync.mode.PoC.ts)                 | `mode`                               | Privilege Escalation        | Affects new and existing files        |
| [Deno.writeTextFile](/deno/Deno/writeTextFile/writeTextFile.append.PoC.ts)           | `append`                             | Unauthorized Modifications  |                                       |
| [Deno.writeTextFile](/deno/Deno/writeTextFile/writeTextFile.mode.PoC.ts)             | `mode`                               | Privilege Escalation        | Affects new and existing files        |
| [Deno.writeTextFileSync](/deno/Deno/writeTextFile/writeTextFileSync.append.PoC.ts)   | `append`                             | Unauthorized Modifications  |                                       |
| [Deno.writeTextFileSync](/deno/Deno/writeTextFile/writeTextFileSync.mode.PoC.ts)     | `mode`                               | Privilege Escalation        | Affects new and existing files        |
| [Deno.run](/deno/Deno/run/run.cwd.PoC.ts)                                            | `cwd`                                | Path Traversal              |                                       |
| [Deno.run](/deno/Deno/run/run.uid.PoC.ts)                                            | `uid`                                | Privilege Escalation        | unstable option                       |
| [Deno.run](/deno/Deno/run/run.gid.PoC.ts)                                            | `gid`                                | Privilege Escalation        | unstable option                       |
| [Deno.Command](/deno/Deno/Command/Command.cwd.PoC.ts)                                | `cwd`                                | Path Traversal              |                                       |
| [Deno.Command](/deno/Deno/Command/Command.uid.PoC.ts)                                | `uid`                                | Privilege Escalation        |                                       |
| [Deno.Command](/deno/Deno/Command/Command.gid.PoC.ts)                                | `gid`                                | Privilege Escalation        |                                       |
| [node:child_process.spawn](/deno/node/child_process/spawn.uid.PoC.ts)                | `uid`                                | Privilege Escalation        |                                       |
| [node:child_process.spawn](/deno/node/child_process/spawn.gid.PoC.ts)                | `gid`                                | Privilege Escalation        |                                       |
| [node:child_process.spawn](/deno/node/child_process/spawn.env.PoC.ts)                | `shell`; `env`                       | Arbitrary Code Execution    | Limited by run permissions            |
| [node:child_process.spawnSync](/deno/node/child_process/spawnSync.env.PoC.ts)        | `shell`; `env`                       | Arbitrary Code Execution    | Limited by run permissions            |
| [node:child_process.exec](/deno/node/child_process/exec.env.PoC.ts)                  | `shell`; `env`                       | Arbitrary Code Execution    | Limited by run permissions            |
| [node:child_process.execSync](/deno/node/child_process/execSync.env.PoC.ts)          | `shell`; `env`                       | Arbitrary Code Execution    | Limited by run permissions            |
| [node:child_process.execFileSync](/deno/node/child_process/execFileSync.env.PoC.ts)  | `shell`; `env`                       | Arbitrary Code Execution    | Limited by run permissions            |
| [node:fs.appendFile](/deno/node/fs/appendFile.length.PoC.ts)                         | `length`                             | Hanging                     | Can't be prevented (not an option)    |
| [node:fs.appendFile](/deno/node/fs/appendFile.offset.PoC.ts)                         | `offset`                             | Out of Memory               | Can't be prevented (not an option)    |
| [node:fs.writeFile](/deno/node/fs/writeFile.length.PoC.ts)                           | `length`                             | Hanging                     | Can't be prevented (not an option)    |
| [node:fs.writeFile](/deno/node/fs/writeFile.offset.PoC.ts)                           | `offset`                             | Out of Memory               | Can't be prevented (not an option)    |
| [node:http.request](/deno/node/http/request.hostname.PoC.ts)                         | `hostname`; `method`; `path`; `port` | Server Side Request Forgery | Limited by network permissions        |
| [node:https.request](/deno/node/https/request.hostname.PoC.ts)                       | `hostname`; `method`; `path`; `port` | Server Side Request Forgery | Limited by network permissions        |
| [node:zlib.createBrotliCompress](/deno/node/zlib/createBrotliCompress.params.PoC.ts) | `params`                             | Panic                       |                                       |
| [json.JsonStringifyStream](/deno/std/json/JsonStringifyStream.prefix.PoC.ts)         | `prefix`                             | Unauthorized Modifications  |                                       |
| [json.JsonStringifyStream](/deno/std/json/JsonStringifyStream.suffix.PoC.ts)         | `suffix`                             | Unauthorized Modifications  |                                       |
| [log.FileHandler](/deno/std/log/FileHandler.formatter.PoC.ts)                        | `formatter`                          | Log Pollution               |                                       |
| [dotenv.load](/deno/std/dotenv/load.defaultsPath.PoC.ts)                             | `defaultsPath`                       | Env injection               |                                       |
| [dotenv.load](/deno/std/dotenv/load.envPath.PoC.ts)                                  | `envPath`                            | Env injection               |                                       |
| [dotenv.load](/deno/std/dotenv/load.export.PoC.ts)                                   | `export`                             | Env injection               |                                       |
| [dotenv.loadSync](/deno/std/dotenv/loadSync.defaultsPath.PoC.ts)                     | `envPath`                            | Env injection               |                                       |
| [dotenv.loadSync](/deno/std/dotenv/loadSync.envPath.PoC.ts)                          | `defaultsPath`                       | Env injection               |                                       |
| [dotenv.loadSync](/deno/std/dotenv/loadSync.export.PoC.ts)                           | `export`                             | Env injection               |                                       |
| [tar.Tar.append](/deno/std/tar/Tar.uid.PoC.ts)                                       | `uid`                                | Privilege Escalation        |                                       |
| [tar.Tar.append](/deno/std/tar/Tar.gid.PoC.ts)                                       | `gid`                                | Privilege Escalation        |                                       |
| [yaml.stringify](/deno/std/yaml/stringify.indent.PoC.ts)                             | `indent`                             | Out of Memory               |                                       |

`*`: This was not the case prior to Deno v1.41.1, see `CVE-2024-27931`.

## NPM Packages
TBU
