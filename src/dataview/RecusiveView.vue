<template>
  <template :key="idx" v-for="(v, k, idx) in val">
    <p v-if="k === 'image'">
      <span class="key image-key">
        {{ k }}: <br /><SpellImage :image="v"></SpellImage>full: {{ v.full }} <br />
        sprite: {{ v.sprite }} ({{ v.x }},{{ v.y }})
      </span>
    </p>
    <p v-else-if="k === 'cooldown' || k === 'cost'">
      <span class="key image-key">{{ k }}:</span> <span class="val">{{ v }}</span> : <SpellSpan :list="v"></SpellSpan>
    </p>
    <p v-else-if="typeof v === 'object'">
      <span class="key">{{ k }}:</span> {
      <RecusiveView :val="v"></RecusiveView>
      }
    </p>
    <p v-else-if="(k && k.indexOf && k.indexOf('Html') != -1 )|| (v && v.indexOf && v.indexOf('<') === 0)">
      <span class="key">{{ k }}:</span> <span class="val html-val" v-html="v"></span>
    </p>
    <p v-else>
      <span class="key">{{ k }}:</span> <span class="val">{{v}}</span>
    </p>
  </template>
</template>

<script setup>
import SpellImage from "../timeline/SpellImage.vue";
import SpellSpan from "../components/SpellSpan.vue";
import { provide, reactive } from "@vue/runtime-core";
const props = defineProps({ val: Object });

provide("rootspell", reactive({ rankindex: 0 }));
</script>

<style>
.FullModel p {
  margin-left: 20px;
}
.FullModel .key {
  color: rgb(255, 95, 95);
}
.FullModel .val {
  color: rgb(235, 235, 235);
}
.FullModel .html-val {
  color: white;
  display: block;
  padding: 3px;
  border: 2px rgb(110, 110, 38) solid;
}
.FullModel .image-key {
  padding: 2px;
  display: inline-block;
  white-space: nowrap;
}
.FullModel .image-key .spell-image {
  float: left;
}
</style>
