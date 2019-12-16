
<template>
  <div class="column">
    <h2>{{ username }} Data</h2>
    <div class="flex">
      <label class="column">
        Load Champion Data For
        <select class="input" v-model="champ">
          <template v-for="item in championList">
            <option :key="item.id" :value="item.id">{{ item.name }}</option>
          </template>
        </select>
      </label>
      <label class="column">
        ➤ Champion Level
        <input type="number" value="18" v-model.number="level" class="simple-input">
        <div class="button-group">
          <input :active="level === 1" type="button" class="button" value="1" @click="level = 1">
          <input :active="level === 6" type="button" class="button" value="6" @click="level = 6">
          <input
            :active="level === 11"
            type="button"
            class="button"
            value="11"
            @click="level = 11"
          >
          <input
            :active="level === 16"
            type="button"
            class="button"
            value="16"
            @click="level = 16"
          >
          <input
            :active="level === 18"
            type="button"
            class="button"
            value="18"
            @click="level = 18"
          >
        </div>
      </label>

      <div class="column">
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
      <label class="column column-50">
        Show Damage Stats
        <label class="switch-wrap">
          <input type="checkbox" v-model="showDamage">
          <div class="switch"></div>
        </label>
      </label>
      <label class="column column-50 flex">
        Show Defensive Stats
        <label class="switch-wrap">
          <input type="checkbox" v-model="showDefence">
          <div class="switch"></div>
        </label>
      </label>

      <div class="flex" v-if="showDamage">
        <label for="ap" class="ap">Total Ability Power (AP) = {{ rnd(total_ap, 2) }}</label>
        <data-input dname="ap" v-model="total_ap"></data-input>

        <label for="total_ad" class="ad">Total Attack Damage (AD) = {{ rnd(total_ad, 2) }}</label>
        <data-input dname="total_ad" v-model="total_ad"></data-input>

        <label for="base_ad" class="short ad">➤ Base AD = {{ rnd(base_ad, 2) }}</label>
        <data-input dname="base_ad" v-model="base_ad" :readonly="true"></data-input>
        <label for="bonus_ad" class="short ad">➤ Bonus AD = {{rnd(bonus_ad, 2) }}</label>
        <data-input dname="bonus_ad" v-model="bonus_ad"></data-input>

        <label for="attack_speed" class="attack-speed">
          Attack Speed = {{ base_attackspeed }} +
          {{ rnd(base_attackspeed * 100) }}%
        </label>
        <data-input dname="attack_speed" v-model="base_attackspeed" :ispercent="true"></data-input>

        <label
          for="crit_change"
          class="critical-chance"
        >{{ rnd(base_critchance * 100) }}% Crit. Chance</label>
        <data-input dname="crit_change" v-model="base_critchance" :ispercent="true"></data-input>

        <label for="crit_damage" class="critical-damage">{{ rnd(critdamage * 100) }}% Crit. Damage</label>
        <data-input dname="crit_damage" v-model="critdamage" :ispercent="true"></data-input>

        <label for="life_steal" class>{{ rnd(lifesteal * 100) }}% Life Steal</label>
        <data-input dname="life_steal" v-model="lifesteal" :ispercent="true"></data-input>

        <label class="column column-50 ap">
          Has Void Staff?
          <span>&nbsp;= {{ rnd(percent_magicpen * 100) }}% Magic Pen.</span>
        </label>
        <label class="column column-50">
          <label class="switch-wrap">
            <input type="checkbox" @change="percent_magicpen = $event.target.checked ? 0.4 : 0.0">
            <div class="switch"></div>
          </label>
        </label>

        <label for="flat_magic_pen">Flat Magic Penetration = {{ rnd(flat_magicpen) }}</label>
        <data-input dname="flat_magic_pen" v-model="flat_magicpen"></data-input>

        <label for="spell_vamp" class>{{ rnd(spellvamp * 100) }}% Spell Vamp</label>
        <data-input dname="spell_vamp" v-model="spellvamp" :ispercent="true"></data-input>

        <label for="lethality" class="lethality">Lethality = {{ rnd(lethality) }}</label>
        <data-input dname="lethality" v-model="lethality"></data-input>

        <label for="armor_pen" class="short">➤ Effective Flat Armor Pen. = {{ rnd(flat_armorpen) }}</label>
        <data-input dname="armor_pen" v-model="flat_armorpen"></data-input>

        <label for="percent_armor_pen">{{ rnd(percent_armorpen * 100) }}% Armor Penetration</label>
        <data-input dname="percent_armor_pen" v-model="percent_armorpen" :ispercent="true"></data-input>
        <label
          for="percent_armor_pen"
        >{{ rnd(percent_bonus_armorpen * 100) }}% Bonus Armor Penetration</label>
        <data-input dname="percent_armor_pen" v-model="percent_bonus_armorpen" :ispercent="true"></data-input>
      </div>

      <div class="flex" v-if="showDefence">
        <hr class="column">
        <label for="target_hp" class="health">Health (HP)</label>
        <data-input dname="target_hp" v-model="total_hp"></data-input>
        <ul>
          <li>{{ rnd(base_hp) }} Base HP + {{ rnd(bonus_hp) }} Bonus HP =
          {{ rnd(total_hp) }} Total HP</li>
        </ul>
        <hr class="column">
        <label for="target_armor" class="armor">Armor</label>
        <data-input dname="target_armor" v-model="total_armor"></data-input>
        <ul>
          <li>{{ rnd(base_armor) }} Base Armor + {{ rnd(bonus_armor) }} Bonus Armor = {{ rnd(total_armor) }} Total Armor</li>
          <li>This will reduce
            <span class="physical-damage">Physical Damage</span> taken by
            <span class="ap">{{ rnd(percent_pysical_reduction * 10000 ) / 100 }}%</span>.
          </li>
          <li>This is equivalent to having
            <span class="health">{{ Math.ceil(eff_physical_hp) }} HP</span> vs.
            <span class="physical-damage">Physical Damage</span>.
          </li>
        </ul>
        <hr class="column">
        <label for="target_mr" class="mr">Magic Resistance (MR)</label>
        <data-input dname="target_mr" v-model="total_mr"></data-input>
        <ul>
        <li>{{ rnd(base_mr) }} Base MR + {{ rnd(bonus_mr) }} Bonus MR = {{ rnd(total_mr) }} Total MR</li>
        <li>This will reduce
          <span class="magic-damage">Magic Damage</span> taken by
          <span class="ap">{{ rnd(percent_magic_reduction * 10000 ) / 100 }}%</span>.
        </li>
        <li>This is equivalent to having
          <span class="health">{{ Math.ceil(eff_magic_hp) }} HP</span> vs.
          <span class="magic-damage">Magic Damage</span>.
        </li>
        </ul>
        <hr class="column">
        <div v-if="info.resource == 'Mana'">
        <label for="target_mana" class="mr">Mana</label>
        <data-input dname="target_mana" v-model="total_mana"></data-input>
        <ul>
        <li>{{ rnd(base_mana) }} Base Mana + {{ rnd(bonus_mana) }} Bonus Mana = {{ rnd(total_mana) }} Total Mana</li>
        <li>This will reduce
          <span class="magic-damage">Magic Damage</span> taken by
          <span class="ap">{{ rnd(percent_magic_reduction * 10000 ) / 100 }}%</span>.
        </li>
        <li>This is equivalent to having
          <span class="health">{{ Math.ceil(eff_magic_hp) }} HP</span> vs.
          <span class="magic-damage">Magic Damage</span>.
        </li>
        </ul>
        </div>
        <hr class="column">
        <label for="target_hp5" class="extra">Health regeneration (HP per 5)</label>
        <data-input dname="target_hp5" v-model="base_hpregen"></data-input>
        <span>
          &#8226; This is
          <span class="health">{{ (base_hpregen / 5).toFixed(1) }} HP</span> after 1 second and
          <span class="health">{{ rnd(base_hpregen * 12) }} HP</span> after 60 seconds.
        </span>
        <hr class="column">
        <label v-if="info.resource !== 'None'" for="target_hp5" class="extra">
          {{info.resource}} regeneration
          ({{info.resource}} per 5)
        </label>
        <data-input v-if="info.resource !== 'None'" dname="target_hp5" v-model="base_manaregen"></data-input>
        <span v-if="info.resource !== 'None'">
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
        <span v-if="info.resource === 'None'">* {{ info.name }} does not use any secondary resource.</span>
      </div>
      <div class="column">
        <input name="reset" type="reset" value="Reset All" @click="clear(true)">
        <input name="reset" type="reset" value="Clear" @click="clear()">
      </div>
      <ItemInventory v-if="$app.config.shopEnabled" ref="inventory" :userid="userid"></ItemInventory>
    </div>
  </div>
</template>

<script>
import DataInput from "./DataInput.vue";
import SimpleTooltip from "./SimpleTooltip.vue";
import ItemInventory from "./ItemInventory.vue";
import { fetchSingleChampFile, default_stats } from "../javascript/league_data";

export default {
  name: "ChampionDiv",
  components: {
    DataInput,
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
      missing_hp: 0
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
        fetchSingleChampFile(this.$root.$app, champ);
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
