<template>
  <div v-if="itemEffect">
    <span class="item__name" v-html="itemEffect.name"></span>
    <span class="item__id">&nbsp;({{ itemEffect.unique }})</span>
    <div v-html="itemEffect.descriptionHTML"></div>
    <SpellEffects
      v-for="(ratio, index) in itemEffect.descriptionRatios"
      :key="index"
      :pkey="`${itemEffect.name} - ${pkey} #${index + 1})`"
      :details="{ name: ratio.name, values: ratio.pre!, valuesHTML: ratio.pre! }"
      :effect="ratio"
      :effectindex="index"
    ></SpellEffects>
  </div>
</template>

<script setup lang="ts">
import SpellEffects from '@/components/spells/SpellEffects.vue';
import type { Act } from '@/model/items/items.gen';
const _props = defineProps<{ pkey: string; itemEffect?: Act | undefined }>();
</script>

<style></style>
