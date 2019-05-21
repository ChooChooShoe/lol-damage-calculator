
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
      :value="encode(value)"
      v-on:input="$emit('input', decode($event.target.value))"
    >
    <span class="inline">{{ ispercent ? '%' : ' ' }}</span>
    <span v-if="removable" class="inline">✕</span>
  </div>
</template>

<script>
const known_ratios = {
  base_damage: { prefex: "Base Damage", color: "", sufex: "" },
  ap: { color: "ap", sufex: "AP" },
  total_ad: { color: "ad", sufex: "AD" },
  bonus_ad: { color: "ad", sufex: "Bonus AD" },
  total_hp: { color: "health", sufex: "Max Health" },
  bonus_hp: { color: "health", sufex: "Bonus Health" },
  missing_hp: { color: "health", sufex: "Missing Health" },
  "target.total_hp": { color: "health", sufex: "Target's Max Health" },
  "target.bonus_hp": { color: "health", sufex: "Target's Bonus Health" },
  "target.current_hp": { color: "health", sufex: "Target's Current Health" },
  "target.missing_hp": { color: "health", sufex: "Target's Missing Health" },
  bonus_armor: { color: "armor", sufex: "Bonus Armor" },
  total_armor: { color: "armor", sufex: "Armor" },
  bonus_mr: { color: "mr", sufex: "Bonus Magic Resistance" },
  total_mr: { color: "mr", sufex: "Magic Resistance" }
};
export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "spell-field",
  props: ["value", "type"],
  data: function() {
    return {
      known_ratios: known_ratios
    };
  },
  computed: {
    prefex: function() {
      return this.known_ratios[this.type].prefex || "";
    },
    color: function() {
      return this.known_ratios[this.type].color || "";
    },
    sufex: function() {
      return this.known_ratios[this.type].sufex || "";
    },
    displayValue: function() {
      if (this.type === "base_damage")
        return +(Math.round(this.value + "e+6") + "e-6");
      else {
        const x = +(Math.round(this.value + "e+12") + "e-10");
        return "" + (x < 0 ? x : "+" + x) + "%";
      }
    },
    ispercent: function() {
      return this.type !== "base_damage";
    },
    removable: function() {
      return false;
    }
  },
  methods: {
    encode(val) {
      if (this.ispercent) return +(Math.round(val + "e+12") + "e-10");
      return val;
    },
    decode(val) {
      if (this.ispercent) return parseFloat(val) / 100 || 0;
      return parseFloat(val);
    }
  }
};
</script>

<style scoped>
</style>
