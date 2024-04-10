// @ts-nocheck

import type {
  SkillData,
  Spellshield,
  SkillLevelingData,
  SkillDesciptionData,
  RootRatio,
} from '@/api/DataTypes';
import fetch, { type RequestInfo } from 'node-fetch';
import { JSDOM } from 'jsdom';
import JSON5 from 'json5';
import { saveFile, stackData } from './fetch_utils.js';
import type { BaseStatsObj } from '@/api/ChampObjStats';
import { fix_wiki_img } from './live_wiki_fetch.js';
import { ChampionComplex } from './datadragon.js';
import _ from 'lodash';
import {
  spellEffectFromDescription,
  spellEffectFromStrings,
} from './skill_ratios_parse.js';

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
    `https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data`,
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
        .replace(/--/g, '//'),
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
  skill_i: string[] | Record<string, string>;
  skill_q: string[] | Record<string, string>;
  skill_w: string[] | Record<string, string>;
  skill_e: string[] | Record<string, string>;
  skill_r: string[] | Record<string, string>;
  skills?: string[] | Record<string, string>;
  fullname?: string;
  nickname?: string;
  secondary_attributes?: string;
}

export async function fetchTemplateChampionSkillData(
  champ_name: string,
  skill_name: string,
): Promise<Partial<TemplateChampionSkillData>> {
  champ_name = cleanName(champ_name);
  skill_name = cleanName(skill_name);
  console.log(`Fetching: Template:Data_${champ_name}/${skill_name}`);
  const url = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champ_name}/${skill_name}`;
  const response = await fetch(url);
  const dom = new JSDOM(await response.text());
  const document = dom.window.document;
  const inputs = document
    .querySelector('table.article-table.grid')
    ?.querySelectorAll<HTMLElement>('td.te-input');

  if (!inputs) {
    console.log(`[ERROR] Champ ${champ_name}'s ${skill_name} has no Wiki data`);
    return {};
  }

  const map: Partial<TemplateChampionSkillData> = {};
  for (const htmlElement of inputs) {
    if (!htmlElement.dataset.name) continue;
    fix_wiki_img(htmlElement);
    const key = htmlElement.dataset.name.replaceAll(/ /g, '_');
    map[key] = htmlElement;
  }
  // Does not test for type just assumes that all the values there.
  return map;
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
}

export function cleanName(string: string): string {
  return string.trim().replace(/ /g, '_');
}

export async function getSkillModelsForChamp(
  champ_name: string,
  o: ModuleChampionData,
  riot: ChampionComplex,
): Promise<Record<string, SkillData>> {
  console.log(`Making SkillModels for ${champ_name}`);
  // Flatten all arrays for all skills.
  o.skill_i = Object.values(o.skill_i);
  o.skill_q = Object.values(o.skill_q);
  o.skill_w = Object.values(o.skill_w);
  o.skill_e = Object.values(o.skill_e);
  o.skill_r = Object.values(o.skill_r);
  o.skills = Object.values(o.skills || []);
  const sl = [o.skill_i, o.skill_q, o.skill_w, o.skill_e, o.skill_r].flat();
  if (sl.length !== o.skills.length) {
    console.log('Champ has missmatched skills length:', sl, o.skills);
  }

  const riot_data = {
    I: { image: riot.passive.image, maxrank: undefined },
    Q: { image: riot.spells[0].image, maxrank: riot.spells[0].maxrank || 5 },
    W: { image: riot.spells[1].image, maxrank: riot.spells[1].maxrank || 5 },
    E: { image: riot.spells[2].image, maxrank: riot.spells[2].maxrank || 5 },
    R: { image: riot.spells[3].image, maxrank: riot.spells[3].maxrank || 5 },
  };

  const skillmodels: Record<string, SkillData> = {};
  for (const skill_name of o.skills) {
    const html = await fetchTemplateChampionSkillData(champ_name, skill_name);
    skillmodels[skill_name] = toSkillData(skill_name, html, riot_data);
  }

  return skillmodels;
}

function textOrNone(el: Node | null | undefined): string | undefined {
  const t = el?.textContent?.trim();
  return t === '' ? undefined : t;
}
function htmlOrNone(el: HTMLElement | null | undefined): string | undefined {
  const t = el?.innerHTML?.trim();
  return t === '' ? undefined : t;
}

export function toSkillData(
  skill_name: string,
  skill: Partial<TemplateChampionSkillData>,
  riot_data: any,
): SkillData {
  const descriptions = stackData(skill, 'description');
  const levelings = stackData(skill, 'leveling');
  const blurbs = stackData(skill, 'blurb');
  const icons = stackData(skill, 'icon');
  const skillKey = textOrNone(skill.skill) || 'X';
  const descZip = _.zip(icons, descriptions, levelings);
  const descObj: SkillDesciptionData[] = [];
  for (const [iconEl, descriptionEl, levelingEl] of descZip) {
    const skillTabsList =
      levelingEl?.querySelectorAll<HTMLDListElement>('dl.skill-tabs') || [];
    const leveling: SkillLevelingData[] = [];
    for (const skillTab of skillTabsList) {
      const name = skillTab.querySelector('dt')?.textContent?.trim() || '';
      const valuesElement = skillTab.querySelector('dd');
      const values = valuesElement?.textContent?.trim() || '';
      const valuesHTML = valuesElement?.innerHTML.trim() || '';
      leveling.push({ name, values, valuesHTML });
    }
    const icon = iconEl?.innerHTML.trim() || undefined;
    const description = descriptionEl?.textContent?.trim() || '';
    const descriptionHTML = descriptionEl?.innerHTML.trim() || '';

    //if one is non-empty add to the array;
    if (icon || description || descriptionHTML || leveling.length > 0) {
      const descgArr: RootRatio[] = [];
      const levelingArr: RootRatio[] = [];

      //Try to make leveling from text;
      const descriptionText = description.split('. ');
      for (const [index, descTextLine] of Object.entries(descriptionText)) {
        const root_ratio = spellEffectFromDescription(
          `Line ${Number(index) + 1}:`,
          descTextLine,
        );
        // Filter the empty ones. values is 0 and has no children.
        if (root_ratio.values === 0) if (!root_ratio.children) continue;

        descgArr.push(root_ratio);
      }
      // Make leveingObj from leveing text.
      for (const l of leveling) {
        const root_ratio = spellEffectFromStrings(
          l.name,
          l.name + l.values,
          l.values,
        );
        levelingArr.push(root_ratio);
      }

      descObj.push({
        icon:
          icon === 'false' ||
          icon === '' ||
          icon === 'undefined' ||
          icon === undefined
            ? undefined
            : `/wiki/images/${icon?.trim().replaceAll(/ /g, '_')}`,
        description,
        descriptionHTML,
        descriptionRatios: descgArr,
        leveling,
        levelingRatios: levelingArr,
      });
    }
  }

  const ss = htmlOrNone(skill.spellshield)?.toLocaleLowerCase();
  const spellshield: Spellshield | undefined =
    ss === 'true'
      ? true
      : ss === 'false'
        ? false
        : ss === 'special'
          ? 'Special'
          : ss === 'unknown'
            ? 'Unknown'
            : undefined;

  const inner_name = textOrNone(skill[1]) || skill_name;
  return {
    name: inner_name,
    display_name: textOrNone(skill.disp_name) || inner_name,
    champion: textOrNone(skill.champion) as any,
    skill: skillKey as any,
    maxrank: riot_data[skillKey] ? riot_data[skillKey].maxrank : undefined,
    image: riot_data[skillKey] ? riot_data[skillKey].image : undefined,
    range: textOrNone(skill.range), // target range
    target_range: textOrNone(skill.target_range), // target range
    attack_range: textOrNone(skill.attack_range), // attack range
    travel_distance: htmlOrNone(skill.travel_distance), // travel distance
    collision_radius: htmlOrNone(skill.collision_radius), // collision radius
    effect_radius: htmlOrNone(skill.effect_radius), // effect radius
    width: htmlOrNone(skill.width), // width
    angle: htmlOrNone(skill.angle), // angle
    inner_radius: htmlOrNone(skill.inner_radius), // inner radius
    tether_radius: htmlOrNone(skill.tether_radius), // tether radius
    speed: htmlOrNone(skill.speed), // speed
    cast_time: htmlOrNone(skill.cast_time), // cast time
    cost: htmlOrNone(skill.cost), // cost
    costtype: htmlOrNone(skill.costtype) as any, // costtype
    static: htmlOrNone(skill.static), // static
    cooldown: htmlOrNone(skill.cooldown), // cooldown
    ontargetcd: htmlOrNone(skill.ontargetcd), // ontargetcd
    ontargetcdstatic: htmlOrNone(skill.ontargetcdstatic), // ontargetcdstatic
    recharge: htmlOrNone(skill.recharge), // recharge
    rechargestatic: htmlOrNone(skill.rechargestatic), // rechargestatic
    customlabel: htmlOrNone(skill.customlabel), // customlabel
    custominfo: htmlOrNone(skill.custominfo), // custominfo
    blurb: blurbs
      .map((x) => x?.innerHTML?.trim() || '')
      .filter((x) => x !== ''),
    description: descObj,
    targeting: htmlOrNone(skill.targeting) || '', // Permafrost is a single target ability.
    affects: htmlOrNone(skill.affects) || '', // Permafrost affects enemy champions and large monsters
    damagetype: htmlOrNone(skill.damagetype), // Permafrost deals magic damage.
    spelleffects: htmlOrNone(skill.spelleffects) as any, // spelleffects
    onhiteffects: htmlOrNone(skill.onhiteffects), // onhiteffects can be set to 'true', for abilities that apply on-hit effects (from items or other abilities)
    occurrence: htmlOrNone(skill.occurrence), // occurrence can either be set to 'hit' or 'attack', and refers to on-hit effects
    spellshield, // spellshield can either be set to true, or written with a custom description.
    projectile: htmlOrNone(skill.projectile), // true
    callforhelp: htmlOrNone(skill.callforhelp), // callforhelp determines whether minion aggro will transfer to the caster
    additional: htmlOrNone(skill.additional), // Displays additional information in a smaller window below the template.
    notes: htmlOrNone(skill.notes) || '', // notes
    flavorsound: textOrNone(skill.flavorsound), // For abilities where the SFX/quote is an important part of the gameplay - e.g. Kled or Sion ulting.
    video: textOrNone(skill.video), // video
    video2: textOrNone(skill.video2), // video 2
    yvideo: textOrNone(skill.yvideo), // YouTube video
    yvideo2: textOrNone(skill.yvideo2), // YouTube video 2
  };
}
