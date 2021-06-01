<template>
  <slot></slot>
</template>

<script>
import { reactive, inject, watchEffect, computed, provide } from "vue";

export default {
  setup() {
    let obj = reactive({
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

      critdamage: 1.75,
      lifesteal: 0,
      spellvamp: 0,
      missing_hp: 0,
      total_shield: 0,
      total_ap: 0,
    });

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

    obj.base_attackspeed = 0.625;
    obj.bonus_attackspeed = 0;
    obj.total_attackspeed = computed({
      get: () => obj.base_attackspeed * (1 + obj.bonus_attackspeed / 100.0),
      set: (val) => {
        obj.bonus_attackspeed = (val / obj.base_attackspeed - 1) * 100.0;
      },
    });

    for (const stat of [
      "ad",
      "hp",
      "mana",
      "movespeed",
      "armor",
      "mr",
      "attackrange",
      "hpregen",
      "manaregen",
      "critchance",
    ]) {
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
    const championList = inject("championList");
    // auto gets stats when champ changes
    const stats = computed(() => {
      if (championList.value[obj.champ])
        return championList.value[obj.champ].stats;
      return {};
    });

    // auto updates base stats when the level or champion changes
    watchEffect(() => {
      const level = Math.max(Math.min(obj.level, 18), 0);
      const bs = stats.value;

      const growth = (perlevel) => {
        return perlevel * (level - 1) * (0.7025 + 0.0175 * (level - 1));
      };

      obj.base_ad = bs.attackdamage + growth(bs.attackdamageperlevel) || 0;
      obj.base_hp = bs.hp + growth(bs.hpperlevel) || 0;
      obj.base_mana = bs.mp + growth(bs.mpperlevel) || 0;
      obj.base_movespeed = bs.movespeed || 0;
      obj.base_armor = bs.armor + growth(bs.armorperlevel) || 0;
      obj.base_mr = bs.spellblock + growth(bs.spellblockperlevel) || 0;
      obj.base_attackrange = bs.attackrange || 0;
      obj.base_hpregen = bs.hpregen + growth(bs.hpregenperlevel) || 0;
      obj.base_manaregen = bs.mpregen + growth(bs.mpregenperlevel) || 0;
      obj.base_critchance = bs.crit + growth(bs.critperlevel) || 0;

      obj.base_attackspeed = bs.attackspeed || 0;
      obj.bonus_attackspeed = growth(bs.attackspeedperlevel) || 0;
    });

    // Other non-direct stats
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
      get: () => (1 + this.obj.total_mr / 100.0) * this.obj.total_hp,
      set: (val) => {},
    });

    provide("ChampObj", obj);
    return { obj, stats };
  },
};
</script>
