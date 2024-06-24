import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

await load({ export: true });
console.log(Deno.env.get("foo"));
console.log(Deno.env.get("hello"));

pollute("hello", "world");

await load({ export: true });
console.log(Deno.env.get("foo"));
console.log(Deno.env.get("hello"));
