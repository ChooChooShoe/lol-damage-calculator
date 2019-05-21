
<template>
  <input
    class="input numinput"
    type="number"
    step="1"
    title
    :name="dname"
    :id="dname"
    :value="encode(value)"
    v-on:input="$emit('input', decode($event.target.value))"
  >
</template>

<script>
export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  props: ["dname", "value", "ispercent"],
  name: "data-input",
  computed: {
    displayValue: function() {
      return this.encode(this.value);
    }
  },
  methods: {
    encode(val) {
      if (this.ispercent === true) return +(Math.round(val + "e+12") + "e-10");
      return +(Math.round(val + "e+10") + "e-10");
    },
    decode(val) {
      if (this.ispercent === true) return parseFloat(val) / 100 || 0;
      return parseFloat(val) || 0;
    }
  }
};
</script>

<style scoped>
</style>
