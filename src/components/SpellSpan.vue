
<template>
  <span v-html="calchtml()"></span>
</template>

<script>
import { quickMatchReplace } from "../javascript/matchreplace";
export default {
  name: "spell-span",
  props: ["list", "spellrankindex"],
  computed: {
    final() {
      let last = undefined;
      let final = [];
      for (let i = 0; i < this.list.length; i++) {
        if (i === this.spellrankindex) {
          if (last === this.list[i]) {
            final.pop();
          }
          final.push(`<span class="spelleffect">${this.list[i]}</span>`);
        } else if (last !== this.list[i]) {
          final.push(this.list[i]);
        }
        last = this.list[i];
      }
      return final.join(" / ");
    }
  },
  methods: {
    calchtml: function() {
      return quickMatchReplace(this.final);
    }
  }
};
</script>

<style scoped>
</style>
