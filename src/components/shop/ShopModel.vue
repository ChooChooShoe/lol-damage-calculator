
<template>
  <div>
    <div class="modal" :style=" isOpen ? '' : 'display: none;'" >
      <div class="modal-content">
        <div class="modal-header">
          <span id="item_shop_model_close" class="close">&times;</span>
          <h2>Shop</h2>
          <input
            type="search"
            ref="search"
            placeholder="Type to filter items..."
            class="shop-search"
            @input="filterShop()"
          >
          <label>
            Show Summoner's Rift Only
            <input
              type="checkbox"
              ref="rift_only"
              checked
              @input="filterShop()"
            >
          </label>

          <label>
            Hide special event items
            <input
              type="checkbox"
              ref="hide_event"
              checked
              @input="filterShop()"
            >
          </label>

          <label>Item Count: {{ visableItems.length }}</label>
        </div>
        <div class="model-body-left fixed-scroller">
          <div class="shop-grid-container">
            <template v-for="(key) in visableItems">
              <Item :key="key" :itemId="key" :value="$store.state.itemData[key]"></Item>
            </template>
          </div>
        </div>
        <div class="model-body-right iteminfo-grid-container">
          <ShopItemInfo :itemId="selectedItem" :value="$store.state.itemData[selectedItem]"></ShopItemInfo>
        </div>
        <div class="modal-footer">
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
            <input type="button" class="clear_items" value="Clear Items">
          </div>
          <label for="item_total_cost">Total Cost:</label>
          <output id="item_total_cost"></output>
          <div class="stats-total-shop" style="float: right;"></div>
        </div>
      </div>
    </div>
    <div>
      <template v-for="(val,key) in $store.state.itemData">
        <ItemTooltip :key="key" :itemId="key" :value="val"></ItemTooltip>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Item from "./Item.vue";
import ItemTooltip from "./ItemTooltip.vue";
import ShopItemInfo from "./ShopItemInfo";
// import DataInput from "./DataInput.vue";

export default {
  name: "ShopModel",
  components: {
    Item,
    ItemTooltip,
    ShopItemInfo
  },
  data: function() {
    return {
      isOpen: false,
      userid: "player",
      visableItems: [],
      selectedItem: "1004"
    };
  },
  computed: {
    inventory() {
      return this.$root.$app[this.userid].$refs.inventory;
    },
    items() {
      return this.inventory.items;
    },
    emptyImage() {
      return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    },
    username: function() {
      if (this.userid === "player") return "Player's Champion";
      return "Target's";
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
  mounted: function() {
    document.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e){
      e.preventDefault();
      console.log('e');
    },
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
      this.inventory.sellAllItems();
    },
    sellItem(itemNumber, docalc = true) {
      this.inventory.sellItem(itemNumber, docalc);
    },
    filterShop() {
      const keyword = this.$refs.search.value.toLowerCase();
      let newVisableItems = [];
      for (const key in this.$store.state.itemData) {
        const item = this.$store.state.itemData[key];
        // const el = document.getElementById(`shop_item_${key}`);

        let show;
        if (item.search.some(e => e.indexOf(keyword) > -1)) show = true;
        else show = item.searchExact.includes(keyword);

        // if (
        //   window.playerChamption &&
        //   (item.requiredChampion === window.playerChamption ||
        //     item.requiredAlly === window.playerChamption)
        // ) {
        //   el.style.order = -10;
        // }

        if (this.$refs.rift_only.checked && item.nonRift) {
          show = false;
        } else if (this.$refs.hide_event.checked && item.isKnownEventItem) {
          show = false;
        }

        if (show) {
          newVisableItems.push(key);
        }
      }
      this.visableItems = newVisableItems;
    },
    open(userid) {
      this.userid = userid;
      this.isOpen = true;
      this.$refs.search.focus();
      this.$refs.search.value = "";
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
  position: relative;
  background: rgb(12, 22, 23);
  margin: auto;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  height: 100vh;
  border: 3px solid rgb(115, 100, 45);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

.modal-header {
  padding: 2px 16px;
  background-color: #4c4d49;
  flex: 1 100%;
}

.model-body-left {
  flex: 1 100%;
}

.model-body-right {
  flex: 1 100%;
}

.modal-footer {
  background-color: #4c4d49;
  border-top: 2px solid gold;
  padding: 0.5em;
  flex: 1 100%;
}

@media all and (min-width: 725px) {
  .model-body-left,
  .model-body-right {
    flex: 1 0 50%;
  }
  .modal-content {
    width: 90vw;
    height: 90vh;
  }
}
</style>
