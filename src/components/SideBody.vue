<template>
    <div class="data_holder sidebar" id="total_data">
      <h2 class="title_input">Damage Totals & Outputs</h2>
      <form autocomplete="off" id="total_data_form" v-cloak>
        <div class="fill">
          <h4>Damage before Resistances</h4>
          <div class="damage-dealt-chart">
            <div
              class="physical-bg"
              :title="percentf(output.preMagicDmg / output.preTotalDmg) + ' Physical'"
              :style="outputStyle[0]"
            ></div>
            <div
              class="magic-bg"
              :title="percentf(output.prePhysicalDmg / output.preTotalDmg) +' Magic'"
              :style="outputStyle[1]"
            ></div>
            <div
              class="true-bg"
              :title="percentf(output.trueDmg / output.preTotalDmg) +' True'"
              :style="outputStyle[2]"
            ></div>
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

          <hr>
          <h4>Damage Dealt to Target</h4>
          <div class="damage-dealt-chart">
            <div
              class="physical-bg"
              :title="percentf(output.magicDmg / output.totalDmg) + ' Physical'"
              :style="outputStyle[3]"
            ></div>
            <div
              class="magic-bg"
              :title="percentf(output.physicalDmg / output.preTotalDmg) +' Magic'"
              :style="outputStyle[4]"
            ></div>
            <div
              class="true-bg"
              :title="percentf(output.trueDmg / output.totalDmg) +' True'"
              :style="outputStyle[5]"
            ></div>
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
          <hr>
          <h3>Target Status: {{ output.status }}</h3>
          <p>Overkill Damage: {{ output.overkill }}</p>
          <p>
            Health Remaining:
            <span class="health">{{ rnd(output.hpRemaining) }} HP</span>
          </p>
          <p>{{ percentf(output.hpRemainingPercent) }} Health Remaining</p>
          <hr>
        </div>
        <!-- <input type="button" name="force_recalc" onclick="recalc()" value="Force RE-Calc"> -->
      </form>
      <nav id="nav" class="flex navbar">
      <!-- <a class="inline" onclick="addNewSpellForm('magic')">
        Add Magic Damage Spell
      </a>
      <a class="inline" onclick="addNewSpellForm('physical')">
        Add Physical Damage Spell
      </a> -->
      <a class="inline" @click="openSettings()">
        Settings...
      </a>
      <!-- <a class="inline" onclick="load()">
        Load...
      </a> -->
      <div class="block version-select hidden">
        <span>League Patch:</span>
        <select id="version_select" oninput="setPatchVersion(this.value);">
          <option value=''>Loading Data...</option>
        </select>
      </div>
      </nav>
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
    }
  },
  computed: {
    outputStyle: function() {
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
