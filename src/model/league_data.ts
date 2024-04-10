import type { DamageType } from '@/api/DataTypes';
import type { ChampObjModel } from './ChampObj';
import versionJson from '../api/version.json';

export const cdn = versionJson.cdn;
export const locale = versionJson.l;
export const version = versionJson.v;
export const displayVersion = versionJson.dv;
export const spriteBaseUri = `${cdn}/${version}/img/sprite/`;

function clampP(num: number): number {
  return Math.max(0, Math.min(num, 1));
}
/// Takes in the damage and all reisstance of it's type.
/// retuens the mingated damage delt.
export function calcDamageWithRedection(
  damage: number,
  base: number,
  bonus: number,
  flat_reduction: number,
  percent_reduction: number,
  percent_pen: number,
  percent_bonus_pen: number,
  flat_pen: number,
): number {
  // Flat Reduction is distuputed between base and bonus armor.
  const base_ratio = base / (base + bonus);
  const bonus_ratio = bonus / (base + bonus);
  // Flat Reduction
  let ebase = base - flat_reduction * base_ratio;
  if (ebase > 0) {
    // % Reduction
    ebase *= clampP(1 - percent_reduction);
    if (ebase > 0) {
      // % Pen
      ebase *= clampP(1 - percent_pen);
    }
  }
  // Flat Reduction
  let ebonus = bonus - flat_reduction * bonus_ratio;
  if (ebonus > 0) {
    // % Reduction
    ebonus *= clampP(1 - percent_reduction);
    if (ebonus > 0) {
      // % Pen and % Bonus Pen
      ebonus *= clampP(1 - percent_pen) * clampP(1 - percent_bonus_pen);
    }
  }
  let defence = ebase + ebonus;
  if (defence > 0) {
    // Flat pen only for positive armor
    defence = Math.max(0, defence - flat_pen);
    return damage * (100 / (100 + defence));
  } else return damage * (2 - 100 / (100 - defence));
}

export function calc_dmg_onhit(
  player: ChampObjModel,
  target: ChampObjModel,
  dmg_premitigation: number,
  damage_type: DamageType,
): number {
  switch (damage_type) {
    case 'None':
      return 0;
    case 'Physical':
      return calcDamageWithRedection(
        dmg_premitigation,
        target.base_armor,
        target.bonus_armor,
        player.flat_armor_reduction,
        player.percent_armor_reduction,
        player.percent_armorpen,
        player.percent_bonus_armorpen,
        player.flat_armorpen,
      );
    case 'Magic':
      return calcDamageWithRedection(
        dmg_premitigation,
        target.base_mr,
        target.bonus_mr,
        player.flat_mr_reduction,
        player.percent_mr_reduction,
        player.percent_magicpen,
        0,
        player.flat_magicpen,
      );
    case 'True':
      return dmg_premitigation;
    default:
      console.log('Unkown Damage Type', damage_type);
      return 0;
  }
}
export function default_stats() {
  return {
    hp: 0,
    hpperlevel: 0,
    mp: 0,
    mpperlevel: 0,
    movespeed: 0,
    armor: 0,
    armorperlevel: 0,
    spellblock: 0,
    spellblockperlevel: 0,
    attackrange: 0,
    hpregen: 0,
    hpregenperlevel: 0,
    mpregen: 0,
    mpregenperlevel: 0,
    crit: 0,
    critperlevel: 0,
    attackdamage: 0,
    attackdamageperlevel: 0,
    attackspeedperlevel: 0,
    attackspeed: 0,
  };
}

export const default_spell_ratios = {
  user: '',
  stat: 'default',
  prefex: 'Default',
  color: 'ap',
  sufex: 'Default',
  html: 'Default',
};
export const spell_ratios = {
  base_damage: {
    user: '',
    prefex: 'Base',
    color: 'base_damage',
    sufex: '',
    extra: true,
    flat: true,
    html: '',
  },
  base_progression: {
    user: '',
    prefex: 'Unknown',
    color: 'base_damage',
    sufex: '',
    extra: true,
    flat: true,
    html: '',
  },
  player_total_ap: {
    user: 'player',
    stat: 'total_ap',
    prefex: '',
    color: 'ap',
    sufex: 'AP',
    html: 'AP',
  },
  player_total_ad: {
    user: 'player',
    stat: 'total_ad',
    prefex: '',
    color: 'ad',
    sufex: 'AD',
    html: 'AD',
  },
  player_bonus_ad: {
    user: 'player',
    stat: 'bonus_ad',
    prefex: '',
    color: 'ad',
    sufex: 'Bonus AD',
    html: '<b>bonus</b> AD',
  },
  player_total_hp: {
    user: 'player',
    stat: 'total_hp',
    prefex: '',
    color: 'health',
    sufex: 'Max Health',
    html: '<b>max</b> health',
  },
  player_bonus_hp: {
    user: 'player',
    stat: 'bonus_hp',
    prefex: '',
    color: 'health',
    sufex: 'Bonus Health',
    html: '<b>bonus</b> health',
  },
  player_missing_hp: {
    user: 'player',
    stat: 'missing_hp',
    prefex: '',
    color: 'health',
    sufex: 'Missing Health',
    html: "of champ's <b>missing</b> health",
  },
  target_total_hp: {
    user: 'target',
    stat: 'total_hp',
    prefex: '',
    color: 'health',
    sufex: "Target's Max Health",
    html: "of target's <b>max</b> health",
  },
  target_bonus_hp: {
    user: 'target',
    stat: 'bonus_hp',
    prefex: '',
    color: 'health',
    sufex: "Target's Bonus Health",
    html: "of target's <b>bonus</b> health",
  },
  target_current_hp: {
    user: 'target',
    stat: 'current_hp',
    prefex: '',
    color: 'health',
    sufex: "Target's Current Health",
    html: "of target's <b>current</b> health",
  },
  target_missing_hp: {
    user: 'target',
    stat: 'missing_hp',
    prefex: '',
    color: 'health',
    sufex: "Target's Missing Health",
    html: "of target's <b>missing</b> health",
  },
  player_bonus_armor: {
    user: 'player',
    stat: 'bonus_armor',
    prefex: '',
    color: 'armor',
    sufex: 'Bonus Armor',
    html: '<b>bonus</b> Armor',
  },
  player_total_armor: {
    user: 'player',
    stat: 'total_armor',
    prefex: '',
    color: 'armor',
    sufex: 'Armor',
    html: '<b>total</b> Armor',
  },
  player_bonus_mr: {
    user: 'player',
    stat: 'bonus_mr',
    prefex: '',
    color: 'mr',
    sufex: 'Bonus Magic Resistance',
    html: '<b>bonus</b> MR',
  },
  player_total_mr: {
    user: 'player',
    stat: 'total_mr',
    prefex: '',
    color: 'mr',
    sufex: 'Magic Resistance',
    html: '<b>total</b> MR',
  },

  // Note these ratios should not exist....
  target_total_ap: {
    user: 'target',
    stat: 'total_ap',
    prefex: '',
    color: 'true',
    sufex: 'Total ???',
    html: '<b>total</b> ???',
  },
};

/**
 * A Single instance of damage.
 */
export class DamageSource {
  /** See DamageType */
  damage_type: DamageType = 'Magic';
  dmg_premitigation = -1;
  dmg_postmitigation = -1;
  repeat = 1;
  postIsManual = true;

  /**
   * @param {DamageType} damage_type One of 'physical', 'magic', 'true', or 'none'
   * @param {number} amount The amount of preminigation damage delt.
   */
  constructor(damage_type: DamageType, amount: number) {
    this.damage_type = damage_type;
    this.dmg_premitigation = amount;
  }

  calc_dmg_onhit(player: ChampObjModel, target: ChampObjModel) {
    return this.dmg_postmitigation;
  }
}
