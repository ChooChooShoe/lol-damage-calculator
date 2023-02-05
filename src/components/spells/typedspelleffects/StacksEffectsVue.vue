<template>
  <div>
    <span class="ad spelleffect__title"></span>
    <div>
      <BlockStat
        :total="obj[effect.units]"
        @update:total="obj[effect.units] = $event"
        :longtitle="effect.title"
        :title="effect.title || effect.unitsText || 'Stacks'"
        labelClass="ap"
        :suffix="effect.unitsText || ' stacks'"
        :min="effect.min"
        :max="effect.max"
      >
        <p v-html="effect.description"></p>
      </BlockStat>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { StacksEffect } from '@/api/DataTypes';
import type { ChampObjModel } from '@/model/ChampObj';
import BlockStat from '@/components/simple/BlockStat.vue';

defineProps<{ effect: StacksEffect }>();
const obj = inject<ChampObjModel>('obj')!;
</script>
