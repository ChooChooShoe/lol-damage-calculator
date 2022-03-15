
<template>
  <div class="statsdiv">
    <div :class="v" v-for="(k, v) in stats.stats" :key="k">+{{ k }}{{ stats_to_name[v] }}</div>
    <div v-for="k in stats.spec" :key="k" v-html="k"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import items from "/src/api/items/items.json";
import Item from "./Item.vue";

const props = defineProps({ stats: Object });
</script>

<style>
</style>
