<template>
  <div class="dd-control">
    <label class="dd-label">
      {{ label }}
      <button type="button" class="button dd-select">
        <slot name="value">{{ value }}</slot>
        <div class="dd-content" :class="{ selected: selected }">
          <slot></slot>
        </div>
      </button>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selected = ref(false);

const props = defineProps<{
  label: string;
  value?: any;
}>();
function click(event: MouseEvent) {
  selected.value = true;
  // document.addEventListener('click', (ev) => { selected.value = false }, { passive: true });
}
</script>

<style>
.dd-control {
  display: inline-block;
}

.dd-label {
  line-height: 1em;
  cursor: pointer;
}

.dd-content {
  display: none;
  position: absolute;
  top: 2rem;
  left: 0;
  background-color: #181818;
  height: auto;
  width: auto;
  /* min-width: 160px; */
  /* max-width: 22em; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  border: whitesmoke 1px solid;
  /* padding: 0.2em 0.2em; */
  z-index: 400;
}

.dd-select:focus > .dd-content,
.dd-select:focus-within > .dd-content,
.dd-content:active {
  display: block;
}
</style>
