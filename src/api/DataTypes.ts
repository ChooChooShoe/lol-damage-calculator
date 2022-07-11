/**
 * From DataDragon image
 * @example
 * const image = {
 *  full: "Aatrox.png",
 *  sprite: "champion0.png",
 *  group: "champion",
 *  x: 0,
 *  y: 0,
 *  w: 48,
 *  h: 48,
 * };
 */
export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface JsonObj { [s: string | number]: string | number | JsonObj | undefined }

export interface DataDragonChamp {
  [s: string]: string | Image | JsonObj
}
export interface ChampionListSkills {
  skills: { [key: string]: SkillModel }
}
export interface SkillModel {
  name: string;
  display_name: string;
  maxrank: number | undefined;
  image: Image | undefined;
  targeting?: string;
  damagetype: string;
  spelleffects?: string;
  spellshield: 'Blocked' | "Not Blocked" | "See Notes" | "Missing";
  projectile?: string;
  grounded?: string;
  knockdown?: string;
  // img: string[];
  desciption: string[];
  leveling: RootRatio[];
}
export interface RootRatio extends SubRatio {
  name: string;
  raw: string;
}
export interface SubRatio {
  values: ScaleValue
  user: 'player' | 'target' | 'none';
  stat: string;
  apply: 'text' | 'per100' | "per" | 'percent' | "flat",
  stat_raw: string;
  sub_ratios?: SubRatio[];
}
export type ScaleValue = string | number | (string | number)[];

export interface WikiModuleChamptionData {
  // 1  : string        // champion name (must be unique)
  id: number        // champion's ID within the api
  apiname: string        // champion's name within the api
  title: string        // champion's title
  attack: number        // archaic client rating from 0 to 10
  defense: number        // archaic client rating from 0 to 10
  magic: number        // archaic client rating from 0 to 10
  herotype: string        // archaic primary role
  alttype: string        // archaic secondary role
  resource: string        // champion's resource
  stat: {
    hp_base: number
    hp_lvl: number
    mp_base: number
    mp_lvl: number
    arm_base: number
    arm_lvl: number
    mr_base: number
    mr_lvl: number
    hp5_base: number
    hp5_lvl: number
    mp5_base: number
    mp5_lvl: number
    dam_base: number
    dam_lvl: number
    as_base: number        // champion's base attack speed as decimal
    as_ratio: number        // champion's attack speed ratio as decimal
    as_lvl: number        // champion's bonus_as growth as whole number
    missile_speed?: number        // missile speed for ranged basic attacks (0 = Non-Projectile)
    attack_cast_time?: number        // only used to calculated 'windup_percent'
    attack_total_time?: number        // only used to calculated 'windup_percent'
    attack_delay_offset?: number        // only used to calculated 'windup_percent'
    windup_percent: undefined  // N/A           // Not stored in data, but is retrievable (default is 0.3)
    windup_modifier?: number        // champion's modifier to windup growth
    crit_base?: number        // champion's base critical strike damage (defaults to 175%)
    crit_mod?: number        // champion's total critical strike damage modifier
    range: number        // champion's range
    ms: number        // champion's movement speed
    gameplay_radius?: number        // champion's hitbox for most purposes (defaults to 65)
    acquisition_radius?: number        // champion's auto-attack range (defaults to 800)
    selection_radius?: number        // champion's mouse-over selection radius (defaults to 100)
    pathing_radius?: number        // champion's pathing radius (defaults to 35)
    aram_dmg_dealt?: number        // damage dealt modifier in aram as decimal (defaults to 1.0)
    aram_dmg_taken?: number        // damage taken modifier in aram as decimal (defaults to 1.0)
    aram_healing?: number        // healing modifier in aram as decimal (defaults to 1.0)
    aram_shielding?: number        // shielding modifier in aram as decimal (defaults to 1.0)
    nb_dmg_dealt?: number        // damage dealt modifier in nb as decimal (defaults to 1.0)
    nb_dmg_taken?: number        // damage taken modifier in nb as decimal (defaults to 1.0)
    nb_healing?: number        // healing modifier in nb as decimal (defaults to 1.0)
    nb_shielding?: number        // shielding modifier in nb as decimal (defaults to 1.0)
    ofa_dmg_dealt?: number        // damage dealt modifier in ofa as decimal (defaults to 1.0)
    ofa_dmg_taken?: number        // damage taken modifier in ofa as decimal (defaults to 1.0)
    ofa_healing?: number        // healing modifier in ofa as decimal (defaults to 1.0)
    ofa_shielding?: number        // shielding modifier in ofa as decimal (defaults to 1.0)
    urf_dmg_dealt?: number        // damage dealt modifier in urf as decimal (defaults to 1.0)
    urf_dmg_taken?: number        // damage taken modifier in urf as decimal (defaults to 1.0)
    urf_healing?: number        // healing modifier in urf as decimal (defaults to 1.0)
    urf_shielding?: number        // shielding modifier in urf as decimal (defaults to 1.0)
  }
  rangetype: string        // Melee or Ranged
  date: string        // release date
  patch: string        // release patch ID (e.g. V4.20)
  changes: string        // patch ID of last changes
  role: string[]
  positions: string[] // client position information (values updated each patch; last updated: V10.16)
  "op-positions": string[]  // op.gg position information (values updated in real time; last updated: 5-Aug)
  damage: number        // champion's damage rating from 1 to 3
  toughness: number        // champion's toughness rating from 1 to 3
  control: number        // champion's control rating from 1 to 3
  mobility: number        // champion's mobility rating from 1 to 3
  uility: number        // champion's utility rating from 1 to 3
  difficulty: number        // champion's difficulty rating from 0 to 3
  style: number        // champion's damage style from 0 to 100 (0 = basic attacks; 100 = abilities)
  adaptivetype: string        // champion's adaptive force type
  be: number        // champion's Blue Essence cost
  rp: number        // champion's RP cost
  skill_i: string[] | { [key: string]: string }
  skill_q: string[] | { [key: string]: string }
  skill_w: string[] | { [key: string]: string }
  skill_e: string[] | { [key: string]: string }
  skill_r: string[] | { [key: string]: string }
}

export interface WikiChampionList {
  champions: { [key: string]: WikiChampionData };
}

export interface WikiChampionData {
  name: string;
  image: Image;
  id: number;
  apiname: string;
  title: string;
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
  herotype: string;
  alttype?: string;
  resource: string;
  stats: StaticStats;
  rangetype: string;
  date: Date | string;
  patch: string;
  changes: string;
  role: string[];
  positions: string[];
  op_positions: string[];
  damage: number;
  toughness: number;
  control: number;
  mobility: number;
  utility: number;
  style: number;
  adaptivetype: string;
  be: number;
  rp: number;
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
// Stats given by wiki.
export interface StaticStats {
  hp_base: number;
  hp_lvl: number;
  mp_base: number;
  mp_lvl: number;
  arm_base: number;
  arm_lvl: number;
  mr_base: number;
  mr_lvl: number;
  hp5_base: number;
  hp5_lvl: number;
  mp5_base: number;
  mp5_lvl: number;
  dam_base: number;
  dam_lvl: number;

  as_base: number        // champion's base attack speed as decimal
  as_ratio: number        // champion's attack speed ratio as decimal
  as_lvl: number        // champion's bonus_as growth as whole number
  range: number        // champion's range
  range_lvl?: number;
  ms: number        // champion's movement speed

  usb_dmg_taken?: number;
  usb_dmg_dealt?: number;
  ofa_shield?: number;
  usb_healing?: number;
  usb_shielding?: number;

  missile_speed?: number        // missile speed for ranged basic attacks (0 = Non-Projectile)
  attack_cast_time?: number        // only used to calculated 'windup_percent'
  attack_total_time?: number        // only used to calculated 'windup_percent'
  attack_delay_offset?: number        // only used to calculated 'windup_percent'
  windup_percent?: undefined  // N/A           // Not stored in data, but is retrievable (default is 0.3)
  windup_modifier?: number        // champion's modifier to windup growth
  crit_base?: number        // champion's base critical strike damage (defaults to 175%)
  crit_mod?: number        // champion's total critical strike damage modifier
  gameplay_radius?: number        // champion's hitbox for most purposes (defaults to 65)
  acquisition_radius?: number        // champion's auto-attack range (defaults to 800)
  selection_radius?: number        // champion's mouse-over selection radius (defaults to 100)
  pathing_radius?: number        // champion's pathing radius (defaults to 35)
  aram_dmg_dealt?: number        // damage dealt modifier in aram as decimal (defaults to 1.0)
  aram_dmg_taken?: number        // damage taken modifier in aram as decimal (defaults to 1.0)
  aram_healing?: number        // healing modifier in aram as decimal (defaults to 1.0)
  aram_shielding?: number        // shielding modifier in aram as decimal (defaults to 1.0)
  nb_dmg_dealt?: number        // damage dealt modifier in nb as decimal (defaults to 1.0)
  nb_dmg_taken?: number        // damage taken modifier in nb as decimal (defaults to 1.0)
  nb_healing?: number        // healing modifier in nb as decimal (defaults to 1.0)
  nb_shielding?: number        // shielding modifier in nb as decimal (defaults to 1.0)
  ofa_dmg_dealt?: number        // damage dealt modifier in ofa as decimal (defaults to 1.0)
  ofa_dmg_taken?: number        // damage taken modifier in ofa as decimal (defaults to 1.0)
  ofa_healing?: number        // healing modifier in ofa as decimal (defaults to 1.0)
  ofa_shielding?: number        // shielding modifier in ofa as decimal (defaults to 1.0)
  urf_dmg_dealt?: number        // damage dealt modifier in urf as decimal (defaults to 1.0)
  urf_dmg_taken?: number        // damage taken modifier in urf as decimal (defaults to 1.0)
  urf_healing?: number        // healing modifier in urf as decimal (defaults to 1.0)
  urf_shielding?: number        // shielding modifier in urf as decimal (defaults to 1.0)

}