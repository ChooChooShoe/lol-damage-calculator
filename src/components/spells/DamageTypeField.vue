<template>
  <DropdownSelect label="Damage Type" class="dtfield" :class="value" :value="value">
    <button :class="{ success: value === 'none' }" @click="handleInput('none')">
      None
    </button>
    <button
      class="ad"
      :class="{ success: value === 'physical' }"
      @click="handleInput('physical')"
    >
      Physical
    </button>
    <button
      class="ap"
      :class="{ success: value === 'magic' }"
      @click="handleInput('magic')"
    >
      Magic
    </button>
    <button
      class="true"
      :class="{ success: value === 'true' }"
      @click="handleInput('true')"
    >
      True
    </button>
  </DropdownSelect>
</template>

<script>
import Vue from "vue";
import { spell_ratios } from "../../javascript/league_data";
import DropdownSelect from "../simple/DropdownSelect";

export default {
  name: "DamageTypeField",
  props: ["value"],
  components: { DropdownSelect },
  computed: {},
  methods: {
    handleInput(e) {
      this.$emit("input", e);
    },
  },
};
</script>
<style>
/* .dtfield .true{
  color:black;
}
.dtfield input {
  width: 2.5em; 
  height: 2.5em;
} */
</style>