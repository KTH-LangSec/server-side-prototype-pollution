import * as log from "https://deno.land/std@0.213.0/log/mod.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("formatter", "Hello world!");

const fileHandler = new log.FileHandler("DEBUG", { filename: "./example.log" });
fileHandler.setup();
fileHandler.handle(
    new log.LogRecord({
        msg: "foobar",
        args: [],
        level: log.LogLevels.DEBUG,
    }),
);
