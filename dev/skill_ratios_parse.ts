import { numberExpandOnLevel } from './leveling';
import type { Dictionary } from 'lodash';
import parenthesis, { type ArrayTree } from 'parenthesis';
import { saveFile } from './fetch_utils';
import { matchKeyword, table_check } from './mutate_untils';
import {
  SubRatio,
  RootRatio,
  EffectType,
  DamageType,
  HealType,
  ShieldType,
  OptionalStat,
} from '../src/api/DataTypes';
import {
  BBT_Perfix,
  BBT_Perfix_Ex,
  BBT_Stat,
  BBT_Units,
  Stat,
} from '../src/api/ChampObjStats';

const DEBUG = false;

const keyword_to_type: Dictionary<BBT_Perfix> = {
  total: 'total',
  bonus: 'bonus',
  base: 'base',
};
const keyword_to_type_ext: Dictionary<BBT_Perfix_Ex> = {
  maximum: 'maximum',
  missing: 'missing',
  lost: 'missing',
  current: 'current',
  total: 'total',
  bonus: 'bonus',
  base: 'base',
};

function convertUnitsToUserAndUnits(unit: string | undefined | null): {
  user: 'none' | 'player' | 'target';
  unitsParsed: OptionalStat;
} {
  if (!unit) return { user: 'none', unitsParsed: '' };
  unit = unit.toLowerCase().trim();

  const basicStat = matchKeyword(unit, validBasicStats, null);
  if (basicStat) {
    return { user: 'player', unitsParsed: basicStat };
  }

  const player_stat = matchKeyword(unit, validBaseBonusTotalStats, null);
  if (!player_stat) return { user: 'none', unitsParsed: '' };

  const user: 'player' | 'target' = unit.includes('target')
    ? 'target'
    : 'player';

  if (player_stat === 'hp') {
    const bbt = matchKeyword(unit, keyword_to_type_ext, 'maximum');
    const unitsParsed: `${BBT_Perfix_Ex}_hp` = `${bbt}_${player_stat}`;
    return { user, unitsParsed: unitsParsed };
  } else {
    const bbt = matchKeyword(unit, keyword_to_type, 'total');
    const unitsParsed: BBT_Stat = `${bbt}_${player_stat}`;
    return { user, unitsParsed: unitsParsed };
  }
}

if (DEBUG) {
  const out_file: any = {};
  for (const fulltext of []) {
    const a = makeRatioObj(parenthesis.parse(fulltext), false);
    // if (a.sub?.length > 1)
    //   out_file[fulltext] = a;
    out_file[fulltext] = a;
    // const b = makeRatioObj(a);
    // debug_ratio(b, out_file);
  }
  saveFile('./.debug/makeRatioObj3.json', out_file);
  console.log('stop');
}

export function ratios_from_text(full_text: string): SubRatio {
  const root = parenthesis.parse(full_text);
  return makeRatioObj(root, false);
}

export function spellEffectFromDescription(
  lineNumber: string,
  descTextLine: string
): RootRatio {
  const nameSplit = descTextLine.split(/: (.*)/s);
  const betterName = nameSplit[1] ? nameSplit[0] + ':' : lineNumber;
  descTextLine = nameSplit[1] || nameSplit[0];

  return spellEffectFromStrings(betterName, descTextLine.trim(), descTextLine);
}
export function spellEffectFromStrings(
  name: string,
  keywords: string,
  raw: string
): RootRatio {
  const target: Partial<RootRatio> = {
    effectType: matchKeyword(keywords, validEffectTypes, 'Unique'),
    name,
    raw,
  };
  const tree_root = parenthesis.parse(raw);
  if (name.length > 48) {
    console.log(`Name ${name} is longer than 48 chars. trimming to 'Passive:'`);
    name = 'Passive:';
  }
  const ratio = makeRatioObj(tree_root, false);
  if (target.effectType === 'Gain' && ratio.units) {
    target.increasedStat = ratio.units || 'bonus_movespeed';
    ratio.units = '';
  }
  if (target.effectType === 'Damage') {
    target.damagetype = matchKeyword(keywords, validDamageTypes, 'None');
  } else if (target.effectType === 'Shield') {
    target.damagetype = matchKeyword(keywords, validDamageTypes, 'None');
    target.shieldType = matchKeyword(keywords, validShieldTypes, 'SelfShield');
  } else if (target.effectType === 'Heal') {
    target.healType = matchKeyword(keywords, validHealTypes, 'SelfHeal');
  } else if (target.effectType === 'Stacks') {
    target.min = 0;
    const matchedMax = keywords.match(/stacking up to ([0-9]+) times/);
    target.max = matchedMax ? Number(matchedMax[1]) || 10 : 10;
    target.description = raw;
  }
  // console.log(`[DEBUG] spellEffectFromStrings => ${name}: ${raw}`)
  return Object.assign(target as RootRatio, ratio);
}

export function RatioFromString(str: string): SubRatio {
  const tree_root = parenthesis.parse(str);
  return makeRatioObj(tree_root, true);
}
export function makeRatioObj(root: ArrayTree, strictMode: boolean): SubRatio {
  const pre_arr: string[] = [];
  const sub_ratios: SubRatio[] = [];
  const post_arr: string[] = [];
  let basedOn: any = undefined;
  let arr = pre_arr;
  // let is_based_on_level = false;

  for (const [idx, ratio] of Object.entries(root)) {
    if (Array.isArray(ratio)) {
      const sub = makeRatioObj(ratio as parenthesis.ArrayTree, strictMode);
      if (sub.unitsText?.startsWith('based on')) {
        // set flag, do not add as sub_ratio
        // Ex. 50 − 305 (based on level) (+ 80% bonus AD)
        basedOn = sub.unitsText.slice(9);
        // is_based_on_level = true;
      } else {
        sub_ratios.push(sub);
      }
      arr = post_arr;
    } else {
      arr.push(ratio.replace(/[()]/g, '').trim());
    }
  }
  const pre: string = pre_arr.join('');
  const post_arr_min = post_arr.filter((x: string) => x !== '');
  const post: string | undefined = post_arr_min[0];
  if (post_arr_min.length > 1)
    console.log(
      'Effect has more then 1 post script',
      post_arr,
      'for ratio',
      root
    );
  const pre_vals = level_to_ratio(pre);

  let values = pre_vals.values;
  let unitsText = pre_vals.units;

  if (basedOn === 'level') {
    values = numberExpandOnLevel(pre);
    unitsText = '';
  }
  if (post) {
    console.log(
      "[WARN] Replacing units '",
      unitsText,
      "' because of post ",
      post
    );
    unitsText = post;
  }
  const { user, unitsParsed: unitsParsed } =
    convertUnitsToUserAndUnits(unitsText);
  return {
    values,
    valuesRanged: undefined,
    valuesIsPercent: pre_vals.apply === '%' || undefined,
    // valuesIsBasedOnLevel: is_based_on_level || undefined,
    basedOn,
    user: user !== 'player' ? user : undefined,
    units: unitsParsed,
    unitsText: unitsText,
    pre,
    post,
    children: sub_ratios.length > 0 ? sub_ratios : undefined,
  };
}
function level_to_ratio(fullText: string): {
  values: number | number[];
  apply: '%' | undefined;
  units: string;
} {
  console.log(`[TRACE] level_to_ratio("${fullText}")`);
  // Trim leading + sign and split at percent sign if possialbe.
  // '+ 80% AP' => [' 80', ' AP']
  const s = fullText.trim().replace(/^\+/, '').split('%', 2);
  const leveling = s[0];
  let apply: '%' | undefined = undefined;
  let units: string = '';

  // IF text is like '70 / 80 / 90% AP' => ['70 / 80 / 90', 'AP']
  if (s.length === 2) {
    apply = '%';
    units = s[1] || '';
  }
  // if (fullText === 'based on level') return { values: -1, units: leveling, utype: 'internal' };
  // if (leveling.trim() === "0.5 +  0.175") return { values: [0.5, 0.675], units: "with_infinity_edge", utype: 'internal' };
  // if (fullText === "+ Siphoning Strike stacks") return { values: [1], units: "Siphoning Strike stacks", utype: 'internal' };

  let fail_count = 0;
  const arr = leveling.split(/[/−]/).map((x: string) => {
    let n = Number(x);
    if (Number.isFinite(n)) return n;
    // Split at the ' ' and tryif that works
    const split = x.trim().split(/ (.*)/);
    n = Number(split[0]);
    if (Number.isFinite(n)) {
      units = units + split[1] || '';
      console.log(
        `[INFO] Stat leveling split '${leveling}' needed to split value: '${x}' into: [${split}] n=${n} units="${units}"`
      );

      return n;
    }
    const justNumber = /([0-9])/.exec(x);
    if (justNumber) {
      n = Number(justNumber[0]);
      if (Number.isFinite(n)) {
        units = units + split[1] || '';
        console.log(
          `[INFO] Stat leveling  '${leveling}' needed to justNumber value: '${x}' into: [${split}] n=${n} units="${units}"`
        );

        return n;
      }
    }
    console.log(
      `[WARN] Stat leveling '${leveling}' has failed (${fail_count})`
    );

    return fail_count++;
  });

  if (fail_count > 0) units = leveling;

  return {
    values: arr.length > 1 ? arr : arr[0],
    apply,
    units: units.trim(),
  };
}

const validEffectTypes: Dictionary<EffectType> = {
  heal: 'Heal',
  shield: 'Shield',
  stack: 'Stacks',
  gain: 'Gain',
  grant: 'Gain',
  damage: 'Damage',
  unique: 'Unique',
  magic: 'Damage',
  physical: 'Damage',
  ad: 'Damage',
  ap: 'Damage',
  true: 'Damage',
};

const validDamageTypes: Dictionary<DamageType> = {
  physical: 'Physical',
  magic: 'Magic',
  true: 'True',
  none: 'None',
};
const validHealTypes: Dictionary<HealType> = {
  regen: 'HealthRegen',
  omnivamp: 'Omnivamp',
  physical: 'PhysicalVamp',
  incoming: 'IncomingHeals',
  outgoing: 'OutgoingHeals',
  target: 'OutgoingHeals',
  bonus: 'BonusHealth',
  health: 'BonusHealth',
  self: 'SelfHeal',
  spell: 'SpellVamp',
  drain: 'DrainEffect',
  life: 'LifeSteal',
  steal: 'LifeSteal',
  heal: 'DrainEffect',
};
const validShieldTypes: Dictionary<ShieldType> = {
  self: 'SelfShield',
  incoming: 'IncomingShields',
  outgoing: 'OutgoingShields',
  target: 'OutgoingShields',
};

export const validBaseBonusTotalStats: Dictionary<BBT_Units> = {
  ad: 'ad',
  attack: 'ad',
  mana: 'mana',
  movespeed: 'movespeed',
  armor: 'armor',
  mr: 'mr',
  'magic res': 'mr',
  attackrange: 'attackrange',
  'attack range': 'attackrange',
  'health regen': 'hpregen',
  'mana regen': 'manaregen',
  'energy regen': 'manaregen',
  'critical strike chance': 'critchance',
  'critical strike damage': 'critdamage',
  health: 'hp',
  hp: 'hp',
};
const validBasicStats: Dictionary<Stat> = {
  tenacity: 'tenacity',
  spellvamp: 'spellvamp',
  'spell vamp': 'spellvamp',
  lifesteal: 'lifesteal',
  'life steal': 'lifesteal',
  omnivamp: 'omnivamp',
  pysicalvamp: 'pysicalvamp',
  'pysical vamp': 'pysicalvamp',
  'legend stack': 'legendStacks',
  'bounty hunter stack': 'bountyHunterStacks',
  soul: 'darkHarvestStacks',
  'slow resist': 'slow_resist',
  ap: 'total_ap',
  gold: 'gold',
  mark: 'kindredMarks',
  'siphoning strike': 'siphoningStrikeStacks',
  feast: 'feastStacks',
  stack: 'genericStacks',
};
