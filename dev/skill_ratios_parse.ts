import { Dictionary } from "lodash";
import parenthesis, { ArrayTree } from "parenthesis";
import { DamageType, EffectType, RootRatio, SubRatio, ChampionStatUnits, ValidDamageType, ValidEffectType } from "../src/api/DataTypes.js";
import { Stat } from "../src/model/ChampObj.js";
import { saveFile } from "./fetch_utils.js";
import { list_check, matchKeyword, table_check } from "./mutate_untils.js";

const DEBUG = false;

const keyword_to_basic_stat: Dictionary<Stat> = {
  tenacity: "tenacity",
  lifesteal: "lifesteal",
  spellvamp: "spellvamp",
  omnivamp: "omnivamp",
  pysicalvamp: "pysicalvamp",
  "legend stack": "legendStacks",
  "bounty hunter stack": "bountyHunterStacks",
  "soul": "darkHarvestStacks",
  "slow resist": "slow_resist",
  "ap": "total_ap",
  "gold": "gold",
}
export const keyword_to_player_stat = {
  ap: "ap",
  ad: "ad",
  attack: "ad",
  armor: "armor",
  mr: "mr",
  "magic res": "mr",
  "critical strike chance": "critchance",
  "life steal": "life_steal",
  health: "hp",
  hp: "hp",
  mana: "mana",
  ability: "ap",
  mark: "kindred_mark",
  stack: "feast_stack",
  nasus_stack: "stack",
  percent: "percent",
};
const keyword_to_type = {
  total: "total",
  bonus: "bonus",
  base: "base",
};
const keyword_to_type_ext = {
  maximum: "maximum",
  missing: "missing",
  lost: "missing",
  current: "current",
  total: "total",
  bonus: "bonus",
  base: "base",
};

function convertUnitsToUserAndUnits(unit: string | undefined | null): {
  user: "none" | "player" | "target";
  unitsParsed: ChampionStatUnits;
} {
  if (!unit) return { user: "none", unitsParsed: "" };
  unit = unit.toLowerCase().trim();

  const basic_stat = matchKeyword(unit, keyword_to_basic_stat);
  if (basic_stat) {
    return { user: "player", unitsParsed: basic_stat };
  }

  const player_stat = table_check(unit, keyword_to_player_stat, unit);
  let bbt: string;
  if (player_stat === "hp")
    bbt = table_check(unit, keyword_to_type_ext, "total");
  else bbt = table_check(unit, keyword_to_type, "total");
  let unitsParsed = `${bbt}_${player_stat}`;

  let user: "player" | "target" = unit.includes("target")
    ? "target"
    : "player";
  return { user, unitsParsed: unitsParsed as Stat };
}

if (DEBUG) {
  const out_file: any = {};
  for (const fulltext of []) {
    const a = makeRatioObj(parenthesis.parse(fulltext));
    // if (a.sub?.length > 1)
    //   out_file[fulltext] = a;
    out_file[fulltext] = a;
    // const b = makeRatioObj(a);
    // debug_ratio(b, out_file);
  }
  saveFile("./.debug/makeRatioObj3.json", out_file);
  console.log("stop");
}

export function ratios_from_text(full_text: string): SubRatio {
  let root = parenthesis.parse(full_text);
  return makeRatioObj(root);
}

export function spellEffectFromDescription(name: string, desc: string): RootRatio {
  const nameSplit = desc.split(/:(.*)/s);
  const betterName = nameSplit[0] + ':';
  desc = nameSplit[1] || nameSplit[0];
  let damagetype: DamageType = table_check(desc, ValidDamageType, 'None');
  let effectType: EffectType | undefined = table_check(desc, ValidEffectType, 'Unique');
  let increasedStat = undefined;
  let tree_root = parenthesis.parse(desc);

  console.log(`[DEBUG] spellEffectFromDescription => betterName:${betterName} name:${name} desc:${desc}`)
  return Object.assign({
    name: betterName || name,
    raw: desc,
    damagetype,
    effectType,
    increasedStat,
  }, makeRatioObj(tree_root))
}
export function spellEffectFromStrings(name: string, raw: string): RootRatio {
  let damagetype: DamageType = table_check(name, ValidDamageType, 'None');
  let effectType: EffectType | undefined = table_check(name, ValidEffectType, 'Unique');
  let increasedStat = undefined;
  let tree_root = parenthesis.parse(raw);
  // console.log(`[DEBUG] spellEffectFromStrings => ${name}: ${raw}`)
  return Object.assign({
    name,
    raw,
    damagetype,
    effectType,
    increasedStat,
  }, makeRatioObj(tree_root))
}
export function makeRatioObj(root: ArrayTree): SubRatio {
  let pre_arr: any = [],
    sub_ratios: SubRatio[] = [],
    post_arr: any = [];
  let arr = pre_arr;
  let is_based_on_level = false;

  for (const [idx, ratio] of Object.entries(root)) {
    if (Array.isArray(ratio)) {
      let sub = makeRatioObj(ratio as parenthesis.ArrayTree);
      if (sub.post === "based on level") {
        // set flag, do not add as sub_ratio
        // Ex. 50 − 305 (based on level) (+ 80% bonus AD)
        is_based_on_level = true;
      } else {
        sub_ratios.push(sub);
      }
      arr = post_arr;
    } else {
      arr.push(ratio.replace(/[()]/g, "").trim());
    }
  }
  const pre: string = pre_arr.join("");
  const post_arr_min = post_arr.filter((x: string) => x !== "");
  const post: string | undefined = post_arr_min[0];
  if (post_arr_min.length > 1)
    console.log(
      "Effect has more then 1 post script",
      post_arr,
      "for ratio",
      root
    );
  const pre_vals = level_to_ratio(pre);

  let values = pre_vals.values;
  let apply: "%" | "based_on_level" | undefined = pre_vals.apply;
  let units = pre_vals.units;

  if (is_based_on_level) {
    values = numberExpandOnLevel(pre);
    apply = "based_on_level";
    units = "";
  }
  if (post) {
    console.log("[WARN] Replacing units '", units, "' because of post ", post);
    units = level_to_ratio(post).units;
  }
  const { user, unitsParsed: unitsParsed } = convertUnitsToUserAndUnits(units);
  return {
    values,
    valuesRanged: undefined,
    valuesIsPercent: apply === '%' || undefined,
    valuesIsBasedOnLevel: is_based_on_level || undefined,
    user,
    units: unitsParsed,
    pre,
    post,
    children: sub_ratios.length > 0 ? sub_ratios : undefined,
  };
}
function level_to_ratio(fullText: string): {
  values: number | number[];
  apply: "%" | undefined;
  units: string;
} {
  let s = fullText.trim().replace(/^\+/, "").split("%", 2);
  const leveling = s[0];
  let apply: "%" | undefined = undefined;
  let units: string = "";

  // IF text is like '70 / 80 / 90% AP' => ['70 / 80 / 90', 'AP']
  if (s.length === 2) {
    apply = "%";
    units = s[1] || "";
  }
  // if (fullText === 'based on level') return { values: -1, units: leveling, utype: 'internal' };
  // if (leveling.trim() === "0.5 +  0.175") return { values: [0.5, 0.675], units: "with_infinity_edge", utype: 'internal' };
  // if (fullText === "+ Siphoning Strike stacks") return { values: [1], units: "Siphoning Strike stacks", utype: 'internal' };

  let fail_count = 0;
  const arr = leveling.split(/[/−]/).map((x: string) => {
    let n = Number(x);
    if (Number.isFinite(n)) return n;
    // Split at the ' ' and tryif that works
    const split = x.trim().split(/ (.*)/);
    n = Number(split[0]);
    if (Number.isFinite(n)) {
      units = units + split[1] || "";
      console.log(
        `[INFO] Stat leveling split '${leveling}' needed to split value: '${x}' into: [${split}] n=${n} units="${units}"`
      );

      return n;
    }
    const justNumber = /([0-9])/.exec(x);
    if (justNumber) {
      n = Number(justNumber[0]);
      if (Number.isFinite(n)) {
        units = units + split[1] || "";
        console.log(`[INFO] Stat leveling  '${leveling}' needed to justNumber value: '${x}' into: [${split}] n=${n} units="${units}"`);

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

function numberExpandOnLevel(values: string): number[] {
  const list: number[] = [];
  //Ex. 'Damaging basic attacks and ability damage deal 10 − 45'
  const found = values.match(/([\d.]+) − ([\d.]+)/);
  if (!found) return []
  const start = Number(found[1]);
  const end = Number(found[2]);
  const range = 18;
  const diff = (end - start) / (range - 1);
  for (let i = 0; i < range; i++) {
    const answer = +(start + diff * i);
    list.push(+answer.toFixed(2) || i);
  }
  return list;
}
