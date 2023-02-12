import JSON5 from 'json5';
import { BaseStatsObj } from '../src/api/ChampObjStats';
import {
  ChampionListSkills,
  SubSkill,
  WikiChampionData,
} from '../src/api/DataTypes';
import { ChampionComplex, DataDragon } from './datadragon';
import { fetchAndSaveRealms, saveStringFile, saveTSFile } from './fetch_utils';
import { fetch_Module_ChampionData, ModuleChampionData } from './LeagueWiki';
import { fetch_live_wiki_skills } from './live_wiki_fetch';

console.log('Live Wiki Fetching for all data.');

main();
async function main() {
  const realms = await fetchAndSaveRealms();

  const dataDragon = new DataDragon({
    version: realms.v,
    lang: 'en_US',
  });

  const ModuleChampionDataFile = await fetch_Module_ChampionData();

  const ChampionList: Record<string, WikiChampionData | null> = {};
  const SkillList: Record<string, ChampionListSkills | null> = {};
  const SubSkillList: Record<string, Record<string, SubSkill[]>> = {};
  const promises: Array<Promise<void>> = [];
  // const ChampionModule = await fetch_mod_data();
  for (const [name, raw_data] of Object.entries(ModuleChampionDataFile)) {
    if (raw_data.date === 'Upcoming') continue;

    ChampionList[name] = null;
    SkillList[name] = null;
    SubSkillList[name] = {};

    const ddragonFull = dataDragon.findChampion(raw_data.apiname);

    promises.push(
      ddragonFull
        .then(async (riot_model): Promise<void> => {
          const liveData = await fetch_live_wiki_skills(name, riot_model);
          SkillList[name] = liveData;

          ChampionList[name] = mutateWikiChampionData(
            name,
            raw_data,
            riot_model
          );

          for (const [k, v] of Object.entries(liveData.skills)) {
            if (v.subskills) {
              SubSkillList[name][k] = v.subskills;
              delete v.subskills;
            }
          }
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
  //Save champion/CHAMPIONNAME.ts
  const saveCHAMPIONNAME = false;
  if (saveCHAMPIONNAME) {
    const index: string[] = [];
    for (const [champKey, subskillObj] of Object.entries(SubSkillList)) {
      const jsKey = champKey.replaceAll(/[ &'.]/g, '');
      const skillText: string[] = [];
      for (const [k, v] of Object.entries(subskillObj)) {
        skillText.push(
          `const ${k}: SubSkill[] = ${JSON5.stringify(v, {
            space: 2,
          })}`
        );
      }

      saveStringFile(
        `./src/model/champion/${champKey}.ts`,
        `import type { SubSkill } from '@/api/DataTypes';
      import type { ChampionName } from '../ChampionListData';
      
      export const name: ChampionName = '${champKey}';
      ${skillText.join(';\n')}
    export const ${jsKey} = {${Object.keys(subskillObj).toString()}}`
      );
      index.push(`import ${jsKey} from "./${champKey}"`);
    }
    index.push(
      `export ChampSkills = ${Object.keys(SkillList).forEach((x) =>
        x.replaceAll(/[ &'.]/g, '')
      )};`
    );
    //Save champion/index.ts
    saveStringFile(`./src/model/champion/index.ts`, index.join('\n'));
  }
  //Save ChampionSkillsData.ts
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

function invalidValue(val: string | any[], type: any): null {
  console.log(
    `Invalid value: Expected type '${JSON.stringify(
      val
    )}' but got ${JSON.stringify(type)}`
  );
  return null;
}
function mutateWikiChampionData(
  name: string,
  o: ModuleChampionData,
  riot: ChampionComplex
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
  // undefined values will set type as the default.
  if (typeof val === 'undefined') return type;
  return invalidValue(typeof type, val);
}

function mutateStats(o: Partial<BaseStatsObj>): BaseStatsObj {
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
