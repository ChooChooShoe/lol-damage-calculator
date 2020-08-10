<template>
  <div>
    <div>
      <label class="label">Damage Type</label>
    </div>
    <ul class="tabs">
      <button :class=" { 'success': value === 'none' }" @click="handleInput('none')">None</button>
      <button
        class="ad"
        :class=" { 'success': value === 'physical' }"
        @click="handleInput('physical')"
      >Physical</button>
      <button
        class="ap"
        :class=" { 'success': value === 'magic' }"
        @click="handleInput('magic')"
      >Magic</button>
      <button
        class="true"
        :class=" { 'success': value === 'true' }"
        @click="handleInput('true')"
      >True</button>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { spell_ratios } from "../../javascript/league_data";

export default {
  name: "DamageTypeField",
  props: ["value"],
  computed: {},
  methods: {
    handleInput(e) {
      this.$emit("input", e);
    },
  },
};
</script>
<style lang="scss">
.tabs {
  display: flex;
  align-items: stretch;
  justify-content: left;
}
.tabs button {
  border-width: 2px;
  margin-bottom: 0;
}
</style>