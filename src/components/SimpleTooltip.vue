
<template>
  <span class="tooltiplink" @mousemove="draw($event)" @mouseout="hide($event)">
    {{dname}}
    <div
      class="tooltipcontent"
      :class="visable ? '' : 'hidden'"
      :style="{left:clientX,top:clientY}"
    >
      <slot></slot>
    </div>
  </span>
</template>

<script>
import matchReplaceSpellEffects from '../javascript/matchreplace';
export default {
  props: ["dname", "tipid"],
  name: "simple-tooltip",
  data: function() {
    return {
      visable: false,
      clientX: 0,
      clientY: 0
    };
  },
  methods: {
    addEffect: function() {
      this.customEffects.push(this.lastEffectIndex++);
    },
    matchReplace: function(text) {
      return matchReplaceSpellEffects(text, this.spellrankindex).str;
    },
    draw: function(e) {
      const comp = /* $root.globalTooltips[this.tipid] || */ this;
      comp.clientX = e.clientX + 10 + "px";
      comp.clientY = e.clientY + 10 + "px";
      comp.visable = true;
    },
    hide: function(e) {
      const comp = /* $root.globalTooltips[this.tipid] || */ this;
      comp.visable = false;
    }
  }
};
</script>

<style scoped>
</style>
