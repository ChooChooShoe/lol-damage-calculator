
<template>
  <div class="field is-horizontal">
    <div class="field-label is-small">
      <label :class="[ labelclass ]" class="label">
        <slot></slot>
      </label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control has-addons has-icons-left">
          <input
            class="input is-small"
            type="number"
            step="1"
            title
            :name="dname"
            :id="dname"
            :value="encode(modelValue)"
            @input="$emit('update:modelValue', decode($event.target.value))"
          />
          <span class="icon is-small is-left">
            <i :class="[ iconclassComp ]"></i>
          </span>
        </div>
      </div>

      <div class="control" :class="[ isValid ? 'is-hidden' : '' ]">
        <span class="tag is-warning is-light">{{ invalidMsg }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  props: ["dname", "modelValue", "ispercent", "labelclass", "iconclass"],
  name: "InlineInput",
  data: function() {
    return {
      isValid: true,
      invalidMsg: ""
    };
  },
  computed: {
    displayValue: function() {
      return this.encode(this.modelValue);
    },
    iconclassComp: function() {
      if(this.iconclass && this.iconclass !== null)
        return this.iconclass;
      return this.labelclass + '-icon';
    }
  },
  methods: {
    encode(val) {
      if (val < 0) {
        this.isValid = false;
        this.invalidMsg = "Value is negetive"
      } else this.isValid = true;
      
      if (this.ispercent === true) return +(Math.round(val + "e+12") + "e-10");
      return +(Math.round(val + "e+10") + "e-10");
    },
    decode(val) {
      if (val < 0) {
        this.isValid = false;
        this.invalidMsg = "Value is negetive"
      } else this.isValid = true;

      if (this.ispercent === true) return parseFloat(val) / 100 || 0;
      return parseFloat(val) || 0;
    }
  }
};
</script>