<template>
  <div id="app">
    <SideBody :spellComponents="spellComponents" :player="player" :target="target"></SideBody>

    <div class="columns">
      <!-- <SettingsModel ref="settings"></SettingsModel> -->
      <div class="main column">
        <ChampionDiv class="data_holder block small" userid="player" :isprimary="true"></ChampionDiv>
        <ChampionDiv class="data_holder block small" userid="target" :isprimary="false"></ChampionDiv>
        <champion-spells
          v-for="obj in currentSpells"
          :key="currentChamp+obj.key"
          :id="obj.key"
          :spell="obj.value"
          :champion="currentChamp"
        ></champion-spells>

        <CustomDamageSource
          v-for="i in customDamageSources"
          :key="'CustomDamageSource'+i"
          :index="i"
        ></CustomDamageSource>
        <div class="buttons">
          <button class="button is-info" @click="addCustomDamageSource()">Add Custom Damage Source</button>
        </div>
      </div>
    </div>
    <!-- <ShopModel v-if="config.shopEnabled" ref="shop"></ShopModel> -->
    <notifications group="main" position="bottom left" :reverse="true" :speed="500" />
  </div>
</template>

<script>
import Vue from "vue";
import SideBody from "./components/SideBody.vue";
import SettingsModel from "./components/SettingsModel.vue";
import ChampionDiv from "./components/ChampionDiv";
import ChampionSpells from "./components/ChampionSpells.vue";
// import ShopModel from "./components/shop/ShopModel.vue";
import { setupVue } from "./javascript/league_data.js";

import CustomDamageSource from "./components/spells/CustomDamageSource.vue";

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
    // SettingsModel,
    // ShopModel,
    CustomDamageSource
  },
  data: function() {
    return {
      currentSpells: [],
      customDamageSources: [],
      lastCustomDamageSourcesIndex: 0,
      currentChamp: "None",
      spellComponents: [],
      player: null,
      target: null,
      championList: {},
      itemData: [],
      globalToolTips: {},
      config: loadLocalConfig()
    };
  },
  created: function() {
    Vue.prototype.$app = this;
    setupVue(this);
  },
  mounted: function() {
    console.log("process.env", process.env);
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
  },
  methods: {
    addCustomDamageSource() {
      this.customDamageSources.push(this.lastCustomDamageSourcesIndex++);
    },
    removeCustomDamageSource(index) {
      this.customDamageSources = this.customDamageSources.filter(
        i => i !== index
      );
    }
  }
};
</script>

<style>
.data_holder {
  /* width: 35em; */
  /* max-width: 50em; */
  margin: 3.5px auto;
  border: 1px solid #1e8ad6;
  /* background-color: #121a1b; */
  padding: 5px;
}
</style>
