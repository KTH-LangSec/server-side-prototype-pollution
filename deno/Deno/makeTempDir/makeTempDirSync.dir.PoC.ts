function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("dir", ".");

const path = Deno.makeTempDirSync();
console.log(path);
