<template>
  <div class="control">
    <div class="select">
      <input
        class="input champsearch"
        ref="input"
        :value="disp"
        @focus="onFocus"
        @change="onInput($event.target.value)"
        list="list-of-champions"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    champ: String,
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
      if (this.championList[this.champ])
        return this.championList[this.champ].name;
      return this.champ;
    },
  },
  methods: {
    onInput(value) {
      if (this.championList[value]) {
        console.log("Selected Exact match:", value);
        this.$emit('update:champ', value);
        this.didChange = true;
      } else {
        for (const key in this.championList) {
          const el = this.championList[key];
          if (el.name.toLowerCase().includes(value.toLowerCase())) {
            console.log("Selected champ", el.name, "id", el.id);
            this.$emit('update:champ', el.id);
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