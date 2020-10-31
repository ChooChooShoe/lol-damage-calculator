<template>
  <div class="control">
    <div class="select">
      <input
        class="input champsearch"
        ref="input"
        :value="disp"
        @focus="onFocus"
        @change="onInput($event.target.value)"
        list="ice-cream-flavors"
      />
    </div>
    <datalist id="ice-cream-flavors">
      <template v-for="item in championList" :key="item.id">
        <option :value="item.name"></option>
      </template>
    </datalist>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  name: "ChampSearch",
  data: function () {
    return {
    };
  },
  computed: {
    championList() {
      return this.$root.championList;
    },
    disp() {
      if (this.championList[this.value])
        return this.championList[this.value].name;
      return this.value;
    },
  },
  methods: {
    onInput(value) {
      if (this.championList[value]) {
        console.log("Selected Exact match:", value);
        this.$emit("input", value);
        this.didChange = true;
      } else {
        for (const key in this.championList) {
          const el = this.championList[key];
          if (el.name.toLowerCase().includes(value.toLowerCase())) {
            console.log("Selected champ", el.name, "id", el.id);
            this.$emit("input", el.id);
            this.didChange = true;
            break;
          }
        }
      }
      this.$refs.input.blur();
    },
    onFocus(ev) {
    //   this.oldValue = this.$refs.input.value;
      this.$refs.input.value = "";
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