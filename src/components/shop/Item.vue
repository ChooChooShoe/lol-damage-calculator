<template>
  <div
    class="item item-container click"
    @click="showInfo()"
    @dblclick="buySelf()"
    @contextmenu.prevent="showInfo();buySelf();"
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
import ToolTip from "../SimpleTooltip.vue";

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
    showInfo() {
      this.$parent.selectedItem = this.itemId;
    },
    buySelf() {
      this.$parent.buyItem(this.itemId);
    }
  }
};
</script>

<style>
.item a {
  color: #9c85ff;
}
.item active {
  color: #f0d21e;
}
.item aura {
  color: #f0d21e;
}
.item consumable {
  color: #37c756;
}
.item flavortext {
  color: gray;
}
.item gold {
  color: gold;
}
.item grouplimit {
  color: #8d8d8d;
}
.item levelLimit {
  color: #f1784c;
}
.item magicDamage {
  color: teal;
}
.item mainText {
  color: white;
}
.item mana {
  color: #0099cc;
}
.item passive {
  color: #f0d21e;
}
.item rules {
  color: rgb(150, 150, 150);
  font-size: 12px;
  line-height: 1em;
  font-style: italic;
}
.item scaleHealth {
  color: #c03300;
}
.item scaleLevel {
  color: white;
  font-weight: bold;
}
.item scaleMana {
  color: #0099cc;
}
.item spellPassive {
  color: #8ac88a;
}
.item stats {
  color: #8ac88a;
}
.item subtitleLeft {
  color: #f0d250;
}
.item unique {
  color: #f0d250;
}
.item unlockedPassive {
  color: #b1ab91;
}
</style>
