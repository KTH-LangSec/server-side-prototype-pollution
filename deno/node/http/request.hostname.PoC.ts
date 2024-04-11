import http from "node:http";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("hostname", "example.com");
pollute("port", "80");
pollute("method", "POST");
pollute("path", "/");

http.request(
    { host: "deno.land" },
    (res) => {
        res.setEncoding("utf8");
        res.on("data", console.log);
    },
).end();
