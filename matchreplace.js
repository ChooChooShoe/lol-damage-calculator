
export const list_of_colors = ['health', 'hp', 'attack damage', 'ad', 'physical damage', 'ability power', 'ap', 'magic damage', 'true damage', 'attack speed', 'armor', 'lethality', 'magic resist', 'mr', 'mana', 'mana regen', 'energy', 'critical strike chance', 'critical chance', 'critical strike damage', 'critical damage', 'movement speed', 'ms', 'xp', 'gold', 'siphoning strike', 'buzzword', 'buzzword2', 'buzzword3'];

function define_keyword(word) {
  if (word === 'stun')
    return '<b>Stun</b>'
  else
    return `<b>${word}</b>`
}

export default function matchReplaceSpellEffects(text, spellrankindex) {
  let retvalues = {}
  text = text.replace(/<!--\n-->/g, '<br>');
  text = text.replace(/\n/g, '<br>');
  for (let i = 0; i < 15; i++) {
    if (text.includes('{{'))
      text = text.replace(/{{([^{}]*)}}/g, function (match, capture) {
        // console.log('match:', match)
        const parms = capture.split('|');
        if (parms[0] in match_lookup) {
          const inner_fn = match_lookup[parms[0]];
          try {
            return inner_fn(capture, parms.slice(1), spellrankindex, retvalues);
          } catch (e) {
            console.log(`Error for spell effect '${match}'`);
            console.log(e);
            capture = capture.replace(/\|/g, ' ')
            return `<span class='tooltip red'>${capture}<span class='tooltip-float'>Error for '${capture}'</span></span>`;
          }
        } else {
          console.log(`Unknown spell effect '${match}'`);
          capture = capture.replace(/\|/g, ' ')
          return `<span class='tooltip capture-unknown'>${capture}<span class='tooltip-float'>Unknown value for '${capture}'</span></span>`;
        }
      });
    else
      break;
  }
  text = text.replace(/'''(.*?)'''+/g, '<b class="chamption-name">$1</b>');
  text = text.replace(/''(.*?)''+/g, '<i class="chamption-name">$1</i>');
  text = text.replace(/\[\[([^\[]*?)\|([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$2</a>');
  text = text.replace(/\[\[([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$1</a>');

  return {
    str: text,
    vars: retvalues
  };
}
function numberExpand(numberToNnumber, forceRange) {
  return numberToNnumber.replace(/([\d./*\-+]+) to ([\d./*\-+]+)( [\d./*\-+]+)?/g, (_match, start, end, len) => {
    let range = forceRange || Number(len) || 5;
    start = parseFloat(eval(start));
    end = parseFloat(eval(end));
    if (range === 3) {
      const diff = (end - start) / 2;
      return `${start}/${start + diff}/${end}`;
    }
    const diff = (end - start) / 4;
    return `${start}/${start + diff * 1}/${start + diff * 2}/${start + diff * 3}/${end}`;
  });
}

const match_lookup = {
  // ci (or Champion icon): {{ci|<Champion>|<Custom name>}}
  'ci': function (_capture, parms, _spellrankindex, _retvalues) {
    if (parms.length === 2)
      return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[1]}</span>`;
    return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[0]}</span>`;
  },
  // cis (or Champion icon with possessive apostrophes): {{cis|<Champion>}}
  'cis': function (_capture, parms, _spellrankindex, _retvalues) {
    return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[0]}'s</span>`;
  },

  // cai (or Champion's ability icon): {{cai|<Ability>|<Champion>|<Custom ability name>}}
  'cai': function (_capture, slices, _spellrankindex, _retvalues) {
    let abilty = slices[0];
    let champ = slices[1];
    let display = slices[0];
    if (slices.length == 3)
      display = slices[2];
    return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${champ}'s ${display}</span>`;
  },
  // csl (or Champion skin link icon): {{csl|<Champion>|<Skin>}}

  // ai (or Ability icon): {{ai|<Ability>|<Champion>|<Custom ability name>}}
  'ai': function (_capture, slices, _spellrankindex, _retvalues) {
    let abilty = slices[0];
    let champ = slices[1];
    let display = slices[0];
    if (slices.length == 3)
      display = slices[2];
    return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${display}</span>`;
  },
  // ais (or Ability icon with possessive apostrophes): {{ais|<Ability>|<Champion>}}
  'ais': function (_capture, slices, _spellrankindex, _retvalues) {
    let abilty = slices[0];
    let champ = slices[1];
    return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${abilty}'s</span>`;
  },

  // bi (or Buff icon): {{bi|<Buff>|<Custom name>}}
  'bi': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="title-tooltip blue" title="The Buff '${slices[0]}'">${slices[1] || slices[0]}</span>`;
  },

  // ii (or Item icon): {{ii|<Item>|<Custom name>}}
  'ii': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="title-tooltip blue" title="The item '${slices[0]}'">${slices[1] || slices[0]}</span>`;
  },

  // iis (or Item icon with possessive apostrophes): {{iis|<Item>}}

  // mi6 (or Mastery icon Season 2016): {{mi6|<Mastery>|<Custom name>}}

  // mi7 (or Mastery icon Season 2017): {{mi7|<Mastery>|<Custom name>}}

  // ri (or Rune icon): {{ri|<Rune>|<Custom name

  // si (or Spell icon): {{si|<Spell>|<Custom name>}}

  'si': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="title-tooltip" title="${slices[0]}" data-spellkey="${slices[0]}">${slices[1] || slices[0]}</span>`;
  },

  // sis (or Spell icon with possessive apostrophes): {{sis|<Spell>}}
  'sis': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="title-tooltip" title="${slices[0]}" data-spellkey="${slices[0]}">${slices[1] || slices[0]}'s</span>`;
  },

  // sti (or Stat icon): {{sti|<stat>|<Custom name>}}
  'sti': function (_capture, slices, _spellrankindex, _retvalues) {
    let stat = slices[0].replace(' ', '-');
    let statName = slices[0];
    let name = slices.slice(1).join('|') || stat;
    // return `<span><i title=${statName} class="icon i-${stat}"></i>${name}</span>`;
    return `<span>${name}</span>`;
  },

  // tip (or Tip icon): {{tip|<effect>|<Custom name>}}
  'tip': function (_capture, slices, _spellrankindex, _retvalues) {
    let effect = slices[0];
    let name = slices.slice(1).join('|') || effect;
    // return `<span data-tippy-content="${define_keyword(effect)}" class="blue"><i class="icon i-${effect}"></i>${name}</span>`;
    return `<span data-tippy-content="${define_keyword(effect)}" class="blue">${name}</span>`;
  },

  // ui (or Unit icon): {{ui|<Unit>|<Custom name>}}

  'ui': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="title-tooltip blue" title="The Unit '${slices[0]}'">${slices[1] || slices[0]}</span>`;
  },

  // uis (or Unit icon with possessive apostrophes): {{uis|<Unit>}}
  'uis': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="title-tooltip blue" title="The Unit '${slices[0]}'">${slices[1] || slices[0]}'s</span>`;
  },


  // tt (or Text tooltip): {{tt|<Text>|<Tooltip>}}
  'tt': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="title-tooltip" title="${slices[1]}">${slices[0]}</span>`;
  },

  //pp (or Passive progression): 
  //  {{pp|<Size>|<Value1>|<Value2>|<...>|<ValueN>|<Level1>|<Level2>|<...>|<LevelN>}}
  // or {{pp|Size|type=X|Value1|...|ValueN|Level1|...|LevelN}} 
  // or {{pp|Size|formula=X|Value1|...|ValueN|Level1|...|LevelN}} 
  // or {{pp|Size|color=X|Value1|...|ValueN|Level1|...|LevelN}}
  'pp': function (capture, _parms, _spellrankindex, _retvalues) {
    const slices = capture.slice(3).split('|');
    console.log('Match pp=', capture, '==>', slices);
    if (slices.length === 1) {
      let inner = numberExpand(slices[0]);
      console.log('Match pp=result=', inner);
      return inner;
    }
    else if (slices.length === 4) {
      let range = Number(slices[0]);
      let setting = slices[1];
      let top = numberExpand(slices[2], range);
      let bot = numberExpand(slices[3], range);
      console.log('Match pp=result=', top, bot, 'setting', setting);
      return `<span class="title-tooltip" title="At levels ${bot}">${top} </span>`;
    } else {
      let range = Number(slices[0]);
      return `<span class="title-tooltip" title="${slices.slice(1, range + 1).join(' / ')}">${slices[1]} ‒ ${slices[range]}</span>`;
    }
  },

  // ap (or Ability progression): {{ap|<Value1>|<Value2>|<...>|<Value6>}}
  'ap': function (capture, _parms, spellrankindex, retvalues) {
    var inner = capture.substring(3);
    inner = inner.replace(/([\d./*\-+]+) to ([\d./*\-+]+)( [\d./*\-+]+)?/g, (_match, start, end, len) => {
      start = parseFloat(eval(start));
      end = parseFloat(eval(end));
      if (Number(len) === 3) {
        const diff = (end - start) / 2;
        return `${start}|${start + diff}|${end}`;
      }
      const diff = (end - start) / 4;
      return `${start}|${start + diff * 1}|${start + diff * 2}|${start + diff * 3}|${end}`;

    });
    const list = inner.split('|');

    if (!retvalues.base_damage)
      retvalues.base_damage = list;

    return `<spell-span :list="[${list}]" :spellrankindex="${spellrankindex}"></spell-span>`;
  },
  // as (or Ability scaling): {{as|<(+ X% stat)>}} or {{as|<(+ X% stat)>|<stat>}}
  'as': function (capture, _parms, _spellrankindex, retvalues) {
    const slices = capture.slice(3).split('|');
    // console.log('as Ability scaling =', capture, slices);

    const inner = slices[0];
    const stat = slices.length == 2 ? slices[1] : undefined;
    const inner_lo = inner.toLowerCase();

    let cssClass = stat || list_of_colors.find(c => {
      return inner_lo.includes(c)
    }) || 'ad';
    cssClass = cssClass.replace(' ', '-');

    if (inner.includes('AP')) {
      if (!retvalues.ratio_ap_1)
        retvalues.ratio_ap_1 = numeral(inner.replace(/\(/g, '')).value();
      if (!retvalues.ratio_ap_2)
        retvalues.ratio_ap_2 = numeral(inner.replace(/\(/g, '')).value();
    } else if (inner.includes('AD')) {
      if (inner.includes('bonus')) {
        if (!retvalues.ratio_ad_2)
          retvalues.ratio_ad_2 = numeral(inner.replace(/\(/g, '')).value();
      } else if (!retvalues.ratio_ad_1)
        retvalues.ratio_ad_1 = numeral(inner.replace(/\(/g, '')).value();
    }
    return `<span class="${cssClass}">${inner}</span>`;
  },
  // sbc (or Small bold capitals): {{sbc|<Text>}}
  'sbc': function (capture, _parms, _spellrankindex, _retvalues) {
    return `<span style="font-weight:bold; font-size:89%; text-transform:uppercase;">${capture.slice(4)}</span>`;
  },

  //pp18 (or Passive progression from level 1 to 18): {{pp18|<Val1>|<Val2>|<...>|<Val17>|<Val18>}}​​​​​​​

  //ft (or Flip text): {{ft|<Element 1>|<Element 2>}}
  'ft': function (capture, slices, _spellrankindex, _retvalues) {
    return `<span>${slices[0]} (${slices[1]})</span>`;
  },

  'g': function (_capture, slices, _spellrankindex, _retvalues) {
    return `<span class="gold"> <img src="/images/Gold.png">${slices[0]}</span>`;
  },

  // format number
  'fd': function (capture, _parms, _spellrankindex, _retvalues) {
    return `<span style="font-variant-numeric: tabular-nums;">${capture.slice(3)}</span>`;
  },

  'st': function (_capture, slices, _spellrankindex, _retvalues) {
    let rets = []
    for (let i = 0; i < slices.length; i += 2) {
      rets.push(`<span class="blue">${slices[i]}</span>: <span>${slices[i + 1]}</span>`);
    }
    return rets.join('<br>');
  },
  // MATH OPERATORS:
  'plus': function (_capture, _parms, _spellrankindex, _retvalues) {
    return '+';
  },
  'minus': function (_capture, _parms, _spellrankindex, _retvalues) {
    return '−';
  },
  'plusminus': function (_capture, _parms, _spellrankindex, _retvalues) {
    return '±';
  },
  'divided by': function (_capture, _parms, _spellrankindex, _retvalues) {
    return '÷';
  },
  'times': function (_capture, _parms, _spellrankindex, _retvalues) {
    return '×';
  },
  'equals': function (_capture, _parms, _spellrankindex, _retvalues) {
    return '=';
  },
  'degree': function (_capture, _parms, _spellrankindex, _retvalues) {
    return '°';
  },
};