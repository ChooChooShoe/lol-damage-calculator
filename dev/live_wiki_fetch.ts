import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import parenthesis from 'parenthesis';
import { ChampionListSkills, Image, RootRatio, ScaleValue, SkillModel, SubRatio } from "../src/api/DataTypes.js";

// TODO rcp-fe-lol-champion-statistics
// https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champion-statistics/global/default/rcp-fe-lol-champion-statistics.js

const DEBUG = false;

console.log('Hello');

export const keyword_to_player_stat = {
  ap: "ap",
  ad: "ad",
  attack: "ad",
  armor: "armor",
  mr: "mr",
  'magic res': "mr",
  'critical strike chance': 'critical_strike_chance',
  'life steal': 'life_steal',
  health: "hp",
  hp: "hp",
  mana: "mana",
  ability: "ap",
  mark: "kindred_mark",
  stack: "feast_stack",
  nasus_stack: "stack",
};
const keyword_to_type = {
  maximum: "maximum",
  missing: "missing",
  lost: "missing",
  current: "current",
  total: "total",
  bonus: "bonus",
  base: "base",
};
function table_check(table: { [x: string]: any; ap?: string; ad?: string; attack?: string; armor?: string; mr?: string; "magic res"?: string; "critical strike chance"?: string; "life steal"?: string; health?: string; hp?: string; mana?: string; ability?: string; mark?: string; stack?: string; nasus_stack?: string; maximum?: string; missing?: string; lost?: string; current?: string; total?: string; bonus?: string; base?: string; }, text: string | string[], fallback: string) {
  for (const key in table) if (text.indexOf(key) > -1) return table[key];
  return fallback;
}

const known_stats = ["base_hp", "bonus_hp", "maximum_hp", "missing_hp", "current_hp", "total_shield", "total_ap", "base_attackspeed", "bonus_attackspeed", "total_attackspeed", "base_ad", "bonus_ad", "total_ad", "base_mana", "bonus_mana", "total_mana", "base_movespeed", "bonus_movespeed", "total_movespeed", "base_armor", "bonus_armor", "total_armor", "base_mr", "bonus_mr", "total_mr", "base_attackrange", "bonus_attackrange", "total_attackrange", "base_hpregen", "bonus_hpregen", "total_hpregen", "base_manaregen", "bonus_manaregen", "total_manaregen", "base_critchance", "bonus_critchance", "total_critchance", "base_critdamage", "bonus_critdamage", "total_critdamage",];
function ratio_to_player_stat(stat: string) {
  if (!stat) return "base";
  stat = stat.toLowerCase();
  const player_stat = table_check(keyword_to_player_stat, stat, "default");
  const type = table_check(keyword_to_type, stat, "total");
  let x = `${type}_${player_stat}`;

  if (!known_stats.includes(x)) console.log("[WARN] Stat is not known", x, 'for', stat);
  return x;
}

let realms = { v: "12.11.1", l: "en_US", cdn: "https://ddragon.leagueoflegends.com/cdn" }

// if (DEBUG) {
//   realms.v = "12.11.1";
//   await makeChampionList({ "Gwen": { apiname: "Gwen" } })
// } else {
//   const realms_url = "https://ddragon.leagueoflegends.com/realms/na.json";
//   await fetch(realms_url).then(res => res.json()).then(json => {
//     realms = json as typeof realms;
//     console.log("Using ddragon version:", realms.v);

//     saveFile(`./src/api/version.json`, {
//       v: realms.v,
//       dv: realms.v.replace(/\.1$/, ""),
//       l: realms.l,
//       cdn: realms.cdn,
//     });
//     return fetch_mod_data();
//   }).then(ModuleChampionData => makeChampionList(ModuleChampionData));
// }

export interface NeededRiotValues {
  image: Image;
  passive: { image: Image; };
  spells: { image: Image; maxrank: number; }[];
}

export async function fetch_ddragon(realms: { cdn: string; v: string; l: string; }, champ_id: string): Promise<{ [s: string]: any }> {
  // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion/Aatrox.json
  const url = `${realms.cdn}/${realms.v}/data/${realms.l}/champion/${champ_id}.json`;
  console.log('Fetching (ddragon)', url)
  return fetch(url).then((response) => {
    if (response.ok) return response.json();
    console.error(url, "url is invalid")
    // TODO fix GnarBig
    return null;
  }).then((json) => {
    const data = (json as any)?.data;
    if (data) return data[Object.keys(data)[0]]
    return {};
  })
}


function levelingToVal(leveling: string): ScaleValue;
function levelingToVal(leveling: string | null | undefined): ScaleValue | undefined;
function levelingToVal(leveling: string | null | undefined): ScaleValue | undefined {
  if (!leveling) return undefined;
  const arr = leveling.split('/').map((x: string) => Number(x.trim()) || x.trim());
  if (arr.length === 1) return arr[0];
  return arr;
}

const known_skill_names = {
  basic_attack: "A",
  skill_innate: "I",
  skill_q: "Q",
  skill_w: "W",
  skill_e: "E",
  skill_r: "R",
  skill_aphelios: "Aphelios",
}
/**
 * Fetches in a live wiki page for some data
 * https://leagueoflegends.fandom.com/wiki/Ezreal/LoL
 * @param {string} champ_name 
 * @returns string
 */
export async function fetch_live_wiki_skills(champ_name: string, riot: NeededRiotValues): Promise<ChampionListSkills> {
  const url = `https://leagueoflegends.fandom.com/wiki/${champ_name.trim().replace(/ /g, '_')}/LoL`
  const response = await fetch(url);
  const dom = new JSDOM(await response.text())
  const document = dom.window.document;
  //[...document.querySelectorAll('.tabber')[1].children].slice(2)[1].querySelectorAll('aside')

  const skill_name_counts: { [s: string]: number } = {};
  const skill_divs = document.querySelectorAll(`.skill`);
  const notes_divs = document.querySelectorAll('.skill ~ .tabbertab-bordered');

  if (skill_divs.length !== notes_divs.length)
    console.log("[WARN] Spell", champ_name, skill_divs, notes_divs, "has uneven divs and infoboxes lengths", skill_divs.length, notes_divs.length)


  const all_skills_div = Array.from(skill_divs, (div, idx) => {
    const skill_name = known_skill_names[div.classList[1] as keyof typeof known_skill_names] || 'X';
    //Finds main body for all sub skills.
    const subs = div.querySelectorAll('.ability-info-container');
    //Finds Details tab for all sub skills.
    const infoTabs = notes_divs[idx].children[0].querySelectorAll('aside')
    //Finds header info for all sub skills.
    const header_aside = div.querySelectorAll('aside');
    if (subs.length !== infoTabs.length || header_aside.length !== subs.length)
      console.log("[WARN] Sub-Spell", champ_name, "has uneven divs lengths", subs.length, infoTabs.length, header_aside.length)


    return Object.entries(subs).map(([idx, subspell]) => {
      let skill_idx = 1;
      if (skill_name in skill_name_counts) {
        skill_name_counts[skill_name]++;
        skill_idx = skill_name_counts[skill_name];
      } else {
        skill_name_counts[skill_name] = 1;
      }
      return { skill_name, skill_idx, main_div: subspell, header_aside: header_aside[idx], infobox: infoTabs[idx] }
    });
  }).flat(1);
  let skills: { [key: string]: SkillModel } = {};


  const riot_data = {
    spell_images: {
      i: riot.passive.image || {},
      q: riot.spells[0].image || {},
      w: riot.spells[1].image || {},
      e: riot.spells[2].image || {},
      r: riot.spells[3].image || {},
    },
    spell_maxranks: {
      i: undefined,
      q: riot.spells[0].maxrank || 5,
      w: riot.spells[1].maxrank || 5,
      e: riot.spells[2].maxrank || 5,
      r: riot.spells[3].maxrank || 3,
    }
  }

  for (const { skill_name, skill_idx, main_div, header_aside, infobox } of all_skills_div) {
    if (!main_div) continue;
    // Rename first name if multiple
    const name = skill_name_counts[skill_name] > 1 ? `${skill_name}${skill_idx}` : skill_name;
    skills[name] = new SkillObj(name, main_div, header_aside, infobox, riot_data);
  }
  return { skills };
}


class SkillObj {
  name: string;
  display_name: string;
  maxrank: number | undefined = undefined;
  image: Image | undefined = undefined;
  targeting: string | undefined;
  affects: string | undefined;
  damagetype: string;
  spelleffects: string | undefined;
  spellshield: 'Blocked' | "Not Blocked" | "See Notes" | "Missing";
  projectile: string | undefined;
  grounded: string | undefined;
  knockdown: string | undefined;
  // img: string[];
  desciption: string[];
  leveling: RootRatio[];

  constructor(name: string, main_div: Element, header_aside: Element, infobox: Element, riot: {
    spell_images: {
      i: Image;
      q: Image;
      w: Image;
      e: Image;
      r: Image;
    };
    spell_maxranks: {
      i: undefined;
      q: number;
      w: number;
      e: number;
      r: number;
    };
  }) {
    this.name = name;
    this.maxrank = riot.spell_maxranks[name.charAt(0).toLocaleLowerCase()];
    this.image = riot.spell_images[name.charAt(0).toLocaleLowerCase()];
    let header = main_div.querySelector('.champion-ability__header');
    this.display_name = header?.querySelector('h3')?.textContent || "";

    for (const child of header_aside.children) {
      let key = child.querySelector('[data-source]')?.getAttribute('data-source')?.replace(/ /g, '_') || "x";
      this[key] = levelingToVal(child.querySelector('div')?.textContent);
    }
    // Not found on page _Data required.
    // model.skill[name].cooldown_tooltip = null; 
    this.targeting = infobox?.querySelector(`div[data-source="targeting"]`)?.querySelector(`a`)?.textContent || undefined;
    this.affects = infobox?.querySelector(`div[data-source="affects"]`)?.textContent || undefined;
    this.damagetype = infobox?.querySelector(`div[data-source="damagetype"]`)?.textContent || "MissingDamage";
    this.spelleffects = infobox?.querySelector(`div[data-source="spelleffects"]`)?.textContent || undefined;
    this.spellshield = infobox?.querySelector(`div[data-source="spellshield"]`)?.textContent as typeof SkillObj.prototype.spellshield || "Missing";
    this.projectile = infobox?.querySelector(`div[data-source="projectile"]`)?.textContent || undefined;
    this.grounded = infobox?.querySelector(`div[data-source="grounded"]`)?.textContent || undefined;
    this.knockdown = infobox?.querySelector(`div[data-source="knockdown"]`)?.textContent || undefined;
    // model.skill[name].notes = null; 

    // this.img = [...main_div.querySelectorAll('img')].map(x => x.outerHTML).map((s) => {
    //   if (s.includes('/revision')) return s.split('/revision')[0];
    //   return s;
    // });
    this.desciption = [...main_div.querySelectorAll('p')].map(x => x.innerHTML);

    this.leveling = [...main_div.querySelectorAll('.skill_leveling')]
      .map(x => [x.querySelectorAll('dt'), x.querySelectorAll('dd')])
      .flatMap((leveling, _levelingidx) => {
        const dt_list = [...leveling[0]].map(x => x.textContent || "");
        const dd_list = [...leveling[1]].map(x => x.textContent || "");
        let ret: RootRatio[] = [];
        for (const idx in dt_list) {
          let fulltext = dd_list[idx];
          let root = parenthesis.parse(fulltext);
          let ratio_root = { name: dt_list[idx], raw: fulltext };
          ret.push(Object.assign(ratio_root, makeRatioObj(root)));
        }
        return ret;
      });
  }
}

function makeRatioObj(root: parenthesis.ArrayTree): SubRatio {
  const sub_ratios: SubRatio[] = [];
  let fulltext = "";

  for (const [idx, ratio] of Object.entries(root)) {
    if (Array.isArray(ratio)) {
      sub_ratios.push(makeRatioObj(ratio as parenthesis.ArrayTree))
      // fulltext = fulltext + "___";
      continue;
    }
    if (ratio.charAt(0) === ')') {
      // sub_ratios.push("CLOSE" + ratio)
      fulltext = fulltext + ratio;
      continue;
    }
    fulltext = fulltext + ratio;
  }
  //remove the () and + before.
  let s = fulltext.replace(/[()+]/g, '').split('%');
  let ispercent = s.length > 1;
  let values = levelingToVal(s[0]);
  let stat_raw = s.slice(1, s.length).join('%');

  const per = stat_raw.includes('per');
  const per_100 = stat_raw.includes('100');
  const is_text = typeof values === 'string';
  const apply = is_text ? 'text' : (per && per_100) ? 'per100' : per ? "per" : ispercent ? 'percent' : "flat";
  const user = apply === "flat" ? "none" : stat_raw.indexOf("target") > -1 ? "target" : "player";

  let stat = ratio_to_player_stat(stat_raw);
  console.log(`[INFO] Stat line ${fulltext} became { ${values}, ${user}, ${stat}, ${apply}, sub_ratios[${sub_ratios.length}] }`);

  return { values, user, stat, apply, stat_raw: fulltext, sub_ratios: sub_ratios.length === 0 ? undefined : sub_ratios };
}