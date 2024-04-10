<template>
  <div class="float-clear spelleffect__div">
    <EditBtn class="spelleffect__editbtn" v-model="editMode"></EditBtn>

    <span class="spelleffect__title" :title="effect.raw" v-html="effect.name">
    </span>
    <span>
      {{ effect.crowdControl }}
      for {{ effect.crowdControlDuration }} seconds:
      <RecursiveRatioDisplay
        :val="effect"
        display="value"
        :computed-vals="computedRatioValues"
      />
    </span>

    <span class="spelleffect__title" :title="effect.raw">Totals:</span>
    <span>
      {{ effect.crowdControl }} for
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
import type { CrowdControlEffect, GainEffect } from '@/api/DataTypes';
import type { ChampObjModel } from '@/model/ChampObj';
import EditBtn from '../../simple/EditBtn.vue';
import { makeRootRatio, type RootRatioComputed } from '../ratios_info';
import RecursiveRatioDisplay from '../RecursiveRatioDisplay.vue';
import { player, target } from '@/global/state';

const props = defineProps<{
  effect: CrowdControlEffect;
}>();

const rankindex = inject<Ref<number>>('rankindex');
const obj = inject<ChampObjModel>('obj')!;
const computedRatioValues: RootRatioComputed = makeRootRatio(
  props.effect,
  rankindex!,
  obj,
);

const repeat = ref(1);
const editMode = ref(false);
</script>
