import { type Image } from '@/api/DataTypes';
import fetch, { type RequestInfo } from 'node-fetch';
import { JSDOM } from 'jsdom';
import JSON5 from 'json5';
import { saveFile } from './fetch_utils';
import { BaseStatsObj } from '@/api/ChampObjStats';
import { fix_wiki_img } from './live_wiki_fetch';

export type Version = string;
export type Key = string;
export type Id = string;

/**
 * Fetches in a wiki data page and returns the textarea content as json object.
 * @param {RequestInfo} url
 * @returns string
 */
export async function fetchWiki(url: RequestInfo): Promise<string> {
  console.log('Fetching (wiki):', url);
  const response = await fetch(url);
  if (response.redirected)
    console.info(`[WARN] Page redirected from ${url} to ${response.url}`);

  const dom = new JSDOM(await response.text());
  const text = dom.window.document.querySelector('pre.mw-code.mw-script');
  if (text) return text.textContent || '';
  console.info(`[ERROR] Page had no content from ${response.url}`);
  return '';
}

const DEBUG = true;
export type ModuleChampionDataFile = Record<string, ModuleChampionData>;
export async function fetch_Module_ChampionData(): Promise<ModuleChampionDataFile> {
  const raw = await fetchWiki(
    `https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data`
  );

  const x = moduleToJSON<ModuleChampionDataFile>(raw);

  if (DEBUG) {
    await saveFile('./.debug/Module_ChampionData.json', x);
  }
  return x;
}

export function moduleToJSON<T>(text: string): T {
  // Converts Lua data to json data.
  const results: string[] = [];
  for (const line of text.split('\n')) {
    const tline = line.trim();
    if (tline === '' || tline.startsWith('--')) continue;
    if (tline.startsWith('return')) {
      results.push('{');
      continue;
    }
    results.push(
      tline
        //replaces [" and "] with "
        .replace(/\["|"]/g, `"`)
        //replaces = with :
        .replace(/=/g, `:`)
        //replaces [1] : with nothing if line has a { or is after a ', '
        .replace(/, \[\d] : /g, `, `)
        .replace(/{\[\d] : /g, `{`)
        //replaces { and } with [ and ] only if line has both
        .replace(/{(.*)}/g, `[$1]`)
        //replaces [12] : with "12" :
        .replace(/\[(\d+)] : /g, `"$1" : `)
        //replaces -- with //
        .replace(/--/g, '//')
    );
  }
  // return parsed JSON as a javascript object.
  return JSON5.parse(results.join(''));
}

export interface ModuleChampionData {
  //   '1': string; // champion name (must be unique)
  id: number; // champion's ID within the api
  apiname: string; // champion's name within the api
  title: string; // champion's title
  attack: number; // archaic client rating from 0 to 10
  defense: number; // archaic client rating from 0 to 10
  magic: number; // archaic client rating from 0 to 10
  herotype: string; // archaic primary role
  alttype?: string; // archaic secondary role
  resource: string; // champion's resource
  stats: Partial<BaseStatsObj>;
  rangetype: string; // Melee or Ranged
  date: string; // release date
  patch: string; // release patch ID (e.g. V4.20)
  changes: string; // patch ID of last changes
  role: string[];
  positions: string[]; // client position information (values updated each patch; last updated: V10.16)
  op_positions: string[]; // op.gg position information (values updated in real time; last updated: 5-Aug)
  damage: number; // champion's damage rating from 1 to 3
  toughness: number; // champion's toughness rating from 1 to 3
  control: number; // champion's control rating from 1 to 3
  mobility: number; // champion's mobility rating from 1 to 3
  utility: number; // champion's utility rating from 1 to 3
  difficulty: number; // champion's difficulty rating from 0 to 3
  style: number; // champion's damage style from 0 to 100 (0 = basic attacks; 100 = abilities)
  adaptivetype: string; // champion's adaptive force type
  be: number; // champion's Blue Essence cost
  rp: number; // champion's RP cost
  skill_i: string[];
  skill_q: string[];
  skill_w: string[];
  skill_e: string[];
  skill_r: string[];
  skills: string[];
  fullname?: string;
  nickname?: string;
  secondary_attributes?: string;
}

export async function fetchTemplateChampionSkillData(
  champ_name: string,
  skill_name: string
): Promise<TemplateChampionSkillData | null> {
  champ_name = cleanName(champ_name);
  skill_name = cleanName(skill_name);
  const url = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champ_name}/${skill_name}`;
  const response = await fetch(url);
  const dom = new JSDOM(await response.text());
  const document = dom.window.document;
  const inputs = document
    .querySelector('table.article-table.grid')
    ?.querySelectorAll<HTMLElement>('td.te-input');

  if (!inputs) {
    console.log(`[ERROR] Champ ${champ_name}'s ${skill_name} has no Wiki data`);
    return null;
  }

  const map = {};
  for (const r of inputs) {
    fix_wiki_img(r);
    const key = r.dataset.name!.replaceAll(/ /g, '_');
    const val = r;
    if (val) map[key] = val;
  }
  // Does not teset for type just assums that all the values there.
  return map as TemplateChampionSkillData;
}

if (DEBUG) {
  const q = await fetchTemplateChampionSkillData('Qiyana', 'Edge_of_Ixtal');
  console.log(q);
  console.log(q?.[1]);
}

export interface TemplateChampionSkillData {
  '1': HTMLElement; // Necessary: Used for identification.
  disp_name: HTMLElement; // Name of the ability Only necessary if the value differs from Edge of Ixtal.
  champion: HTMLElement; // champion
  skill: HTMLElement; // skill
  range: HTMLElement; // range
  target_range: HTMLElement; // target range
  attack_range: HTMLElement; // attack range
  travel_distance: HTMLElement; // travel distance
  collision_radius: HTMLElement; // collision radius
  effect_radius: HTMLElement; // effect radius
  width: HTMLElement; // width
  angle: HTMLElement; // angle
  inner_radius: HTMLElement; // inner radius
  tether_radius: HTMLElement; // tether radius
  speed: HTMLElement; // speed
  cast_time: HTMLElement; // cast time
  cost: HTMLElement; // cost
  costtype: HTMLElement; // costtype
  static: HTMLElement; // static
  cooldown: HTMLElement; // cooldown
  ontargetcd: HTMLElement; // ontargetcd
  ontargetcdstatic: HTMLElement; // ontargetcdstatic
  recharge: HTMLElement; // recharge
  rechargestatic: HTMLElement; // rechargestatic
  customlabel: HTMLElement; // customlabel
  custominfo: HTMLElement; // custominfo
  icon: HTMLElement; // icon
  blurb: HTMLElement;
  blurb2: HTMLElement;
  blurb3: HTMLElement; // blurb3
  blurb4: HTMLElement; // blurb4
  description: HTMLElement;
  leveling: HTMLElement; // leveling
  icon2: HTMLElement; // icon2
  description2: HTMLElement; // description2
  leveling2: HTMLElement; // leveling2
  icon3: HTMLElement; // icon3
  description3: HTMLElement; // description3
  leveling3: HTMLElement; // leveling3
  icon4: HTMLElement; // icon4
  description4: HTMLElement; // description4
  leveling4: HTMLElement; // leveling4
  icon5: HTMLElement; // icon5
  description5: HTMLElement; // description5
  leveling5: HTMLElement; // leveling5
  targeting: HTMLElement; // Permafrost is a single target ability.
  affects: HTMLElement; // Permafrost affects enemy champions and large monsters
  damagetype: HTMLElement; // Permafrost deals magic damage.
  spelleffects: HTMLElement; // spelleffects
  onhiteffects: HTMLElement; // onhiteffects can be set to 'true', for abilities that apply on-hit effects (from items or other abilities)
  occurrence: HTMLElement; // occurrence can either be set to 'hit' or 'attack', and refers to on-hit effects
  spellshield: HTMLElement; // spellshield can either be set to true, or written with a custom description.
  projectile: HTMLElement; // true
  callforhelp: HTMLElement; // callforhelp determines whether minion aggro will transfer to the caster
  additional: HTMLElement; // Displays additional information in a smaller window below the template.
  notes: HTMLElement; // notes
  flavorsound: HTMLElement; // For abilities where the SFX/quote is an important part of the gameplay - e.g. Kled or Sion ulting.
  video: HTMLElement; // video
  video2: HTMLElement; // video 2
  yvideo: HTMLElement; // YouTube video
  yvideo2: HTMLElement; // YouTube video 2
  [key: string]: HTMLElement | undefined;
}

export function cleanName(string: string): string {
  return string.trim().replace(/ /g, '_');
}
