<template>
  <div class="item tooltipcontent" :style=" visable ? '' : 'display: none;'">
    <div class="item-tooltip-container" >
      <div class="item-header">
        <div class="item-img-left" :style="value.spriteStyle"></div>

        <span class="item-title">{{ value.name }}</span>
        <div class="float-right">
          <span class="gold">
            <img src="../../assets/Gold.png">
            {{ displayCost }}
          </span>
        </div>
      </div>
      <div class="item-underline"></div>
      <div class="item-stats-table table"></div>
      <div class="item-description">{{ value.description }}</div>
      <div class="item-underline"></div>
      <div ref="tags" class="item-tags"></div>
    </div>
  </div>
</template>

<script>
import ToolTip from "../SimpleTooltip.vue";

export default {
  props: ["itemId", "value"],
  name: "ItemTooltip",
  data() {
    return {
      visable: false,
      clientX: 0,
      clientY: 0
    };
  },
  computed: {
    displayCost: function() {
      const cost = this.value.gold.total;
      return cost === 0 ? "Free" : cost;
    }
  },
  methods: {
    draw: function(e) {
      const comp = /* $root.globalTooltips[this.tipid] || */ this;
      comp.clientX = e.clientX + 10 + "px";
      comp.clientY = e.clientY + 10 + "px";
      comp.visable = true;
    },
    hide: function(e) {
      const comp = /* $root.globalTooltips[this.tipid] || */ this;
      comp.visable = false;
    },
    showInfo() {},
    buyItem() {}
  }
};
</script>

<style scoped>
</style>
