<template>
  <span class="tooltiplink" @mousemove="draw($event)" @mouseout="hide($event)">
    <slot></slot>
    <div ref="local" class="tooltipcontent simplebg" style="display: none">
      <slot name="content"></slot>
    </div>
  </span>
</template>

<script>
export default {
  name: 'HtmlTooltip',
  data: function () {
    return {
      visable: false,
      clientX: 0,
      clientY: 0,
    };
  },
  methods: {
    draw: function (e) {
      const style = `left:${e.clientX + 10}px;top:${e.clientY + 10}px;`;
      this.$refs.local.setAttribute('style', style);
    },
    hide: function () {
      this.$refs.local.setAttribute('style', `display:none;`);
    },
  },
};
</script>
