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
  <div v-else :data-category="value.category" class="item item-icon" @click="$emit('showInfo', value.id)" @dblclick="$emit('buyItem', value.id)" @contextmenu="$emit('buyItem', value.id)">
    <div class="item__img" :style="spriteStyle"></div>
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

defineEmits(["showInfo", "buyItem"]);

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
  white-space: nowrap;
  font-weight: 300;
  font-size: 1.8rem;
  color: #efefef;
}
.item__id {
  font-size: 1.2rem;
  color: #b9b9b9;
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

.item__img {
  display: inline-block;
}

.item[data-category='ornnitems'] .item__img::after {
  content: "";
  position: relative;
  top: -2px;
  left: -2px;
  width: 52px;
  height: 52px;
  display: block;
  background: url("./bordertreatmentornn.png") 0 0;
  background-size: contain;
}
.item[data-category='mythics'] .item__img::after {
  content: "";
  position: relative;
  top: -2px;
  left: -2px;
  width: 52px;
  height: 52px;
  display: block;
  background: url("./bordertreatmentmythic.png") 0 0;
  background-size: contain;
}
</style>
