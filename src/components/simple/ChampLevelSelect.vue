<template>
  <div class="control">
    <label class="label">Champion Level</label>
    <div class="field">
      <div class="control">
        <Editable :value="value" @input="onInput($event)" placeholder="Set Champion Level"></Editable>
        <span class="buttons">
          <input
            :class="{ 'success': value == 1 }"
            type="button"
            class="button"
            value="1"
            @click="onInput(1)"
          />
          <input
            :class="{ 'success': value == 6 }"
            type="button"
            class="button"
            value="6"
            @click="onInput(6)"
          />
          <input
            :class="{ 'success': value == 9 }"
            type="button"
            class="button"
            value="9"
            @click="onInput(9)"
          />
          <input
            :class="{ 'success': value == 11 }"
            type="button"
            class="button"
            value="11"
            @click="onInput(11)"
          />
          <input
            :class="{ 'success': value == 16 }"
            type="button"
            class="button"
            value="16"
            @click="onInput(16)"
          />
          <input
            :class="{ 'success': value == 18 }"
            type="button"
            class="button"
            value="18"
            @click="onInput(18)"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Editable from "./Editable.vue";

export default {
  props: {
    value: Number,
  },
  name: "ChampLevelSelect",
  components: {
    Editable,
  },
  data: function () {
    return {};
  },
  computed: {
    championList() {
      return this.$app.championList;
    },
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);   
    },
  },
};
</script>

<style lang="scss">
.buttons {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>