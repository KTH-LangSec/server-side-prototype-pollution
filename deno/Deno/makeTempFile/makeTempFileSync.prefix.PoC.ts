function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("prefix", "../");

// NOTE: providing dir only for illustrative purposes
const path = Deno.makeTempFileSync({ dir: "." });
console.log(path);
