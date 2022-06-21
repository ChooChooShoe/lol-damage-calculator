

const COMMENT = /<!--[\S\s]*?-->/g
const INNER_BRACE = /{{([^{}]*)}}/g
const EQUAL_SPLIT = /^([A-z0-9\s]+)=(.*)/

const text = `{{st|Physical Damage|{{ap|200 to 450}} {{as|(+ 180% '''bonus''' AD)}}}} `

export function makeVarsForEffects(text: string, extra_data: any, config: {}): { str: string; vars: { as_ratios: never[]; st_slices: never[]; ap_progressions: never[] } } {
  let vars = { as_ratios: [], st_slices: [], ap_progressions: [] }
  // Remove <!-- Comment -->
  text = text.replace(COMMENT, '');


  let looping = true;
  while (looping) {
    looping = false;
    text = text.replace(INNER_BRACE, (_match: string, capture: string, _offset: number, _fulltext: string,): string => {
      looping = true;
      const split = capture.split('|');
      const tag = split[0].toLowerCase();
      const inner_fn = match_lookup[tag];

      if (!inner_fn) {
        console.log(`Unknown spell effect ${tag} for ${capture}`);
        return `<${tag}>${split.slice(1).join()}</${tag}>`
      }
      const positional_argument = [];
      const named_parameters: NamedParameters = {};
      for (const par of split.slice(1)) {
        const has_eq = par.match(EQUAL_SPLIT)
        if (has_eq) named_parameters[has_eq[1]] = has_eq[2];
        else positional_argument.push(par);
      }

      const ret = inner_fn({ capture, slices: positional_argument, options: named_parameters, vars, extra_data });
      // const res = inner_fn(capture, positional_argument, vars, named_parameters, extra_data);
      // if (config.notext) return "";
      // return res;
      
    });
  }

  return {
    str: text,
    vars: vars
  };
}

// Expands numbers for pp or ap.
// ex. 100 to 500 => [100,200,300,400,500]
export function numberExpand(slices: string[], maxrank: number = 5, fractionDigits: number = 3) {
  const regex = /([\d./*\-+()]+) to ([\d./*\-+()]+)( [\d]+)?/;
  const clean = /([^\d./*\-+()]+)/g;
  const list = [];

  for (const p of slices) {
    const found = p.match(regex);
    if (found) {
      const start = parseFloat(eval(found[1]));
      const end = parseFloat(eval(found[2]));
      const range = parseInt(found[3]) || maxrank || 5;
      const diff: number = (end - start) / (range - 1 - list.length);
      for (let i: number = list.length; i < range; i++) {
        list.push(+(start + diff * i).toFixed(fractionDigits));
      }
    } else {
      const cleaned = p.replace(clean, '')
      try {
        let num = eval(cleaned);
        if (!isNaN(num))
          list.push(+parseFloat(num).toFixed(fractionDigits));
        // else
        // list.push(0);
      } catch (msg) {
        console.log("Error because of eval(", cleaned, ")");
        // list.push(0);
      }
    }
  }
  return list;
}

export const match_lookup: MatchTable = {
  st: ({ capture, slices, options, vars, extra_data }: MatchReplaceParams): string => {
    return capture;
  },
  // ap (or Ability progression): {{ap|<Value1>|<Value2>|<...>|<Value6>}}
  ap: ({ capture, slices, options, vars, extra_data }: MatchReplaceParams): string => {
    const round = parseInt(options.round) || 3;
    const maxrank = extra_data?.maxrank || 5;

    const list = numberExpand(slices, maxrank, round);

    // add to vars if enabled.
    vars.ap_progressions.push(list);
    return `<SpellSpan :list="[${list}]"></SpellSpan>`;
  },
  // as (or Ability scaling): {{as|<(+ X% stat)>}} or {{as|<(+ X% stat)>|<stat>}}
  as: ({ capture, slices, options, vars, extra_data }: MatchReplaceParams): string => {
    return capture;
  },
}


interface MatchReplaceParams { capture: string; slices: string[]; options: NamedParameters; vars: any; extra_data: any; }

interface MatchTable {
  [key: string]: ({ capture, slices, options, vars, extra_data }: MatchReplaceParams) => string
}
interface NamedParameters {
  [key: string]: string
}

console.log(makeVarsForEffects(text, null))
console.log("makeVarsForEffects(text, null)")
