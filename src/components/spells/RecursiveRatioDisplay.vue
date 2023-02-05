<template>
  <span :class="data.color" :title="val.units || 'base'">
    <!-- {{ val.pre }} -->
    {{ recursive ? '(+' : '' }}
    <SpellSpan :class="data.color" :list="values"></SpellSpan>{{ dispPre }}
    <RecursiveRatioDisplay
      :recursive="true"
      :display="display"
      :val="v"
      :key="v.units"
      :valueResolver="valueResolver"
      v-for="(v, k) in val.children"
    >
    </RecursiveRatioDisplay>
    {{ dispPost }}
    <!-- <span v-if="data.html && display == 'value'" v-html="data.html"></span> -->
    {{ recursive ? ') ' : '' }}
  </span>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import {
  stat_to_display,
  default_spell_ratios,
  type SubRatioComputed,
} from './ratios_info';
import SpellSpan from '../SpellSpan.vue';
import type { SubRatio } from '../../api/DataTypes';

const props = defineProps<{
  val: SubRatio & SubRatioComputed;
  recursive?: boolean | undefined;
  display: 'value' | 'dmg_premitigation' | 'dmg_postmitigation';
  valueResolver?: Function;
}>();

const dispPre = computed(() => {
  let str = '';
  if (props.display === 'value') {
    if (props.val.valuesIsPercent) str += '%';
    if (props.val.valuesIsBasedOnLevel) str += ' (based on level)';
  }
  return str;
});
const dispPost = computed(() => {
  if (props.display === 'value') return props.val.post || props.val.unitsText;
  return '';
  // return props.val.units.slice(1).replace('bonus', '<i>bonus</i>');
});
const data = computed(
  () => stat_to_display[props.val.units || 'base'] || default_spell_ratios
);

const values = computed(() => {
  if (props.valueResolver)
    return props.valueResolver(props.val, props.recursive);

  switch (props.display) {
    case 'value': {
      if (props.val.valuesIsBasedOnLevel && Array.isArray(props.val.values))
        return `${props.val.values[0]} − ${
          props.val.values[props.val.values.length - 1]
        }`;
      return props.val.values;
    }
    case 'dmg_premitigation':
      return Math.round(props.val.scaledValue.value);
    case 'dmg_postmitigation':
      //return Math.round(props.val.damagePostValue.value) || 0;
      return 100;
    default:
      return 0;
  }
});
</script>
