import moo from 'moo';


const text = String.raw`Grants 
{{g|{{g|{{g|{{g|{{g|{{g|text=*none*}}=*n
one*}}=*none*}}=*none*}}=*none*}}=*none*}}{{pp|100;112;140;176;220;274;300|-7+x;0+|type=target's kill bounty|{{inner|b|c}}|color=gold}}, increased by {{g|100}} for [[First Blood]].`
console.log(text)
let lexer = moo.compile({
    lbrace: '{{',
    rbrace: '}}',
    lsq: '[[',
    rsq: ']]',
    string: { match: /[^\n{}\[\]]+/, value: s => s },
    NL: { match: /\n/, lineBreaks: true },
})

lexer.reset(text);
re_template(lexer, 0, null);
function re_template(lexer, indent = 0, expected_end = null) {
    let text = "";
    for (const next of lexer) {
        console.log(indent, next);
        switch (next.type) {
            case "lbrace":
                const inner_text = re_template(lexer, indent + 1, "rbrace")
                console.log(indent, "Text is:", inner_text);

                text += transformText(inner_text);
                break;
            case "rbrace":
                console.assert("rbrace" === expected_end)
                // This template is done, return now.
                return text;
            case "lsq":
                const it = re_template(lexer, indent + 1, "rsq")
                console.log(indent, "Text is:", it);
                const p = it.split('|');
                text += `<a class="wiki__link" title="${p[1] || p[0]}">${p[0]}</a>`;
                break;
            case "rsq":
                console.assert("rsq" === expected_end)
                // This template is done, return now.
                return text;
            default:
                // For NL, WS, or other text.
                text += next.value;
                break;
        }
    }
    console.assert(null === expected_end)
    console.log(indent, "Text Extra is:", text);
    return text;
}
function transformText(capture) {
    const parms = capture.split('|');
    const tag = parms[0].toLowerCase();
    const inner_fn = match_lookup[tag];
    if (!inner_fn) {
        console.log(`Unknown spell effect ${tag} for ${capture}`);
        capture = capture.replace(/\|/g, ' / ')
        // needed = true;
        return `<simple-tooltip class="capture-unknown" dname="${capture}">Unknown value: ${capture}</simple-tooltip>`;
    }
    // console.log(`Known spell effect ${tag} for ${capture}`);
    try {
        const slices = [];
        const options = {};
        for (const par of parms.slice(1)) {
            const capture = par.match(/^([A-z0-9]+) ?=(.*)/)
            if (capture) {
                options[capture[1]] = capture[2];
                console.log('MatchReplace: for tag', tag, 'options were found', options);
            } else {
                slices.push(par);
            }
        }
        // needed = true;
        return inner_fn(capture, slices, vars, options, extra_data);
    } catch (e) {
        console.log(`Error for spell effect '${match}'`);
        console.log(e);
        capture = capture.replace(/\|/g, ' ')
        // needed = true;
        return `<simple-tooltip class="red" dname="${capture}">Error: ${e}</simple-tooltip>`;
    }
}