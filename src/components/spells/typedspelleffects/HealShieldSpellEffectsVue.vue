<template>
  <div>Heal and Shield</div>

  <!-- <template v-if="effect.effectType === 'Shield'">
    <span class="ad spelleffect__title">Shield Strength: </span>
    <div>
      <RecursiveRatioDisplay
        :val="effect"
        :computed="computedRatioValues"
        display="dmg_premitigation"
        :index="index"
      >
      </RecursiveRatioDisplay>
      <span class="spelleffect__total">{{
        ` = ${Math.round(computedRatioValues.scaledValueTotal.value)} `
      }}</span>
      <template v-if="repeat !== 1">
        <span class="spelleffect__repeat">&times; {{ repeat }} ticks</span> =
        <span class="spelleffect__total">{{
          Math.round(dmg_premitigation * repeat)
        }}</span>
        <span class="spelleffect__total">&nbsp;</span>
      </template>
    </div>
  </template> -->
</template>

<script setup lang="ts">
import type { HealEffect, ShieldEffect } from '@/api/DataTypes';

const props = defineProps<{
  effect: HealEffect | ShieldEffect;
  pkey: string;
}>();
</script>
