<template>
  <DropdownSelect label="" suffix="damage" class="dtfield" :class="modelValue">
    <template v-slot:value>
      <span v-if="modelValue  === 'Physical'" class="ad">physical damage</span>
      <span v-else-if="modelValue  === 'Magic'" class="ap">magic damage</span>
      <span v-else-if="modelValue  === 'True'" class="true">true damage</span>
      <span v-else-if="modelValue  === 'Heal'" class="shield">healing</span>
      <span v-else-if="modelValue  === 'Shield'" class="shield">shielding</span>
      <span v-else-if="modelValue  === 'Unknown'" class="true">unknown damage</span>
      <span v-else class="true">None</span>
    </template>
    <button :class="{ success: modelValue === 'none' }" @click="$emit('update:modelValue', 'none')">None</button>
    <button class="ad" :class="{ success: modelValue === 'Physical' }" @click="$emit('update:modelValue', 'Physical')">Physical</button>
    <button class="ap" :class="{ success: modelValue === 'Magic' }" @click="$emit('update:modelValue', 'Magic')">Magic</button>
    <button class="true" :class="{ success: modelValue === 'True' }" @click="$emit('update:modelValue', 'True')">True</button>
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