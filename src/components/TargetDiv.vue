
<template>
  <div>
    <h2>Target Data</h2>
    <ChampSearch v-model="champ"></ChampSearch>
    <ChampLevelSelect v-model="level"></ChampLevelSelect>

    <table
      v-if="showExtra || showDamage || showDefence"
      style="margin-bottom: 0"
    >
      <thead>
        <tr>
          <th>Stats</th>
          <th>
            <abbr :title="'Base stats for a level ' + level + ' ' + info.name"
              >Base</abbr
            >
          </th>
          <th>
            <abbr title="Stats gained from items and abilities">Bonus</abbr>
          </th>
          <th>
            <abbr title="Base + Bonus = Total">Total</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="showDamage">
          <th class="attack-damage">Attack Damage (AD)</th>
          <Editable
            v-model="base_ad"
            :readonly="readonly_base_values"
          ></Editable>
          <Editable v-model="bonus_ad"></Editable>
          <Editable v-model="total_ad"></Editable>
        </tr>
        <tr v-if="showDamage">
          <th class="ap">Ability Power (AP)</th>
          <Editable :value="0" :readonly="readonly_base_values"></Editable>
          <Editable v-model="total_ap"></Editable>
          <Editable v-model="total_ap"></Editable>
        </tr>
        <tr v-if="showDefence">
          <th class="health">Health</th>
          <Editable
            v-model="base_hp"
            :readonly="readonly_base_values"
          ></Editable>
          <Editable v-model="bonus_hp"></Editable>
          <Editable v-model="total_hp"></Editable>
        </tr>
        <tr v-if="showDefence">
          <th class="armor">Armor</th>
          <Editable
            v-model="base_armor"
            :readonly="readonly_base_values"
          ></Editable>
          <Editable v-model="bonus_armor"></Editable>
          <Editable v-model="total_armor"></Editable>
        </tr>
        <tr v-if="showDefence">
          <th class="mr">Magic Res. (MR)</th>
          <Editable
            v-model="base_mr"
            :readonly="readonly_base_values"
          ></Editable>
          <Editable v-model="bonus_mr"></Editable>
          <Editable v-model="total_mr"></Editable>
        </tr>
        <tr v-if="showExtra">
          <th class="mana">Mana</th>
          <Editable
            v-model="base_mana"
            :readonly="readonly_base_values"
          ></Editable>
          <Editable v-model="bonus_mana"></Editable>
          <Editable v-model="total_mana"></Editable>
        </tr>
      </tbody>
    </table>
    <div v-if="showBreakdown">
      <table v-if="showDefence">
        <thead>
          <tr>
            <th colspan="4" class="health">Health Breakdown</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class>Base</td>
            <Editable v-model="base_hp" :readonly="true"></Editable>
            <td class>Bonus</td>
            <Editable v-model="bonus_hp"></Editable>
          </tr>
          <tr>
            <td class>Max / Total</td>
            <Editable v-model="total_hp"></Editable>
            <td class>Shield</td>
            <Editable v-model="total_shield"></Editable>
          </tr>
          <tr>
            <td class>Current</td>
            <Editable v-model="current_hp"></Editable>
            <td class>Missing</td>
            <Editable v-model="missing_hp"></Editable>
          </tr>
        </tbody>
      </table>

      <p>
        <span class="armor"
          >{{ Math.ceil(total_armor) }} <b>total</b> armor</span
        >
        reduces incoming <span class="physical-damage">physical damage</span> by
        <EditableCollapse
          class="ap"
          :autoWidth="true"
          format="percent"
          v-model="percent_pysical_reduction"
        ></EditableCollapse
        >%. <br />
        It takes
        <span class="physical-damage"
          >{{ Math.ceil(eff_physical_hp) }} physical damage</span
        >
        to kill this target from only
        <span class="physical-damage">physical</span> sources.
      </p>
      <p>
        <span class="mr"
          >{{ Math.ceil(total_mr) }} <b>total</b> magic resistance</span
        >
        reduces incoming
        <span class="magic-damage">magic damage</span> by
        <EditableCollapse
          class="ap"
          :autoWidth="true"
          format="percent"
          v-model="percent_magic_reduction"
        ></EditableCollapse
        >%.<br />
        It takes
        <span class="magic-damage"
          >{{ Math.ceil(eff_magic_hp) }} magic damage</span
        >
        to kill this target from only
        <span class="magic-damage">magic</span> sources.
      </p>
    </div>
    <hr />
    <div class="buttons">
      <input
        class="button error"
        type="button"
        value="Clear"
        @click="clear()"
      />
      <input class="button info" type="button" value="Validate" />
    </div>
  </div>
</template>

<script>
import DataInput from "./DataInput.vue";
// import InlineInput from "./InlineInput.vue";
// import SimpleTooltip from "./SimpleTooltip.vue";
import Editable from "./simple/Editable.vue";
import EditableCollapse from "./simple/EditableCollapse.vue";
import ChampSearch from "./simple/ChampSearch.vue";
import ChampLevelSelect from "./simple/ChampLevelSelect.vue";
import { fetchSingleChampFile, default_stats } from "../javascript/league_data";

export default {
  name: "ChampionDiv",
  components: {
    Editable,
    EditableCollapse,
    ChampSearch,
    ChampLevelSelect,
  },
  props: {
    userid: String,
    isprimary: Boolean,
  },
  data: function () {
    return {
      showDamage: false,
      showDefence: true,
      showExtra: false,
      showBreakdown: true,
      readonly_base_values: true,
      champ: "",
      level: 18,

      flat_mr_reduction: 0,
      percent_mr_reduction: 0,
      percent_magicpen: 0,
      flat_magicpen: 0,

      flat_armor_reduction: 0,
      percent_armor_reduction: 0,
      percent_armorpen: 0,
      percent_bonus_armorpen: 0,
      lethality: 0,

      base_ad: 0,
      base_hp: 0,
      base_mana: 0,
      base_movespeed: 0,
      base_armor: 0,
      base_mr: 0,
      base_attackrange: 0,
      base_hpregen: 0,
      base_manaregen: 0,
      base_critchance: 0,
      base_attackspeed: 0,

      bonus_ad: 0,
      bonus_hp: 0,
      bonus_mana: 0,
      bonus_movespeed: 0,
      bonus_armor: 0,
      bonus_mr: 0,
      bonus_attackrange: 0,
      bonus_hpregen: 0,
      bonus_manaregen: 0,
      bonus_critchance: 0,
      bonus_attackspeed: 0,

      total_ap: 0,
      critdamage: 2,
      lifesteal: 0,
      spellvamp: 0,
      missing_hp: 0,

      total_shield: 0,
    };
  },
  computed: {
    championList() {
      return this.$app.championList;
    },
    flat_armorpen: {
      get: function () {
        return this.lethality * (0.6 + (0.4 * this.level) / 18);
      },
      set: function (flat_armorpen) {
        this.lethality = Math.round((45 * flat_armorpen) / (this.level + 27));
      },
    },
    current_hp: {
      get: function () {
        return this.total_hp - this.missing_hp;
      },
      set: function (current_hp) {
        if (current_hp > this.total_hp) this.total_hp = current_hp;
        this.missing_hp = this.total_hp - current_hp;
      },
    },
    total_ad: makeTotal("ad"),
    total_hp: makeTotal("hp"),
    total_mana: makeTotal("mana"),
    total_movespeed: makeTotal("movespeed"),
    total_armor: makeTotal("armor"),
    total_mr: makeTotal("mr"),
    total_attackrange: makeTotal("attackrange"),
    total_hpregen: makeTotal("hpregen"),
    total_manaregen: makeTotal("manaregen"),
    total_critchance: makeTotal("critchance"),
    total_attackspeed: makeTotal("attackspeed"),
    stats: function () {
      if (this.championList[this.champ])
        return this.championList[this.champ].stats;
      return default_stats();
    },
    info: function () {
      return this.championList[this.champ] || {};
    },
    percent_pysical_reduction: {
      get: function () {
        if (this.total_armor < 0)
          // Damage is amplified.
          return -1 + 100.0 / (100.0 - this.total_armor);
        //Normal damage reduction.
        else return 1.0 - 100.0 / (100.0 + this.total_armor);
      },
      set: function (val) {
        if (val > 0.9999) val = 0.9999;
        this.total_armor = 100 / (-val + 1.0) - 100;
      },
    },
    eff_physical_hp: {
      get: function () {
        if (this.total_armor < 0)
          return (1 + this.total_armor / 100.0) * this.total_hp;
        else return (1 + this.total_armor / 100.0) * this.total_hp;
      },
      set: function (val) {
        console.log("eff_physical_hp =>", val);
      },
    },
    percent_magic_reduction: {
      get: function () {
        if (this.total_mr < 0) return -1 + 100.0 / (100.0 - this.total_mr);
        else return 1.0 - 100.0 / (100.0 + this.total_mr);
      },
      set: function (val) {
        if (val > 0.9999) val = 0.9999;
        this.total_mr = 100 / (-val + 1.0) - 100;
      },
    },
    eff_magic_hp: {
      get: function () {
        if (this.total_mr < 0)
          return (1 + this.total_mr / 100.0) * this.total_hp;
        else return (1 + this.total_mr / 100.0) * this.total_hp;
      },
      set: function (val) {
        console.log("eff_magic_hp =>", val);
      },
    },
  },
  watch: {
    champ(champ, old) {
      if (!this.championList[champ]) {
        console.log("Invalid champ:", champ);
        // champ = old;
        // return;
      }
      window.localStorage.setItem("last_used_champ_" + this.userid, champ);
      if (this.isprimary === true) {
        this.$notify({
          group: "main",
          title: "Loading Champion " + champ + "…",
          type: "info",
        });
        const vue = this.$root.$app;
        fetchSingleChampFile(champ).then((model) => {
          // Removes all the last champions spells.
          vue.currentSpells.length = 0;
          vue.currentChamp = null;
          let newList = [];
          for (const skillkey in model.skills) {
            let value = model.skills[skillkey];
            newList.push({
              key: skillkey,
              value: value,
            });
          }
          vue.currentChamp = model.id;
          vue.currentSpells = newList;
          // sellAllItems();
          //TODO buy default items
          this.$notify({
            group: "main",
            title: "Loading Done.",
            type: "info",
          });
        });
      } else {
        this.$notify({
          group: "main",
          title: "Loading Target " + champ + "…",
          type: "info",
          text: "",
        });
      }
    },
    stats(stats, _old) {
      update_user_stats(stats, this, this.level);
    },
    level(level, _old) {
      update_user_stats(this.stats, this, level);
    },
    $data: {
      handler: function (val, oldVal) {
        window.localStorage.setItem(
          "last_used_data_" + this.userid,
          JSON.stringify(val)
        );
      },
      deep: true,
    },
  },
  created() {
    this.$app[this.userid] = this;
  },
  mounted: function () {
    this.champ =
      window.localStorage.getItem("last_used_champ_" + this.userid) || "";
    this.load(
      window.localStorage.getItem("last_used_data_" + this.userid) || "{}"
    );
  },
  methods: {
    load: function (json) {
      const data = JSON.parse(json);
      for (let key in data) {
        this[key] = data[key];
      }
    },
    save: function () {
      return JSON.stringify(this.$data);
    },
    clear: function (andChamp = false) {
      const lastChamp = this.champ;
      Object.assign(this.$data, this.$options.data.call(this));
      if (!andChamp) this.champ = lastChamp;
    },
    rnd: function (n, digits) {
      if (n === undefined || isNaN(n)) n = 0;
      if (digits === undefined) digits = 0;
      return +n.toFixed(digits);
    },
  },
};

function calcStat(lvl, base, growth) {
  return base + growth * (lvl - 1) * (0.7025 + 0.0175 * (lvl - 1));
}

function makeTotal(stat) {
  return {
    get: function () {
      return this["base_" + stat] + this["bonus_" + stat];
    },
    set: function (total_val) {
      this["bonus_" + stat] = total_val - this["base_" + stat];
    },
  };
}

function update_user_stats(stats, user, lvl) {
  user.base_ad = calcStat(lvl, stats.attackdamage, stats.attackdamageperlevel);
  user.base_hp = calcStat(lvl, stats.hp, stats.hpperlevel);
  user.base_mana = calcStat(lvl, stats.mp, stats.mpperlevel);
  user.base_movespeed = stats.movespeed;
  user.base_armor = calcStat(lvl, stats.armor, stats.armorperlevel);
  user.base_mr = calcStat(lvl, stats.spellblock, stats.spellblockperlevel);
  user.base_attackrange = stats.attackrange;
  user.base_hpregen = calcStat(lvl, stats.hpregen, stats.hpregenperlevel);
  user.base_manaregen = calcStat(lvl, stats.mpregen, stats.mpregenperlevel);
  user.base_critchance = calcStat(lvl, stats.crit, stats.critperlevel);
  user.base_attackspeed = calcStat(
    lvl,
    stats.attackspeed,
    stats.attackspeedperlevel
  );
}
</script>

<style>
table {
  background-color: transparent !important;
}
</style>
