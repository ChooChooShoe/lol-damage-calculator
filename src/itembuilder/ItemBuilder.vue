<template>
  <header>
    <h1 class="title">League of Legends Damage Calculator: version {{ appVersion }} for LoL patch {{ displayVersion }}</h1>
    <p class="subtitle">
      With Data from
      <a href="https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki"> League of Legends Wiki </a>
      - Made by <a href="https://github.com/ChooChooShoe">ChooChooShoe</a> - View
      <a href="https://github.com/ChooChooShoe/lol-damage-calculator"> source on GitHub </a>
    </p>
  </header>
  <div class="main-full">
    <h1>ItemBuilder</h1>
    <h1>Inventory</h1>
    <ItemInventory :inv="inventory1" @sellItem="sellItem"></ItemInventory>
    <h1>Items</h1>
    <div>
      <span>Filter Items: </span>
      <label>All<input v-model="itemFilter" type="radio" name="filter" value="SR,HA" checked /></label>
      <label>5v5<input v-model="itemFilter" type="radio" name="filter" value="SR" /></label>
      <label>ARAM<input v-model="itemFilter" type="radio" name="filter" value="HA" /></label>
      <!-- <label>RGM<input type="radio" name="filter" value="" /></label> -->
    </div>
    <div class="itembox" :data-filter="itemFilter">
      <div class="item itembox__header" :data-category="key" v-for="(x, key) in itemCategories" :key="key">{{ x }}</div>

      <Item :data-category="x.category" :data-maps="x.maps" display="icon" @buyItem="buyItem" @showInfo="showInfo" v-for="x in items" :key="x.id" :value="x"> </Item>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

import items from "/src/api/items/items.json";
import ItemInventory from "./components/ItemInventory.vue";
import Item from "./components/Item.vue";

// import { ref, reactive, provide, computed } from "vue";

// import ChampObj from "./components/ChampObj.vue";
/* eslint-disable-next-line */
import { dv as displayVersion } from "/src/api/version.json";
/* eslint-disable-next-line */
const appVersion = "0.1.0";
// const tags = {};
// for (const x in items) {
//   [...items[x].description.matchAll(/<[^>]+>/g)].forEach((element) => {
//     if (!tags[element]) tags[element] = items[x].description;
//   });
// }
// console.log("tags", Object.keys(tags));
let itemFilter = ref("SR,HA");
console.log("ItemBuilder setup");

const itemCategories = {
  championitems: "Champion exclusive items",
  distributives: "Distributed items",
  starters: "Starter items",
  consumables: "Potions and Consumables",
  boots: "Boots",
  basics: "Basic items",
  epics: "Epic items",
  legendaries: "Legendary items",
  mythics: "Mythic items",
  ornnitems: "Ornn's Mythic item upgrades",
  trinkets: "Trinkets",
  minionturretitems: "Minion and Turret items",
};

const inventory1 = reactive(Array(6));

const buyItem = (itemId) => {
  console.log("buyItem", itemId);
  let openIndex = 0;
  for (; openIndex < inventory1.length; openIndex++) {
    if (!inventory1[openIndex]) break;
  }
  if (openIndex > 5) {
    openIndex = 5;
  }
  console.log("Buying item:", itemId, "for index", openIndex);
  inventory1[openIndex] = itemId;
};
const showInfo = (itemId) => {
  console.log("showItemInfo", itemId);
};
const sellItem = (index) => {
  inventory1[index] = undefined;
};
</script>

<style>
.main-full {
  grid-area: 2 / 1 / span 1 / span 2;
  line-height: 1.25;
}

.itembox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  margin: 0.5rem 0.5rem;
}
.item[data-category="championitems"] {
  order: 110;
}
.item[data-category="distributives"] {
  order: 32;
}
.item[data-category="starters"] {
  order: 10;
}
.item[data-category="consumables"] {
  order: 20;
}
.item[data-category="boots"] {
  order: 50;
}
.item[data-category="basics"] {
  order: 60;
}
.item[data-category="epics"] {
  order: 70;
}
.item[data-category="legendaries"] {
  order: 80;
}
.item[data-category="mythics"] {
  order: 90;
}
.item[data-category="ornnitems"] {
  order: 100;
}
.item[data-category="trinkets"] {
  order: 30;
}
.item[data-category="minionturretitems"] {
  order: 120;
}
.itembox[data-filter="HA"] .item[data-maps="SR"] {
  opacity: 0.1;
  pointer-events: none;
}
.itembox[data-filter="SR"] .item[data-maps="HA"] {
  opacity: 0.1;
  pointer-events: none;
}
.itembox__header {
  flex: 2 0 100%;
  margin: 0.3em 0;
  font-size: 1.5em;
  font-weight: bold;
  display: block;
}
</style>
