
<template>
  <div class="spell-notes">
    <label class="lbl-toggle">
      <input v-model="isopen" class="is-hidden" type="checkbox" />
      More Info
      <span class="blue" style="user-select: none;cursor: pointer;">[{{ isopen ? 'Hide' : 'Show'}}]</span>
    </label>
    <div class="collapsible-content" ref="content" :style="calcheight">
      <match-replace :text="text"></match-replace>
    </div>
  </div>
</template>

<script>
import MatchReplace from "./MatchReplace.vue";
export default {
  name: "spell-notes",
  components: {
    MatchReplace
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
      const arr = this.spell.notes.split("\n");
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
      const len = this.$refs.content ? this.$refs.content.scrollHeight : 0;
      return this.isopen
        ? "max-height: " + (len+2) + "px;"
        : "max-height: 0px;";
    }
  }
};
</script>

<style>
.spell-notes .collapsible-content {
  border: #1e8ad6 solid 1px;
  transition: max-height 0.5s;
  overflow-y: hidden;
  overflow-x: hidden;
  /* max-height: 400px; */
}
</style>
