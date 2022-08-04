<template>
  <DropdownSelect suffix="damage" class="dtfield" :class="modelValue">
    <template v-slot:value>
      <span v-if="modelValue  === 'physical'" class="ad">physical damage</span>
      <span v-else-if="modelValue  === 'magic'" class="ap">magic damage</span>
      <span v-else-if="modelValue  === 'true'" class="true">true damage</span>
      <span v-else-if="modelValue  === 'heal'" class="shield">healing</span>
      <span v-else-if="modelValue  === 'shield'" class="shield">shielding</span>
      <span v-else-if="modelValue  === 'unknown'" class="true">unknown damage</span>
      <span v-else class="true">non-damaging ability</span>
    </template>
    <button :class="{ success: modelValue === 'none' }" @click="$emit('update:modelValue', 'none')">None</button>
    <button class="ad" :class="{ success: modelValue === 'physical' }" @click="$emit('update:modelValue', 'physical')">Physical</button>
    <button class="ap" :class="{ success: modelValue === 'magic' }" @click="$emit('update:modelValue', 'magic')">Magic</button>
    <button class="true" :class="{ success: modelValue === 'true' }" @click="$emit('update:modelValue', 'true')">True</button>
  </DropdownSelect>
</template>

<script setup>
import DropdownSelect from "../simple/DropdownSelect.vue";
defineProps(["modelValue"]);
</script>

<style>
.dtfield {
  display: inline-block;
}

.dtfield button.dd-select {
  /* width: 2.5em;  */
  height: 2em !important;
  margin: 0.5em !important;
  padding: 0 0.5em !important;
}
</style>