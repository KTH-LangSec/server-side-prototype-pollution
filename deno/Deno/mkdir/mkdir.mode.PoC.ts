function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

async function createAndLog(name: string) {
    // NOTE: the second argument (options) must not be undefined
    await Deno.mkdir(`./${name}`, {});

    const fileInfo = await Deno.stat(`./${name}`);
    console.log("mode:", fileInfo.mode);

    Deno.remove(`./${name}`);
}

await createAndLog("unpolluted");
pollute("mode", 0o000);
await createAndLog("polluted");
