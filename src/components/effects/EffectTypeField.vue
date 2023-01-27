<template>
    <DropdownSelect label="" :class="modelValue">
        <template v-slot:value>
            <span v-if="modelValue === 'Damage'" class="ad">Damage</span>
            <span v-else-if="modelValue === 'Gain'" class="ap">Stat Gain</span>
            <span v-else-if="modelValue === 'Heal'" class="heal">Heal</span>
            <span v-else-if="modelValue === 'Shield'" class="true">Shield</span>
            <span v-else class="true">Unique</span>
        </template>
        <button class="ad" :class="{ success: modelValue === 'Damage' }" @click="$emit('update:modelValue', 'Damage')">Damage</button>
        <button class="ap" :class="{ success: modelValue === 'Gain' }" @click="$emit('update:modelValue', 'Gain')">Stat Gain</button>
        <button class="heal" :class="{ success: modelValue === 'Heal' }" @click="$emit('update:modelValue', 'Heal')">Heal</button>
        <button class="true" :class="{ success: modelValue === 'Shield' }" @click="$emit('update:modelValue', 'Shield')">Shield</button>
    </DropdownSelect>
</template>

<script setup lang="ts">
import { EffectType } from "../../api/DataTypes";
import DropdownSelect from "../simple/DropdownSelect.vue";
defineProps<{ modelValue: EffectType }>();
defineEmits(['update:modelValue']);
</script>