<template>
  <DropdownSelect label="Champion Level" class="lvlselect" :value="level">
    <input
      v-for="n in 18"
      :key="n"
      :class="{ success: level == n }"
      type="button"
      class="button lvlselect"
      :value="n"
      @click="$emit('update:level', n)"
    />
  </DropdownSelect>
</template>

<script lang="ts">
import DropdownSelect from './DropdownSelect.vue';
export default {
  props: {
    level: Number,
  },
  components: { DropdownSelect },
};
</script>

<style>
.lvlselect .dd-select {
  width: 2.5em;
  height: 2.5em;
}

input.lvlselect {
  width: 2.5em;
  height: 2.5em;
}
</style>
