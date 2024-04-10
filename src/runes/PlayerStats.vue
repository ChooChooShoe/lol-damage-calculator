<template>
  <div class="statsdiv">
    <div :class="key" v-for="(val, key) in statsTotal.stats" :key="key">
      +{{ val }}{{ stats_to_name[key] }}
    </div>
    <div v-for="val in statsTotal.spec" v-html="val"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { reactive, ref } from 'vue';
import { StatBlock, StatMod, stats_to_name } from './Stats';

const statsTotal = computed(() => {
  const ret: { stats: StatBlock; spec: string[] } = { stats: {}, spec: [] };
  for (const statMod of props.statmods) {
    for (const [stat, val] of Object.entries(statMod.stats) as [
      keyof StatBlock,
      number | string | number[],
    ][]) {
      if (typeof val === 'string') {
        // spec and spec2 are unique.
        if (!ret.spec.includes(val)) ret.spec.push(val);
      } else if (Array.isArray(val)) {
        ret.stats[stat] = ((ret.stats[stat] as number[]) || []).push(val);
      } else {
        ret.stats[stat] = ((ret.stats[stat] as number) || 0) + val;
      }
    }
  }
  return ret;
});

const props = defineProps<{ statmods: StatMod[] }>();
</script>

<style>
.PlayerStats {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
