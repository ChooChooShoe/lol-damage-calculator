import fs from 'fs';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import { fetch_mod_data, saveFile } from './fetch_utils.mjs';
import parenthesis from 'parenthesis';
import { Image, RootRatio, ScaleValue, SubRatio } from "../src/api/DataTypes";

// TODO rcp-fe-lol-champion-statistics
// https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champion-statistics/global/default/rcp-fe-lol-champion-statistics.js

const DEBUG = false;

console.log('Hello');

// fs.mkdirSync('./public/api/champion/', { recursive: true }, (err: { code: string; }) => { if (err && err.code !== 'EEXIST') console.info(err); })

const keyword_to_player_stat = {
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

  if (!(x in known_stats)) console.log("[WARN] Stat is not known", x, 'for', stat);
  return x;
}

let realms = { v: "", l: "en_US", cdn: "https://ddragon.leagueoflegends.com/cdn" }

if (DEBUG) {
  realms.v = "12.11.1";
  await makeChampionList({ "Gwen": { apiname: "Gwen" } })
} else {
  const realms_url = "https://ddragon.leagueoflegends.com/realms/na.json";
  await fetch(realms_url).then(res => res.json()).then(json => {
    realms = json as typeof realms;
    console.log("Using ddragon version:", realms.v);

    saveFile(`./src/api/version.json`, {
      v: realms.v,
      dv: realms.v.replace(/\.1$/, ""),
      l: realms.l,
      cdn: realms.cdn,
    });
    return fetch_mod_data();
  }).then(ModuleChampionData => makeChampionList(ModuleChampionData));
}
async function makeChampionList(ModuleChampionData: { [s: string]: { [s: string]: any; }; }) {
  let ChampionList = {};
  let SkillList = {};
  let promises: Array<Promise<void>> = []
  // const ChampionModule = await fetch_mod_data();
  for (const [champ, champlist_model] of Object.entries(ModuleChampionData)) {
    if (champlist_model.date === 'Upcoming') continue;

    ChampionList[champ] = { name: champ, image: null };
    Object.assign(ChampionList[champ], champlist_model)
    promises.push(fetch_live_wiki_skills(champ).then(async (live_model) => {
      SkillList[champ] = live_model;
      const riot = await fetch_ddragon(champlist_model.apiname);
      Object.assign(ChampionList[champ], mergeModels(live_model, riot as NeededRiotValues))
    }).catch(e => console.log(e)));
  }
  console.log("Awaiting all Promises");
  await Promise.all(promises);
  if (DEBUG) saveFile('./src/api/ChampionListComplete_DEBUG.json', ChampionList);
  else {
    saveFile('./src/api/ChampionListSkills.json', SkillList)
    saveFile('./src/api/ChampionList.json', ChampionList)
  };
  console.log("Goodbye");
}
interface NeededRiotValues {
  image: Image;
  passive: { image: Image; };
  spells: { image: Image; maxrank: number; }[];
}

function mergeModels(skills_model: LiveWikiModel, riot: NeededRiotValues): { image: Image; } {

  // Default Image so all champs have one.
  if (!riot) return { image: { full: "Aatrox.png", sprite: "champion0.png", group: "champion", x: 0, y: 0, w: 48, h: 48 } }

  const data = {
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
  for (const [skillkey, skill] of Object.entries(skills_model.skills)) {
    // for skills like q1 q2 and innate
    let key = skillkey.charAt(0);
    const wiki_maxrank = Array.isArray(skill.leveling[0]?.values) ? skill.leveling[0].values.length : undefined;
    if (wiki_maxrank !== data.spell_maxranks[key])
      console.log('[WARN] Spell maxrank missmatch wikis', wiki_maxrank, 'not the same as riots', data.spell_maxranks[key]);
    skill.maxrank = data.spell_maxranks[key];
    skill.image = data.spell_images[key];
  }
  return { image: riot.image };
}

async function fetch_ddragon(champ_id: string): Promise<{ [s: string]: any }> {
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

/**
 * Fetches in a live wiki page for some data
 * https://leagueoflegends.fandom.com/wiki/Ezreal/LoL
 * @param {string} champ_name 
 * @returns string
 */
export async function fetch_live_wiki_skills(champ_name: string): Promise<LiveWikiModel> {
  const url = `https://leagueoflegends.fandom.com/wiki/${champ_name.trim().replace(/ /g, '_')}/LoL`
  const response = await fetch(url);
  const dom = new JSDOM(await response.text())
  const document = dom.window.document;
  //[...document.querySelectorAll('.tabber')[1].children].slice(2)[1].querySelectorAll('aside')

  const skill_name_counts: { [s: string]: number } = {};

  let all_skills_div = [...document.querySelectorAll(`.skill`)].flatMap(div => {
    const skill_name = div.className.replace(/skill/g, '').replace(/[_\s]/g, '')
    const infoTabs = [...div.nextElementSibling?.nextElementSibling?.querySelector('.tabber')?.children || []].slice(2);
    const subs = div.querySelectorAll('.ability-info-container');
    const header_aside = [...div.querySelectorAll('aside')];

    if (subs.length > infoTabs.length)
      console.log("[WARN] Spell", champ_name, div, "has uneven divs and infoboxes lengths", subs.length, infoTabs.length)

    return Object.entries(subs).map(([idx, subspell]) => {
      let skill_idx = 1;
      if (skill_name in skill_name_counts) {
        skill_name_counts[skill_name]++;
        skill_idx = skill_name_counts[skill_name];
      } else {
        skill_name_counts[skill_name] = 1;
      }
      return { skill_name, skill_idx, div: subspell, header_aside: header_aside[idx], infobox: infoTabs[idx].querySelector('aside') }
    });
  });
  let skills: { [key: string]: SkillObj } = {};
  for (const { skill_name, skill_idx, div, header_aside, infobox } of all_skills_div) {
    if (!div) continue;
    // Rename first name if multiple
    const name = skill_name_counts[skill_name] > 1 ? `${skill_name}${skill_idx}` : skill_name;
    skills[name] = new SkillObj(name, div, header_aside, infobox);
  }
  return { skills };
}

interface LiveWikiModel {
  skills: { [key: string]: SkillObj }

}

class SkillObj {
  name: string;
  display_name: string;
  maxrank: number | undefined = undefined;
  image: Image | undefined = undefined;
  targeting: string | undefined;
  affects: string | undefined;
  damagetype: string | undefined;
  spelleffects: string | undefined;
  spellshield: 'Blocked' | "Not Blocked" | "See Notes" | "Missing";
  projectile: string | undefined;
  grounded: string | undefined;
  knockdown: string | undefined;
  img: string[];
  desciption: string[];
  leveling: RootRatio[];

  constructor(name: string, div: Element, header_aside: Element, infobox: Element) {
    this.name = name;
    let header = div.querySelector('.champion-ability__header');
    this.display_name = header?.querySelector('h3')?.textContent || "";

    for (const child of header_aside.children) {
      let key = child.getAttribute('data-source')?.replace(/ /g, '_') || "x";
      this[key] = levelingToVal(child.querySelector('div')?.textContent);
    }
    // Not found on page _Data required.
    // model.skill[name].cooldown_tooltip = null; 
    this.targeting = infobox?.querySelector(`div[data-source="targeting"]`)?.querySelector(`a`)?.textContent || undefined;
    this.affects = infobox?.querySelector(`div[data-source="affects"]`)?.textContent || undefined;
    this.damagetype = infobox?.querySelector(`div[data-source="damagetype"]`)?.textContent || undefined;
    this.spelleffects = infobox?.querySelector(`div[data-source="spelleffects"]`)?.textContent || undefined;
    this.spellshield = infobox?.querySelector(`div[data-source="spellshield"]`)?.textContent as typeof SkillObj.prototype.spellshield || "Missing";
    this.projectile = infobox?.querySelector(`div[data-source="projectile"]`)?.textContent || undefined;
    this.grounded = infobox?.querySelector(`div[data-source="grounded"]`)?.textContent || undefined;
    this.knockdown = infobox?.querySelector(`div[data-source="knockdown"]`)?.textContent || undefined;
    // model.skill[name].notes = null; 

    this.img = [...div.querySelectorAll('img')].map(x => x.outerHTML).map((s) => {
      if (s.includes('/revision')) return s.split('/revision')[0];
      return s;
    });
    this.desciption = [...div.querySelectorAll('p')].map(x => x.innerHTML);

    this.leveling = [...div.querySelectorAll('.skill_leveling')]
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
  return { values, user, stat, apply, stat_raw: fulltext, sub_ratios: sub_ratios.length === 0 ? undefined : sub_ratios };
}