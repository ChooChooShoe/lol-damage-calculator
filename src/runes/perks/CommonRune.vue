<template>
    <div class="data_holder col fill commonrune">
        <span class="ds__title">{{ p.name }}</span>
        
        <span class="ds__cooldown"> Cooldown: <span v-html=" p.cooldown"></span> seconds</span>
        <hr />
        <SubSkillList :subskills="p.subskills || []" :idx="p.name" :custom="false"></SubSkillList>
    </div>
</template>

<script setup lang="ts">
import SubSkillList from '../../components/spells/SubSkillList.vue';
import { Perk } from '../perks';
defineProps<{ p: Perk }>();
</script>

<style>
.ds__title {
    font-size: 1.2em;
    font-weight: normal;
    margin-right: 1rem;
}</style>