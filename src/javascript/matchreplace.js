import numeral from 'numeral';
import Vue from 'vue';
export const list_of_colors = ['health', 'hp', 'attack damage', 'ad', 'physical damage', 'ability power', 'ap', 'magic damage', 'true damage', 'attack speed', 'armor', 'lethality', 'magic resist', 'mr', 'mana', 'mana regen', 'energy', 'critical strike chance', 'critical chance', 'critical strike damage', 'critical damage', 'movement speed', 'ms', 'xp', 'gold', 'siphoning strike', 'buzzword', 'buzzword2', 'buzzword3'];

function define_keyword(word) {
  const lookedup = keyword_lookup[word.toLowerCase()];
  if (lookedup) {
    return `<div><h4>${lookedup.h}<hr></h4><p>${lookedup.b}</p></div>`;
  }
  // console.log('keyword', word);
  let body = 'Description for keyword ' + word;
  return `<div><h4>${word}<hr></h4><p>${body}</p></div>`;
}

const keyword_lookup = {
  __: {
    h: 'Header',
    b: `Body`,
    interrupts: '',
    reduction: '',
    resist: '',
    removal: '',
    champsWith: [],
    itemsWith: [],
    othersWith: [],
  },
  heal: {
    h: 'Healing',
    b: `<b>Healing</b> restores some of the user or the target's <span class="health">current health</span> directly.<br><br>Healing can be reduced by <b>Grievous Wounds</b>.`
  },
  shields: {
    h: 'Shields',
    b: `<b>Shields</b> are temporay health.`
  },
  'crowd control': {
    h: 'Crowd Control (CC)',
    b: `<b>Crowd Control</b> or CC are spells effects the prevent enemny movement, spell casting, or something.`
  },
  blind: {
    h: 'Blind',
    b: `Unit's basic attacks will miss the target and deal 0 daamge.`
  },
  cripple: {
    h: 'Cripple: Attack Speed Reduction',
    b: `Unit's attack speed is reduced for the duration.`,
    reduction: 'tenacity',
  },
  disarm: {
    h: 'Disarm',
    b: 'A unit that is disarmed is unable to declare basic attacks.'
  },
  disrupt: {
    h: 'Disrupt / Interrupt',
    b: 'Interrupts channeled and charged abilities. Like a silence but unit still cast abilites.'
  },
  charm: {
    h: 'Charm',
    b: ''
  },
  flee: {
    h: 'Fear',
    b: 'Spooky'
  },
  taunt: {
    h: 'Taunt',
    b: 'Taunty'
  },
  ground: {
    h: 'Ground / Grounded ',
    b: `Unit that is grounded is unable to activate mobility spells (dash and blink). <br><br>Does <b>not</b> interrupts an in progress dash or blink.<br>Does Interrupts channeled and charged dashes.`,
  },
  knockdown: {
    h: 'Knockdown',
    b: `Only affects <b>Airborne</b> or <i>dashing</i> units. Target unit is stopped and placed on the ground. Instantaneous`,
  },
  nearsight: {
    h: 'Nearsight',
    b: `Target's <i class="blue">Vision</i> reduced by 900 units and cannot see what allies can see.<br><br<<b>Tenacity</b> has no effect.`,
    removal: 'qss',
    champsWith: ['Graves', 'Nocturne', 'Quinn', 'TahmKench'],
  },
  silence: {
    h: 'Slence',
    b: `Cannot cast abilities, activate items, or use summoner <b>Flash</b> and <b>Teleport</b>.<br><br>Interrupts channeled and charged abilities. (Except: Lucian's The Culling)<br>Duration reduced by <b>Tenacity</b>`
  },
  sleep: {
    h: 'Sleep',
    b: `Caused by Zoe.`
  },
  slow: {
    h: 'Slow',
    b: `A unit that is <i>slowed</i> has reduced movement speed for the duration.<br><br>Duration reduced by <b>Tenacity</b>.<br>Strength is reduced by <b>Slow resist</b>.`
  },
  root: {
    h: 'Root / Snare / Binding',
    b: 'Unit is unable to control movement, use a mobility spells (dash and blink) or use summoner <b>Flash</b> and <b>Teleport</b> for the duration.'
  },
  stasis: {
    h: 'Stasis',
    b: 'When in a stasis, Unit is invunerable and untargetable.'
  },
  stun: {
    h: 'Stun',
    b: `Unit is unable to control its movement, declare attacks, cast abilities, activate items, or use the summoner <b>Flash</b> and <b>Teleport</b> for the duration.<br><br>
Interrupts all channeled and charged abilities<br>
Duration reduced by <b>Tenacity</b>.<br>
Resisted by Spell and Crowd Control Immunity.<br>
Removed by <b>Cleanse</b>, <b>Quicksilver</b>, <b>Mikael's Crucible</b><br>`
  },
  suspension: {
    h: 'Suspension: Airborne Stun',
    b: `Unit is Airborne and Stuned for the duration of the suspension. Unit isunable to control its movement, declare attacks, cast abilities, activate items, or use the summoner <b>Flash</b> and <b>Teleport</b> for the duration.<br><br>
    Interrupts all channeled and charged abilities<br>
    Duration reduced by <b>Tenacity</b>.<br>
    Resisted by Spell and Crowd Control Immunity.<br>
    Removed by <b>Cleanse</b>, <b>Quicksilver</b>, <b>Mikael's Crucible</b><br>`
  },
  suppression: {
    h: '',
    b: `Unit is unable to control its movement, declare attacks, cast abilities, activate items, or use <b>any</b> summoner spells for the duration.<br><br>
    Interrupts all channeled and charged abilities<br>
    Duration is <b>not</b> reduced by <b>Tenacity</b>.<br>
    Resisted by Spell and Crowd Control Immunity.<br>
    Removed by <b>Quicksilver</b><br>`
  },
  minions: {
    h: 'Lane Minions',
    b: `A unit that is <i>slowed</i> has reduced movement speed for the duration.<br><br>Duration reduced by <b>Tenacity</b>.<br>Strength is reduced by <b>Slow resist</b>.`
  },
}

export default function matchReplaceSpellEffects(text, spellrankindex) {
  let vars = { ratios: {}, progression: [] }
  text = text.replace(/<!--\n-->/g, '<br>');
  text = text.replace(/\n/g, '<br>');
  // Matches [[ thing ]] captures thing
  text = text.replace(/\[\[([^[]*)\]\]/g, function (match, capture) {
    const parms = capture.split('|');
    const link = parms[0];
    const tile = parms[1] || parms[0];
    return `<a class="effect link" title="${tile}">${link}</a>`
  });
  for (let i = 0; i < 15; i++) {
    if (text.includes('{{'))
      text = text.replace(/{{([^{}]*)}}/g, function (match, capture) {
        // console.log('match:', match)
        const parms = capture.split('|');
        const tag = parms[0].toLowerCase();
        if (tag in match_lookup) {
          const inner_fn = match_lookup[tag];
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
            return inner_fn(capture, slices, spellrankindex, vars, options);
          } catch (e) {
            Vue.notify({
              group: "main",
              title: "Error: Unknown Error.",
              text: match,
              type: "error"
            });
            console.log(`Error for spell effect '${match}'`);
            console.log(e);
            capture = capture.replace(/\|/g, ' ')
            return `<simple-tooltip class="red" dname="${capture}">Error: ${e}</simple-tooltip>`;
          }
        } else {
          Vue.notify({
            group: "main",
            title: "Warn: Unknown spell effect.",
            text: match,
            type: "warn"
          });
          console.log(`Unknown spell effect '${match}'`);
          capture = capture.replace(/\|/g, ' ')
          return `<simple-tooltip class="capture-unknown" dname="${capture}">Unknown value: ${capture}</simple-tooltip>`;
        }
      });
    else
      break;
  }

  text = text.replace(/'''''(.*?)'''''/g, '<b><i>$1</i></b>');
  text = text.replace(/'''(.*?)'''/g, '<b>$1</b>');
  text = text.replace(/''(.*?)''/g, '<i>$1</i>');

  return {
    str: text,
    vars: vars
  };
}
function numberExpand(param, forceRange, round) {
  const regex = /([\d./*\-+()]+) to ([\d./*\-+()]+)( [\d]+)?/;
  const clean = /([^\d./*\-+()]+)/g;
  const list = [];
  round = parseInt(round) || 3;

  for (const p of param.split(';')) {
    const found = p.match(regex);
    if (found) {
      const start = parseFloat(eval(found[1]));
      const end = parseFloat(eval(found[2]));
      const range = forceRange || parseInt(found[3]) || 5;
      const diff = (end - start) / (range - 1 - list.length);
      for (let i = list.length; i < range; i++) {
        list.push(+(start + diff * i).toFixed(round));
      }
    } else {
      list.push(+parseFloat(eval(p.replace(clean, ''))).toFixed(round));
    }
  }
  return list;
}

const match_lookup = {
  // ci (or Champion icon): {{ci|<Champion>|<Custom name>}}
  'ci': function (_capture, parms, _spellrankindex, _vars) {
    if (parms.length === 2)
      return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[1]}</span>`;
    return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[0]}</span>`;
  },
  // cis (or Champion icon with possessive apostrophes): {{cis|<Champion>}}
  'cis': function (_capture, parms, _spellrankindex, _vars) {
    return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[0]}'s</span>`;
  },

  // cai (or Champion's ability icon): {{cai|<Ability>|<Champion>|<Custom ability name>}}
  'cai': function (_capture, slices, _spellrankindex, _vars) {
    let abilty = slices[0];
    let champ = slices[1];
    let display = slices[0];
    if (slices.length == 3)
      display = slices[2];
    return `<span class="champion-ability blue" data-champkey="${champ}" data-ability="${abilty}">${champ}'s ${display}</span>`;
  },
  'cais': function (_capture, slices, _spellrankindex, _vars) {
    let abilty = slices[0];
    let champ = slices[1];
    let display = slices[0];
    if (slices.length == 3)
      display = slices[2];
    return `<span class="champion-ability blue" data-champkey="${champ}" data-ability="${abilty}">${champ}'s ${display}</span>`;
  },
  // csl (or Champion skin link icon): {{csl|<Champion>|<Skin>}}

  // ai (or Ability icon): {{ai|<Ability>|<Champion>|<Custom ability name>}}
  'ai': function (_capture, slices, _spellrankindex, _vars) {
    const abilty = slices[0];
    const champ = slices[1];
    let display = slices[0];
    if (slices.length == 3)
      display = slices[2];
    return `<HtmlTooltip class="champion-ability blue link" data-champkey="${champ}">${display}<template #content>${abilty}</template></HtmlTooltip>`;
  },
  // ais (or Ability icon with possessive apostrophes): {{ais|<Ability>|<Champion>}}
  'ais': function (_capture, slices, _spellrankindex, _vars) {
    let abilty = slices[0];
    let champ = slices[1];
    return `<HtmlTooltip class="champion-ability blue link" data-champkey="${champ}">${abilty}'s<template #content>${abilty}</template></HtmlTooltip>`;
  },

  // bi (or Buff icon): {{bi|<Buff>|<Custom name>}}
  'bi': function (_capture, slices, _spellrankindex, _vars) {
    return `<simple-tooltip dname="${slices[1] || slices[0]}">The Buff: ${slices[0]}</simple-tooltip>`;
  },
  // Channel type
  'ct': function (_capture, _slices, _spellrankindex, _vars) {
    return `<span class="red">Channel Unknown</span>`;
  },
  'color': function (_capture, slices, _spellrankindex, _vars) {
    return `<span class="${slices[0]}">${slices[1]}</span>`;
  },

  // ii (or Item icon): {{ii|<Item>|<Custom name>}}
  'ii': function (_capture, slices, _spellrankindex, _vars) {
    return `<simple-tooltip dname="${slices[1] || slices[0]}">The item: ${slices[0]}</simple-tooltip>`;
  },

  // iis (or Item icon with possessive apostrophes): {{iis|<Item>}}
  'iis': function (_capture, slices, _spellrankindex, _vars) {
    return `<simple-tooltip dname="${slices[1] || slices[0]}'s">The item: ${slices[0]}</simple-tooltip>`;
  },

  // mi6 (or Mastery icon Season 2016): {{mi6|<Mastery>|<Custom name>}}

  // mi7 (or Mastery icon Season 2017): {{mi7|<Mastery>|<Custom name>}}

  // ri (or Rune icon): {{ri|<Rune>|<Custom name
  'ri': function (_capture, slices, _spellrankindex, _vars) {
    return `<simple-tooltip dname="${slices[1] || slices[0]}">${slices[0]}</simple-tooltip>`;
  },
  // si (or Spell icon): {{si|<Spell>|<Custom name>}}
  'si': function (_capture, slices, _spellrankindex, _vars) {
    return `<simple-tooltip dname="${slices[1] || slices[0]}" data-spellkey="${slices[0]}">${slices[0]}</simple-tooltip>`;
  },

  // sis (or Spell icon with possessive apostrophes): {{sis|<Spell>}}
  'sis': function (_capture, slices, _spellrankindex, _vars) {
    return `<simple-tooltip dname="${slices[1] || slices[0]}'s" data-spellkey="${slices[0]}">${slices[0]}</simple-tooltip>`;
  },

  // sti (or Stat icon): {{sti|<stat>|<Custom name>}}
  'sti': function (_capture, slices, _spellrankindex, _vars) {
    let stat = slices[0].replace(' ', '-');
    let statName = slices[0];
    let name = slices.slice(1).join('|') || stat;
    // return `<span><i title=${statName} class="icon i-${stat}"></i>${name}</span>`;
    return `<span>${slices[1] || slices[0]}</span>`;
  },

  // tip (or Tip icon): {{tip|<effect>|<Custom name>}}
  'tip': function (_capture, slices, _spellrankindex, _vars) {
    let effect = slices[0];
    let name = slices.slice(1).join('|') || effect;
    // return `<span data-tippy-content="${define_keyword(effect)}" class="blue"><i class="icon i-${effect}"></i>${name}</span>`;
    // return `<span data-tippy-content="${define_keyword(effect)}" class="blue">${name}</span>`;
    return `<HtmlTooltip class="blue link">${name}<template #content>${define_keyword(effect)}</template></HtmlTooltip>`;
  },

  // ui (or Unit icon): {{ui|<Unit>|<Custom name>}}
  'ui': function (_capture, slices, _spellrankindex, _vars) {
    return `<span class="title-tooltip blue" title="The Unit '${slices[0]}'">${slices[1] || slices[0]}</span>`;
  },

  // uis (or Unit icon with possessive apostrophes): {{uis|<Unit>}}
  'uis': function (_capture, slices, _spellrankindex, _vars) {
    return `<span class="title-tooltip blue" title="The Unit '${slices[0]}'">${slices[1] || slices[0]}'s</span>`;
  },

  // tt (or Text tooltip): {{tt|<Text>|<Tooltip>}}
  'tt': function (_capture, slices, _spellrankindex, _vars) {
    return `<span class="title-tooltip" title="${slices[1]}">${slices[0]}</span>`;
  },

  //pp (or Passive progression): 
  //  {{pp|<Size>|<Value1>|<Value2>|<...>|<ValueN>|<Level1>|<Level2>|<...>|<LevelN>}}
  // or {{pp|Size|type=X|Value1|...|ValueN|Level1|...|LevelN}} 
  // or {{pp|Size|formula=X|Value1|...|ValueN|Level1|...|LevelN}} 
  // or {{pp|Size|color=X|Value1|...|ValueN|Level1|...|LevelN}}
  'pp': function (capture, slices, _spellrankindex, _vars, options) {
    // const slices = capture.slice(3).split('|');
    console.log('Match pp=', capture, '==>', slices, 'opt', options);
    if (slices.length === 1) {
      let range = slices[0].split(' to ');
      const display = [range[0] + options.key || '', range[1] + options.key || '',];
      let top = numberExpand(slices[0], 18);
      const bot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
      console.log('Match pp=result=', top);
      return `<HtmlTooltip class="blue link">${display[0]} − ${display[1]} (based on level)<template #content>Values: ${top.join(', ')}<br>At levels: ${bot.join(', ')}</template></HtmlTooltip>`;
    }
    else if (slices.length === 3) {
      let range = Number(slices[0]);
      // let setting = slices[1];
      let top = numberExpand(slices[1], range);
      const display = [top[0] + options.key || '', top[top.length - 1] + options.key || '',];
      let bot = numberExpand(slices[2], range);
      console.log('Match pp=result-top-bot=', top, bot);
      return `<HtmlTooltip class="blue link">${display[0]} − ${display[1]} (based on level)<template #content>Values: ${top.join(', ')}<br>At levels: ${bot.join(', ')}</template></HtmlTooltip>`;
    } else {
      let range = Number(slices[0]);
      console.log('Match pp=range=', range);
      return `<span class="title-tooltip" title="${slices.slice(1, range + 1).join(' / ')}">${slices[1]} ‒ ${slices[range]}</span>`;
    }
  },

  // ap (or Ability progression): {{ap|<Value1>|<Value2>|<...>|<Value6>}}
  'ap': function (_capture, slices, spellrankindex, vars, options) {
    const regex = /([\d./*\-+()]+) to ([\d./*\-+()]+)( [\d]+)?/;
    const clean = /([^\d./*\-+()]+)/g;
    const list = [];
    const round = parseInt(options.round) || 3;

    for (const param of slices) {
      const found = param.match(regex);
      if (found) {
        const start = parseFloat(eval(found[1]));
        const end = parseFloat(eval(found[2]));
        const range = parseInt(found[3]) || 5;
        const diff = (end - start) / (range - 1);
        for (let i = 0; i < range; i++) {
          list.push(+(start + diff * i).toFixed(round));
        }
      } else {
        list.push(+parseFloat(eval(param.replace(clean, ''))).toFixed(round));
      }
    }
    if (!vars.base_damage)
      vars.base_damage = list;
    else
      vars.progression.push(list);
    return `<spell-span :list="['${list.join("','")}']" :spellrankindex="${spellrankindex}"></spell-span>`;
  },
  // as (or Ability scaling): {{as|<(+ X% stat)>}} or {{as|<(+ X% stat)>|<stat>}}
  'as': function (capture, slices, _spellrankindex, vars, options) {
    // console.log('as Ability scaling =', capture, slices);

    const inner = slices[0];
    const stat = slices[1];
    const inner_lo = inner.toLowerCase();

    let cssClass = stat || list_of_colors.find(c => {
      return inner_lo.includes(c)
    }) || 'ad';
    cssClass = cssClass.replace(' ', '-');

    const test = inner.toLowerCase();
    let num = numeral(test.replace(/[^\d%.,]/g, '')).value();
    if (num !== null) {
      if (test.length > 20)
        num = 0.01;
      const isBonus = inner.includes('bonus');
      const target = inner.includes('target');
      const targetStr = target ? 'target' : 'player';
      if (test.includes('ap')) {
        vars.ratios.ap = num;
      }
      else if (test.includes('ad')) {
        if (isBonus) vars.ratios.bonus_ad = num;
        else vars.ratios.total_ad = num;
      }
      else if (test.includes('health') || test.includes('hp')) {
        if (target) {
          if (isBonus) vars.ratios.bonus_hp = { target: 'target', value: num };
          else if (test.includes('missing')) vars.ratios.missing_hp = { target: 'target', value: num };
          else if (test.includes('current')) vars.ratios.current_hp = { target: 'target', value: num };
          else vars.ratios.total_hp = { target: 'target', value: num };
        } else {
          if (isBonus) vars.ratios.bonus_hp = num;
          else if (test.includes('missing')) vars.ratios.missing_hp = num;
          else vars.ratios.total_hp = num;
        }
      }
      else if (test.includes('ad')) {
        if (isBonus) vars.ratios.bonus_ad = num;
        else vars.ratios.total_ad = num;
      }
      else if (test.includes('armor')) {
        if (isBonus) vars.ratios.bonus_armor = num;
        else vars.ratios.total_armor = num;
      }
      else if (test.includes('mr') || test.includes('resist')) {
        if (isBonus) vars.ratios.bonus_mr = num;
        else vars.ratios.total_mr = num;
      }
    }
    return `<span class="${cssClass}">${inner}</span>`;
  },
  // sbc (or Small bold capitals): {{sbc|<Text>}}
  'sbc': function (capture, _parms, _spellrankindex, _vars) {
    return `<span style="font-weight:bold; font-size:89%; text-transform:uppercase;">${capture.slice(4)}</span>`;
  },

  //pp18 (or Passive progression from level 1 to 18): {{pp18|<Val1>|<Val2>|<...>|<Val17>|<Val18>}}

  //ft (or Flip text): {{ft|<Element 1>|<Element 2>}}
  'ft': function (capture, slices, _spellrankindex, _vars) {
    return `<span>${slices[0]} (${slices[1]})</span>`;
  },

  'g': function (_capture, slices, _spellrankindex, _vars) {
    return `<span class="gold"> <img src="/images/Gold.png">${slices[0]}</span>`;
  },

  'nie': function (_capture, slices, _spellrankindex, _vars) {
    return `<span class="blue">${slices[0]}</span>`;
  },

  // format number
  'fd': function (capture, _parms, _spellrankindex, _vars) {
    return `<span style="font-variant-numeric: tabular-nums;">${capture.slice(3)}</span>`;
  },

  'st': function (_capture, slices, _spellrankindex, _vars) {
    let rets = []
    for (let i = 0; i < slices.length; i += 2) {
      rets.push(`<span class="blue">${slices[i]}</span>: <span>${slices[i + 1]}</span>`);
    }
    return rets.join('<br>');
  },
  // MATH OPERATORS:
  'plus': function (_capture, _parms, _spellrankindex, _vars) {
    return '+';
  },
  'minus': function (_capture, _parms, _spellrankindex, _vars) {
    return '−';
  },
  'plusminus': function (_capture, _parms, _spellrankindex, _vars) {
    return '±';
  },
  'divided by': function (_capture, _parms, _spellrankindex, _vars) {
    return '÷';
  },
  'times': function (_capture, _parms, _spellrankindex, _vars) {
    return '×';
  },
  'equals': function (_capture, _parms, _spellrankindex, _vars) {
    return '=';
  },
  'degree': function (_capture, _parms, _spellrankindex, _vars) {
    return '°';
  },
  'item data prototype hex core': function (_capture, _parms, _spellrankindex, _vars) {
    return 'Grants 1 − 18 (based on level) ability power and 10 − 180 (based on level) mana.';
  },
  'item data the hex core mk-1': function (_capture, _parms, _spellrankindex, _vars) {
    return 'Grants 3 − 54 (based on level) ability power and 15 − 270 (based on level) mana';
  },
  'item data the hex core mk-2': function (_capture, _parms, _spellrankindex, _vars) {
    return 'Grants 6 − 108 (based on level) ability power and 20 − 360 (based on level) mana.';
  },
  'item data perfect hex core': function (_capture, _parms, _spellrankindex, _vars) {
    return 'Grants 10 − 180 (based on level) ability power and 25 − 450 (based on level) mana.';
  },
  '#var:b1': function (_capture, _parms, _spellrankindex, _vars) {
    return '0';
  },
  '#var:b2': function (_capture, _parms, _spellrankindex, _vars) {
    return '0';
  },
  '#var:r1': function (_capture, _parms, _spellrankindex, _vars) {
    return '0';
  },
  '#var:r2': function (_capture, _parms, _spellrankindex, _vars) {
    return '0';
  },
  'pending for test': function (_capture, _parms, _spellrankindex, _vars) {
    return '<i>pending for test</i>';
  },
  'critical damage': function (_capture, _parms, _spellrankindex, _vars) {
    return '<span class="critical-strike">(+ IE 25%)</span>';
  },
};