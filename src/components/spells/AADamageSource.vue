<template>
  <div class="data_holder c50">
    <h2>Auto Attack Damage</h2>
    <hr />
    <table>
      <thead>
        <tr>
          <th>Damage Type</th>
          <th>Pre-Damage</th>
          <th>Post-Damage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="ad">Basic Attack</th>
          <Editable v-model="attack_damage"></Editable>
          <Editable :readonly="true" v-model="ds_ad.dmg_postmitigation"></Editable>
        </tr>
        <tr>
          <th class="ad">On-Hit Physical</th>
          <Editable v-model="ds_ph.dmg_premitigation"></Editable>
          <Editable :readonly="true" v-model="ds_ph.dmg_postmitigation"></Editable>
        </tr>
        <tr>
          <th class="ap">On-Hit Magic</th>
          <Editable v-model="ds_mg.dmg_premitigation"></Editable>
          <Editable :readonly="true" v-model="ds_ph.dmg_postmitigation"></Editable>
        </tr>
        <tr>
          <th class="true">On-Hit True</th>
          <Editable v-model="ds_tr.dmg_premitigation"></Editable>
          <Editable :readonly="true" v-model="ds_ph.dmg_postmitigation"></Editable>
        </tr>
      </tbody>
    </table>
    <p>
      <span>Each basic attacks deals&nbsp;</span>
      <span class="ad" title="Basic Physical">{{ Math.round(attack_damage ) }}</span>
      <span>&nbsp;damage, plus&nbsp;</span>
      <span class="ad" title="Physical">{{ Math.round(ds_ph.dmg_premitigation) }}</span>
      <span>&nbsp;/&nbsp;</span>
      <span class="ap" title="Magic">{{ Math.round(ds_mg.dmg_premitigation) }}</span>
      <span>&nbsp;/&nbsp;</span>
      <span title="True">{{ Math.round(ds_tr.dmg_premitigation) }}</span>
      <span>&nbsp;on-hit, before resistances.</span>
      <br />
      <span>Total&nbsp;</span>
      <span
        class="spelleffect"
      >{{Math.round(attack_damage +ds_ph.dmg_premitigation + ds_mg.dmg_premitigation + ds_tr.dmg_premitigation)}} damage</span>
      <span>&nbsp;per auto attack, before resistances.</span>
    </p>
    <p>
      <span>The target takes&nbsp;</span>
      <span class="ad" title="Basic Physical">{{ Math.round(ds_ad.dmg_postmitigation) }}</span>
      <span>&nbsp;damage, plus&nbsp;</span>
      <span class="ad" title="Physical">{{ Math.round(ds_ph.dmg_postmitigation) }}</span>
      <span>&nbsp;/&nbsp;</span>
      <span class="ap" title="Magic">{{ Math.round(ds_mg.dmg_postmitigation) }}</span>
      <span>&nbsp;/&nbsp;</span>
      <span title="True">{{ Math.round(ds_tr.dmg_postmitigation) }}</span>
      <span>&nbsp;on-hit damage.</span>
      <br />
      <span>Total&nbsp;</span>
      <span
        class="spelleffect"
      >{{Math.round(ds_ad.dmg_postmitigation +ds_ph.dmg_postmitigation + ds_mg.dmg_postmitigation + ds_tr.dmg_postmitigation)}} health lost</span>
      <span>&nbsp;per auto attack.</span>
    </p>
    <p>
      <label>
        <span>AA&nbsp;</span>
        <EditableCollapse v-model="repeat"></EditableCollapse>
        <span>&nbsp;time</span>
        <span v-if=" repeat != 1">s</span>
        <span>.&nbsp;</span>
      </label>
      <input
        v-for="(item, index) in [0,1,2,5,10]"
        :key="index"
        type="button"
        :value=" item + 'x'"
        @click="repeat = item"
        :class="{ 'success': repeat == item }"
      />
    </p>
    <p>
      <span>In total, auto attacks deal&nbsp;</span>
      <span
        class="spelleffect"
      >{{Math.round((ds_ad.dmg_premitigation + ds_ph.dmg_premitigation + ds_ph.dmg_premitigation + ds_tr.dmg_premitigation) * repeat)}} damage</span>
      <span>&nbsp;per auto attack, before resistances.</span>
      <br />
      <span>Target will&nbsp;</span>
      <span
        class="spelleffect"
      >lose {{Math.round((ds_ad.dmg_postmitigation + ds_ph.dmg_postmitigation + ds_ph.dmg_postmitigation + ds_tr.dmg_postmitigation ) * repeat)}} health</span>.
    </p>
  </div>
</template>

<script>
import { DamageSource, DamageType } from "../../javascript/league_data";
import Editable from "../simple/Editable.vue";
import EditableCollapse from "../simple/EditableCollapse.vue";

export default {
  name: "AADamageSource",
  components: {
    Editable,
    EditableCollapse,
  },
  props: ["index"],
  data: function () {
    return {
      customEffects: [0],
      lastEffectIndex: 1,
      repeat: 0,
      ratios: {},
      ds_ad: new DamageSource(DamageType.PHYSICAL, 0),
      ds_ph: new DamageSource(DamageType.PHYSICAL, 0),
      ds_mg: new DamageSource(DamageType.MAGIC, 0),
      ds_tr: new DamageSource(DamageType.TRUE, 0),
    };
  },
  mounted: function () {
    this.$app.damagingEffects.push(this);

    // Sets this.ds_ad.dmg_premitigation to always be player.total_ad
    // TODO: Kalista
    let x = this.$app.player;
    Object.defineProperty(this.ds_ad, "dmg_premitigation", {
      get() {
        return x.total_ad;
      },
    });
  },
  destroyed: function () {
    const index = this.$app.damagingEffects.indexOf(this);
    if (index > -1) {
      this.$app.damagingEffects.splice(index, 1);
    }
  },
  watch: {
    repeat: function (val, old) {
      this.ds_ad.repeat = val;
      this.ds_ph.repeat = val;
      this.ds_mg.repeat = val;
      this.ds_tr.repeat = val;
    },
  },
  computed: {
    attack_damage: {
      get() {
        return this.$app.player.total_ad;
      },
      set(value) {
        this.$app.player.total_ad = value;
      },
    },
    damageSources() {
      return [this.ds_ad, this.ds_ph, this.ds_mg, this.ds_tr];
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
  },
};
</script>