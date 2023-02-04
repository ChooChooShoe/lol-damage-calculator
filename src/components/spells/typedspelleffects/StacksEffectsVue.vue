<template>
  <div>
    <span class="ad spelleffect__title"></span>
    <div>
      <BlockStat
        v-model:total="obj[effect.increasedStat]"
        :longtitle="effect.longtitle"
        :title="effect.title"
        labelClass="lifesteal"
        suffix=" stacks"
        :min="effect.min"
        :max="effect.max"
      >
        <p v-html="effect.description || effect.longtitle"></p>
      </BlockStat>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { RootEffect, StacksEffect } from '../../../api/DataTypes';
import { ChampObjModel } from '../../../model/ChampObj';
import BlockStat from '../../simple/BlockStat.vue';
import { RatioObjComputed } from '../ratios_info';
import RecursiveRatioDisplay from '../RecursiveRatioDisplay.vue';

defineProps<{
  effect: StacksEffect;
}>();
const obj = inject<ChampObjModel>('obj')!;
</script>
