<template>
  <SpellSpan v-if="index === 0" :class="data.color" :list="list"> </SpellSpan>
  <span v-else :class="data.color">
    (+ <SpellSpan :list="innerList" :class="data.color"> </SpellSpan>
    {{ data.flat ? '' : '% ' }}
    <span v-html="data.html"></span>)
  </span>
  <!-- <span v-else :class="data.color"> (+ {{ displayValueArray(list) }}{{ flat ? "" : "% " }} <span v-html="data.html"></span>) </span> -->
</template>

<script>
import { computed, inject, toRefs } from 'vue';
import {
  spell_ratios,
  default_spell_ratios,
} from '../../model/league_data';
import SpellSpan from '../SpellSpan.vue';

export default {
  // id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: 'DisplayRatio',
  props: {
    ratioKey: String,
    list: [Array, Number],
    index: Number,
  },
  components: { SpellSpan },
  setup(props) {
    const { index, ratioKey, list } = toRefs(props);
    const data = computed(
      () => spell_ratios[ratioKey.value] || default_spell_ratios
    );
    const displayValueArray = function (v) {
      if (data.value.flat) return `${+v.toFixed(3)}`;
      return `${+(v * 100).toFixed(3)}`;
    };
    return {
      data,
      innerList: computed(() => {
        if (Array.isArray(list.value)) {
          return list.value.map(displayValueArray);
        }
        return displayValueArray(list.value);
      }),
    };
  },
};
</script>
