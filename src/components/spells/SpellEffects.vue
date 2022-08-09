<template>
  <div class="float-clear spelleffect__div">
    <EditBtn class="spelleffect__editbtn" v-model="editMode"></EditBtn>
    <span class="spelleffect__title" :title="effect.raw" v-html="effect.name"></span>
    <span>
      <RecursiveRatioDisplay :val="ratios" display="value"> </RecursiveRatioDisplay>
      <DamageTypeField v-model="damage_type"></DamageTypeField>
    </span>

    <span class="ad spelleffect__title">Pre-Mitigation: </span>
    <div>
      <RecursiveRatioDisplay :val="ratios" display="dmg_premitigation" :index="index"> </RecursiveRatioDisplay>
      <span class="spelleffect__total">{{ ` = ${Math.round(dmg_premitigation)} ` }}</span>
      <template v-if="repeat !== 1">
        <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
        <span class="spelleffect__total">{{ Math.round(dmg_premitigation * repeat) }}</span>
        <span class="spelleffect__total">&nbsp;</span>
      </template>
    </div>
    <span class="ap spelleffect__title">Post-Mitigation: </span>
    <div>
      <RecursiveRatioDisplay :val="ratios" display="dmg_postmitigation"> </RecursiveRatioDisplay>
      <span class="spelleffect__total">{{ ` = ${Math.round(dmg_postmitigation)} ` }}</span>
      <template v-if="repeat !== 1">
        <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
        <span class="spelleffect__total">{{ Math.round(dmg_postmitigation * repeat) }}</span>
        <span class="spelleffect__total">&nbsp;</span>
      </template>
      <span v-html="damage_type_user(damage_type)"></span>
    </div>
    <div class="spelleff--content" :class="{ active: editMode }">
      <hr />
      <div class="column">
        Before resistances, this effect will deal
        {{ Math.round(dmg_premitigation) }} raw damage<span class="gold">{{ repeat === 1 ? "" : " per hit" }}</span>. <br />This target will take {{ Math.round(dmg_postmitigation) }} <span v-html="damage_type_user(damage_type)"></span> after reductions<span class="gold">{{
            repeat === 1 ? "" : " per hit"
        }}</span>.
      </div>
      <label class="column">
        This effect will hit
        <NumInput v-model="repeat" class="collapse"></NumInput>
        time{{ repeat === 1 ? "" : "s" }}.
        <input v-for="(item, index) in [1, 2, 3, 5, 10]" :key="index" type="button" class="repeat" :value="item + 'x'" @click="repeat = item" :class="{ success: repeat == item }" />
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
            <SpellField :val="ratios"></SpellField>
            <tr>
              <th colspan="4">
                <AddRatioDropDown :ratios="ratios" @addRatio="addRatio"></AddRatioDropDown>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr class="spelleff--totals">
              <th style="text-align: center" colspan="2">
                <b>Total</b>
              </th>
              <td>
                <NumInput :modelValue="dmg_premitigation" :readonly="true"></NumInput>
              </td>
              <td>
                <NumInput :modelValue="dmg_postmitigation" :readonly="true"></NumInput>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { calc_dmg_onhit, spell_ratios, CORE_STATS, DamageSource, DamageType } from "../../javascript/league_data";

import { damage_type_user } from "./SpellHelper";
import SpellField from "./SpellField.vue";
import DamageTypeField from "./DamageTypeField.vue";
import AddRatioDropDown from "./AddRatioDropDown.vue";
import DisplayRatio from "./DisplayRatio.vue";
import DisplayRatioDamage from "./DisplayRatioDamage.vue";
import EditBtn from "../simple/EditBtn.vue";
import { computed, inject, onMounted, onUnmounted, provide, reactive, Ref, ref, toRefs, watchEffect } from "vue";
import NumInput from "../simple/NumInput.vue";
import RecursiveRatioDisplay from "./RecursiveRatioDisplay.vue";
import { RatioObjComputed, stat_to_display } from "./ratios_info";
import { RootRatio, SubRatio } from "../../api/DataTypes";
import { RefUnwrapBailTypes } from "@vue/reactivity";
import { ChampObjModel } from "../../model/ChampObj";

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

const { effect, effectindex, pkey, custom } = defineProps<{
  effect: RootRatio,
  effectindex: number,
  pkey: string,
  custom: boolean,
}>()

const rootData = { player: inject<ChampObjModel>("player")!, target: inject<ChampObjModel>("target")! };


const rankindex = inject<Ref<number>>("rankindex")!;
const damage_type = ref("magic");
const damageSource = new DamageSource('magic', 8);

watchEffect(() => {
  // let newRatios = reactive({});
  // convets effect's ratios to our ratios type.
  // for (const [idx, ratio] of Object.entries(effect.ratio_obj)) {
  //   const key = `${ratio.user}_${ratio.stat}`;
  //   ratios[key] = makeRatio(key, ratio);
  // }
  // console.log("computed() ratios", ratios, effect.ratio_obj);
});
watchEffect(() => {
  // auto updates values when effect
  // damage_type.value = effect.damage_type;
  damage_type.value = "magic";

  // if(clear) {

  // }
});



function makeRatio(val: SubRatio): SubRatio & RatioObjComputed {
  const damageValue = computed(() => Array.isArray(val.values) ? val.values[rankindex.value] : val.values);
  const damagePreValue = computed((): number => {
    let value = damageValue.value;
    if (val.apply === '%')
      value = value / 100;

    if (val.units === '' || val.units === 'percent' || val.user === 'none')
      return value;
    const user = val.user === 'target' ? rootData.target : rootData.player;
    const statValue = Number(user[val.stat as keyof typeof user]);
    if (isNaN(statValue)) {
      console.warn('StatMissing', val.units, 'for ratio', val, 'missing for obj', user);
      return 0;
    }
    return statValue * value;
  });
  const damagePostValue = computed(() => calc_dmg_onhit(rootData.player, rootData.target, damagePreValue.value, damage_type.value))
  const sub_calcs: Array<SubRatio & RatioObjComputed> = [];
  if (val.sub_ratios) {
    for (let r of val.sub_ratios) {
      sub_calcs.push(makeRatio(r));
    }
  }

  const damagePreTotal = computed((): number => {
    let value = damagePreValue.value;
    for (const r of sub_calcs) {
      value = value + (r.damagePreValue?.value || 0);
    }
    return value;
  });
  const damagePostTotal = computed(() => {
    let value = damagePostValue.value;
    for (const r of sub_calcs) {
      value = value + (r.damagePostValue?.value || 0);
    }
    return value;
  })
  return Object.assign(val, {
    damageValue,
    damagePreValue,
    damagePostValue,
    damagePreTotal,
    damagePostTotal,
    sub_calcs
  });
}
const ratios = makeRatio(effect);
defineExpose({
  ratios,
});

function addRatio(x: string) {
  const made = makeRatio({
    values: 1,
    user: 'player',
    stat: x,
    units: x,
    apply: 'percent',
    fulltext: 'CUSTOM'
  });
  ratios.sub_ratios?.push(made);
  ratios.sub_calcs.push(made);
}
interface DamageSources { [key: string]: DamageSource[] }
const damageSources = inject<Ref<DamageSources>>("damageSources")?.value;

onMounted(() => {
  if (damageSources) damageSources[pkey] = [damageSource];
});
onUnmounted(() => {
  if (damageSources) delete damageSources[pkey];
});

const repeat = ref(1);
const editMode = ref(false);
const doesDoDamage = computed(() => ["magic", "physical", "true"].includes(damage_type.value));

const dmg_premitigation = ratios.damagePreTotal;
const dmg_postmitigation = ratios.damagePostValue;


// damageSource.repeat = repeat;
// damageSource.postIsManual = false;
// damageSource.damage_type = damage_type;
// damageSource.dmg_premitigation = dmg_premitigation;
// damageSource.dmg_postmitigation = dmg_postmitigation;
const index = 0;
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
  display: grid;
  justify-content: left;
  align-items: baseline;
  grid-template-columns: fit-content(0) 1fr auto;
  column-gap: 0.5rem;
}

.spelleffect__title {
  color: #8e7dad;
  white-space: nowrap;
  justify-self: end;
}

.spelleffect__editbtn {
  grid-row: 1 / 4;
  grid-column: 3;
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
  color: unset;
  margin: 0;
  padding: 0;
  transition: max-height 0.2s ease-out;
  grid-column: span 3;
}
</style>