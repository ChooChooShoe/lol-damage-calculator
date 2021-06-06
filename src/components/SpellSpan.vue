
<template>
  <span v-if="Array.isArray(list)">
    <template v-for="(x, i) in list" :key="i">
      {{ i != 0 ? " / " : "" }}
      <span :class="{ spelleffect: rootspell.value.rankindex == i }" class="ss-click" @click="rootspell.value.rankindex = i">
        {{ x }}
      </span>
    </template>
  </span>
  <span v-else class="spelleffect ss-click">
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
  inject: ["rootspell"],
};
</script>

<style>
.ss-click {
  cursor: pointer;
}
.ss-click:hover {
  color: yellow;
}
</style>
