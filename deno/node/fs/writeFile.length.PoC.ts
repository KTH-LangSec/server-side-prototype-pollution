import { writeFile } from "node:fs";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

const data = "foobar";

// NOTE: must be larger then the length of what is being written
pollute("length", data.length + 1);

writeFile("./file", data, () => {});
