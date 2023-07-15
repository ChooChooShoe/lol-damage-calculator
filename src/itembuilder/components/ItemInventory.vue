<template>
  <div class="item-section">
    <div class="inv__itemgrid">
      <Item :data-number="1" display="icon" :value="item(0)"> </Item>
      <Item :data-number="2" display="icon" :value="item(1)"> </Item>
      <Item :data-number="3" display="icon" :value="item(2)"> </Item>
      <Item
        class="inv__trinket"
        :data-number="4"
        display="icon"
        :value="item(3)"
      >
      </Item>
      <Item :data-number="5" display="icon" :value="item(4)"> </Item>
      <Item :data-number="6" display="icon" :value="item(5)"> </Item>
      <Item :data-number="7" display="icon" :value="item(6)"> </Item>
    </div>
    <div class="inv__buttons">
      <input type="button" value="Clear Items" @click="inv.sellAll" />
      <input
        type="button"
        value="Buy All Items"
        @click="inv = Object.keys(items)"
      />
      <input type="button" value="Save Items" />
      <a class="button" href="#shop">Shop</a>
    </div>
    <StatsDiv :stats="statsTotal"></StatsDiv>

    <div class="statsdiv">
      <div v-for="(k, v) in activeTotal" :key="v">
        <span class="unique" v-if="k.unique">Active - </span>
        <span>{{ k.name }}: </span>
        <span v-html="k.description"></span>
      </div>
    </div>
    <div class="statsdiv">
      <div v-for="(k, v) in passiveTotal" :key="v">
        <span class="unique" v-if="k.unique">Passive - </span>
        <span>{{ k.name }}: </span>
        <span v-html="k.description"></span>
      </div>
    </div>
    <div>
      <UniqueItemEffectDamageSource
        v-for="script in inv.getUniqueItemEffects()"
        :key="script.itemData.id"
        :script="script"
      ></UniqueItemEffectDamageSource>
    </div>

    <h2>Limits:</h2>
    <div v-for="(k, v) in collect('limit')" :key="v" v-html="k"></div>
    <h2>types:</h2>
    <div v-for="(k, v) in collect('type')" :key="v" v-html="k"></div>
    <!-- <h2>category:</h2> -->
    <!-- <div v-for="(k, v) in collect('category')" :key="v" v-html="k"></div> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import items from '@/model/items/items';
import StatsDiv from './StatsDiv.vue';
import Item from './Item.vue';
import type { ItemInventory } from '@/model/ItemInventory';
import SpellImage from '@/timeline/SpellImage.vue';
import SpellEffects from '@/components/spells/SpellEffects.vue';
import UniqueItemEffectDamageSource from './UniqueItemEffectDamageSource.vue';

const props = defineProps<{ inv: ItemInventory }>();
const emit = defineEmits(['sellItem']);

const item = (index: number) => {
  return items[props.inv[index]];
};

/// TEST
// const ret = { stats: {}, spec: [] };
// for (const item of Object.values(items)) {
//   if (!item || !item.stats) continue;
//   for (const [stat, val] of Object.entries(item.stats)) {
//     if (stat.startsWith("spec")) {
//       ret.spec.push(val);
//     } else ret.stats[stat] = (ret.stats[stat] || 0) + val;
//   }
// }
// console.log(ret);
/// TEST
// const ret = { effects: {}, spec: [] };
// for (const item of Object.values(items)) {
//   if (!item || !item.effects) continue;
//   for (const [stat, val] of Object.entries(item.effects)) {
//     if (!ret.effects[stat]) {
//       ret.effects[stat] = [];
//     }
//     ret.effects[stat].push(val);
//   }
// }
// console.log(ret);
/// TEST

const collect = (key) => {
  const coll = [];
  for (const index in props.inv) {
    const item = items[props.inv[index]];
    if (!item) continue;
    if (item[key]) coll.push(item[key]);
  }
  return coll;
};

const limitsTotal = computed(() => {
  const limitsTotal = [];
  for (const index in props.inv) {
    const item = items[props.inv[index]];
    if (!item) continue;
    if (item.limit) limitsTotal.push(item.limit);
  }
  return limitsTotal;
});

const statsTotal = computed(() => {
  const ret = { stats: {}, spec: [] };
  for (const index in props.inv) {
    const item = items[props.inv[index]];
    if (!item || !item.stats) continue;
    for (const [stat, val] of Object.entries(item.stats)) {
      if (stat.startsWith('spec')) {
        // spec and spec2 are unique.
        if (!ret.spec.includes(val)) ret.spec.push(val);
      } else ret.stats[stat] = (ret.stats[stat] || 0) + val;
    }
  }
  return ret;
});
const passiveTotal = computed(() => {
  const passiveTotal = [];
  for (const index in props.inv) {
    const item = items[props.inv[index]];
    if (!item) continue;
    if (item.effects.pass) passiveTotal.push(item.effects.pass);
    if (item.effects.pass2) passiveTotal.push(item.effects.pass2);
    if (item.effects.pass3) passiveTotal.push(item.effects.pass3);
    if (item.effects.pass4) passiveTotal.push(item.effects.pass4);
    if (item.effects.pass5) passiveTotal.push(item.effects.pass5);
    if (item.effects.pass6) passiveTotal.push(item.effects.pass6);
  }
  const seen = {};
  return passiveTotal.filter(function (item) {
    return seen.hasOwnProperty(item.description)
      ? false
      : (seen[item.description] = true);
  });
});
const activeTotal = computed(() => {
  const activeTotal = [];
  for (const index in props.inv) {
    const item = items[props.inv[index]];
    if (!item) continue;
    if (item.effects.act) activeTotal.push(item.effects.act);
    if (item.effects.act2) activeTotal.push(item.effects.act2);
  }
  const seen = {};
  return activeTotal.filter(function (item) {
    return seen.hasOwnProperty(item.description)
      ? false
      : (seen[item.description] = true);
  });
});
</script>

<style>
.item-section {
  background-color: rgb(69, 73, 76);
  border: 1px solid gold;
  padding: 10px;
  /* border-radius: 3px; */
  /* margin: auto; */
}
.inv__trinket {
  transform: scale(90%) translate(-2px, 2px);
}

.inv__itemgrid {
  display: inline-block;
  overflow: visible;
  width: calc(56px * 4);
}

.item[data-number]::before {
  content: attr(data-number);
  position: absolute;
  z-index: 3;
  margin: 34px 0 0 -3px;
  font-size: 17px;
  text-decoration-color: #121a1b;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.inv__buttons {
  display: inline-block;
  width: calc(56px * 4);
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
