<template>
  <div class="col">
    <div class="field column">
      <h4 class="spelleffect">
        Effect {{ (this.index + 10).toString(36).toUpperCase() }}
      </h4>
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
            v-for="(item, key) in ratios"
              :ref="spellFieldRefs.push(this)"
            :key="key"
            :item="item"
            :index="0"
          ></SpellField>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="4">
              <AddRatioDropDown></AddRatioDropDown>
            </th>
          </tr>
          <tr>
            <th colspan="4">
              <hr style="margin: 0.3rem 0" />
            </th>
          </tr>
          <tr>
            <th style="text-align: center" colspan="2">
              <b>Total</b>
            </th>
            <Editable :modelValue="dmg_premitigation" :readonly="true"></Editable>
            <Editable :modelValue="dmg_postmitigation" :readonly="true"></Editable>
          </tr>
        </tfoot>
      </table>
      <DamageTypeField v-model="damage_type"></DamageTypeField>
      <hr style="margin: 0.5rem 0" />
    </div>

    <div v-if="doesDoDamage">
      <div class="column">
        Before resistances, this effect will deal
        {{ Math.round(dmg_premitigation) }} raw damage<span class="gold">{{
          repeat === 1 ? "" : " per hit"
        }}</span
        >. <br />This target will take {{ Math.round(dmg_postmitigation) }}
        <span v-html="damage_type_user(damage_type)"></span> after reductions<span
          class="gold"
          >{{ repeat === 1 ? "" : " per hit" }}</span
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
        <span v-html="damage_type_user(damage_type)"></span> before resistances. <br />This
        damage will cause the target to
        <span class="spelleffect"
          >lose {{ Math.round(dmg_postmitigation * repeat) }} health</span
        >.
      </div>
    </div>
  </div>
</template>

<script>
import { damage_type_user } from "./SpellHelper";
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

export default {
  props: ["index", "damageSources"],
  name: "CustomSpellEffects",
  components: {
    SpellField,
    DamageTypeField,
    AddRatioDropDown,
    Editable,
  },
  data: function () {
    return {
      damage_type: DamageType.MAGIC,
      repeat: 1,
      ratios: {
        base_damage: { key: "base_damage", value: 0, ispercent: false },
        player_total_ap: { key: "player_total_ap", value: 0, ispercent: true },
        player_total_ad: { key: "player_total_ad", value: 0, ispercent: true },
        player_bonus_ad: { key: "player_bonus_ad", value: 0, ispercent: true },
      },
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
    dmg_premitigation: function () {
      if (!this.isMounted) return -1;
      let total = 0;
      for (const currentValue of this.spellFieldRefs) {
        total += currentValue.damagePreValue;
      }
      return total;
    },
    dmg_postmitigation: function () {
      return calc_dmg_onhit(
        this.$root.data.player,
        this.$root.data.target,
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
    this.damageSources[this] = [this];
    this.isMounted = true;
  },
  unmounted: function () {
    delete this.damageSources[this];
  },
  methods: {
    /// Used by child
    addRatio: function (ratio) {
      Vue.set(this.ratios, ratio, {
        key: ratio,
        value: 0,
        ispercent: true,
      });
    },
    removeEffect: function () {
      const idx = this.index;
      this.$parent.customEffects = this.$parent.customEffects.filter(
        (i) => i !== idx
      );
    },
  },
};
</script>