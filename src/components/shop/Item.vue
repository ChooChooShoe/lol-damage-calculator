<template>
  <div
    @click="showInfo()"
    @dblclick="buySelf()"
    @contextmenu="showInfo();buySelf();"
    @mousemove.passive="draw"
    @mouseout.passive="hide"
    class="item item-container"
  >
    <div class="item-img-left" :style="value.spriteStyle"></div>
    <span class="item-name">{{ value.name }}</span>
    <span class="gold">
      <img src="../../assets/Gold.png" />
      {{ displayCost }}
    </span>
  </div>
</template>

<script>
import { spriteBaseUri } from "../../javascript/league_data";

export default {
  props: ["itemId", "value"],
  name: "Item",
  computed: {
    displayCost: function () {
      if (this.value.requiredBuffCurrencyName) {
        if (this.value.requiredBuffCurrencyName === "GangplankBilgewaterToken")
          return `${this.value.requiredBuffCurrencyCost}  Silver Serpents`;
        return `${this.value.requiredBuffCurrencyCost} ${this.value.requiredBuffCurrencyName}`;
      }
      const cost = this.value.priceTotal;
      return cost === 0 ? "Free" : cost;
    },
    itemTipEl() {
      return document.getElementById(`itemtip-${this.itemId}`);
    }
  },
  methods: {
    showInfo() {
      this.$parent.selectedItem = this.itemId;
    },
    buySelf() {
      this.$parent.buyItem(this.itemId);
    },
    draw(e) {
      const style = `transform: translate(${e.clientX}px, ${e.clientY}px);`;
      this.itemTipEl.setAttribute("style", style);
    },
    hide(e) {
      this.itemTipEl.setAttribute("style", `display:none;`);
    },
  },
};
</script>

<style>
.item-container {
  display: grid;
  grid-template-columns: 62px auto;
  text-align: left;
  /* white-space: nowrap; */
  /* line-height: 1em; */
  width: 210px;
  /* height: 62px; */
  border: #60593c 1px solid;
  padding: 3px;
  margin: 3px;
  color: #b4b4b4;
	cursor: pointer;
}

.item-container.small {
  display: block;
  padding: 5px 5px 25px 5px;
  /* margin: 5px 20px 5px 5px; */
  width: 62px;
  height: 62px;
  text-align: center;
  white-space: nowrap;
}

.item-container.icon {
  display: block;
  padding: 0;
  margin: 2px;
  width: 55px;
  height: 55px;
  border: none;
}

.item-container.icon > .item-name,
.item-container.small > .item-name {
  display: none;
}

.item-container.icon > .gold {
  display: none;
}
.item-container.small > .gold {
  display: block;
}

.item-container.icon > .item-name,
.item-container.small > .gold > img {
  display: none;
}

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
