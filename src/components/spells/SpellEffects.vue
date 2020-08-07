<template>
  <div class="container float-clear spell-effect">
    <nav class="panel columns is-multiline">
      <div v-if="effect.subeffects.length > 1">
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
      </div>
      <div
        class="column is-full"
        :class=" effect.subeffects.length > 1 ?'click' : ''"
        @click="toggleSubIndex"
      >
        <span class="blue">{{ edata.title }}</span>
        <match-replace
          class="column effect-value"
          :text="edata.str"
          :spellrankindex="spellrankindex"
        ></match-replace>
      </div>
      <div class="field column">
        <DamageTypeField v-model="damage_type"></DamageTypeField>

        <SpellField
          v-for="(item, key) in ratios"
          :key="'ratio-'+key"
          :type="item.key"
          :spellrankindex="spellrankindex"
          :ispercent="item.ispercent"
          v-model="item.value"
        ></SpellField>
        <hr />
        <AddRatioDropDown></AddRatioDropDown>
      </div>

      <div v-if="doesDoDamage">
        <div class="column">
          This effect will deal {{Math.round(dmg_premitigation)}}
          <span v-html="damage_type_user"></span> before resistances
          <span class="gold">{{ repeat === 1 ? '' : ' per hit' }}</span>.
          <br />This damage will cause the target to
          <span
            class="spelleffect"
          >lose {{Math.round(dmg_postmitigation)}} health</span>
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
          <input
            :active="repeat === 1"
            type="button"
            class="simple-btn"
            value="1x"
            @click="repeat = 1"
          />
          <input
            :active="repeat === 2"
            type="button"
            class="simple-btn"
            value="2x"
            @click="repeat = 2"
          />
          <input
            :active="repeat === 5"
            type="button"
            class="simple-btn"
            value="5x"
            @click="repeat = 5"
          />
          <input
            :active="repeat === 10"
            type="button"
            class="simple-btn"
            value="10x"
            @click="repeat = 10"
          />
        </label>
        <div v-if="repeat != 1" class="column">
          In total, this effect deals {{Math.round(dmg_premitigation * repeat)}}
          <span
            v-html="damage_type_user"
          ></span> before resistances.
          <br />This damage will cause the target to
          <span
            class="spelleffect"
          >lose {{Math.round(dmg_postmitigation * repeat)}} health</span>.
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
  DamageType
} from "../../javascript/league_data";
import Vue from "vue";
import MatchReplace from "../MatchReplace.vue";
import SpellField from "./SpellField.vue";
import DamageTypeField from "./DamageTypeField.vue";
import AddRatioDropDown from "./AddRatioDropDown.vue";

export default {
  props: ["spell", "effect", "spellrankindex", "effectindex"],
  name: "spell-effects",
  components: {
    MatchReplace,
    SpellField,
    DamageTypeField,
    AddRatioDropDown
  },
  data: function() {
    return {
      damage_type: this.effect.subeffects[0].damage_type,
      repeat: 1,
      subIndex: 0,
      ratios: {},
      dmg_postmitigation: -1
    };
  },
  computed: {
    doesDoDamage: function() {
      return ["magic", "physical", "true"].includes(this.damage_type);
    },
    spell_ratios: function() {
      return spell_ratios;
    },
    edata: function() {
      return this.effect.subeffects[this.subIndex];
    },
    damage_type_user: function() {
      switch (this.damage_type) {
        case "physical":
          return '<span class="ad">physical damage</span>';
        case "magic":
          return '<span class="ap">magic damage</span>';
        case "true":
          return '<span class="true">true damage</span>';
        default:
          return '<span class="true">no damage</span>';
      }
    },
    dmg_premitigation: function() {
      return this.calc_dmg_premitigation(this.$app.player, this.$app.target);
    }
  },
  mounted: function() {
    this.$app.damagingEffects.push(this);
  },
  destroyed: function() {
    const index = this.$app.damagingEffects.indexOf(this);
    if (index > -1) {
      this.$app.damagingEffects.splice(index, 1);
    }
  },
  watch: {
    edata: {
      immediate: true,
      handler() {
        let newRatios = {};
        for (const ratio in this.edata.ratios) {
          const value = this.edata.ratios[ratio];

          // if (Array.isArray(value)) {
          //   value = numeral(value[i]).value() / 100;
          //   // Might not be the best solution but works with ez W.
          // }
          let ispercent = true;
          if (
            ratio === "base_damage" ||
            (ratio === "base_progression" && !this.edata.str.includes("%"))
          )
            ispercent = false;
          newRatios[ratio] = {
            key: ratio,
            value: value,
            ispercent: ispercent
          };
        }
        this.ratios = newRatios;
      }
    }
  },
  methods: {
    toggleSubIndex: function() {
      this.subIndex = (this.subIndex + 1) % this.effect.subeffects.length;
    },
    addRatio: function(ratio) {
      Vue.set(this.ratios, ratio, {
        key: ratio,
        value: 0,
        ispercent: true
      });
    },
    removeEffect: function() {},
    ratioValue(ratio) {
      if (this.ratios[ratio]) {
        const r = this.ratios[ratio];
        if (Array.isArray(r.value)) {
          return r.value[this.spellrankindex];
        }
        return r.value;
      }
      return 0;
    },
    calc_dmg_premitigation: function(player, target) {
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
    }
  }
};
</script>

<style>
</style>