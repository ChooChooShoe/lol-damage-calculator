<template>
  <header class="main__header">
    <h1 class="main__title">
      League of Legends Damage Calculator: version {{ appVersion }} for LoL
      patch {{ dv }}
    </h1>
    <h2 class="main__subtitle">
      With Data from
      <a href="https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki">
        League of Legends Wiki
      </a>
      – Made by <a href="https://github.com/ChooChooShoe">ChooChooShoe</a> –
      View
      <a href="https://github.com/ChooChooShoe/lol-damage-calculator">
        source on GitHub
      </a>
    </h2>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <p>
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/c/p/vs/t">Exmaple</router-link>
      <router-link class="link" to="/runes">Runes</router-link>
      <router-link class="link" to="/itembuilder">Item Builder</router-link>
    </p>
  </footer>
  <datalist id="list-of-champions">
    <template v-for="item in Object.keys(championList)" :key="item">
      <option :value="item"></option>
    </template>
  </datalist>
</template>

<script setup lang="ts">
import { ref, reactive, provide, computed } from 'vue';
import { dv } from './api/version.json';
import championList from './api/ChampionList.json';

function loadLocalConfig() {
  console.log('loading config...');
  return {
    shopEnabled: localStorage.getItem('shopEnabled') == 'true',
  };
}
// function saveLocalConfig(config) {
//   console.log("saving config...");
//   localStorage.setItem("shopEnabled", config.shopEnabled);
// }

const globalToolTips = ref({});
const config = ref(loadLocalConfig());
const appVersion = '4.01';
</script>

<style>
.main__title {
  font-size: 150%;
  margin: 0.25rem 0.5rem;
}
.main__subtitle {
  font-size: 100%;
  font-weight: normal;
  margin: 0.25rem 0.5rem;
}
.data_holder {
  border-right: 1px solid #1e8ad6;
  border-bottom: 1px solid #1e8ad6;
  background-color: #121a1b;
  padding: 5px;
}
.main__header {
  border-bottom: #45a049 solid 2px;
}

img.lazyload {
  vertical-align: middle;
}
</style>
