<template>
  <span :class="data.color" :title="val.stat || 'base'">
    <!-- {{ val.pre }} -->
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

const props = defineProps<{ 
  val: SubRatio & RatioObjComputed, 
  recursive?: boolean | undefined, 
  display: 'value' | 'dmg_premitigation' | 'dmg_postmitigation'
 }>()

const dispPre = computed(() => {
  if (props.display === 'value') {
    if (props.val.apply === 'based_on_level') return " (based on level)";
    return props.val.apply || '';
  }
  return '';
});
const dispPost = computed(() => {
  if (props.display === 'value') return props.val.post || props.val.units;
  return '';
  // return props.val.units.slice(1).replace('bonus', '<i>bonus</i>');
});
const data = computed(() => stat_to_display[props.val.stat || 'base'] || default_spell_ratios);

const values = computed(() => {
  switch (props.display) {
    case 'value': {
      if (props.val.apply === 'based_on_level' && Array.isArray(props.val.values)) return `${props.val.values[0]} − ${props.val.values[props.val.values.length - 1]}`
      return props.val.values;
    }
    case 'dmg_premitigation': return Math.round(props.val.damagePreValue.value) || Math.round(props.val.damagePreValue) || 0;
    case 'dmg_postmitigation': return Math.round(props.val.damagePostValue.value) || Math.round(props.val.damagePostValue) || 0;
    default: return 0;
  }
});
</script>