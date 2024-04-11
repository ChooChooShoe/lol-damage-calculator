<template>
  <template v-if="nonLeveling">
    <SpellImage :iconPath="skill.icon" class="subskill__img"></SpellImage>
    <p v-html="skill.description" class="subskill__desciption"></p>
    <div class="subskill__effects no_scaling">
      <i>No scaling for this effect.</i>
    </div>
  </template>
  <template v-else>
    <div class="subskill__img ttam__toggle">
      <SpellImage :iconPath="skill.icon"></SpellImage>
      <label
        class="ttam__toggletitle"
        title="Click to enable/disable"
        v-if="!nonLeveling"
      >
        {{ String.fromCharCode(65 + Number(pkey.charAt(pkey.length - 1))) }}
        <input type="checkbox" v-model="active" />
      </label>
    </div>
    <p
      v-html="skill.description"
      class="subskill__desciption"
      :class="{ cliptext: !active }"
      @click="active = true"
    ></p>
    <div class="subskill__effects" v-if="active">
      <SpellEffects
        v-for="(group, i) in skill.descriptionRatios"
        :key="i"
        :pkey="`${pkey}:dyn-desc-A-${i + 1})`"
        :group="group"
      ></SpellEffects>
      <SpellEffects
        v-for="(group, i) in skill.leveling"
        :key="i"
        :group="group"
        :pkey="`${pkey}:leveling-A-${i + 1})`"
      ></SpellEffects>
    </div>
    <i v-else></i>
  </template>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { SkillDetailsModel } from '@/api/DataTypes';
import SpellEffects from './SpellEffects.vue';
import SpellImage from '@/timeline/SpellImage.vue';

const props = defineProps<{
  skill: SkillDetailsModel;
  pkey: string;
}>();

const locked = ref(true);

const nonLeveling = computed(() => props.skill.leveling.length === 0);
const active = ref(
  props.skill && props.skill.leveling && props.skill.leveling.length > 0,
);
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
.subskill__effects.no_scaling {
  font-size: 80%;
  color: #757575;
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
