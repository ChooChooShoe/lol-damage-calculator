<template>
  <div class="dd-control">
    <label class="dd-label">
      {{ label }}
      <input type="button" class="button dd-select" :value="value" />
      <div class="dd-content">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
  name: "DropdownSelect",
};
</script>

<style>
.dd-label {
  line-height: 2.5em;
}
.dd-content {
  display: none;
  position: absolute;
  background-color: #181818;
  min-width: 160px;
  max-width: 18em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  border: whitesmoke 1px solid;
  padding: 0.3em 0.5em;
  z-index: 10;
}

.dd-select:focus ~ .dd-content,
.dd-content:active {
  display: block;
}
</style>