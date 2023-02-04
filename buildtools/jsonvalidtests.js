const Ajv = require('ajv');
const fs = require('fs');
const ajv = new Ajv({ allErrors: true });

const schema = JSON.parse(fs.readFileSync('./buildtools/champion.schema.json'));
// console.log(schema);
// console.log(data);
const validate = ajv.compile(schema);

const dir = './public/api/champion/';
const files = fs.readdirSync(dir);
let validCount = 0;
let errorCount = 0;
for (const file of files) {
  const data = JSON.parse(fs.readFileSync(dir + file));
  const valid = validate(data);
  if (valid) {
    validCount++;
  } else {
    console.warn(`File ${file} is not valid. Errors ${validate.errors.length}`);
    console.warn(validate.errors);
    errorCount++;
  }
}
console.log(`Complete with ${validCount} valid and ${errorCount} errors.`);
