function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("uid", 42);
const process = Deno.run({ cmd: ["id"] });
console.log(process);
