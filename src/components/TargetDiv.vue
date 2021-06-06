<template>
  <div class="data_holder c50">
    <EditBtn v-model="editMode"></EditBtn>
    <h2>Target Data</h2>
    <ChampSearch v-model:champ="obj.champ"></ChampSearch>
    <ChampLevelSelect v-model:level="obj.level"></ChampLevelSelect>

    <table v-if="showExtra || showDamage || showDefence" style="margin-bottom: 0">
      <thead>
        <tr>
          <th>Stats</th>
          <th>
            <abbr :title="'Base stats for a level ' + obj.level + ' ' + obj.champ">Base</abbr>
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
          <Editable v-model="obj.base_ad" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_ad"></Editable>
          <Editable v-model="obj.total_ad"></Editable>
        </tr>
        <tr v-if="showDamage">
          <th class="ap">Ability Power (AP)</th>
          <Editable :modelValue="0" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.total_ap"></Editable>
          <Editable v-model="obj.total_ap"></Editable>
        </tr>
        <tr v-if="showDefence">
          <th class="health">Health</th>
          <Editable v-model="obj.base_hp" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_hp"></Editable>
          <Editable v-model="obj.total_hp"></Editable>
        </tr>
        <tr v-if="showDefence">
          <th class="armor">Armor</th>
          <Editable v-model="obj.base_armor" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_armor"></Editable>
          <Editable v-model="obj.total_armor"></Editable>
        </tr>
        <tr v-if="showDefence">
          <th class="mr">Magic Res. (MR)</th>
          <Editable v-model="obj.base_mr" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_mr"></Editable>
          <Editable v-model="obj.total_mr"></Editable>
        </tr>
        <tr v-if="showExtra">
          <th class="mana">Mana</th>
          <Editable v-model="obj.base_mana" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_mana"></Editable>
          <Editable v-model="obj.total_mana"></Editable>
        </tr>
        <tr v-if="showExtra">
          <th class="movespeed">Movespeed</th>
          <Editable v-model="obj.base_movespeed" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_movespeed"></Editable>
          <Editable v-model="obj.total_movespeed"></Editable>
        </tr>
        <tr v-if="showExtra">
          <th class="attack-damage">Attack Range</th>
          <Editable v-model="obj.base_attackrange" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_attackrange"></Editable>
          <Editable v-model="obj.total_attackrange"></Editable>
        </tr>
        <tr v-if="showExtra">
          <th class="hp">Health Regen.</th>
          <Editable v-model="obj.base_hpregen" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_hpregen"></Editable>
          <Editable v-model="obj.total_hpregen"></Editable>
        </tr>
        <tr v-if="showExtra">
          <th class="mana">Mana Regen.</th>
          <Editable v-model="obj.base_manaregen" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_manaregen"></Editable>
          <Editable v-model="obj.total_manaregen"></Editable>
        </tr>
        <tr v-if="showDamage && showExtra">
          <th class="crit">Crit Chance</th>
          <Editable v-model="obj.base_critchance" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_critchance"></Editable>
          <Editable v-model="obj.total_critchance"></Editable>
        </tr>
        <tr v-if="showDamage && showExtra">
          <th class="crit">Critical Strike Damage</th>
          <Editable v-model="obj.base_critdamage" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_critdamage"></Editable>
          <Editable v-model="obj.total_critdamage"></Editable>
        </tr>
        <tr v-if="showDamage">
          <th class="mana">Attackspeed</th>
          <Editable v-model="obj.base_attackspeed" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.bonus_attackspeed"></Editable>
          <Editable v-model="obj.total_attackspeed"></Editable>
        </tr>
        <tr v-if="showDamage && showExtra">
          <th class="mana">Lifesteal</th>
          <Editable :modelValue="0" :readonly="readonly_base_values"></Editable>
          <Editable v-model="obj.lifesteal"></Editable>
          <Editable v-model="obj.lifesteal"></Editable>
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
            <Editable v-model="obj.base_hp" :readonly="true"></Editable>
            <td class>Bonus</td>
            <Editable v-model="obj.bonus_hp"></Editable>
          </tr>
          <tr>
            <td class>Max / Total</td>
            <Editable v-model="obj.total_hp"></Editable>
            <td class>Shield</td>
            <Editable v-model="obj.total_shield"></Editable>
          </tr>
          <tr>
            <td class>Current</td>
            <Editable v-model="obj.current_hp"></Editable>
            <td class>Missing</td>
            <Editable v-model="obj.missing_hp"></Editable>
          </tr>
        </tbody>
      </table>

      <p>
        <span class="armor">{{ Math.ceil(obj.total_armor) }} <b>total</b> armor</span>
        reduces incoming <span class="physical-damage">physical damage</span> by
        <EditableCollapse class="ap" :autoWidth="true" format="percent" v-model="obj.percent_pysical_reduction"></EditableCollapse>%. <br />
        It takes
        <span class="physical-damage">{{ Math.ceil(obj.eff_physical_hp) }} physical damage</span>
        to kill this target from only
        <span class="physical-damage">physical</span> sources.
      </p>
      <p>
        <span class="mr">{{ Math.ceil(obj.total_mr) }} <b>total</b> magic resistance</span>
        reduces incoming
        <span class="magic-damage">magic damage</span> by
        <EditableCollapse class="ap" :autoWidth="true" format="percent" v-model="obj.percent_magic_reduction"></EditableCollapse>%.<br />
        It takes
        <span class="magic-damage">{{ Math.ceil(obj.eff_magic_hp) }} magic damage</span>
        to kill this target from only
        <span class="magic-damage">magic</span> sources.
      </p>
    </div>

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
          <Editable v-model="obj.lethality"></Editable>
          <!-- <td><Editable v-model="obj.flat_armorpen"></Editable></td> -->
        </tr>
        <tr>
          <th class="lethality">{{ rnd(obj.percent_armorpen * 100) }}% Armor Penetration</th>
          <Editable v-model="obj.percent_armorpen" format="percent">%</Editable>
        </tr>
        <tr>
          <th class="magic">Flat Magic Pen.</th>
          <Editable v-model="obj.flat_magicpen"></Editable>
        </tr>
        <tr>
          <th class="magic">{{ rnd(obj.percent_magicpen * 100) }}% Magic Pen.</th>
          <Editable v-model="obj.percent_magicpen" format="percent">%</Editable>
        </tr>
        <tr>
          <td colspan="2">
            <div>
              <span>Has a Void Staff?&nbsp;</span>
              <label>
                <input @change="percent_magicpen = $event.target.checked ? 0.4 : 0.0" type="checkbox" />
                <span>{{ rnd(obj.percent_magicpen * 100) }}% Magic Pen.</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <hr />
    <div class="buttons">
      <input class="button error" type="button" value="Clear" @click="clear()" />
      <input class="button info" type="button" value="Validate" />

      <div class="tabs is-left is-toggle">
        <ul>
          <li :class="{ 'is-active': showDamageLevel === 0 }">
            <a @click="showDamageLevel = 0">Show Less</a>
          </li>
          <li :class="{ 'is-active': showDamageLevel === 1 }">
            <a @click="showDamageLevel = 1">Show More</a>
          </li>
          <li :class="{ 'is-active': showDamageLevel === 2 }">
            <a @click="showDamageLevel = 2">Show All</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import DataInput from "./DataInput.vue";
// import InlineInput from "./InlineInput.vue";
// import SimpleTooltip from "./SimpleTooltip.vue";
import Editable from "./simple/Editable.vue";
import EditableCollapse from "./simple/EditableCollapse.vue";
import ChampSearch from "./simple/ChampSearch.vue";
import ChampLevelSelect from "./simple/ChampLevelSelect.vue";
import EditBtn from "./simple/EditBtn.vue";
import { fetchSingleChampFile, default_stats } from "../javascript/league_data";
import { reactive, inject, ref, computed } from "vue";

export default {
  name: "TargetDev",
  components: {
    Editable,
    EditableCollapse,
    ChampSearch,
    ChampLevelSelect,
    EditBtn,
  },
  setup() {
    const obj = inject("ChampObj");

    return {
      obj,
      showDamage: ref(true),
      showDefence: ref(true),
      showExtra: ref(true),
      showBreakdown: ref(true),
      readonly_base_values: true,
      editMode: ref(true),
      showDamageLevel: ref(0),
    };
  },
  watch: {
    // champ(champ, old) {
    //   window.localStorage.setItem("last_used_champ_target", champ);
    //   console.log("last_used_champ_target =>", champ);
    //   // this.$notify({
    //   //   group: "main",
    //   //   title: "Loading Target " + champ + "…",
    //   //   type: "info",
    //   //   text: "",
    //   // });
    // },
    // $data: {
    //   handler: function (val, oldVal) {
    //     window.localStorage.setItem(
    //       "last_used_data_" + "target",
    //       JSON.stringify(val)
    //     );
    //   },
    //   deep: true,
    // },
  },
  mounted: function () {
    this.$root.data["target"] = this.obj;
    this.champ = window.localStorage.getItem("last_used_champ_" + "target") || "";
    this.load(window.localStorage.getItem("last_used_data_" + "target") || "{}");
  },
  methods: {
    load: function (json) {
      return;
      const data = JSON.parse(json);
      for (let key in data) {
        this[key] = data[key];
      }
    },
    save: function () {
      return JSON.stringify(this.$data);
    },
    clear: function () {
      this.obj.clearStats = true;
    },
    rnd: function (n, digits) {
      if (n === undefined || isNaN(n)) n = 0;
      if (digits === undefined) digits = 0;
      return +n.toFixed(digits);
    },
  },
};
</script>

<style>
table {
  background-color: transparent !important;
}
</style>
