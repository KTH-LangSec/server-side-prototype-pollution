import { createBrotliCompress } from "node:zlib";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("params", "any string");

createBrotliCompress();
