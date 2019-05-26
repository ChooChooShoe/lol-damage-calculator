
<template>
  <div v-if="globalId" @mousemove="draw($event)" @mouseout="hide($event)">
    <slot></slot>
  </div>
  <span v-else class="tooltiplink" @mousemove="draw($event)" @mouseout="hide($event)">
    {{dname}}
    <div ref="local" class="tooltipcontent" style="display:none;">
      <slot></slot>
    </div>
  </span>
</template>

<script>
import matchReplaceSpellEffects from "../javascript/matchreplace";
export default {
  props: ["dname", "globalId"],
  name: "simple-tooltip",
  data: function() {
    return {
      visable: false,
      clientX: 0,
      clientY: 0
    };
  },
  computed: {
    globalEl() {
      return this.$store.state.globalToolTips[this.globalId];
    }
  },
  destroyed() {
    this.hide();
  },
  methods: {
    addEffect: function() {
      this.customEffects.push(this.lastEffectIndex++);
    },
    matchReplace: function(text) {
      return matchReplaceSpellEffects(text, this.spellrankindex).str;
    },
    draw: function(e) {
      const element = this.globalEl || this.$refs.local;
      const style = `left:${e.clientX + 10}px;top:${e.clientY + 10}px;`;
      element.setAttribute("style", style);
    },
    hide: function() {
      const element = this.globalEl || this.$refs.local;
      element.setAttribute("style", `display:none;`);
    }
  }
};
</script>

<style>
.tooltiplink {
  border-bottom: white 1px dotted;
  cursor: help;
}
.tooltipcontent {
  position: fixed;
  z-index: 2500;
  /* background: #121a1b; */
  /* padding: 3px; */
  /* border: #9797fc solid 1px; */
  /* color: #eee; */
}
</style>
