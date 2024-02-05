// https://nodejs.org/api/wasi.html#new-wasioptions

// `preopens` {Object} This object represents the WebAssembly application's
//     sandbox directory structure. The string keys of `preopens` are treated as
//     directories within the sandbox. The corresponding values in `preopens` are
//     the real paths to those directories on the host machine.

'use strict';
const { readFile } = require('node:fs/promises');
const { WASI } = require('wasi');
const { argv, env } = require('node:process');
const { join } = require('node:path');

const wasi = new WASI({
  version: 'preview1',
  args: argv,
  env,
  preopens: {
    '/sandbox': '/some/real/path/that/wasm/can/access',
  },
});

(async () => {
  const wasm = await WebAssembly.compile(
    await readFile(join(__dirname, 'demo.wasm')),
  );
  const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

  wasi.start(instance);
})();
