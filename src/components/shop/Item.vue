<template>
  <div
    class="item item-container"
    @click="showInfo()"
    @dblclick="buyItem()"
    @contextmenu="showInfo();buyItem();"
    @mousemove="draw($event)"
    @mouseout="hide($event)"
  >
    <div class="item-img-left" :style="value.spriteStyle"></div>
    <span class="item-name">{{ value.name }}</span>
    <span class="gold">
      <img src="../../assets/Gold.png">
      {{ displayCost }}
    </span>
  </div>
</template>

<script>
import ToolTip from '../SimpleTooltip.vue'

export default {
  props: ["itemId", "value"],
  name: "shop-item",
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
    },
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
    showInfo() {
      this.$parent.selectedItem = this.itemId;
    },
    buyItem(){

    }
  }
};
</script>

<style scoped>
</style>
