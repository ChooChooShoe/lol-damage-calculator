
<template>
  <div class="statsdiv">
    <div :class="v" v-for="(k, v) in stats.stats" :key="k">+{{ k }}{{ stats_to_name[v] }}</div>
    <div v-for="k in stats.spec" :key="k" v-html="k"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import items from "/src/api/items/items.json";
import Item from "./Item.vue";

const props = defineProps({ stats: Object });
const stats_to_name = {
  ap: ` ability power`,
  ad: ` attack damage`,
  cdr: ` cooldown reduction`,
  ah: ` ability haste`,
  as: ` attack speed`,
  crit: ` critical strike chance`,
  hp: ` health`,
  mana: ` mana`,
  hp5: `% base health regeneration`,
  hp5flat: ` health per 5 seconds`,
  mp5: `% base mana regeneration`,
  mp5flat: ` mana per 5 seconds`,
  armor: ` armor`,
  mr: ` magic resistance`,
  ms: `% movement speed`,
  msflat: ` movement speed`,
  gp10: ` Gold per 10 seconds`,
  hsp: ` heal and shield power`,
  armpen: ` armor penetration`,
  lethality: ` lethality`,
  mpen: `% magic penetration`,
  mpenflat: ` magic penetration`,
  lifesteal: ` life steal`,
  omnivamp: ` omnivamp`,
  pvamp: ` physical vamp`,
  spellvamp: ` spell vamp`,
};
</script>

<style>
</style>
