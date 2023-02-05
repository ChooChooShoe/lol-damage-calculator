<template>
  <SpellSpan v-if="index === 0" :class="data.color" :list="damageValue || 0">
  </SpellSpan>
  <span v-else :class="data.color">
    (+ <SpellSpan :list="damageValue" :class="data.color"> </SpellSpan>)
  </span>
  <!-- <span v-else :class="data.color"> (+ {{ displayValueArray(list) }}{{ flat ? "" : "% " }} <span v-html="data.html"></span>) </span> -->
</template>

<script setup>
import { computed } from 'vue';
import { spell_ratios, default_spell_ratios } from '../../model/league_data';
import SpellSpan from '../SpellSpan.vue';

const props = defineProps({
  ratioKey: String,
  damageValue: Number,
  index: Number,
});
const data = computed(
  () => spell_ratios[props.ratioKey] || default_spell_ratios
);
const displayValueArray = function (v) {
  if (data.value.flat) return `${+v.toFixed(3)}`;
  return `${+(v * 100).toFixed(3)}`;
};
const innerList = computed(() => {
  return displayValueArray(props.damageValue);
});
</script>
