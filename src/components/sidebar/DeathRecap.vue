<template>
  <div>
    <template v-for="(value, k) in store.damageSources" :key="k">
      <div>
        {{ k }}:

        <template v-for="(value2, k2) in value" :key="k + String(k2)">
          <span v-if="k2 !== 0"> + </span>
          <DamageSpan :source="value2"></DamageSpan>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useDamageSources } from '@/global/state';
import DamageSpan from './DamageSpan.vue';

const store = useDamageSources();

defineProps({});
</script>
