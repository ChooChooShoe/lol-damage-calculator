<template>
  <SpellImage :image="spell.image"></SpellImage>
  <label class="ttam__toggletitle" :title="spell.display_name">
    {{ spell.name }}
    <input class="hidden" type="checkbox" :value="true" />
  </label>
</template>

<script setup lang="ts">
import type { ChampionSkills } from '../model/ChampObj';
import SpellImage from './SpellImage.vue';
const props = defineProps<{ skills: ChampionSkills | undefined }>();
console.log('SpellImage', JSON.stringify(props, null, 4));
</script>

<style>
.ttam__toggle {
  position: relative;
  display: inline-block;
  user-select: none;
  border: transparent 1px solid;
  width: 50px;
  height: 50px;
}

.ttam__toggle:hover {
  border-color: darkorange;
}

.ttam__toggle > input:checked {
  border-color: #5b2381;
}

.ttam__toggletitle {
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 3px;
  font-size: 25px;
  text-align: center;
  width: 48px;
  font-weight: bold;
  text-shadow: 0 0 8px black, 0 0 8px black, 0 0 8px black, 0 0 8px black;
}
</style>
