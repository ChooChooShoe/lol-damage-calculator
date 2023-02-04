<template>
  <DropdownSelect label="" value="Add Ratio">
    <template v-for="(r, i) in stat_to_display" :key="i">
      <div @click="$emit('addRatio', r)" class="dropdown-item">
        <a :class="r.color"
          >{{ r.prefex }} {{ r.sufex }}
          {{ r.ispercent == false ? 'Ratio' : '' }}</a
        >
        <span v-html="r.html"></span>
      </div>
      <!-- <hr class="dropdown-divider" /> -->
    </template>
  </DropdownSelect>
</template>

<script setup lang="ts">
import { stat_to_display } from './ratios_info';

import DropdownSelect from '../simple/DropdownSelect.vue';

const emit = defineEmits<{
  (e: 'addRatio', x: any): void;
}>();
</script>

<style>
.dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}

.dropdown.is-active .dropdown-menu,
.dropdown.is-hoverable:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  left: 0;
  min-width: 12rem;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  z-index: 20;
}

.dropdown-item {
  color: #fff;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
  position: relative;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #282f2f;
}

i.my-angle-down {
  border: solid seashell;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: translate(0, -2px) rotate(45deg);
}

i.my-angle-up {
  border: solid seashell;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: translate(0, 2px) rotate(-135deg);
}
</style>
