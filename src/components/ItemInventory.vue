
<template>
  <div class="item-section">
    <div class="item-grid-container">
      <div class="item-inventory-1">
        <img class="full-image" :src="image(0)" width="64" height="64">
        <div>
          <span>1</span>
        </div>
      </div>
      <div class="item-inventory-2">
        <img class="full-image" :src="image(1)" width="64" height="64">
        <div>
          <span>2</span>
        </div>
      </div>
      <div class="item-inventory-3">
        <img class="full-image" :src="image(2)" width="64" height="64">
        <div>
          <span>3</span>
        </div>
      </div>
      <div class="item-inventory-4">
        <img class="full-image" :src="image(3)" width="64" height="64">
        <div>
          <span>4</span>
        </div>
      </div>
      <div class="item-inventory-5">
        <img class="full-image" :src="image(4)" width="64" height="64">
        <div>
          <span>5</span>
        </div>
      </div>
      <div class="item-inventory-6">
        <img class="full-image" :src="image(5)" width="64" height="64">
        <div>
          <span>6</span>
        </div>
      </div>
    </div>
    <div class="itemcontrol-grid-container">
      <input class="btn" type="button" value="Clear Items" @click="sellAllItems()">
      <input class="btn hidden" type="button" value="Load Items">
      <input class="btn hidden" type="button" value="Save Items">
      <input class="btn open-shop-btn" type="button" value="Shop" @click="shop.open(userid)">
    </div>
    <div class="stats-total-6"></div>
  </div>
</template>

<script>
import Vue from "vue";
// import DataInput from "./DataInput.vue";

export default {
  name: "item-inventory",
  components: {
    // DataInput,
  },
  props: ["userid"],
  data: function() {
    return {
      items: [null, null, null, null, null, null],
      isShopOpen: false
    };
  },
  computed: {
    shop() {
      return this.$root.$app.$refs.shop;
    },
    championList() {
      return this.$store.state.championList;
    },
    emptyImage() {
      return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    },
    username: function() {
      if (this.userid === "player") return "Player's Champion";
      return "Target's";
    }
  },
  watch: {},
  mounted: function() {},
  methods: {
    image(index) {
      const d = this.itemdata(index);
      if (d) return d.imageFull;
      return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    },
    itemdata(index) {
      const item = this.items[index];
      if (item) {
        const data = this.$store.state.itemData[item];
        if (data) return data;
      }
      return null;
    },
    sellAllItems() {
      console.log("Selling all items");
      this.items = [];
    },
    sellItem(slot) {
      console.log("Selling item at slot", slot);
      this.$set(this.items, slot, null);
    },
    buyItem(itemId) {
      let openIndex = 0;
      for (; openIndex < this.items.length; openIndex++) {
        if (this.items[openIndex] === null) break;
      }
      if (openIndex >= 5) {
        openIndex = 5;
      }
      console.log("Buying item:", itemId, "for slot", openIndex);
      this.$set(this.items, openIndex, itemId);
    }
  }
};
</script>

<style scoped>
</style>
