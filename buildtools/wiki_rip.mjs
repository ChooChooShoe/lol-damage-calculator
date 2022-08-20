import fs from 'fs';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import { fetch_mod_data, saveFile } from './fetch_utils.mjs';
import parenthesis from 'parenthesis';

// TODO rcp-fe-lol-champion-statistics
// https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champion-statistics/global/default/rcp-fe-lol-champion-statistics.js

const DEBUG = false;

console.log('Hello');

fs.mkdirSync('./public/api/champion/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

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
function table_check(table, text, fallback) {
  for (const key in table) if (text.indexOf(key) > -1) return table[key];
  return fallback;
}

const known_stats = ["base_hp", "bonus_hp", "maximum_hp", "missing_hp", "current_hp", "total_shield", "total_ap", "base_attackspeed", "bonus_attackspeed", "total_attackspeed", "base_ad", "bonus_ad", "total_ad", "base_mana", "bonus_mana", "total_mana", "base_movespeed", "bonus_movespeed", "total_movespeed", "base_armor", "bonus_armor", "total_armor", "base_mr", "bonus_mr", "total_mr", "base_attackrange", "bonus_attackrange", "total_attackrange", "base_hpregen", "bonus_hpregen", "total_hpregen", "base_manaregen", "bonus_manaregen", "total_manaregen", "base_critchance", "bonus_critchance", "total_critchance", "base_critdamage", "bonus_critdamage", "total_critdamage",];
function ratio_to_player_stat(stat) {
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
    realms = json;
    console.log("Using ddragon version:", json.v);

    saveFile(`./src/api/version.json`, {
      v: json.v,
      dv: json.v.replace(/\.1$/, ""),
      l: json.l,
      cdn: json.cdn,
    });
    return fetch_mod_data();
  }).then(ModuleChampionData => makeChampionList(ModuleChampionData));
}
async function makeChampionList(ModuleChampionData) {
  let ChampionList = {};
  let SkillList = {};
  let promises = []
  // const ChampionModule = await fetch_mod_data();
  for (const [champ, data] of Object.entries(ModuleChampionData)) {
    if (data.date === 'Upcoming') continue;

    ChampionList[champ] = { name: champ, image: null };
    Object.assign(ChampionList[champ], data)
    promises.push(fetch_live_wiki_skills(champ).then(async (skills_model) => {
      SkillList[champ] = skills_model;
      const riot = await fetch_ddragon(data.apiname);
      Object.assign(ChampionList[champ], mergeModels(skills_model, riot))
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

function mergeModels(skills, riot) {
  if (!riot) return {};

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
  for (const [skillkey, skill] of Object.entries(skills.skills)) {
    // for skills like q1 q2
    let key = skillkey.charAt(0);
    skill.maxrank = data.spell_maxranks[key];
    skill.image = data.spell_images[key];
  }
  return { image: riot.image };
}

async function fetch_ddragon(champ_id) {
  // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion/Aatrox.json
  const url = `${realms.cdn}/${realms.v}/data/${realms.l}/champion/${champ_id}.json`;
  console.log('Fetching (ddragon)', url)
  return fetch(url).then((response) => {
    if (response.ok) return response.json();
    console.error(url, "url is invalid")
    // TODO fix GnarBig
    return null;
  }).then(json => (json && json.data) ? json.data[Object.keys(json.data)[0]] : null)
}

function levelingToArray(leveling) {
  if (!leveling) return [];
  return leveling.split('/').map(x => Number(x.trim()) || x.trim());
}
function arrOrNum(arr) {
  if (arr.length === 1) return arr[0];
  return arr;
}
/**
 * Fetches in a live wiki page for some data
 * https://leagueoflegends.fandom.com/wiki/Ezreal/LoL
 * @param {string} champ_name 
 * @returns string
 */
export async function fetch_live_wiki_skills(champ_name) {
  const url = `https://leagueoflegends.fandom.com/wiki/${champ_name.trim().replace(/ /g, '_')}/LoL`
  const response = await fetch(url);
  const dom = new JSDOM(await response.text())
  const document = dom.window.document;
  //[...document.querySelectorAll('.tabber')[1].children].slice(2)[1].querySelectorAll('aside')

  const skill_name_counts = {};

  let all_skills_div = [...document.querySelectorAll(`.skill`)].flatMap(div => {
    const skill_name = div.className.replaceAll(/skill/g, '').replaceAll(/[_\s]/g, '')
    const infoTabs = [...div.nextElementSibling.nextElementSibling.querySelector('.tabber').children].slice(2);
    const subs = div.querySelectorAll('.ability-info-container');
    const header_aside = div.querySelectorAll('aside');

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
      return { skill_name, skill_idx, div: subspell, header_aside: header_aside.item(idx), infobox: infoTabs[idx].querySelector('aside') }
    });
  });
  let skills = {};
  for (const { skill_name, skill_idx, div, header_aside, infobox } of all_skills_div) {
    if (!div) continue;
    // Rename first name if multiple
    const name = skill_name_counts[skill_name] > 1 ? `${skill_name}${skill_idx}` : skill_name;
    skills[name] = {};

    let header = div.querySelector('.champion-ability__header');
    skills[name].display_name = header.querySelector('h3').textContent;

    for (const child of header_aside.children) {
      let z = child.getAttribute('data-source');
      let key = z.replaceAll(/ /g, '_');
      skills[name][key] = arrOrNum(levelingToArray(child.querySelector('div')));
    }
    // Not found on page _Data required.
    // model.skill[name].cooldown_tooltip = null; 
    skills[name].targeting = infobox?.querySelector(`div[data-source="targeting"]`)?.querySelector(`a`)?.textContent;
    skills[name].affects = infobox?.querySelector(`div[data-source="affects"]`)?.textContent;
    skills[name].damagetype = infobox?.querySelector(`div[data-source="damagetype"]`)?.textContent;
    skills[name].spelleffects = infobox?.querySelector(`div[data-source="spelleffects"]`)?.textContent;
    skills[name].spellshield = infobox?.querySelector(`div[data-source="spellshield"]`)?.textContent;
    skills[name].projectile = infobox?.querySelector(`div[data-source="projectile"]`)?.textContent;
    skills[name].grounded = infobox?.querySelector(`div[data-source="grounded"]`)?.textContent;
    skills[name].knockdown = infobox?.querySelector(`div[data-source="knockdown"]`)?.textContent;
    // model.skill[name].notes = null; 

    skills[name].img = [...div.querySelectorAll('img')].map(x => x.outerHTML).map((s) => {
      if (s.includes('/revision')) return s.split('/revision')[0];
      return s;
    });
    skills[name].description = [...div.querySelectorAll('p')].map(x => x.innerHTML);

    skills[name].leveling = [...div.querySelectorAll('.skill_leveling')]
      .map(x => [x.querySelectorAll('dt'), x.querySelectorAll('dd')])
      .flatMap((leveling, levelingidx) => {
        const dt_list = [...leveling[0]].map(x => x.textContent);
        const dd_list = [...leveling[1]].map(x => x.textContent);
        let ret = [];
        for (const idx in dt_list) {
          let fulltext = dd_list[idx];
          // let ratios = fulltext.split(/[\(\)+]+/).filter(x => x.trim() !== '');
          let root = parenthesis.parse(fulltext);
          let ratio_root = { name: dt_list[idx], raw: fulltext };
          ret.push(Object.assign(ratio_root, makeRatioObj(root)));
        }
        return ret;
      });
  }
  return { skills };
}

function makeRatioObj(root) {
  const ratio_obj = [];
  const sub_ratios = [];
  let fulltext = "";

  for (const [idx, ratio] of Object.entries(root)) {
    if (Array.isArray(ratio)) {
      sub_ratios.push(makeRatioObj(ratio))
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
  let values = arrOrNum(levelingToArray(s[0]));
  let stat_raw = s.slice(1, s.length).join('%');

  const per = stat_raw.includes('per');
  const per_100 = stat_raw.includes('100');
  const is_text = typeof values === 'string';
  const apply = is_text ? 'text' : (per && per_100) ? 'per100' : per ? "per" : ispercent ? 'percent' : "flat";
  const user = apply === "flat" ? undefined : stat_raw.indexOf("target") > -1 ? "target" : "player";

  let stat = ratio_to_player_stat(stat_raw);
  return { values, user, stat, apply, stat_raw: fulltext, sub_ratios: sub_ratios.length === 0 ? undefined : sub_ratios };
}