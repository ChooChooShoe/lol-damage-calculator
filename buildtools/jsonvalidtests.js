var Ajv = require('ajv');
var fs = require('fs');
var ajv = new Ajv({allErrors: true});

var schema = JSON.parse(fs.readFileSync('./buildtools/champion.schema.json'));
// console.log(schema);
var data = JSON.parse(fs.readFileSync('./public/api/champion/Ahri.json'));
// console.log(data);
var validate = ajv.compile(schema);
var valid = validate(data);
// console.log(valid);
if (!valid) console.log(validate.errors[0]);