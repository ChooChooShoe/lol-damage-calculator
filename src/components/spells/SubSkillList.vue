<template>
  <div class="subskills__grid">
    <SubSkillVue
      v-for="(sub_skill, index) in subskills"
      :key="`${idx}_${index}`"
      :skill="sub_skill"
      :idx="`${idx}_${index}`"
    ></SubSkillVue>
  </div>
</template>

<script setup lang="ts">
import type { SubSkill } from '../../api/DataTypes';
import SubSkillVue from './SubSkillVue.vue';

defineProps<{
  subskills: SubSkill[];
  idx: string;
}>();
</script>

<style>
.subskills__grid {
  width: 100%;
  display: grid;
  grid-template-columns: 52px 1fr;
  row-gap: 0em;
}
</style>
