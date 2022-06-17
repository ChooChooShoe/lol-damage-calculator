<template>
  <div class="control champsearch">
    <div class="select">
      <input class="input champsearch" ref="input" :value="champ" @focus="onFocus" @focusout="unFocus" @change="onInput($event.target.value)" list="list-of-champions" />
    </div>
  </div>
</template>

<script>
import championList from "/src/api/ChampionList.json";

export default {
  props: {
    champ: String,
    mode: String,
  },
  name: "ChampSearch",
  methods: {
    onInput(value) {
      const route = { params: {} };
      route.params[this.mode] = value;
      this.$router.push(route);
      this.$refs.input.blur();
    },
    onFocus(ev) {
      this.$refs.input.value = "";
    },
    unFocus(ev) {
      this.$refs.input.value = this.champ;
    },
  },
};
</script>

<style>
.champsearch {
  display: inline-block;
  width: 200px !important;
  cursor: text;
}
</style>