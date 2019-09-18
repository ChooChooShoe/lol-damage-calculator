<template>
  <div id="app">
    <SettingsModel ref="settings"></SettingsModel>
    <SideBody :spellComponents="spellComponents" :player="player" :target="target"></SideBody>
    <div class="flex main">
      <ChampionDiv class="data_holder block small" userid="player" :isprimary="true"></ChampionDiv>
      <ChampionDiv class="data_holder block small" userid="target" :isprimary="false"></ChampionDiv>
      <champion-spells
        v-for="obj in currentSpells"
        :key="currentChamp+obj.key"
        :id="obj.key" 
        :spell="obj.value"
        :champion="currentChamp"
      ></champion-spells>
    </div>
    <ShopModel v-if="config.shopEnabled" ref="shop"></ShopModel>
    <notifications group="main" position="bottom left" :reverse="true" :speed="500"/>
  </div>
</template>

<script>
import Vue from "vue";
import SideBody from "./components/SideBody.vue";
import SettingsModel from "./components/SettingsModel.vue";
import ChampionDiv from "./components/ChampionDiv";
import ChampionSpells from "./components/ChampionSpells.vue";
import ShopModel from "./components/shop/ShopModel.vue";
import { setupVue } from "./javascript/league_data.js";

function loadLocalConfig() {
  console.log("loading config...");
  return {
    shopEnabled: localStorage.getItem("shopEnabled") == "true"
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
    ChampionSpells,
    SettingsModel,
    ShopModel
  },
  data: function() {
    return {
      currentSpells: [],
      currentChamp: 'None',
      spellComponents: [],
      championData: {},
      player: null,
      target: null,
      championList: {},
      itemData: [],
      globalToolTips: {},
      config: loadLocalConfig(),
    };
  },
  created: function() {
    Vue.prototype.$app = this;
    setupVue(this);
  },
  mounted: function() {
    console.log('process.env.VUE_APP_DDRAGON_VERSION',process.env);
  },
  watch: {
    config: {
      handler(val, oldVal) {
        saveLocalConfig(val);
      },
      deep: true
    }
  },
  computed: {
    shopEnabled() {
      return this.$app.config.shopEnabled;
    },
    skillpoints_used: function() {
      let sum = 0;
      for (const x in this.spellComponents) {
        sum += this.spellComponents[x].spellrankindex + 1;
      }
      return sum;
    }
  }
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.data_holder {
  /* width: 35em; */
  /* max-width: 50em; */
  margin: 3.5px auto;
  border: 1px solid #1e8ad6;
  background-color: #121a1b;
  padding: 5px;
}
.data_holder.small {
  width: 36em;
}
</style>
