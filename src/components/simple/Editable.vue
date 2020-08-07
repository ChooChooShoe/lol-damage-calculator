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
      :value="encode(value)"
      :readonly="readonly"
      :placeholder="placeholder"
      @input="$emit('input', decode($event.target.value))"
    />
  </span>
</template>

<script>
export default {
  props: {
    value: Number,
    format: String,
    readonly: Boolean,
    placeholder: String,
    autoWidth: Boolean,
  },
  name: "Editable",
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
      return Math.round(this.encode(this.value) * 100) / 100;
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
        console.log(this.$refs);
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

<style>
.editable-disp {
  font-size: 0.9em;
  line-height: 1.5em;
  display: inline-block;
  color: #eeeeee;
  width: 8em;
  background-color: #3a3f44;
  padding: 0.25em;
  border: 1px solid #3a3f44;
  margin: 0;
  cursor: text;
  border-radius: 0.2em;
}
.editable-disp.auto-width {
  width: auto;
}
.editable-disp.is-read-only {
  border-color: transparent;
  background-color: transparent;
}
.editable-disp:focus,
.editable-disp:hover {
  border-color: #ff7200;
  outline: none;
}

.editable-input {
  font-size: 0.9em;
  display: inline-block;
  width: 8em;
  line-height: 1.5em;
  color: #eeeeee;
  background-color: #3a3f44;
  padding: 0.25em;
  border: 1px solid #3a3f44;
  border-radius: 0.2em;
}
.editable-input:read-only {
  border-color: transparent;
  background-color: transparent;
}
.editable-input:focus {
  border-color: #ff7200;
  outline: none;
}
</style>