import type { ChampObjStats } from '@/api/ChampObjStats';
import type {
  RootRatio,
  SkillDetails,
  SkillDetailsModel,
  SkillGenData,
  SkillLevelingData,
  SkillModel,
} from '@/api/DataTypes';
import { PerkSelections } from '../runes/perks';

import { ItemInventory } from './ItemInventory';

import ChampionsGen from '@/generated/Champions.gen';
import type { ChampionName } from '@/generated/Champions.gen';
export type { ChampionName };

export async function getSkillsModel(
  champ: ChampionName,
): Promise<ChampionModel | undefined> {
  return import(`@/generated/champion/${champ}.gen.ts`).then((mod) =>
    toChampModel(mod),
  );
}
export type ChampionModel = { Skills: { [key: string]: SkillModel } };
function toChampModel(imported: any): ChampionModel {
  const ret: ChampionModel = { Skills: {} };
  if (imported && imported.Skills) {
    for (const [key, value] of Object.entries(imported.Skills)) {
      ret.Skills[key] = toSkillModel(value as SkillGenData);
    }
  }
  return ret;
}

function toSkillModel(base: SkillGenData): SkillModel {
  const maxrank = 5;
  const details = base.details.map((x) => toSkillDetailsModel(x));
  return {
    ...base,
    image: undefined,
    maxrank,
    details,
  };
}

function toSkillDetailsModel(base: SkillDetails): SkillDetailsModel {
  const descriptionRatios: RootRatio[] = [];
  const leveling2: SkillLevelingData[] = [];
  const levelingRatios: RootRatio[] = [];
  return {
    ...base,
    descriptionRatios,
    leveling2,
    levelingRatios,
  };
}

export function isChampionName(name?: string | null): name is ChampionName {
  return !!name && name in ChampionsGen;
}

export function validateName(value: any): ChampionName | undefined {
  if (isChampionName(value)) return value;
  if (!value) return undefined;
  for (const el of Object.keys(ChampionsGen)) {
    if (el.toLowerCase().includes(value.toLowerCase())) {
      return el as ChampionName;
    }
  }
  console.log('[WARN] validateNames: invalid', value);
  return undefined;
}

export class ChampObjModel implements ChampObjStats {
  /**
   * per_level stat to stat at current level.
   */
  growth(per_level: number): number {
    return per_level * (this.level - 1) * (0.7025 + 0.0175 * (this.level - 1));
  }

  updateBaseStats() {
    //TODO some stats are missing range_lvl and as_level1
    const bs = ChampionsGen[this.champ].stats;
    this.base_ad = bs.dam_base + this.growth(bs.dam_lvl);
    this.base_hp = bs.hp_base + this.growth(bs.hp_lvl);
    this.base_mana = bs.mp_base + this.growth(bs.mp_lvl);
    this.base_movespeed = bs.ms;
    this.base_armor = bs.arm_base + this.growth(bs.arm_lvl);
    this.base_mr = bs.mr_base + this.growth(bs.mr_lvl);
    this.base_attackrange = bs.range;
    this.base_hpregen = bs.hp5_base + this.growth(bs.hp5_lvl);
    this.base_manaregen = bs.mp5_base + this.growth(bs.mp5_lvl);
    // as_base: number,
    // as_lvl: number,
    this.base_attackspeed = bs.as_base;
    this.bonus_attackspeed = this.growth(bs.as_lvl);
  }
  public clearStats() {
    this.bonus_ad = 0;
    this.bonus_hp = 0;
    this.bonus_mana = 0;
    this.bonus_movespeed = 0;
    this.bonus_armor = 0;
    this.bonus_mr = 0;
    this.bonus_attackrange = 0;
    this.bonus_hpregen = 0;
    this.bonus_manaregen = 0;
    this.bonus_critchance = 0;
    this.bonus_critdamage = 0;

    this.flat_mr_reduction = 0;
    this.percent_mr_reduction = 0;
    this.percent_magicpen = 0;
    this.flat_magicpen = 0;

    this.flat_armor_reduction = 0;
    this.percent_armor_reduction = 0;
    this.percent_armorpen = 0;
    this.percent_bonus_armorpen = 0;
    this.lethality = 0;

    this.lifesteal = 0;
    this.spellvamp = 0;
    this.missing_hp = 0;
    this.total_shield = 0;
    this.total_ap = 0;
    this.ability_haste = 0;
    this.ultimateHaste = 0;

    this.gold = 0;
  }

  _champ: ChampionName;
  get champ() {
    return this._champ;
  }
  set champ(champ) {
    this._champ = champ;
    this.clearStats();
    this.updateBaseStats();
  }
  user: 'player' | 'target';
  _level = 18;
  public get level(): number {
    return this._level;
  }
  public set level(value: number) {
    this._level = Math.max(Math.min(value, 18), 0);
    this.updateBaseStats();
  }
  flat_mr_reduction = 0;
  percent_mr_reduction = 0;
  percent_magicpen = 0;
  flat_magicpen = 0;
  flat_armor_reduction = 0;
  percent_armor_reduction = 0;
  percent_armorpen = 0;
  percent_bonus_armorpen = 0;
  lethality = 0;
  get flat_armorpen(): number {
    return this.lethality * (0.6 + (0.4 * this.level) / 18);
  }
  set flat_armorpen(v: number) {
    this.lethality = Math.round((45 * v) / (this.level + 27));
  }

  lifesteal = 0;
  spellvamp = 0;
  omnivamp = 0;
  pysicalvamp = 0;

  tenacity = 0;
  slow_resist = 0;

  base_hp = 0;
  bonus_hp = 0;
  get maximum_hp() {
    return this.base_hp + this.bonus_hp;
  }
  set maximum_hp(v) {
    this.bonus_hp = v - this.base_hp;
  }
  get total_hp() {
    return this.base_hp + this.bonus_hp;
  }
  set total_hp(v) {
    this.bonus_hp = v - this.base_hp;
  }
  missing_hp = 0;
  get current_hp() {
    return this.maximum_hp - this.missing_hp;
  }
  set current_hp(current_hp) {
    if (current_hp > this.maximum_hp) this.maximum_hp = current_hp;
    this.missing_hp = this.maximum_hp - current_hp;
  }
  total_shield = 0;
  total_ap = 0;
  ability_haste = 0;
  ultimateHaste = 0;
  get cdr() {
    return this.ability_haste / (this.ability_haste + 100.0);
  }
  set cdr(v) {
    if (v > 0.9999) v = 0.9999;
    this.ability_haste = 100.0 / (-v + 1.0) - 100.0;
  }

  base_attackspeed = 0.625; // non-riot
  bonus_attackspeed = 0;
  get total_attackspeed(): number {
    return this.base_attackspeed * (1 + this.bonus_attackspeed / 100.0);
  }
  set total_attackspeed(v: number) {
    this.bonus_attackspeed = (v / this.base_attackspeed - 1) * 100.0;
  }

  get percent_pysical_reduction() {
    if (this.total_armor < 0.0)
      return -1.0 + 100.0 / (100.0 - this.total_armor);
    else return 1.0 - 100.0 / (100.0 + this.total_armor);
  }
  set percent_pysical_reduction(v) {
    if (v > 0.9999) v = 0.9999;
    if (v < -0.9999) v = -0.9999;
    this.total_armor = 100.0 / (-v + 1.0) - 100.0;
  }
  get eff_physical_hp() {
    return (1 + this.total_armor / 100.0) * this.maximum_hp;
  }
  set eff_physical_hp(v) {
    /* TODO */
  }

  get percent_magic_reduction() {
    if (this.total_mr < 0.0) return -1.0 + 100.0 / (100.0 - this.total_mr);
    else return 1.0 - 100.0 / (100.0 + this.total_mr);
  }
  set percent_magic_reduction(v) {
    if (v > 0.9999) v = 0.9999;
    if (v < -0.9999) v = -0.9999;
    this.total_mr = 100.0 / (-v + 1.0) - 100.0;
  }
  get eff_magic_hp() {
    return (1 + this.total_mr / 100.0) * this.maximum_hp;
  }
  set eff_magic_hp(v) {
    /* TODO */
  }

  // get base_ad() { bs.dam_base + this.growth(bs.dam_lvl); }
  // get base_hp() { bs.hp_base + this.growth(bs.hp_lvl); }
  // get base_mana() { bs.mp_base + this.growth(bs.mp_lvl); }
  // get base_movespeed() { bs.ms; }
  // get base_armor() { bs.arm_base + this.growth(bs.arm_lvl); }
  // get base_mr() { bs.mr_base + this.growth(bs.mr_lvl); }
  // get base_attackrange() { bs.range }
  // get base_hpregen() { bs.hp5_base + this.growth(bs.hp5_lvl); }
  // get base_manaregen() { bs.mp5_base + this.growth(bs.mp5_lvl); }

  // generated props
  base_ad = 0;
  bonus_ad = 0;
  get total_ad() {
    return this.base_ad + this.bonus_ad;
  }
  set total_ad(v) {
    this.bonus_ad = v - this.base_ad;
  }
  base_mana = 0;
  bonus_mana = 0;
  get total_mana() {
    return this.base_mana + this.bonus_mana;
  }
  set total_mana(v) {
    this.bonus_mana = v - this.base_mana;
  }
  base_movespeed = 0;
  bonus_movespeed = 0;
  get total_movespeed() {
    return this.base_movespeed + this.bonus_movespeed;
  }
  set total_movespeed(v) {
    this.bonus_movespeed = v - this.base_movespeed;
  }
  base_armor = 0;
  bonus_armor = 0;
  get total_armor() {
    return this.base_armor + this.bonus_armor;
  }
  set total_armor(v) {
    this.bonus_armor = v - this.base_armor;
  }
  base_mr = 0;
  bonus_mr = 0;
  get total_mr() {
    return this.base_mr + this.bonus_mr;
  }
  set total_mr(v) {
    this.bonus_mr = v - this.base_mr;
  }
  base_attackrange = 0;
  bonus_attackrange = 0;
  get total_attackrange() {
    return this.base_attackrange + this.bonus_attackrange;
  }
  set total_attackrange(v) {
    this.bonus_attackrange = v - this.base_attackrange;
  }
  base_hpregen = 0;
  bonus_hpregen = 0;
  get total_hpregen() {
    return this.base_hpregen + this.bonus_hpregen;
  }
  set total_hpregen(v) {
    this.bonus_hpregen = v - this.base_hpregen;
  }
  base_manaregen = 0;
  bonus_manaregen = 0;
  get total_manaregen() {
    return this.base_manaregen + this.bonus_manaregen;
  }
  set total_manaregen(v) {
    this.bonus_manaregen = v - this.base_manaregen;
  }
  base_critchance = 0;
  bonus_critchance = 0;
  get total_critchance() {
    return this.base_critchance + this.bonus_critchance;
  }
  set total_critchance(v) {
    this.bonus_critchance = v - this.base_critchance;
  }
  base_critdamage = 175;
  bonus_critdamage = 0;
  get total_critdamage() {
    return this.base_critdamage + this.bonus_critdamage;
  }
  set total_critdamage(v) {
    this.bonus_critdamage = v - this.base_critdamage;
  }

  // runes: Perk[] = Array(9)
  itemInventory = new ItemInventory(this);

  bountyHunterStacks = 0;
  darkHarvestStacks = 0;
  legendStacks = 0;
  lethalTempoStacks = 0;
  conquerorStacks = 0;
  zombieWardsPlaced = 0;
  gold = 0;
  healAndShieldPower = 0;
  itemHaste = 0;
  summonerSpellHaste = 0;
  runes: PerkSelections;

  kindredMarks = 0;
  feastStacks = 0;
  siphoningStrikeStacks = 0;
  genericStacks = 0;

  // Fizz, Leona, Guardian's Horn
  flatDamageReductionPreMitigation = 0;
  // Amumu's Tantrum, Frozen Heart, Randuin's Omen, Warden's Mail
  flatDamageReductionPostMitigation = 0;
  // for Bone Plateing
  flatTrueDamageReduction = 0;

  // Coup de Grace
  percentDamageIncrease = 0;

  // For First Strike
  postMitigationBaseDamageTotal = 0;
  energy = 0;

  constructor(user: 'player' | 'target', champ: ChampionName) {
    this.user = user;
    this._champ = champ;
    this.updateBaseStats();
    this.runes = new PerkSelections();
  }

  public isRuneActive(runename: string): boolean {
    for (const p of this.runes.primarySelections) {
      // if (runename === p.name)
      return true;
    }
    return false;
  }
}
class Rune {
  constructor(id: number) {}
}
// Stats Gernerator
// function statsGen(): string {
//     let s = [];
//     for (const stat of ["ad", "hp", "mana", "movespeed", "armor", "mr", "attackrange", "hpregen", "manaregen", "critchance", "critdamage"]) {
//         s.push(`base_${stat}: 0,`);
//         s.push(`bonus_${stat}: 0,`);
//         s.push(`get total_${stat}() {return this.base_${stat} + this.bonus_${stat}},`);
//         s.push(`set total_${stat}(v) { this.bonus_${stat} = v - this.base_${stat}},`);
//     }
//     return s.join('\n')
// }

// export interface FullChampJson {
//     skills: ChampionSkills,
// }

// export interface ChampionSkills {
//     [key: string]: SkillJson,
// }
