import parenthesis, { ArrayTree } from "parenthesis";
import { RootRatio, SubRatio } from "../src/api/DataTypes.js";
import { saveFile } from "./fetch_utils.js";

const DEBUG = false;

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
function table_check<T>(
  table: { [key: string]: T },
  search: string,
  fallback: T
): T {
  for (const key in table) if (search.includes(key)) return table[key];
  return fallback;
}

function units_to_user_and_stat(unit: string | undefined | null): {
  user: "none" | "player" | "target";
  stat: string;
} {
  if (!unit) return { user: "none", stat: "" };
  const tunit = unit.toLowerCase().trim();

  const player_stat = table_check(keyword_to_player_stat, tunit, tunit);
  let bbt: string;
  if (player_stat === "hp")
    bbt = table_check(keyword_to_type_ext, tunit, "total");
  else bbt = table_check(keyword_to_type, tunit, "total");
  let stat = `${bbt}_${player_stat}`;

  let user: "player" | "target" = tunit.includes("target")
    ? "target"
    : "player";
  return { user, stat };
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
export function makeRatioObj(root: ArrayTree): SubRatio {
  let pre_arr: any = [],
    sub_ratios: SubRatio[] = [],
    post_arr: any = [];
  let arr = pre_arr;
  let is_based_on_level = false;

  for (const [idx, ratio] of Object.entries(root)) {
    if (Array.isArray(ratio)) {
      let sub = makeRatioObj(ratio as parenthesis.ArrayTree);
      if (sub.units === "based on level") {
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
    console.log("[WARN] Replacing units '", units, "' becouse of post ", post);
    units = level_to_ratio(post).units;
  }
  const { user, stat } = units_to_user_and_stat(units);
  return {
    values,
    apply: apply || undefined,
    units,
    sub_ratios: sub_ratios.length > 0 ? sub_ratios : undefined,
    post: post,
    user,
    stat,
  };
}
function level_to_ratio(fulltext: string): {
  values: number | number[];
  apply: "%" | undefined;
  units: string;
} {
  let s = fulltext.trim().replace(/^\+/, "").split("%", 2);
  const leveling = s[0];
  let apply: "%" | undefined = undefined;
  let units: string = "";

  // IF text is like '70 / 80 / 90% AP' => ['70 / 80 / 90', 'AP']
  if (s.length === 2) {
    apply = "%";
    units = s[1] || "";
  }
  // if (fulltext === 'based on level') return { values: -1, units: leveling, utype: 'internal' };
  // if (leveling.trim() === "0.5 +  0.175") return { values: [0.5, 0.675], units: "with_infinity_edge", utype: 'internal' };
  // if (fulltext === "+ Siphoning Strike stacks") return { values: [1], units: "Siphoning Strike stacks", utype: 'internal' };

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
  const found = values.match(/([\d.]+) − ([\d.]+)/g);
  if (!found) return []
  const start = Number(found[0]);
  const end = Number(found[1]);
  const range = 18;
  const diff = (end - start) / (range - 1);
  for (let i = 0; i < range; i++) {
    const answer = +(start + diff * i);
    list.push(+answer.toFixed(2) || i);
  }
  return list;
}
