
<template>
  <div>
    <h2>{{ username }}</h2>
    <ChampSearch v-model="champ"></ChampSearch>
    <ChampLevelSelect v-model="level"></ChampLevelSelect>

    <!-- <label class="column column-50">
      Show Damage Stats
      <label class="switch-wrap">
        <input type="checkbox" v-model="showDamage" />
        <div class="switch"></div>
      </label>
    </label>
    <label class="column column-50 flex">
      Show Defensive Stats
      <label class="switch-wrap">
        <input type="checkbox" v-model="showDefence" />
        <div class="switch"></div>
      </label>
    </label>-->

    <table v-if="showExtra || showDamage || showDefence" style="margin-bottom: 0;">
      <thead>
        <tr>
          <th>Stats</th>
          <th>
            <abbr :title="'Base stats for a level ' + level + ' ' + info.name">Base</abbr>
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
          <Editable v-model="base_ad" :readonly="readonly_base_values"></Editable>
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
          <Editable v-model="base_hp" :readonly="readonly_base_values"></Editable>
          <Editable v-model="bonus_hp"></Editable>
          <Editable v-model="total_hp"></Editable>
        </tr>
        <tr v-if="showDefence">
          <th class="armor">Armor</th>
          <Editable v-model="base_armor" :readonly="readonly_base_values"></Editable>
          <Editable v-model="bonus_armor"></Editable>
          <Editable v-model="total_armor"></Editable>
        </tr>
        <tr v-if="showDefenceLevel  > 0">
          <td colspan="4">
            <ul>
              <li>
                Will reduce
                <span class="physical-damage">Physical Damage</span> taken by
                <EditableCollapse
                  class="ap"
                  :autoWidth="true"
                  format="percent"
                  v-model="percent_pysical_reduction"
                ></EditableCollapse>%.
              </li>
              <li>
                Equivalent to having
                <span
                  class="health"
                >{{ Math.ceil(eff_physical_hp) }} Effective HP</span> vs.
                <span class="physical-damage">Physical Damage</span>.
              </li>
            </ul>
          </td>
        </tr>
        <tr v-if="showDefence">
          <th class="mr">Magic Res. (MR)</th>
          <Editable v-model="base_mr" :readonly="readonly_base_values"></Editable>
          <Editable v-model="bonus_mr"></Editable>
          <Editable v-model="total_mr"></Editable>
        </tr>
        <tr>
          <td colspan="4">
            <ul v-if="showDefenceLevel  > 0">
              <li>
                Will reduce
                <span class="magic-damage">Magic Damage</span> taken by
                <EditableCollapse class="ap" format="percent" v-model="percent_magic_reduction"></EditableCollapse>%.
              </li>
              <li>
                Equivalent to having
                <span class="health">{{ Math.ceil(eff_magic_hp) }} HP</span> vs.
                <span class="magic-damage">Magic Damage</span>.
              </li>
            </ul>
          </td>
        </tr>
        <tr v-if="showExtra">
          <th class="mana">Mana</th>
          <Editable v-model="base_mana" :readonly="readonly_base_values"></Editable>
          <Editable v-model="bonus_mana"></Editable>
          <Editable v-model="total_mana"></Editable>
        </tr>
        <!-- <tr>
          <th>Movespeed</th>
          <td>{{base_movespeed }}</td>
          <td>{{bonus_movespeed }}</td>
          <td>{{total_movespeed }}</td>
        </tr>-->
        <!-- <tr>
          <th>Attack Range</th>
          <td>{{base_attackrange}}</td>
          <td>{{bonus_attackrange}}</td>
          <td>{{total_attackrange }}</td>
        </tr>-->
        <!-- <tr>
          <th>Health Regen.</th>
          <td>{{base_hpregen }}</td>
          <td>{{bonus_hpregen }}</td>
          <td>{{total_hpregen }}</td>
        </tr>-->
        <!-- <tr>
          <th>Mana Regen.</th>
          <td>{{base_manaregen }}</td>
          <td>{{bonus_manaregen }}</td>
          <td>{{total_manaregen }}</td>
        </tr>-->
        <!-- <tr>
          <th>Crit Chance</th>
          <td>{{base_critchance }}</td>
          <td>{{bonus_critchance }}</td>
          <td>{{total_critchance }}</td>
        </tr>-->
        <!-- <tr>
          <th>Attackspeed</th>
          <td>{{base_attackspeed}}</td>
          <td>{{bonus_attackspeed}}</td>
          <td>{{total_attackspeed }}</td>
        </tr>-->
      </tbody>
    </table>
    <table v-if="showDamage">
      <thead>
        <tr>
          <th>Item Stats</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="lethality">Lethality</th>
          <Editable v-model="lethality"></Editable>
          <!-- <td><Editable v-model="flat_armorpen"></Editable></td> -->
        </tr>
        <tr>
          <th class="lethality">{{ rnd(percent_armorpen * 100) }}% Armor Penetration</th>
          <Editable v-model="percent_armorpen" format="percent">%</Editable>
        </tr>
        <tr>
          <th class="magic">Flat Magic Pen.</th>
          <Editable v-model="flat_magicpen"></Editable>
        </tr>
        <tr>
          <th class="magic">{{ rnd(percent_magicpen * 100) }}% Magic Pen.</th>
          <Editable v-model="percent_magicpen" format="percent">%</Editable>
        </tr>
        <tr>
          <td colspan="2">
            <div>
              <span>Has a Void Staff?&nbsp;</span>
              <label>
                <input
                  @change="percent_magicpen = $event.target.checked ? 0.4 : 0.0"
                  type="checkbox"
                />
                <span>{{ rnd(percent_magicpen * 100) }}% Magic Pen.</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="tabs is-left is-toggle">
      <ul>
        <li :class=" { 'is-active': showDamageLevel === 0 }">
          <a @click="showDamageLevel  = 0">Show Less</a>
        </li>
        <li :class=" { 'is-active': showDamageLevel === 1 }">
          <a @click="showDamageLevel  = 1">Show More</a>
        </li>
        <li :class=" { 'is-active': showDamageLevel === 2 }">
          <a @click="showDamageLevel  = 2">Show All</a>
        </li>
      </ul>
    </div>-->

    <div class="column" v-if="showDefence">
      <!-- <div class="tabs is-left is-toggle">
        <ul>
          <li :class=" { 'is-active': showDefenceLevel === 0 }">
            <a @click="showDefenceLevel  = 0">Show Less</a>
          </li>
          <li :class=" { 'is-active': showDefenceLevel === 1 }">
            <a @click="showDefenceLevel  = 1">Show More</a>
          </li>
          <li :class=" { 'is-active': showDefenceLevel === 2 }">
            <a @click="showDefenceLevel  = 2">Show All</a>
          </li>
        </ul>
      </div>-->
      <!-- <hr /> -->

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

      <data-input class="is-hidden" v-model="total_hp" labelclass="health">Health</data-input>
      <ul v-if="showDefenceLevel  > 0">
        <li>
          {{ rnd(base_hp) }}
          <b>base</b>
          HP + {{ rnd(bonus_hp) }}
          <b>bonus</b>
          HP =
          {{ rnd(total_hp) }} max HP - {{ rnd(missing_hp) }} missing HP = {{ rnd(current_hp) }} current HP
        </li>
        <hr />
      </ul>

      <!-- <div v-if="info.resource == 'Mana' && showDefenceLevel  > 1">
        <data-input v-model="total_mana" labelclass="mana">Mana</data-input>
        <ul>
          <li>
            {{ rnd(base_mana) }} Base
            <span class="mana">Mana</span>
            + {{ rnd(bonus_mana) }} Bonus
            <span class="mana">Mana</span>
            = {{ rnd(total_mana) }} Total
            <span class="mana">Mana</span>
          </li>
        </ul>

        <hr />
        <data-input
          v-if="info.resource == 'Mana'"
          labelclass="mana-regeneration"
          v-model="base_manaregen"
        >{{info.resource}} Regeneration (per 5)</data-input>
        <span v-if="info.resource == 'Mana'">
          &#8226; This is
          <span class="mana">
            {{ (base_manaregen / 5).toFixed(1) }}
            {{info.resource}}
          </span> after 1 second and
          <span class="mana">
            {{ rnd(base_manaregen * 12) }}
            {{info.resource}}
          </span> after 60 seconds.
        </span>
        <hr />
      </div>-->
      <!-- <data-input
        v-if="showDefenceLevel > 1"
        v-model="base_hpregen"
        labelclass="health-regeneration"
      >Health Regeneration (per 5)</data-input>
      <div v-if="showDefenceLevel > 1">
        This is
        <span class="health">{{ (base_hpregen / 5).toFixed(1) }} HP</span> after 1 second and
        <span class="health">{{ rnd(base_hpregen * 12) }} HP</span> after 60 seconds.
        <hr />
      </div>
      <span v-if="info.resource === 'None'">* {{ info.name }} does not use any secondary resource.</span>-->
    </div>
    <div class="buttons">
      <!-- <input
        class="button error is-hidden"
        type="button"
        value="Reset All"
        @click="clear(true)"
      />-->
      <input class="button error" type="button" value="Clear" @click="clear()" />
      <input class="button info" type="button" value="Validate" />
    </div>
    <ItemInventory v-if="$app.config.shopEnabled" ref="inventory" :userid="userid"></ItemInventory>
  </div>
</template>

<script>
import DataInput from "./DataInput.vue";
// import InlineInput from "./InlineInput.vue";
// import SimpleTooltip from "./SimpleTooltip.vue";
import ItemInventory from "./ItemInventory.vue";
import Editable from "./simple/Editable.vue";
import EditableCollapse from "./simple/EditableCollapse.vue";
import ChampSearch from "./simple/ChampSearch.vue";
import ChampLevelSelect from "./simple/ChampLevelSelect.vue";
import { fetchSingleChampFile, default_stats } from "../javascript/league_data";

export default {
  name: "ChampionDiv",
  components: {
    DataInput,
    // InlineInput,
    // SimpleTooltip,
    ItemInventory,
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
      showDamage: this.userid === "player",
      showDefence: this.userid === "target",
      showExtra: false,
      showDamageLevel: this.userid === "player" ? 1 : 0,
      showDefenceLevel: this.userid === "target" ? 1 : 0,
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
    username: function () {
      if (this.userid === "player") return "Player's Champion";
      return "Target's";
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
        console.log("percent_magic_reduction =>", val);
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
