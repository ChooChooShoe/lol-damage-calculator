<template>
  <div class="sidebody">
    <h2>Damage Totals &amp; Output</h2>
    <DeathRecap></DeathRecap>
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
      <span class="health">{{ output.hpRemaining.toFixed() }} HP</span>
    </p>
    <p>{{ percentf(output.hpRemainingPercent) }} Health Remaining</p>
    <hr />

    <!-- <div class="buttons">
      <a class="button" href="#settings">Settings...</a>
      <button @click="addCustomDamageSource()">Add Custom Damage Source</button>
    </div> -->
  </div>
</template>

<script lang="ts">
// import SettingsModel from "./SettingsModel.vue"
import { calc_dmg_onhit } from '@/model/league_data';
import { player, target, useDamageSources } from '@/global/state';
import DamageBlock from './DamageBlock.vue';
import DeathRecap from './DeathRecap.vue';
import { mapStores } from 'pinia';
export default {
  name: 'SideBody',
  components: { DamageBlock, DeathRecap },
  methods: {
    percentf: function (value: number): string {
      return value.toFixed(2) + '%';
    },
    addCustomDamageSource() {
      // this.$root.addCustomDamageSource();
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
          left: '0%',
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
          left: '0%',
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
      const p = player;
      const t = target;
      const output = {
        preTotalDmg: 0,
        preMagicDmg: 0,
        prePhysicalDmg: 0,
        totalDmg: 0,
        magicDmg: 0,
        physicalDmg: 0,
        trueDmg: 0,
        status: 'Unknown',
        overkill: '0',
        hpRemaining: 0,
        hpRemainingPercent: 0,
      };
      const damageSources = this.damageSourcesStore.damageSources;
      console.log('Re-calc 4.0 start', p, t, damageSources);

      for (const [key, sourceArray] of Object.entries(damageSources)) {
        console.log('Calc for', key, 'effects is', sourceArray);
        for (const source of sourceArray) {
          const times_hit = Math.max(source.repeat, 0) || 0;
          let pre = source.dmg_premitigation;
          let post = source.dmg_postmitigation;
          // A postIsManual damageSource has the dmg_postmitigation calculated for us.
          if (source.postIsManual) {
            post = calc_dmg_onhit(p, t, pre, source.damage_type);
            source.dmg_postmitigation = post;
          }
          pre = pre * times_hit;
          post = post * times_hit;

          switch (source.damage_type) {
            case 'Physical':
              output.prePhysicalDmg += pre;
              output.physicalDmg += post;
              break;
            case 'Magic':
              output.preMagicDmg += pre;
              output.magicDmg += post;
              break;
            case 'True':
              output.trueDmg += post;
              break;
            case 'None':
              continue;
            default:
              console.log(
                `Unknown Damage Type "${source.damage_type}" Caculations may be incorrect.`
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
        output.status = 'Dead';
        output.hpRemaining = 0;
        output.hpRemainingPercent = 0;
        output.overkill = (-hp_diff).toFixed();
      } else {
        output.status = 'Alive';
        output.hpRemaining = hp_diff;
        output.hpRemainingPercent = hp_diff / t.maximum_hp;
        output.overkill = 'N/A';
      }
      return output;
    },
    ...mapStores(useDamageSources),
  },
};
</script>

<style>
.sidebody {
  margin: 0.4rem;
  position: sticky;
  top: 0;
  right: 0;
  background-color: #121a1b;
  z-index: 100;
  width: 20em;
  float: right;
}

@media (max-width: 40em) {
  .sidebody {
    position: inherit;
    width: auto;
    float: none;
  }
}
</style>
