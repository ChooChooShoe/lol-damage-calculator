<template>
  <button
    class="simple--edit-btn"
    :class="{ active: modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
  ></button>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
};
</script>

<style>
.simple--edit-btn:before {
  content: "\25bc  Edit";
  color: #ddd;
}
.simple--edit-btn.active:before {
  content: "\25b2  Done";
  color: #52ff52;
}
.simple--edit-btn {
  float: right;
  min-width: 6em;
}

.simple--editmode-content.active {
  max-height: 1000px !important;
  overflow: hidden !important;
  transition: max-height 0.2s ease-in;
}
.simple--editmode-content {
  max-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
  transition: max-height 0.2s ease-out;
}
</style>