<template>
  <td>
    <input
      @focus="onFocus"
      @blur="onBlur"
      class="editable-input"
      type="text"
      step="1"
      :value="displayValue"
      :readonly="readonly"
      :placeholder="placeholder"
      @input="onInput"
    />
    <i v-if="!validity" class="alert-icon" @mousemove="draw" @mouseout="hide">
      <div ref="local" class="tooltipcontent simplebg" style="display:none;">{{validationMessage}}</div>
    </i>
  </td>
</template>

<script>

export default {
  props: {
    modelValue: [Number, Array, String],
    index: Number,
    format: String,
    readonly: Boolean,
    placeholder: String,
    autoWidth: Boolean,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },
  name: "Editable",
  data: function () {
    return {
      editing: false,
      validity: true,
      validationMessage: "",
    };
  },
  watch: {
    modelValue: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(rawValue, _oldVal) {
        const v = this.encode(rawValue);
        if (isNaN(v)) {
          this.validationMessage = `The value '${v}' needs to be a number.`;
          this.validity = false;
        } else if (!isFinite(v)) {
          this.validationMessage = `The value '${v}' is not a finite number.`;
          this.validity = false;
        } else if (v < this.min) {
          this.validationMessage = `The value '${v}' must be greater than or equal to ${this.min}.`;
          this.validity = false;
        } else if (v > this.max) {
          this.validationMessage = `The value '${v}' must be less than or equal to ${this.max}.`;
          this.validity = false;
        } else this.validity = true;
      },
    },
  },
  computed: {
    exactValue: function () {
      return this.encode(this.modelValue);
    },
    displayValue: function () {
      const x = Math.round(this.exactValue * 100) / 100;
      if (this.format === "percent" && !this.editing) return String(x) + "%";
      return x;
    },
  },
  methods: {
    draw: function (e) {
      const style = `left:${e.clientX + 10}px;top:${e.clientY + 10}px;`;
      this.$refs.local.setAttribute("style", style);
    },
    hide: function () {
      this.$refs.local.setAttribute("style", `display:none;`);
    },
    onFocus(ev) {
      this.editing = true;
      ev.target.value = "this.exactValue";
      ev.target.type = "number";
      ev.target.select();
    },
    onBlur(ev) {
      this.editing = false;
      ev.target.type = "text";
      ev.target.value = this.displayValue;
    },
    onInput(ev) {
      const decoded = this.decode(ev.target.valueAsNumber);
      if (Array.isArray(this.modelValue)) {
        this.modelValue[this.index] = decoded;
        // return this.value;
        this.$emit('update:modelValue', this.modelValue);
      } else {
        this.$emit('update:modelValue', decoded);
      }
    },
    encode(val) {
      if (Array.isArray(val)) {
        val = val[this.index];
      }
      if (this.format === "percent")
        return +(Math.round(val + "e+12") + "e-10");
      return +(Math.round(val + "e+10") + "e-10");
    },
    decode(val) {
      if (this.format === "percent") return parseFloat(val) / 100 || 0;
      return parseFloat(val) || 0;
    },
  },
};
</script>

<style>
.tooltiplink {
  border-bottom: whitesmoke 1px dotted;
}
.tooltiplink.help {
  cursor: help;
}
.tooltiplink.link {
  border: none;
  cursor: pointer;
}
.tooltiplink.link:hover {
  text-decoration: underline;
}
.tooltipcontent {
  position: fixed;
  z-index: 2500;
}
.tooltipcontent.simplebg {
  background: #121a1b;
  padding: 3px;
  border: #9797fc solid 1px;
  color: #eee;
}

.editable-disp {
  font-size: 0.9em;
  line-height: 1.3em;
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

/* .editable-input {
  font-size: 0.9em;
  display: inline-block;
  width: 8em;
  line-height: 1.5em;
  color: #eeeeee;
  background-color: #3a3f44;
  padding: 0.25em;
  border: 1px solid #3a3f44;
  border-radius: 0.2em;
} */
.editable-input:read-only {
  border-color: transparent;
  background-color: transparent;
}
.editable-input:focus {
  border-color: #ff7200;
  outline: none;
}
</style>