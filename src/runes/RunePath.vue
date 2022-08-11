<template>
    <div class="RunePath PrimaryPath" v-if="isPrimary">
        <div v-for="(x, idx) in path.slots.filter(x => x.type !== 'kStatMod')">
            <RuneSlots :runeslot="x" :selection="selections[idx]" @update:selection="val => selections[idx] = val"></RuneSlots>
        </div>
    </div>
    <div class="RunePath" v-else>
        <div v-for="(x, idx) in path.slots.filter(x => x.type === 'kMixedRegularSplashable')">
            <RuneSlots :runeslot="x" :selection="secondarySelections[idx]" @update:selection="val => updateSecondary(val, idx)"></RuneSlots>
        </div>
        <div v-for="(x, idx) in path.slots.filter(x => x.type === 'kStatMod')">
            <RuneSlots :runeslot="x" :selection="statMods[idx]" @update:selection="val => statMods[idx] = val"></RuneSlots>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from '@vue/reactivity';
import perkstyles from './perkstyles.json';
import SinglePerk from './SinglePerk.vue';
import RuneSlots from './RuneSlots.vue';
import SinglePath from './SinglePath.vue';

const props = defineProps<{ pathid: number, isPrimary: boolean, selections: number[] }>()
const path = computed(() => perkstyles[String(props.pathid) as keyof typeof perkstyles]);
const filterString = computed(() => props.isPrimary ? 'kStatMod' : 'kKeyStone');

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