
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
  mounted: function() {
    this.items[2] = "1001";
    this.items[3] = "1006";
    this.$forceUpdate();
    this.items[1] = "1006";
    // this.$root.$app[this.userid] = this;
    // this.champ =
    //   window.localStorage.getItem("last_used_champ_" + this.userid) || "";
    // this.load(
    //   window.localStorage.getItem("last_used_data_" + this.userid) || "{}"
    // );
  },
  methods: {
    image(index) {
      const item = this.items[index];
      if (item) {
        const data = this.$store.state.itemData[item];
        if (data) return data.imageFull;
      }
      return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    },
    sellAllItems() {
      for (let i = 0; i < 6; i++) sellItem(i, i==5);
    },
    sellItem(itemNumber, docalc = true) {
      console.log("Selling item: #", itemNumber);
    //   const item = itemNumber + currentOffset;
    //   const els = document.querySelectorAll(
    //     `.item-inventory-${item}, .item-shop-${itemNumber}`
    //   );
    //   for (const el of els) {
    //     const image = el.querySelector(".full-image");
    //     image.src =
    //       "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    //   }
    //   itemInventory[item] = null;
    //   document.querySelector("#shop_buy_item").disabled = false;
    //   if (docalc) onItemsUpdated();
    },
  }
};
</script>

<style scoped>
</style>
