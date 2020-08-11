<template>
  <td>
    <input
      @focus="onFocus"
      @blur="onBlur"
      class="editable-input"
      type="text"
      :value="displayValue"
      readonly
    />
  </td>
</template>

<script>
export default {
  props: {
    value: [Number, Array],
    index: Number,
    format: String,
  },
  name: "EditableRO",
  computed: {
    displayValue: function () {
      const x = Math.round(this.exactValue * 100) / 100;
      if (this.format === "percent") return String(x) + "%";
      return x;
    },
    exactValue: function () {
      let val = this.value;
      if (Array.isArray(this.value)) {
        val = val[this.index];
      }
      if (this.format === "percent")
        return +(Math.round(val + "e+12") + "e-10");
      return +(Math.round(val + "e+10") + "e-10");
    },
  },
  methods: {
    onFocus(ev) {
      ev.target.type = "number";
      ev.target.value = this.exactValue;
      ev.target.select();
    },
    onBlur(ev) {
      ev.target.type = "text";
      ev.target.value = this.displayValue;
    },
  },
};
</script>