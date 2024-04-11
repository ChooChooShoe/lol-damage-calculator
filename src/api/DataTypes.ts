import type { ChampionName } from '@/generated/Champions.gen';
// type ChampionName = string;

import type { BaseStatsObj, Stat } from './ChampObjStats';

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
export interface JsonObj {
  [s: string | number]: string | number | JsonObj | undefined;
}

export interface DataDragonChamp {
  [s: string]: string | Image | JsonObj;
}
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepReadonly<T[P]>
    : T[P];
};

export type SkillKey = 'I' | 'A' | 'Q' | 'W' | 'E' | 'R' | 'CTRL+2'; // skill
export interface SubSkill {
  img?: string;
  description: string;
  descriptionRatios: RootRatio[];
  leveling: SkillLevelingData[];
  levelingRatios: RootRatio[];
  hidden?: boolean;
  locked?: boolean;
}

export interface SkillModel extends SkillGenData {
  maxrank: number;
  image?: Image | undefined;
  details: SkillDetailsModel[];
}
export interface SkillDetailsModel extends SkillDetails {
  // descriptionHTML: string;
  descriptionRatios: RootRatio[];
  leveling2: SkillLevelingData[];
  levelingRatios: RootRatio[];
  // hidden: boolean;
  // locked: boolean;
}
export type SkillLevelingData = {
  name: string;
  values: string;
  valuesHTML: string;
};

export type OptionalStat = Stat | '';
export interface SubRatio {
  values: RatioValue;
  valuesRanged?: RatioValue;
  valuesIsPercent?: boolean;
  valuesIsBasedOnLevel?: boolean;
  basedOn?: string | 'level' | 'critical strike chance';
  user?: 'none' | 'player' | 'target';
  units: OptionalStat;
  unitsText?: string;
  pre?: string;
  post?: string;
  children?: Array<SubRatio>;
}

export type EffectType =
  | 'Damage'
  | 'Heal'
  | 'Shield'
  | 'Gain'
  | 'Unique'
  | 'Stacks';
export interface GainEffect extends RootEffect {
  effectType: 'Gain';
  increasedStat?: OptionalStat | [OptionalStat];
  gainDuration?: number;
}

export type DamageType = 'Physical' | 'Magic' | 'True' | 'None' | 'Adaptive';
export interface DamageEffect extends RootEffect {
  effectType: 'Damage' | 'damage';
  damagetype: DamageType;
}

export type HealType =
  | 'HealthRegen'
  | 'LifeSteal'
  | 'Omnivamp'
  | 'PhysicalVamp'
  | 'SpellVamp'
  | 'DrainEffect'
  | 'SelfHeal'
  | 'IncomingHeals'
  | 'OutgoingHeals'
  | 'BonusHealth';
export type ShieldType = 'SelfShield' | 'IncomingShields' | 'OutgoingShields';

export function usesHealShieldPower(shieldOrHeal: HealType | ShieldType) {
  return (
    shieldOrHeal === 'DrainEffect' ||
    shieldOrHeal === 'SelfHeal' ||
    shieldOrHeal === 'SelfShield' ||
    shieldOrHeal === 'OutgoingHeals' ||
    shieldOrHeal === 'OutgoingShields'
  );
}
export function usesSpiritVisage(shieldOrHeal: HealType | ShieldType) {
  return (
    shieldOrHeal !== 'OutgoingHeals' &&
    shieldOrHeal !== 'OutgoingShields' &&
    shieldOrHeal !== 'BonusHealth'
  );
}
export function usesRevitalize(shieldOrHeal: HealType | ShieldType) {
  return shieldOrHeal !== 'HealthRegen' && shieldOrHeal !== 'BonusHealth';
}
export function usesGrievousWounds(shieldOrHeal: HealType | ShieldType) {
  return (
    shieldOrHeal !== 'SelfShield' &&
    shieldOrHeal !== 'IncomingShields' &&
    shieldOrHeal !== 'OutgoingShields' &&
    shieldOrHeal !== 'OutgoingHeals' &&
    shieldOrHeal !== 'BonusHealth'
  );
}
export function usesSerpentsFang(shieldOrHeal: HealType | ShieldType) {
  return shieldOrHeal == 'SelfShield' || shieldOrHeal !== 'IncomingShields';
}
export interface HealEffect extends RootEffect {
  effectType: 'Heal' | 'heal';
  healType: HealType;
}
export interface ShieldEffect extends RootEffect {
  effectType: 'Shield' | 'shield';
  damagetype?: DamageType;
  shieldType: ShieldType;
}
export interface UniqueEffect extends RootEffect {
  effectType: 'Unique' | 'utacks';
}
export interface StacksEffect extends RootEffect {
  effectType: 'Stacks' | 'stacks';
  min: number;
  max: number;
  user?: 'none' | 'player' | 'target';
  units: OptionalStat;
  unitsText?: string;
  title?: string;
  description?: string;
}

export type CrowdControlType =
  | 'Airborne'
  | 'Blind'
  | 'Cripple'
  | 'Disarm'
  | 'Disrupt'
  | 'Drowsy'
  | 'Sleep'
  | 'Berserk'
  | 'Charm'
  | 'Flee'
  | 'Taunt'
  | 'Ground'
  | 'Kinematics'
  | 'Knockdown'
  | 'Nearsight'
  | 'Root'
  | 'Silence'
  | 'Polymorph'
  | 'Slow'
  | 'Stasis'
  | 'Stun'
  | 'Suspension'
  | 'Suppression';
export interface CrowdControlEffect extends RootEffect {
  effectType: 'CrowdControl';
  crowdControl: CrowdControlType;
  crowdControlDuration: number;
}
export interface RootEffect {
  name?: string;
  raw?: string;
  children: SubRatio[];
  // [x: string | number | symbol]: unknown;
}
export type RootRatio =
  | StacksEffect
  | GainEffect
  | DamageEffect
  | HealEffect
  | ShieldEffect
  | UniqueEffect
  | CrowdControlEffect;

export type RatioValue = number | number[];
export type ScaleValue = number | (number | string)[] | string;

export enum RatioUnits {
  Ad = 'AD',
  Ap = 'AP',
  Armor = 'armor',
  BonusHealth = 'bonus health',
  Bonusad = 'bonus AD',
  ChunksOfIce = 'chunks of ice',
  Empty = '',
  MaximumHealth = 'maximum health',
  MissingHealth = 'missing health',
  OfDamageDealt = 'of damage dealt',
  OfDamageTaken = 'of damage taken',
  OfHisMaximumHealth = 'of his maximum health',
  OfMaximumHealth = 'of maximum health',
  OfMissingHealth = 'of missing health',
  OfMissingMana = 'of missing mana',
  OfTargetSArmor = "of target's armor",
  OfTargetSCurrentHealth = "of target's current health",
  OfTargetSMaximumHealth = "of target's maximum health",
  OfTargetSMissingHealth = "of target's missing health",
  OfTaricSArmor = "of Taric's armor",
  OfTheTargetSMaximumHealth = "of the target's maximum health",
  OfTurretSMaximumHealth = "of turret's maximum health",
  PerSoulCollected = 'per  Soul collected',
  Soldiers = 'soldiers',
  Units = '×',
  UnitsUnits = 'units',
  X23 = 'x23',
}

export interface WikiModuleChamptionData {
  // 1  : string        // champion name (must be unique)
  id: number; // champion's ID within the api
  apiname: string; // champion's name within the api
  title: string; // champion's title
  attack: number; // archaic client rating from 0 to 10
  defense: number; // archaic client rating from 0 to 10
  magic: number; // archaic client rating from 0 to 10
  herotype: string; // archaic primary role
  alttype: string; // archaic secondary role
  resource: string; // champion's resource
  stat: BaseStatsObj;
  rangetype: string; // Melee or Ranged
  date: string; // release date
  patch: string; // release patch ID (e.g. V4.20)
  changes: string; // patch ID of last changes
  role: string[];
  positions: string[]; // client position information (values updated each patch; last updated: V10.16)
  'op-positions': string[]; // op.gg position information (values updated in real time; last updated: 5-Aug)
  damage: number; // champion's damage rating from 1 to 3
  toughness: number; // champion's toughness rating from 1 to 3
  control: number; // champion's control rating from 1 to 3
  mobility: number; // champion's mobility rating from 1 to 3
  uility: number; // champion's utility rating from 1 to 3
  difficulty: number; // champion's difficulty rating from 0 to 3
  style: number; // champion's damage style from 0 to 100 (0 = basic attacks; 100 = abilities)
  adaptivetype: string; // champion's adaptive force type
  be: number; // champion's Blue Essence cost
  rp: number; // champion's RP cost
  skill_i: string[] | { [key: string]: string };
  skill_q: string[] | { [key: string]: string };
  skill_w: string[] | { [key: string]: string };
  skill_e: string[] | { [key: string]: string };
  skill_r: string[] | { [key: string]: string };
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
  stats: BaseStatsObj;
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

export type ChampionGenData = {
  id: number;
  wikiname: string;
  apiname: string;
  name: string;
  alias: string;
  fullname: string;
  nickname: string;
  title: string;
  image: Image;
  spriteStyle: string;
  resource: Resource;
  date: string;
  patch: string;
  changes: string;
  role: string[];
  adaptivetype: string;
  rangetype: 'Melee' | 'Ranged';
  // positions: string[];
  // op_positions: string[];
  be: number;
  rp: number;
  shortBio: string;
  tacticalInfo: {
    style: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    difficulty: 0 | 1 | 2 | 3;
    damageType: 'Magic' | 'Physical' | 'Mixed';
  };
  playstyleInfo: {
    damage: 1 | 2 | 3;
    durability: 1 | 2 | 3;
    crowdControl: 1 | 2 | 3;
    mobility: 1 | 2 | 3;
    utility: 1 | 2 | 3;
  };
  squarePortraitPath: `/v1/champion-icons/${number}.png`;
  stingerSfxPath: `/v1/champion-sfx-audios/${number}.ogg`;
  chooseVoPath: `/v1/champion-choose-vo/${number}.ogg`;
  banVoPath: `/v1/champion-ban-vo/${number}.ogg`;
  roles: string[];
  skillI: string[];
  skillQ: string[];
  skillW: string[];
  skillE: string[];
  skillR: string[];
  // skills: string[];
  stats: BaseStatsObj;
  // secondary_attributes?: string;
};
// prettier-ignore
export type Resource = 'Blood Well' | 'Mana' | 'Energy' | 'None' | 'Health' | 'Rage' | 'Fury' | 'Grit' | 'Courage' | 'Shield' | 'Ferocity' | 'Heat' | 'Bloodthirst' | 'Flow' | 'Soul Unbound';
export type Position = 'Top' | 'Middle' | 'Bottom' | 'Jungle' | 'Support';
// prettier-ignore
export type HeroType = 'Support' | 'Mage' | 'Fighter' | 'Assassin' | 'Marksman' | 'Tank';

export type Scaling = number[];
export type LevelingGroup = Leveling[];
export type Leveling = {
  name: string;
  values: Scaling;
  values_html: string;
};
export type SkillDetails = {
  icon: string;
  blurb: string;
  description: string;
  leveling: LevelingGroup[];
};
export type SkillGenData = {
  name: string;
  displayName: string;
  champion: string;
  skill: string; //Q : string; //skill
  range: string; //range
  targetRange: string; //Range center 1200 : string; //target range
  attackRange: string; //attack range
  collisionRadius: string; //collision radius
  effectRadius: string; //Sight icon 400 : string; //effect radius
  width: string; //Range model 120 : string; //width
  angle: string; //angle
  innerRadius: string; //inner radius
  tetherRadius: string; //tether radius
  speed: Scaling; //1800 : string; //speed
  castTime: string; //0.25 : string; //cast time
  cost: Scaling; //50 : string; //cost
  costtype: string; //Energy : string; //costtype
  static: string; //static
  cooldown: Scaling; //10 / 9 / 8 / 7 / 6 : string; //cooldown
  cdstart: string; //on-cast
  ontargetcd: string; //ontargetcd
  ontargetcdstatic: string; //ontargetcdstatic
  recharge: string; //recharge
  customlabel: string; //customlabel
  custominfo: string; //custominfo

  details: SkillDetails[];

  targeting: Targeting; //Direction targeting
  affects: string; //Enemies affects
  damagetype: string; //Physical damagetype
  spelleffects: Spelleffects; //Spell spelleffects
  spellshield: Spellshield; //True spellshield
  projectile: Projectile; //True projectile
  callforhelp: string; //callforhelp
  grounded: Grounded; //grounded
  knockdown: Knockdown; //knockdown
  silence: string; //silence
  additional: string; //Displays additional information in a smaller window below the template.
  notes: string; //* This ability will cast from wherever the caster is at the start of the cast time. Displays additional information with effect table to the right.
  flavortext: string; //flavortext
  flavorsound: string; //flavorsound
};

// prettier-ignore
export type Targeting = 'Passice' | 'Direction' | 'Location' | 'Auto' | 'Unit' | 'Vector';
// prettier-ignore
export type Spelleffects = 'Proc' | 'Area' | 'Spell' | 'See Notes' | 'Basic' | 'Default' | 'AOE DOT' | 'DOT' | 'Pet' | 'Non-Damaging';
export type Spellshield = 'Blocked' | 'Not Blocked' | 'See Notes' | 'Missing';
export type Projectile = 'Blocked' | 'See Notes';
export type Grounded = 'Disabled' | 'See Notes' | 'Not Disabled';
export type Knockdown = 'Interrupted' | 'See Notes' | 'Not Interrupted';
