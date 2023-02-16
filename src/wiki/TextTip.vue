<script setup lang="ts">
defineProps<{ tooltip: string }>();
</script>

<template>
  <span class="basic-tooltip" v-tooltip="tooltip"><slot></slot></span>
</template>

<style>
.basic-tooltip {
  border-bottom: 1px dotted gray;
  cursor: help;
}
</style>
