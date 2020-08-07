<template>
  <div class="control">
    <div class="select">
      <p class="input champsearch" v-show="!editing" @focus="onFocus" tabindex="0">{{disp}}</p>
      <input
        v-show="editing"
        @blur="editing=false"
        class="input champsearch"
        ref="input"
        :value="value"
        @change="onInput($event.target.value)"
        @keypress="onkeyPress"
        list="ice-cream-flavors"
      />
    </div>
    <datalist id="ice-cream-flavors">
      <template v-for="item in championList">
        <option :key="item.id" :value="item.name"></option>
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
      champName: "",
      editing: false,
    };
  },
  computed: {
    championList() {
      return this.$app.championList;
    },
    disp() {
      if (this.championList[this.value])
        return this.championList[this.value].name;
      return this.value;
    },
  },
  methods: {
    onkeyPress(ev) {
      console.log("onkeyPress", ev);
    },
    onInput(value) {
      if (this.championList[value]) {
        console.log("Selected Exact match:", value);
        this.$emit("input", value);
      } else {
        for (const key in this.championList) {
          const el = this.championList[key];
          if (el.name.toLowerCase().includes(value.toLowerCase())) {
            console.log(
              "Selected and found matched champ",
              el.name,
              "id",
              el.id
            );
            this.$emit("input", el.id);
            break;
          }
        }
      }
      this.$refs.input.blur();
    },
    onFocus(ev) {
      this.editing = true;
      this.$nextTick(function () {
        console.log(this.$refs);
        this.$refs.input.focus();
        this.$refs.input.value = "";
        this.$refs.input.select();
      });
    },
    encode(val) {
      if (val < 0) {
        this.isValid = false;
        this.invalidMsg = "Value is negetive";
      } else this.isValid = true;

      if (this.ispercent === true) return +(Math.round(val + "e+12") + "e-10");
      return +(Math.round(val + "e+10") + "e-10");
    },
    decode(val) {
      if (val < 0) {
        this.isValid = false;
        this.invalidMsg = "Value is negetive";
      } else this.isValid = true;

      if (this.ispercent === true) return parseFloat(val) / 100 || 0;
      return parseFloat(val) || 0;
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