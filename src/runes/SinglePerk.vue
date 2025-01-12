<template>
  <div class="Perk" :title="perk.name" :data-selected="selection ? selection === perk.id : 'none'"
    v-tooltip.top="tooltipContent">
    <img class="Perk__image" :src="perk.iconPath" loading="lazy" />
  </div>
</template>

<script setup lang="ts">
import type { Perk, PerkStyle } from './perks';
const props = defineProps<{
  perk: Perk | PerkStyle;
  selection: number;
}>();

const tooltipContent = {
  value: `<b>${props.perk?.name}</b>
    <hr>${props.perk?.longDesc || props.perk?.tooltip}`,
  escape: true,
  class: 'Perk__tooltip',
};
</script>
<style>
.Perk__image {
  width: 32px;
  height: 32px;
  margin: 0px;
}

.Perk.KeyStone .Perk__image {
  width: 48px;
  height: 48px;
}

.Perk.StatsModBox .Perk__image {
  width: 22px;
  height: 22px;
}

.Perk {
  width: 36px;
  height: 36px;
  margin: 2px;
  position: relative;
  display: inline-block;

  border: 2px transparent solid;
  border-radius: 64px;
  cursor: pointer;
  transition: 0.5s opacity;
}

.Perk.KeyStone {
  width: 52px;
  height: 52px;
  border: 2px transparent solid;
}

.Perk.StatsModBox {
  width: 26px;
  height: 26px;
}

.Perk:hover,
.Perk[data-selected='true'] {
  border-color: goldenrod;
}

.Perk[data-selected='false'] {
  /* border-color: black; */
  /* opacity: 0.25; */
  filter: grayscale(100%);
  opacity: 0.27;
}

.Perk[data-selected='none'] {
  border-color: gray;
  filter: grayscale(100%);
    opacity: 0.58;
}

.Perk__tooltip .p-tooltip-text {
  background-color: #1a1a1a;
  /* color: rgb(255, 255, 255); */
  width: 490px;
  /* height: 32px; */
  /* background-color: black; */
  /* text-align: left; */
  padding: 5px 10px;
  border: #60b664 solid 1px;
  /* position: absolute; */
  /* z-index: 100; */
}

.Perk__tooltip .p-tooltip-text b {
  color: blue;
}
</style>
