
<template>
  Actives:
  <div class="statsdiv">
    <div v-for="(k, v) in stats" :key="v">
      <span class="unique" v-if="k.unique">Active - </span>
      <span>{{ k.name }}: </span>
      <span v-html="matchReplaceSpellEffects(k.description).str"></span>
    </div>
  </div>
</template>

<script setup>
import matchReplaceSpellEffects from "/src/javascript/matchreplace.mjs";
import { computed } from "vue";
import items from "/src/api/items/items.json";
import Item from "./Item.vue";

const props = defineProps({ stats: Object });
</script>

<style>
</style>
