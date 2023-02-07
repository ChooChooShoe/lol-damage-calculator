import type { ChampionListSkills, WikiChampionData } from '@/api/DataTypes';
import {
  fetchAndSaveRealms,
  fetch_Module_ChampionData,
  saveTSFile,
} from './fetch_utils';
import {
  fetch_ddragon,
  fetch_live_wiki_skills,
  type NeededRiotValues,
} from './live_wiki_fetch';

import { BaseStatsObj } from '@/model/ChampObj';
console.log('Live Wiki Fetching for all data.');

main();
async function main() {
  const realms = fetchAndSaveRealms();
  const ModuleChampionDataFile = fetch_Module_ChampionData();

  const ChampionList: { [key: string]: WikiChampionData | null } = {};
  const SkillList: { [key: string]: ChampionListSkills | null } = {};
  const promises: Array<Promise<void>> = [];
  // const ChampionModule = await fetch_mod_data();
  for (const [name, raw_data] of Object.entries(await ModuleChampionDataFile)) {
    if (raw_data.date === 'Upcoming') continue;

    ChampionList[name] = null;
    SkillList[name] = null;

    const ddragonFull = fetch_ddragon(await realms, raw_data.apiname);

    promises.push(
      ddragonFull
        .then(async (riot_model) => {
          SkillList[name] = await fetch_live_wiki_skills(
            name,
            riot_model as NeededRiotValues
          );
          ChampionList[name] = mutateWikiChampionData(
            name,
            raw_data,
            riot_model as NeededRiotValues
          );
        })
        .catch((e) => console.log(e))
    );
  }
  console.log('Awaiting all Promises');
  await Promise.all(promises);
  // _.merge(ChampionList, OverwriteChampionList);
  saveTSFile(
    './src/model/ChampionListData.ts',
    ChampionList,
    `import type { ChampListEntry } from './ChampObj';

  // prettier-ignore
  export type ChampionName = "${Object.keys(ChampionList).join(`" | "`)}";
  
  export const ChampionListData: Record<ChampionName, ChampListEntry> = `,
    `export default ChampionListData;\n`
  );
  // _.merge(SkillList, OverwriteSkillList);
  saveTSFile(
    './src/model/ChampionSkillsData.ts',
    SkillList,
    `import type { ChampionListSkills } from '@/api/DataTypes';
  import type { ChampionName } from './ChampionListData';\n
  export const ChampionSkillsData: Record<ChampionName, ChampionListSkills> = `,
    `export default ChampionSkillsData;\n`
  );
  console.log('Goodbye');
}

function invalidValue(val: any, type: any): never {
  throw Error(
    `Invalid value: Expected type '${JSON.stringify(
      val
    )}' but got ${JSON.stringify(type)}`
  );
}
function mutateWikiChampionData(
  name: string,
  o: any,
  riot: NeededRiotValues
): WikiChampionData {
  return {
    name,
    image: riot.image || {
      full: '',
      sprite: '',
      group: '',
      x: 0,
      y: 0,
      w: 0,
      h: 0,
    },
    id: test(o.id, 0),
    apiname: test(o.apiname, ''),
    title: test(o.title, ''),
    attack: test(o.attack, 0),
    defense: test(o.defense, 0),
    magic: test(o.magic, 0),
    difficulty: test(o.difficulty, 0),
    herotype: test(o.herotype, ''),
    alttype: test(o.alttype, ['', undefined]),
    resource: test(o.resource, ''),
    stats: mutateStats(o.stats),
    rangetype: test(o.rangetype, ''),
    date: test(o.date, ''),
    patch: test(o.patch, ''),
    changes: test(o.changes, ''),
    role: test(o.role, []),
    positions: test(o.positions, []),
    op_positions: test(o.op_positions, []),
    damage: test(o.damage, 0),
    toughness: test(o.toughness, 0),
    control: test(o.control, 0),
    mobility: test(o.mobility, 0),
    utility: test(o.utility, 0),
    style: test(o.style, 0),
    adaptivetype: test(o.adaptivetype, ''),
    be: test(o.be, 0),
    rp: test(o.rp, 0),
    skill_i: test(Object.values(o.skill_i || {}), []),
    skill_q: test(Object.values(o.skill_q || {}), []),
    skill_w: test(Object.values(o.skill_w || {}), []),
    skill_e: test(Object.values(o.skill_e || {}), []),
    skill_r: test(Object.values(o.skill_r || {}), []),
    skills: test(Object.values(o.skills || {}), []),
    fullname: test(o.fullname, ['', undefined]),
    nickname: test(o.nickname, ['', undefined]),
    secondary_attributes: test(o.secondary_attributes, ['', undefined]),
  };
}

type Typed = string | boolean | number | object | null | undefined;
function test(val: Typed, type: 'any'): any;
function test(val: Typed, type: string): string;
function test(val: Typed, type: boolean): boolean;
function test(val: Typed, type: number): number;
function test(val: Typed, type: null): null;
function test(val: Typed, type: undefined): undefined;
function test(val: Typed, type: any): any;
function test(val: Typed, type: Typed): Typed {
  if (Array.isArray(type)) {
    //The type is array
    if (type.length === 0) {
      if (Array.isArray(val)) return val;
      return invalidValue(`Expected Array but got ${val}`, val);
    }

    //The type is in an array of types
    for (const itype of type) {
      try {
        return test(val, itype);
      } catch (_) {
        /* empty */
      }
    }
    return invalidValue(type, val);
  }
  if (type === 'any') return val;
  if (type === null) {
    if (val === null) return val;
    return invalidValue(`Expected null but got ${val}`, val);
  }
  // undefined, boolean, number, object
  if (typeof type === typeof val) {
    if (typeof type === 'string' && type.length > 0) {
      // exact string match. use '' for any string.
      if (type === val) return val;
      return invalidValue(`Exact string match to '${type}'`, val);
    }
    return val;
  }
  return invalidValue(typeof type, val);
}

function mutateStats(o: any): BaseStatsObj {
  const s = {
    hp_base: test(o.hp_base, 0),
    hp_lvl: test(o.hp_lvl, 0),
    mp_base: test(o.mp_base, 0),
    mp_lvl: test(o.mp_lvl, 0),
    arm_base: test(o.arm_base, 0),
    arm_lvl: test(o.arm_lvl, 0),
    mr_base: test(o.mr_base, 0),
    mr_lvl: test(o.mr_lvl, 0),
    hp5_base: test(o.hp5_base, 0),
    hp5_lvl: test(o.hp5_lvl, 0),
    mp5_base: test(o.mp5_base, 0),
    mp5_lvl: test(o.mp5_lvl, 0),
    dam_base: test(o.dam_base, 0),
    dam_lvl: test(o.dam_lvl, 0),
    as_base: test(o.as_base, 0),
    as_ratio: test(o.as_ratio, 0),
    as_lvl: test(o.as_lvl, 0),

    missile_speed: test(o.missile_speed, 0), // (0 = Non-Projectile)
    attack_cast_time: test(o.attack_cast_time, 0), // only used to calculated 'windup_percent'
    attack_total_time: test(o.attack_total_time, 0), // only used to calculated 'windup_percent'
    attack_delay_offset: test(o.attack_delay_offset, 0.3), // only used to calculated 'windup_percent'
    // windup_percent: undefined; // N/A           // Not stored in data, but is retrievable (default is 0.3)
    windup_modifier: test(o.windup_modifier, 0), // champion's modifier to windup growth
    crit_base: test(o.crit_base, 175), // champion's base critical strike damage (defaults to 175%)
    crit_mod: test(o.crit_mod, 0), // champion's total critical strike damage modifier
    range: test(o.range, 0),
    ms: test(o.ms, 0),
    gameplay_radius: test(o.gameplay_radius, 65), // champion's hitbox for most purposes (defaults to 65)
    acquisition_radius: test(o.acquisition_radius, 800), // champion's auto-attack range (defaults to 800)
    selection_radius: test(o.selection_radius, 100), // champion's mouse-over selection radius (defaults to 100)
    pathing_radius: test(o.pathing_radius, 35), // champion's pathing radius (defaults to 35)
    aram: o.aram, // aram balance changes
    nb: o.nb, // nexus blitz-specific balance changes (see aram for parameters)
    ofa: o.ofa, // one for all-specific balance changes (see aram for parameters)
    urf: o.urf, // ultimate rapid fire-specific balance changes (see aram for parameters)
    usb: o.usb, // ultimate spell book-specific balance changes (see aram for parameters)
  };
  return s;
}
