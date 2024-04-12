import { spawn } from "node:child_process";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("gid", 42);

const process = spawn("id");
process.stdout.on("data", (data) => console.log(data.toString()));
