<script setup lang="ts">
import { player, target } from '@/global/state';
import { provide } from 'vue';
import SkillTabs from './SkillTabs.vue';

provide('obj', player);
provide('player', player);
provide('target', target);
</script>

<template>
  <div>
    <SkillTabs :content="[{ name: 'Heelo', values: 'This' }]"></SkillTabs>
  </div>
</template>

<style>
/* Lowercase Capital */
.template_lc {
  font-weight: bold;
  font-size: 89%;
  text-transform: uppercase;
  color: #9797fc;
}

dl.skill-tabs {
  margin: 0;
}
.skill-tabs .hidden-tab {
  display: none;
}
.skill-tabs > dt {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  padding: 0 1.3em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0.3em;
}
.skill-tabs .prev-tab,
.skill-tabs .next-tab {
  position: absolute;
  top: 0;
  width: 50%;
  padding: 0 0.3em;
  box-sizing: border-box;
  cursor: pointer;
}
.skill-tabs .prev-tab:hover,
.skill-tabs .next-tab:hover {
  color: #c9aa71;
}
.skill-tabs .prev-tab {
  left: 0;
  text-align: left;
  font-size: 120%;
}
.skill-tabs .next-tab {
  right: 0;
  text-align: right;
  font-size: 120%;
}
.skill-tabs.toggle-tabs .prev-tab,
.skill-tabs.toggle-tabs .next-tab {
  width: 100%;
}
</style>
