<template>
  <div class="data_holder col fill">
    <div class="ds__title" tabindex="0">Click to toggle</div>

    <div>
      <div class="ttam__toggle">
        <SpellImage
          iconPath="/src/assets/icons/Attack_damage_icon.png"
        ></SpellImage>
        <span class="ttam__toggletitle">AA</span>
      </div>
      <div class="ttam__toggle" v-for="spell of models" :key="spell.name">
        <SpellImage :image="spell.image"></SpellImage>
        <label class="ttam__toggletitle" :title="spell.displayName">
          {{ spell.skill }}
          <input class="hidden" type="checkbox" :value="true" />
        </label>
      </div>
    </div>

    <hr />

    <!-- <input name="add_effect" type="button" class="button is-primary" value="Add Effect +" @click="addEffect()" /> -->

    <!-- <spell-notes :spell="spell" :id="id"></spell-notes> -->
  </div>
</template>

<script setup lang="ts">
import type { SkillModel } from '@/api/DataTypes';
import SpellImage from './SpellImage.vue';
defineProps<{ models: { [key: string]: SkillModel } }>();
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
  text-shadow:
    0 0 8px black,
    0 0 8px black,
    0 0 8px black,
    0 0 8px black;
}
</style>
