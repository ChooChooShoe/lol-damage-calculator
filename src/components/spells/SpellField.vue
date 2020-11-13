
<template>
  <tr>
    <th>
      <span :class="color">{{ prefex }}{{ sufex }}</span>
    </th>
    <Editable
      v-model="item.value"
      :format="item.ispercent ? 'percent' : ''"
      :index="rootspell.spellrankindex"
    ></Editable>
    <EditableRO :modelValue="damagePreValue"></EditableRO>
    <EditableRO :modelValue="damagePostValue"></EditableRO>
  </tr>
</template>

<script>
import { spell_ratios, calc_dmg_onhit } from "../../javascript/league_data";
import Editable from "../simple/Editable.vue";
import EditableRO from "../simple/EditableRO.vue";

export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "SpellField",
  props: {
    item: Object,
    index: Number,
    spellrank: Number,
  },
  inject: ["rootspell"],
  components: {
    Editable,
    EditableRO,
  },
  setup(props) {
    const ratiodata = spell_ratios[props.item.key];
    return {
      item: props.item,
      spellrank: props.spellrank,
      prefex: ratiodata.prefex || "",
      color: ratiodata.color || "",
      sufex: ratiodata.sufex || "",
      extra: ratiodata.extra || false,
      removable: false,
    };
  },
  computed: {
    valueNumber: function () {
      return Array.isArray(this.item.value)
        ? this.item.value[this.spellrank]
        : this.item.value;
    },
    displayValue: function () {
      return this.extra || false
        ? this.prefex
        : `( ${this.valueNumber < 0 ? "" : "+"}${+(
            Math.round(this.valueNumber + "e+12") + "e-10"
          )}% ${this.sufex})`;
    },

    damagePreValue: function () {
      console.log("damagePreValuekey", this.item.key);
      const user = spell_ratios[this.item.key].user;
      const stat = spell_ratios[this.item.key].stat;
      // No user means base_damage or base_progression
      if (!user) return this.valueNumber;
      let statValue = this.$root[user][stat];
      if (isNaN(statValue)) {
        console.log(
          `Stat ${stat} for ratio ${this.item.key} missing for ${user}`
        );
        statValue = 0;
      }
      return statValue * this.valueNumber;
    },
    damagePostValue: function () {
      return calc_dmg_onhit(
        this.$root.player,
        this.$root.target,
        this.damagePreValue,
        this.$parent.damage_type
      );
    },
  },
};
</script>
