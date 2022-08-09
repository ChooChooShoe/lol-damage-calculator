
<template>
  <span v-if="Array.isArray(list)">
    <template v-for="(x, i) in list" :key="i">
      <span v-if="i != 0" class="ss-noclick">/</span>
      <span :class="{ spelleffect: rankindex == i }" class="ss-click" @click="rankindex = i">
        {{ x }}
      </span>
    </template>
  </span>
  <span v-else class="spelleffect">
    {{ list }}
  </span>
</template>

<script>
// A SpellSpan
// ex. 15 / 14 / 13 / 12 / 11
export default {
  name: "SpellSpan",
  props: {
    list: [Array, Number, String],
  },
  inject: ["rankindex"],
};
</script>

<style>
.ss-click {
  cursor: pointer;
  padding: 0.5em;
  margin: -0.5em;
}
.ss-noclick {
  pointer-events: none;
  margin: 0.33em;
}
.ss-click:hover {
  color: yellow;
}
</style>
