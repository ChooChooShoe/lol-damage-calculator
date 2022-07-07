<template>
  <div class="main-full dataview">
    <label>DEBUG: <input v-model="debug" type="checkbox" /></label><br />
    <label>RAW WIKI: <input v-model="rawWiki" type="text" /></label><br />
    <ChampSearch class="select" mode="emit" v-model:champ="champion"> </ChampSearch>
    <div class="FullModel">
      <RecusiveView :val="ChampionList[champion]"></RecusiveView>
    </div>
    <div class="Skills">
      <!-- <RecusiveView :val="ChampionListSkills[champion]"></RecusiveView> -->
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import ChampionList from "/src/api/ChampionList.json";
// import ChampionListSkills from "/src/api/ChampionListSkills.json";

import { dv as displayVersion } from "/src/api/version.json";
import ChampSearch from "../components/simple/ChampSearch.vue";
import RecusiveView from "./RecusiveView.vue";
const appVersion = "0.1.0";
// const tags = {};
// for (const x in items) {
//   [...items[x].description.matchAll(/<[^>]+>/g)].forEach((element) => {
//     if (!tags[element]) tags[element] = items[x].description;
//   });
// }
// console.log("tags", Object.keys(tags));
let champion = ref("Azir");
const debug = ref(false);
const rawWiki = ref("");

// const FullDataCache = ref({});

// const FullData = computed(() => {
//   const champ = champion.value;
//   if (FullDataCache.value.name === champ) {
//     window.$champ0 = FullDataCache.value;
//     return FullDataCache.value;
//   }
//   fetchSingleChampFile(champ).then((model) => {
//     FullDataCache.value = model;
//   });
//   return { loading: true };
// });
console.log("Dataview setup");

const inventory1 = reactive([null, null, null, 3340, null, null, null]);
</script>

<style>
</style>
