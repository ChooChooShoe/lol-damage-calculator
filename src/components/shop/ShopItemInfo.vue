<template>
  <div v-if="value" class="shopinfo">
    <div class="into">
      <span>Builds Into:</span>
      <div class="gradient"></div>
      <div class="flex flex-row">
        <template v-for="(key) in value.into">
          <img
            class="intoimage"
            :key="key"
            :data-key="key"
            :style="$store.state.itemData[key].spriteStyle"
            @click="onSelectItem(key)"
          >
        </template>
      </div>
    </div>
    <div class="others">
      <div class="itemspriteimage" :style="value.spriteStyle"></div>
      <div class="nameheader">{{ value.name }}</div>
      <div class="item-underline"></div>
      <div class="item description" v-html="value.description"></div>
      <div class="item-underline"></div>
      <div class="from">
        <span>Recipe:</span>
        <div class="flex flex-row">
          <template v-for="(key,index) in value.from">
            <div :key="key+index" class="inline">
              <img
                class="intoimage inline"
                :data-key="key"
                :style="'zoom: 66.66666%;'+$store.state.itemData[key].spriteStyle"
                @click="onSelectItem(key)"
              >
              <h4 class="inline">+</h4>
            </div>
          </template>
          <div class="inline">
            <img class="intoimage inline" src="../../assets/Gold.png">
            <h4 class="inline gold">{{ value.gold.base }}</h4>
          </div>
        </div>
      </div>
      <div class="item-tags">
        <span>Tags:&nbsp;</span>
        <template v-for="key in value.tags">
          <span :key="key">{{key}}&nbsp;</span>
        </template>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
//intoRender.push(`<img data-key="${other.key}" style="background: url('${cdn}/${version}/img/sprite/${other.image.sprite}') -${other.image.x}px -${other.image.y}px" width="${other.image.w}" height="${other.image.h}"/>`)
export default {
  props: ["itemId", "value"],
  name: "ShopItemInfo",
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
    buyItem() {},
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
.intoimage {
  /* border: 1px solid #aaa; */
  margin: 3px;
  /* box-sizing: content-box; */
  display: block;
}
.nameheader {
  min-height: 60px;
  /* white-space: nowrap; */
  font-weight: 300;
  font-size: 2.8rem;
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
.gold {
  font-size: 2.2rem;
  line-height: 1.35;
}
.others {
  background: #0c1617;
  position: relative;
}
.shopinfo {
  height: 100%;
}
.description {
  max-height: 100px;
  overflow: auto;
}
</style>
