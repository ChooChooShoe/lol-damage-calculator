<template>
    <div class="RunePath" v-if="path && path.slots">
        <div v-for="(x, idx) in path.slots.filter(x => x.type === 'kMixedRegularSplashable')">
            <RuneSlots :runeslot="x" :selection="secondarySelections[idx]" @update:selection="val => updateSecondary(val, idx)"></RuneSlots>
        </div>


        <div>
            <RuneSlots :runeslot="path.slots[4]" :selection="statPerks.offense" @update:selection="val => statPerks.offense = val"></RuneSlots>
        </div>
        <div>
            <RuneSlots :runeslot="path.slots[5]" :selection="statPerks.flex" @update:selection="val => statPerks.flex = val"></RuneSlots>
        </div>
        <div>
            <RuneSlots :runeslot="path.slots[6]" :selection="statPerks.defense" @update:selection="val => statPerks.defense = val"></RuneSlots>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from '@vue/reactivity';
import perkstyles from './perkstyles.json';
import SinglePerk from './SinglePerk.vue';
import RuneSlots from './RuneSlots.vue';
import SinglePath from './SinglePath.vue';

const props = defineProps<{
    pathid: number, selections: number[], statPerks: {
        defense: number,
        flex: number,
        offense: number
    }
}>()
const path = computed(() => perkstyles[String(props.pathid) as keyof typeof perkstyles]);

const secondarySelections = ref([0, 0, 0]);
const secondaryIdx: number[] = [];
const statMods = ref([0, 0, 0]);


function updateSecondary(id: number, idx: number) {
    console.log('updateSecondary', id, idx)
    if (id !== secondarySelections.value[idx]) {
        console.log('secondarySelections', id)
        secondarySelections.value[idx] = id;
        if (secondaryIdx[0] !== idx && secondaryIdx[1] !== idx) {
            secondaryIdx.push(idx);
            if (secondaryIdx.length > 2) {
                const remove = secondaryIdx.shift()!;
                console.log('secondarySelections remove', remove)
                secondarySelections.value[remove] = 1;
            }
        }
    }
    props.selections[0] = secondarySelections.value[secondaryIdx[0]] || 0;
    props.selections[1] = secondarySelections.value[secondaryIdx[1]] || 0;
}
</script>
<style>
.RunePath>* {
    display: flex;
    justify-content: space-evenly;
}
</style>