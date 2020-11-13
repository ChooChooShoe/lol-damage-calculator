<template>
  <div class="container float-clear spell-effect">
    <nav class="col">
      <!-- <div v-if="effect.subeffects.length > 1">
        <label>
          View A
          <input
            v-model.number="subIndex"
            type="radio"
            name="subIndex"
            value="0"
            title="Switch to A"
          />
        </label>
        <label>
          View B
          <input
            v-model.number="subIndex"
            type="radio"
            name="subIndex"
            value="1"
            title="Switch to B"
          />
        </label>
        <label v-if="effect.subeffects.length > 2">
          View C
          <input
            v-model.number="subIndex"
            type="radio"
            name="subIndex"
            value="2"
            title="Switch to C"
          />
        </label>
      </div> -->
      <div
        :class="effect.subeffects.length > 1 ? 'click' : ''"
        @click="toggleSubIndex"
      >
        <h4 class="spelleffect">{{ edata.title }}</h4>
        <div>
          <DisplayRatio
            v-for="(item, key, i) in ratios"
            :key="key"
            :item="item"
            :index="i"
          >
          </DisplayRatio>
        </div>
      </div>
      <div class="field column" v-if="doesDoDamage">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Ratio</th>
              <th>Pre-Damage</th>
              <th>Post-Damage</th>
            </tr>
          </thead>
          <tbody>
            <SpellField
              v-for="(item, key, i) in ratios"
              :ref="el => { if (el) spellFieldRefs[i] = el }"
              :key="key"
              :item="item"
              :index="i"
              :spellrank="spellrank"
            ></SpellField>
            <tr>
              <th colspan="4">
                <AddRatioDropDown></AddRatioDropDown>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr class="spelleff--totals">
              <th style="text-align: center" colspan="2">
                <b>Total</b>
              </th>
              <Editable :modelValue="dmg_premitigation" :readonly="true"></Editable>
              <Editable :modelValue="dmg_postmitigation" :readonly="true"></Editable>
            </tr>
          </tfoot>
        </table>
        <hr style="margin: 0.5rem 0" />
      </div>
      <DamageTypeField v-model="damage_type"></DamageTypeField>

      <div v-if="doesDoDamage">
        <div class="column">
          Before resistances, this effect will deal
          {{ Math.round(dmg_premitigation) }} raw damage<span class="gold">{{
            repeat === 1 ? "" : " per hit"
          }}</span
          >. <br />This target will take {{ Math.round(dmg_postmitigation) }}
          <span v-html="damage_type_user"></span> after reductions<span class="gold">{{ repeat === 1 ? "" : " per hit" }}</span
          >.
        </div>
        <label class="column">
          This effect will hit
          <input
            type="number"
            v-model.number="repeat"
            class="simple-input"
          />
          time{{ repeat === 1 ? "" : "s" }}.
          <input
            v-for="(item, index) in [1, 2, 3, 5, 10]"
            :key="index"
            type="button"
            class="repeat"
            :value="item + 'x'"
            @click="repeat = item"
            :class="{ success: repeat == item }"
          />
        </label>
        <div v-if="repeat != 1" class="column">
          In total, this effect deals
          {{ Math.round(dmg_premitigation * repeat) }}
          <span v-html="damage_type_user"></span> before resistances. <br />This
          damage will cause the target to
          <span class="spelleffect"
            >lose {{ Math.round(dmg_postmitigation * repeat) }} health</span
          >.
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import numeral from "numeral";
import {
  calc_dmg_onhit,
  spell_ratios,
  DamageSource,
  DamageType,
} from "../../javascript/league_data";

import SpellField from "./SpellField.vue";
import DamageTypeField from "./DamageTypeField.vue";
import AddRatioDropDown from "./AddRatioDropDown.vue";
import Editable from "../simple/Editable.vue";
import DisplayRatio from "./DisplayRatio.vue";

export default {
  props: ["spell", "effect", "spellrank", "effectindex"],
  name: "SpellEffects",
  components: {
    SpellField,
    DamageTypeField,
    AddRatioDropDown,
    Editable,
    DisplayRatio,
  },
  data: function () {
    return {
      damage_type: this.effect.subeffects[0].damage_type,
      repeat: 1,
      subIndex: 0,
      ratios: {},
      isMounted: false,
      spellFieldRefs: []
    };
  },
  computed: {
    doesDoDamage: function () {
      return ["magic", "physical", "true"].includes(this.damage_type);
    },
    spell_ratios: function () {
      return spell_ratios;
    },
    edata: function () {
      return this.effect.subeffects[this.subIndex];
    },
    damage_type_user: function () {
      switch (this.damage_type) {
        case "physical":
          return '<span class="physical-damage">physical damage</span>';
        case "magic":
          return '<span class="magic-damage">magic damage</span>';
        case "true":
          return '<span class="true-damage">true damage</span>';
        default:
          return '<span class="true-damage">no damage</span>';
      }
    },
    dmg_premitigation () {
      let total = 0;
      // for (const currentValue of this.spellFieldRefs) {
      //   total += currentValue.damagePreValue;
      // }
      return total;
    },
    dmg_postmitigation: function () {
      return calc_dmg_onhit(
        this.$root.player,
        this.$root.target,
        this.dmg_premitigation,
        this.damage_type
      );
    },
    dyanmic: function () {
      return true;
    },
    damageSources: function () {
      return [this];
    },
  },
  mounted: function () {
    this.$root.damagingEffects.push(this);
    this.isMounted = true;
  },
  unmounted: function () {
    const index = this.$root.damagingEffects.indexOf(this);
    if (index > -1) {
      this.$root.damagingEffects.splice(index, 1);
    }
  },
  beforeUpdate() {
    this.spellFieldRefs = []
  },
  watch: {
    edata: {
      immediate: true,
      handler() {
        let newRatios = {};
        for (const ratio in this.edata.ratios) {
          const value = this.edata.ratios[ratio];

          let ispercent = true;
          if (ratio === "base_damage" || ratio === "base_progression")
            ispercent = false;
          newRatios[ratio] = {
            key: ratio,
            value: value,
            ispercent: ispercent,
          };
        }
        this.ratios = newRatios;
      },
    },
  },
  methods: {
    toggleSubIndex: function () {
      this.subIndex = (this.subIndex + 1) % this.effect.subeffects.length;
    },
    /// Used by child
    addRatio: function (ratio) {
      Vue.set(this.ratios, ratio, {
        key: ratio,
        value: 0,
        ispercent: true,
      });
    },
  },
};
</script>

<style>
input[type="number"].simple-input {
  width: 6em;
}
input[type="button"].repeat {
  border-width: 1px;
  margin-bottom: 0;
  height: 2em;
  font-size: 0.9em;
  padding: 0 0.5em;
  margin: 0 0.2em;
}
.spelleff--totals {
  border-top: aqua 1px solid;
}
</style>