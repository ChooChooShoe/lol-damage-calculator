<template>
  <div class="sidebar column is-one-quarter">
    <h1 class="title is-4">Damage Totals &amp; Outputs</h1>
    <h2 class="subtitle is-5">Damage before Resistances</h2>
    <div class="damage-dealt-chart">
      <div class="magic-bg" :title="outPes[0] + ' Magic'" :style="outStyle[0]">{{ outPes[0] }}</div>
      <div class="physical-bg" :title="outPes[1]  +' Physical'" :style="outStyle[1]">{{ outPes[1] }}</div>
      <div class="true-bg" :title="outPes[2]  +' True'" :style="outStyle[2]">{{ outPes[2] }}</div>
    </div>
    <p>
      {{ rnd(output.preMagicDmg) }}
      <span class="magic-damage">Magic Damage</span>
      dealt. {{ percentf(output.preMagicDmg / output.preTotalDmg) }}
    </p>
    <p>
      {{ rnd(output.prePhysicalDmg) }}
      <span class="physical-damage">Physical Damage</span>
      dealt. {{ percentf(output.prePhysicalDmg / output.preTotalDmg) }}
    </p>
    <p>
      {{ rnd(output.trueDmg) }}
      <span class="true-damage">True Damage</span>
      dealt. {{ percentf(output.trueDmg / output.preTotalDmg) }}
    </p>
    <p style="font-weight: bold;">
      <span>Total Damage</span>
      dealt: {{ rnd(output.preTotalDmg) }}
    </p>

    <hr />
    <h2 class="subtitle is-5">Damage Dealt to Target</h2>
    <div class="damage-dealt-chart">
      <div class="magic-bg" :title="outPes[3] + ' Magic'" :style="outStyle[3]">{{ outPes[3] }}</div>
      <div class="physical-bg" :title="outPes[4]  +' Physical'" :style="outStyle[4]">{{ outPes[4] }}</div>
      <div class="true-bg" :title="outPes[5]  +' True'" :style="outStyle[5]">{{ outPes[5] }}</div>
    </div>
    <p>
      {{ rnd(output.magicDmg) }}
      <span class="magic-damage">Magic Damage</span>
      dealt. {{ percentf(output.magicDmg / output.totalDmg) }}
    </p>
    <p>
      {{ rnd(output.physicalDmg) }}
      <span class="physical-damage">Physical Damage</span>
      dealt. {{ percentf(output.physicalDmg / output.totalDmg) }}
    </p>
    <p>
      {{ rnd(output.trueDmg) }}
      <span class="true-damage">True Damage</span>
      dealt. {{ percentf(output.trueDmg / output.totalDmg) }}
    </p>
    <p style="font-weight: bold;">
      <span>Total Damage</span>
      dealt: {{ rnd(output.totalDmg) }}
    </p>
    <hr />
    <h3>Target Status: {{ output.status }}</h3>
    <p>Overkill Damage: {{ output.overkill }}</p>
    <p>
      Health Remaining:
      <span class="health">{{ rnd(output.hpRemaining) }} HP</span>
    </p>
    <p>{{ percentf(output.hpRemainingPercent) }} Health Remaining</p>
    <hr />
    <nav id="nav" class="flex navbar is-hidden">
      <!-- <a class="inline" onclick="addNewSpellForm('magic')">
        Add Magic Damage Spell
      </a>
      <a class="inline" onclick="addNewSpellForm('physical')">
        Add Physical Damage Spell
      </a>-->
      <a class="inline" @click="openSettings()">Settings...</a>
      <!-- <a class="inline" onclick="load()">
        Load...
      </a>-->
      <div class="block version-select is-hidden">
        <span>League Patch:</span>
        <select id="version_select" oninput="setPatchVersion(this.value);">
          <option value>Loading Data...</option>
        </select>
      </div>
    </nav>

    <div class="buttons">
      <button class="button is-info" @click="addCustomDamageSource()">Add Custom Damage Source</button>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  name: "SideBody",
  props: ["spellComponents", "player", "target"],
  methods: {
    openSettings() {
      // this.$app.$refs.shop.visable = false;
      this.$app.$refs.settings.visable = true;
    },
    rnd: function(n, digits) {
      if (n === undefined || isNaN(n)) n = 0;
      if (digits === undefined) digits = 0;
      return +n.toFixed(digits);
    },
    percentf: function(value) {
      return numeral(value).format("0.00%");
    },
    addCustomDamageSource() {
      this.$app.addCustomDamageSource();
    }
  },
  computed: {
    outPes: function() {
      return [
        this.percentf(this.output.preMagicDmg / this.output.preTotalDmg),
        this.percentf(this.output.prePhysicalDmg / this.output.preTotalDmg),
        this.percentf(this.output.trueDmg / this.output.preTotalDmg),

        this.percentf(this.output.magicDmg / this.output.totalDmg),
        this.percentf(this.output.physicalDmg / this.output.totalDmg),
        this.percentf(this.output.trueDmg / this.output.totalDmg)
      ];
    },
    outStyle: function() {
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
          width: this.percentf(p1)
        },
        {
          left: this.percentf(p1),
          width: this.percentf(p2)
        },
        {
          left: this.percentf(p1 + p2),
          width: this.percentf(p3)
        },
        {
          left: "0%",
          width: this.percentf(p4)
        },
        {
          left: this.percentf(p4),
          width: this.percentf(p5)
        },
        {
          left: this.percentf(p4 + p5),
          width: this.percentf(p6)
        }
      ];
    },
    output: function() {
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
        hpRemainingPercent: 0
      };
      if (!p || !t) {
        console.log("Re-calc 4.0 failed, missing player and target.");
        return output;
      }

      for (const spellEff of this.spellComponents) {
        switch (spellEff.damage_type) {
          case "physical":
            output.preTotalDmg += spellEff.dmg_premitigation;
            output.prePhysicalDmg += spellEff.dmg_premitigation;
            output.totalDmg += spellEff.dmg_onhit;
            output.physicalDmg += spellEff.dmg_onhit;
            break;
          case "magic":
            output.preTotalDmg += spellEff.dmg_premitigation;
            output.preMagicDmg += spellEff.dmg_premitigation;
            output.totalDmg += spellEff.dmg_onhit;
            output.magicDmg += spellEff.dmg_onhit;
            break;
          case "true":
            output.preTotalDmg += spellEff.dmg_premitigation;

            output.totalDmg += spellEff.dmg_onhit;
            output.trueDmg += spellEff.dmg_onhit;
            break;
          default:
            break;
        }
      }

      const hp_diff = t.total_hp - output.totalDmg;
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
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  z-index: 700;
  position: sticky;
  top: 0;
  overflow: auto;
  float: right;
}
.main {
  width: 70%;
}

// @media (min-width: 769px) and (max-width: 1375px) {
//   .sidebar .fill > * {
//     width: 100%;
//   }
// }
@media (max-width:769px) {
  .sidebar {
    position: inherit;
    width: 100%;
  }
  .main {
    width: 100%;
  }
}

.damage-dealt-chart {
  position: relative;
  height: 32px + 2px;
  border: #1e8ad6 1px solid;
}

.damage-dealt-chart > div {
  position: absolute;
  text-align: center;
  height: 32px;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

.true-bg {
  background-color: #f9966b;
}

.physical-bg {
  background-color: #bc6032;
  color: whitesmoke;
}

.magic-bg {
  background-color: teal;
  color: black;
}
</style>