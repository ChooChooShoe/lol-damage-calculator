<template>
  <div class="float-clear spelleffect__div">
    <EditBtn class="spelleffect__editbtn" v-model="editMode"></EditBtn>
    <!-- <p>
      baseValue: <span>{{ computedRatioValues.baseValue }}</span> <br />
      children: <span>{{ effect.children }}</span> <br />
      effectType: <span>{{ effect.effectType }}</span> <br />
      gainDuration: <span>{{ effect.gainDuration }}</span> <br />
      increasedStat:
      <span
        >{{ effect.increasedStat }} val = {{ obj[effect.increasedStat] }}</span
      >
      <br />
      name: <span>{{ effect.name }}</span> <br />
      pre: <span>{{ effect.pre }}</span> <br />
      post: <span>{{ effect.post }}</span> <br />
      raw: <span>{{ effect.raw }}</span> <br />
      scaledValue: <span>{{ computedRatioValues.scaledValue }}</span> <br />
      scaledValueTotal: <span>{{ computedRatioValues.scaledValueTotal }}</span>
      <br />
      units: <span>'{{ effect.units }}' = {{ obj[effect.units] }}</span>
      <br />
      unitsText: <span>{{ effect.unitsText }}</span> <br />
      values: <span>{{ effect.values }}</span> <br />
      valuesRanged: <span>{{ effect.valuesRanged }}</span> <br />
      valuesIsBasedOnLevel: <span>{{ effect.valuesIsBasedOnLevel }}</span>
      <br />
      valuesIsPercent: <span>{{ effect.valuesIsPercent }}</span> <br />
    </p> -->

    <span class="spelleffect__title" :title="effect.raw" v-html="effect.name">
    </span>
    <span>
      Gain
      <RecursiveRatioDisplay
        :val="effect"
        display="value"
        :computed-vals="computedRatioValues"
      />
    </span>

    <span class="spelleffect__title" :title="effect.raw">Totals:</span>
    <span>
      Gain
      <RecursiveRatioDisplay
        :val="effect"
        display="scaledValue"
        :computed-vals="computedRatioValues"
      />
      =
      <span class="gold"> {{ computedRatioValues.scaledValueTotal }}</span>
      <span>&nbsp;{{ effect.unitsText || effect.post || effect.units }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, type Ref } from 'vue';
import type { GainEffect } from '@/api/DataTypes';
import type { ChampObjModel } from '@/model/ChampObj';
import EditBtn from '../../simple/EditBtn.vue';
import { makeRootRatio, type RootRatioComputed } from '../ratios_info';
import RecursiveRatioDisplay from '../RecursiveRatioDisplay.vue';
import { player, target } from '@/global/state';

const props = defineProps<{
  effect: GainEffect;
}>();

const rankindex = inject<Ref<number>>('rankindex');
const obj = inject<ChampObjModel>('obj')!;
const computedRatioValues: RootRatioComputed = makeRootRatio(
  props.effect,
  rankindex!,
  obj
);

const repeat = ref(1);
const editMode = ref(false);
</script>
