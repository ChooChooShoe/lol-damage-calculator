<template>
    <div class="RunePath" v-if="path && path.slots">
        <RuneSlots :runeslot="path.slots.Mixed1" :selection="selections[0]" @update:selection="val => updateSecondary(val, 0)"></RuneSlots>
        <RuneSlots :runeslot="path.slots.Mixed2" :selection="selections[1]" @update:selection="val => updateSecondary(val, 1)"></RuneSlots>
        <RuneSlots :runeslot="path.slots.Mixed3" :selection="selections[2]" @update:selection="val => updateSecondary(val, 2)"></RuneSlots>
        <RuneSlots class="StatsModBox" :runeslot="{ slotLabel: 'Offense', perks: [5008, 5005, 5007] }" :selection="statPerks.offense" @update:selection="val => statPerks.offense = val"></RuneSlots>
        <RuneSlots class="StatsModBox" :runeslot="{ slotLabel: 'Flex', perks: [5008, 5002, 5003] }" :selection="statPerks.flex" @update:selection="val => statPerks.flex = val"></RuneSlots>
        <RuneSlots class="StatsModBox" :runeslot="{ slotLabel: 'Defense', perks: [5001, 5002, 5003] }" :selection="statPerks.defense" @update:selection="val => statPerks.defense = val"></RuneSlots>
    </div>
    <div class="RunePath" v-else>
        Select Secondary Rune Path
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from '@vue/reactivity';
import SinglePerk from './SinglePerk.vue';
import RuneSlots from './RuneSlots.vue';
import SinglePath from './SinglePath.vue';
import { tryGetPerkStyle } from './perks';

const props = defineProps<{
    pathId: number, selections: number[], statPerks: {
        defense: number,
        flex: number,
        offense: number
    }
}>()
const path = computed(() => tryGetPerkStyle(props.pathId));

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
.StatsModBox {
    justify-items: center;

}
</style>