import fs from 'fs';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import { fetch_mod_data, saveFile } from './fetch_utils.mjs';
import parenthesis from 'parenthesis';


const DEBUG = true;

console.log('Hello');

fs.mkdirSync('./public/api/champion/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

const keyword_to_player_stat = {
  ap: "ap",
  ad: "ad",
  attack: "ad",
  armor: "armor",
  mr: "mr",
  health: "hp",
  hp: "hp",
  mana: "mana",
  ability: "ap",
};
const keyword_to_type = {
  maximum: "maximum",
  missing: "missing",
  total: "total",
  bonus: "bonus",
  base: "base",
};
function table_check(table, text, fallback) {
  for (const key in table) if (text.indexOf(key) > -1) return table[key];
  return fallback;
}

function ratio_to_player_stat(stat) {
  stat = stat.toLowerCase();
  const player_stat = table_check(keyword_to_player_stat, stat, "default");
  const type = table_check(keyword_to_type, stat, "total");
  return `${type}_${player_stat}`;
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
  let promises = []
  // const ChampionModule = await fetch_mod_data();
  for (const [champ, data] of Object.entries(ModuleChampionData)) {
    ChampionList[champ] = { name: champ, image: null, maxtrank: 0 };
    Object.assign(ChampionList[champ], data)
    promises.push(fetch_live_wiki(champ).then(async (model) => {
      const riot = await fetch_ddragon(data.apiname);
      Object.assign(ChampionList[champ], mergeModels(model, riot))
    }).catch(e => console.log(e)));
  }
  console.log("Awaiting all Promises");
  await Promise.all(promises);
  if (DEBUG) saveFile('./src/api/ChampionListComplete_DEBUG.json', ChampionList);
  else saveFile('./src/api/ChampionListComplete.json', ChampionList);
  console.log("Goodbye");
}

function mergeModels(model, riot) {
  if (!riot) return model;
  if (!model) return model;

  model.image = riot.image;
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
  for (const [skillkey, skill] of Object.entries(model.skills)) {
    // for skills like q1 q2
    let key = skillkey.charAt(0);
    skill.maxrank = data.spell_maxranks[key];
    skill.image = data.spell_images[key];
  }
  return model;
}

function fetch_ddragon(champ_id) {
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
  return leveling.split('/').map(x => Number(x.trim()) || x);
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
export async function fetch_live_wiki(champ_name) {
  const url = `https://leagueoflegends.fandom.com/wiki/${champ_name.trim().replace(/ /g, '_')}/LoL`
  const response = await fetch(url);
  const dom = new JSDOM(await response.text())
  const document = dom.window.document;

  let all_skills_div = ['i', 'q', 'w', 'e', 'r'].flatMap(key => {
    const div = document.querySelector(`.skill_${key === 'i' ? 'innate' : key}`);
    if (!div) {
      console.log("skill missing div for", champ_name, key);
      return [];
    }
    const infobox = div.nextElementSibling.nextElementSibling.querySelectorAll('.portable-infobox');
    const subs = div.querySelectorAll('.ability-info-container');

    if (subs.length > infobox.length)
      console.log("[WARN] Spell", champ_name, key, "has uneven divs and infoboxes lengths", subs.length, infobox.length)

    return Object.entries(subs).map(([idx, subspell]) => {
      // if no sub skills. name is just key
      const name = subs.length === 1 ? key : `${key}${+idx + 1}`
      return { name, div: subspell, infobox: infobox[idx] }
    });
  });
  let skills = {};
  for (const { name, div, infobox } of all_skills_div) {
    if (!div) continue;
    skills[name] = { name };

    let header = div.querySelector('.champion-ability__header');
    skills[name].display_name = header.querySelector('h3').textContent;
    skills[name].headerraw = header.textContent;
    let headvals = header.textContent.trim().split(/[\n\t]+/);
    headvals[0] = "header_name";
    for (let i = 0; i < headvals.length; i += 2) {
      let key = headvals[i + 0].replace(' ', '_').replace(':', '').toLowerCase();
      skills[name][key] = arrOrNum(levelingToArray(headvals[i + 1]));
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

    skills[name].img = [...div.querySelectorAll('img')].map(x => x.outerHTML);
    skills[name].desciption = [...div.querySelectorAll('p')].map(x => x.outerHTML);

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
  let values = levelingToArray(s[0]);
  let stat_raw = s.slice(1, s.length).join('%');

  const per = stat_raw.includes('per');
  const apply = per ? "per100" : ispercent ? 'percent' : "flat";
  const user = apply === "flat" ? undefined : stat_raw.indexOf("target") > -1 ? "target" : "player";
  let stat = "base";
  // if has a perscent...
  if (stat_raw) {
    values = values.map(x => x / 100);
    stat = ratio_to_player_stat(stat_raw);
  }
  return { values: arrOrNum(values), user, stat, apply, stat_raw: fulltext, sub_ratios: sub_ratios.length === 0 ? undefined : sub_ratios };
}