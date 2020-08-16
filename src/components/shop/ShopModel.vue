
<template>
  <div>
    <!-- <div >
      <template v-for="(key, val) in $app.config.itemData">
        <p :key="val">{{ '------' + key.name + ': ' +val + ': ' + json(key.stats) }}</p>
      </template>
    </div>-->
    <div class="modal" :style=" visible ? '' : 'display: none;'">
      <div class="modal-content">
        <header>
          <span class="close" @click="visible = false">&times;</span>
          <h2>League Item Shop</h2>
          <input
            type="search"
            v-model="search"
            placeholder="Type to filter items..."
            class="shop-search"
          >
          <label>
            Show Summoner's Rift Only
            <input type="checkbox" v-model="rift_only" checked>
          </label>

          <label>
            Hide special event items
            <input
              type="checkbox"
              v-model="hide_event"
              checked
              @input="filterShop()"
            >
          </label>

          <input type="search" v-model="mapfilter" placeholder="Type to filter map...">
          <label>Item Count: {{ visibleItems.length }}</label>
        </header>
        <nav class="fixed-scroller">
          <div class="shop-grid-container">
            <template v-for="(key) in visibleItems">
              <Item :key="key" :itemId="key" :value="$app.config.itemData[key]"></Item>
            </template>
          </div>
        </nav>
        <main>
          <ShopItemInfo :itemId="selectedItem" :value="$app.config.itemData[selectedItem]"></ShopItemInfo>
        </main>
        <footer>
          <div class="item-grid-container">
            <div @click="sellItem(0);" class="item-shop-0">
              <img class="full-image" :src="image(0)" width="64" height="64">
              <div>
                <span>1</span>
              </div>
            </div>
            <div @click="sellItem(1);" class="item-shop-1">
              <img class="full-image" :src="image(1)" width="64" height="64">
              <div>
                <span>2</span>
              </div>
            </div>
            <div @click="sellItem(2);" class="item-shop-2">
              <img class="full-image" :src="image(2)" width="64" height="64">
              <div>
                <span>3</span>
              </div>
            </div>
            <div @click="sellItem(3);" class="item-shop-3">
              <img class="full-image" :src="image(3)" width="64" height="64">
              <div>
                <span>4</span>
              </div>
            </div>
            <div @click="sellItem(4);" class="item-shop-4">
              <img class="full-image" :src="image(4)" width="64" height="64">
              <div>
                <span>5</span>
              </div>
            </div>
            <div @click="sellItem(5);" class="item-shop-5">
              <img class="full-image" :src="image(5)" width="64" height="64">
              <div>
                <span>6</span>
              </div>
            </div>
          </div>
          <div class="itemcontrol-grid-container">
            <input type="button" @click="sellAllItems()" value="Clear Items">
          </div>
          <label>Total Cost: {{ sumData.cost }}</label>
          <p>
            <template v-for="(key,val) in sumData.stats">{{val}}: {{key}}</template>
          </p>
          <div class="stats-total-shop" style="float: right;"></div>
        </footer>
      </div>
    </div>
    <div>
      <template v-for="(val,key) in $app.config.itemData">
        <ItemTooltip :key="key" :itemId="key" :value="val"></ItemTooltip>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Item from "./Item.vue";
import ItemTooltip from "./ItemTooltip.vue";
import SimpleTooltip from "../SimpleTooltip.vue";
import ShopItemInfo from "./ShopItemInfo";
// import DataInput from "./DataInput.vue";
import league_items from "../../javascript/league_items.js";

export default {
  name: "ShopModel",
  components: {
    Item,
    ItemTooltip,
    ShopItemInfo,
    // SimpleTooltip
  },
  data: function() {
    return {
      visible: false,
      userid: "player",
      selectedItem: null,
      mapfilter: "11",
      hide_event: false,
      rift_only: false,
      search: ""
    };
  },
  computed: {
    inventory() {
      return this.$app[this.userid].$refs.inventory;
    },
    items() {
      if(this.inventory)
        return this.inventory.items;
      return null;
    },
    emptyImage() {
      return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    },
    username: function() {
      if (this.userid === "player") return "Player's Champion";
      return "Target's";
    },
    sumData() {
      const stats = {};
      let total_cost = 0;
      for (let i = 0; i < this.items.length; i++) {
        const data = this.itemdata(i);
        if (data) {
          total_cost += data.gold.total;
          Object.keys(data.stats).forEach(key => {
            if (stats[key]) stats[key] = stats[key] + data.stats[key];
            else stats[key] = data.stats[key];
          });
        }
      }
      return {
        cost: total_cost,
        stats: stats
      };
    },
    visibleItems() {
      const itemData = this.$app.config.itemData;
      const keyword = this.search.toLowerCase();
      const mapfilter = this.mapfilter;
      const ret = [];
      for (const key in itemData) {
        const item = itemData[key];
        // const el = document.getElementById(`shop_item_${key}`);

        let show;
        if (item.search.some(e => e.indexOf(keyword) > -1)) show = true;
        else show = item.searchExact.includes(keyword);

        if (keyword === key) show = true;

        // if (
        //   window.playerChamption &&
        //   (item.requiredChampion === window.playerChamption ||
        //     item.requiredAlly === window.playerChamption)
        // ) {
        //   el.style.order = -10;
        // }
        if (item.maps[mapfilter] === false) show = false;

        if (this.rift_only && item.nonRift) {
          show = false;
        } else if (this.hide_event && item.isKnownEventItem) {
          show = false;
        }

        if (show) {
          ret.push(key);
        }
      }
      let x = ret.sort(
        (a, b) => itemData[a].gold.total < itemData[b].gold.total
      );
      return x;
    }
  },
  watch: {
    userid(newUserId, oldUserId) {
      // for (let i = 0; i < 6; i++) {
      //   let item = this.inventory[i];
      //   let els = document.querySelectorAll(`.item-shop-${i}`);
      //   for (const el of els) {
      //     if (item === null) {
      //       const image = el.querySelector(".full-image");
      //       image.src =
      //         "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      //     } else {
      //       el.setAttribute("data-key", item);
      //       const image = el.querySelector(".full-image");
      //       image.src = itemData[item].imageFull;
      //       addToolTipEvents(el);
      //     }
      //   }
      // }
    }
  },
  mounted: function() {},
  methods: {
    image(index) {
      const d = this.itemdata(index);
      if (d) return d.imageFull;
      return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    },
    json(a) {
      if (!window.a) window.a = {};
      window.a = Object.assign(window.a, a);
      return JSON.stringify(a);
    },
    itemdata(index) {
      const item = this.items[index];
      if (item) {
        const data = this.$app.config.itemData[item];
        if (data) return data;
      }
      return null;
    },
    sellAllItems() {
      this.inventory.sellAllItems();
    },
    sellItem(slot) {
      this.inventory.sellItem(slot);
    },
    buyItem(itemId) {
      this.inventory.buyItem(itemId);
    },
    filterShop() {
      // const itemData = this.$app.config.itemData;
      // const keyword = this.$refs.search.value.toLowerCase();
      // const mapfilter = this.$refs.mapfilter.value;
      // let newvisibleItems = [];
      // for (const key in itemData) {
      //   const item = itemData[key];
      //   // const el = document.getElementById(`shop_item_${key}`);
      //   let show;
      //   if (item.search.some(e => e.indexOf(keyword) > -1)) show = true;
      //   else show = item.searchExact.includes(keyword);
      //   // if (
      //   //   window.playerChamption &&
      //   //   (item.requiredChampion === window.playerChamption ||
      //   //     item.requiredAlly === window.playerChamption)
      //   // ) {
      //   //   el.style.order = -10;
      //   // }
      //   if(item.maps[mapfilter] === false)
      //     show = false;
      //   if (this.$refs.rift_only.checked && item.nonRift) {
      //     show = false;
      //   } else if (this.$refs.hide_event.checked && item.isKnownEventItem) {
      //     show = false;
      //   }
      //   if (show) {
      //     newvisibleItems.push(key);
      //   }
      // }
      // this.visibleItems = newvisibleItems.sort((a,b) => itemData[a].gold.total < itemData[b].gold.total);
    },
    open(userid) {
      this.userid = userid;
      this.visible = true;
      // this.$refs.search.focus();
      // this.$refs.search.value = "";
      //   document.querySelector("#shop_buy_item").disabled = false;
      this.filterShop();
    }
  }
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
}

/* Modal Content */
.modal-content {
  display: grid;
  max-width: 1380px;
  min-width: 300px;
  width: 100vw;
  /* height: 100vh; */
  grid-template-areas:
    "head"
    "nav"
    "main"
    "foot";
  grid-template-rows: 20vh 30vh 30vh 20vh;
  grid-template-columns: 1fr;

  position: relative;
  background: #0c1617;
  margin: auto;
  padding: 0;
  /* display: flex; */
  /* flex-flow: row wrap; */
  border: 3px solid rgb(115, 100, 45);
  box-shadow: 0 4px 8px 0 #00000033, 0 6px 20px 0 #00000030;
  /* -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s; */
  animation-name: animatetop;
  animation-duration: 0.15s;
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

header {
  grid-area: head;
  padding: 6px 10px;
  background-color: #4c4d49;
}

nav {
  grid-area: nav;
}
.fixed-scroller {
  height: 30vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

main {
  grid-area: main;
  background: #0c1617;
  color: #cfcfcf;
}
footer {
  grid-area: foot;
  border-right: 2px solid gold;
  border-top: 2px solid gold;
  padding: 0.5em;
}

@media all and (min-width: 725px) {
  .fixed-scroller {
    height: 55vh;
  }
  .modal-content {
    width: 90vw;
    /* height: 100vh; */
    grid-template-areas:
      "head head"
      "nav  main"
      "foot  main";
    grid-template-rows: 16vh 1fr 19vh;
    grid-template-columns: 1fr 50vh;
  }
}
</style>
