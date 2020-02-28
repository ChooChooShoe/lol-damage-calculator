
<template>
  <div class="column">
    <h2 class="title is-3">{{ username }}</h2>
    <div class="control">
      <div class="select">
        <select v-model="champ">
          <template v-for="item in championList">
            <option :key="item.id" :value="item.id">{{ item.name }}</option>
          </template>
        </select>
      </div>
    </div>
    <label class="label">Champion Level</label>
    <div class="field">
      <div class="control">
        <input
          type="number"
          value="18"
          v-model.number="level"
          class="input"
          placeholder="Set Champion Level"
        />
      </div>
      <div class="control">
        <div class="buttons">
          <input
            :class="{ 'is-primary': level == 1 }"
            type="button"
            class="button"
            value="1"
            @click="level = 1"
          />
          <input
            :class="{ 'is-primary': level == 6 }"
            type="button"
            class="button"
            value="6"
            @click="level = 6"
          />
          <input
            :class="{ 'is-primary': level == 9 }"
            type="button"
            class="button"
            value="9"
            @click="level = 9"
          />
          <input
            :class="{ 'is-primary': level == 11 }"
            type="button"
            class="button"
            value="11"
            @click="level = 11"
          />
          <input
            :class="{ 'is-primary': level == 16 }"
            type="button"
            class="button"
            value="16"
            @click="level = 16"
          />
          <input
            :class="{ 'is-primary': level == 18 }"
            type="button"
            class="button"
            value="18"
            @click="level = 18"
          />
        </div>
      </div>
    </div>

    <div class="column is-hidden">
      <div>
        <simple-tooltip dname="Mouse over for stats.">
          <div class="stats-table">
            <div>
              <span>Name:</span>
              <span>{{ info.name }}</span>
            </div>
            <div>
              <span>Title:</span>
              <span>{{ info.title }}</span>
            </div>
            <div>
              <span>Resource Type:</span>
              <span>{{ info.resource }}</span>
            </div>
            <div>
              <span class="health">Base HP:</span>
              <span>{{ stats.hp }}</span>
            </div>
            <div>
              <span class="health">HP growth:</span>
              <span>{{ stats.hpperlevel }}</span>
            </div>
            <div>
              <span class="mana">Base Mana:</span>
              <span>{{ stats.mp }}</span>
            </div>
            <div>
              <span class="mana">Mana growth:</span>
              <span>{{ stats.mpperlevel }}</span>
            </div>
            <div>
              <span>Movespeed:</span>
              <span>{{ stats.movespeed }}</span>
            </div>
            <div>
              <span class="armor">Base Armor:</span>
              <span>{{ stats.armor }}</span>
            </div>
            <div>
              <span class="armor">Armor growth:</span>
              <span>{{ stats.armorperlevel }}</span>
            </div>
            <div>
              <span class="mr">Base Magic Res.:</span>
              <span>{{ stats.spellblock }}</span>
            </div>
            <div>
              <span class="mr">Magic Res. growth:</span>
              <span>{{ stats.spellblockperlevel }}</span>
            </div>
            <div>
              <span>Attack Range:</span>
              <span>{{ stats.attackrange }}</span>
            </div>
            <div>
              <span class="health">Base HP Regen:</span>
              <span>{{ stats.hpregen }}</span>
            </div>
            <div>
              <span class="health">HP Regen growth:</span>
              <span>{{ stats.hpregenperlevel }}</span>
            </div>
            <div>
              <span class="mana">Mana Regen:</span>
              <span>{{ stats.mpregen }}</span>
            </div>
            <div>
              <span class="mana">Mana Regen growth:</span>
              <span>{{ stats.mpregenperlevel }}</span>
            </div>
            <div>
              <span class="critical-chance">Crit:</span>
              <span>{{ stats.crit }}</span>
            </div>
            <div>
              <span class="critical-chance">Crit growth:</span>
              <span>{{ stats.critperlevel }}</span>
            </div>
            <div>
              <span class="ad">Attack Damage:</span>
              <span>{{ stats.attackdamage }}</span>
            </div>
            <div>
              <span class="ad">Attack Damage growth:</span>
              <span>{{ stats.attackdamageperlevel }}</span>
            </div>
            <div>
              <span>Base Attack Speed:</span>
              <span>{{ stats.attackspeed }}</span>
            </div>
            <div>
              <span>Percent Attack Speed growth:</span>
              <span>{{ stats.attackspeedperlevel }}</span>
            </div>
          </div>
        </simple-tooltip>
      </div>
    </div>
    <label class="column column-50 is-hidden">
      Show Damage Stats
      <label class="switch-wrap">
        <input type="checkbox" v-model="showDamage" />
        <div class="switch"></div>
      </label>
    </label>
    <label class="column column-50 flex is-hidden">
      Show Defensive Stats
      <label class="switch-wrap">
        <input type="checkbox" v-model="showDefence" />
        <div class="switch"></div>
      </label>
    </label>

    <div v-if="showDamage">
      <table class="table is-hoverable is-striped is-narrow is-fullwidth is-hidden">
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
        <tfoot>
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
        </tfoot>
        <tbody>
          <tr>
            <th>AD</th>
            <td>{{ base_ad }}</td>
            <td>{{bonus_ad }}</td>
            <td>{{total_ad }}</td>
          </tr>
          <tr>
            <th>AP</th>
            <td>0</td>
            <td>{{ total_ap }}</td>
            <td>{{ total_ap }}</td>
          </tr>
          <tr>
            <th>Health</th>
            <td>{{base_hp }}</td>
            <td>{{bonus_hp }}</td>
            <td>{{total_hp }}</td>
          </tr>
          <tr>
            <th>Mana</th>
            <td>{{base_mana }}</td>
            <td>{{bonus_mana }}</td>
            <td>{{total_mana }}</td>
          </tr>
          <tr>
            <th>Movespeed</th>
            <td>{{base_movespeed }}</td>
            <td>{{bonus_movespeed }}</td>
            <td>{{total_movespeed }}</td>
          </tr>
          <tr>
            <th>Armor</th>
            <td>{{base_armor }}</td>
            <td>{{bonus_armor }}</td>
            <td>{{total_armor }}</td>
          </tr>
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
          <tr>
            <th>MR</th>
            <td>{{base_mr }}</td>
            <td>{{bonus_mr }}</td>
            <td>{{total_mr }}</td>
          </tr>
          <tr>
            <th>Attack Range</th>
            <td>{{base_attackrange}}</td>
            <td>{{bonus_attackrange}}</td>
            <td>{{total_attackrange }}</td>
          </tr>
          <tr>
            <th>Health Regen.</th>
            <td>{{base_hpregen }}</td>
            <td>{{bonus_hpregen }}</td>
            <td>{{total_hpregen }}</td>
          </tr>
          <tr>
            <th>Mana Regen.</th>
            <td>{{base_manaregen }}</td>
            <td>{{bonus_manaregen }}</td>
            <td>{{total_manaregen }}</td>
          </tr>
          <tr>
            <th>Crit Chance</th>
            <td>{{base_critchance }}</td>
            <td>{{bonus_critchance }}</td>
            <td>{{total_critchance }}</td>
          </tr>
          <tr>
            <th>Attackspeed</th>
            <td>{{base_attackspeed}}</td>
            <td>{{bonus_attackspeed}}</td>
            <td>{{total_attackspeed }}</td>
          </tr>
        </tbody>
      </table>

      <div class="tabs is-left is-toggle">
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
      </div>

      <data-input v-model="total_ap" labelclass="ap">Ability Power (AP)</data-input>

      <data-input v-model="total_ad" labelclass="attack-damage">Attack Damage (AD)</data-input>

      <data-input v-model="base_ad" labelclass="attack-damage">Base AD</data-input>
      <data-input v-model="bonus_ad" labelclass="attack-damage">Bonus AD</data-input>

      <data-input
        v-if="showDamageLevel > 1"
        v-model="base_attackspeed"
        :ispercent="true"
        labelclass="attack-speed"
      >
        Attack Speed = {{ base_attackspeed }} +
        {{ rnd(base_attackspeed * 100) }}%
      </data-input>

      <data-input
        v-if="showDamageLevel > 1"
        v-model="base_critchance"
        :ispercent="true"
        labelclass="critical-chance"
        iconclass="critical-strike-chance-icon"
      >{{ rnd(base_critchance * 100) }}% Crit. Chance</data-input>

      <data-input
        v-if="showDamageLevel > 1"
        v-model="critdamage"
        :ispercent="true"
        labelclass="critical-damage"
        iconclass="critical-strike-damage-icon"
      >{{ rnd(critdamage * 100) }}% Crit. Damage</data-input>

      <data-input
        v-if="showDamageLevel > 1"
        v-model="lifesteal"
        :ispercent="true"
        labelclass="life-steal"
      >{{ rnd(lifesteal * 100) }}% Life Steal</data-input>

      <div class="field">
        <span>Has a Void Staff?&nbsp;</span>
        <input
          id="switchExample"
          @change="percent_magicpen = $event.target.checked ? 0.4 : 0.0"
          type="checkbox"
          name="switchExample"
          class="switch"
          checked="checked"
        />
        <label for="switchExample">
          <span>{{ rnd(percent_magicpen * 100) }}% Magic Pen.</span>
        </label>
      </div>

      <data-input
        v-model="flat_magicpen"
        labelclass="magic-penetration"
      >Flat Magic Penetration = {{ rnd(flat_magicpen) }}</data-input>

      <data-input
        v-if="showDamageLevel > 1"
        v-model="spellvamp"
        :ispercent="true"
        labelclass="spell-vamp"
      >{{ rnd(spellvamp * 100) }}% Spell Vamp</data-input>

      <data-input
        v-model="lethality"
        labelclass="lethality"
        iconclass="hybrid-penetration-icon"
      >Lethality = {{ rnd(lethality) }}</data-input>

      <data-input
        v-model="flat_armorpen"
        labelclass="lethality"
        iconclass="hybrid-penetration-icon"
      >- Effective Flat Armor Pen. = {{ rnd(flat_armorpen) }}</data-input>

      <data-input
        v-model="percent_armorpen"
        :ispercent="true"
        iconclass="armor-penetration-icon"
      >{{ rnd(percent_armorpen * 100) }}% Armor Penetration</data-input>

      <data-input
        v-model="percent_bonus_armorpen"
        :ispercent="true"
        iconclass="armor-penetration-icon"
      >
        {{ rnd(percent_bonus_armorpen * 100) }}%
        <a>Bonus</a> Armor Penetration
      </data-input>
    </div>

    <div class="column" v-if="showDefence">
      <div class="tabs is-left is-toggle">
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
      </div>
      <hr />
      <h3 class=" health title  is-4">
        Health
      </h3>
      <div class="columns is-multiline">
        <div class="column is-half">
          <data-input v-model="base_hp" iconclass="health-icon" :readonly="true">Base</data-input>
        </div>
        <div class="column is-half">
          <data-input v-model="bonus_hp" iconclass="health-icon">Bonus</data-input>
        </div>
        <div class="column is-half">
          <data-input v-model="total_hp" iconclass="health-icon">Max</data-input>
        </div>
        <div class="column is-half">
          <data-input v-model="total_shield" iconclass="health-icon">Shield</data-input>
        </div>
        <div class="column is-full">
          <data-input v-model="current_hp" iconclass="health-icon">Current HP</data-input>
        </div>
        <div class="column is-full">
          <data-input v-model="missing_hp" iconclass="health-icon">Missing HP</data-input>
        </div>
      </div>

      <data-input class="is-hidden" v-model="total_hp" labelclass="health">Health</data-input>
      <ul v-if="showDefenceLevel  > 0">
        <li>
          {{ rnd(base_hp) }} <b>base</b> HP + {{ rnd(bonus_hp) }} <b>bonus</b> HP =
          {{ rnd(total_hp) }} max HP - {{ rnd(missing_hp) }} missing HP = {{ rnd(current_hp) }} current HP
        </li>
      <hr />
      </ul>
      <data-input v-model="total_armor" labelclass="armor">Armor</data-input>
      <ul v-if="showDefenceLevel  > 0">
        <li>{{ rnd(base_armor) }} Base Armor + {{ rnd(bonus_armor) }} Bonus Armor = {{ rnd(total_armor) }} Total Armor</li>
        <li>
          Will reduce
          <span class="physical-damage">Physical Damage</span> taken by
          <span class="ap">{{ rnd(percent_pysical_reduction * 10000 ) / 100 }}%</span>.
        </li>
        <li>
          Equivalent to having
          <span class="health">{{ Math.ceil(eff_physical_hp) }} HP</span> vs.
          <span class="physical-damage">Physical Damage</span>.
        </li>
      <hr />
      </ul>
      <data-input v-model="total_mr" labelclass="mr">Magic Resistance (MR)</data-input>
      <ul v-if="showDefenceLevel  > 0">
        <li>{{ rnd(base_mr) }} Base MR + {{ rnd(bonus_mr) }} Bonus MR = {{ rnd(total_mr) }} Total MR</li>
        <li>
          Will reduce
          <span class="magic-damage">Magic Damage</span> taken by
          <span class="ap">{{ rnd(percent_magic_reduction * 10000 ) / 100 }}%</span>.
        </li>
        <li>
          Equivalent to having
          <span class="health">{{ Math.ceil(eff_magic_hp) }} HP</span> vs.
          <span class="magic-damage">Magic Damage</span>.
        </li>
      <hr />
      </ul>
      <div v-if="info.resource == 'Mana' && showDefenceLevel  > 1">
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
        >
          {{info.resource}} Regeneration (per 5)
        </data-input>
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
      </div>
      <data-input v-if="showDefenceLevel > 1" v-model="base_hpregen" labelclass="health-regeneration">Health Regeneration (per 5)</data-input>
      <div v-if="showDefenceLevel > 1">
        This is
        <span class="health">{{ (base_hpregen / 5).toFixed(1) }} HP</span> after 1 second and
        <span class="health">{{ rnd(base_hpregen * 12) }} HP</span> after 60 seconds.
      <hr />
      </div>
      <span v-if="info.resource === 'None'">* {{ info.name }} does not use any secondary resource.</span>
    </div>
    <div class="buttons">
      <input
        class="button is-danger is-hidden"
        type="button"
        value="Reset All"
        @click="clear(true)"
      />
      <input class="button is-warning" type="button" value="Clear" @click="clear()" />
      <input class="button is-info" type="button" value="Validate" />
    </div>
    <ItemInventory v-if="$app.config.shopEnabled" ref="inventory" :userid="userid"></ItemInventory>
  </div>
</template>

<script>
import DataInput from "./DataInput.vue";
import InlineInput from "./InlineInput.vue";
import SimpleTooltip from "./SimpleTooltip.vue";
import ItemInventory from "./ItemInventory.vue";
import { fetchSingleChampFile, default_stats } from "../javascript/league_data";

export default {
  name: "ChampionDiv",
  components: {
    DataInput,
    InlineInput,
    SimpleTooltip,
    ItemInventory
  },
  props: {
    userid: String,
    isprimary: Boolean
  },
  data: function() {
    return {
      showDamage: this.userid === "player",
      showDefence: this.userid === "target",
      showDamageLevel: this.userid === "player" ? 1 : 0,
      showDefenceLevel: this.userid === "target" ? 1 : 0,
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

      total_shield: 0
    };
  },
  computed: {
    championList() {
      return this.$app.championList;
    },
    username: function() {
      if (this.userid === "player") return "Player's Champion";
      return "Target's";
    },
    flat_armorpen: {
      get: function() {
        return this.lethality * (0.6 + (0.4 * this.level) / 18);
      },
      set: function(flat_armorpen) {
        this.lethality = Math.round((45 * flat_armorpen) / (this.level + 27));
      }
    },
    current_hp: {
      get: function() {
        return this.total_hp - this.missing_hp;
      },
      set: function(current_hp) {
        this.missing_hp = this.total_hp - current_hp;
      }
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
    stats: function() {
      if (this.championList[this.champ])
        return this.championList[this.champ].stats;
      return default_stats();
    },
    info: function() {
      return this.championList[this.champ] || {};
    },
    percent_pysical_reduction: {
      get: function() {
        if (this.total_armor < 0)
          // Damage is amplified.
          return -1 + 100.0 / (100.0 - this.total_armor);
        //Normal damage reduction.
        else return 1.0 - 100.0 / (100.0 + this.total_armor);
      },
      set: function(val) {
        console.log("percent_pysical_reduction =>", val);
      }
    },
    eff_physical_hp: {
      get: function() {
        if (this.total_armor < 0)
          return (1 + this.total_armor / 100.0) * this.total_hp;
        else return (1 + this.total_armor / 100.0) * this.total_hp;
      },
      set: function(val) {
        console.log("eff_physical_hp =>", val);
      }
    },
    percent_magic_reduction: {
      get: function() {
        if (this.total_mr < 0) return -1 + 100.0 / (100.0 - this.total_mr);
        else return 1.0 - 100.0 / (100.0 + this.total_mr);
      },
      set: function(val) {
        console.log("percent_magic_reduction =>", val);
      }
    },
    eff_magic_hp: {
      get: function() {
        if (this.total_mr < 0)
          return (1 + this.total_mr / 100.0) * this.total_hp;
        else return (1 + this.total_mr / 100.0) * this.total_hp;
      },
      set: function(val) {
        console.log("eff_magic_hp =>", val);
      }
    }
  },
  watch: {
    champ(champ, _old) {
      window.localStorage.setItem("last_used_champ_" + this.userid, champ);
      if (this.isprimary === true) {
        this.$notify({
          group: "main",
          title: "Loading Champion " + champ + "…",
          type: "info"
        });
        const vue = this.$root.$app;
        fetchSingleChampFile(champ).then(model => {
          // Removes all the last champions spells.
          vue.currentSpells.length = 0;
          vue.currentChamp = null;
          let newList = [];
          for (const skillkey in model.skills) {
            let value = model.skills[skillkey];
            newList.push({
              key: skillkey,
              value: value
            });
          }
          vue.currentChamp = model.id;
          vue.currentSpells = newList;
          // sellAllItems();
          //TODO buy default items
          this.$notify({
            group: "main",
            title: "Loading Done.",
            type: "info"
          });
        });
      } else {
        this.$notify({
          group: "main",
          title: "Loading Target " + champ + "…",
          type: "info",
          text: ""
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
      handler: function(val, oldVal) {
        window.localStorage.setItem(
          "last_used_data_" + this.userid,
          JSON.stringify(val)
        );
      },
      deep: true
    }
  },
  created() {
    this.$app[this.userid] = this;
  },
  mounted: function() {
    this.champ =
      window.localStorage.getItem("last_used_champ_" + this.userid) || "";
    this.load(
      window.localStorage.getItem("last_used_data_" + this.userid) || "{}"
    );
  },
  methods: {
    load: function(json) {
      const data = JSON.parse(json);
      for (let key in data) {
        this[key] = data[key];
      }
    },
    save: function() {
      return JSON.stringify(this.$data);
    },
    clear: function(andChamp = false) {
      const lastChamp = this.champ;
      Object.assign(this.$data, this.$options.data.call(this));
      if (!andChamp) this.champ = lastChamp;
    },
    rnd: function(n, digits) {
      if (n === undefined || isNaN(n)) n = 0;
      if (digits === undefined) digits = 0;
      return +n.toFixed(digits);
    }
  }
};

function calcStat(lvl, base, growth) {
  return base + growth * (lvl - 1) * (0.7025 + 0.0175 * (lvl - 1));
}

function makeTotal(stat) {
  return {
    get: function() {
      return this["base_" + stat] + this["bonus_" + stat];
    },
    set: function(total_val) {
      this["bonus_" + stat] = total_val - this["base_" + stat];
    }
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
</style>
