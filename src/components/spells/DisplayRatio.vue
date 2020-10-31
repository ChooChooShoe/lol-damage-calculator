
<template>
  <span v-if="index == 0" :class="color">
    <template v-for="(x, i) in item.value" :key="i">
      {{ i != 0 ? "/" : "" }}
      <span
        :class="rootspell.spellrankindex == i ? 'spelleffect' : ''"
        class="ss-click"
        @click="rootspell.spellrankindex = i"
      >
        {{ displayValueArray(x) }}
      </span>
    </template>
    {{ flat ? "" : "% " }}
    <span v-html="html"></span>
  </span>
  <span v-else-if="Array.isArray(item.value)" :class="color">
    (+
    <template v-for="(x, i) in item.value" :key="i">
      {{ i != 0 ? "/" : "" }}
      <span
        :class="rootspell.spellrankindex == i ? 'spelleffect' : ''"
        class="ss-click"
        @click="rootspell.spellrankindex = i"
      >
        {{ displayValueArray(x) }}
      </span>
    </template>
    {{ flat ? "" : "% " }}
    <span v-html="html"></span>)
  </span>
  <span v-else :class="color" v-html="displayValue(item.value)"></span>
</template>

<script>

import { spell_ratios } from "../../javascript/league_data";

export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "DisplayRatio",
  props: {
    item: Object,
    index: Number,
  },
  inject: ["rootspell"],
  methods: {
    displayValueArray: function (v) {
      if (this.flat) return `${+v.toFixed(3)}`;
      return `${+(v * 100).toFixed(3)}`;
    },
    displayValue: function (v) {
      if (this.flat) return `(+ ${+v.toFixed(3)} ${this.html})`;
      return `(+ ${+(v * 100).toFixed(3)}% ${this.html})`;
    },
  },
  computed: {
    flat: function () {
      return spell_ratios[this.item.key].flat || false;
    },
    color: function () {
      return spell_ratios[this.item.key].color || "";
    },
    html: function () {
      return spell_ratios[this.item.key].html || "";
    },
    extra: function () {
      return spell_ratios[this.item.key].extra || false;
    },
  },
};
</script>
