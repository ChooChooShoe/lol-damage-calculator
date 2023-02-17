import { reactive } from 'vue';
import { ChampObjModel } from '../model/ChampObj';
import type { DamageSource } from '../model/league_data';

export const player = reactive(new ChampObjModel('player', 'Ashe'));
export const target = reactive(new ChampObjModel('target', 'Zoe'));
export const playerStatusEffects = reactive<{ [key: string]: StatusEffect }>(
  {}
);
export const damageSources: { [key: string]: DamageSource[] } = reactive({});

export class StatusEffect {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useDamageSources = defineStore('damageSources', () => {
  const damageSources: Record<string, DamageSource[]> = reactive({});
  // const iter = computed(() => count.value * 2);
  function addSource(name: string, ...src: DamageSource[]) {
    if (name in damageSources) {
      damageSources[name].push(...src);
    } else damageSources[name] = src;
  }
  function removeSource(name: string) {
    delete damageSources[name];
  }
  return { damageSources, addSource, removeSource };
});
