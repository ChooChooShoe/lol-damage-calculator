<template>
  <div class="container float-clear spell-effect">
    <div>
      <EditBtn v-model="editMode"></EditBtn>

      <h4 class="spelleffect">{{ effect.title }}</h4>
      <div>
        <DisplayRatio v-for="(obj, key, index) in ratios" :key="key" :ratioKey="key" :list="obj.value" :index="index"> </DisplayRatio>

        <DamageTypeField v-model="damage_type"></DamageTypeField>
      </div>
    </div>
    <div class="spelleff--content" :class="{ active: editMode }">
      <div class="field column" v-if="doesDoDamage">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Ratio</th>
              <th>Pre-Damage</th>
              <th>Post-Damage</th>
            </tr>
          </thead>
          <tbody>
            <SpellField v-for="(item, key) in ratios" :key="key" :item="item"></SpellField>
            <tr>
              <th colspan="4">
                <AddRatioDropDown></AddRatioDropDown>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr class="spelleff--totals">
              <th style="text-align: center" colspan="2">
                <b>Total</b>
              </th>
              <Editable :modelValue="dmg_premitigation" :readonly="true"></Editable>
              <Editable :modelValue="dmg_postmitigation" :readonly="true"></Editable>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div v-if="doesDoDamage">
      <hr />
      <div class="column">
        Before resistances, this effect will deal
        {{ Math.round(dmg_premitigation) }} raw damage<span class="gold">{{ repeat === 1 ? "" : " per hit" }}</span
        >. <br />This target will take {{ Math.round(dmg_postmitigation) }} <span v-html="damage_type_user"></span> after reductions<span class="gold">{{
          repeat === 1 ? "" : " per hit"
        }}</span
        >.
      </div>
      <label class="column">
        This effect will hit
        <input type="number" v-model.number="repeat" class="simple-input" />
        time{{ repeat === 1 ? "" : "s" }}.
        <input
          v-for="(item, index) in [1, 2, 3, 5, 10]"
          :key="index"
          type="button"
          class="repeat"
          :value="item + 'x'"
          @click="repeat = item"
          :class="{ success: repeat == item }"
        />
      </label>
      <div v-if="repeat != 1" class="column">
        In total, this effect deals
        {{ Math.round(dmg_premitigation * repeat) }}
        <span v-html="damage_type_user"></span> before resistances. <br />This damage will cause the target to
        <span class="spelleffect">lose {{ Math.round(dmg_postmitigation * repeat) }} health</span>.
      </div>
    </div>
  </div>
</template>

<script>
import { calc_dmg_onhit, spell_ratios, CORE_STATS, DamageSource, DamageType } from "../../javascript/league_data";

import SpellField from "./SpellField.vue";
import DamageTypeField from "./DamageTypeField.vue";
import AddRatioDropDown from "./AddRatioDropDown.vue";
import Editable from "../simple/Editable.vue";
import DisplayRatio from "./DisplayRatio.vue";
import EditBtn from "../simple/EditBtn.vue";
import { computed, inject, provide, reactive, ref, toRefs, watchEffect } from "vue";

const CORE_RATIOS = [
  "player_total_ap",
  "player_total_ad",
  "player_bonus_ad",
  "player_total_hp",
  "player_bonus_hp",
  "player_missing_hp",
  "target_total_hp",
  "target_bonus_hp",
  "target_current_hp",
  "target_missing_hp",
  "player_bonus_armor",
  "player_total_armor",
  "player_bonus_mr",
  "player_total_mr",
  "target_total_ap",
];

export default {
  props: {
    effect: Object,
    effectindex: Number,
  },
  name: "SpellEffects",
  components: {
    SpellField,
    DamageTypeField,
    AddRatioDropDown,
    Editable,
    DisplayRatio,
    EditBtn,
  },
  setup(props) {
    const { effect, effectindex } = toRefs(props);
    const rootspell = inject("rootspell");
    const rootData = inject("RootData");

    const damage_type = ref("magic");

    const makeRatio = (name, value) => {
      console.log("makeRatio()", name, value);
      const i = name.indexOf("_");
      const user = name.slice(0, i);
      const stat = name.slice(i + 1);

      let ispercent = user !== "base";

      const valueNumber = computed(() => {
        return Array.isArray(value) ? value[rootspell.value.rankindex] : value;
      });
      const damagePreValue = computed(() => {
        // No user means base_damage or base_progression
        if (user !== "player" && user !== "target") return valueNumber.value;

        let statValue = rootData[user][stat];
        if (isNaN(statValue)) {
          console.warn(`Stat ${stat} for ratio ${name} missing for ${user}`);
          statValue = 0;
        }
        return statValue * valueNumber.value;
      });
      return reactive({
        key: name,
        value: value,
        ispercent: ispercent,
        valueNumber,
        damagePreValue,
        damagePostValue: computed(() => calc_dmg_onhit(rootData.player, rootData.target, damagePreValue.value, damage_type.value)),
      });
    };
    const ratios = reactive({});

    watchEffect(() => {
      // let newRatios = reactive({});
      // convets effect's ratios to our ratios type.
      for (const ratio in effect.value.ratios) {
        ratios[ratio] = makeRatio(ratio, effect.value.ratios[ratio]);
      }
      console.log("computed() ratios", ratios);
      // return newRatios;
    });
    watchEffect(() => {
      // auto updates values when effect
      damage_type.value = effect.value.damage_type;

      // if(clear) {

      // }
    });

    const dmg_premitigation = computed(() => {
      let total = 0;
      for (const r in ratios) {
        total += ratios[r].damagePreValue || 0;
      }
      return total;
    });

    return {
      repeat: ref(1),
      editMode: ref(false),
      ratios,
      doesDoDamage: computed(() => ["magic", "physical", "true"].includes(damage_type.value)),
      dmg_premitigation,
      dmg_postmitigation: computed(() => {
        console.log("dmg_postmitigation")
        return calc_dmg_onhit(rootData.player, rootData.target, dmg_premitigation.value, damage_type.value);
      }),
      damage_type,
      spell_ratios: spell_ratios,
    };
  },
  computed: {
    damage_type_user: function () {
      switch (this.damage_type) {
        case "physical":
          return '<span class="physical-damage">physical damage</span>';
        case "magic":
          return '<span class="magic-damage">magic damage</span>';
        case "true":
          return '<span class="true-damage">true damage</span>';
        default:
          return '<span class="true-damage">no damage</span>';
      }
    },
    dyanmic: function () {
      return true;
    },
    damageSources: function () {
      return [this];
    },
  },
  mounted: function () {
    this.$root.data.damagingEffects.push(this);
  },
  unmounted: function () {
    const index = this.$root.data.damagingEffects.indexOf(this);
    if (index > -1) {
      this.$root.data.damagingEffects.splice(index, 1);
    }
  },
  methods: {
    /// Used by child
    addRatio: function (ratio) {
      Vue.set(this.ratios, ratio, {
        key: ratio,
        value: 0,
        ispercent: true,
      });
    },
  },
};
</script>

<style>
input[type="number"].simple-input {
  width: 6em;
}
input[type="button"].repeat {
  border-width: 1px;
  margin-bottom: 0;
  height: 2em;
  font-size: 0.9em;
  padding: 0 0.5em;
  margin: 0 0.2em;
}
.spelleff--totals {
  border-top: aqua 1px solid;
}
.spell-effect {
  border: #1e8ad6 solid 1px;
  margin-bottom: 5px;
  padding: 5px;
}

.spelleff--edit:before {
  content: "\25bc";
  color: #ddd;
}

.spelleff--edit.active:before {
  content: "\25b2";
  color: #ddd;
}

.spelleff--content.active {
  max-height: 1000px !important;
  overflow: hidden !important;
  transition: max-height 0.2s ease-in;
}

.spelleff--content {
  max-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
  transition: max-height 0.2s ease-out;
}
</style>