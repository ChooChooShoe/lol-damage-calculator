<template>
  <span>
    <span class="editable-disp" :class="{ 'auto-width': autoWidth, 'is-read-only': readonly }" v-show="!editing" @focus="onFocus" tabindex="0">{{displayValue}}</span>
    <input
      v-show="editing"
      @blur="editing=false"
      ref="input"
      class="editable-input"
      type="number"
      step="1"
      title
      :value="encode(modelValue)"
      :readonly="readonly"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', decode($event.target.value))"
    />
  </span>
</template>

<script>
export default {
  props: {
    modelValue: Number,
    format: String,
    readonly: Boolean,
    placeholder: String,
    autoWidth: Boolean,
  },
  name: "EditableCollapse",
  data: function () {
    return {
      editing: false,
      isValid: true,
      invalidMsg: "",
    };
  },
  computed: {
    ispercent: function () {
      return this.format === "percent";
    },
    displayValue: function () {
      return Math.round(this.encode(this.modelValue) * 100) / 100;
    },
    iconclassComp: function () {
      if (this.iconclass && this.iconclass !== null) return this.iconclass;
      return this.labelclass + "-icon";
    },
  },
  methods: {
    onFocus(ev) {
      this.editing = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
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