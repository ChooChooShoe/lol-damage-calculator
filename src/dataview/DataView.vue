<template>
  <div class="main-full dataview">
    <ChampSearch :champ="champion" mode="target"></ChampSearch>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

// import ChampObj from "./components/ChampObj.vue";
import { dv as displayVersion } from "/src/api/version.json";
import ChampSearch from "../components/simple/ChampSearch.vue";
const appVersion = "0.1.0";
// const tags = {};
// for (const x in items) {
//   [...items[x].description.matchAll(/<[^>]+>/g)].forEach((element) => {
//     if (!tags[element]) tags[element] = items[x].description;
//   });
// }
// console.log("tags", Object.keys(tags));
let champion = ref("Azir");

console.log("ItemBuilder setup");


const inventory1 = reactive([null, null, null, 3340, null, null, null]);

</script>

<style>
.main-full {
  grid-area: 2 / 1 / span 1 / span 2;
  line-height: 1.25;
}
.itembuilder {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  overflow: hidden;
}
.itembuilder > * {
  flex: 2 1 50%;
}
.itembuilder > .item-section {
  /* flex: 1 1 0; */
}
.itembuilder__title {
  font-size: 2rem;
  font-weight: bold;
}

.itembox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
}
.itembox > .item[data-category="championitems"] {
  order: 110;
}
.itembox > .item[data-category="distributives"] {
  order: 32;
}
.itembox > .item[data-category="starters"] {
  order: 10;
}
.itembox > .item[data-category="consumables"] {
  order: 20;
}
.itembox > .item[data-category="boots"] {
  order: 50;
}
.itembox > .item[data-category="basics"] {
  order: 60;
}
.itembox > .item[data-category="epics"] {
  order: 70;
}
.itembox > .item[data-category="legendaries"] {
  order: 80;
}
.itembox > .item[data-category="mythics"] {
  order: 90;
}
.itembox > .item[data-category="ornnitems"] {
  order: 100;
}
.itembox > .item[data-category="trinkets"] {
  order: 30;
}
.itembox > .item[data-category="minionturretitems"] {
  order: 120;
}
.itembox[data-filter="HA"] > .item[data-maps="SR"] {
  opacity: 0.1;
  pointer-events: none;
}
.itembox[data-filter="SR"] > .item[data-maps="HA"] {
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
