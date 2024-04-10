<template>
  <template v-if="nonLeveling">
    <SpellImage :iconPath="skill.icon" class="subskill__img"></SpellImage>
    <p v-html="skill.descriptionHTML" class="subskill__desciption"></p>
    <div class="subskill__effects">
      <SpellEffects
        v-for="(value, leveling_idx) in skill.descriptionRatios"
        :custom="false"
        :key="leveling_idx"
        :pkey="`${idx}:static-desc:${leveling_idx + 1})`"
        :details="{
          name: value.name,
          values: value.pre!,
          valuesHTML: value.pre!,
        }"
        :effect="value"
        :effectindex="leveling_idx"
      ></SpellEffects>
    </div>
  </template>
  <template v-else-if="!skill.locked">
    <div class="subskill__img ttam__toggle">
      <SpellImage :iconPath="skill.icon"></SpellImage>
      <label
        class="ttam__toggletitle"
        title="Click to enable/disable"
        v-if="!nonLeveling"
      >
        {{ String.fromCharCode(65 + Number(idx.charAt(idx.length - 1))) }}
        <input type="checkbox" v-model="active" />
      </label>
    </div>
    <p
      v-html="skill.descriptionHTML"
      class="subskill__desciption"
      :class="{ cliptext: !active, shortmode: nonLeveling }"
      @click="active = true"
    ></p>
    <div class="subskill__effects" v-if="active">
      <SpellEffects
        v-for="(value, leveling_idx) in skill.descriptionRatios || []"
        :custom="false"
        :key="leveling_idx"
        :pkey="`${idx}:dyn-desc-A-${leveling_idx + 1})`"
        :details="{
          name: value.name,
          values: value.pre!,
          valuesHTML: value.pre!,
        }"
        :effect="value"
        :effectindex="leveling_idx"
      ></SpellEffects>
      <SpellEffects
        v-for="(value, leveling_idx) in skill.leveling"
        :custom="false"
        :key="leveling_idx"
        :pkey="`${idx}:leveling-A-${leveling_idx + 1})`"
        :details="value"
        :effect="skill.levelingRatios[leveling_idx]"
        :effectindex="leveling_idx"
      ></SpellEffects>
    </div>
    <i v-else></i>
  </template>
  <template v-else>
    <SpellImage :iconPath="skill.icon" class="subskill__img"></SpellImage>
    <p
      v-html="skill.descriptionHTML"
      class="subskill__desciption"
      :class="{ cliptext: !active, shortmode: nonLeveling }"
      @click="active = true"
    ></p>
    <div class="subskill__effects">
      <SpellEffects
        v-for="(value, index) in skill.descriptionRatios || []"
        :custom="false"
        :key="index"
        :pkey="`${idx}:dyn-desc-B-${index + 1})`"
        :details="{
          name: value.name,
          values: value.pre!,
          valuesHTML: value.pre!,
        }"
        :effect="value"
        :effectindex="index"
      ></SpellEffects>
      <SpellEffects
        v-for="(value, index) in skill.leveling"
        :custom="false"
        :key="index"
        :pkey="`${idx}:leveling-B-${index})`"
        :details="value"
        :effect="undefined"
      ></SpellEffects>
    </div>
  </template>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { SkillDesciptionData } from '@/api/DataTypes';
import SpellEffects from './SpellEffects.vue';
import SpellImage from '@/timeline/SpellImage.vue';

const props = defineProps<{
  skill: SkillDesciptionData;
  idx: string;
}>();

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

.subskill__desciption.cliptext {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1.3rem;
  color: #757575;
  cursor: pointer;
}
</style>
