<template>
  <div id="shop-controller">
    <ShopModal></ShopModal>
    <div id="itemtips" ref="itemtips">
      <template v-for="(val, key) in $root.itemData" :key="key">
        <ItemTooltip :itemId="key" :value="val"></ItemTooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ShopModal from './ShopModal.vue';
import ItemTooltip from './ItemTooltip.vue';

export default {
  name: 'ShopController',
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
