
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
const known_ratios_table = {
  base_damage: { prefex: "Base Damage", color: "", sufex: "" },
  base_progression: { prefex: "Leveling", color: "", sufex: "" },
  player_total_ap: { color: "ap", sufex: "AP" },
  player_total_ad: { color: "ad", sufex: "AD" },
  player_bonus_ad: { color: "ad", sufex: "Bonus AD" },
  player_total_hp: { color: "health", sufex: "Max Health" },
  player_bonus_hp: { color: "health", sufex: "Bonus Health" },
  player_missing_hp: { color: "health", sufex: "Missing Health" },
  target_total_hp: { color: "health", sufex: "Target's Max Health" },
  target_bonus_hp: { color: "health", sufex: "Target's Bonus Health" },
  target_current_hp: { color: "health", sufex: "Target's Current Health" },
  target_missing_hp: { color: "health", sufex: "Target's Missing Health" },
  player_bonus_armor: { color: "armor", sufex: "Bonus Armor" },
  player_total_armor: { color: "armor", sufex: "Armor" },
  player_bonus_mr: { color: "mr", sufex: "Bonus Magic Resistance" },
  player_total_mr: { color: "mr", sufex: "Magic Resistance" }
};
export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "spell-field",
  props: ["value", "type", "ispercent", "spellrankindex"],
  data: function() {
    return { };
  },
  computed: {
    prefex: function() {
      return known_ratios_table[this.type].prefex || "";
    },
    color: function() {
      return known_ratios_table[this.type].color || "";
    },
    sufex: function() {
      return known_ratios_table[this.type].sufex || "";
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
