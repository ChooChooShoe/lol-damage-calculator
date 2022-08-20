<template>
    <div class="Perk" :class="{ KeyStone: isKeyStone}">
        <img class="Perk__image" :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${iconPath.slice(22).toLowerCase()}`" loading="lazy" />
        <div class="Perk__tooltip">
            <h3>{{ name }}</h3>
            <p v-html="tooltip"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import SpellEffects from '../components/spells/SpellEffects.vue';
const props = defineProps<{ iconPath: string, name: string, tooltip: string, isPath?: boolean, isKeyStone?: boolean }>();
</script>
<style>
.Perk__image {
    width: 32px;
    height: 32px;
    margin: 5px;
}

.Perk.KeyStone .Perk__image {
    width: 64px;
    height: 64px;
    margin: 5px;
}

.Perk {
    width: 46px;
    height: 46px;
    position: relative;
    display: inline-block;

    border: 2px transparent solid;
    border-radius: 64px;
    cursor: pointer;
}

.Perk.KeyStone {
    width: 78px;
    height: 78px;
}

.Perk:hover,
.Perk[data-selected="true"] {
    border-color: goldenrod;
}
.Perk[data-selected="false"] {
    border-color: black;
    opacity: 0.25;
    transition: 0.5s opacity;
}
.Perk[data-selected="none"] {
    border-color: gray;
}

.Perk__tooltip {
    visibility: hidden;
    width: 290px;
    /* height: 32px; */
    background-color: black;
    color: #fff;
    text-align: left;
    padding: 5px 10px;
    border: #60b664 solid 1px;
    position: absolute;
    z-index: 100;
    opacity: 0;
    transition: .25s opacity;
}

.Perk:hover .Perk__tooltip {
    visibility: visible;
    opacity: 1; 
}
</style>