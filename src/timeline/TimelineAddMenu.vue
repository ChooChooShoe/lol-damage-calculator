<template>
  <div class="data_holder col fill">
    <div class="ds__description" tabindex="0"> List of Spells</div>

    <div>
      <div class="ttam__toggle">
        <SpellImage iconPath="/src/assets/icons/Attack_damage_icon.png"></SpellImage>
        <span class="ttam__toggletitle">AA</span>
      </div>
      <div class="ttam__toggle" v-for="spell in activeChampionModel?.skills" :key="spell.skillkey">
        <SpellImage :image="spell.image"></SpellImage>
        <span class="ttam__toggletitle" :title="spell.name">{{ spell.skillkey }}</span>
      </div>
    </div>

    <hr />

    <!-- <input name="add_effect" type="button" class="button is-primary" value="Add Effect +" @click="addEffect()" /> -->

    <!-- <spell-notes :spell="spell" :id="id"></spell-notes> -->
  </div>
</template>

<script setup>
import SpellImage from "./SpellImage.vue";

import championList from "/src/api/ChampionList.json";
import { ref, reactive, provide, computed, inject } from "vue";

const activeChampionModel = inject("activeChampionModel");
</script>

<style>
.ttam__toggle {
  position: relative;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  border: transparent 1px solid;
  width: 50px;
  height: 50px;
}
.ttam__toggle:hover {
  border-color: darkorange;
}
.ttam__toggletitle {
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
