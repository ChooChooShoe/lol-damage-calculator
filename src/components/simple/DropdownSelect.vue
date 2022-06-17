<template>
  <div class="dd-control">
    <label class="dd-label">
      {{ label }}
      <button type="button" class="button dd-select" v-html="value"> </button>
      <div class="dd-content">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "suffix"],
  name: "DropdownSelect",
};
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
  background-color: #181818;
  /* min-width: 160px; */
  /* max-width: 22em; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  border: whitesmoke 1px solid;
  padding: 0.2em 0.2em;
  z-index: 400;
}

.dd-select:focus ~ .dd-content,
.dd-content:active {
  display: block;
}
</style>