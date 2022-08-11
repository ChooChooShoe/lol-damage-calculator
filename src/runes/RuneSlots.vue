<template>
    <template v-for="p in runeslot.perks.map(pid => perks[String(pid) as keyof typeof perks])" :key="p.id">
        <SinglePerk :is-key-stone="runeslot.type ==='kKeyStone'" :name="p.name" :iconPath="p.iconPath" :tooltip="p.longDesc" :data-selected="selection ? selection === p.id : 'none'" @click="$emit('update:selection', p.id)"></SinglePerk>
    </template>
</template>

<script setup lang="ts">
import perks from './perks.json';
import SinglePerk from './SinglePerk.vue';
const props = defineProps<{
    runeslot: {
        type: string | 'kKeyStone' | 'kMixedRegularSplashable' | 'kStatMod',
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
    justify-content: space-evenly;
}
</style>