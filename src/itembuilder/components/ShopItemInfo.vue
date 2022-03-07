<template>
  <div v-if="value" class="item shopinfo" :data-category="value.category">
    <div class="into">
      <span>Builds Into:</span>
      <div class="gradient"></div>
      <div class="itembox">
        <Item display="icon" @buyItem="$emit('buyItem', $event)" @showInfo="$emit('showInfo', $event)" v-for="x in value.to" :key="x" :value="items[x]"> </Item>
      </div>
    </div>
    <div class="others">
      <div class="header">
        <div class="item__img" :style="value.spriteStyle"></div>
        <span class="item__name" v-html="value.name"></span>
        <span class="item__id">&nbsp;({{ value.id }})</span>
        <input type="button" value="BUY" class="buy" @click="buySelf()" />
        <img class="intoimage inline" src="../../assets/Gold.png" />
        <span class="inline gold">{{ displayCost }}</span>
        <!-- <div class="inline" v-if="value.gold.sell != value.gold.total">
          <span>&nbsp;(Sells for:</span>
          <img class="intoimage inline" src="../../assets/Gold.png">
          <span class="inline gold">{{ value.gold.sell }}</span>
          <span>)</span>
        </div> -->
        <div class="inline" v-if="!value.purchasable">
          <span>&nbsp;-&nbsp;</span>
          <span class="red">Not for Sale</span>
        </div>
        <div class="inline" v-if="!value.inStore">
          <span>&nbsp;-&nbsp;</span>
          <span class="red">Not In Store</span>
        </div>
      </div>

      <div class="item-underline"></div>
      <h4 v-if="value.requiredAlly">Required Ally: {{ value.requiredAlly }}</h4>
      <h4 v-if="value.requiredChampion">Required Champion: {{ value.requiredChampion }}</h4>
      <div class="item description" v-html="value.description"></div>
      <div class="item-underline"></div>
      <div class="from">
        <span>Recipe:</span>
        <div class="flex flex-row">
          <template v-for="x in value.from || [value.specialRecipe]" :key="x">
            <Item display="icon" @buyItem="$emit('buyItem', $event)" @showInfo="$emit('showInfo', $event)" :value="items[x]"> </Item>
            <span>+</span>
          </template>
          <div class="inline">
            <img class="intoimage inline" src="../../assets/Gold.png" />
            <h4 class="inline gold">{{ value.price }}</h4>
          </div>
        </div>
      </div>
      <div class="item-tags">
        <span>Tags:&nbsp;</span>
        <template v-for="key in value.type">{{ key }}&nbsp;</template>
      </div>
    </div>
  </div>
  <div v-else>No Item Selected</div>
</template>

<script setup>
import { reactive, ref, defineProps, computed } from "vue";
import SimpleTooltip from "../../components/SimpleTooltip.vue";
import Item from "./Item.vue";
import items from "/src/api/items/items.json";

let props = defineProps({
  itemId: Number,
});
defineEmits(["showInfo", "buyItem"]);
const visable = ref(false);
const clientX = ref(0);
const clientY = ref(0);
const value = computed(() => items[props.itemId]);
const displayCost = computed(() => (value.value.priceTotal === 0 ? "Free" : value.value.priceTotal));
</script>

<style>
.buy {
  float: right;
  border: 2px solid #aaa;
  margin: 5px;
}
.intoimage {
  /* border: 1px solid #aaa; */
  margin: 3px;
  /* box-sizing: content-box; */
  display: block;
}
.header {
  min-height: 60px;
  /* font-size: 1.4rem; */
  line-height: 1.2;
  color: #efefef;
}
.into {
  min-height: 90px;
  max-height: 90px;
  position: relative;
}
.into:hover {
  max-height: 4000px;
}
.gradient {
  background-image: linear-gradient(#0c161700, #0c1617b4);
  position: absolute;
  top: 72px;
  height: 18px;
  width: 100%;
}
.into:hover .gradient {
  height: 0;
  width: 0;
}
.inline {
  display: inline;
}
.others {
  background: #0c1617;
  position: relative;
}
.shopinfo {
  height: 100%;
  position: relative;
}
.description {
  margin: 7px;
  max-height: 50vh;
  overflow: auto;
}
</style>
