<template>
    <div class="RunePath PrimaryPath" v-if="path && path.slots">
        <RuneSlots :runeslot="path.slots.KeyStone" :selection="selections[0]" @update:selection="val => selections[0] = val"></RuneSlots>
        <RuneSlots :runeslot="path.slots.Mixed1" :selection="selections[1]" @update:selection="val => selections[1] = val"></RuneSlots>
        <RuneSlots :runeslot="path.slots.Mixed2" :selection="selections[2]" @update:selection="val => selections[2] = val"></RuneSlots>
        <RuneSlots :runeslot="path.slots.Mixed3" :selection="selections[3]" @update:selection="val => selections[3] = val"></RuneSlots>
    </div>
    <div class="RunePath" v-else>
        Select Primary Rune path
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from '@vue/reactivity';
import { tryGetPerkStyle } from './perks';
import RuneSlots from './RuneSlots.vue';

const props = defineProps<{ pathId: number, selections: number[] }>()
const path = computed(() => tryGetPerkStyle(props.pathId));

</script>
<style>
.RunePath>* {
    display: flex;
    justify-content: space-evenly;
}
</style>