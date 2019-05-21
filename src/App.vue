<template>
  <div id="app">
    <SideBody :spellComponents="spellComponents" :player="player" :target="target"></SideBody>
    <MainBody :currentSpells="currentSpells"></MainBody>
  </div>
</template>

<script>
import Vue from "vue";
import SideBody from "./components/SideBody.vue";
import MainBody from "./components/MainBody.vue";
import { setupVue } from "./javascript/league_data.js";

export default {
  name: "app",
  components: {
    SideBody,
    MainBody
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
    }
  }
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
