<template>
  <div class="float-clear spelleffect__div">
    <EditBtn class="spelleffect__editbtn" v-model="editMode"></EditBtn>
    <span class="spelleffect__title" :title="effect.raw" v-html="effect.name">
    </span>
    <RecursiveRatioDisplay :val="effect" display="value" />
    <RecursiveRatioDisplay
      :val="effect"
      display="dmg_premitigation"
      :valueResolver="(x:GainEffect& RootRatioComputed) => `OK(${x.scaledValue.value})`"
    />
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import type { GainEffect } from '@/api/DataTypes';
import type { ChampObjModel } from '@/model/ChampObj';
import EditBtn from '../../simple/EditBtn.vue';
import type { RootRatioComputed } from '../ratios_info';
import RecursiveRatioDisplay from '../RecursiveRatioDisplay.vue';

defineProps<{
  effect: GainEffect & RootRatioComputed;
}>();
const obj = inject<ChampObjModel>('obj')!;

const repeat = ref(1);
const editMode = ref(false);
</script>
