<template>
  <span :class="data.color">{{ recursive ? ' (+' : '' }}
    <SpellSpan :class="data.color" :list="values"></SpellSpan>{{ applyDisplay }}
    <RecursiveRatioDisplay :recursive="true" :display="display" :val="v" :key="k" v-for="(v, k) in val.sub_calcs"> </RecursiveRatioDisplay>{{ val.user === 'target' && display == 'value' ? "of target's " : ''
    }}<span v-if="data.html && display == 'value'" v-html="data.html"></span>{{
    recursive ? ')' : ''
}}
  </span>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { stat_to_display, default_spell_ratios, RatioObj, RatioObjComputed } from './ratios_info';
import SpellSpan from '../SpellSpan.vue';

const { val, recursive, display } = defineProps<{ val: RatioObj&RatioObjComputed, recursive?: boolean | undefined, display: string }>()

const applyDisplay = computed(() => {
  if (display !== 'value') return '';
  switch (val.apply) {
    case 'percent': return '%'
    case 'per': return '% per'
    case 'per100': return '% per 100'
  }
});
const data = computed(() => stat_to_display[val.stat] || default_spell_ratios);

const values = computed(() => {
  switch (display) {
    case 'value': return val.values;
    case 'dmg_premitigation': return Math.round(val.damagePostValue);
    case 'dmg_postmitigation': return Math.round(val.damagePostValue);
    default: return 0;
  }
});
</script>