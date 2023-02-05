<template>
  <StacksEffectsVue
    class="float-clear spelleffect__div"
    v-if="ratios.effectType === 'Stacks'"
    :effect="ratios"
  >
  </StacksEffectsVue>

  <GainEffectsVue v-else-if="ratios.effectType === 'Gain'" :effect="ratios">
  </GainEffectsVue>

  <div v-else class="float-clear spelleffect__div">
    <EditBtn class="spelleffect__editbtn" v-model="editMode"></EditBtn>
    <span
      class="spelleffect__title"
      :title="effect.raw"
      v-html="effect.name"
    ></span>
    <span>
      <RecursiveRatioDisplay :val="ratios" display="value">
      </RecursiveRatioDisplay>

      <EffectTypeField v-model="effectType"></EffectTypeField>
      <DamageTypeField
        v-model="damage_type"
        v-if="effectType === 'Damage' || effectType === 'Shield'"
      >
      </DamageTypeField>
    </span>

    <template v-if="ratios.effectType === 'Shield'">
      <span class="ad spelleffect__title">Shield Strength: </span>
      <div>
        <RecursiveRatioDisplay
          :val="ratios"
          display="dmg_premitigation"
          :index="index"
        >
        </RecursiveRatioDisplay>
        <span class="spelleffect__total">{{
          ` = ${Math.round(ratios.damagePreTotal)} `
        }}</span>
        <template v-if="repeat !== 1">
          <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
          <span class="spelleffect__total">{{
            Math.round(dmg_premitigation * repeat)
          }}</span>
          <span class="spelleffect__total">&nbsp;</span>
        </template>
      </div>
    </template>

    <template v-if="effectType === 'Damage'">
      <span class="ad spelleffect__title">Pre-Mitigation: </span>
      <div>
        <RecursiveRatioDisplay
          :val="ratios"
          display="dmg_premitigation"
          :index="index"
        >
        </RecursiveRatioDisplay>
        <span class="spelleffect__total">{{
          ` = ${Math.round(dmg_premitigation)} `
        }}</span>
        <template v-if="repeat !== 1">
          <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
          <span class="spelleffect__total">{{
            Math.round(dmg_premitigation * repeat)
          }}</span>
          <span class="spelleffect__total">&nbsp;</span>
        </template>
      </div>
      <span class="ap spelleffect__title">Post-Mitigation: </span>
      <div>
        <RecursiveRatioDisplay :val="ratios" display="dmg_postmitigation">
        </RecursiveRatioDisplay>
        <span class="spelleffect__total">{{
          ` = ${Math.round(dmg_postmitigation)} `
        }}</span>
        <template v-if="repeat !== 1">
          <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
          <span class="spelleffect__total">{{
            Math.round(dmg_postmitigation * repeat)
          }}</span>
          <span class="spelleffect__total">&nbsp;</span>
        </template>
        <span v-html="damage_type_user(damage_type)"></span>
      </div>
    </template>
    <div
      class="spelleff--content"
      :class="{ active: editMode }"
      v-if="editMode"
    >
      <hr />
      <div class="column">
        Before resistances, this effect will deal
        {{ Math.round(dmg_premitigation) }} raw damage<span class="gold">{{
          repeat === 1 ? '' : ' per hit'
        }}</span
        >. <br />This target will take {{ Math.round(dmg_postmitigation) }}
        <span v-html="damage_type_user(damage_type)"></span> after
        reductions<span class="gold">{{ repeat === 1 ? '' : ' per hit' }}</span
        >.
      </div>
      <label class="column">
        This effect will hit
        <NumInput v-model="repeat" class="collapse"></NumInput>
        time{{ repeat === 1 ? '' : 's' }}.
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
        <span v-html="damage_type_user(damage_type)"></span> before resistances.
        <br />This damage will cause the target to
        <span class="spelleffect"
          >lose {{ Math.round(dmg_postmitigation * repeat) }} health</span
        >.
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
                <AddRatioDropDown
                  :ratios="ratios"
                  @addRatio="addRatio"
                ></AddRatioDropDown>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr class="spelleff--totals">
              <th style="text-align: center" colspan="2">
                <b>Total</b>
              </th>
              <td>
                <NumInput
                  :modelValue="dmg_premitigation"
                  :readonly="true"
                ></NumInput>
              </td>
              <td>
                <NumInput
                  :modelValue="dmg_postmitigation"
                  :readonly="true"
                ></NumInput>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DamageSource } from '@/model/league_data';

import { damage_type_user } from './SpellHelper';
import SpellField from './SpellField.vue';
import DamageTypeField from './DamageTypeField.vue';
import AddRatioDropDown from './AddRatioDropDown.vue';
import EditBtn from '../simple/EditBtn.vue';
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  type Ref,
  ref,
  watchEffect,
} from 'vue';
import NumInput from '../simple/NumInput.vue';
import RecursiveRatioDisplay from './RecursiveRatioDisplay.vue';
import {
  makeRootRatio,
  makeSubRatio,
  type RootRatioComputed,
  type SubRatioComputed,
} from './ratios_info';
import type {
  ChampionStatUnits,
  DamageType,
  EffectType,
  RootRatio,
  SkillModel,
  SubRatio,
} from '../../api/DataTypes';
import type { ChampObjModel } from '../../model/ChampObj';
import { damageSources, player, target } from '../../global/state';
import DropdownSelect from '../simple/DropdownSelect.vue';
import EffectTypeField from '../effects/EffectTypeField.vue';
import StacksEffectsVue from './typedspelleffects/StacksEffectsVue.vue';
import GainEffectsVue from './typedspelleffects/GainEffectsVue.vue';

const props = defineProps<{
  effect: RootRatio;
  effectindex: number;
  pkey: string;
  custom: boolean;
}>();

const rankindex = inject<Ref<number>>('rankindex');
const obj = inject<ChampObjModel>('obj');
const damage_type = ref<DamageType>('Magic');
const effectType = ref<EffectType>('Damage');
const damageSource = new DamageSource('Magic', 8);

const skillbase = inject<SkillModel>('skillbase');

watchEffect(() => {
  // let newRatios = reactive({});
  // convets effect's ratios to our ratios type.
  // for (const [idx, ratio] of Object.entries(effect.ratio_obj)) {
  //   const key = `${ratio.user}_${ratio.stat}`;
  //   ratios[key] = makeRatio(key, ratio);
  // }
  // console.log("computed() ratios", ratios, effect.ratio_obj);
});

const ratios = makeRootRatio(props.effect, rankindex, obj);

defineExpose({
  ratios,
});

watchEffect(() => {
  // auto updates values when effect
  // damage_type.value = effect.damage_type;
  damage_type.value = ratios.damagetype || skillbase?.damagetype[0] || 'None';
  effectType.value = ratios.effectType || 'Damage';

  // if(clear) {

  // }
});

function addRatio(x: ChampionStatUnits) {
  const made = makeSubRatio(
    {
      values: 1,
      valuesIsPercent: true,
      user: 'player',
      units: x,
    },
    rankindex,
    obj
  );
  ratios.children.push(made);
}
onMounted(() => {
  if (damageSources) damageSources[props.pkey] = [damageSource];
});
onUnmounted(() => {
  if (damageSources) delete damageSources[props.pkey];
});

const repeat = ref(1);
const editMode = ref(false);

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
input[type='number'].simple-input {
  width: 6em;
}

input[type='button'].repeat {
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
  content: '\25bc';
  color: #ddd;
}

.spelleff--edit.active:before {
  content: '\25b2';
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
