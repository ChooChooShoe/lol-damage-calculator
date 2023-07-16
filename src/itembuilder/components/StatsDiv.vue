<template>
  <div class="statsdiv">
    <div :class="key" v-for="(value, key) in stats" :key="key">
      +{{ value }}{{ isPercent(key) }}{{ translateStatKey(key) }}
    </div>
    <!-- <div v-if="stats.spe" :key="k" v-html="k"></div> -->
    <!-- <div v-for="stats.spec2" :key="k" v-html="k"></div> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import items from '/src/api/items/items.json';
import Item from './Item.vue';
import { stats_to_name } from '../../runes/Stats';
import type { Stats } from '@/model/items/items.gen';

defineProps<{
  stats: { [k: string]: number | string; };
}>();
</script>

<style></style>

<script lang="ts">
const statsKeyLookup: { [k: string]: string | undefined } = {
  ad: 'ad',
  ah: 'ability haste',
  ap: 'ap',
  armor: 'armor',
  armpen: 'armor pen',
  as: 'attack speed',
  crit: 'crit',
  gp10: 'gold per 10 seconds',
  hp: 'health',
  hp5: '% base health regeneration',
  hp5flat: ' health regen per 5 second',
  hsp: 'hsp',
  lethality: 'leathality',
  lifesteal: 'lifesteal',
  mana: 'mana',
  mp5: '% base mana regeneration',
  mpen: '% magic penetration',
  mpenflat: 'magic penetration',
  mr: 'magic resistance',
  ms: '% movement  speed',
  msflat: 'movement speed',
  omnivamp: '% omnivamp',
  critdamage: '% crit damage',
  spec: '',
  spec_desc: '',
};
function translateStatKey(key: string | number) {
  return ' ' + (statsKeyLookup[key] || '');
}
function isPercent(key: keyof Stats) {
  return key === 'hp5' ||
    key === 'crit' ||
    key === 'mpen' ||
    key === 'critdamage' ||
    key === 'lifesteal'
    ? '?'
    : '';
}
</script>
