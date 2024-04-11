function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const orgData = new TextEncoder().encode("Hello  world!");
const newData = new TextEncoder().encode("foobar");

async function create(name) {
    const file = await Deno.open(`./${name}`, { create: true, write: true });
    await file.write(orgData);
    file.close();
}

async function writeThenRead(name) {
    const wfile = await Deno.open(`./${name}`, { write: true });
    await wfile.write(newData);
    wfile.close();

    const rfile = await Deno.open(`./${name}`, { read: true, truncate: false });
    const buffer = new Uint8Array(16);
    const count = await rfile.read(buffer);
    const text = new TextDecoder().decode(buffer);
    console.log(name, "contains", text, `(${count} bytes)`);
    rfile.close();

    Deno.remove(`./${name}`);
}

await create("unpolluted");
await create("polluted");

await writeThenRead("unpolluted");
pollute("truncate", true);
await writeThenRead("polluted");
