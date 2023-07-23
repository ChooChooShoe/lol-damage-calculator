<template>
  <div v-if="itemEffect">
    <span v-if="itemEffect.unique">Unique – </span>
    <span class="" v-html="itemEffect.name"></span>
    <div v-html="itemEffect.descriptionHtml"></div>
    <SpellEffects
      v-for="(ratio, index) in itemEffect.models"
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
