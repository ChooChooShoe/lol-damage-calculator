<template>
  <DropdownSelect suffix="damage" class="dtfield" :class="modelValue" :value="displayValue">
    <button :class="{ success: modelValue === 'none' }" @click="$emit('update:modelValue', 'none')">None</button>
    <button class="ad" :class="{ success: modelValue === 'physical' }" @click="$emit('update:modelValue', 'physical')">Physical</button>
    <button class="ap" :class="{ success: modelValue === 'magic' }" @click="$emit('update:modelValue', 'magic')">Magic</button>
    <button class="true" :class="{ success: modelValue === 'true' }" @click="$emit('update:modelValue', 'true')">True</button>
  </DropdownSelect>
</template>

<script>
import { computed } from "vue";
import DropdownSelect from "../simple/DropdownSelect.vue";

export default {
  name: "DamageTypeField",
  props: { modelValue: String },
  components: { DropdownSelect },
  setup(props) {
    return {
      displayValue: computed(() => {
        switch (props.modelValue) {
          case "physical":
            return `<span class="ad">physical damage</span>`;
          case "magic":
            return `<span class="ap">magic damage</span>`;
          case "true":
            return `<span class="true">true damage</span>`;
          default:
            return `<span class="true">non-damaging ability</span>`;
        }
      }),
    };
  },
};
</script>
<style>
.dtfield {
  display: inline-block;
}
.dtfield button.dd-select {
  /* width: 2.5em;  */
  height: 2em !important;
  margin: 0.5em !important;
  padding: 0 0.5em !important;
}
</style>