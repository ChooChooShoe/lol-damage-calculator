<template>
  <header>
    <h1 class="title">
      League of Legends Damage Calculator: version {{ appVersion }} for LoL patch
      {{ lolPatchVersion }}
    </h1>
    <p class="subtitle">
      With Data from
      <a href="https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki"> League of Legends Wiki </a>
      - Made by <a href="https://github.com/ChooChooShoe">ChooChooShoe</a> - View
      <a href="https://github.com/ChooChooShoe/lol-damage-calculator"> source on GitHub </a>
    </p>
  </header>
  <SettingsModel ref="settings"></SettingsModel>

  <div class="sidebar">
    <SideBody :damagingEffects="data.damagingEffects" :player="data.player" :target="data.target"></SideBody>
  </div>

  <div class="flex main">
    <ChampObj @update:obj="data.player = $event"> <ChampionDiv mode="player"></ChampionDiv></ChampObj>
    <ChampObj @update:obj="data.target = $event"> <ChampionDiv mode="target"></ChampionDiv></ChampObj>

    <AADamageSource></AADamageSource>
    <ChampionSpellDamageSource v-for="spellObj in activeSpells" :key="spellObj.skillid" :spell="spellObj" :champion="data.activeChampionModel.id"></ChampionSpellDamageSource>

    <CustomDamageSource v-for="i in customDamageSources" :key="i" :index="i"></CustomDamageSource>
  </div>
  <footer>
    <div class="buttons">
      <button class="button is-info" @click="addCustomDamageSource()">Add Custom Damage Source</button>
    </div>
  </footer>
  <datalist id="list-of-champions">
    <template v-for="item in championList" :key="item.id">
      <option :value="item.name"></option>
    </template>
  </datalist>
</template>

<script>
import SideBody from "./components/SideBody.vue";
import SettingsModel from "./components/SettingsModel.vue";
import ChampionDiv from "./components/ChampionDiv.vue";
import TargetDiv from "./components/TargetDiv.vue";
import AADamageSource from "./components/spells/AADamageSource.vue";
import ChampionSpellDamageSource from "./components/spells/ChampionSpellDamageSource.vue";
import CustomDamageSource from "./components/spells/CustomDamageSource.vue";

import { setupVue } from "./javascript/league_data.js";
import { ref, reactive, provide, computed } from "vue";

import ChampObj from "./components/ChampObj.vue";

import { dv } from "./api/version.json";

function loadLocalConfig() {
  console.log("loading config...");
  return {
    shopEnabled: localStorage.getItem("shopEnabled") == "true",
  };
}
function saveLocalConfig(config) {
  console.log("saving config...");
  localStorage.setItem("shopEnabled", data.config.shopEnabled);
}

export default {
  name: "App",
  components: {
    SideBody,
    ChampionDiv,
    TargetDiv,
    ChampionSpellDamageSource,
    SettingsModel,
    // ShopController: () => import("./components/shop/ShopController.vue"),
    AADamageSource,
    CustomDamageSource,
    ChampObj,
  },
  setup(props) {
    // console.log("process.env", process.env);
    let championList = ref({});
    let itemData = ref([]);

    let data = reactive({
      activeChampionModel: null,
      damagingEffects: [],
      player: null,
      target: null,
      globalToolTips: {},
      shopModel: null,
      config: loadLocalConfig(),
    });

    setupVue(championList, itemData);

    provide("RootData", data);
    provide("championList", championList);

    // expose to template
    return {
      appVersion: "4.0",
      lolPatchVersion: dv,
      championList,
      itemData,
      data,
      lastCustomDamageSourcesIndex: ref(0),
      customDamageSources: ref([]),
      activeSpells: computed(() => (data.activeChampionModel ? Object.values(data.activeChampionModel.skills) : [])),
    };
  },
  // mounted: function () {
  //   console.log("process.env", process.env);
  //   this.load(
  //     window.localStorage.getItem("last_used_customDamageSources") || "{}"
  //   );
  //   this.lastCustomDamageSourcesIndex =
  //     window.localStorage.getItem("last_used_lastCustomDamageSourcesIndex") ||
  //     0;
  // },
  watch: {
    config: {
      handler(val, oldVal) {
        saveLocalConfig(val);
      },
      deep: true,
    },
    customDamageSources: {
      handler: function (val, oldVal) {
        window.localStorage.setItem("last_used_customDamageSources", JSON.stringify(val));
        window.localStorage.setItem("last_used_lastCustomDamageSourcesIndex", this.lastCustomDamageSourcesIndex);
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
      return this.data.config.shopEnabled;
    },
    skillpoints_used: function () {
      let sum = 0;
      for (const x in this.data.damagingEffects) {
        sum += (this.data.damagingEffects[x].spellrankindex || 0) + 1;
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
      this.customDamageSources = this.customDamageSources.filter((i) => i !== index);
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
    "footer footer";
}
#app > header {
  border-bottom: #45a049 solid 2px;
  grid-area: header;
}
#app > .main {
  grid-area: main;
}
#app > .sidebar {
  grid-area: sidebar;
}
#app > footer {
  grid-area: footer;
}
</style>
