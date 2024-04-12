import { appendFile } from "node:fs";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

// NOTE: must be large to consume a lot of memory
pollute("offset", 0xFFFFFFFF);

appendFile("./file", "foobar", () => { });
