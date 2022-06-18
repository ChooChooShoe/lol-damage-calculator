<template>
  <!-- <span class="spell-image" 
  :style="`url('${spriteBaseUri}${i.sprite}') -${i.x}px -${i.y}px`" 
  :width="spell.image.w" :height="spell.image.h"></span> -->

  <span class="spell-image" :style="style" width="48" height="48"></span>
</template>

<script setup>
import { cdn, v } from "/src/api/version.json";

import championList from "/src/api/ChampionList.json";
import { ref, reactive, provide, computed, inject } from "vue";

const props = defineProps({
  iconPath: String,
  image: Object,
});
const style = props.image
  ? `background: url('${cdn}/${v}/img/sprite/${props.image.sprite}') -${props.image.x}px -${props.image.y}px;`
  : `background: url('${props.iconPath}') 0px 0px; background-size:contain;`;
</script>

<style>
.spell-image {
  display: inline-block;
  padding: 0;
  border-style: none;
  width: 48px;
  height: 48px;
}
</style>
