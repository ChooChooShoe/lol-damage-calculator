<template>
  <div class="modal-window" @click="closeBg" id="shop">
    <div class="shop-content">
      <div class="header">
        <span class="close" @click="visible = false">&times;</span>
        <h2>League Item Shop</h2>
        <input
          type="search"
          v-model="search"
          placeholder="Type to filter items..."
          class="shop-search"
        />
        <label>Item Count: {{ visibleItems.length }}</label>
      </div>
      <div class="side">
        <div class="fixed-scroller">
          <div class="shop-grid-container">
            <template v-for="key in visibleItems" :key="key">
              <Item :itemId="key" :value="$root.itemData[key]"></Item>
            </template>
          </div>
        </div>
      </div>
      <ShopItemInfo
        class="main"
        :itemId="selectedItem"
        :value="$root.itemData[selectedItem]"
      ></ShopItemInfo>

      <!-- <div class="right">Right</div> -->
      <div class="footer">Footer</div>
      <!-- <footer>
          <div class="item-grid-container">
            <div @click="sellItem(0);" class="item-shop-0">
              <img class="full-image" :src="image(0)" width="64" height="64" />
              <div>
                <span>1</span>
              </div>
            </div>
            <div @click="sellItem(1);" class="item-shop-1">
              <img class="full-image" :src="image(1)" width="64" height="64" />
              <div>
                <span>2</span>
              </div>
            </div>
            <div @click="sellItem(2);" class="item-shop-2">
              <img class="full-image" :src="image(2)" width="64" height="64" />
              <div>
                <span>3</span>
              </div>
            </div>
            <div @click="sellItem(3);" class="item-shop-3">
              <img class="full-image" :src="image(3)" width="64" height="64" />
              <div>
                <span>4</span>
              </div>
            </div>
            <div @click="sellItem(4);" class="item-shop-4">
              <img class="full-image" :src="image(4)" width="64" height="64" />
              <div>
                <span>5</span>
              </div>
            </div>
            <div @click="sellItem(5);" class="item-shop-5">
              <img class="full-image" :src="image(5)" width="64" height="64" />
              <div>
                <span>6</span>
              </div>
            </div>
          </div>
          <div class="itemcontrol-grid-container">
            <input type="button" @click="sellAllItems()" value="Clear Items" />
          </div>
          <label>Total Cost: {{ sumData.cost }}</label>
          <p>
            <template v-for="(key,val) in sumData.stats">{{val}}: {{key}}</template>
          </p>
          <div class="stats-total-shop" style="float: right;"></div>
      </footer>-->

      <a @click="closeBg" title="Close" class="modal-close">Close</a>
      <!-- <h1>Shop</h1> -->

      <!-- <Item></Item> -->

      <!-- <div class="modal">
      <div class="modal-content">
        
      </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import SimpleTooltip from '../SimpleTooltip.vue';
import ShopItemInfo from '../../itembuilder/components/ShopItemInfo.vue';
// import DataInput from "./DataInput.vue";

export default {
  name: 'ShopModal',
  components: {
    Item,
    ShopItemInfo,
    // SimpleTooltip
  },
  data: function () {
    return {
      visible: false,
      userid: 'player',
      selectedItem: null,
      mapfilter: '11',
      hide_event: true,
      rift_only: true,
      search: '',
    };
  },
  computed: {
    inventory() {
      return this.$root[this.userid].$refs.inventory;
    },
    items() {
      if (this.inventory) return this.inventory.items;
      return null;
    },
    emptyImage() {
      return 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    },
    username: function () {
      if (this.userid === 'player') return "Player's Champion";
      return "Target's";
    },
    sumData() {
      const stats = {};
      let total_cost = 0;
      for (let i = 0; i < this.items.length; i++) {
        const data = this.itemdata(i);
        if (data) {
          total_cost += data.gold.total;
          Object.keys(data.stats).forEach((key) => {
            if (stats[key]) stats[key] = stats[key] + data.stats[key];
            else stats[key] = data.stats[key];
          });
        }
      }
      return {
        cost: total_cost,
        stats,
      };
    },
    visibleItems() {
      const itemData = this.$root.itemData;
      const searchTerm = this.search.toLowerCase();
      const ret = [];
      const first = [];
      for (const key in itemData) {
        const item = itemData[key];

        let show;
        if (item.search.includes(searchTerm)) show = true;
        else show = item.categories.includes(searchTerm);

        if (searchTerm == key) show = true;

        // if (item.requiredChampion) {
        //   first.push(key);
        //   continue;
        // }

        if (show) {
          ret.push(key);
        }
      }
      return first.concat(
        ret.sort((a, b) => itemData[a].priceTotal - itemData[b].priceTotal),
      );
    },
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
    },
  },
  mounted: function () {},
  methods: {
    closeBg(e) {
      if (e.currentTarget === e.target) {
        window.location.replace('#_');
        history.replaceState({}, '', window.location.href.slice(0, -2));
      }
    },
    image(index) {
      const d = this.itemdata(index);
      if (d) return d.imageFull;
      return 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    },
    json(a) {
      if (!window.a) window.a = {};
      window.a = Object.assign(window.a, a);
      return JSON.stringify(a);
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
      this.inventory.sellAllItems();
    },
    sellItem(slot) {
      this.inventory.sellItem(slot);
    },
    buyItem(itemId) {
      this.inventory.buyItem(itemId);
    },
    filterShop() {
      // const itemData = this.$root.itemData;
      // const searchTerm = this.$refs.search.value.toLowerCase();
      // const mapfilter = this.$refs.mapfilter.value;
      // let newvisibleItems = [];
      // for (const key in itemData) {
      //   const item = itemData[key];
      //   // const el = document.getElementById(`shop_item_${key}`);
      //   let show;
      //   if (item.search.some(e => e.indexOf(searchTerm) > -1)) show = true;
      //   else show = item.searchExact.includes(searchTerm);
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
    },
  },
};
</script>

<style>
.fixed-scroller {
  overflow-y: scroll;
  height: 65vh;
  width: calc(216px * 3 + 25px);
}

div.shop-content {
  width: 90vw;
  height: 90vh;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 65vh auto;
  grid-template-areas:
    'header header'
    'side main'
    'footer footer';
  gap: 10px;
  background-color: #293844;
  padding: 10px;
}
div.shop-content > .header {
  grid-area: header;
}
div.shop-content > .side {
  grid-area: side;
}
div.shop-content > .main {
  grid-area: main;
}
div.shop-content > .right {
  grid-area: right;
}
div.shop-content > .footer {
  grid-area: footer;
}

div.shop-content > div {
  background-color: #804343cc;
  padding: 0;
}
</style>
