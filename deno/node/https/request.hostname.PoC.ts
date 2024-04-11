import https from "node:https";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("hostname", "example.com");
pollute("port", "443");
pollute("method", "POST");
pollute("path", "/");

https.request(
    { host: "deno.land" },
    (res) => {
        res.setEncoding("utf8");
        res.on("data", console.log);
    },
).end();
