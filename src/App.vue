<template>
  <div id="app">
    <SideBody :spellComponents="spellComponents" :player="player" :target="target"></SideBody>
    <MainBody :currentSpells="currentSpells"></MainBody>
  </div>
</template>

<script>
import SideBody from "./components/SideBody.vue";
import MainBody from "./components/MainBody.vue";
// import './javascript/ui.js';
import { setupVue } from "./javascript/league_data.js";
// // import './javascript/league_items.js';
import "./javascript/calc.js";

// import './javascript/matchreplace.js';

export default {
  name: "app",
  components: {
    SideBody,
    MainBody,
  },
  data: function() {
    return {
      currentSpells: [],
      spellComponents: [],
      championList: {
        None: {
          name: "  -- None --  ",
          id: ""
        }
      },
      championData: {},
      player: null,
      target: null
    };
  },
  created: function() {
    this.$root.$app = this;
    setupVue(this);
  },
  computed: {
    skillpoints_used: function() {
      let sum = 0;
      for (const x in this.spellComponents) {
        sum += this.spellComponents[x].spellrankindex + 1;
      }
      return sum;
    },
  },
};
</script>

<style>
#main {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
