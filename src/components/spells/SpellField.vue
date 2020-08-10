
<template>
  <tr>
    <th>
      <span :class="spell_ratios[item.key].color">{{ displayValue }}</span>
    </th>
    <Editable v-model="item.value" :format="item.ispercent ? 'percent' : ''" :index="index"></Editable>
    <Editable :value="damagePreMitigationValue" :readonly="true"></Editable>
  </tr>
</template>

<script>
import Vue from "vue";
import { spell_ratios } from "../../javascript/league_data";
import Editable from "../simple/Editable.vue";

export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "SpellField",
  props: ["item", "index"],
  data: function () {
    return {
      isValid: true,
      invalidMsg: "",
      spell_ratios: spell_ratios,
    };
  },
  components: {
    Editable,
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
    damagePreMitigationValue: function () {
      const player = this.$app.player;
      const target = this.$app.target;
      const key = this.item.key;
      const v = this.valueNumber;
      if (key.startsWith("target")) {
        let stat = target[key.substring(7)];
        if (isNaN(stat)) {
          console.log(`Stat for ratio ${key} missing for target`);
          stat = 0;
        }
        return stat * v;
      } else if (key.startsWith("player")) {
        let stat = player[key.substring(7)];
        if (isNaN(stat)) {
          console.log(`Stat for ratio ${key} missing for player`);
          stat = 0;
        }
        return stat * v;
      } else return v;
    },
    valueNumber: function() {
      let v = this.item.value;
      if (Array.isArray(this.item.value)) {
        v = this.item.value[this.index];
      }
      return v;
    },
  },
};
</script>
