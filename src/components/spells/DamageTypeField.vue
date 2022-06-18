<template>
  <DropdownSelect suffix="damage" class="dtfield" :class="modelValue" :value="damage_type_user(modelValue)">
    <button :class="{ success: modelValue === 'none' }" @click="$emit('update:modelValue', 'none')">None</button>
    <button class="ad" :class="{ success: modelValue === 'physical' }" @click="$emit('update:modelValue', 'physical')">Physical</button>
    <button class="ap" :class="{ success: modelValue === 'magic' }" @click="$emit('update:modelValue', 'magic')">Magic</button>
    <button class="true" :class="{ success: modelValue === 'true' }" @click="$emit('update:modelValue', 'true')">True</button>
  </DropdownSelect>
</template>

<script setup>
import DropdownSelect from "../simple/DropdownSelect.vue";
import { damage_type_user } from "./SpellHelper";
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