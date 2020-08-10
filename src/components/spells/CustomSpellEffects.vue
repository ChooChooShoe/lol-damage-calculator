<template>
  <div class="container float-clear spell-effect">
    <div>
      <h3>
        Effect {{ (this.index + 10).toString(36).toUpperCase() }}
        <input
          name="remove_effect"
          class="button is-danger is-pulled-right"
          type="button"
          value="Remove"
          @click="removeEffect()"
        />
      </h3>
      <div class="field column">
        <DamageTypeField v-model="damage_type"></DamageTypeField>

        <SpellField
          v-for="(item, key) in ratios"
          :key="'ratio-'+key"
          :type="item.key"
          :spellrankindex="0"
          :ispercent="item.ispercent"
          v-model="item.value"
        ></SpellField>
        <hr />
        <AddRatioDropDown></AddRatioDropDown>
      </div>

      <div v-if="doesDoDamage">
        <div class="column">
          This effect will deal {{Math.round(dmg_premitigation_for_one)}}
          <span
            v-html="damage_type_user"
          ></span> before resistances
          <span class="gold">{{ repeat === 1 ? '' : ' per hit' }}</span>.
          <br />This damage will cause the target to
          <span
            class="spelleffect"
          >lose {{Math.round(dmg_onhit_for_one)}} health</span>
          <span class="gold">{{ repeat === 1 ? '' : ' per hit' }}</span>.
        </div>
        <label class="column">
          This effect will hit
          <input
            type="number"
            value="1"
            v-model.number="repeat"
            class="simple-input"
          />
          time{{ repeat === 1 ? '' : 's' }}.
        </label>
        <input
          v-for="(item, index) in [1,2,3,5,10]"
          :key="index"
          type="button"
          :value=" item + 'x'"
          @click="repeat = item"
          :class="{ 'success': repeat == item }"
        />
        <div v-if="repeat != 1" class="column">
          In total, this effect deals {{Math.round(dmg_premitigation)}}
          <span
            v-html="damage_type_user"
          ></span> before resistances.
          <br />This damage will cause the target to
          <span
            class="spelleffect"
          >lose {{Math.round(dmg_onhit)}} health</span>.
        </div>
      </div>
    </div>
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
import Vue from "vue";
import SpellField from "./SpellField.vue";
import DamageTypeField from "./DamageTypeField.vue";
import AddRatioDropDown from "./AddRatioDropDown.vue";

export default {
  props: ["index"],
  name: "CustomSpellEffects",
  components: {
    SpellField,
    DamageTypeField,
    AddRatioDropDown,
  },
  data: function () {
    return {
      damage_type: "magic",
      ratios: {
        base_damage: { key: "base_damage", value: 0, ispercent: false },
        player_total_ap: { key: "player_total_ap", value: 0, ispercent: true },
        player_total_ad: { key: "player_total_ad", value: 0, ispercent: true },
        player_bonus_ad: { key: "player_bonus_ad", value: 0, ispercent: true },
      },
      repeat: 1,
    };
  },
  computed: {
    doesDoDamage: function () {
      return ["magic", "physical", "true"].includes(this.damage_type);
    },
    spell_ratios: function () {
      return spell_ratios;
    },
    damage_type_user: function () {
      switch (this.damage_type) {
        case "none":
          return '<span class="true">no damage</span>';
        case "unknown":
          return '<span class="mixed">unknown damage</span>';
        case "physical":
          return '<span class="ad">physical damage</span>';
        case "magic":
          return '<span class="ap">magic damage</span>';
        case "true":
          return '<span class="true">true damage</span>';
        default:
          return "";
      }
    },
    dmg_onhit: function () {
      return this.calc_dmg_onhit(
        this.$app.player,
        this.$app.target,
        this.dmg_premitigation,
        this.damage_type
      );
    },
    dmg_premitigation: function () {
      return this.dmg_premitigation_for_one * Math.max(0, this.repeat);
    },
    dmg_onhit_for_one: function () {
      return this.calc_dmg_onhit(
        this.$app.player,
        this.$app.target,
        this.dmg_premitigation_for_one,
        this.damage_type
      );
    },
    dmg_premitigation_for_one: function () {
      return this.calc_dmg_premitigation(this.$app.player, this.$app.target);
    },
  },
  mounted: function () {
    this.$app.damagingEffects.push(this);
  },
  destroyed: function () {
    const index = this.$app.damagingEffects.indexOf(this);
    if (index > -1) {
      this.$app.damagingEffects.splice(index, 1);
    }
  },
  methods: {
    toggleSubIndex: function () {
      this.subIndex = (this.subIndex + 1) % this.effect.subeffects.length;
    },
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
    ratioValue(ratio) {
      if (this.ratios[ratio]) {
        const r = this.ratios[ratio];
        if (Array.isArray(r.value)) {
          return r.value[0];
        }
        return r.value;
      }
      return 0;
    },
    calc_dmg_premitigation: function (player, target) {
      let damage = this.ratioValue("base_damage") || 0;
      for (const key in this.ratios) {
        if (key.startsWith("target")) {
          let stat = target[key.substring(7)];
          if (isNaN(stat)) {
            console.log(`Stat for ratio ${key} missing for target`);
            stat = 0;
          }
          damage += stat * this.ratioValue(key);
        } else if (key.startsWith("player")) {
          let stat = player[key.substring(7)];
          if (isNaN(stat)) {
            console.log(`Stat for ratio ${key} missing for player`);
            stat = 0;
          }
          damage += stat * this.ratioValue(key);
        }
      }
      return damage;
    },
  },
};
</script>