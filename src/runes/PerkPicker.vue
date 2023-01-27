<template>
    <div class="perk_picker">
        <div class="perk_picker__flex">
            <template v-for="x in perkstyles" :key="x.id">
                <SinglePerk :name="x.name" :icon-path="x.iconPath" :tooltip="x.tooltip" :is-path="true" :data-selected="primaryPathKey === x.id ? 'true' : 'none'" @click="setPrimary(x.id)"></SinglePerk>
            </template>
        </div>
        <div class="perk_picker__flex">
            <template v-for="x in tryGetPerkStyle(primaryPathKey)?.allowedSubStyles.map(pid => perkStyle(pid)) || []" :key="x.id">
                <SinglePerk :name="x.name" :icon-path="x.iconPath" :tooltip="x.tooltip" :is-path="true" :data-selected="secondaryPathKey === x.id ? 'true' : 'none'" @click="setSecondary(x.id)"></SinglePerk>
            </template>
        </div>
        <div class="RunePath" v-if="primaryPath">
            <RuneSlots :runeslot="primaryPath.slots.KeyStone" :selection="modelValue.primaryStyle.selections[0]" @update:selection="val => modelValue.primaryStyle.selections[0] = val"></RuneSlots>
            <RuneSlots :runeslot="primaryPath.slots.Mixed1" :selection="modelValue.primaryStyle.selections[1]" @update:selection="val => modelValue.primaryStyle.selections[1] = val"></RuneSlots>
            <RuneSlots :runeslot="primaryPath.slots.Mixed2" :selection="modelValue.primaryStyle.selections[2]" @update:selection="val => modelValue.primaryStyle.selections[2] = val"></RuneSlots>
            <RuneSlots :runeslot="primaryPath.slots.Mixed3" :selection="modelValue.primaryStyle.selections[3]" @update:selection="val => modelValue.primaryStyle.selections[3] = val"></RuneSlots>
        </div>
        <div class="RunePath" v-else>
            Select Primary Rune Path
        </div>
        <div class="RunePath" v-if="secondaryPath">
            <RuneSlots :runeslot="secondaryPath.slots.Mixed1" :selection="subStyleSelectionsDisplay[0]" @update:selection="val => updateSecondary(val, 0)"></RuneSlots>
            <RuneSlots :runeslot="secondaryPath.slots.Mixed2" :selection="subStyleSelectionsDisplay[1]" @update:selection="val => updateSecondary(val, 1)"></RuneSlots>
            <RuneSlots :runeslot="secondaryPath.slots.Mixed3" :selection="subStyleSelectionsDisplay[2]" @update:selection="val => updateSecondary(val, 2)"></RuneSlots>
            <RuneSlots class="StatsModBox" :runeslot="{ slotLabel: 'Offense', perks: [5008, 5005, 5007] }" :selection="modelValue.statPerks.offense" @update:selection="val => modelValue.statPerks.offense = val"></RuneSlots>
            <RuneSlots class="StatsModBox" :runeslot="{ slotLabel: 'Flex', perks: [5008, 5002, 5003] }" :selection="modelValue.statPerks.flex" @update:selection="val => modelValue.statPerks.flex = val"></RuneSlots>
            <RuneSlots class="StatsModBox" :runeslot="{ slotLabel: 'Defense', perks: [5001, 5002, 5003] }" :selection="modelValue.statPerks.defense" @update:selection="val => modelValue.statPerks.defense = val"></RuneSlots>
        </div>
        <div class="RunePath" v-else>
            Select Secondary Rune Path
        </div>
    </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref, Ref } from "vue";

import SinglePerk from "./SinglePerk.vue";
import { computed } from "@vue/reactivity";
import { tryGetPerkStyle, perkStyle, perkstyles, PerkSelections } from "./perks";
import RuneSlots from "./RuneSlots.vue";

const primaryPathKey: Ref<number> = ref(0);
const secondaryPathKey: Ref<number> = ref(0);

const props = defineProps<{ modelValue: PerkSelections }>()

const primaryPath = computed(() => tryGetPerkStyle(primaryPathKey.value));
const secondaryPath = computed(() => tryGetPerkStyle(secondaryPathKey.value));

function setPrimary(id: number) {
    if (id !== primaryPathKey.value) props.modelValue.primaryStyle.selections = [0, 0, 0, 0];
    primaryPathKey.value = id;
    if (secondaryPathKey.value === id) {
        setSecondary(0);
    }
}
function setSecondary(id: number) {
    if (id !== secondaryPathKey.value) {
        props.modelValue.subStyle.selections = [0, 0];
        subStyleSelectionsDisplay[0] = 0;
        subStyleSelectionsDisplay[1] = 0;
        subStyleSelectionsDisplay[2] = 0;
        secondaryIdx = [];
    }
    secondaryPathKey.value = id;
}

const subStyleSelectionsDisplay = reactive([0, 0, 0]);
let secondaryIdx: number[] = [];
function updateSecondary(id: number, idx: number) {
    if (id !== subStyleSelectionsDisplay[idx]) {
        subStyleSelectionsDisplay[idx] = id;
        if (secondaryIdx[0] !== idx && secondaryIdx[1] !== idx) {
            secondaryIdx.push(idx);
            if (secondaryIdx.length > 2) {
                const remove = secondaryIdx.shift()!;
                subStyleSelectionsDisplay[remove] = 1;
            }
        }
    }
    props.modelValue.subStyle.selections[0] = subStyleSelectionsDisplay[secondaryIdx[0]] || 0;
    props.modelValue.subStyle.selections[1] = subStyleSelectionsDisplay[secondaryIdx[1]] || 0;
}
</script>

<style>
.perk_picker {
    display: grid;
    /* grid-template: 1fr / 1fr 1fr; */
    grid-template: 1fr / 330px 330px;
    align-items: stretch;
    /* overflow: auto; */
    /* user-select: none; */
}

.perk_picker__flex {
    display: flex;
    justify-content: space-evenly;
}
</style>
