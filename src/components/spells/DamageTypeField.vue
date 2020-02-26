<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Damage Type</label>
    </div>
    <div class="field-body tabs is-left is-toggle">
      <ul>
        <li :class=" { 'is-active': value === 'none' }">
          <a @click="handleInput('none')">None</a>
        </li>
        <li :class=" { 'is-active': value === 'physical' }">
          <a @click="handleInput('physical')" class="ad">Physical</a>
        </li>
        <li :class=" { 'is-active': value === 'magic' }">
          <a @click="handleInput('magic')" class="ap">Magic</a>
        </li>
        <li :class=" { 'is-active': value === 'true' }">
          <a @click="handleInput('true')">True</a>
        </li>
      </ul>
    </div>
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
    }
  }
};
</script>