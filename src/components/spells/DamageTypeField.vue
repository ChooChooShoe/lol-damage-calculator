<template>
  <DropdownSelect label="Damage Type" class="dtfield" :class="modelValue" :value="modelValue">
    <button :class="{ success: modelValue === 'none' }" @click="handleInput('none')">
      None
    </button>
    <button
      class="ad"
      :class="{ success: modelValue === 'physical' }"
      @click="handleInput('physical')"
    >
      Physical
    </button>
    <button
      class="ap"
      :class="{ success: modelValue === 'magic' }"
      @click="handleInput('magic')"
    >
      Magic
    </button>
    <button
      class="true"
      :class="{ success: modelValue === 'true' }"
      @click="handleInput('true')"
    >
      True
    </button>
  </DropdownSelect>
</template>

<script>
import { spell_ratios } from "../../javascript/league_data";
import DropdownSelect from "../simple/DropdownSelect.vue";

export default {
  name: "DamageTypeField",
  props: ["modelValue"],
  components: { DropdownSelect },
  computed: {},
  methods: {
    handleInput(e) {
      this.$emit('update:modelValue', e);
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