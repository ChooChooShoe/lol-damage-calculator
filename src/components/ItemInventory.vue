<template>
  <div class="item-section">
    <div class="item-grid-container">
      <div v-for="(n, i) in 6" :key="i">
        <img class="full-image" :src="image(i)" width="64" height="64" />
        <span>{{ n }}</span>
      </div>
    </div>
    <div class="itemcontrol-grid-container">
      <input type="button" value="Clear Items" @click="sellAllItems()" />
      <input type="button" value="Load Items" />
      <input type="button" value="Save Items" />
      <a class="button" href="#shop">Shop</a>
    </div>
    <div class="stats-total-6"></div>
  </div>
</template>

<script>
const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

export default {
  name: 'ItemInventory',
  props: ['userid'],
  data: function () {
    return {
      items: ['1001', '1004', null, null, null, null],
    };
  },
  computed: {
    username: function () {
      if (this.userid === 'player') return "Player's Champion";
      return "Target's";
    },
  },
  watch: {},
  mounted: function () {},
  methods: {
    image(index) {
      const d = this.itemdata(index);
      if (d) {
        return (
          'https://raw.communitydragon.org/latest/game/data/items/icons2d/' +
          d.iconPath.toLowerCase()
        );
      }
      return emptyImage;
    },
    itemdata(index) {
      const item = this.items[index];
      if (item) {
        const data = this.$root.itemData[item];
        if (data) return data;
      }
      return null;
    },
    sellAllItems() {
      console.log('Selling all items');
      this.items = [];
    },
    sellItem(slot) {
      console.log('Selling item at slot', slot);
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
      console.log('Buying item:', itemId, 'for slot', openIndex);
      this.$set(this.items, openIndex, itemId);
    },
  },
};
</script>

<style>
.item-section {
  background-color: rgb(69, 73, 76);
  border: 1px solid gold;
  padding: 10px;
  border-radius: 3px;
  margin: auto;
}

.item-grid-container {
  display: grid;
  grid-row-gap: 5px;
  grid-template-columns: auto auto auto;
  float: left;
  margin: auto;
}

.item-grid-container > div {
  background-color: black;
  border: 1px solid whitesmoke;
  padding: 0;
  margin: 3px;
  width: 66px;
  height: 66px;
}

.item-grid-container > div > span {
  user-select: none;
  display: block;
  text-align: center;
  text-anchor: middle;
  font-size: 17px;
  text-decoration-color: #121a1b;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  width: 20px;
  height: 20px;
  padding: 0;
  position: relative;
  bottom: 28px;
  right: 4px;
}

.item-grid-container > div > img {
  zoom: 1;
}

.itemcontrol-grid-container {
  display: grid;
  grid-template-columns: auto;
}

.item-builds,
.shop-grid-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.shop-search {
  padding: 4px 6px;
  border: 2px solid #aaa;
  /* Gray border */
  border-radius: 4px;
  /* Rounded borders */
  margin: 2px 0;
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  background-color: #121a1b;
  color: white;
  width: 100%;
}

.shop-search :focus {
  border: 2px solid #2196f3;
}

.item-img-left {
  grid-row-start: span 2;
  border: 2px solid #aaa;
  margin: 5px 20px 5px 5px;
}

.item-underline {
  border-bottom: white 1px solid;
}

.item-tooltip-container {
  display: table;
  line-height: 1.25em;
  white-space: normal;
  width: 400px;
  border: rgb(96, 89, 60) 2px solid;
  padding: 5px;
  background: rgb(12, 22, 23);
  color: rgb(180, 180, 180);
}

.iteminfo-grid-container {
  display: table;
  line-height: 1.25em;
  white-space: normal;
  /* border: rgb(96, 89, 60) 2px solid; */
  padding: 5px;
  background: rgb(12, 22, 23);
  color: rgb(180, 180, 180);
}

.buy-item-btn {
  color: rgb(53, 145, 41);
}

.item-header {
  height: 48px;
  white-space: nowrap;
  line-height: 48px;
}

.item-title {
  font-size: 22px;
  padding: 10px;
  position: relative;
  top: -25px;
}

.item-stats-table {
  width: 100%;
  font-size: 12px;
}

.item-description {
  width: 100%;
  font-size: 16px;
}
</style>
