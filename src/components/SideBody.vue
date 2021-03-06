<template>
  <div class="sidebody">
    <h2>Damage Totals &amp; Output</h2>
    <h3>Damage Pre-Mitigation</h3>
    <DamageBlock :output="output" :isPre="true"></DamageBlock>

    <hr />
    <h3>Damage Post-Mitigation</h3>
    <DamageBlock :output="output" :isPre="false"></DamageBlock>
    <hr />
    <h3>Target Status: {{ output.status }}</h3>
    <p>Overkill Damage: {{ output.overkill }}</p>
    <p>
      Health Remaining:
      <span class="health">{{ rnd(output.hpRemaining) }} HP</span>
    </p>
    <p>{{ percentf(output.hpRemainingPercent) }} Health Remaining</p>
    <hr />

    <div class="buttons">
      <a class="button" href="#settings">Settings...</a>
      <button @click="addCustomDamageSource()">Add Custom Damage Source</button>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";
// import SettingsModel from "./SettingsModel.vue"
import { calc_dmg_onhit, DamageType } from "./../javascript/league_data";
import DamageBlock from "./sidebar/DamageBlock.vue";
export default {
  name: "SideBody",
  props: ["damagingEffects", "player", "target"],
  components: { DamageBlock },
  methods: {
    rnd: function (n, digits) {
      if (n === undefined || isNaN(n)) n = 0;
      if (digits === undefined) digits = 0;
      return +n.toFixed(digits);
    },
    percentf: function (value) {
      return numeral(value).format("0.00%");
    },
    addCustomDamageSource() {
      this.$root.addCustomDamageSource();
    },
  },
  computed: {
    outPes: function () {
      return [
        this.percentf(this.output.preMagicDmg / this.output.preTotalDmg),
        this.percentf(this.output.prePhysicalDmg / this.output.preTotalDmg),
        this.percentf(this.output.trueDmg / this.output.preTotalDmg),

        this.percentf(this.output.magicDmg / this.output.totalDmg),
        this.percentf(this.output.physicalDmg / this.output.totalDmg),
        this.percentf(this.output.trueDmg / this.output.totalDmg),
      ];
    },
    outStyle: function () {
      const t = this.output.preTotalDmg;
      const p1 = this.output.preMagicDmg / t;
      const p2 = this.output.prePhysicalDmg / t;
      const p3 = this.output.trueDmg / t;

      const t2 = this.output.totalDmg;
      const p4 = this.output.magicDmg / t2;
      const p5 = this.output.physicalDmg / t2;
      const p6 = this.output.trueDmg / t2;
      return [
        {
          left: "0%",
          width: this.percentf(p1),
        },
        {
          left: this.percentf(p1),
          width: this.percentf(p2),
        },
        {
          left: this.percentf(p1 + p2),
          width: this.percentf(p3),
        },
        {
          left: "0%",
          width: this.percentf(p4),
        },
        {
          left: this.percentf(p4),
          width: this.percentf(p5),
        },
        {
          left: this.percentf(p4 + p5),
          width: this.percentf(p6),
        },
      ];
    },
    output: function () {
      console.log("Re-calc 4.0 start");
      const p = this.player;
      const t = this.target;
      let output = {
        preTotalDmg: 0,
        preMagicDmg: 0,
        prePhysicalDmg: 0,
        totalDmg: 0,
        magicDmg: 0,
        physicalDmg: 0,
        trueDmg: 0,
        status: "Unknown",
        overkill: 0,
        hpRemaining: 0,
        hpRemainingPercent: 0,
      };
      if (!p || !t) {
        console.log("Re-calc 4.0 failed, missing player and target.");
        return output;
      }

      for (const damagingEffect of this.damagingEffects) {
        // Use .damageSources for effects with more then one source.
        let sources = damagingEffect.damageSources;
        if (!sources) {
          // Use damagingEffect as the source only if no .damageSources defined.
          sources = [damagingEffect];
        }

        for (const damageSource of sources) {
          const times_hit = Math.max(damageSource.repeat, 0);
          let pre = damageSource.dmg_premitigation;
          let post;
          // A dynamic damageSource has the dmg_postmitigation cauculated for us.
          if (damageSource.dyanmic) post = damageSource.dmg_postmitigation;
          else {
            // non-dyanmic will have it set here.
            post = calc_dmg_onhit(p, t, pre, damageSource.damage_type);
            damageSource.dmg_postmitigation = post;
          }
          pre = pre * times_hit;
          post = post * times_hit;

          switch (damageSource.damage_type) {
            case DamageType.PHYSICAL:
              output.prePhysicalDmg += pre;
              output.physicalDmg += post;
              break;
            case DamageType.MAGIC:
              output.preMagicDmg += pre;
              output.magicDmg += post;
              break;
            case DamageType.TRUE:
              output.trueDmg += post;
              break;
            case DamageType.NONE:
            case DamageType.UNKNOWN:
              continue;
            default:
              console.log(
                'Unknown Damage Type "',
                damageSource.damage_type,
                '" Caculations may be incorrect.'
              );
              continue;
          }
          // Add totals if magic/phys/true damage
          output.preTotalDmg += pre;
          output.totalDmg += post;
        }
      }

      const hp_diff = t.current_hp - output.totalDmg;
      if (hp_diff < 0) {
        output.status = "Dead";
        output.hpRemaining = 0;
        output.hpRemainingPercent = 0;
        output.overkill = this.rnd(-hp_diff);
      } else {
        output.status = "Alive";
        output.hpRemaining = hp_diff;
        output.hpRemainingPercent = hp_diff / t.total_hp;
        output.overkill = "N/A";
      }
      return output;
    },
  },
};
</script>

<style>
.sidebody {
  margin: 0;
  padding: 0 0.5rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #121a1b;
}

/* // @media (min-width: 769px) and (max-width: 1375px) {
//   .sidebar .fill > * {
//     width: 100%;
//   }
// } */
@media (max-width: 775px) {
  .sidebar {
    position: inherit;
    width: 100%;
  }
}
</style>