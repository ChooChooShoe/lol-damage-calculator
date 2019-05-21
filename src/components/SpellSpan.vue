
<template>
  <span v-html="calchtml()"></span>
</template>

<script>
import matchReplaceSpellEffects from '../javascript/matchreplace';
export default {
  name: "spell-span",
  props: ["list", "spellrankindex"],
  methods: {
    calchtml: function() {
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
      final = final.join(" / ");
      return matchReplaceSpellEffects(final, this.spellrankindex).str;
    }
  }
};
</script>

<style scoped>
</style>
