
<template>
  <div class="flex flex-row">
    <span>
      {{ prefex }}
      <span :class="color">{{ displayValue }} {{ sufex }}</span>
    </span>
    <input
      class="input block numinput"
      type="number"
      step="1"
      title
      :value="encode()"
      v-on:input="$emit('input', decode($event.target.value))"
    />
    <span class="inline">{{ ispercent ? '%' : ' ' }}</span>
    <span v-if="removable" class="inline">✕</span>
  </div>
</template>

<script>
import Vue from "vue";
import {spell_ratios } from '../../javascript/league_data';

export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "spell-field",
  props: ["value", "type", "ispercent", "spellrankindex"],
  data: function() {
    return { };
  },
  computed: {
    prefex: function() {
      return spell_ratios[this.type].prefex || "";
    },
    color: function() {
      return spell_ratios[this.type].color || "";
    },
    sufex: function() {
      return spell_ratios[this.type].sufex || "";
    },
    displayValue: function() {
      let v = this.value;
      let i = this.spellrankindex;
      if (Array.isArray(v)) {
        v = v[i];
      }
      if (this.ispercent === true) {
        return `${v < 0 ? "" : "+"}${+(Math.round(v + "e+12") + "e-10")}%`;
      } else return +(Math.round(v + "e+6") + "e-6");
    },
    removable: function() {
      return false;
    }
  },
  methods: {
    encode(val) {
      let v = this.value;
      if (Array.isArray(this.value)) {
        v = this.value[this.spellrankindex];
      }
      if (this.ispercent) return +(Math.round(v + "e+12") + "e-10");
      return v;
    },
    decode(val) {
      let decoded = 0;
      if (this.ispercent) decoded = parseFloat(val) / 100 || 0;
      else decoded = parseFloat(val);

      if (Array.isArray(this.value)) {
        Vue.set(this.value, this.spellrankindex, decoded);
        return this.value;
      } 
      return decoded;
    }
  }
};
</script>

<style scoped>
</style>
