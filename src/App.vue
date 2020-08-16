<template>
  <div id="app">
    <header>
      <h1 class="title">
        League of Legends Damage Calcuator: {{ VUE_APP_VERSION }} for lol patch
        {{ VUE_APP_LOL_PATCH_VERSION }}
      </h1>
      <p class="subtitle">
        With Data from
        <a href="https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki">
          League
          of Legends Wiki
        </a> - Made by
        <a href="https://github.com/ChooChooShoe">ChooChooShoe</a> - View
        <a href="https://github.com/ChooChooShoe/choochooshoe.github.io">source on GitHub</a>
      </p>
    </header>

    <SideBody :damagingEffects="damagingEffects" :player="player" :target="target"></SideBody>

    <SettingsModel ref="settings"></SettingsModel>
    <div class="flex main">
      <ChampionDiv class="data_holder c50" userid="player" :isprimary="true"></ChampionDiv>
      <ChampionDiv class="data_holder c50" userid="target" :isprimary="false"></ChampionDiv>

      <AADamageSource></AADamageSource>
      <ChampionSpellDamageSource
        v-for="obj in currentSpells"
        :key="currentChamp+obj.key"
        :id="obj.key"
        :spell="obj.value"
        :champion="currentChamp"
      ></ChampionSpellDamageSource>

      <CustomDamageSource v-for="i in customDamageSources" :key="'CustomDamageSource'+i" :index="i"></CustomDamageSource>
      <div class="buttons">
        <button class="button is-info" @click="addCustomDamageSource()">Add Custom Damage Source</button>
      </div>
    </div>
    <keep-alive>
      <component :is="currentModel"></component>
    </keep-alive>
    <notifications group="main" position="bottom left" :reverse="true" :speed="500" />
  </div>
</template>

<script>
import Vue from "vue";
import SideBody from "./components/SideBody.vue";
import SettingsModel from "./components/SettingsModel.vue";
import ChampionDiv from "./components/ChampionDiv";
// import ShopModel from "./components/shop/ShopModel.vue";
import { setupVue } from "./javascript/league_data.js";

import AADamageSource from "./components/spells/AADamageSource.vue";
import ChampionSpellDamageSource from "./components/spells/ChampionSpellDamageSource.vue";
import CustomDamageSource from "./components/spells/CustomDamageSource.vue";

function loadLocalConfig() {
  console.log("loading config...");
  return {
    shopEnabled: localStorage.getItem("shopEnabled") == "true",
  };
}
function saveLocalConfig(config) {
  console.log("saving config...");
  localStorage.setItem("shopEnabled", config.shopEnabled);
}

export default {
  name: "app",
  components: {
    SideBody,
    ChampionDiv,
    ChampionSpellDamageSource,
    SettingsModel,
    // ShopModel,
    AADamageSource,
    CustomDamageSource,
  },
  data: function () {
    return {
      currentSpells: [],
      customDamageSources: [],
      lastCustomDamageSourcesIndex: 0,
      currentChamp: "None",
      damagingEffects: [],
      player: null,
      target: null,
      championList: {},
      itemData: [],
      globalToolTips: {},
      currentModel: null,
      config: loadLocalConfig(),
    };
  },
  created: function () {
    Vue.prototype.$app = this;
    setupVue(this);
  },
  mounted: function () {
    console.log("process.env", process.env);
    this.load(
      window.localStorage.getItem("last_used_customDamageSources") || "{}"
    );
    this.lastCustomDamageSourcesIndex =
      window.localStorage.getItem("last_used_lastCustomDamageSourcesIndex") ||
      0;
  },
  watch: {
    config: {
      handler(val, oldVal) {
        saveLocalConfig(val);
      },
      deep: true,
    },
    customDamageSources: {
      handler: function (val, oldVal) {
        window.localStorage.setItem(
          "last_used_customDamageSources",
          JSON.stringify(val)
        );
        window.localStorage.setItem(
          "last_used_lastCustomDamageSourcesIndex",
          this.lastCustomDamageSourcesIndex
        );
      },
      deep: true,
    },
  },
  computed: {
    NODE_ENV() {
      return process.env.NODE_ENV;
    },
    VUE_APP_DDRAGON_CDN() {
      return process.env.VUE_APP_DDRAGON_CDN;
    },
    VUE_APP_DDRAGON_VERSION() {
      return process.env.VUE_APP_DDRAGON_VERSION;
    },
    VUE_APP_LANG() {
      return process.env.VUE_APP_LANG;
    },
    VUE_APP_LOL_PATCH_VERSION() {
      return process.env.VUE_APP_LOL_PATCH_VERSION;
    },
    VUE_APP_VERSION() {
      return process.env.VUE_APP_VERSION;
    },
    shopEnabled() {
      return this.$app.config.shopEnabled;
    },
    skillpoints_used: function () {
      let sum = 0;
      for (const x in this.damagingEffects) {
        sum += (this.damagingEffects[x].spellrankindex || 0) + 1;
      }
      return sum;
    },
  },
  methods: {
    load: function (json) {
      const data = JSON.parse(json);
      for (let key in data) {
        this.customDamageSources[key] = data[key];
      }
    },
    addCustomDamageSource() {
      this.customDamageSources.push(this.lastCustomDamageSourcesIndex++);
    },
    removeCustomDamageSource(index) {
      this.customDamageSources = this.customDamageSources.filter(
        (i) => i !== index
      );
    },
  },
};
</script>

<style>
.title {
  margin: 0.33rem 1rem 0;
}
.subtitle {
  margin: 0.33rem 1rem;
}
.data_holder {
  border-right: 1px solid #1e8ad6;
  border-bottom: 1px solid #1e8ad6;
  background-color: #121a1b;
  padding: 5px;
}
#app {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "main sidebar"
    "footer sidebar";
}
#app > header {
  border-bottom: #45a049 solid 2px;
  grid-area: header;
}
</style>
