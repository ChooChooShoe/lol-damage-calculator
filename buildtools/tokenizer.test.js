import { expandify } from './tokenizer.js';
import { numberExpand } from '../src/javascript/matchreplace.mjs'

// test('numberExpand 1', () => {
//   expect(numberExpand('{{ap|120 to 80}}')).toBe([120, 80]);
// });

// test('numberExpand 2', () => {
//   expect(numberExpand('{{ap|120 to 80}}')).toBe([120, 80]);
// });

// test('numberExpand 3', () => {
//   expect(numberExpand('{{ap|120 to 80}}')).toBe([120, 80]);
// });

test('expandify 1', () => {
  expect(expandify('{{ap|120 to 80}}')).toStrictEqual([['ap', '120 to 80']]);
})
test('expandify 2', () => {
  expect(expandify("The cask will prematurely explode upon colliding with {{ai|Blade Whirl|Samira}} or {{ai|Wind Wall|Yasuo}}.")).toStrictEqual([['ai', 'Blade Whirl', 'Samira'], ['ai', 'Wind Wall', 'Yasuo']]);
})
test('expandify 3', () => {
  expect(expandify('{{st|Magic Damage|{{ap|200 to 400}} {{as|(+ 80% AP)}}}}')).toStrictEqual([["ap", "200 to 400"], ["as", "(+ 80% AP)"], ["st", "Magic Damage", "XXX XXX",]]);
})
test('expandify 4', () => {
  expect(expandify('')).toStrictEqual([]);
})