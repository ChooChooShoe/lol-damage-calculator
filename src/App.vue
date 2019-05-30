<template>
  <div id="app">
    <SideBody :spellComponents="spellComponents" :player="player" :target="target"></SideBody>
    <div class="flex main">
      <ChampionDiv class="data_holder block small" userid="player" :isprimary="true"></ChampionDiv>
      <ChampionDiv class="data_holder block small" userid="target" :isprimary="false"></ChampionDiv>
      <champion-spells
        v-for="spellObj in currentSpells"
        :key="spellObj.key"
        :id="spellObj.key"
        :spellkey="spellObj.key.toUpperCase().replace('I','Passive ')"
        :spell="spellObj.spell"
        :champion="spellObj.champion"
        :spriteurl="spellObj.sprite + spellObj.spell.image.sprite"
      ></champion-spells>
    </div>
    <ShopModel ref="shop"></ShopModel>
    <notifications group="main" position="bottom left" :reverse="true" :speed="500"/>
  </div>
</template>

<script>
import Vue from "vue";
import SideBody from "./components/SideBody.vue";
import ChampionDiv from "./components/ChampionDiv";
import ChampionSpells from "./components/ChampionSpells.vue";
import ShopModel from "./components/shop/ShopModel.vue";
import { setupVue } from "./javascript/league_data.js";

export default {
  name: "app",
  components: {
    SideBody,
    ChampionDiv,
    ChampionSpells,
    ShopModel
  },
  data: function() {
    return {
      currentSpells: [],
      spellComponents: [],
      championData: {},
      player: null,
      target: null
    };
  },
  created: function() {
    Vue.prototype.$app = this;
    setupVue(this);
  },
  mounted: function() {
    Vue.nextTick().then(function() {
      // Adds focus event to all the input on the page. from calc.js
      // var inputs = document.getElementsByClassName("input");
      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].addEventListener("input", recalc);
      //   if (inputs[i].tagName !== "SELECT")
      //     inputs[i].addEventListener("focus", e => e.target.select());
      // }
    });
  },
  computed: {
    skillpoints_used: function() {
      let sum = 0;
      for (const x in this.spellComponents) {
        sum += this.spellComponents[x].spellrankindex + 1;
      }
      return sum;
    },
    championList() {
      return this.$store.state.championList;
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
