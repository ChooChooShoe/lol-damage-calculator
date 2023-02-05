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

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
