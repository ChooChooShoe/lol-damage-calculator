var Ajv = require('ajv');
var fs = require('fs');
var ajv = new Ajv({ allErrors: true });

var schema = JSON.parse(fs.readFileSync('./buildtools/champion.schema.json'));
// console.log(schema);
// console.log(data);
var validate = ajv.compile(schema);

const dir = './public/api/champion/'
let files = fs.readdirSync(dir);
let validCount = 0;
let errorCount = 0;
for (const file of files) {
    var data = JSON.parse(fs.readFileSync(dir + file));
    var valid = validate(data);
    if (valid) {
        validCount++;
    } else {
        console.warn(`File ${file} is not valid. Errors ${validate.errors.length}`);
        console.warn(validate.errors);
        errorCount++;
    }
}
console.log(`Complete with ${validCount} valid and ${errorCount} errors.`);