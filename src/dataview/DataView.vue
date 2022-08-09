<template>
  <div class="main-full dataview">
    <label>DEBUG: <input v-model="debug" type="checkbox" /></label><br />
    <label>RAW WIKI: <input v-model="rawWiki" type="text" /></label>
    <label>SET?: <input v-model="rawWikiSet" type="checkbox" /></label><br />
    <div class="FullModel" v-if="rawWiki">
      <template v-for="(r, k) in listOfSearch">
        <RecusiveView :val="{ [rawWiki]: r }" filter=""></RecusiveView>
      </template>
    </div>
    <ChampSearch class="select" mode="emit" v-model:champ="champion"> </ChampSearch>

    <label>
      Toggle Champ View
      <input type="checkbox" v-model="toggleChampView">
    </label>
    <div class="FullModel" v-if="toggleChampView">
      <RecusiveView :val="ChampionList[champion]" filter=""></RecusiveView>
    </div>
    <label>
      Toggle Skills View
      <input type="checkbox" v-model="toggleSkillsView">
    </label>
    <div class="FullModel" v-if="toggleSkillsView">
      <RecusiveView :val="ChampionListSkills[champion]" filter=""></RecusiveView>
    </div>
    <label>
      Toggle Skills View
      <input type="checkbox" v-model="toggleRatiosView">
    </label>
    <div class="FullModel" v-if="toggleRatiosView">
      <template v-for="r in listOfRatios">
        <span class="key" :title="r.raw">{{ r.name }}</span>
        <RecursiveRatioDisplay display="value" :val="r" :recursive="false"></RecursiveRatioDisplay>
        <br />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref } from "vue";
import ChampionList from "../api/ChampionList.json";
import ChampionListSkills from "../api//ChampionListSkills.json";

import ChampSearch from "../components/simple/ChampSearch.vue";
import RecusiveView from "./RecusiveView.vue";
import RecursiveRatioDisplay from "../components/spells/RecursiveRatioDisplay.vue";
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
const toggleSkillsView = ref(false);
const toggleChampView = ref(false);
const toggleRatiosView = ref(true);
const rawWikiSet = ref(true);
// const listOfRatios = Object.values(ChampionListSkills).flatMap(x => Object.values(x.skills).flatMap(y => y.subskills).flatMap(z => z.leveling));

const listOfRatios = findAll("leveling", ChampionListSkills).flat();

const listOfSearch = computed(() => {
  if (rawWikiSet.value) return new Set(findAll(rawWiki.value, ChampionListSkills).flat())
  else return findAll(rawWiki.value, ChampionListSkills).flat()
});

provide('rankindex', ref(1));

function findAll<T>(key: string, obj: object): T[] {
  const arr: T[] = [];
  findAllR(key, obj, arr)
  return arr;
}
function findAllR<T>(key: string, obj: object, arr: T[]) {
  for (const [k, v] of Object.entries(obj)) {
    if (k === key) arr.push(v as T);
    else if (v && typeof v === 'object') findAllR(key, v, arr);
  }
}

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
