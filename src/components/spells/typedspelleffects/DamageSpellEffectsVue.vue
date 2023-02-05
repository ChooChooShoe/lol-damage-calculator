<template>
  <div class="float-clear spelleffect__div">
    <EditBtn class="spelleffect__editbtn" v-model="editMode"></EditBtn>
    <span
      class="spelleffect__title"
      :title="effect.raw"
      v-html="effect.name"
    ></span>
    <span>
      <RecursiveRatioDisplay
        :val="effect"
        :computed-vals="computedRatioValues"
        display="value"
      >
      </RecursiveRatioDisplay>

      <EffectTypeField v-model="effectType"></EffectTypeField>
      <DamageTypeField
        v-model="damage_type"
        v-if="effectType === 'Damage' || effectType === 'Shield'"
      >
      </DamageTypeField>
    </span>

    <template v-if="effectType === 'Damage'">
      <span class="ad spelleffect__title">Pre-Mitigation: </span>
      <div>
        <RecursiveRatioDisplay
          :val="effect"
          :computed-vals="computedRatioValues"
          display="scaledValue"
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
        <RecursiveRatioDisplay
          :val="effect"
          :computed-vals="computedRatioValues"
          display="dmg_postmitigation"
        >
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
            <SpellField :val="computedRatioValues"></SpellField>
            <tr>
              <th colspan="4">
                <AddRatioDropDown
                  :ratios="computedRatioValues"
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
import type {
  ChampionStatUnits,
  DamageEffect,
  DamageType,
  EffectType,
  SkillModel,
} from '@/api/DataTypes';
import EffectTypeField from '@/components/effects/EffectTypeField.vue';
import EditBtn from '@/components/simple/EditBtn.vue';
import NumInput from '@/components/simple/NumInput.vue';
import { damageSources } from '@/global/state';
import type { ChampObjModel } from '@/model/ChampObj';
import { DamageSource } from '@/model/league_data';
import {
  inject,
  type Ref,
  ref,
  watchEffect,
  onMounted,
  onUnmounted,
} from 'vue';
import DamageTypeField from '../DamageTypeField.vue';
import { makeRootRatio, makeSubRatio } from '../ratios_info';
import RecursiveRatioDisplay from '../RecursiveRatioDisplay.vue';
import { damage_type_user } from '../SpellHelper';

const props = defineProps<{
  effect: DamageEffect;
  pkey: string;
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

const computedRatioValues = makeRootRatio(props.effect, rankindex!, obj!);

defineExpose({
  ratios: computedRatioValues,
});

watchEffect(() => {
  // auto updates values when effect
  // damage_type.value = effect.damage_type;
  damage_type.value =
    props.effect.damagetype || skillbase?.damagetype[0] || 'None';
  effectType.value = props.effect.effectType || 'Damage';

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
  computedRatioValues?.children.push(made);
}
onMounted(() => {
  if (damageSources) damageSources[props.pkey] = [damageSource];
});
onUnmounted(() => {
  if (damageSources) delete damageSources[props.pkey];
});

const repeat = ref(1);
const editMode = ref(false);

// const dmg_premitigation = computedRatioValues.damagePreTotal;
// const dmg_postmitigation = computedRatioValues.damagePostValue;

// damageSource.repeat = repeat;
// damageSource.postIsManual = false;
// damageSource.damage_type = damage_type;
// damageSource.dmg_premitigation = dmg_premitigation;
// damageSource.dmg_postmitigation = dmg_postmitigation;
const index = 0;
</script>
