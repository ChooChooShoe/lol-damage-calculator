<template>
  <div
    class="container float-clear spell-effect"
    @click="showRatiosDropdown = $event.target.matches('.dropbutton')"
  >
    <form autocomplete="off" class="flex flex-row flex-wrap flex-top">
      <h4>Custom Effect {{ (this.effectindex + 10).toString(36).toUpperCase() }}</h4>
      <input
        name="remove_effect"
        class="inline float-right"
        type="button"
        value="Remove"
        @click="removeEffect()"
      />
      <div class="field column">
        <label>
          Damage Type
          <select v-model="damage_type" name="damage_type" class="input">
            <option value="none" class="true">No Damage</option>
            <option value="unknown" class="mixed">Unknown Damage</option>
            <option value="physical" class="ad">Physical Damage</option>
            <option value="magic" class="ap">Magic Damage</option>
            <option value="true" class="true">True Damage</option>
          </select>
        </label>

        <spell-field
          v-for="(item, key) in ratios"
          :key="'ratio-'+key"
          :type="item.key"
          :spellrankindex="spellrankindex"
          :ispercent="item.ispercent"
          v-model="item.value"
        ></spell-field>
        <input class="inline dropbutton" type="button" value="Add Ratio+" />
        <div :class="showRatiosDropdown ? '' : 'hidden'">
          <template v-for="(r,i) in spell_ratios">
            <span :key="i" v-if="!r.extra && ratios[i]    === undefined"
              :class="'simple-link ' + r.color"
              @click="addRatio(i)"
            >{{ r.prefex }} {{ r.sufex }} {{ r.ispercent == false ? 'Ratio' : ''}}</span>-
          </template>
        </div>
      </div>
      <div style="width: 100%;height: 1.4em;"></div>

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
        In total, this effect deals {{Math.round(dmg_premitigation)}}
        <span v-html="damage_type_user"></span> before resistances.
        <br />This damage will cause the target to
        <span
          class="spelleffect"
        >lose {{Math.round(dmg_onhit)}} health</span>.
      </div>
    </form>
  </div>
</template>

<script>
import numeral from "numeral";
import {
  calcDamageWithRedection,
  spell_ratios
} from "../../javascript/league_data";
import Vue from "vue";
import SpellField from "./SpellField.vue";

export default {
  props: ["spell", "effectindex", "spellrankindex"],
  name: "CustomSpellEffects",
  components: {
    SpellField
  },
  data: function() {
    return {
      damage_type: "magic",
      showRatiosDropdown: false,
      ratios: {
        base_damage: { key: "base_damage", value: 0, ispercent: false },
        player_total_ap: { key: "player_total_ap", value: 0, ispercent: true },
        player_total_ad: { key: "player_total_ad", value: 0, ispercent: true },
        player_bonus_ad: { key: "player_bonus_ad", value: 0, ispercent: true }
      },
      repeat: 1
    };
  },
  computed: {
    spell_ratios: function() {
      return spell_ratios
    },
    damage_type_user: function() {
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
    dmg_onhit: function() {
      return this.calc_dmg_onhit(
        this.$app.player,
        this.$app.target,
        this.dmg_premitigation
      );
    },
    dmg_premitigation: function() {
      return this.dmg_premitigation_for_one * Math.max(0, this.repeat);
    },
    dmg_onhit_for_one: function() {
      return this.calc_dmg_onhit(
        this.$app.player,
        this.$app.target,
        this.dmg_premitigation_for_one
      );
    },
    dmg_premitigation_for_one: function() {
      return this.calc_dmg_premitigation(this.$app.player, this.$app.target);
    }
  },
  mounted: function() {
    this.$app.spellComponents.push(this);
  },
  destroyed: function() {
    const self = this;
    this.$app.spellComponents = this.$app.spellComponents.filter(
      el => el !== self
    );
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
    removeEffect: function() {
      const index = this.effectindex;
      this.$parent.customEffects = this.$parent.customEffects.filter(
        i => i !== index
      );
    },
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
    },
    calc_dmg_onhit: function(p, t, damage) {
      switch (this.damage_type) {
        case "physical":
          return calcDamageWithRedection(
            damage,
            t.base_armor,
            t.bonus_armor,
            p.flat_armor_reduction,
            p.percent_armor_reduction,
            p.percent_armorpen,
            p.percent_bonus_armorpen,
            p.flat_armorpen
          );
        case "magic":
          return calcDamageWithRedection(
            damage,
            t.base_mr,
            t.bonus_mr,
            p.flat_mr_reduction,
            p.percent_mr_reduction,
            p.percent_magicpen,
            0,
            p.flat_magicpen
          );
        case "true":
          return damage;
        default:
          return 0;
      }
    }
  }
};
</script>

<style scoped>
</style>
