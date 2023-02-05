<template>
  <div class="data_holder col fill commonrune">
    <span class="ds__title">{{ p.name }}</span>

    <span v-if="p.cooldown" class="ds__cooldown">
      Cooldown: <span v-html="p.cooldown"></span> seconds</span
    >
    <hr />
    <SubSkillList
      v-if="unique.showSubSkills"
      :subskills="p.subskills || []"
      :idx="p.name"
    />
    <component :is="unique.component" :p="p"></component>
  </div>
</template>

<script lang="ts">
// Table with extra rune vue objects. ouside of the normal CommonRune.vue scope.
const uniqueRuneTable: {
  [key: string]: { showSubSkills: boolean; component: any } | undefined;
} = {};
</script>

<script setup lang="ts">
import SubSkillList from '@/components/spells/SubSkillList.vue';
import type { Perk } from '../perks';
const props = defineProps<{ p: Perk }>();

const unique = uniqueRuneTable[props.p.name] || {
  showSubSkills: true,
  component: undefined,
};
</script>

<style>
.ds__title {
  font-size: 1.2em;
  font-weight: normal;
  margin-right: 1rem;
}
</style>
