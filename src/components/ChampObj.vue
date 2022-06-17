<template>
  <slot></slot>
</template>

<script>
import championList from "/src/api/ChampionList.json";
import { reactive, inject, watchEffect, computed, provide, toRefs } from "vue";
import { CORE_STATS } from "../javascript/league_data";

export default {
  setup(props, context) {
    let obj = reactive({
      clearStats: false,
      champ: "",
      level: 18,
      flat_mr_reduction: 0,
      percent_mr_reduction: 0,
      percent_magicpen: 0,
      flat_magicpen: 0,
      flat_armor_reduction: 0,
      percent_armor_reduction: 0,
      percent_armorpen: 0,
      percent_bonus_armorpen: 0,
      lethality: 0,

      lifesteal: 0,
      spellvamp: 0,
      missing_hp: 0,
      total_shield: 0,
      total_ap: 0,
      ability_haste: 0,
    });
    context.emit("update:obj", obj);

    obj.flat_armorpen = computed({
      get: () => obj.lethality * (0.6 + (0.4 * obj.level) / 18),
      set: (val) => {
        obj.lethality = Math.round((45 * val) / (obj.level + 27));
      },
    });

    obj.current_hp = computed({
      get: () => obj.total_hp - obj.missing_hp,
      set: (current_hp) => {
        if (current_hp > obj.total_hp) obj.total_hp = current_hp;
        obj.missing_hp = obj.total_hp - current_hp;
      },
    });

    obj.base_attackspeed = 0.625; // non-riot 
    obj.bonus_attackspeed = 0;
    obj.total_attackspeed = computed({
      get: () => obj.base_attackspeed * (1 + obj.bonus_attackspeed / 100.0),
      set: (val) => {
        obj.bonus_attackspeed = (val / obj.base_attackspeed - 1) * 100.0;
      },
    });

    for (const stat of CORE_STATS) {
      obj[`base_${stat}`] = 0;
      obj[`bonus_${stat}`] = 0;
      obj[`total_${stat}`] = computed({
        get: () => obj[`base_${stat}`] + obj[`bonus_${stat}`],
        set: (val) => {
          obj[`bonus_${stat}`] = val - obj[`base_${stat}`];
        },
      });
    }

    // get championList from App
    // auto gets stats when champ changes
    const stats = computed(() => {
      if (championList[obj.champ]) return championList[obj.champ].stats;
      return {};
    });

    // auto updates base stats when the level or champion changes
    watchEffect(() => {
      console.log('Stats Update watchEffect()')
      const level = Math.max(Math.min(obj.level, 18), 0);
      const bs = stats.value;

      // Set clearStats to true will remove bonus_ stats
      if (obj.clearStats) {
        obj.clearStats = false;
        for (const stat of CORE_STATS) {
          obj[`bonus_${stat}`] = 0;
        }
        
        obj.flat_mr_reduction = 0;
        obj.percent_mr_reduction = 0;
        obj.percent_magicpen = 0;
        obj.flat_magicpen = 0;
        
        obj.flat_armor_reduction = 0;
        obj.percent_armor_reduction = 0;
        obj.percent_armorpen = 0;
        obj.percent_bonus_armorpen = 0;
        obj.lethality = 0;

        obj.lifesteal = 0;
        obj.spellvamp = 0;
        obj.missing_hp = 0;
        obj.total_shield = 0;
        obj.total_ap = 0;
        obj.ability_haste = 0;
      }

      const growth = (perlevel) => {
        return perlevel * (level - 1) * (0.7025 + 0.0175 * (level - 1));
      };

      obj.base_ad = bs.dam_base + growth(bs.dam_lvl) || 0;
      obj.base_hp = bs.hp_base + growth(bs.hp_lvl) || 0;
      obj.base_mana = bs.mp_base + growth(bs.mp_lvl) || 0;
      obj.base_movespeed = bs.ms || 0;
      obj.base_armor = bs.arm_base + growth(bs.arm_lvl) || 0;
      obj.base_mr = bs.mr_base + growth(bs.mr_lvl) || 0;
      obj.base_attackrange = bs.range || 0;
      obj.base_hpregen = bs.hp5_base + growth(bs.hp5_lvl) || 0;
      obj.base_manaregen = bs.mp5_base + growth(bs.mp5_lvl) || 0;
      // Always 0 in stats
      // obj.base_critchance = bs.crit + growth(bs.critperlevel) || 0;
      obj.base_critchance = 0;
      // Not a riot base state
      obj.base_critdamage = 175;

      // non-core stats
      obj.base_attackspeed = bs.as_base || 0;
      obj.bonus_attackspeed = growth(bs.as_lvl) || 0;
      
      // wiki only stats
      // "selection_radius": 120,
      // "pathing_radius": 35,
      // "attack_cast_time": 0.230000004172325,
      // "attack_total_time": 1.5,
      // "aram_dmg_dealt": 1.1,
      // "aram_dmg_taken": 0.85,
      // "nb_dmg_taken": 0.95,
      // "ofa_dmg_dealt": 1.05,
      // "ofa_dmg_taken": 0.95,
      // "urf_dmg_dealt": 1.05,
      // "urf_dmg_taken": 0.95
    });

    // Other non-direct stats
    obj.cdr = computed({
      get: () => {  
        return obj.ability_haste / (obj.ability_haste + 100)
      },
      set: (val) => {
        if (val > 0.9999) val = 0.9999;
        obj.ability_haste = 100 / (-val + 1.0) - 100;
      },
    });
    obj.percent_pysical_reduction = computed({
      get: () => {
        if (obj.total_armor < 0.0)
          // Damage is amplified.
          return -1.0 + 100.0 / (100.0 - obj.total_armor);
        //Normal damage reduction.
        else return 1.0 - 100.0 / (100.0 + obj.total_armor);
      },
      set: (val) => {
        if (val > 0.9999) val = 0.9999;
        obj.total_armor = 100 / (-val + 1.0) - 100;
      },
    });
    obj.eff_physical_hp = computed({
      get: () => (1 + obj.total_armor / 100.0) * obj.total_hp,
      set: (val) => {},
    });
    obj.percent_magic_reduction = computed({
      get: () => {
        if (obj.total_mr < 0.0) return -1.0 + 100.0 / (100.0 - obj.total_mr);
        else return 1.0 - 100.0 / (100.0 + obj.total_mr);
      },
      set: (val) => {
        if (val > 0.9999) val = 0.9999;
        obj.total_mr = 100 / (-val + 1.0) - 100;
      },
    });
    obj.eff_magic_hp = computed({
      get: () => (1 + obj.total_mr / 100.0) * obj.total_hp,
      set: (val) => {},
    });

    provide("ChampObj", obj);
    // return { obj, stats };
  },
};
</script>
