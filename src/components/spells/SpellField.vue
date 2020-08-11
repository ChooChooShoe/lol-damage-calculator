
<template>
  <tr>
    <th>
      <span :class="color">{{ displayValue }}</span>
    </th>
    <Editable v-model="item.value" :format="item.ispercent ? 'percent' : ''" :index="index"></Editable>
    <EditableRO :value="damagePreValue"></EditableRO>
    <EditableRO :value="damagePostValue"></EditableRO>
  </tr>
</template>

<script>
import Vue from "vue";
import { spell_ratios, calc_dmg_onhit } from "../../javascript/league_data";
import Editable from "../simple/Editable.vue";
import EditableRO from "../simple/EditableRO.vue";

export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "SpellField",
  props: ["item", "index"],
  data: function () {
    return {};
  },
  components: {
    Editable,
    EditableRO,
  },
  computed: {
    prefex: function () {
      return spell_ratios[this.item.key].prefex || "";
    },
    color: function () {
      return spell_ratios[this.item.key].color || "";
    },
    sufex: function () {
      return spell_ratios[this.item.key].sufex || "";
    },
    extra: function () {
      return spell_ratios[this.item.key].extra || false;
    },
    removable: function () {
      return false;
    },
    displayValue: function () {
      let v = this.valueNumber;
      if (!this.extra) {
        return `( ${v < 0 ? "" : "+"}${+(Math.round(v + "e+12") + "e-10")}% ${
          spell_ratios[this.item.key].sufex
        })`;
      } else return spell_ratios[this.item.key].prefex;
    },
    damagePreValue: function () {
      console.log('key',this.item.key)
      const user = spell_ratios[this.item.key].user;
      const stat = spell_ratios[this.item.key].stat;
      // No user means base_damage or base_progression
      if (!user) return this.valueNumber;
      let statValue = this.$app[user][stat];
      if (isNaN(statValue)) {
        console.log(
          `Stat ${stat} for ratio ${this.item.key} missing for ${user}`
        );
        statValue = 0;
      }
      return statValue * this.valueNumber;
    },
    damagePostValue: function () {
      const player = this.$app.player;
      const target = this.$app.target;
      return calc_dmg_onhit(
        player,
        target,
        this.damagePreValue,
        this.$parent.damage_type
      );
    },
    valueNumber: function () {
      if (Array.isArray(this.item.value)) return this.item.value[this.index];
      return this.item.value;
    },
  },
};
</script>
