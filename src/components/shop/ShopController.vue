
<template>
  <div id="shop-controller">
    <ShopModal></ShopModal>
    <div id="itemtips" ref="itemtips">
      <template v-for="(val,key) in $app.itemData">
        <ItemTooltip :key="key" :itemId="key" :value="val"></ItemTooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ShopModal from "./ShopModal";
import ItemTooltip from "./ItemTooltip";

export default {
  name: "ShopController",
  components: {
    ShopModal,
    ItemTooltip,
  },
};
</script>
<style>
#itemtips {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 4100;
}
</style>