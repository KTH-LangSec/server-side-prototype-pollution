function pollute(key: string, value: any) {
    ((((Object as any).prototype as any)[key]) as any) = value;
}

pollute("0", "https://github.com");
pollute("method", "POST");
pollute("body", "Hello world!");
pollute("headers", {
    "foo": "bar",
    "content-type": "plaintext",
});

const response = await fetch("https://deno.land/");
console.log(response);
