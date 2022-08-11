<template>
    <div class="runespage">
        <span>Primary Path = {{ primaryPathKey }}</span>
        <span>Secondary Path = {{ secondaryPathKey }}</span>
        <span>primarySelections Path = {{ primarySelections }}</span>
        <span>secondarySelections Path = {{ secondarySelections }}</span>
        <div class="runespage__flex">
            <template v-for="x in perkstyles" :key="x.id">
                <SinglePerk :name="x.name" :icon-path="x.iconPath" :tooltip="x.tooltip" :is-path="true" :data-selected="primaryPathKey === x.id ? 'true' : 'none'" @click="setPrimary(x.id)"></SinglePerk>
            </template>
        </div>
        <div class="runespage__flex">
            <template v-for="x in perkstyles[String(primaryPathKey) as keyof typeof perkstyles]?.allowedSubStyles.map(pid => perkstyles[String(pid) as keyof typeof perkstyles]) || []" :key="x.id">
                <SinglePerk :name="x.name" :icon-path="x.iconPath" :tooltip="x.tooltip" :is-path="true" :data-selected="secondaryPathKey === x.id ? 'true' : 'none'" @click="setSecondary(x.id)"></SinglePerk>
            </template>
        </div>
        <RunePath v-if="primaryPathKey > 0" :pathid="primaryPathKey" :isPrimary="true" :selections="primarySelections"></RunePath>
        <div class="RunePath PrimaryPath" v-else>Select Primary Rune Path</div>
        <SecondaryStyle v-if="secondaryPathKey > 0" :pathid="secondaryPathKey" :selections="secondarySelections" :statPerks="statPerks"></SecondaryStyle>
        <div class="RunePath" v-else>Select Secondary Rune Path</div>
        <!-- <div class="StatsModBox">
            <StatMod :data-selected="p.statPerks.defense === 'AdaptiveForce'" @click="statMods[0] = 'AdaptiveForce'" icon="AdaptiveForceIcon"></StatMod>
            <StatMod :data-selected="statMods[0] === 'AttackSpeed'" @click="statMods[0] = 'AttackSpeed'" icon="AttackSpeedIcon"></StatMod>
            <StatMod :data-selected="statMods[0] === 'CDRScaling'" @click="statMods[0] = 'CDRScaling'" icon="CDRScalingIcon"></StatMod>

            <StatMod :data-selected="statMods[1] === 'AdaptiveForce'" @click="statMods[1] = 'AdaptiveForce'" icon="AdaptiveForceIcon"></StatMod>
            <StatMod :data-selected="statMods[1] === 'Armor'" @click="statMods[1] = 'Armor'" icon="ArmorIcon"></StatMod>
            <StatMod :data-selected="statMods[1] === 'MagicRes'" @click="statMods[1] = 'MagicRes'" icon="MagicResIcon.MagicResist_Fix"></StatMod>

            <StatMod :data-selected="statMods[2] === 'HealthScaling'" @click="statMods[2] = 'HealthScaling'" icon="HealthScalingIcon"></StatMod>
            <StatMod :data-selected="statMods[2] === 'Armor'" @click="statMods[2] = 'Armor'" icon="ArmorIcon"></StatMod>
            <StatMod :data-selected="statMods[2] === 'MagicRes'" @click="statMods[2] = 'MagicRes'" icon="MagicResIcon.MagicResist_Fix"></StatMod>
        </div> -->
    </div>
</template>

<script setup lang="ts">

import { reactive, ref } from "vue";
import perkstyles from './perkstyles.json';

import RunePath from "./RunePath.vue";
import SinglePerk from "./SinglePerk.vue";
import SecondaryStyle from "./SecondaryStyle.vue";

class PerkStyleSelection {
    perk = 0
    var1 = 0
    var2 = 0
    var3 = 0
}

class Perks {
    statPerks = { defense: 0, flex: 0, offense: 0, }
    styles = [
        {
            description: "primaryStyle",
            selections: [new PerkStyleSelection(), new PerkStyleSelection(), new PerkStyleSelection(), new PerkStyleSelection()],
            style: 0,
        }, {
            description: "subStyle",
            selections: [new PerkStyleSelection(), new PerkStyleSelection()],
            style: 0,
        }
    ]
}

const p = ref(new Perks());

const primaryPathKey = ref(0);
const secondaryPathKey = ref(0);
const primarySelections = ref([0, 0, 0, 0])
const secondarySelections = ref([0, 0]);

const statPerks = ref({
    defense: 0,
    flex: 0,
    offense: 0
});

function setPrimary(id: number) {
    if (id !== primaryPathKey.value) primarySelections.value = [0, 0, 0, 0];
    primaryPathKey.value = id;
    if (secondaryPathKey.value === id) {
        secondaryPathKey.value = 0;
        secondarySelections.value = [0, 0]
    }
}
function setSecondary(id: number) {
    if (id !== secondaryPathKey.value) secondarySelections.value = [0, 0];
    secondaryPathKey.value = id;


}
</script>

<style>
.runespage {
    display: grid;
    grid-template: 1fr / 330px 330px;
    align-items: stretch;
    overflow: hidden;
    /* user-select: none; */
}

.runespage__flex {
    display: flex;
    justify-content: space-evenly;
}

.StatsModBox {
    display: grid;
    grid-template: 44px 44px 44px / 64px 64px 64px;
    justify-content: center;
    justify-items: center;

}
</style>
