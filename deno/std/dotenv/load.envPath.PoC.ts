import { load } from "https://deno.land/std@0.216.0/dotenv/mod.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const unpolluted = await load();
console.log(unpolluted);

pollute("envPath", "./.env.other");

const polluted = await load();
console.log(polluted);
