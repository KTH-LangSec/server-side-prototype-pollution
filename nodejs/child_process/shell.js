// see https://chromedevtools.github.io/devtools-protocol/tot/Debugger
const InspectorClient = require('node-inspect/lib/internal/inspect_client.js');
const readline = require('readline');

const targetIP = '127.0.0.1';
const targetPort = 1337;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  try {
    const client = new InspectorClient();
    await client.connect(targetPort, targetIP);

    process.stdout.write("INIT\n");
    await client.callMethod("Debugger.enable");
    await client.callMethod("Runtime.enable");

    await client.addListener('Debugger.paused', async (p) =>{
        process.stdout.write("paused\n\n");

        rl.setPrompt('> ');
        rl.prompt();

        rl.on('line', async function(cmd) {
          let output = await client.callMethod("Runtime.evaluate", {
            expression: `require('child_process').execSync('${cmd.trim()}').toString()`,
            includeCommandLineAPI: true
          });

          console.log(output.result.value);

          rl.prompt();
        }).on('close', function() {
            console.log('Have a great day!');
            process.exit(0);
        });

        //await client.callMethod("Debugger.resume");
    });

    await client.addListener('Debugger.resumed', (p) =>{
        process.stdout.write("resumed\n");
    });

    await client.callMethod("Runtime.evaluate", {
        expression: "process.on('exit', (code) => {debugger;console.log('EVAL');})",
        includeCommandLineAPI: false
    });

    await client.callMethod("Runtime.runIfWaitingForDebugger");
    process.stdout.write("RUN\n");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
