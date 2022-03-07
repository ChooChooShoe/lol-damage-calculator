<template>
  <div v-if="display === 'full'" class="item item-block" @click="$emit('showInfo', value.id)" @dblclick="$emit('buyItem', value.id)" @contextmenu="$emit('buyItem', value.id)">
    <div class="item__img" :style="spriteStyle"></div>
    <span class="item__name" v-html="value.name"></span>
    <span class="item__id">&nbsp;({{ value.id }})</span>
    <span class="gold">
      <img src="../../assets/Gold.png" />
      {{ displayCost }}
    </span>
    <div v-html="value.description"></div>
  </div>
  <div v-else class="item item-icon" @click="$emit('showInfo', value.id)" @dblclick="$emit('buyItem', value.id)" @contextmenu="$emit('buyItem', value.id)">
    <div class="item__img" :style="spriteStyle"></div>
    <div class="item__overlay" :class="value.requiredAlly"></div>
    <div class="item__tooltipinfo">
      <div class="item__img" :style="spriteStyle"></div>
      <span class="item__name" v-html="value.name"></span>
      <span class="item__id">&nbsp;({{ value.id }})</span>
      <span class="gold">
        <img src="../../assets/Gold.png" />
        {{ displayCost }}
      </span>
      <div v-html="value.description"></div>
    </div>
  </div>
</template>

<script setup>
import { spriteBaseUri } from "../../javascript/league_data";
// import items from "/src/api/items/items.json";

const props = defineProps({
  value: Object,
  display: String,
});

defineEmits(['showInfo', 'buyItem'])

let displayCost = props.value.priceTotal === 0 ? "Free" : `${props.value.priceTotal}`;

if (props.value.requiredBuffCurrencyCost) {
  if (props.value.requiredBuffCurrencyName === "GangplankBilgewaterToken") displayCost = `${props.value.requiredBuffCurrencyCost} Silver Serpents`;
  else displayCost = `${props.value.requiredBuffCurrencyCost} ${props.value.requiredBuffCurrencyName}`;
}

let spriteStyle = props.value.spriteStyle;
// if(image.)
// let spriteStyle = `background: url('${spriteBaseUri}${props.value.image.sprite}') -${props.value.image.x}px -${props.value.image.y}px; width:${props.value.image.w}px; height:${props.value.image.h}px;`;

// const showName = props.value.image.full == "1001.png" && props.value.id !== 1001;

// console.log("Item", props.value);
</script>

<style>
.item.item-icon {
  display: inline-block;
  padding: 0;
  margin: 2px;
  width: 48px;
  height: 48px;
  border: 2px #644e23 solid;
  box-sizing: content-box;
  background-color: #000000;
}
.item-block {
  display: block;
  border: 2px #644e23 solid;
  margin: 8px 12px;
  background-color: #020a13;
}
.item-desc {
  display: block;
  /* width: 420px; */
  /* height: 250px; */
}
.item__tooltipinfo {
  float: left;
  position: relative;
  bottom: 1em;
  left: 4em;
  min-width: 20rem;
  /* height: 62px; */
  visibility: hidden;
  border: 2px #644e23 solid;
  margin: 8px 12px;
  background-color: #020a13;
}
.item-icon:hover .item__tooltipinfo,
.item-icon:focus .item__tooltipinfo {
  visibility: visible;
  z-index: 140;
}
.item__name {
  font-size: 14pt;
}
.item__id {
  display: inline;
}
.item-container {
  display: grid;
  grid-template-columns: 62px auto;
  text-align: left;
  /* white-space: nowrap; */
  /* line-height: 1em; */
  /* width: 210px; */
  /* height: 62px; */
  border: #60593c 1px solid;
  padding: 3px;
  margin: 3px;
  color: #b4b4b4;
  cursor: pointer;
}

.item__overlay.Ornn {
    height: 48px;
    position: relative;
    top: -48px;
    background: url('./bordertreatmentornn.png');
    background-size: contain;
}
.item__overlay.Mythic {
    height: 48px;
    position: relative;
    top: -48px;
    background: url('./bordertreatmentmythic.png');
    background-size: contain;
}
</style>
