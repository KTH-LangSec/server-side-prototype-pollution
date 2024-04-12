function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("cwd", "/");
const process = new Deno.Command("ls");
process.spawn();
