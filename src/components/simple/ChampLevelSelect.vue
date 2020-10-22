<template>
  <DropdownSelect label="Champion Level" class="lvlselect" :value="value">
    <input
      v-for="n in 18"
      :key="n"
      :class="{ success: value == n }"
      type="button"
      class="button lvlselect"
      :value="n"
      @click="onInput(n)"
  /></DropdownSelect>
</template>

<script>
import DropdownSelect from "./DropdownSelect";
export default {
  props: {
    value: Number,
  },
  name: "ChampLevelSelect",
  components: { DropdownSelect },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style>
.lvlselect .dd-select {
  width: 2.5em; 
  height: 2.5em;
}
input.lvlselect{
  width: 2.5em; 
  height: 2.5em;
}
</style>