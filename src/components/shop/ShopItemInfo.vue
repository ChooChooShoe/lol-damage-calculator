<template>
  <div v-if="value" class="shopinfo">
    <div class="into">
      <span>Builds Into:</span>
      <div class="gradient"></div>
      <div class="flex flex-row">
        <template v-for="(key) in value.into">
          <SimpleTooltip :key="key" :globalId="'item'+key">
            <img
              class="intoimage click"
              :style="$app.itemData[key].spriteStyle"
              @click="onSelectItem(key)"
            >
          </SimpleTooltip>
        </template>
      </div>
    </div>
    <div class="others">
      <div class="header">
        <div class="itemspriteimage" :style="value.spriteStyle"></div>
        <input type="button" value="BUY" class="buy" @click="buySelf()">
        <span class="nameheader">{{ value.name }} ({{ itemId }})</span>
        <br>
        <div class="inline">
          <img class="intoimage inline" src="../../assets/Gold.png">
          <span class="inline gold">{{ displayCost }}</span>
        </div>
        <div class="inline" v-if="value.gold.sell != value.gold.total">
          <span>&nbsp;(Sells for:</span>
          <img class="intoimage inline" src="../../assets/Gold.png">
          <span class="inline gold">{{ value.gold.sell }}</span>
          <span>)</span>
        </div>
        <div class="inline" v-if="value.gold.purchasable === false">
          <span>&nbsp;-&nbsp;</span>
          <span class="red">Not for Sale</span>
        </div>
        <div class="inline" v-if="value.inStore === false">
          <span>&nbsp;-&nbsp;</span>
          <span class="red">Not In Store</span>
        </div>
      </div>

      <div class="item-underline"></div>
      <h4 v-if="value.requiredAlly">Required Ally: {{ value.requiredAlly }}</h4>
      <h4 v-if="value.requiredChampion">Required Champion: {{ value.requiredChampion }}</h4>
      <div class="item description" v-html="value.description"></div>
      <div class="item-underline"></div>
      <div class="from">
        <span>Recipe:</span>
        <div class="flex flex-row">
          <template v-for="(key,index) in value.from">
            <SimpleTooltip :key="key+index" :globalId="'item'+key" class="inline">
              <img
                class="intoimage click"
                :style="'zoom: 66.66666%;'+$app.itemData[key].spriteStyle"
                @click="onSelectItem(key)"
              >
              <h4 class="inline">+</h4>
            </SimpleTooltip>
          </template>
          <div class="inline">
            <img class="intoimage inline" src="../../assets/Gold.png">
            <h4 class="inline gold">{{ value.gold.base }}</h4>
          </div>
        </div>
      </div>
      <div class="item-tags">
        <span>Tags:&nbsp;</span>
        <template v-for="key in value.tags">{{key}}&nbsp;</template>
      </div>
    </div>
  </div>
  <div v-else>No Item Selected</div>
</template>

<script>
import SimpleTooltip from "../SimpleTooltip.vue";
//intoRender.push(`<img data-key="${other.key}" style="background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`)
export default {
  props: ["itemId", "value"],
  name: "ShopItemInfo",
  components: {
    SimpleTooltip
  },
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
    buySelf() {
      this.$parent.buyItem(this.itemId);
    },
    onSelectItem(key) {
      this.$parent.selectedItem = key;
    }
  }
};
</script>

<style scoped>
.itemspriteimage {
  float: left;
  border: 1px solid #aaa;
  margin: 5px;
  box-sizing: content-box;
  display: block;
}
.buy {
  float: right;
  border: 2px solid #aaa;
  margin: 5px;
}
.intoimage {
  /* border: 1px solid #aaa; */
  margin: 3px;
  /* box-sizing: content-box; */
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
.into {
  min-height: 90px;
  max-height: 90px;
  position: relative;
}
.into:hover {
  max-height: 4000px;
}
.gradient {
  background-image: linear-gradient(#0c161700, #0c1617b4);
  position: absolute;
  top: 72px;
  height: 18px;
  width: 100%;
}
.into:hover .gradient {
  height: 0;
  width: 0;
}
.inline {
  display: inline;
}
.others {
  background: #0c1617;
  position: relative;
}
.shopinfo {
  height: 100%;
  position: relative;
}
.description {
  margin: 7px;
  max-height: 50vh;
  overflow: auto;
}
</style>
