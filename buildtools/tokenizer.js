import moo from 'moo'

import fs from 'fs';
import fetch from 'node-fetch';
import he from 'he';
import { default as matchReplaceSpellEffects } from './../src/javascript/matchreplace.mjs';
import JSON5 from 'json5';


let lexer = moo.compile({
    noinclude: /<noinclude>[^]*?<\/noinclude>/,
    comment: /<!--[^]*?-->/,
    '{{': '{{',
    '}}': '}}',
    '{': '{',
    '}': '}',
    '|': '|',
    space: { match: /\s+/, lineBreaks: true },
    number: /0|[1-9][0-9]*/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    NULL: /null\b/,
    identifier: { match: /[^{}|<>]+/, lineBreaks: true },
});

lexer.reset(`{{ap|123 to {{as|daamge}}}}`)
// lexer.reset(str)
for (const iterator of lexer) {
    console.log(iterator.type, "=", iterator.value)
}
// console.log(lexer.next()) // -> { type: 'keyword', value: 'while' }
// console.log(lexer.next()) // -> { type: 'WS', value: ' ' }
// console.log(lexer.next()) // -> { type: 'lparen', value: '(' }
// console.log(lexer.next()) // -> { type: 'number', value: '10' }


export function sum(a, b) {
    return a + b;
}
// await parse_wikia('Lux', 'Light_Binding').then(content =>
//     fs.promises.writeFile(`./Light_Binding.response`, JSON.stringify(content, null, 2))

// )