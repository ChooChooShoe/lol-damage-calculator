<template>
    <template v-if="shortMode">
        <SpellImage v-if="img" :iconPath="img"></SpellImage>
        <span v-else></span>
        <p v-html="description" class="subskill__desciption shortmode"></p>
    </template>
    <template v-else>
        <div class="subskill__img ttam__toggle">
            <SpellImage :iconPath="img"></SpellImage>
            <label class="ttam__toggletitle" title="Click to enable/disable" v-if="!shortMode">
                {{ String.fromCharCode(65 + Number(idx.charAt(idx.length-1))) }}
                <input type="checkbox" v-model="active" />
            </label>
        </div>
        <p v-html="description" class="subskill__desciption" :class="{ cliptext: !active, shortMode }" @click="active = true"></p>
        <div class="subskill__effects" v-if="active">
            <SpellEffects v-for="(value, leveling_idx) in leveling" :custom="custom" :key="leveling_idx" :pkey="`${idx}_${leveling_idx}`" :effect="value" :effectindex="leveling_idx"></SpellEffects>
        </div>
        <i v-else></i>
    </template>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { RootRatio, SubSkill } from '../../api/DataTypes.js';
import SpellEffects from './SpellEffects.vue';
import SpellImage from '../../timeline/SpellImage.vue';


const props = defineProps<{
    img?: string,
    description: string,
    leveling: RootRatio[],
    custom: boolean,
    idx: string
}>();

const shortMode = computed(() => (props.description.length < 3000) && props.leveling.length === 0);
const active = ref(props.leveling.length > 0);
</script>
<style>
.subskill__img {
    /* width: 48px; */
    /* height: 48px; */
    grid-row-end: span 2;
    /* position: relative; */
}

.subskill__desciption {
    display: inline-block;
}

.subskill__desciption.shortmode {
    grid-column-start: 2;

}

.subskill__desciption.cliptext {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1.3rem;
    color: #757575;
    cursor: pointer;
}
</style>