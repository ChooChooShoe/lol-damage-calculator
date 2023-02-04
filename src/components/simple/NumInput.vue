<template>
  <div class="numinput__container">
    <input
      ref="input"
      @focus="onFocus"
      @blur="onBlur"
      class="numinput__input"
      type="number"
      :step="1"
      :min="mode === 'negative' ? -Infinity : 0"
      :max="mode === 'percent' ? 100 : Infinity"
      title=""
      :value="encode(modelValue)"
      @input="onInput"
      :readonly="readonly"
      :placeholder="'0'"
    />
    <span class="numinput__textoverlay" @click="input.focus()">{{
      displayValue
    }}</span>
    <span class="numinput__alerticon">
      <div ref="local" class="numinput__tooltip">
        {{ input?.validationMessage }}
      </div>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  modelValue: [Array, Number],
  mode: String,
  index: Number,
  readonly: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const input = ref(null);
const local = ref(null);

const displayValue = computed(() => {
  const val = encode(props.modelValue);
  const x = Math.round(val * 100) / 100;
  if (props.mode === 'percent') return String(x) + '%';
  return x;
});
onMounted(() => {
  //   input.value.validationMessage;
});

function encode(value) {
  let val = value;
  if (Array.isArray(value)) val = value[props.index];

  if (props.mode === 'percent') return +(Math.round(val + 'e+12') + 'e-10');
  return +(Math.round(val + 'e+10') + 'e-10');
}

function decode(val) {
  if (props.mode === 'percent') return parseFloat(val) / 100 || 0;
  return parseFloat(val) || 0;
}

function onInput(ev) {
  const decoded = decode(ev.target.valueAsNumber);
  if (Array.isArray(props.modelValue)) {
    props.modelValue[props.index] = decoded;
    emit('update:modelValue', props.modelValue);
  } else {
    emit('update:modelValue', decoded);
  }
}
function onFocus(ev) {
  ev.target.select();
}

defineExpose({
  displayValue,
  encode,
  decode,
});
</script>

<style>
.numinput__container {
  position: relative;
}
.numinput__container.collapse {
  display: inline-block;
  max-width: 10em;
}

.numinput__textoverlay {
  position: absolute;
  background-color: #121a1b;
  top: 0;
  left: 0;
}
input[type='number'].numinput__input:focus + .numinput__textoverlay,
input[type='number'].numinput__input:hover + .numinput__textoverlay,
input[type='number'].numinput__input + .numinput__textoverlay:hover {
  display: none;
}

input[type='number'].numinput__input,
.numinput__textoverlay {
  font-size: 1.1rem;
  padding: 0.2em 0.5em 0.2em;
  margin: 0.1em;
  box-shadow: none;
  font-family: monospace;
  border: #3a3f44 solid 1px;
  border-radius: 0;
  display: inline;
  width: calc(100% - 25px);
  cursor: text;
  text-indent: 0px;
  line-height: normal;
}

.numinput__input:invalid + .numinput__alerticon {
  display: inline;
}

.numinput__alerticon {
  display: none;
  width: 24px;
  height: 24px;
  color: yellow !important;
}
.numinput__alerticon::before {
  font-size: 1.4rem;
  content: '⚠';
}

.numinput__input:invalid:hover + .numinput__alerticon > .numinput__tooltip,
.numinput__input:invalid + .numinput__alerticon:hover > .numinput__tooltip {
  display: inline;
}

.numinput__tooltip {
  display: none;
  position: absolute;
  top: 34px;
  z-index: 2500;
  white-space: nowrap;
  background: #121a1b;
  padding: 3px;
  border: #9797fc solid 1px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  color: #eee;
}
</style>
