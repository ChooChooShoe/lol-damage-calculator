import { BaseStatsObj } from '@/api/ChampObjStats';
import { WikiChampionData } from '@/api/DataTypes';
import { ChampionComplex } from './datadragon';
import { ModuleChampionData } from './LeagueWiki';

type Typed = string | boolean | number | object | null | undefined;
export function test(val: Typed, type: 'any'): any;
export function test(val: Typed, type: string): string;
export function test(val: Typed, type: boolean): boolean;
export function test(val: Typed, type: number): number;
export function test(val: Typed, type: null): null;
export function test(val: Typed, type: undefined): undefined;
export function test(val: Typed, type: any): any;
export function test(val: Typed, type: Typed): Typed {
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
export function mutateStats(o: Partial<BaseStatsObj>): BaseStatsObj {
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

    missile_speed: test(o.missile_speed, 0),
    attack_cast_time: test(o.attack_cast_time, 0),
    attack_total_time: test(o.attack_total_time, 0),
    attack_delay_offset: test(o.attack_delay_offset, 0.3),

    // windup_percent: undefined; // N/A           // Not stored in data, but is retrievable (default is 0.3)
    windup_modifier: test(o.windup_modifier, 0),
    crit_base: test(o.crit_base, 175),
    crit_mod: test(o.crit_mod, 0),
    range: test(o.range, 0),
    ms: test(o.ms, 0),
    gameplay_radius: test(o.gameplay_radius, 65),
    acquisition_radius: test(o.acquisition_radius, 800),
    selection_radius: test(o.selection_radius, 100),
    pathing_radius: test(o.pathing_radius, 35),
    aram: o.aram,
    nb: o.nb,
    ofa: o.ofa,
    urf: o.urf,
    usb: o.usb, // ultimate spell book-specific balance changes (see aram for parameters)
  };
  return s;
}

export function invalidValue(val: string | any[], type: any): null {
  console.log(
    `Invalid value: Expected type '${JSON.stringify(
      val,
    )}' but got ${JSON.stringify(type)}`,
  );
  return null;
}

export function mutateWikiChampionData(
  name: string,
  o: ModuleChampionData,
  riot: ChampionComplex,
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
