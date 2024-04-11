<script setup lang="ts">
import type { SkillModel } from '@/api/DataTypes';

defineProps<{ d: SkillModel }>();
</script>

<template>
  <div class="skill" :class="`skill_${d.skill}`">
    <div :id="d.name || d.displayName" class="skill_header skill_wrapper"></div>
  </div>
  <slot></slot>
</template>

<style>
.skill {
  padding: 1em;
  margin-top: 1em;
  font-size: 13px;
  box-shadow: black 0 2px 5px 0;
  color: #c8c4bd;
  border: 525244 solid 1px;
  background: #061e36 no-repeat right top;
  overflow: hidden;
  position: relative;
  z-index: 100;
}

.skill_I {
  background: #082848 no-repeat right top !important;
}
</style>
