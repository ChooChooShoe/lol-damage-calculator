var Ajv = require('ajv');
var fs = require('fs');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

var schema = fs.readFileSync('./buildtools/champion.schema.json', {json: true}).toJSON();
// console.log(schema);
var data = fs.readFileSync('./public/api/champion/Ahri.json', {json: true}).toJSON();
// console.log(data);
var validate = ajv.compile(schema);
var valid = validate(data);
console.log(valid);
if (!valid) console.log(validate.errors);