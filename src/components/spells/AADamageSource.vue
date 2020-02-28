<template>
  <div class="data_holder column is-full is-half-desktop">
    <header class="title is-4">Auto Attack Damage</header>
    <hr />

    <data-input v-model="attack_damage" labelclass="ad" iconclass="attack-damage-icon">Attack Damage</data-input>
    <data-input v-model="onhit_magic_damage" labelclass="ap" iconclass="ap-icon">On-hit Magic</data-input>
    <data-input
      v-model="onhit_physical_damage"
      labelclass="ad"
      iconclass="attack-damage-icon"
    >On-hit Physical</data-input>
    <data-input v-model="onhit_true_damage" labelclass="true" iconclass="true-icon">On-hit True</data-input>

    <div class="column">
      <span>Each basic attacks deals&nbsp;</span>
      <span class="ad" title="Physical">{{ Math.round(attack_damage + onhit_physical_damage) }} /&nbsp;</span>
      <span class="ap" title="Magic">{{ Math.round(onhit_magic_damage) }} /&nbsp;</span>
      <span title="True">{{ Math.round(onhit_true_damage) }}</span>
      <span>&nbsp;damage before resistances.</span>
      <br />
      <span>Target wil&nbsp;</span>
      <span class="spelleffect">lose {{Math.round(dmg_onhit)}} health</span>
      <span>&nbsp;per hit.</span>
    </div>
    <label class="column">
      <span>AA&nbsp;</span>
      <input type="number" value="1" v-model.number="repeat" />
      <span>&nbsp;time</span>
      <span v-if=" repeat != 1">s</span>
      <span>.&nbsp;</span>
      <input :active="repeat === 1" type="button" value="1x" @click="repeat = 1" />
      <input :active="repeat === 2" type="button" value="2x" @click="repeat = 2" />
      <input :active="repeat === 5" type="button" value="5x" @click="repeat = 5" />
      <input :active="repeat === 10" type="button" value="10x" @click="repeat = 10" />
    </label>
    <div class="column">
      <span>In total, basic attacks deals ??? damage before resistances.</span>
      <br />
      <span>Target will&nbsp;</span>
      <span class="spelleffect">lose {{Math.round(dmg_onhit)}} health</span>.
    </div>
  </div>
</template>

<script>
import {
  calcDamageWithRedection,
  DamageSource,
  DamageType
} from "../../javascript/league_data";
import DataInput from "../DataInput.vue";

export default {
  name: "AADamageSource",
  components: {
    DataInput
  },
  props: ["index"],
  data: function() {
    return {
      customEffects: [0],
      lastEffectIndex: 1,
      repeat: 1,
      ratios: {},
      onhit_magic_damage: 0,
      onhit_true_damage: 0,
      onhit_physical_damage: 0
    };
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
  computed: {
    attack_damage: {
      get() {
        return this.$app.player.total_ad;
      },
      set(value) {
        this.$app.player.total_ad = value;
      }
    },

    damageSources() {
      return [
        new DamageSource(DamageType.PHYSICAL, this.attack_damage),
        new DamageSource(DamageType.PHYSICAL, this.onhit_physical_damage),
        new DamageSource(DamageType.MAGIC, this.onhit_magic_damage),
        new DamageSource(DamageType.TRUE, this.onhit_true_damage)
      ];
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
  methods: {
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