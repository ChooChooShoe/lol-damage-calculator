<template>
  <span
    :class="source?.damage_type"
    :title="String(source?.dmg_postmitigation)"
  >
    {{ Math.round(source?.dmg_postmitigation || 0) }}
  </span>
</template>

<script setup lang="ts">
import { DamageSource } from '@/model/league_data';

const props = defineProps({
  source: DamageSource,
});
</script>
