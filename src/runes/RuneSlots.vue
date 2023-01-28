<template>
    <div>
        <template v-for="(p, idx) in runeslot.perks.map(pid => perk(pid))" :key="p.id">
            <SinglePerk :is-key-stone="runeslot.slotLabel === ''" :name="p.name" :iconPath="p.iconPath" :tooltip="p.longDesc" :data-selected="selection ? selection === p.id : 'none'" @click="$emit('update:selection', p.id)"></SinglePerk>

            <!-- <SubSkillList :subskills="p.subskills" :idx="'rune_' + String(idx)" :custom="false"></SubSkillList> -->
        </template>
    </div>
</template>

<script setup lang="ts">
import { perk } from './perks';
import SinglePerk from './SinglePerk.vue';
import SpellEffects from '../components/spells/SpellEffects.vue';
import SubSkillList from '../components/spells/SubSkillList.vue';
const props = defineProps<{
    runeslot: {
        slotLabel: string,
        perks: number[]
    },
    selection: number
}>()
defineEmits(['update:selection'])
</script>
<style>
.RunePath>* {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>