<template>
  <div
    class="container float-clear spell-effect"
    @click="showRatiosDropdown = $event.target.matches('.dropbutton')"
  >
    <div>
      <h4 class="title is-4">
        Effect {{ (this.index + 10).toString(36).toUpperCase() }}
        <input
          name="remove_effect"
          class="button is-danger is-pulled-right"
          type="button"
          value="Remove"
          @click="removeEffect()"
        />
      </h4>
      <div class="field column">
        <div class="field">
          <span class="field-label">Damage Type:</span>
          <div class="field-body tabs is-left is-toggle">
            <ul>
              <li :class=" { 'is-active': damage_type === 'none' }">
                <a @click="damage_type = 'none'">None</a>
              </li>
              <li :class=" { 'is-active': damage_type === 'physical' }">
                <a @click="damage_type = 'physical'" class="ad">Physical</a>
              </li>
              <li :class=" { 'is-active': damage_type === 'magic' }">
                <a @click="damage_type = 'magic'" class="ap">Magic</a>
              </li>
              <li :class=" { 'is-active': damage_type === 'true' }">
                <a @click="damage_type = 'true'">True</a>
              </li>
            </ul>
          </div>
        </div>

        <spell-field
          v-for="(item, key) in ratios"
          :key="'ratio-'+key"
          :type="item.key"
          :spellrankindex="0"
          :ispercent="item.ispercent"
          v-model="item.value"
        ></spell-field>
        <input class="inline dropbutton button is-primary" type="button" value="Add Ratio+" />
        <div :class="showRatiosDropdown ? '' : 'is-hidden'">
          <template v-for="(r,i) in spell_ratios">
            <span
              :key="i"
              v-if="!r.extra && ratios[i]    === undefined"
              :class="'simple-link ' + r.color"
              @click="addRatio(i)"
            >{{ r.prefex }} {{ r.sufex }} {{ r.ispercent == false ? 'Ratio' : ''}}</span>-
          </template>
        </div>
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
  calcDamageWithRedection,
  spell_ratios
} from "../../javascript/league_data";
import Vue from "vue";
import SpellField from "./SpellField.vue";

export default {
  props: ["index"],
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
    doesDoDamage: function() {
      return ["magic", "physical", "true"].includes(this.damage_type);
    },
    spell_ratios: function() {
      return spell_ratios;
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
      const idx = this.index;
      this.$parent.customEffects = this.$parent.customEffects.filter(
        i => i !== idx
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
