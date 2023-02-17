<template>
  <div class="subskills__grid">
    <SubSkillVue
      v-for="(sub_skill, index) in subskills"
      :key="`${idx}_${index}`"
      :skill="sub_skill"
      :sub-skills="skillModel.effects[index] || undefined"
      :idx="`${idx} (${index}`"
    ></SubSkillVue>
  </div>
</template>

<script setup lang="ts">
import type { SkillDesciptionData, SkillModel } from '../../api/DataTypes';
import SubSkillVue from './SubSkillVue.vue';

defineProps<{
  subskills: SkillDesciptionData[];
  skillModel: SkillModel;
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
