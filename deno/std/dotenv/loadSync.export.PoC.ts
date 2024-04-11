import { loadSync } from "https://deno.land/std@0.216.0/dotenv/mod.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

loadSync();
console.log(Deno.env.get("foo"));

pollute("export", true);

loadSync();
console.log(Deno.env.get("foo"));
