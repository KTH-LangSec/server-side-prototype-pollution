function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const data = new TextEncoder().encode("foobar");

async function create(name) {
    const file = await Deno.open(`./${name}`, { create: true, write: true });
    await file.write(data);
    file.close();
}

async function writeThenRead(name) {
    await Deno.writeFile(`./${name}`, data);

    const fileInfo = await Deno.stat(`./${name}`);
    console.log(name, "mode:", fileInfo.mode);

    Deno.remove(`./${name}`);
}

await create("unpolluted-exists");
await create("polluted-exists");

await writeThenRead("unpolluted-new");
await writeThenRead("unpolluted-exists");
pollute("mode", 0o777);
await writeThenRead("polluted-new");
await writeThenRead("polluted-exists");
