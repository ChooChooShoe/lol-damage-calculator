<template>
  <div
    class="container float-clear spell-effect"
    :id="id"
    @click="showRatiosDropdown = $event.target.matches('.dropbutton')"
  >
    <form autocomplete="off" :id="id + '-form'" class="flex flex-row flex-wrap flex-top">
      <h4>
        <span v-if="iscustom">Custom</span>
        Effect {{ (this.effectindex + 10).toString(36).toUpperCase() }}
      </h4>
      <input
        v-if="iscustom"
        name="remove_effect"
        class="inline float-right"
        type="button"
        value="Remove"
        @click="removeEffect()"
      />
      <span>
        <span class="blue">{{ edata.title }}</span>
        <match-replace
          class="column effect-value"
          :text="edata.str"
          :spellrankindex="spellrankindex"
        ></match-replace>
      </span>
      <div class="field column">
        <label :for="id + '-damagetype'">Damage Type</label>
        <select :id="id + '-damagetype'" v-model="damage_type" name="damage_type" class="input">
          <option value="none" class="true">No Damage</option>
          <option value="unknown" class="mixed">Unknown Damage</option>
          <option value="physical" class="ad">Physical Damage</option>
          <option value="magic" class="ap">Magic Damage</option>
          <option value="true" class="true">True Damage</option>
        </select>

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
          <span
            v-if="ratios['player_total_ap']    === undefined"
            class="simple-link ap"
            @click="addRatio('player_total_ap')"
          >AP Ratio</span>-
          <span
            v-if="ratios['player_total_ad']    === undefined"
            class="simple-link ad"
            @click="addRatio('player_total_ad')"
          >AD Ratio</span>-
          <span
            v-if="ratios['player_bonus_ad']    === undefined"
            class="simple-link ad"
            @click="addRatio('player_bonus_ad')"
          >Bonus AD Ratio</span>-
          <span
            v-if="ratios['player_total_hp']    === undefined"
            class="simple-link health"
            @click="addRatio('player_total_hp')"
          >Health Ratio</span>-
          <span
            v-if="ratios['player_bonus_hp']    === undefined"
            class="simple-link health"
            @click="addRatio('player_bonus_hp')"
          >Bonus Health Ratio</span>-
          <span
            v-if="ratios['player_missing_hp']  === undefined"
            class="simple-link health"
            @click="addRatio('player_missing_hp')"
          >Missing Health</span>-
          <span
            v-if="ratios['target_total_hp']    === undefined"
            class="simple-link health"
            @click="addRatio('target_total_hp')"
          >Target's Max Health</span>-
          <span
            v-if="ratios['target_bonus_hp']    === undefined"
            class="simple-link health"
            @click="addRatio('target_bonus_hp')"
          >Target's Bonus Health</span>-
          <span
            v-if="ratios['target_current_hp']  === undefined"
            class="simple-link health"
            @click="addRatio('target_current_hp')"
          >Target's Current Health</span>-
          <span
            v-if="ratios['target_missing_hp']  === undefined"
            class="simple-link health"
            @click="addRatio('target_missing_hp')"
          >Target's Missing Health</span>-
          <span
            v-if="ratios['player_bonus_armor'] === undefined"
            class="simple-link armor"
            @click="addRatio('player_bonus_armor')"
          >Bonus Armor Ratio</span>-
          <span
            v-if="ratios['player_total_armor'] === undefined"
            class="simple-link armor"
            @click="addRatio('player_total_armor')"
          >Armor Ratio</span>-
          <span
            v-if="ratios['player_bonus_mr']    === undefined"
            class="simple-link mr"
            @click="addRatio('player_bonus_mr')"
          >Bonus MR Ratio</span>-
          <span
            v-if="ratios['player_total_mr']    === undefined"
            class="simple-link mr"
            @click="addRatio('player_total_mr')"
          >MR Ratio</span>
        </div>
      </div>
      <div style="width: 100%;height: 1.4em;"></div>

      <div class="column">
        This effect will deal {{Math.round(dmg_premitigation_for_one)}}
        <span
          v-html="damagetype_user"
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
        <span v-html="damagetype_user"></span> before resistances.
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
import { calcDamageWithRedection } from "../javascript/league_data";
import Vue from "vue";
import MatchReplace from "./MatchReplace.vue";
import SpellField from "./SpellField.vue";

export default {
  props: ["id", "spell", "effect", "spellrankindex", "effectindex", "iscustom"],
  name: "spell-effects",
  components: {
    MatchReplace,
    SpellField
  },
  data: function() {
    return {
      damage_type: this.effect.subeffects[0].damage_type,
      showRatiosDropdown: false,
      user_ratios: {},
      repeat: 1,
      subIndex: 0,
      ratios: {}
    };
  },
  computed: {
    edata: function() {
      return this.effect.subeffects[this.subIndex];
    },
    damagetype_user: function() {
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
    addRatio: function(ratio) {
      Vue.set(this.ratios, ratio, {
        key: ratio,
        value: 0,
        ispercent: true
      });
    },
    removeEffect: function() {
      if (this.iscustom)
        this.$parent.customEffects = this.$parent.customEffects.filter(
          i => i !== this.effectindex
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
