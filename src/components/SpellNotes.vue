
<template>
  <div class="spell-notes float-clear">
    <input v-model="isopen" :id="'collapsible-'+id" class="hidden" type="checkbox">
    <label :for="'collapsible-'+id" class="lbl-toggle">
      More Info
      <span class="blue" style="user-select: none;">[{{ isopen ? 'Hide' : 'Show'}}]</span>
    </label>
    <div class="collapsible-content" :style="calcheight">
      <match-replace :text="text"></match-replace>
    </div>
  </div>
</template>

<script>
import MatchReplace from './MatchReplace.vue';
export default {
  name: "spell-notes",
  components: {
    MatchReplace,
  },
  props: ["spell", "id"],
  data: function() {
    return {
      isopen: false
    };
  },
  computed: {
    text: function() {
      let notes = "";
      let level = 0;
      const arr = this.spell.notes.split('\n');
      for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        const indent = el.slice(0, el.indexOf(" ")).length;
        let diff = indent - level;
        while (diff > 0) {
          notes += "<ul>";
          diff--;
          level++;
        }
        while (diff < 0) {
          notes += "</ul>";
          diff++;
          level--;
        }
        notes += "<li>" + el.slice(el.indexOf(" ") + 1) + "</li>";
      }
      let diff = 0 - level;
      while (diff > 0) {
        notes += "<ul>";
        diff--;
        level++;
      }
      while (diff < 0) {
        notes += "</ul>";
        diff++;
        level--;
      }
      return notes;
    },
    calcheight: function() {
      const len = this.spell.notes.length;
      return this.isopen
        ? "max-height: " + (len * 35 + 30) + "px;"
        : "max-height: 0px;";
    }
  }
};
</script>

<style scoped>
</style>
