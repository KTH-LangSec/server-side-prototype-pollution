function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const data = "foobar";

async function create(name) {
    const file = await Deno.open(`./${name}`, { create: true, write: true });
    await file.write(new TextEncoder().encode(data));
    file.close();
}

async function writeThenRead(name) {
    await Deno.writeTextFile(`./${name}`, data);

    const file = await Deno.open(`./${name}`, { read: true, append: false });
    const buffer = new Uint8Array(16);
    const count = await file.read(buffer);
    const text = new TextDecoder().decode(buffer);
    console.log(name, "contains", text, `(${count} bytes)`);
    file.close();

    Deno.remove(`./${name}`);
}

await create("unpolluted");
await create("polluted");

await writeThenRead("unpolluted");
pollute("append", true);
await writeThenRead("polluted");
