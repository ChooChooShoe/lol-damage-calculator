<template>
    <div class="subskills__grid">
        <SubSkillVue v-for="(sub_skill, index) in subskills" :custom="custom" :idx="`${idx}_${index}`" :img="sub_skill.img" :description="sub_skill.description" :leveling="sub_skill.leveling"></SubSkillVue>
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