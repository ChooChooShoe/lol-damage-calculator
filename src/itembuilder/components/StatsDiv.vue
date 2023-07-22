<template>
  <ul class="statsdiv">
    <li :class="key" v-for="(value, key) in stats" :key="key">
      +{{ value }}{{ isPercent(key) }}{{ translateStatKey(key) }}
    </li>
    <li v-if="specialStat" v-html="specialStat"></li>
    <li v-if="specialStat2" v-html="specialStat2"></li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import items from '/src/api/items/items.json';
import Item from './Item.vue';
import { stats_to_name } from '../../runes/Stats';
import type { Stats } from '@/model/items/items.gen';

defineProps<{
  stats: { [k: string]: number | string };
  specialStat?: string;
  specialStat2?: string;
}>();
</script>

<style>
.statsdiv {
  background-color: rgba(139, 139, 139, 0.1);
  border: 1px solid gold;
}
</style>

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
  hp5: 'base health regeneration',
  hp5flat: ' health regen per 5 second',
  hsp: 'hsp',
  lethality: 'leathality',
  lifesteal: 'lifesteal',
  mana: 'mana',
  mp5: 'base mana regeneration',
  mpen: 'magic penetration',
  mpenflat: 'magic penetration',
  mr: 'magic resistance',
  ms: 'movement  speed',
  msflat: 'movement speed',
  omnivamp: 'omnivamp',
  critdamage: 'crit damage',
  spec: '',
  spec_desc: '',
};
function translateStatKey(key: string | number) {
  return ' ' + (statsKeyLookup[key] || '');
}
function isPercent(key: string | number) {
  return key === 'hp5' ||
    key === 'crit' ||
    key === 'mpen' ||
    key === 'critdamage' ||
    key === 'lifesteal'
    ? '%'
    : '';
}
</script>
