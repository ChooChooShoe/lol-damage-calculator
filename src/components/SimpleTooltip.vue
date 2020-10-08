
<template>
  <span v-if="dname" class="tooltiplink" @mousemove="draw($event)" @mouseout="hide($event)">
    {{dname}}
    <div ref="local" class="tooltipcontent simplebg" style="display:none;">
      <slot></slot>
    </div>
  </span>
  <div v-else @mousemove="draw($event)" @mouseout="hide($event)">
    <slot></slot>
  </div>
</template>

<script>
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
      return document.getElementById(this.globalId);
    }
  },
  destroyed() {
    if (this.globalEl) this.globalEl.setAttribute("style", `display:none;`);
  },
  methods: {
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
  border-bottom: whitesmoke 1px dotted;
}
.tooltiplink.help {
  cursor: help;
}
.tooltiplink.link {
  border: none;
  cursor: pointer;
}
.tooltiplink.link:hover {
  text-decoration: underline;
}
.tooltipcontent {
  position: fixed;
  z-index: 2500;
}
.tooltipcontent.simplebg {
  background: #121a1b;
  padding: 3px;
  border: #9797fc solid 1px;
  color: #eee;
}
</style>
