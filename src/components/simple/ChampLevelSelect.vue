<template>
  <div class="control">
    <label class="label">
      Champion Level
      <input type="button" class="button lvlselect" :value="value" />
      <div class="lvlselect-content">
        <input
          v-for="n in 18"
          :key="n"
          :class="{ success: value == n }"
          type="button"
          class="button lvlselect"
          :value="n"
          @click="onInput(n)"
        />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  name: "ChampLevelSelect",
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style>
.label {
  line-height: 2.5em;
}
.lvlselect-content {
  display: none;
  position: absolute;
  background-color: #181818;
  min-width: 160px;
  max-width: 18em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border: whitesmoke 1px solid;
  padding: 0.3em 0.5em;
  z-index: 10;
}

.lvlselect:focus ~ .lvlselect-content,
.lvlselect-content:active {
  display: block;
}

.lvlselect,
.lvlselect-content > input {
  width: 2.5em;
  height: 2.5em;
}
</style>