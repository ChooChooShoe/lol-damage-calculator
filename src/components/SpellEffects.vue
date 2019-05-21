
<template>
  <div class="container float-clear spell-effect" :id="id" @click="showRatiosDropdown = $event.target.matches('.dropbutton')">
    <form autocomplete="off" :id="id + '-form'" class="flex flex-row flex-wrap flex-top">
      <h4><span v-if="iscustom">Custom </span>Effect {{ (this.effectindex + 10).toString(36).toUpperCase() }}</h4>
      <input v-if="iscustom" name="remove_effect" class="inline float-right" type="button" value="Remove" @click="removeEffect()">
      <match-replace class="column effect-value" :text="effect" :spellrankindex="spellrankindex" v-model="vars"></match-replace>
      <div class="field column">
      <label :for="id + '-damagetype'">Damage Type</label>
      <select :id="id + '-damagetype'" v-model="damagetype" name="damage_type" class="input">
        <option value="no_damage" class="mixed">No Damage</option>
        <option value="not_detected" class="mixed">Unknown Damage</option>
        <option value="physical" class="ad">Physical Damage</option>
        <option value="magic" class="ap">Magic Damage</option>
        <option value="true" class="true">True Damage</option>
      </select>
      
      <spell-field v-model="base_damage" type="base_damage"></spell-field>
      <spell-field v-for="(item, key, index) in ratios"
        :key="item.target  + '-' + item.key + '-ratio'"
        :type="item.target === 'target' ? 'target.' + item.key : item.key"
        v-model="item.value">
      </spell-field>
      <input class="inline dropbutton" type="button" value="Add Ratio+">
      <div :class="showRatiosDropdown ? '' : 'hidden'">
      <span v-if="ratios['player-ap'] === undefined" class="simple-link ap" @click="addRatio('ap')">AP Ratio</span>-
      <span v-if="ratios['player-total_ad'] === undefined" class="simple-link ad" @click="addRatio('total_ad')">AD Ratio</span>-
      <span v-if="ratios['player-bonus_ad'] === undefined" class="simple-link ad" @click="addRatio('bonus_ad')">Bonus AD Ratio</span>-
      <span v-if="ratios['player-total_hp'] === undefined" class="simple-link health" @click="addRatio('total_hp')">Health Ratio</span>-
      <span v-if="ratios['player-bonus_hp'] === undefined" class="simple-link health" @click="addRatio('bonus_hp')">Bonus Health Ratio</span>-
      <span v-if="ratios['player-missing_hp'] === undefined" class="simple-link health" @click="addRatio('missing_hp')">Missing Health</span>-
      <span v-if="ratios['target-total_hp'] === undefined" class="simple-link health" @click="addRatio('total_hp','target')"> Target's Max Health</span>-
      <span v-if="ratios['target-bonus_hp'] === undefined" class="simple-link health" @click="addRatio('bonus_hp','target')"> Target's Bonus Health</span>-
      <span v-if="ratios['target-current_hp'] === undefined" class="simple-link health" @click="addRatio('current_hp','target')"> Target's Current Health</span>-
      <span v-if="ratios['target-missing_hp'] === undefined" class="simple-link health" @click="addRatio('missing_hp','target')"> Target's Missing Health</span>-
      <span v-if="ratios['player-bonus_armor'] === undefined" class="simple-link armor" @click="addRatio('bonus_armor')">Bonus Armor Ratio</span>-
      <span v-if="ratios['player-total_armor'] === undefined" class="simple-link armor" @click="addRatio('total_armor')">Armor Ratio</span>-
      <span v-if="ratios['player-bonus_mr'] === undefined" class="simple-link mr" @click="addRatio('bonus_mr')">Bonus MR Ratio</span>-
      <span v-if="ratios['player-total_mr'] === undefined" class="simple-link mr" @click="addRatio('total_mr')">MR Ratio</span>
      </div>
      </div>
      <div style="width: 100%;height: 1.4em;"></div>
    
      <div class="column">
      This effect will deal {{Math.round(dmg_premitigation_for_one)}} <span v-html="damagetype_user"></span> before resistances<span class="gold">{{  repeat === 1 ? '' : ' per hit' }}</span>.
      <br>This damage will cause the target to <span class="spelleffect">lose {{Math.round(dmg_onhit_for_one)}} health</span><span class="gold">{{  repeat === 1 ? '' : ' per hit' }}</span>.
      </div>
      <label class="column">
        This effect will hit
      <input type="number" value="1" v-model.number="repeat" class="simple-input">
      time{{  repeat === 1 ? '' : 's' }}. 
      <input :active="repeat === 1" type="button" class="simple-btn" value="1x" @click="repeat = 1">
      <input :active="repeat === 2" type="button" class="simple-btn" value="2x" @click="repeat = 2">
      <input :active="repeat === 5" type="button" class="simple-btn" value="5x" @click="repeat = 5">
      <input :active="repeat === 10" type="button" class="simple-btn" value="10x" @click="repeat = 10">
      </label>
      <div v-if="repeat != 1" class="column">
      In total, this effect deals {{Math.round(dmg_premitigation)}} <span v-html="damagetype_user"></span> before resistances.
      <br>This damage will cause the target to <span class="spelleffect">lose {{Math.round(dmg_onhit)}} health</span>.
      </div>
    </form>
    </div>
</template>

<script>
import numeral from 'numeral'
import {calcDamageWithRedection} from '../javascript/calc'
import Vue from 'vue'
import MatchReplace from './MatchReplace.vue';
import SpellField from './SpellField.vue';

export default {
props: ['id', 'spell', 'effect', 'spellrankindex', 'effectindex', 'iscustom'],
  name: 'spell-effects',
  components: {
    MatchReplace,
    SpellField,
  },
  data: function () {
    return {
      damagetype: 'not_detected',
      base_damage: 0,
      showRatiosDropdown: false,
      ratios: {},
      vars: null,
      repeat: 1,
    }
  },
  computed: {
    damagetype_user: function () {
      switch (this.damagetype) {
        case 'no_damage':
          return '<span class="true">no damage</span>';
        case 'not_detected':
          return '<span class="mixed">unknown damage</span>';
        case 'physical':
          return '<span class="ad">physical damage</span>';
        case 'magic':
          return '<span class="ap">magic damage</span>';
        case 'true':
          return '<span class="true">true damage</span>';
        default:
          return '';
      }
    },
    dmg_onhit: function () {
      return this.calc_dmg_onhit(this.$root.$app.player, this.$root.$app.target, this.dmg_premitigation);
    },
    dmg_premitigation: function () {
      return this.dmg_premitigation_for_one * Math.max(0, this.repeat);
    },
    dmg_onhit_for_one: function () {
      return this.calc_dmg_onhit(this.$root.$app.player, this.$root.$app.target, this.dmg_premitigation_for_one);
    },
    dmg_premitigation_for_one: function () {
      return this.calc_dmg_premitigation(this.$root.$app.player, this.$root.$app.target);
    },
  },
  mounted: function () {
    this.$root.$app.spellComponents.push(this);
    this.calcspell();
  },
  destroyed: function () {
    const self = this;
    this.$root.$app.spellComponents = this.$root.$app.spellComponents.filter(el => el !== self);
  },
  watch: {
    spell: {
      immediate: true,
      handler() {
        if (this.spell.damagetype.includes("agic")) {
          this.damagetype = "magic";
        } else if (this.spell.damagetype.includes("hysical")) {
          this.damagetype = "physical";
        } else if (this.spell.damagetype.includes("rue")) {
          this.damagetype = "true";
        } else if (this.spell.damagetype.includes("no")) {
          this.damagetype = "no_damage";
        } else {
          this.damagetype = "not_detected";
        }
      }
    },
    vars: function (vars) {
      if ('base_damage' in vars) {
        this.base_damage = numeral(vars.base_damage[this.spellrankindex]).value();
      }
      for (const ratio in vars.ratios) {
        const el = vars.ratios[ratio];
        const target = el.target || 'player';
        const key = el.key || ratio;
        const value = el.value || el || 0;
        console.log('Setting var ',ratio,'to',value);
        Vue.set(this.ratios, target + '-' + ratio, {
          target: target,
          key: key,
          value: value
        });
      }
    }
  },
  methods: {
    addRatio: function (ratio, target, value) {
      target = target || 'player'
      value = value || 0
      Vue.set(this.ratios, target + '-' + ratio, {
        target: target,
        key: ratio,
        value: value
      });
    },
    removeEffect: function () {
      if (this.iscustom)
        this.$parent.customEffects = this.$parent.customEffects.filter(i => i !== this.effectindex)
    },
    calc_dmg_premitigation: function (player, target) {
      let damage = this.base_damage;
      for (const r in this.ratios) {
        const ratio = this.ratios[r];
        if (ratio.target === 'target') {
          const stat = target[ratio.key] || 0;
          damage += (stat * ratio.value);
        }
        else {
          const stat = player[ratio.key] || 0;
          damage += (stat * ratio.value);
        }
      }
      return damage;
    },
    calc_dmg_onhit: function (p, t, damage) {
      switch (this.damagetype) {
        case "physical":
          return calcDamageWithRedection(damage, t.base_armor, t.bonus_armor,
            p.flat_armor_reduction, p.percent_armor_reduction, p.percent_armorpen, p.percent_bonus_armorpen, p.flat_armorpen);
        case "magic":
          return calcDamageWithRedection(damage, t.base_mr, t.bonus_mr,
            p.flat_mr_reduction, p.percent_mr_reduction, p.percent_magicpen, 0, p.flat_magicpen);
        case "true":
          return damage;
        default:
          return 0;
      }
    },
    calcspell: function () {
      //TODO test if this works
      // tippy(`#${this.$el.id} [data-tippy-content]`, {
      //   animation: 'fade',
      //   duration: 50,
      //   delay: [0, 0],
      //   followCursor: true,
      // };

      // var inputs = this.$el.getElementsByClassName("input");
      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].addEventListener("input", recalc);
      //   inputs[i].addEventListener("focus", e => e.currentTarget.select());
      // }
    }
  }
};
</script>

<style scoped>
</style>
