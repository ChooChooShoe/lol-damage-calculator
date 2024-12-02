<template>
  <div class="main-full itembuilder">
    <ChampionDiv value="player" mode="player"></ChampionDiv>
    <span class="itembuilder__title">Inventory</span>
    <span class="itembuilder__title">ShopItemInfo</span>
    <ItemInventory
      :inv="player.itemInventory"
      @sellItem="sellItem"
    ></ItemInventory>

    <ShopItemInfo
      :itemId="selectedItem"
      @showInfo="showInfo"
      @buyItem="buyItem"
      @sellItem="sellItem"
    ></ShopItemInfo>
    <h1>Items</h1>
    <div class="button-group">
      <span>Filter Items: </span>
      <label class="button">
        All
        <input
          v-model="itemFilter"
          type="radio"
          name="filter"
          value=""
          checked
        />
      </label>
      <label class="button">
        5v5
        <input
          v-model="itemFilter"
          type="radio"
          name="filter"
          value="classic"
        />
      </label>
      <label class="button">
        ARAM
        <input v-model="itemFilter" type="radio" name="filter" value="aram" />
      </label>
      <label class="button">
        Arena
        <input v-model="itemFilter" type="radio" name="filter" value="arena" />
      </label>
      <label class="button">
        Nexus Blitz
        <input
          v-model="itemFilter"
          type="radio"
          name="filter"
          value="nexus-blitz"
        />
      </label>
    </div>
    <div class="itembox" :data-filter="itemFilter">
      <div
        class="item itembox__header"
        :data-category="key"
        v-for="(x, key) in itemCategories"
        :key="key"
      >
        {{ x }}
      </div>

      <ItemDiv
        :data-maps-aram="item.availability.aram"
        :data-maps-arena="item.availability.arena"
        :data-maps-classic="item.availability.classic"
        :data-maps-nexus-blitz="item.availability.nexusBlitz"
        display="icon"
        @buyItem="buyItem"
        @showInfo="showInfo"
        v-for="item in items"
        :key="item.id"
        :value="item"
      >
      </ItemDiv>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref } from 'vue';

import items, { fromNumber } from '@/model/items/items';
import ChampionDiv from '@/components/ChampionDiv.vue';
import ItemInventory from './components/ItemInventory.vue';
import ShopItemInfo from './components/ShopItemInfo.vue';
import ItemDiv from './components/ItemDiv.vue';
import { player } from '@/global/state';

const itemFilter = ref('');
const selectedItem = ref(1001);

console.log('ItemBuilder setup');

provide('obj', player);
console.log('Providing obj (player) as', player);

const itemCategories = {
  championitems: 'Champion exclusive items',
  distributives: 'Distributed items',
  starters: 'Starter items',
  consumables: 'Potions and Consumables',
  boots: 'Boots',
  basics: 'Basic items',
  epics: 'Epic items',
  legendaries: 'Legendary items',
  mythics: 'Mythic items',
  ornnitems: "Ornn's Mythic item upgrades",
  trinkets: 'Trinkets',
  minionturretitems: 'Minion and Turret items',
  // unsorted: 'Unsorted',
};

const inventory1 = reactive([null, null, null, 3340, null, null, null]);

const buyItem = (itemId) => {
  const item = fromNumber(itemId);
  if (!item) return;
  selectedItem.value = itemId;

  let openIndex = 6;
  if (item.type.includes('Basic Trinket')) openIndex = 3;
  else
    for (const i of [0, 1, 2, 4, 5]) {
      if (!inventory1[i]) {
        openIndex = i;
        break;
      }
    }

  console.log('Buying item:', itemId, 'for index', openIndex);
  inventory1[openIndex] = itemId;
};
const showInfo = (itemId: number) => {
  console.log('showItemInfo', itemId);
  selectedItem.value = itemId;
};
const sellItem = (index: number) => {
  inventory1[index] = undefined;
};
</script>

<style>
.main-full {
  grid-area: 2 / 1 / span 1 / span 2;
  line-height: 1.25;
}
.itembuilder {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  overflow: hidden;
}
.itembuilder > * {
  flex: 2 1 50%;
}
.itembuilder > .item-section {
  /* flex: 1 1 0; */
}
.itembuilder__title {
  font-size: 2rem;
  font-weight: bold;
}

.itembox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
}
.itembox > .item[data-category='championitems'] {
  order: 110;
}
.itembox > .item[data-category='distributives'] {
  order: 32;
}
.itembox > .item[data-category='starters'] {
  order: 10;
}
.itembox > .item[data-category='consumables'] {
  order: 20;
}
.itembox > .item[data-category='boots'] {
  order: 50;
}
.itembox > .item[data-category='basics'] {
  order: 60;
}
.itembox > .item[data-category='epics'] {
  order: 70;
}
.itembox > .item[data-category='legendaries'] {
  order: 80;
}
.itembox > .item[data-category='mythics'] {
  order: 90;
}
.itembox > .item[data-category='ornnitems'] {
  order: 100;
}
.itembox > .item[data-category='trinkets'] {
  order: 30;
}
.itembox > .item[data-category='minionturretitems'] {
  order: 120;
}

.itembox[data-filter='aram'] > .item[data-maps-aram='false'] {
  opacity: 0.1;
  pointer-events: none;
}
.itembox[data-filter='arena'] > .item[data-maps-arena='false'] {
  opacity: 0.1;
  pointer-events: none;
}
.itembox[data-filter='classic'] > .item[data-maps-classic='false'] {
  opacity: 0.1;
  pointer-events: none;
}
.itembox[data-filter='nexus-blitz'] > .item[data-maps-nexus-blitz='false'] {
  opacity: 0.1;
  pointer-events: none;
}

.itembox__header {
  flex: 2 0 100%;
  margin: 0.3em 0;
  font-size: 1.5em;
  font-weight: bold;
  display: block;
}
</style>
