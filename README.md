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
| Package    | Function                                                        | Version | Type     |
|------------|-----------------------------------------------------------------|---------|----------|
| asyncawait | [<require>](/npm-packages/asyncawait/asyncawait.PoC.js) | 3.0.0   | ACI |
| better-queue | [push](/npm-packages/better-queue/better-queue.PoC.js) | 3.8.12 | LFI* |
| binary-parser | [parse](/npm-packages/binary-parser/binary-parser.PoC.js) | 2.2.1 | ACE |
| chrome-launcher | [launch](/npm-packages/chrome-launcher/chrome-launcher.PoC.js) | 0.15.2 | ACI |
| coffee | [fork](/npm-packages/coffee/coffee.fork.PoC.js) | 5.5.0 | ACI |
| coffee | [spawn](/npm-packages/coffee/coffee.spawn.PoC.js) | 5.5.0 | ACI |
| consolidate | [jazz](/npm-packages/consolidate/jazz.PoC.js) | 0.16.0 |          |
| consolidate | [underscore](/npm-packages/consolidate/underscore.PoC.js) | 0.16.0 |          |
| crawler | [queue](/npm-packages/crawler/crawler.PoC.js) | 1.4.0 |          |
| cross-port-killer | [kill](/npm-packages/cross-port-killer/cross-port-killer.PoC.js) | 1.4.0 | ACI |
| cross-spawn | [spawn](/npm-packages/cross-spawn/cross-spawn.spawn.PoC.js) | 7.0.3 | ACI |
| cross-spawn | [spawn.sync](/npm-packages/cross-spawn/cross-spawn.spawn.sync.PoC.js) | 7.0.3 | ACI |
| csv-write-stream | [end](/npm-packages/csv-write-stream/csv-write-stream.PoC.js) | 2.0.0 | ACE |
| dockerfile_lint | [DockerFileValidator](/npm-packages/dockerfile_lint/dockerfile_lint.PoC.js) | 0.3.4 | ACE |
| dot | [process](/npm-packages/dot/dot.PoC.js) | 1.1.3 |          |
| download-git-repo | [download-git-repo](/npm-packages/download-git-repo/download-git-repo.PoC.js) | 3.0.2 | ACI |
| dtrace-provider | [<require>](/npm-packages/dtrace-provider/dtrace-provider.PoC.js) | 0.8.5 | LFI* |
| esformatter | [format](/npm-packages/esformatter/esformatter.PoC.js) | 0.11.3 | LFI |
| exec | [exec](/npm-packages/exec/exec.PoC.js) | 0.2.1 | ACI |
| external-editor | [edit](/npm-packages/external-editor/external-editor.edit.PoC.js) | 3.1.0 | ACI |
| external-editor | [editAsync](/npm-packages/external-editor/external-editor.edit.PoC.js) | 3.1.0 | ACI |
| fibers | [<require>](/npm-packages/fibers/fibers.PoC.js) | 5.0.3 | ACI |
| find-process | [find-process](/npm-packages/find-process/find-process.PoC.js) | 1.4.7 | ACI* |
| fluent-ffmpeg | [preset](/npm-packages/fluent-ffmpeg/fluent-ffmpeg.PoC.js) | 2.1.2 | LFI* |
| forever-monitor | [start](/npm-packages/forever-monitor/forever-monitor.PoC.js) | 3.0.3 | ACI |
| gh-pages | [publish](/npm-packages/gh-pages/gh-pages.PoC.js) | 5.0.0 | ACI |
| gift | [clone](/npm-packages/gift/gift.clone.PoC.js) | 0.10.2 | ACI |
| git-clone | [git-clone](/npm-packages/git-clone/git-clone.PoC.js) | 0.2.0 |          |
| gm | [gm](/npm-packages/gm/gm.PoC.js) | 1.25.0 | ACI |
| growl | [growl](/npm-packages/growl/growl.PoC.js) | 1.10.5 | ACI |
| hbsfy | [configure](/npm-packages/hbsfy/hbsfy.configure.PoC.js) | 2.8.1 | LFI |
| hbsfy | [compile](/npm-packages/hbsfy/hbsfy.configure.PoC.js) | 2.8.1 | LFI |
| jsdoc-api | [explain](/npm-packages/jsdoc-api/jsdoc-api.explain.PoC.js) | 8.0.0 | ACI |
| jsdoc-api | [explainSync](/npm-packages/jsdoc-api/jsdoc-api.explainSync.PoC.js) | 8.0.0 | ACI |
| jsdoc-api | [renderSync](/npm-packages/jsdoc-api/jsdoc-api.renderSync.PoC.js) | 8.0.0 | ACI |
| jsdoc-to-markdown | [render](/npm-packages/jsdoc-to-markdown/jsdoc-to-markdown.render.PoC.js) | 8.0.0 | ACI |
| jsdoc-to-markdown | [renderSync](/npm-packages/jsdoc-to-markdown/jsdoc-to-markdown.renderSync.PoC.js) | 8.0.0 | ACI |
| koa-views | [koa-views](/npm-packages/koa-views/koa-views.PoC.js) | 8.0.0 |          |
| liftoff | [prepare](/npm-packages/liftoff/liftoff.PoC.js) | 4.0.0 | ACI |
| mrm-core | [install](/npm-packages/mrm-core/mrm-core.PoC.js) | 7.1.14 | ACI |
| ping | [sys.probe](/npm-packages/ping/ping.PoC.js) | 0.4.4 | ACI |
| play-sound | [play-sound](/npm-packages/play-sound/play-sound.ctor.PoC.js) | 1.1.5 | ACI |
| play-sound | [play](/npm-packages/play-sound/play-sound.play.PoC.js) | 1.1.5 | ACI |
| primus | [parser](/npm-packages/primus/primus.parser.PoC.js) | 8.0.7 | LFI |
| primus | [transformer](/npm-packages/primus/primus.transformer.PoC.js) | 8.0.7 | LFI |
| python-shell | [runString](/npm-packages/python-shell/python-shell.PoC.js) | 5.0.0 | ACI |
| require-from-string | [require-from-string](/npm-packages/require-from-string/require-from-string.PoC.js) | 2.0.2 | LFI* |
| requireg | [resolve](/npm-packages/requireg/requireg.PoC.js) | 0.2.2 | ACI |
| sonarqube-scanner | [sonarqube-scanner](/npm-packages/sonarqube-scanner/sonarqube-scanner.PoC.js) | 3.0.1 | ACI |
| teen_process | [start](/npm-packages/teen_process/teen_process.PoC.js) | 2.0.4 | ACI |
| the-script-jsdoc | [the-script-jsdoc](/npm-packages/the-script-jsdoc/the-script-jsdoc.PoC.js) | 2.0.4 | ACI |
| tingodb | [findOne](/npm-packages/tingodb/tingodb.PoC.js) | 0.6.1 | ACE |
| window-size | [tput](/npm-packages/window-size/window-size.PoC.js) | 1.1.1 | ACI |
| winreg | [values](/npm-packages/winreg/winreg.PoC.js) | 1.2.4 | ACI |
| workerpool | [exec](/npm-packages/workerpool/workerpool.PoC.js) | 6.4.0 | ACI |
