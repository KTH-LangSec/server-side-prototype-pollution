function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("cwd", "/");
const process = Deno.run({ cmd: ["ls"] });
console.log(process);
