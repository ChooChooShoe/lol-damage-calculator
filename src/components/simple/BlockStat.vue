<template>
  <div
    :class="[totalClass, bonusClass]"
    class="blockstat field col-12 md:col-6"
  >
    <!-- <NumInput ref="input" class="blockstat__-input total" :mode="mode" :modelValue="total"
      @update:modelValue="x => $emit('update:total', x)"> </NumInput> -->

    <label :for="inputId" :class="labelClass">{{ longtitle || title }}</label>

    <div class="p-inputgroup">
      <!-- <span class="p-inputgroup-addon">$</span> -->

      <slot name="input">
        <InputNumber
          :inputId="inputId"
          :modelValue="total"
          inputClass="blockstat__-input total"
          @update:modelValue="(x) => $emit('update:total', x)"
          mode="decimal"
          locale="en-US"
          :maxFractionDigits="3"
          :suffix="suffix"
          :useGrouping="false"
          :allowEmpty="false"
          showButtons
          :highlightOnFocus="true"
          @focus="
            (e) => {
              tooltip = true;
            }
          "
          @blur="tooltip = false"
          :step="step"
          :min="min"
          :max="max"
        />
      </slot>
      <Button
        icon="pi pi-delete-left"
        class="p-button-danger backspace-icon"
        :class="[totalClass]"
        @click="clearStat()"
      />
    </div>

    <div
      ref="local"
      class="blockstat__tooltipcontent simplebg"
      :data-visable="tooltip"
    >
      <p v-html="title"></p>
      <hr />
      <p>
        <slot name="default"></slot>
      </p>
      <hr />
      <slot name="footer">
        <p>
          Current {{ title }}: <b class="total">{{ total }}</b
          >{{ suffix }}
          <span v-if="hasBase">
            (<b class="base">{{ Math.round(base!) }}</b
            >{{ suffix }} base + <b class="bonus">{{ Math.round(bonus!) }}</b
            >{{ suffix }}
            bonus)
          </span>
        </p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
//Ouside of the setup scope so all BlockStats will update the number.
let refCount = 0;
</script>

<script setup lang="ts">
import { computed, inject, onMounted, ref, toRefs } from 'vue';
import NumInput from './NumInput.vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const props = defineProps<{
  base?: number;
  bonus?: number;
  total: number;
  longtitle?: string;
  title: string;
  // mode?: string
  suffix?: string;
  min?: number;
  max?: number;
  labelClass?: string;
  step?: number;
}>();

const local = ref(null);
const input = ref(null);
const tooltip = ref(false);
const hasBase = props.base !== undefined && props.bonus !== undefined;
const inputId = `BlockStat_${refCount++}`;

const totalClass = computed(() => {
  if (hasBase)
    return props.bonus < -0.005
      ? 'total-lowerd'
      : props.total > props.base + 0.005
        ? 'total-bonus'
        : '';
  else
    return props.total < -0.005
      ? 'total-lowerd'
      : props.total > 0.005
        ? 'total-bonus'
        : '';
});
const bonusClass = computed(() => {
  return hasBase && props.bonus < -0.5 ? 'bonus-lowerd' : '';
});

const emit = defineEmits(['update:bonus', 'update:total']);
const clearStat = () => {
  if (hasBase) {
    emit('update:bonus', 0);
  } else {
    emit('update:total', 0);
  }
};
</script>

<style>
.backspace-icon {
  visibility: hidden;
}

.backspace-icon.total-lowerd,
.backspace-icon.total-bonus {
  visibility: visible;
  fill: #94989c;
}

.blockstat {
  display: block;
}

.blockstat .total,
.blockstat .base {
  color: #bdb2fa;
}

.blockstat.total-bonus .total,
.blockstat .bonus {
  color: #56b952;
}

.blockstat.total-lowerd .total,
.blockstat.bonus-lowerd .bonus {
  color: #c02b2b;
}

.blockstat__tooltipcontent[data-visable='true'] {
  display: block;
}

.blockstat__tooltipcontent {
  display: none;
  position: absolute;
  top: unset;
  left: unset;
  max-width: 550px;
  z-index: 500;
}

.blockstat__tooltipcontent.simplebg {
  background: #121a1b;
  padding: 3px;
  border: #9797fc solid 1px;
  color: #eee;
}

input[type='number'].blockstat__-input,
input[type='text'].blockstat__-input {
  background-color: #282b2c;
  width: 100%;
  display: block;
}
</style>
