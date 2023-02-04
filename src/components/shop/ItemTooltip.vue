<template>
  <div :id="`itemtip-${this.itemId}`" class="itemtip" style="display: none">
    <div class="bg">
      <div class="header">
        <div class="itemspriteimage" :style="value.spriteStyle"></div>
        <span class="nameheader">{{ value.name }}</span>
        <br />
        <!-- <div class="inline">
            <img class="intoimage inline" src="../../assets/Gold.png" />
            <span class="inline gold">{{ displayCost }}</span>
        </div>-->
        <!-- <div class="inline" v-if="value.gold.sell != value.gold.total">
            <span>&nbsp;(</span>
            <img class="intoimage inline" src="../../assets/Gold.png" />
            <span class="inline gold">{{ value.gold.sell }}</span>
            <span>)</span>
        </div>-->
      </div>
      <div class="item description" v-html="value.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemId', 'value'],
  name: 'ItemTooltip',
  data() {
    return {};
  },
  computed: {
    displayCost: function () {
      if (this.value.requiredBuffCurrencyName) {
        if (this.value.requiredBuffCurrencyName === 'GangplankBilgewaterToken')
          return `${this.value.requiredBuffCurrencyCost}  Silver Serpents`;
        return `${this.value.requiredBuffCurrencyCost} ${this.value.requiredBuffCurrencyName}`;
      }
      const cost = this.value.priceTotal;
      return cost === 0 ? 'Free' : cost;
    },
  },
};
</script>

<style>
.itemtip {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: max-content;
}
.itemspriteimage {
  float: left;
  border: 1px solid #aaa;
  margin: 5px;
  box-sizing: content-box;
  display: block;
}
.header {
  min-height: 60px;
  /* font-size: 1.4rem; */
  line-height: 1.2;
  color: #efefef;
}
.nameheader {
  /* white-space: nowrap; */
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 1.2;
  color: #efefef;
}
.bg {
  background: #0c1617;
  line-height: 1.25em;
  white-space: normal;
  max-width: 400px;
  min-width: 250px;
  border: rgb(96, 89, 60) 2px solid;
  padding: 5px;
  color: rgb(180, 180, 180);
}
.inline {
  display: inline;
}
.description {
  margin: 7px 0 3px 0;
  max-height: 50vh;
  overflow: auto;
}
</style>
