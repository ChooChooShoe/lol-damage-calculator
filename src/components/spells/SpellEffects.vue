<template>
  <div class="float-clear spelleffect__div">
    <div>
      <EditBtn v-model="editMode"></EditBtn>

      <span class="spelleffect__title" v-html="effect.title"></span>
      <span class="spelleffect__title">: </span>
      <span>
        <DisplayRatio v-for="(obj, key, index) in ratios" :key="key" :ratioKey="key" :list="obj.value" :index="index"> </DisplayRatio>

        <DamageTypeField v-model="damage_type"></DamageTypeField>
      </span>
      <br />
      <span class="ad">Pre-Mitigation: </span>
      <DisplayRatioDamage v-for="(obj, key, index) in ratios" :key="key" :ratioKey="key" :damageValue="obj.damagePreValue" :index="index"> </DisplayRatioDamage>
      <span class="spelleffect__total"> = </span>
      <span class="spelleffect__total">{{ Math.round(dmg_premitigation) }}</span>
      <span class="spelleffect__total">&nbsp;</span>
      <template v-if="repeat !== 1">
        <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
        <span class="spelleffect__total">{{ Math.round(dmg_premitigation * repeat) }}</span>
        <span class="spelleffect__total">&nbsp;</span>
      </template>
      <!-- <span v-html="damage_type_user(damage_type)"></span> -->
      <br />
      <span class="ap">Post-Mitigation: </span>
      <DisplayRatioDamage v-for="(obj, key, index) in ratios" :key="key" :ratioKey="key" :damageValue="Math.round(obj.damagePostValue)" :index="index"> </DisplayRatioDamage>
      <span class="spelleffect__total"> = </span>
      <span class="spelleffect__total">{{ Math.round(dmg_postmitigation) }}</span>
      <span class="spelleffect__total">&nbsp;</span>
      <template v-if="repeat !== 1">
        <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
        <span class="spelleffect__total">{{ Math.round(dmg_postmitigation * repeat) }}</span>
        <span class="spelleffect__total">&nbsp;</span>
      </template>
      <span v-html="damage_type_user(damage_type)"></span>
      <br />
    </div>
    <div class="spelleff--content" :class="{ active: editMode }">
      <hr />
      <div class="column">
        Before resistances, this effect will deal
        {{ Math.round(dmg_premitigation) }} raw damage<span class="gold">{{ repeat === 1 ? "" : " per hit" }}</span
        >. <br />This target will take {{ Math.round(dmg_postmitigation) }} <span v-html="damage_type_user(damage_type)"></span> after reductions<span class="gold">{{
          repeat === 1 ? "" : " per hit"
        }}</span
        >.
      </div>
      <label class="column">
        This effect will hit
        <NumInput v-model="repeat" class="collapse"></NumInput>
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
        <span v-html="damage_type_user(damage_type)"></span> before resistances. <br />This damage will cause the target to
        <span class="spelleffect">lose {{ Math.round(dmg_postmitigation * repeat) }} health</span>.
      </div>

      <div class="field column spelleff__innercontent">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Base Damage / Ratio</th>
              <th>Pre-Damage</th>
              <th>Post-Damage</th>
            </tr>
          </thead>
          <tbody>
            <SpellField v-for="(item, key) in ratios" :key="key" :item="item"></SpellField>
            <tr>
              <th colspan="4">
                <AddRatioDropDown
                  :ratios="ratios"
                  @addRatio="
                    (x) => {
                      ratios[x] = makeRatio(x, 1);
                    }
                  "
                ></AddRatioDropDown>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr class="spelleff--totals">
              <th style="text-align: center" colspan="2">
                <b>Total</b>
              </th>
              <td><NumInput :modelValue="dmg_premitigation" :readonly="true"></NumInput></td>
              <td><NumInput :modelValue="dmg_postmitigation" :readonly="true"></NumInput></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { calc_dmg_onhit, spell_ratios, CORE_STATS, DamageSource, DamageType } from "../../javascript/league_data";

import { damage_type_user } from "./SpellHelper";
import SpellField from "./SpellField.vue";
import DamageTypeField from "./DamageTypeField.vue";
import AddRatioDropDown from "./AddRatioDropDown.vue";
import DisplayRatio from "./DisplayRatio.vue";
import DisplayRatioDamage from "./DisplayRatioDamage.vue";
import EditBtn from "../simple/EditBtn.vue";
import { computed, inject, onMounted, onUnmounted, provide, reactive, ref, toRefs, watchEffect } from "vue";
import NumInput from "../simple/NumInput.vue";

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
const { effect, effectindex, pkey, custom } = defineProps({
  effect: Object,
  effectindex: Number,
  pkey: String,
  custom: Boolean,
});

const rootspell = inject("rootspell");
const rootData = inject("RootData");
const damage_type = ref("magic");

const damageSource = new DamageSource();

const makeRatio = (name, value) => {
  const i = name.indexOf("_");
  const user = name.slice(0, i);
  const stat = name.slice(i + 1);

  let ispercent = user !== "base";

  const valueNumber = computed(() => {
    return Array.isArray(value) ? value[rootspell.value.rankindex] : value;
  });
  console.log("makeRatio()", name, value, "split", user, stat, valueNumber.value);

  const damagePreValue = computed(() => {
    // No user means base_damage or base_progression
    if (user !== "player" && user !== "target") return valueNumber.value;

    let statValue = rootData[user].value[stat];
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
    damagePostValue: computed(() => calc_dmg_onhit(rootData.player.value, rootData.target.value, damagePreValue.value, damage_type.value)),
  });
};
const ratios = reactive({});
defineExpose({
  ratios,
});

watchEffect(() => {
  // let newRatios = reactive({});
  // convets effect's ratios to our ratios type.
  for (const ratio in effect.ratios) {
    ratios[ratio] = makeRatio(ratio, effect.ratios[ratio]);
  }
  console.log("computed() ratios", ratios, effect.ratios);
  // return newRatios;
});
watchEffect(() => {
  // auto updates values when effect
  damage_type.value = effect.damage_type;

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

const damageSources = inject("damageSources");
onMounted(() => {
  console.log("mount", pkey);
  damageSources.value[pkey] = [damageSource];
});
onUnmounted(() => {
  console.log("UNMOUNT SpellEffect", pkey);
  delete damageSources.value[pkey];
});

const repeat = ref(1);
const editMode = ref(false);
const doesDoDamage = computed(() => ["magic", "physical", "true"].includes(damage_type.value));
// dmg_premitigation;
const dmg_postmitigation = computed(() => {
  console.log("dmg_postmitigation");
  return calc_dmg_onhit(rootData.player.value, rootData.target.value, dmg_premitigation.value, damage_type.value);
});
damageSource.repeat = repeat;
damageSource.postIsManual = false;
damageSource.damage_type = damage_type;
damageSource.dmg_premitigation = dmg_premitigation;
damageSource.dmg_postmitigation = dmg_postmitigation;
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
.spelleffect__div {
  border-bottom: #282f2f solid 1px;
  margin-bottom: 0.4em;
  /* padding:  0.2em; */
}

.spelleffect__title {
  color: #8e7dad;
}
.spelleffect__total {
  font-weight: bold;
  font-size: 110%;
}
.spelleffect__repeat {
  font-weight: bold;
  font-style: italic;
  font-size: 110%;
  color: yellow;
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