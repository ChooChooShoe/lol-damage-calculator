<template>
    <div class="subskills__grid">
        <SubSkillVue v-for="(subskill, index) in subskills" :subskill="subskill" :custom="custom" :idx="`${idx}_${index}`"></SubSkillVue>
    </div>
</template>

<script setup lang="ts">

import { SubSkill } from "../../api/DataTypes";
import SubSkillVue from "./SubSkillVue.vue";

const { subskills, custom } = defineProps<{
    subskills: SubSkill[],
    idx: string,
    custom: boolean,
}>()

</script>
<style>
.subskills__grid {
    width: 100%;
    display: grid;
    grid-template-columns: 52px 1fr;
    row-gap: 0em;
}
</style>