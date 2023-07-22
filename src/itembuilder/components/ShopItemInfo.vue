<template>
  <div v-if="value" class="item shopinfo" :data-category="value.category">
    <div class="shopinfo__block">
      <span class="shopinfo__title">Builds Into:</span>
      <Item
        display="icon"
        @buyItem="$emit('buyItem', $event)"
        @showInfo="$emit('showInfo', $event)"
        v-for="x in value.to"
        :key="x"
        :value="fromNumber(x)"
      >
      </Item>
    </div>
    <div class="shopinfo__underline"></div>

    <div class="header item" :data-category="value.category">
      <div class="item__img" :style="value.spriteStyle"></div>
      <span class="item__name" v-html="value.name"></span>
      <span class="item__id">&nbsp;({{ value.id }})</span>
      <input
        type="button"
        value="BUY"
        class="buy"
        @click="$emit('buyItem', value.id)"
      />
      <img class="intoimage inline" src="../../assets/Gold.png" />
      <span class="inline gold">{{ displayCost }}</span>
      <!-- <div class="inline" v-if="value.gold.sell != value.gold.total">
          <span>&nbsp;(Sells for:</span>
          <img class="intoimage inline" src="../../assets/Gold.png">
          <span class="inline gold">{{ value.gold.sell }}</span>
          <span>)</span>
        </div> -->
      <div class="inline" v-if="!value.inStore">
        <span>&nbsp;-&nbsp;</span>
        <span class="red">Not In Store</span>
      </div>

      <div>
        <StatsDiv :stats="value.stats"> </StatsDiv>
      </div>

      <div>
        <ItemEffects pkey="c" :itemEffect="value.effects.consume"></ItemEffects>
        <ItemEffects pkey="act" :itemEffect="value.effects.act"></ItemEffects>
        <ItemEffects pkey="p1" :itemEffect="value.effects.pass"></ItemEffects>
        <ItemEffects pkey="p2" :itemEffect="value.effects.pass2"></ItemEffects>
        <ItemEffects pkey="p3" :itemEffect="value.effects.pass3"></ItemEffects>
        <ItemEffects pkey="p4" :itemEffect="value.effects.pass4"></ItemEffects>
        <ItemEffects pkey="p5" :itemEffect="value.effects.pass5"></ItemEffects>
        <ItemEffects pkey="m" :itemEffect="value.effects.mythic"></ItemEffects>
      </div>

      <div class="shopinfo__underline"></div>
      <h4 v-if="value.requiredAlly">Required Ally: {{ value.requiredAlly }}</h4>
      <h4 v-if="value.requiredChampion">
        Required Champion: {{ value.requiredChampion }}
      </h4>
      <div class="item description" v-html="value.description"></div>
      <div class="shopinfo__underline"></div>
      <div class="shopinfo__block">
        <span class="shopinfo__title">Recipe:</span>
        <template v-for="(x, i) in value.from" :key="i">
          <Item
            display="icon"
            @buyItem="$emit('buyItem', $event)"
            @showInfo="$emit('showInfo', $event)"
            :value="fromNumber(x)"
          >
          </Item>
          <span>+</span>
        </template>
        <img src="../../assets/Gold.png" />
        <span class="gold">{{ value.price }}</span>
      </div>
      <div class="item-tags">
        <span>Tags:&nbsp;</span>
        <template v-for="key in value.type">{{ key }}&nbsp;</template>
      </div>
    </div>
  </div>
  <div v-else>No Item Selected</div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import SimpleTooltip from '../../components/SimpleTooltip.vue';
import Item from './Item.vue';
import items, { fromNumber, type Stats } from '@/model/items/items';
import SpellEffects from '@/components/spells/SpellEffects.vue';
// import type { ItemEffects } from '@/model/items/ItemEffectScripts';
import ItemEffects from './ItemEffects.vue';
import StatsDiv from './StatsDiv.vue';

const props = defineProps<{ itemId: number }>();
defineEmits(['showInfo', 'buyItem']);
const visable = ref(false);
const clientX = ref(0);
const clientY = ref(0);
const value = computed(() => fromNumber(props.itemId));
const displayCost = computed(() =>
  value.value?.priceTotal === 0 ? 'Free' : value.value?.priceTotal
);
</script>

<style>
.item__statkey {
  color: red;
}
.item__statvalue {
  color: #e93bc3;
}
.item__mythicpassive {
  font-weight: bold;
  color: #e93bc3;
}
.buy {
  float: right;
  border: 2px solid #aaa;
  margin: 5px;
}
.header {
  min-height: 60px;
  /* font-size: 1.4rem; */
  line-height: 1.2;
  color: #efefef;
  /* display: inline-block; */
  /* padding: 0; */
  /* margin: 2px; */
  /* width: 48px; */
  /* height: 48px; */
  /* border: 2px #644e23 solid; */
  /* box-sizing: content-box; */
  /* background-color: #000000; */
}
.inline {
  display: inline;
}
.shopinfo {
  height: 100%;
  position: relative;
}
.shopinfo__block {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.3rem;
}
.shopinfo__title {
  flex: 1 0 100%;
}
.description {
  margin: 7px;
  max-height: 50vh;
  overflow: auto;
}
.shopinfo__underline {
  border-bottom: white 1px solid;
  margin: 0.5em 0;
}
</style>
