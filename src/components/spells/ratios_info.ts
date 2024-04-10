import type { ChampObjModel } from '@/model/ChampObj';
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import type { RootRatio, StacksEffect, SubRatio } from '../../api/DataTypes';

export const default_spell_ratios: RatioData = {
  prefex: 'Default',
  color: 'ap',
  sufex: 'Default',
  html: 'Default',
};

interface RatioData {
  prefex?: string;
  color: string;
  sufex?: string;
  html: string | null;
  ispercent?: boolean;
}
export const stat_to_display: { [key: string]: RatioData } = {
  base: { html: null, color: 'base_damage' },
  total_ap: { html: 'AP', color: 'ap' },
  total_ad: { html: 'AD', color: 'ad' },
  bonus_ad: { html: '<i>bonus</i> AD', color: 'ad' },
  total_armor: { html: 'total Armor', color: 'armor' },
  bonus_armor: { html: '<i>bonus</i> Armor', color: 'armor' },
  base_armor: { html: '<b>base</ib> Armor', color: 'armor' },
  total_mr: { html: 'total Magic Resistance', color: 'mr' },
  bonus_mr: { html: '<i>bonus</i> Magic Resistance', color: 'mr' },
  base_mr: { html: '<b>base</ib> Magic Resistance', color: 'mr' },
  total_critical_strike_chance: { html: 'critical strike chance', color: 'hp' },
  total_life_steal: { html: 'life steal', color: 'hp' },
  total_hp: { html: 'health', color: 'hp' },
  maximum_hp: { html: 'maximum health', color: 'hp' },
  bonus_hp: { html: '<i>bonus</i> health', color: 'hp' },
  base_hp: { html: '<b>base</b> health', color: 'hp' },
  missing_hp: { html: '<i>missing</i> health', color: 'hp' },
  current_hp: { html: '<b>current</ib> health', color: 'hp' },
  total_mana: { html: 'Mana', color: 'mana' },
  total_kindred_mark: { html: 'Kindred Mark', color: 'mr' },
  total_feast_stack: { html: 'Feast Stack', color: 'mr' },
  total_nasus_stack: { html: 'Siphoning Strike', color: 'mr' },
};

const x = {
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

export interface SubRatioComputed {
  baseValue: ComputedRef<number>;
  scaledValue: ComputedRef<number>;
  // damagePostValue: ComputedRef<number>;
  children: Array<SubRatioComputed>;
}

export interface RootRatioComputed extends SubRatioComputed {
  scaledValueTotal: ComputedRef<number>;
  // damagePostTotal: ComputedRef<number>;
}
import { type Ref, reactive } from 'vue';
import { calc_dmg_onhit } from '@/model/league_data';
import { player, target } from '@/global/state';

export function makeRootRatio(
  ratio: Exclude<RootRatio, StacksEffect>,
  spellRankIndex: Ref<number> | undefined,
  obj: ChampObjModel,
): RootRatioComputed {
  const reactiveRatio = reactive(ratio);

  const newRoot = makeSubRatio(reactiveRatio, spellRankIndex, obj) as Exclude<
    RootRatio,
    StacksEffect
  > &
    SubRatioComputed;

  const scaledValueTotal = computed((): number => {
    let value = newRoot.scaledValue.value || 0;
    for (const r of newRoot.children) {
      value = value + (r.scaledValue.value || 0);
    }
    return value;
  });
  // const damagePostTotal = computed(() => {
  //   let value = damagePostValue.value;
  //   for (const r of sub_calcs) {
  //     value = value + (r.damagePostValue?.value || 0);
  //   }
  //   return value;
  // });
  return Object.assign(newRoot, { scaledValueTotal });
}
/**
 * Convers a SubRatio to a SubRatio & SubRatioComputed by adding the needed auto-calc fields.
 * @param ratio
 */
export function makeSubRatio(
  ratio: SubRatio,
  spellRankIndex: Ref<number> | undefined,
  obj: ChampObjModel | undefined,
): SubRatioComputed {
  const baseValue = computed((): number => {
    console.log('baseValue');
    let v: number;
    if (Array.isArray(ratio.values)) {
      if (ratio.valuesIsBasedOnLevel) v = ratio.values[(obj?.level || 1) - 1];
      else v = ratio.values[spellRankIndex?.value || 0];
    } else v = ratio.values;
    if (!Number.isFinite(v)) v = 0;
    if (ratio.valuesIsPercent) v = v / 100;
    return v;
  });
  const scaledValue = computed((): number => {
    // const tempo = player.lethalTempoStacks;
    const user = ratio.user;
    const units = ratio.units;
    const base = baseValue.value;

    console.log('scaledValue');
    if (units === '' || user === 'none') return base;
    /// ratio.user undefined is a "player"
    const obj = ratio.user === 'target' ? target : player;
    const statValue = obj[units];
    if (isNaN(statValue)) {
      console.warn(
        `StatMissing '${units}' for ${obj.champ} with value of ${base}`,
      );
      return base;
    }
    return statValue * base;
  });
  // const damagePostValue = computed(() =>
  //   calc_dmg_onhit(player, target, damagePreValue.value, damage_type.value)
  // );
  const children: SubRatioComputed[] = [];
  if (ratio.children)
    for (const child of ratio.children)
      children.push(makeSubRatio(child, spellRankIndex, obj));

  return { baseValue, scaledValue, children };
}
