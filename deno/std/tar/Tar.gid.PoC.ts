import { Tar } from "https://deno.land/std@0.204.0/archive/tar.ts";
import { Untar } from "https://deno.land/std@0.204.0/archive/untar.ts";
import { Buffer } from "https://deno.land/std@0.204.0/io/mod.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const content = new TextEncoder().encode("Hello world!");

pollute("gid", 42);

const tar = new Tar();
await tar.append("output.txt", {
    reader: new Buffer(content),
    contentSize: content.byteLength,
});
const untar = new Untar(tar.getReader());
const result = await untar.extract();
console.log("gid is", result.gid);
