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
export interface ChampionListSkills {
  skills: { [key in string]: SkillModel };
}
export interface SkillModel {
  name: string;
  display_name: string;
  maxrank?: number;
  image?: Image;
  targeting?: 'Passice' | 'Direction' | 'Location' | 'Auto' | 'Unit' | 'Vector';
  // affects?: string;
  damagetype: ('Physical' | 'Magic' | 'True')[];
  spelleffects?:
    | 'Proc'
    | 'Area'
    | 'Spell'
    | 'See Notes'
    | 'Basic'
    | 'Default'
    | 'AOE DOT'
    | 'DOT'
    | 'Pet'
    | 'Non-Damaging';
  spellshield?: 'Blocked' | 'Not Blocked' | 'See Notes' | 'Missing';
  projectile?: 'Blocked' | 'See Notes';
  grounded?: 'Disabled' | 'See Notes' | 'Not Disabled';
  knockdown?: 'Interrupted' | 'See Notes' | 'Not Interrupted';
  subskills?: SubSkill[];
  static?: ScaleValue;
  cost?: ScaleValue;
  cast_time?: ScaleValue;
  cooldown?: ScaleValue;
  target_range?: ScaleValue;
  ontargetcdstatic?: ScaleValue;
  effect_radius?: ScaleValue;
  speed?: ScaleValue;
  custominfo?: ScaleValue;
  attack_range?: ScaleValue;
  width?: ScaleValue;
  range?: ScaleValue;
  // [otherOptions: string]: unknown;
}
export interface SubSkill {
  img?: string;
  description: string;
  leveling?: RootRatio[];
  hidden?: boolean;
  locked?: boolean;
}

export type OptionalStat = Stat | '';
export interface SubRatio {
  values: RatioValue;
  valuesRanged?: RatioValue;
  valuesIsPercent?: boolean;
  valuesIsBasedOnLevel?: boolean;
  // apply?: "%" | 'based_on_level';
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
  effectType: 'Damage';
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
  effectType: 'Heal';
  healType: HealType;
}
export interface ShieldEffect extends RootEffect {
  effectType: 'Shield';
  damagetype?: DamageType;
  shieldType: ShieldType;
}
export interface UniqueEffect extends RootEffect {
  effectType: 'Unique';
}
export interface StacksEffect extends RootEffect {
  effectType: 'Stacks';
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
export interface RootEffect extends SubRatio {
  name: string;
  raw?: string;
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
