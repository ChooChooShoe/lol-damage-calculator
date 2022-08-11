<template>
  <span :class="data.color" :title="val.stat || 'base'">
    {{ recursive ? '(+' : '' }}
    <SpellSpan :class="data.color" :list="values"></SpellSpan>{{ dispPre }}
    <RecursiveRatioDisplay :recursive="true" :display="display" :val="v" :key="v.stat" v-for="(v, k) in (val.sub_calcs || val.sub_ratios)">
    </RecursiveRatioDisplay>
    {{ dispPost }}
    <!-- <span v-if="data.html && display == 'value'" v-html="data.html"></span> -->
    {{ recursive ? ') ' : '' }}
  </span>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { stat_to_display, default_spell_ratios, RatioObjComputed } from './ratios_info';
import SpellSpan from '../SpellSpan.vue';
import { SubRatio } from '../../api/DataTypes';

const props = defineProps<{ val: SubRatio & RatioObjComputed, recursive?: boolean | undefined, display: 'value' | 'dmg_premitigation' | 'dmg_postmitigation' }>()

const dispPre = computed(() => {
  if (props.display === 'value') return props.val.apply || '';
  return '';
});
const dispPost = computed(() => {
  if (props.display === 'value') return props.val.units;
  return '';
  // return props.val.units.slice(1).replace('bonus', '<i>bonus</i>');
});
const data = computed(() => stat_to_display[props.val.stat || 'base'] || default_spell_ratios);

const values = computed(() => {
  switch (props.display) {
    case 'value': return props.val.values;
    case 'dmg_premitigation': return Math.round(props.val.damagePostValue);
    case 'dmg_postmitigation': return Math.round(props.val.damagePostValue);
    default: return 0;
  }
});
</script>